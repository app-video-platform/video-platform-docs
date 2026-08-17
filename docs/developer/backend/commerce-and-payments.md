---
title: Commerce and Payments
sidebar_position: 7
---

# Commerce and Payments

## Current backend capability

The backend persists a provider-neutral foundation for one-time paid purchases:

- Commerce Orders and immutable Product snapshots.
- Payment attempts and idempotent payment-event records.
- Server-side price, Product status, ownership, and existing-access validation.
- `PURCHASE` entitlement creation after a successful payment event.
- Full-refund handling that revokes only entitlements created by that Order.
- Expiration of abandoned pending Orders.

This foundation is not a production payment integration. No Stripe account,
Stripe SDK adapter, hosted Checkout session, or verified Stripe webhook is
configured yet.

## Checkout contract

`POST /api/commerce/checkout-sessions` creates a checkout for the authenticated
buyer. It requires an `Idempotency-Key` header and a body containing Product
IDs.

The backend accepts at most 20 unique Products. Every Product must be:

- published
- positively priced
- owned by the same Creator
- not owned by the buyer
- not already covered by an active entitlement

Free Products continue to use the entitlement enrollment endpoint. Checkout
uses backend Product prices and stores amounts as EUR minor units. Frontend
totals are display values and are never trusted.

`GET /api/commerce/orders/{orderId}` returns checkout status to the buyer or an
Administrator. Order items retain the Product title, type, Creator, and price
from the time checkout was created.

## Payment gateway boundary

`PaymentGateway` isolates provider session creation from Order and entitlement
logic. A future Stripe adapter should:

1. Create a hosted Stripe Checkout session using the backend Order.
2. Use the Order ID as provider metadata and an idempotency reference.
3. Verify webhook signatures before accepting any event.
4. Validate provider amount, currency, session, and payment identifiers.
5. Convert verified Stripe events into the normalized payment-event model.

The normalized event processor owns Order state changes and entitlement
fulfillment. Provider adapters must not grant or revoke entitlements directly.

## Local fake payments

The fake gateway exists only under the `dev` and `test` Spring profiles. Both
commerce and fake simulation require explicit configuration; they are disabled
by default.

An Administrator can simulate a local outcome with:

`POST /api/dev/commerce/orders/{orderId}/simulate`

Supported outcomes are `PAID`, `FAILED`, and `REFUNDED`. These events use the
same state-transition and entitlement services intended for a future verified
provider webhook.

Never enable the fake simulation endpoint in a deployed production profile.

## Current boundaries

- One-time Course, Download, and Consultation purchases only.
- One Creator per checkout.
- EUR only.
- Full Order refunds only; partial refunds are unsupported.
- No customer-facing paid checkout integration yet.
- No Membership subscriptions or renewals.
- No Creator Sales aggregate/read endpoints yet.
- No taxes, coupons, payouts, disputes, invoices, or payment retries.

Products with an unexpired pending checkout or active purchase entitlement
cannot be deleted. Creators should use the Hidden status instead.

## Related pages

- [Entitlements and Content Access](./entitlements-and-content-access.md)
- [API and Swagger](./api-and-swagger.md)
- [Persistence and Data Model](./persistence-and-data-model.md)
- [Current Backend Coverage](./current-limitations.md)
