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
- Persisted Consultation setup fields and seven-day weekly availability.
- Product thumbnail, ordered gallery, and promo-video uploads.
- Readiness checks and publishing for Course, Download, and Consultation products.
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
| Product Landing Pages | Product Landing Page V2 exists for public published Products, uses backend-persisted presentation configuration and Product Media, inherits the Storefront/default theme, and connects free enrollment, access checks, and eligible fake checkout completion. Direct Product reads protect Draft/Hidden Products and redact protected content. A combined public Product read model, real payment provider, subscriptions, waitlists, SEO, custom domains, and arbitrary page-builder blocks remain unsupported. |
| Course products | Sections and lesson shells can be created. The backend persists Quiz definitions and attempts, but the current frontend does not yet provide a complete reliable Video, Article, Quiz delivery, and customer learning workflow. |
| Download products | Creator-side file upload and backend authorized Download delivery exist, but the frontend Library does not expose customer delivery. |
| Consultation products | Setup fields and weekly availability are persisted. Customer booking, time-slot selection, rescheduling, and session management are not implemented. |
| Membership products | Creator/Admin Membership authoring is persisted for Draft/Hidden Products, recurring pricing configuration, native Posts and Video/Resource metadata, included same-owner Course/Download Products, and feed ordering. Binary media, Membership publishing, subscriptions, checkout, entitlements, and member access are unavailable. |
| Wishlist | Works in the browser and persists locally, but is not tied to a backend user account. |
| Shopping cart | Cart contents persist locally. Free-only carts use backend enrollment. In the deployed functional-test environment, eligible paid carts use automatic fake success, clear the Cart, and navigate to the Library without charging a card. |
| Library | The Library loads active backend Product entitlements. Free enrollments and automatic fake purchases appear after access is granted. Product-specific customer delivery still varies by type. |
| Storefront | Creator Storefront Builder and public Storefront pages are server-backed. The Creator-only Builder uses the shared public presentation, supports inline public profile editing, public email, Light/Dark appearance, accent color, Modern/Classic/Friendly typography, featured product selection, product ordering, and draft Save/Reset behavior. Published products are shown publicly; draft and hidden products are withheld. |
| Creator dashboard | The Creator Dashboard aggregate is server-backed for the current 30-day summary, recent activity, top Products, and needs-attention presentation. Active Memberships are unavailable until subscription tracking exists. |
| Creator Customers | Creator-only backend list/detail reporting covers paid/refunded buyers and free, purchased, or manually granted Product access, including Free enrollment as an access source. Membership/waitlist relationships, editable notes/tags, exports, and mutations are unavailable. |
| Creator Sales | Creator-only backend reporting covers retained revenue, paid Orders, full refunds, failures, filters, pagination, immutable item snapshots, payment context, entitlement-derived access, and multi-Product Order itemization. Production payments, subscriptions, refund/retry actions, exports, taxes, and payouts are unavailable. |
| Creator Analytics | Creator-only backend reporting covers 7/30/90-day Commerce performance, Product ranking, lifetime/new customers, refund rate, and failures. Membership data is intentionally empty. Custom ranges, Membership analytics, traffic/conversion analytics, taxes, payouts, and exports are unavailable. |
| Marketing and reviews | Reviews can be listed and filtered, but reply and moderation controls are incomplete in the UI. Other marketing tabs are mostly placeholders. |
| Settings | Several settings tabs render forms without saving changes. Calendar connection is the clearest backend-backed setting. |
| Messages | Messages navigation exists in places, but a standalone Messages page is not implemented in the current router. |

## What should not be documented as available

Do not describe the following as supported product capabilities:

- Production payment processing.
- Product Overview product-scoped revenue analytics, orders, customer counts, subscriber/member counts, conversion, charts, ratings/reviews, Storefront visibility controls, access management, duplicate/archive, publish/unpublish management, inline landing-page editing, SEO controls, or dedicated Product Overview backend APIs.
- Production-provider payment completion, Membership subscription checkout, waitlists, ratings/reviews, landing-page analytics, SEO controls, slugs, custom domains, slideshows, presentations, arbitrary page-builder blocks, Product-specific theme overrides, or a dedicated combined public Product read model.
- Membership binary Video/Resource upload or delivery, subscriptions, checkout, entitlement logic, Product publishing, member access, or buyer-facing Membership flows.
- Complete customer consumption flows for every Course, Download, and Consultation type. The Library lists entitlements, but delivery/booking maturity still varies by Product type.
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
