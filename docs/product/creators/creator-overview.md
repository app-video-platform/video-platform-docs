---
title: Creator Overview
sidebar_position: 1
---

# Creator Overview

## Overview

The Creator area is where creators manage the products they want to sell on the platform.

Creators can create products, edit product details, organize product content, set pricing, and review their product list. The current creator workflow is centered on four supported product types:

- Course
- Download
- Consultation
- Membership

## Who can use this

This page is for signed-in users with the Creator role.

Administrators can also access creator product management areas when managing products across the platform.

## What you can do

Creators can currently:

- View a creator dashboard.
- See creator-owned products.
- Open the Customers area and inspect available customer relationship records.
- Open the Sales area and inspect available order records.
- Open the Analytics area and inspect available business performance summaries.
- Open the Storefront Builder, edit supported public profile fields, set public email, customize the Storefront presentation, review product visibility, choose a featured product, order products, and open or copy the public Storefront link.
- Create new products.
- Open Product Overview pages for read-only product inspection.
- Edit Product Landing Page presentation settings for individual products.
- Edit existing products.
- Configure shared product details such as title, description, pricing, and media.
- Configure course sections and lessons.
- Configure download sections and upload files.
- Configure consultation details such as duration, meeting method, buffers, maximum sessions per day, confirmation message, and cancellation policy.
- Configure Membership Content with native Posts, Videos, Resources, and included existing Course and Download products.
- Configure Membership recurring pricing controls in the builder.

## How it works

Creators usually start from the creator dashboard, Products area, Storefront area, Customers area, Sales area, or Analytics area.

The product workflow has two levels:

- **Product Overview**: inspect a product's identity, status, pricing, dates, and type-specific summary from the normal Creator area.
- **Product Landing Page Builder**: configure product-specific public presentation settings such as marketing copy, hero layout, section visibility, and section order.
- **Shared product setup**: choose a product type, create the initial draft, edit basic information, set pricing, and add media.
- **Product-specific setup**: configure course content, download files, consultation details, or membership content depending on the selected product type.

Product identity links generally open Product Overview. Explicit edit/build actions open the focused Product Workspace.

For most product work, start with [Managing Products](./managing-products.md). To create a new product, continue to [Creating a Product](./creating-a-product.md).

For the creator's public page, start with [Storefront](./storefront.md).

For customer relationship review, start with [Customers](./customers.md).

For order review, start with [Sales](./sales.md).

For business performance review, start with [Analytics](./analytics.md).

## Current limitations

- The dashboard includes audience and sales sections, but they do not yet show real performance data.
- Product Overview is read-only and does not include product-scoped analytics, order history, customer counts, subscriber counts, inline landing-page editing, SEO controls, or publish/unpublish management.
- Product Landing Page Builder does not provide checkout, free access fulfillment, subscriptions, waitlists, entitlements, arbitrary page-builder blocks, Product-specific theme overrides, SEO controls, slugs, custom domains, galleries, slideshows, promo video, or analytics.
- Storefront theme, featured product selection, product ordering, and public read-model contracts exist in the frontend, but the production Storefront backend endpoints are not implemented yet.
- Customer relationship details have frontend list/detail contracts, but dedicated production Customer APIs are not implemented yet.
- Sales order and financial details have frontend summary/order contracts, but production Sales and order APIs are not implemented yet.
- Analytics business data has a frontend aggregate contract, but the production Analytics API is not implemented yet.
- Marketing campaigns, messages, and customer booking flows are outside the current core product creation workflow.
- Some course lesson content editors are visible but not fully persisted yet.
- Membership-native content, included products, recurring pricing, ordering, and readiness feedback have frontend contracts where appropriate, but production backend integration remains pending.

## Related pages

- [Managing Products](./managing-products.md)
- [Creating a Product](./creating-a-product.md)
- [Course Products](./course-products.md)
- [Download Products](./download-products.md)
- [Consultation Products](./consultation-products.md)
- [Membership Products](./membership-products.md)
- [Storefront](./storefront.md)
- [Customers](./customers.md)
- [Marketing and Reviews](./marketing-and-reviews.md)
- [Sales](./sales.md)
- [Analytics](./analytics.md)
- [Current Platform Status](../start-here/current-platform-status.md)
