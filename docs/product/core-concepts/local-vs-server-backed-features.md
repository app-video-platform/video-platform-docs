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
- Download section file upload.
- Consultation setup fields.
- Generic Membership product draft creation and shared product fields.
- Product exploration and search.
- Admin user, product, and audit listings.
- Review listing and filtering.
- Calendar provider discovery and connection initiation.

Major browser-saved areas include:

- Wishlist.
- Shopping cart.

Major frontend-defined, backend-pending contract areas include:

- Creator Customers list and Customer Detail.
- Creator Sales summary, Orders page, and Order Detail.
- Creator Analytics aggregate overview.
- Creator Dashboard aggregate summary.
- Public Storefront read model and Creator Storefront configuration.
- Product recurring-pricing fields for Membership products.
- Membership aggregate, configuration, native content CRUD, included Product associations, and feed ordering.

Major frontend-only session state areas include:

- Form drafts and UI interaction state.
- Membership editor drafts, selected File objects, chooser state, picker state, active editor state, and active builder tab.
- Membership readiness feedback, which is derived from current Product and Membership state rather than persisted.

Major placeholder or incomplete areas include:

- Checkout, payment, orders, and entitlements.
- Production Customer APIs for creator customer management, purchase history, access records, notes, waitlist details, spend, and order data.
- Production Sales APIs for order, payment, refund, subscription, renewal, entitlement, server pagination, payment-provider normalization, and safe financial mutation contracts.
- Production Analytics and Dashboard aggregate endpoints for revenue, order, customer, membership, payment, activity, and product-performance data.
- Production Storefront endpoints for public read models and Creator configuration, plus layout, theming, custom domains, SEO settings, password protection, and Storefront analytics.
- Production Product support for recurring-pricing fields and production Membership endpoints for content, included Product associations, feed ordering, binary asset upload, subscriptions, entitlements, and member access.
- Membership subscriptions, entitlement logic, member access, and buyer-facing Membership flows.
- Customer Library tabs for purchased products.
- Email campaigns.
- Messages.
- Live-session booking and scheduling.
- Most settings save flows outside calendar connection initiation.

## How it works

Server-backed areas are the safest to document as production-persistent when the frontend clearly calls implemented backend workflows.

Frontend-defined, backend-pending contracts describe current frontend requirements and data flow, but they should not be described as production-backed capabilities until the backend implements them.

Browser-saved areas can persist on the same device and browser, but they should not be described as account-synchronized features.

Frontend-only session state can survive local UI interactions, such as switching builder tabs, but should not be described as durable.

Local development may serve deterministic data through ignored HTTP mocks at the Axios boundary when mock mode is enabled. Feature components should still follow the production data path: component, Redux, thunk, service, Axios, backend or local HTTP mock.

Placeholder areas may be visible in navigation or tabs, but should be documented only as current limitations unless they have meaningful user-facing behavior.

Local mock data can demonstrate intended screen behavior for reviewers, but it should not be described as production-backed customer, financial, analytics, dashboard, Storefront, or Membership data.

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
