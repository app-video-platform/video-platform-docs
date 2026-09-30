---
title: Product Overview
sidebar_position: 1
---

# Product Overview

## Overview

Video Platform App is a creator commerce platform for selling digital learning products and services.

The current product supports three main groups:

- **Creators** create and manage products.
- **End Users** browse products, save items, and use a shopping cart.
- **Administrators** manage platform users, products, and audit activity.

The frontend implementation is still evolving. Some areas are fully connected to the backend, some are visible but incomplete, and some use browser-only state. This documentation describes what users can do today and calls out important limitations where they matter.

## Who can use this

This overview is useful for:

- New team members trying to understand the product.
- Creators learning what they can manage.
- Administrators reviewing platform capabilities.
- End Users learning what parts of the shopping experience are available.

## What you can do

Administrators can:

- View an admin dashboard.
- Search and filter users.
- Change a user's platform role.
- Search, filter, view, edit, create, and delete products.
- Create products on behalf of creators.
- Review admin audit logs.

Creators can:

- View a creator dashboard.
- Create and manage products.
- Inspect individual products from Product Overview pages.
- Configure product-specific public presentation in Product Landing Page Builder.
- Build backend-persisted Course, Download, Consultation, and Membership products.
- Set product pricing.
- Review server-backed customer relationship records in the Customers area.
- Review server-backed Sales metrics and itemized Order records.
- Review server-backed Analytics metrics, charts, and summaries.
- Use the Storefront Builder to edit public profile fields, set public email, customize the Storefront presentation, review product visibility, choose a featured product, order products, and open or copy the public Storefront link.
- View and filter reviews by visibility where review data is available.
- Connect a calendar provider from settings.

End Users can:

- Browse available products.
- Search products.
- View public Product Landing Pages.
- Enroll in free Products where supported.
- Add products to a wishlist.
- Add products to a shopping cart.
- Check out eligible paid non-Membership carts through the current test Commerce flow.
- Move products between wishlist and cart.
- Enroll in eligible free Products and initiate checkout for eligible paid
  Products after signing in.

Visitors who are not signed in can:

- View the public marketing site.
- Browse product exploration pages.
- View public Product Landing Pages.
- View public Storefront pages for creators.

## How it works

The application is organized around roles. After sign-in, the app sends each user to a role-appropriate starting area:

- Administrators land on the admin area.
- Creators land on the creator dashboard.
- End Users land on the user home area.

Some product discovery pages are public. Management pages require sign-in and the correct role.

## Current limitations

- Customer-facing purchase/access paths exist for free enrollment and eligible paid Cart checkout, but no production payment provider or real charging is configured.
- The shopping cart and wishlist are stored in the browser, not in a user account.
- The user library loads active entitlement-backed Products, but complete Course playback, Download delivery actions, and Consultation booking/session workflows are not all finished end to end.
- Creator Product Overview pages are read-only and do not include product-specific analytics, orders, customer counts, inline landing-page editing, SEO controls, or publishing management.
- Product Landing Page Builder persists a narrow presentation configuration. It does not provide subscriptions, waitlists, SEO controls, custom domains, arbitrary page-builder blocks, Product-specific theme overrides, checkout configuration, fulfillment, entitlements, or a combined public Product read model.
- Storefront theme, featured Product selection, ordering, public profile email, and the public Storefront read model are backend-supported.
- Course lessons can be created, but some lesson content editors are not fully persisted.
- Membership authoring persists native content metadata, included Courses/Downloads, ordering, and recurring pricing. Binary media, subscriptions, checkout, publishing, entitlements, and member access are not implemented.
- Creator Customers has server-backed routes, list controls, and detail tabs for the current Customer reporting behavior.
- Creator Sales has server-backed routes, list controls, metrics, multi-Product Order detail, and summary/order reads for the current Sales reporting behavior.
- Creator Analytics has server-backed routes, preset period selection, metrics, charts, summary panels, and aggregate reporting for the current Analytics behavior.
- Subscription and Membership reporting remains unavailable.
- Messages, email campaigns, and live-session management are visible in places but not production-ready workflows.

## Related pages

- [Roles and Access](./roles-and-access.md)
- [Current Platform Status](./current-platform-status.md)
- [Glossary](./glossary.md)
- [Product Types](../core-concepts/product-types.md)
- [Authentication and Onboarding](../core-concepts/authentication-and-onboarding.md)
