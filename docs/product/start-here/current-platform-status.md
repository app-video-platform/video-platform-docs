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
- Creator product listing, Product Overview inspection pages, Product Landing Page Builder, and product creation.
- Product editing for core product fields.
- Course and download section management.
- Download file upload and removal for download products.
- Consultation setup fields.
- Membership creation, persisted native content metadata, included Product selection, unified ordering, recurring pricing configuration, and readiness feedback.
- Creator Storefront Builder, public Storefront pages, inline public profile editing, public email, live customization, published-product visibility, copyable public URL, featured product selection, ordering controls, and draft Save/Reset behavior.
- Creator Customers routes, list controls, read-only detail tabs, and frontend Customer list/detail contracts.
- Creator Sales routes, sales metrics, order ledger controls, read-only order detail, and frontend Sales summary/order contracts.
- Creator Analytics route, period selection, metrics, charts, rankings, summary panels, and a frontend aggregate Analytics contract.
- Product exploration and search.
- Local wishlist and shopping cart behavior.
- Admin user management.
- Admin product management.
- Admin audit log viewing.
- Calendar provider connection initiation.

## Features with important limitations

| Feature area | Current status |
|---|---|
| Product Overview | Creator/Admin Product Overview pages exist at `/app/products/:productId` for read-only product inspection, type-specific summaries, Edit product navigation, Product Landing Page Builder navigation, and published-only public-page navigation. They reuse existing Product data and do not include product-scoped analytics, orders, customers, access management, publish/unpublish controls, inline landing-page editing, SEO, or a new backend endpoint. |
| Product Landing Pages | Product Landing Page V2 exists for public published products and uses real Product data, type-specific summaries, inherited Storefront/default theme, and unavailable purchase/access states. Direct backend Product reads protect Draft/Hidden Products and redact protected content, but production landing-page config persistence and a dedicated public Product read model remain pending. Checkout, fulfillment UI, subscriptions, waitlists, SEO, custom domains, and arbitrary page-builder blocks are unsupported. |
| Course products | Sections and lesson shells can be created. The backend persists Quiz definitions and attempts, but the current frontend does not yet provide a complete reliable Video, Article, Quiz delivery, and customer learning workflow. |
| Download products | Creator-side file upload and backend authorized Download delivery exist, but the frontend Library does not expose customer delivery. |
| Consultation products | Setup fields exist, but booking, availability, rescheduling, and customer session management are not implemented. |
| Membership products | Creator/Admin Membership authoring is persisted for Draft/Hidden Products, recurring pricing configuration, native Posts and Video/Resource metadata, included same-owner Course/Download Products, and feed ordering. Binary media, Membership publishing, subscriptions, checkout, entitlements, and member access are unavailable. |
| Wishlist | Works in the browser and persists locally, but is not tied to a backend user account. |
| Shopping cart | Works in the browser and persists locally. Free-only carts can use backend enrollment. The backend now has a one-time paid Order/payment foundation, but paid checkout is not connected in the frontend and no production payment provider is configured. |
| Library | The backend can list active Product entitlements, but the frontend Library shell does not consume that API. Wishlist has behavior; owned Courses, Downloads, and Consultations are not shown. |
| Storefront | Creator Storefront Builder and public Storefront pages exist. The Builder uses the shared public presentation, supports inline public profile editing, public email, Light/Dark appearance, accent color, Modern/Classic/Friendly typography, featured product selection, product ordering, and draft Save/Reset behavior. Published products are shown publicly; draft and hidden products are withheld. Frontend public read-model and Creator config contracts exist, but production backend endpoints are pending. |
| Creator dashboard | Shows profile and product highlights through a frontend aggregate summary contract, but the production backend endpoint is pending for business metrics and activity data. |
| Creator Customers | Routes, list search/filter/sort controls, responsive list/card presentation, read-only detail tabs, and frontend Customer list/detail contracts exist. Production backend endpoints are pending for customer-domain records such as purchases, access, notes, tags, waitlist details, spend, and orders. |
| Creator Sales | Routes, sales metrics, order search/filter/sort controls, responsive ledger/card presentation, read-only contextual order detail, and frontend Sales summary/order contracts exist. Production backend endpoints are pending for order, payment, refund, subscription, renewal, and access records. |
| Creator Analytics | Route, 7/30/90-day period selection, business metrics, performance visualization, product performance, customer growth, membership health, payment health, and a frontend aggregate read-model contract exist. The production backend endpoint is pending. |
| Marketing and reviews | Reviews can be listed and filtered, but reply and moderation controls are incomplete in the UI. Other marketing tabs are mostly placeholders. |
| Settings | Several settings tabs render forms without saving changes. Calendar connection is the clearest backend-backed setting. |
| Messages | Messages navigation exists in places, but a standalone Messages page is not implemented in the current router. |

## What should not be documented as available

Do not describe the following as supported product capabilities:

- Customer-facing paid checkout.
- Production payment processing.
- Product Overview product-scoped revenue analytics, orders, customer counts, subscriber/member counts, conversion, charts, ratings/reviews, Storefront visibility controls, access management, duplicate/archive, publish/unpublish management, inline landing-page editing, SEO controls, or dedicated Product Overview backend APIs.
- Product Landing Page checkout, payments, frontend free-enrollment/access integration, Membership subscription checkout, waitlists, ratings/reviews, landing-page analytics, SEO controls, slugs, custom domains, galleries, slideshows, promo video, presentations, arbitrary page-builder blocks, Product-specific theme overrides, production config persistence, or a dedicated production public Product read model.
- Membership binary Video/Resource upload or delivery, subscriptions, checkout, entitlement logic, Product publishing, member access, or buyer-facing Membership flows.
- Frontend customer access to purchased Course/Download/Consultation content. The backend can fulfill paid purchase entitlements, but the frontend Library and delivery flows do not consume them end to end.
- Production-backed Creator customer management, customer profiles, customer purchase history, access management, notes editing, customer deletion, exporting, bulk actions, messaging, or impersonation.
- Production-backed Creator financial reporting, order management, payment processing, refund issuing, charge retries, subscription changes, financial exporting, or access mutation from Sales.
- Production-backed Creator analytics reporting, custom date ranges, traffic analytics, conversion funnels, attribution/source analytics, payouts, tax analytics, disputes, cohorts, course/content engagement analytics, exports, report building, or custom dashboards.
- Production-backed Storefront public read-model and configuration endpoints for theme, featured product selection, or manual ordering; arbitrary page-building, drag-and-drop sections, custom content blocks, custom CSS, custom domains, SEO settings, password protection, or Storefront analytics.
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
