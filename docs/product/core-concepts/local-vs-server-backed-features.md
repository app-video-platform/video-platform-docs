---
title: Local vs Server-backed Features
sidebar_position: 6
---

# Local vs Server-backed Features

## Overview

Some product areas save data through the server, some are saved only in the browser, and some are visible placeholders.

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

Major frontend-only session state areas include:

- Membership native Posts, Videos, and Resources in the builder.
- Membership included-product relationships in the builder.
- Membership recurring pricing controls in the builder.
- Membership content ordering and readiness feedback in the builder.

Major inspection fixture-backed areas include:

- Creator Customers list and detail records when mock mode is enabled.
- Creator Sales metrics, order ledger, and order detail records when mock mode is enabled.
- Creator Analytics metrics, charts, rankings, and summary panels when mock mode is enabled.

Major placeholder or incomplete areas include:

- Checkout, payment, orders, and entitlements.
- Production Customer APIs for creator customer management, purchase history, access records, notes, waitlist details, spend, and order data.
- Production Sales APIs for order, payment, refund, subscription, renewal, entitlement, server pagination, payment-provider normalization, and safe financial mutation contracts.
- Production Analytics APIs and state architecture for revenue, order, customer, membership, payment, and product-performance analytics.
- Membership subscriptions, entitlement logic, member access, and buyer-facing Membership flows.
- Customer Library tabs for purchased products.
- Email campaigns.
- Messages.
- Live-session booking and scheduling.
- Complete creator storefront rendering.
- Most settings save flows outside calendar connection initiation.

## How it works

Server-backed areas are the safest to document as persistent when the frontend clearly calls backend-backed workflows.

Browser-saved areas can persist on the same device and browser, but they should not be described as account-synchronized features.

Frontend-only session state can survive local UI interactions, such as switching builder tabs, but should not be described as durable. In the current Membership builder, Membership-specific content, included Product relationships, recurring pricing, ordering, and readiness state are lost on full page refresh or reload.

Placeholder areas may be visible in navigation or tabs, but should be documented only as current limitations unless they have meaningful user-facing behavior.

Inspection fixture-backed areas can demonstrate the intended screen behavior for reviewers, but they should not be described as production-backed customer, financial, or analytics data.

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
