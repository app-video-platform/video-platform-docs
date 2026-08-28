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

All four Product types have backend authoring persistence. Membership supports
recurring pricing, native content metadata, included Products, and feed
ordering, but not publishing, subscriptions, checkout, entitlements, or member
access.

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
- **Media**: upload a thumbnail, an ordered image gallery, and an optional promotional video.

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

The **Publish** action checks the current Product for blockers. The backend
repeats these checks before accepting Published status, so stale or bypassed
frontend state cannot publish an incomplete Product. Course products need
content, Download products need a confirmed file, and Consultation products
need complete paid-session details and at least one valid weekly availability
window. Membership publishing remains unavailable.

### Overview vs Workspace

Product Overview is a read-only management page for inspecting product identity, status, pricing, dates, and type-specific summaries. Product Workspace is the focused editing environment for changing product details and content. Product Landing Page Builder is the Creator area for product-specific public presentation settings such as marketing copy, hero layout, section visibility, and section ordering.

Product identity links generally open Product Overview. Explicit edit/build actions open Product Workspace.

## Current limitations

- Product media is persisted and publicly delivered through the Product CDN. Images support JPEG, PNG, WebP, and GIF up to 10 MB; promo videos support MP4 and WebM up to 100 MB; galleries support up to 20 images.
- Course, Download, and Consultation products can be published after their readiness blockers are resolved. Membership products remain Draft or Hidden.
- Product type-specific areas do not all have the same maturity. Course lesson delivery still has important limitations, while Download file upload and Consultation configuration are persisted. Membership authoring persists content metadata, included Products, feed order, and recurring pricing but not binary member content or publishing.
- Product Overview is read-only and does not provide product analytics, orders, customers, access management, publish/unpublish controls, inline landing-page editing, or SEO controls.
- Product Landing Page Builder does not edit canonical Product fields, Creator profile fields, Storefront theme, checkout, access, subscriptions, waitlists, SEO, custom domains, or arbitrary page-builder blocks.
- Product Landing Page configuration is backend-persisted for the current
  presentation settings, but a dedicated combined public Product read model is
  still unavailable.

## Related pages

- [Creator Overview](./creator-overview.md)
- [Managing Products](./managing-products.md)
- [Course Products](./course-products.md)
- [Download Products](./download-products.md)
- [Consultation Products](./consultation-products.md)
- [Membership Products](./membership-products.md)
