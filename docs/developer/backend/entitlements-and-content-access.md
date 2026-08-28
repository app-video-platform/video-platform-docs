---
title: Entitlements and Content Access
sidebar_position: 6
---

# Entitlements and Content Access

## Purpose

Product entitlements represent a user's right to access protected Product
content. They are stored separately from Product tables so access can be granted
or revoked without changing Product ownership.

An entitlement is unique for one user/Product pair.

## State model

Statuses:

- `ACTIVE`
- `REVOKED`

Sources:

- `FREE_ENROLLMENT`
- `PURCHASE`
- `ADMIN_GRANT`

The source enum supports future purchase and Admin flows, but the current public
backend API exposes only self-enrollment for free Products. Grant and revoke
service primitives exist without a complete public Admin workflow.

## Free enrollment

`POST /api/entitlements/products/{productId}/enroll` requires authentication.

The service:

1. Loads the Product.
2. Requires `PUBLISHED` status.
3. Rejects a positive price with HTTP 402 Payment Required.
4. Creates or reactivates the user/Product entitlement.
5. Records `FREE_ENROLLMENT` as the source for a new record.
6. Clears a previous revocation timestamp.

Repeated enrollment is idempotent at the user/Product relationship level
because the database enforces uniqueness and the service reuses an existing
record.

## Library query

`GET /api/entitlements/me` returns the authenticated user's active
entitlements, ordered by creation time. An optional Product type parameter
filters the result.

The frontend Library consumes this endpoint for All Products, Course, Download,
and Consultation tabs. Opening the Product is separate from type-specific
content delivery or booking behavior.

## Access decision

Protected content is available when any of these conditions is true:

- the caller is an Admin
- the caller owns the Product
- the caller has an active entitlement for the Product

Anonymous callers and authenticated callers without one of those conditions do
not have protected content access.

## Product response protection

For a caller with access, Product responses still remove permanent Download
URLs. Download delivery uses a separate authorized endpoint.

For a caller without access:

- a Draft or Hidden Product is rejected
- a Published Course may retain public outline metadata, but lesson video URLs
  and article content are removed
- a Published Download may retain section/file metadata, but file URLs are
  removed

This filtering applies to full Product response paths that call
`ProductContentAccessService`. It should not be assumed for every search or
summary endpoint.

## Authorized Download delivery

`GET /api/entitlements/products/{productId}/files/{fileId}/download`:

1. Requires a Download Product.
2. Applies the normal content-access decision.
3. Verifies that the requested file belongs to that Product.
4. Increments the stored download count.
5. Returns a DigitalOcean Spaces GET URL valid for ten minutes.

The frontend does not currently expose this flow through the customer Library,
so backend delivery support should not be documented as a finished customer
experience.

## Deletion and revocation

Deleting a Product removes non-purchase entitlement rows before deleting the
Product because the entitlement table stores a Product UUID without a
cross-table Product foreign key. A Product with an active purchase entitlement
or unexpired pending checkout cannot be deleted; creators should hide it.

Revocation marks an existing entitlement `REVOKED` and records `revoked_at`.
There is no current controller route for Admin grant/revoke operations.

## Commerce relationship

The backend commerce foundation now creates `PURCHASE` entitlements only after
an idempotent successful payment event. Purchase entitlements reference their
originating Order item, so a full refund revokes only access created by that
Order.

The backend still does not implement:

- a production Stripe or other real payment-provider adapter
- partial refunds or payment retries
- subscriptions or recurring entitlement renewal
- Membership access

The fake gateway can run in any explicitly configured profile and can
auto-complete checkout. It creates authoritative test entitlements and
reporting records, but it does not charge money and is not a real payment
mechanism.

## Related pages

- [Authentication and Security](./authentication-and-security.md)
- [Products and Authoring](./products-and-authoring.md)
- [Commerce and Payments](./commerce-and-payments.md)
- [Download Products](../../product/creators/download-products.md)
- [Library](../../product/customers/library.md)
