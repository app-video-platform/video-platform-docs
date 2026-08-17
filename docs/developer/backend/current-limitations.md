---
title: Current Backend Coverage
sidebar_position: 11
---

# Current Backend Coverage

## Implemented and persisted

- local registration, email verification, login, logout, and refresh
- Google sign-in
- User profile and social-link updates
- single-role enforcement and Admin role replacement
- Course, Download, Consultation, and Membership Product persistence
- Membership recurring pricing, config, native content metadata, included
  Course/Download associations, and feed ordering
- Product ownership and Admin cross-owner rules
- Product search and summaries
- nested Course/Download section authoring
- Course lesson authoring for Video, Article, and Quiz types
- Quiz definitions, validation, player payloads, scoring, and attempts
- Download upload metadata and DigitalOcean Spaces integration
- calendar connection infrastructure
- Admin user/Product queries and audit logs
- free Product enrollment
- entitlement library and access checks
- protected Product response filtering
- authorized, short-lived Download URLs
- one-time Commerce Order, Order-item, payment-attempt, and payment-event
  persistence
- fake dev/test payment success, failure, and full-refund processing
- paid entitlement creation and full-refund entitlement revocation
- OpenAPI generation under the `docs` profile

## Backend exists, frontend is not complete

These capabilities exist in the backend but are not complete end-to-end product
flows in the current frontend:

- free Product enrollment
- entitlement-backed Library data
- Product access checks
- authorized customer Download delivery
- full connected-calendar listing and disconnection
- persisted Quiz play/submission integration across the customer learning UI
- one-time paid checkout session creation and Order-status reads
- paid entitlement fulfillment through the development/test fake gateway

Document them as backend capabilities in Developer Documentation, but keep the
corresponding Product Documentation limitations until the UI exposes and tests
the full workflow.

## Frontend contracts without production backend support

The frontend contains services, models, Redux state, or local HTTP mocks for
these areas, but the current backend does not implement their production
contracts:

- Creator Dashboard aggregate data
- Creator Customers list and detail data
- Creator Sales summaries, orders, and order details
- Creator Analytics aggregate data
- public Storefront read model and Creator Storefront configuration
- Product Landing Page configuration persistence

## Not implemented

- Stripe or another production payment-provider adapter
- customer-facing paid checkout integration
- partial refunds and payment retries
- taxes, coupons, disputes, invoices, or marketplace payouts
- subscriptions and renewals
- buyer-facing Membership access
- Membership Product publishing and one-time checkout
- exposed Admin entitlement grant/revoke operations
- Membership binary media upload/delivery and a generalized rich-media asset lifecycle
- complete booking, availability, rescheduling, and consultation-session
  management

## Known technical risks

- sensitive tracked configuration and credentials require environment migration
  and rotation
- authentication logs can expose sensitive request/User data
- development role switching defaults to enabled unless overridden
- Swagger docs credentials are configured in code
- generic exception handling maps unexpected errors to HTTP 400 and can expose
  messages
- Spring MVC and WebFlux dependencies coexist without a documented reactive
  architecture need
- Spring Data JPA has an explicit version outside normal parent management
- legacy and canonical authoring routes coexist
- public summary/search visibility semantics are inconsistent
- object deletion and storage cleanup are not a complete lifecycle
- provider classes do not guarantee complete OAuth support for every calendar
  provider
- the local Java 25 default is incompatible with the current compiler/Lombok
  setup; use Java 17

## Documentation rule

When backend support is added, update this page together with the relevant
domain page, Swagger, backend `PROJECT_CONTEXT.md`, frontend contract, and
Product Documentation. Do not move a feature into "implemented" based only on
a DTO, enum, mock, or planned route.
