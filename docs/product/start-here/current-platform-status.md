---
title: Current Platform Status
sidebar_position: 3
---

# Current Platform Status

## Overview

This page gives a high-level view of what is ready, what is partial, and what is visible but not ready to rely on.

Use this page as a quick orientation. Detailed limitations should still be documented inside the relevant feature pages.

## Who can use this

This page is for product reviewers, Administrators, Creators, End Users, and documentation maintainers.

## What works today

The strongest areas of the current frontend are:

- Account signup, sign-in, email verification, and Google sign-in.
- Role-based app access.
- Creator product listing and product creation.
- Product editing for core product fields.
- Course and download section management.
- Download file upload and removal for download products.
- Consultation setup fields.
- Membership product creation, native Membership Content, included Product selection, unified ordering, recurring pricing controls, and readiness feedback in the frontend builder.
- Creator Customers routes, list controls, and read-only detail tabs when inspection fixtures are enabled.
- Creator Sales routes, sales metrics, order ledger controls, and read-only order detail when inspection fixtures are enabled.
- Product exploration and search.
- Local wishlist and shopping cart behavior.
- Admin user management.
- Admin product management.
- Admin audit log viewing.
- Calendar provider connection initiation.

## Features with important limitations

| Feature area | Current status |
|---|---|
| Product detail pages | Real product data is shown, but some visible fields are hardcoded and purchase buttons are not connected to checkout. |
| Course products | Sections and lesson shells can be created, but video, article, and quiz lesson content are not fully persisted. |
| Download products | Creator-side file upload exists, but customer delivery through the library is not implemented. |
| Consultation products | Setup fields exist, but booking, availability, rescheduling, and customer session management are not implemented. |
| Membership products | Creator-side Membership setup exists for native Posts, Videos, Resources, included Course/Download products, unified ordering, recurring pricing, and readiness feedback. Membership-specific data is frontend-only session state and is not persisted through the current Product API. |
| Wishlist | Works in the browser and persists locally, but is not tied to a backend user account. |
| Shopping cart | Works in the browser and persists locally, but checkout and payment are not implemented. |
| Library | The library shell and tabs exist; wishlist has behavior, but purchased courses, downloads, and consultations are not shown. |
| Storefront | The route exists and fetches creator products, but the rendered storefront is mostly empty. |
| Creator dashboard | Shows profile and product highlights; audience and sales sections are empty. |
| Creator Customers | Routes, list search/filter/sort controls, responsive list/card presentation, and read-only detail tabs exist. Customer-domain records such as purchases, access, notes, tags, waitlist details, spend, and orders are currently deterministic inspection fixtures behind mock mode, not production-backed data. |
| Creator Sales | Routes, sales metrics, order search/filter/sort controls, responsive ledger/card presentation, and read-only contextual order detail exist. Order, payment, refund, subscription, renewal, and access records are currently deterministic inspection fixtures behind mock mode, not production-backed financial data. |
| Marketing and reviews | Reviews can be listed and filtered, but reply and moderation controls are incomplete in the UI. Other marketing tabs are mostly placeholders. |
| Settings | Several settings tabs render forms without saving changes. Calendar connection is the clearest backend-backed setting. |
| Analytics and messages | Analytics and messages navigation exists, but those workflows are not implemented as full pages. |

## What should not be documented as available

Do not describe the following as supported product capabilities:

- Checkout.
- Payment processing.
- Membership subscriptions, entitlement logic, real publishing, member access, or buyer-facing Membership flows.
- Customer access to purchased course/download/consultation content.
- Production-backed Creator customer management, customer profiles, customer purchase history, access management, notes editing, customer deletion, exporting, bulk actions, messaging, or impersonation.
- Production-backed Creator financial reporting, order management, payment processing, refund issuing, charge retries, subscription changes, financial exporting, or access mutation from Sales.
- Complete creator storefront publishing.
- Complete sales analytics.
- Email campaigns.
- Direct messaging.
- Live-session booking or scheduling.
- Fully persisted rich course lesson content.

## How to read feature pages

Feature pages should describe what users can do first, then include a **Current limitations** section for anything incomplete or frontend-only.

Avoid documenting implementation details unless the page is part of Developer Documentation.

## Related pages

- [Product Overview](./product-overview.md)
- [Roles and Access](./roles-and-access.md)
- [Glossary](./glossary.md)
