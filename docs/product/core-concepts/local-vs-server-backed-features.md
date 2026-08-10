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

Major placeholder or incomplete areas include:

- Checkout, payment, orders, and entitlements.
- Membership subscriptions, entitlement logic, member access, and buyer-facing Membership flows.
- Customer Library tabs for purchased products.
- Sales and analytics reporting.
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

## Current limitations

- This page is a product-level maturity summary, not a guarantee of backend behavior outside the current frontend.
- Any feature page with a more specific limitation should be treated as the detailed source for that workflow.

## Related pages

- [Current Platform Status](../start-here/current-platform-status.md)
- [Wishlist](../customers/wishlist.md)
- [Shopping Cart](../customers/shopping-cart.md)
- [Sales and Analytics Status](../creators/sales-and-analytics-status.md)
- [Calendar Connections](./calendar-connections.md)
