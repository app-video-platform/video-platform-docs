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
- Build course, download, consultation, and membership products.
- Set product pricing.
- Review customer relationship records in the Customers area when the frontend Customer contract has data available.
- Review sales metrics and order records in the Sales area when the frontend Sales contracts have data available.
- Review analytics metrics, charts, and summaries in the Analytics area when the frontend Analytics aggregate contract has data available.
- Manage a fixed public Storefront, review product visibility, copy the Storefront link, and inspect the live preview.
- View and filter reviews by visibility where review data is available.
- Connect a calendar provider from settings.

End Users can:

- Browse available products.
- Search products.
- View product detail pages.
- Add products to a wishlist.
- Add products to a shopping cart.
- Move products between wishlist and cart.

Visitors who are not signed in can:

- View the public marketing site.
- Browse product exploration pages.
- View product detail pages.
- View public Storefront pages for creators.

## How it works

The application is organized around roles. After sign-in, the app sends each user to a role-appropriate starting area:

- Administrators land on the admin area.
- Creators land on the creator dashboard.
- End Users land on the user home area.

Some product discovery pages are public. Management pages require sign-in and the correct role.

## Current limitations

- Checkout and payment are not implemented.
- The shopping cart and wishlist are stored in the browser, not in a user account.
- The user library exists, but most library tabs do not yet show purchased content.
- Storefront featured product selection and product ordering have frontend contracts, but the production Storefront configuration backend is not implemented yet.
- Course lessons can be created, but some lesson content editors are not fully persisted.
- Membership products can be created in the frontend builder with native content, included Courses/Downloads, ordering, recurring pricing, and readiness feedback, but production Membership backend endpoints, subscriptions, publishing, and member access are not implemented yet.
- Creator Customers has routes, list controls, detail tabs, and frontend Customer contracts, but production customer-domain endpoints are not implemented yet.
- Creator Sales has routes, list controls, metrics, order detail, and frontend Sales contracts, but production order, payment, refund, subscription, renewal, and entitlement endpoints are not implemented yet.
- Creator Analytics has routes, preset period selection, metrics, charts, summary panels, and a frontend aggregate contract, but the production Analytics endpoint is not implemented yet.
- Messages, email campaigns, and live-session management are visible in places but not production-ready workflows.

## Related pages

- [Roles and Access](./roles-and-access.md)
- [Current Platform Status](./current-platform-status.md)
- [Glossary](./glossary.md)
- [Product Types](../core-concepts/product-types.md)
- [Authentication and Onboarding](../core-concepts/authentication-and-onboarding.md)
