---
title: Creating a Product
sidebar_position: 3
---

# Creating a Product

## Overview

Creators use the product creation flow to create an initial draft and then configure the product in the builder.

After a product exists, creators can inspect it from Product Overview, use explicit edit actions to return to Product Workspace, and use Product Landing Page Builder for product-specific public presentation settings.

The shared frontend creation flow presents four product types:

- Course
- Download
- Consultation
- Membership

Course, Download, and Consultation are supported by the production backend.
Membership is available in the frontend builder, but its Product creation and
domain persistence contracts are not implemented by the current backend.

## Who can use this

This page is for Creators creating or editing products.

Administrators can also create products for creators from the Admin area.

## What you can do

Creators can:

- Start a new product from the Products area or creator dashboard empty state.
- Choose a product type.
- Enter an initial product title.
- Create the initial draft product.
- Enter the full product builder after the draft is created.
- Return to Product Overview for read-only product inspection after the product exists.
- Open Product Landing Page Builder to customize product-specific public presentation settings.
- Edit shared product details.
- Set product pricing.
- Upload product media from the Media area.
- Configure product-specific details for Course, Download, Consultation, or Membership products.

## How it works

### Start the draft

Product creation starts with a product type selector and a title field.

The Continue button is disabled until the product has the required initial information. When the creator continues, the app creates an initial draft product and opens the full builder.

### Use the shared builder areas

After the draft exists, the Product Workspace shows shared areas for product setup:

- **Basics**: edit title, product type display, and description.
- **Pricing**: choose free or paid one-time pricing for most products. Membership products use a Membership-specific recurring pricing control for amount, EUR currency, and monthly or yearly billing interval.
- **Media**: select product image files.

Course and Download products also show **Sections**.

Consultation products show **Consultation Details** instead of Sections.

Membership products show **Membership Content** instead of Sections. Membership Content can contain native Posts, Videos, and Resources, plus referenced existing Course and Download products.

### Configure the product type

After the shared setup, continue with the page for the selected product type:

- [Course Products](./course-products.md)
- [Download Products](./download-products.md)
- [Consultation Products](./consultation-products.md)
- [Membership Products](./membership-products.md)
- [Creating Products for Creators](../administrators/creating-products-for-creators.md)

### Save behavior

The builder autosaves shared product details after changes. Sections and lessons also save through their own editing behavior after they exist.

Creators may see loading or saving behavior while changes are being processed.

### Overview vs Workspace

Product Overview is a read-only management page for inspecting product identity, status, pricing, dates, and type-specific summaries. Product Workspace is the focused editing environment for changing product details and content. Product Landing Page Builder is the Creator area for product-specific public presentation settings such as marketing copy, hero layout, section visibility, and section ordering.

Product identity links generally open Product Overview. Explicit edit/build actions open Product Workspace.

## Current limitations

- Product media selection is visible, but product image persistence is not complete enough to treat uploaded media as reliably available on product cards or public product pages.
- The builder saves products as drafts. A complete creator publishing workflow is not currently available.
- Product type-specific areas do not all have the same maturity. Course lesson content has important limitations, Download file upload and Consultation setup fields are more complete, and Membership authoring persists content metadata, included Products, feed order, and recurring pricing but not binary media or publishing.
- Product Overview is read-only and does not provide product analytics, orders, customers, access management, publish/unpublish controls, inline landing-page editing, or SEO controls.
- Product Landing Page Builder does not edit canonical Product fields, Creator profile fields, Storefront theme, checkout, access, subscriptions, waitlists, SEO, custom domains, or arbitrary page-builder blocks.
- Product Landing Page configuration is persisted for the current presentation settings, but a dedicated public Product read model is still not part of the current implementation.

## Related pages

- [Creator Overview](./creator-overview.md)
- [Managing Products](./managing-products.md)
- [Course Products](./course-products.md)
- [Download Products](./download-products.md)
- [Consultation Products](./consultation-products.md)
- [Membership Products](./membership-products.md)
