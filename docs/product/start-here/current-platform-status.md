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
- Creator Customers routes and server-backed read models from completed Orders and Product access.
- Creator Sales routes and server-backed summary, Order ledger, and read-only Order detail.
- Creator Analytics route and server-backed Commerce performance, Product ranking, customer growth, and payment health.
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
| Product Landing Pages | Product Landing Page V2 exists for public published Products, uses backend-persisted presentation configuration, inherits the Storefront/default theme, and connects free enrollment, access checks, and eligible one-time checkout initiation. Direct Product reads protect Draft/Hidden Products and redact protected content. A combined public Product read model, production payment provider, subscriptions, waitlists, SEO, custom domains, and arbitrary page-builder blocks remain unsupported. |
| Course products | Sections and lesson shells can be created. The backend persists Quiz definitions and attempts, but the current frontend does not yet provide a complete reliable Video, Article, Quiz delivery, and customer learning workflow. |
| Download products | Creator-side file upload and backend authorized Download delivery exist, but the frontend Library does not expose customer delivery. |
| Consultation products | Setup fields exist, but booking, availability, rescheduling, and customer session management are not implemented. |
| Membership products | Creator/Admin Membership authoring is persisted for Draft/Hidden Products, recurring pricing configuration, native Posts and Video/Resource metadata, included same-owner Course/Download Products, and feed ordering. Binary media, Membership publishing, subscriptions, checkout, entitlements, and member access are unavailable. |
| Wishlist | Works in the browser and persists locally, but is not tied to a backend user account. |
| Shopping cart | Cart contents persist locally. Free-only carts use backend enrollment, and eligible paid carts create backend checkout sessions. No production payment provider is configured, so paid checkout cannot complete in production. |
| Library | The backend can list active Product entitlements, but the frontend Library shell does not consume that API. Wishlist has behavior; owned Courses, Downloads, and Consultations are not shown. |
| Storefront | Creator Storefront configuration and public Storefront read models are backend-persisted. The Builder supports inline public profile editing, public email, theme, featured Product, ordering, and draft Save/Reset behavior. Public APIs expose only published Products and never expose login email. |
| Creator dashboard | Creator-only backend reporting supplies 30-day revenue, Sales, Customers, recent activity, top Products, and attention items. Active Memberships are unavailable until subscription tracking exists. |
| Creator Customers | Creator-only backend list/detail reporting covers paid/refunded buyers and free, purchased, or manually granted Product access. Membership/waitlist relationships, editable notes/tags, exports, and mutations are unavailable. The frontend still needs to recognize free-enrollment access and remove Administrator access to this route. |
| Creator Sales | Creator-only backend reporting covers retained revenue, paid Orders, full refunds, failures, filters, pagination, immutable item snapshots, payment context, and entitlement-derived access. The frontend still needs multi-Product `items` rendering and must remove Administrator access. Production payments, subscriptions, refund/retry actions, exports, taxes, and payouts are unavailable. |
| Creator Analytics | Creator-only backend reporting covers 7/30/90-day Commerce performance, Product ranking, lifetime/new customers, refund rate, and failures. Membership data is intentionally empty. The frontend must remove Administrator access; custom ranges, Membership analytics, traffic/conversion analytics, taxes, payouts, and exports are unavailable. |
| Marketing and reviews | Reviews can be listed and filtered, but reply and moderation controls are incomplete in the UI. Other marketing tabs are mostly placeholders. |
| Settings | Several settings tabs render forms without saving changes. Calendar connection is the clearest backend-backed setting. |
| Messages | Messages navigation exists in places, but a standalone Messages page is not implemented in the current router. |

## What should not be documented as available

Do not describe the following as supported product capabilities:

- Customer-facing paid checkout.
- Production payment processing.
- Product Overview product-scoped revenue analytics, orders, customer counts, subscriber/member counts, conversion, charts, ratings/reviews, Storefront visibility controls, access management, duplicate/archive, publish/unpublish management, inline landing-page editing, SEO controls, or dedicated Product Overview backend APIs.
- Production-provider payment completion, Membership subscription checkout, waitlists, ratings/reviews, landing-page analytics, SEO controls, slugs, custom domains, galleries, slideshows, promo video, presentations, arbitrary page-builder blocks, Product-specific theme overrides, or a dedicated combined public Product read model.
- Membership binary Video/Resource upload or delivery, subscriptions, checkout, entitlement logic, Product publishing, member access, or buyer-facing Membership flows.
- Frontend customer access to purchased Course/Download/Consultation content. The backend can fulfill paid purchase entitlements, but the frontend Library and delivery flows do not consume them end to end.
- Creator customer mutations, Membership/waitlist relationships, notes/tags editing, customer deletion, exporting, bulk actions, messaging, or impersonation.
- Creator payment processing, refund issuing, charge retries, subscription changes, financial exporting, taxes, payouts, or access mutation from Sales.
- Membership analytics, custom Analytics date ranges, traffic analytics, conversion funnels, attribution/source analytics, payouts, tax analytics, disputes, cohorts, course/content engagement analytics, exports, report building, or custom dashboards.
- Arbitrary Storefront page-building, drag-and-drop sections, custom content blocks, custom CSS, custom domains, SEO settings, password protection, or Storefront analytics.
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
