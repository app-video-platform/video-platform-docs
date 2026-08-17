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

