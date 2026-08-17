---
title: Membership Products
sidebar_position: 7
---

# Membership Products

## Overview

Membership products let creators persist a membership-style content hub from the current builder.

The Membership builder and backend support shared Product setup, native content metadata, included Course and Download Products, unified content ordering, recurring pricing configuration, and readiness feedback. Membership does not yet create a subscription, entitlement, checkout, published Product, or member-access experience.

## Who can use this

This page is for Creators configuring Membership products.

## What you can do

Creators can:

- Select Membership in the shared product creation flow and persist a Draft Product.
- Use shared product settings such as basics, pricing, and media.
- Open Membership Content in the builder.
- Add native Posts, Videos, and Resources.
- Edit or delete native Membership content.
- Select existing Course and Download products to include.
- See native content and included products in one Membership content feed.
- Remove products from the included-products list.
- Choose Newest first or Manual ordering.
- Enter a Membership recurring price amount.
- Use EUR as the displayed recurring price currency.
- Choose a monthly or yearly billing interval.
- See readiness blockers and warnings in the builder header.

## How it works

### Create the product

Start from [Creating a Product](./creating-a-product.md), choose Membership, and
enter a title. The backend creates a Draft Membership and the builder saves its
supported Product, content, configuration, and feed data.

Membership products use the shared builder areas:

- Basics
- Pricing
- Membership Content
- Media

Membership products do not use Course or Download sections and do not show Consultation Details.

### Add membership content

The Membership Content area lets a creator build a Membership feed. Membership content is not organized like Course modules and lessons; it acts as a content hub.

Use **+ Add Content** to add:

- Video
- Post
- Resource
- Existing Product

Native Posts, Videos, and Resources are Membership-only content types. They can be created, edited, deleted, persisted, and marked Draft, Published, or Hidden.

For Videos and Resources, the current backend saves the selected file's name,
MIME type, size, and a server-generated file reference. It does not upload or
deliver the binary file yet.

Existing Products are separate standalone products that the Membership references. Adding a Course or Download to a Membership does not convert that product into Membership-native content.

Only Course and Download products are eligible for inclusion. Other Membership products are not shown as eligible included products.

The included-product picker uses the creator's existing product summaries. After products are selected, the Membership Content area shows them alongside native Membership content with title, type, status, and image or product-type icon where available. Creators can remove a product from the feed and select it again later.

### Order membership content

Membership Content supports a unified feed for native content and included Products.

The current ordering modes are:

- **Newest first**: the default. Feed entries are ordered by when they were added.
- **Manual**: lets the creator curate the sequence with **Move Up** and **Move Down** controls.

Manual ordering does not use drag-and-drop in the current implementation.

### Configure recurring pricing

Membership products use a recurring pricing UI instead of the standard one-time price selector. Recurring pricing remains Product-owned: the Membership uses the Product price amount together with pricing model, billing interval, and currency fields.

The Pricing area includes:

- Membership price amount.
- EUR currency display.
- Monthly billing interval.
- Yearly billing interval.
- A summary of the recurring charge.

### Check readiness

Memberships have frontend readiness feedback in the builder header. This feedback is guidance only; it does not publish the Membership or change the Product status.

Blocking conditions are:

- Membership name is required.
- Recurring price must be valid.
- At least one published native content item or published included Product is required.

Non-blocking warnings include:

- No thumbnail.
- Draft native content.
- Hidden native content.
- No native content.
- No included Products.

When the readiness check passes, the Membership Publish button remains disabled. It does not call a Membership publish API or mutate Product status; the backend also rejects attempts to set a Membership Product to Published.

## Current limitations

- Video and Resource selection persists metadata only; the binary file is not uploaded or available to members.
- Editor drafts, selected File objects, chooser state, picker state, and the active builder tab remain local UI state.
- Readiness feedback is derived in the frontend and is not a backend publishing check.
- No real subscription or Stripe checkout flow exists for Membership products yet.
- No entitlement or member access logic exists yet.
- No buyer-facing Membership experience exists yet.
- Real Membership publishing is not implemented yet.
- Membership media and public Product Landing Page presentation still have limitations shared with other product types.

## Related pages

- [Creating a Product](./creating-a-product.md)
- [Managing Products](./managing-products.md)
- [Course Products](./course-products.md)
- [Download Products](./download-products.md)
- [Consultation Products](./consultation-products.md)
- [Product Types](../core-concepts/product-types.md)
- [Current Platform Status](../start-here/current-platform-status.md)
