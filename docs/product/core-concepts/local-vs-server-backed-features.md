---
title: Local vs Server-backed Features
sidebar_position: 6
---

# Local vs Server-backed Features

## Overview

Some product areas save data through existing production endpoints, some have frontend-defined contracts with production backend work still pending, some are saved only in the browser, and some are visible placeholders.

This page gives a high-level persistence and maturity view without turning user documentation into implementation documentation.

## Who can use this

This page is for Administrators, Creators, End Users, product reviewers, and documentation maintainers.

## What you can rely on

Major server-backed areas include:

- Sign-up, login, Google sign-in, email verification, logout, and profile loading.
- Role-based access and Admin role changes.
- Creator product creation and product editing.
- Course sections and lesson shells.
- Course Quiz definitions, validation, scoring, and attempt persistence in the backend.
- Download section file upload.
- Consultation setup fields.
- Product exploration and search.
- Admin user, product, and audit listings.
- Calendar provider discovery and connection initiation.
- Free Product enrollment, active entitlements, access checks, and protected Download delivery in the backend.
- Membership Product and recurring-pricing persistence, native content metadata,
  included Product associations, and feed ordering.
- Creator Customers, Sales, Analytics, and Dashboard reporting.
- Creator Storefront configuration and anonymous public Storefront reads.
- Product Landing Page presentation configuration and published-only public reads.
- Profile-owned public email that is separate from login email.
- Product-page free enrollment, access checks, and one-time checkout initiation.

Major browser-saved areas include:

- Wishlist.
- Shopping cart.

Major backend capabilities not yet exposed as complete frontend workflows
include:

- Loading the signed-in user's active entitlement library.
- Authorized customer Download delivery.
- Connected-calendar listing and disconnection.
- End-to-end customer Quiz play and submission.

Major frontend-only session state areas include:

- Form drafts and UI interaction state.
- Unsaved Storefront Builder configuration drafts before Save.
- Unsaved Product Landing Page Builder configuration drafts before Save.
- Membership editor drafts, selected File objects, chooser state, picker state, active editor state, and active builder tab.
- Membership readiness feedback, which is derived from current Product and Membership state rather than persisted.

Major placeholder or incomplete areas include:

- Production payment-provider integration and purchase-history UI beyond the
  current Cart/Order-status path.
- Customer mutations, editable notes/tags, waitlists, and Membership relationship data.
- Creator-side refund/retry/subscription mutations, reporting exports, taxes,
  and payouts.
- Membership and traffic/conversion analytics.
- Arbitrary Storefront page building, custom domains, SEO settings, password protection, and Storefront analytics.
- A dedicated combined public Product read model, waitlists, SEO, slugs, custom domains, landing-page analytics, Product-specific theme overrides, and arbitrary page-builder blocks.
- Membership binary asset upload/delivery, Product publishing, subscriptions,
  entitlement logic, member access, and buyer-facing Membership flows.
- Customer Library tabs backed by the entitlement API.
- Email campaigns.
- Messages.
- Live-session booking and scheduling.
- Most settings save flows outside calendar connection initiation.

## How it works

Server-backed areas are the safest to document as production-persistent when the frontend clearly calls implemented backend workflows.

Some backend capabilities intentionally remain listed as incomplete product
flows because the current frontend does not call them. Backend implementation
alone does not make a feature available to users.

Frontend-defined, backend-pending contracts describe current frontend requirements and data flow, but they should not be described as production-backed capabilities until the backend implements them. The Creator reporting, Storefront, Product Landing Page configuration, and Membership authoring contracts are now implemented; stale frontend comments may still describe older work as pending.

Browser-saved areas can persist on the same device and browser, but they should not be described as account-synchronized features.

Frontend-only session state can survive local UI interactions, such as switching builder tabs, but should not be described as durable.

Local development may serve deterministic data through ignored HTTP mocks at the Axios boundary when mock mode is enabled. Feature components should still follow the production data path: component, Redux, thunk, service, Axios, backend or local HTTP mock.

Placeholder areas may be visible in navigation or tabs, but should be documented only as current limitations unless they have meaningful user-facing behavior.

Local mock data can demonstrate intended screen behavior for reviewers, but it should not override the production data paths for customer, financial, analytics, dashboard, Storefront, or Product Landing Page data. Membership authoring persistence should be distinguished from its still-missing subscription and member-access lifecycle.

## Current limitations

- This page is a product-level maturity summary, not a guarantee of backend behavior outside the current frontend.
- Any feature page with a more specific limitation should be treated as the detailed source for that workflow.

## Related pages

- [Current Platform Status](../start-here/current-platform-status.md)
- [Wishlist](../customers/wishlist.md)
- [Shopping Cart](../customers/shopping-cart.md)
- [Sales](../creators/sales.md)
- [Analytics](../creators/analytics.md)
- [Calendar Connections](./calendar-connections.md)
