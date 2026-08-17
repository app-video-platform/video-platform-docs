---
title: Authentication and Security
sidebar_position: 4
---

# Authentication and Security

## Authentication model

The backend uses stateless Spring Security with JWT authentication. It does not
create an application HTTP session.

Successful local or Google authentication sets three cookies:

| Cookie | Browser visibility | Purpose |
|---|---|---|
| `JWT_TOKEN` | HTTP-only | Short-lived access token |
| `REFRESH_TOKEN` | HTTP-only | Refresh-token rotation |
| `XSRF-TOKEN` | JavaScript-readable | Double-submit CSRF token |

The JWT subject is the user's UUID. The token also carries email and role
claims. The current access and CSRF cookies are configured for one hour; the
refresh cookie is configured for seven days.

## Registration and verification

Registration:

1. Rejects an email that already exists.
2. Hashes the password with BCrypt.
3. Creates a disabled account with the single `USER` role.
4. Creates and sends an email-verification token.

Local login rejects an unverified account. Verification enables the account
through the verification-token flow.

There is no current backend forgot-password controller flow.

## Refresh and logout

Refresh reads the `REFRESH_TOKEN` cookie, validates it, deletes the old token,
and issues a new access/refresh/CSRF cookie set.

Logout expires all three cookies. A complete security change should verify
domain, path, `Secure`, `SameSite`, and cross-origin credential behavior against
the deployed frontend domain.

## CSRF

Spring Security's built-in CSRF mechanism is disabled intentionally. The custom
`CsrfFilter` checks `POST`, `PUT`, `PATCH`, and `DELETE` requests by comparing:

- the `XSRF-TOKEN` cookie
- the `X-XSRF-TOKEN` request header

Login, logout, refresh, and Google sign-in are excluded from this custom check.
Other state-changing authentication routes, including registration, still pass
through the filter, so client behavior and tests must remain aligned with the
filter's exact exclusions.

## Authorization layers

Authorization is enforced at more than one layer:

1. `SecurityConfig` defines public and authenticated URL families.
2. `@PreAuthorize` restricts Creator/Admin or Admin operations.
3. Services enforce ownership and resource relationships.
4. Content-access services enforce entitlements and redact protected fields.

Do not rely only on a hidden frontend control. Server-side role, owner, and
parent-child checks are required for every mutation.

## Roles

Supported roles are:

- `ADMIN`
- `CREATOR`
- `USER`

The database enforces one role per user. Role replacement invalidates that
user's refresh tokens so the previous role cannot continue indefinitely through
refresh.

The final Admin cannot be demoted.

## Product ownership

Creators can create Products only for themselves, regardless of a caller-
supplied owner ID. Admin creation requires an explicit owner whose only role is
`CREATOR`.

Product, section, lesson, file, and Quiz authoring paths verify owner-or-Admin
access. Nested routes also verify that the child resource belongs to the parent
IDs in the path.

## Public Product access

GET requests under `/api/products/**` are public at the URL-security layer.
That does not mean every Product field is public.

For full Product reads:

- Admins and Product owners can read protected content.
- Users with an active entitlement can read protected content.
- Other callers can read only `PUBLISHED` Products.
- Course video URLs and article content are removed without content access.
- Permanent Download URLs are removed from Product responses.

Some summary/search endpoints do not apply the same status filtering. Treat
this as a known public-catalogue boundary, not as permission to expose private
content.

## Development role switching

`PUT /api/user/dev/role` is controlled by `app.dev-role-switch.enabled`. The
current configuration defaults it to enabled unless the environment overrides
it. Production must disable this capability deliberately.

## Security maintenance risks

- Tracked configuration currently contains sensitive defaults or values. Move
  secrets to environment-managed configuration and rotate exposed credentials.
- Authentication logging currently risks serializing registration or User data
  containing password material. Redact sensitive DTOs and entities.
- Swagger's docs-profile user is configured in code and should use managed
  credentials before broader exposure.
- The generic exception handler can disclose exception messages.
- CORS, cookie, JWT, CSRF, and public-route changes require focused security
  tests.

Never copy real secrets, tokens, private URLs, or credentials into Docusaurus.

## Related pages

- [API and Swagger](./api-and-swagger.md)
- [Entitlements and Content Access](./entitlements-and-content-access.md)
- [Administration and Audit](./administration-and-audit.md)

