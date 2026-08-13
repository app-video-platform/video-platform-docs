---
title: Managing Products
sidebar_position: 2
---

# Managing Products

## Overview

The Products area is where creators review and manage the products they own.

It is the main place to find existing products, filter the list, create a new product, and open a product for inspection.

## Who can use this

This page is for Creators.

Administrators can also manage products, but administrator-specific product management will be documented separately.

## What you can do

In the current Products area, creators can:

- View their product list.
- See product rows or responsive cards with product title, type, status, price, and update information.
- Search products by title or description.
- Filter products by status.
- Filter products by product type.
- Sort products by creation date, update date, or name.
- Start creating a new product.
- Open an existing product's Overview from the list.

Supported product type filters are:

- Course
- Download Packages
- Consultation Sessions
- Memberships

Supported status filters are:

- Draft
- Published
- Hidden

## How it works

The Products area loads the creator's product summaries and then applies search, filters, and sorting in the product list.

Use **Add product** to start a new product. Product creation begins with the shared creation flow described in [Creating a Product](./creating-a-product.md).

Opening a product identity takes the creator to the read-only Product Overview. The Overview is the management home for one product and shows the product thumbnail when available, name, type, status, description, pricing, created and updated dates, and product-specific summary information.

Product Overview is separate from the Product Workspace:

- **Product Overview** is for inspection and navigation.
- **Product Workspace** is for editing and building the product.

Use **Edit product** from Product Overview, or another explicit edit/build action, to enter the Product Workspace. Published products also show **View public page**, which opens the current buyer-facing product detail page.

The current Product Overview shows type-specific read-only summaries:

- **Course**: section/module count, lesson count, and a compact section outline.
- **Download**: section count, file count when file data is available, and a compact section outline.
- **Consultation**: configured appointment details such as duration, meeting method, buffers, maximum sessions per day, messages, policies, and calendar information when present.
- **Membership**: generic Product information and configured recurring pricing. It does not show subscriber, member, or revenue metrics.

Creator product navigation follows this rule: product identity links open Product Overview, while explicit edit/build actions open Product Workspace. This applies to the Products list and relevant Creator surfaces such as Dashboard, Analytics, and Sales where the implementation uses product identity links.

## Current limitations

- Search, filtering, and sorting are applied to the products already loaded in the product list.
- Product images are shown when available, but media persistence is not complete enough to treat product imagery as reliable everywhere.
- The list can show statuses such as Published and Hidden, but the creator builder currently saves products as drafts and does not provide a complete publishing workflow.
- Product Overview does not provide product-specific revenue analytics, order history, customer counts, subscriber or member counts, conversion data, charts, ratings, reviews, Storefront visibility controls, access management, duplicate/archive actions, publish/unpublish controls, landing-page customization, or SEO controls.
- The public product detail page opened by **View public page** still includes placeholder or hardcoded buyer-facing content and inactive purchase actions. It is not the future customizable product landing-page experience.
- Product deletion is supported from product management flows, but the Products list itself is primarily focused on viewing and opening products.

## Related pages

- [Creator Overview](./creator-overview.md)
- [Creating a Product](./creating-a-product.md)
- [Course Products](./course-products.md)
- [Download Products](./download-products.md)
- [Consultation Products](./consultation-products.md)
- [Membership Products](./membership-products.md)
