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
- normalized Consultation weekday/window availability persistence
- Spaces-backed Product thumbnail, gallery, and promo-video lifecycle
- server-authoritative publication validation for Product mutations
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
- automatic fake checkout success in any configured Spring profile
- dev/test fake payment failure and full-refund simulation
- paid entitlement creation and full-refund entitlement revocation
- Creator-only Sales summary and Order ledger/detail reporting
- Creator-only Customer list/detail reporting from completed Orders and
  Product entitlements
- Creator-only Analytics overview for Commerce performance, Product ranking,
  customer growth, refunds, and failures
- Creator-only Dashboard summary from Commerce, Customer, Product, and payment data
- Creator Storefront configuration and anonymous public Storefront read models
- Product Landing Page presentation configuration for Creator/Admin management
  and anonymous reads of published Products
- profile-owned public email that is separate from login email
- OpenAPI generation under the `docs` profile

## Backend exists, frontend is not complete

These capabilities exist in the backend but are not complete end-to-end product
flows in the current frontend:

- Product-type customer delivery after Library entitlement listing
- authorized customer Download delivery
- full connected-calendar listing and disconnection
- persisted Quiz play/submission integration across the customer learning UI

Document them as backend capabilities in Developer Documentation, but keep the
corresponding Product Documentation limitations until the UI exposes and tests
the full workflow.

## Frontend contracts without production backend support

The previously backend-pending Creator Dashboard, Storefront, Product Landing
Page configuration, Product Media, Consultation availability, publishing, and
fake-checkout contracts are implemented. Remaining frontend work is contract
cleanup and clearer test-payment messaging rather than a missing backend route.

## Not implemented

- Stripe or another production payment-provider adapter
- real charged checkout through a production payment provider
- partial refunds and payment retries
- taxes, coupons, disputes, invoices, or marketplace payouts
- subscriptions and renewals
- Membership/waitlist Customer relationships and Membership analytics
- editable Customer notes/tags and reporting exports
- buyer-facing Membership access
- Membership Product publishing and one-time checkout
- exposed Admin entitlement grant/revoke operations
- Membership binary media upload/delivery and a generalized rich-media asset lifecycle
- customer booking, time-slot selection, rescheduling, and consultation-session management

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
- legacy Download-file object deletion is not a complete lifecycle; Product marketing media has explicit best-effort cleanup
- provider classes do not guarantee complete OAuth support for every calendar
  provider
- the local Java 25 default is incompatible with the current compiler/Lombok
  setup; use Java 17

## Documentation rule

When backend support is added, update this page together with the relevant
domain page, Swagger, backend `PROJECT_CONTEXT.md`, frontend contract, and
Product Documentation. Do not move a feature into "implemented" based only on
a DTO, enum, mock, or planned route.
