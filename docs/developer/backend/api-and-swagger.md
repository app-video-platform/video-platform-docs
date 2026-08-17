---
title: API and Swagger
sidebar_position: 3
---

# Backend API and Swagger

## Reference policy

Springdoc-generated OpenAPI is the authoritative reference for exact request
and response schemas, parameters, and documented status codes.

Use this page for route ownership, access level, lifecycle context, and legacy
boundaries. Do not copy generated DTO schemas into Docusaurus.

- [Deployed Swagger UI](https://serious-debauchery.click/swagger-ui)
- Local OpenAPI path with the `docs` profile: `/v3/api-docs`
- Local Swagger UI path with the `docs` profile: `/swagger-ui`

Swagger is disabled by default. `application-docs.yml` enables it under the
`docs` Spring profile. The docs-profile security chain requires HTTP Basic
authentication, and Swagger is configured as a read-only contract browser with
submit methods disabled.

## Access legend

| Access | Meaning |
|---|---|
| Public | No application JWT is required by the main security chain |
| Authenticated | Any authenticated role |
| Buyer/Admin | The Order's buyer or an Administrator |
| Creator/Admin | Method-level `CREATOR` or `ADMIN` role check |
| Admin | Method-level `ADMIN` role check |
| Owner/Admin | Role check plus service-level Product ownership enforcement |

## System routes

| Method | Path | Access | Purpose |
|---|---|---|---|
| GET | `/` | Authenticated | Basic application response |
| GET | `/testEndpoint` | Public | Diagnostic endpoint |

## Authentication routes

All routes under `/api/auth` are public at the URL-security layer.

| Method | Path | Purpose |
|---|---|---|
| POST | `/api/auth/register` | Create an unverified USER account and send verification |
| GET | `/api/auth/verify?token=...` | Verify an account token |
| POST | `/api/auth/login` | Validate credentials and set auth cookies |
| POST | `/api/auth/logout` | Clear auth and CSRF cookies |
| POST | `/api/auth/refresh` | Rotate a refresh token and issue new cookies |
| POST | `/api/auth/googleSignIn` | Sign in or register through a Google ID token |

There is no implemented backend forgot-password endpoint in the current
controller.

## User routes

| Method | Path | Access | Purpose |
|---|---|---|---|
| GET | `/api/user/userInfo` | Authenticated | Load the current user profile |
| PUT | `/api/user/userInfo` | Authenticated | Update the current user's profile |
| PUT | `/api/user/dev/role` | Authenticated and feature-gated | Replace the current role in development |

## Product routes

All Product GET paths are permitted at the URL-security layer, but response
filtering and publication behavior vary by endpoint. Mutations require Creator
or Admin role checks and service-level ownership rules.

| Method | Path | Access | Purpose |
|---|---|---|---|
| POST | `/api/products` | Creator/Admin | Create a Product |
| GET | `/api/products?userId=...` | Public, content-filtered | Load full Products for an owner/user query |
| GET | `/api/products?ownerId=...` | Public | Load Product summaries for an owner |
| GET | `/api/products/get-all-products-min` | Public | Load Product summaries, optionally by `userId` |
| GET | `/api/products/getProduct?productId=...&type=...` | Public, legacy | Load a Product by ID and type |
| GET | `/api/products/{productId}` | Public, content-filtered | Load a Product by ID |
| PUT | `/api/products` | Owner/Admin | Replace/update a Product through the typed DTO |
| PATCH | `/api/products/{productId}` | Owner/Admin | Patch supported Product fields |
| DELETE | `/api/products?userId=...&productType=...&id=...` | Owner/Admin, legacy | Delete through caller-supplied identifiers |
| DELETE | `/api/products/{productId}` | Owner/Admin | Delete a Product by ID |
| GET | `/api/products/search?term=...` | Public | Paginated cross-Product search |
| GET | `/api/products/search/{userId}/products?term=...` | Public | Paginated search scoped to a user |

Direct full-Product reads use `ProductContentAccessService`. Callers without
owner/Admin access or an active entitlement receive only published Product
data, with protected Course content and Download URLs removed. Summary and
search paths do not all apply the same publication filtering; do not treat them
as a finalized public-catalogue contract without reviewing the implementation.

## Canonical Product authoring routes

These routes require Creator/Admin and enforce owner-or-Admin access.

| Method | Path | Purpose |
|---|---|---|
| POST | `/api/products/{productId}/sections` | Create a Course or Download section |
| PATCH | `/api/products/{productId}/sections/{sectionId}` | Update a section |
| DELETE | `/api/products/{productId}/sections/{sectionId}` | Delete a section |
| POST | `/api/products/{productId}/sections/{sectionId}/lessons` | Create a Course lesson |
| PATCH | `/api/products/{productId}/sections/{sectionId}/lessons/{lessonId}` | Update a Course lesson |
| DELETE | `/api/products/{productId}/sections/{sectionId}/lessons/{lessonId}` | Delete a Course lesson |
| GET | `/api/products/{productId}/sections/{sectionId}/files/presigned-url` | Create a Download upload URL |
| POST | `/api/products/{productId}/sections/{sectionId}/files/confirm-upload` | Persist uploaded file metadata |
| DELETE | `/api/products/{productId}/sections/{sectionId}/files/{fileId}` | Delete file metadata from a Download section |

The nested IDs are validated. A section must belong to the Product and a lesson
or file must belong to the section named in the path.

## Legacy authoring routes

The backend retains older routes while the canonical nested contract is in
use. Confirm frontend consumers before removal.

| Methods | Path family | Purpose |
|---|---|---|
| POST, PUT, DELETE | `/api/products/course/section` | Legacy Course section mutation |
| POST, PUT, DELETE | `/api/products/course/section/lesson` | Legacy Course lesson mutation |
| GET | `/api/files/presigned-url` | Legacy file upload URL |
| POST | `/api/files/confirm-upload` | Legacy file confirmation |

## Quiz routes

| Method | Path | Access | Purpose |
|---|---|---|---|
| GET | `/api/lessons/{lessonId}/quiz` | Creator/Admin | Load authoring data |
| PUT | `/api/lessons/{lessonId}/quiz` | Creator/Admin | Create or replace a lesson Quiz |
| DELETE | `/api/lessons/{lessonId}/quiz` | Creator/Admin | Delete a lesson Quiz |
| GET | `/api/lessons/{lessonId}/quiz/play` | Authenticated | Load the player-safe Quiz |
| POST | `/api/lessons/{lessonId}/quiz/submit` | Authenticated | Score and persist an attempt |

## Entitlement routes

All entitlement routes require authentication through the main security chain.

| Method | Path | Purpose |
|---|---|---|
| POST | `/api/entitlements/products/{productId}/enroll` | Self-enroll in a free published Product |
| GET | `/api/entitlements/me?type=...` | List active entitlements, optionally by Product type |
| GET | `/api/entitlements/products/{productId}/access` | Check current access |
| GET | `/api/entitlements/products/{productId}/files/{fileId}/download` | Create an authorized Download URL |

## Commerce routes

Commerce checkout routes require authentication. Checkout is currently backed
only by the fake gateway in explicitly configured `dev` and `test` profiles;
there is no production payment-provider adapter.

| Method | Path | Access | Purpose |
|---|---|---|---|
| POST | `/api/commerce/checkout-sessions` | Authenticated | Create an idempotent one-time checkout for published paid Products from one Creator |
| GET | `/api/commerce/orders/{orderId}` | Buyer/Admin | Read Order and payment-attempt status |
| POST | `/api/dev/commerce/orders/{orderId}/simulate` | Admin, dev/test only | Simulate paid, failed, or fully refunded payment events |

See [Commerce and Payments](./commerce-and-payments.md) for validation,
fulfillment, and configuration boundaries.

## Calendar routes

| Method | Path | Access | Purpose |
|---|---|---|---|
| GET | `/api/calendars/providers` | Public | List configured provider options |
| POST | `/api/calendars/connect` | Creator/Admin | Start a connection flow |
| GET | `/api/calendars/oauth/{provider}/callback` | Creator/Admin | Complete an OAuth callback |
| GET | `/api/calendars` | Creator/Admin | List the current user's connections |
| DELETE | `/api/calendars/{id}` | Creator/Admin | Disconnect a calendar |

## Admin routes

All routes under `/api/admin` require `ADMIN`.

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/admin/users` | Paginated user search and role filtering |
| PATCH | `/api/admin/users/{userId}/role` | Replace a user's single role |
| GET | `/api/admin/products` | Paginated Product search/filtering |
| GET | `/api/admin/audit` | Paginated Admin audit search/filtering |

## Keeping OpenAPI current

When changing an API:

1. Update the controller and DTO contract.
2. Update the matching interface under `controller/docs` when one exists.
3. Add or update authorization and integration tests.
4. Run the OpenAPI integration test.
5. Update this page only when routes, permissions, ownership, lifecycle, or
   integration meaning changed.
