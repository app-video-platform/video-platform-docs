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
Membership authoring is also persisted for the current builder scope, including
Product-owned recurring pricing, native content metadata, included Products,
and feed configuration. Membership publishing, checkout, subscriptions,
entitlements, and member access are still unavailable.

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
- **Media**: manage Product-owned presentation media: thumbnail, gallery images, and a Product-level promo video.
- **Readiness**: review frontend guidance and backend readiness feedback before publishing supported Product types.

Course products show **Curriculum** for sections and lessons.

Download products show **Files** for file groups and uploaded deliverables.

Consultation products show **Availability** for session configuration and weekly availability.

Membership products show **Content** for native Posts, Videos, and Resources, plus referenced existing Course and Download products.

### Product media

Product media is presentation media used across Product cards, Storefront, Product Overview, and Product Landing Pages. It is separate from Course lesson videos, Download deliverable files, and Membership native Video/Resource binary content.

The current Product media area supports:

- Thumbnail image upload/removal.
- Product gallery image upload, removal, and ordering.
- Product promo video upload/removal.

Image uploads support JPEG, PNG, WebP, and GIF files up to 10 MB per image. Promo video uploads support MP4 and WebM files up to 100 MB. A gallery can contain up to 20 images total.

The frontend uses Product media upload APIs that send the selected raw file to the backend. Backend storage persistence is handled behind those APIs; Product media is not implemented as a direct browser-to-Spaces upload flow.

### Configure the product type

After the shared setup, continue with the page for the selected product type:

- [Course Products](./course-products.md)
- [Download Products](./download-products.md)
- [Consultation Products](./consultation-products.md)
- [Membership Products](./membership-products.md)
- [Creating Products for Creators](../administrators/creating-products-for-creators.md)

### Save behavior

The builder autosaves shared product details after changes. Sections, lessons,
Download files, Membership content, and Product media save through their own
operation-specific flows after the Product exists.

Creators may see loading or saving behavior while changes are being processed.

### Readiness and publishing

For supported non-Membership Products, **Publish** first works with the current Product Workspace save state, then uses frontend readiness checks for immediate guidance. If known blockers remain, the workspace opens Readiness instead of publishing.

When local checks pass, publishing updates the existing Product with `status: PUBLISHED`. Backend readiness validation is authoritative and can reject the update with field-specific errors. Those backend errors are surfaced in the Readiness experience so the creator can correct the Product and retry.

Frontend readiness does not guarantee successful publication. Backend readiness remains the final validation step, including when a published Product is edited into an invalid state.

Membership readiness can be evaluated, but Membership Product publishing remains disabled. Unpublish is not part of the current Product lifecycle.

### Overview vs Workspace

Product Overview is a read-only management page for inspecting product identity, status, pricing, dates, and type-specific summaries. Product Workspace is the focused editing environment for changing product details and content. Product Landing Page Builder is the Creator area for product-specific public presentation settings such as marketing copy, hero layout, section visibility, and section ordering.

Product identity links generally open Product Overview. Explicit edit/build actions open Product Workspace.

## Current limitations

- Product media covers thumbnail, gallery, and promo video only. It does not make Course lesson-video storage or Membership native Video/Resource binary delivery complete.
- Publish is available for supported non-Membership Products through Product update and backend readiness validation. Membership publishing remains unavailable.
- Product type-specific areas do not all have the same maturity. Course lesson media/customer learning has important limitations, Download file upload and Consultation setup fields are more complete, and Membership authoring persists content metadata, included Products, feed order, and recurring pricing but not binary media or publishing.
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
