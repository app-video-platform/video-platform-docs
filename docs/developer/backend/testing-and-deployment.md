---
title: Testing and Deployment
sidebar_position: 10
---

# Testing and Deployment

## Local requirements

- Java 17
- Maven Wrapper from the repository
- PostgreSQL for normal local startup
- required runtime environment variables for database and integrations

The test profile uses H2. The current compiler/Lombok combination fails under
the local Java 25 default, so select Java 17 before invoking Maven.

## Commands

Run from `video-platform`:

```bash
./mvnw test
./mvnw package
./mvnw spring-boot:run
```

Run focused tests while iterating and the full suite before completing a
backend change whenever practical.

## Test layers

The current suite includes:

- converter unit tests
- security and authentication service tests
- Product strategy routing tests
- Quiz validation and scoring tests
- file-access tests
- controller integration tests for Auth roles, Admin, Products, authoring,
  ownership, entitlements, and Quizzes
- database constraint tests for the single-role invariant
- OpenAPI integration coverage
- application context smoke coverage

For a new feature, test the layer where its rule lives. Authorization and
parent-child resource rules should have integration tests, not only service
mocks.

## OpenAPI validation

`OpenApiDocsIntegrationTest` checks generated documentation. When a controller,
DTO, documented response, or route changes, update the Springdoc interface and
OpenAPI test together.

## Database validation

H2 helps exercise JPA behavior but does not replace PostgreSQL migration
validation. PostgreSQL-specific extensions, trigram indexes, SQL syntax, and
table-per-class queries require deliberate review or a PostgreSQL-backed test
environment.

## CI/CD

`.github/workflows/ci-cd-dokku.yml` runs for pushes and pull requests targeting
`main`.

The workflow:

1. Checks out the repository.
2. Sets up Temurin Java 17 with Maven caching.
3. Runs `./mvnw -B -ntp test`.
4. On a successful push to `main`, configures deployment SSH credentials.
5. Pushes the tested revision to the configured Dokku application.

Pull requests test but do not deploy. A push to `main` deploys only after the
test job succeeds.

## Dokku runtime

The application is deployed to Dokku on a DigitalOcean Droplet and connects to
PostgreSQL. Dokku/Nginx routes external traffic to the Spring Boot application.

Deployment-specific hostnames, ports, SSH material, database credentials, and
provider secrets belong in repository secrets, Dokku configuration, or other
managed environment configuration—not in source or documentation.

## Read-only test diagnostics

These steps are for a development or staging database with disposable test
data. Run Dokku commands on the Droplet, not on the local machine. Check that
application logs redact passwords, tokens, and sensitive request bodies before
granting log access.

1. Create a separate non-root Unix observer with an SSH key. Keep it out of the
   `sudo`, `dokku`, and `docker` groups. Add only its public key to the server;
   keep the private key outside the repository. Give the observer one fixed
   log wrapper at `/usr/local/sbin/read-app-logs`, owned by root with mode
   `755`. Replace `APP_NAME` with the Dokku app name:

   ```sh
   #!/bin/sh
   exec /usr/bin/dokku logs APP_NAME --num 200
   ```

   Allow only that wrapper without arguments in a root-owned
   `/etc/sudoers.d/observer-logs` file with mode `440`:

   ```text
   observer ALL=(root) NOPASSWD: /usr/local/sbin/read-app-logs ""
   ```

   Validate it with `visudo -cf /etc/sudoers.d/observer-logs` and test the
   command as the observer. Do not grant unrestricted Dokku or Docker access.

2. Create a separate PostgreSQL login for inspection. As a database
   administrator, grant it `CONNECT` on the test database, `USAGE` on the
   relevant schema, and `SELECT` on existing tables. Do not grant table writes,
   schema creation, or administration privileges. Set a short
   `statement_timeout` to limit expensive queries. For example, replace the
   database and role names before running these statements in psql:

   ```sql
   CREATE ROLE test_reader LOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE NOREPLICATION;
   GRANT CONNECT ON DATABASE test_database TO test_reader;
   GRANT USAGE ON SCHEMA public TO test_reader;
   GRANT SELECT ON ALL TABLES IN SCHEMA public TO test_reader;
   ALTER ROLE test_reader SET default_transaction_read_only = on;
   ALTER ROLE test_reader SET statement_timeout = '10s';
   ```

   Set the password using psql's interactive `\password test_reader` command
   on its own line, rather than putting a password in SQL or shell history.
   After a Liquibase migration adds tables, grant `SELECT` on the new tables
   or configure default privileges for the role that creates them.

3. Keep the Dokku PostgreSQL service linked to the app internally. Verify that
   no external database client depends on the current host mapping, then bind
   any host port needed for diagnostics to `127.0.0.1`. Block inbound
   PostgreSQL ports in the Droplet firewall. The host listener should show
   `127.0.0.1:5432`, with no `0.0.0.0:5432` or `[::]:5432` listener:

   ```bash
   dokku postgres:links SERVICE_NAME
   dokku postgres:unexpose SERVICE_NAME
   dokku postgres:expose SERVICE_NAME 127.0.0.1:5432
   ss -lnt | grep ':5432'
   ```

4. From the local machine, open an SSH tunnel through the observer account.
   Replace the placeholders:

   ```bash
   ssh -i ~/.ssh/<observer-key> -N \
     -L 127.0.0.1:15432:127.0.0.1:5432 <observer-user>@<droplet-host>
   ```

   Keep the tunnel open during testing. PostgreSQL clients can then connect to
   `127.0.0.1:15432` with the diagnostic role. For unattended local queries,
   store its password in `~/.pgpass` with mode `600`. Never commit the populated
   file:

   ```text
   127.0.0.1:15432:<database>:<reader-user>:<password>
   ```

   Verify that `psql -w` reports the diagnostic role and that the restricted
   log command works without a root login. Load a passphrase-protected SSH key
   into the local SSH agent before unattended runs. When access is no longer
   needed, remove the observer's SSH key and sudoers entry and revoke the
   PostgreSQL login.

## Change checklist

For backend behavior changes:

- update implementation and focused tests
- add a Liquibase migration for schema changes
- update Springdoc/OpenAPI for contract changes
- check frontend contract compatibility
- update backend `PROJECT_CONTEXT.md` for architecture/domain changes
- update Docusaurus product or backend developer pages
- explicitly report when documentation does not need an update

## Related pages

- [Local Setup](../local-setup.md)
- [API and Swagger](./api-and-swagger.md)
- [Persistence and Data Model](./persistence-and-data-model.md)

