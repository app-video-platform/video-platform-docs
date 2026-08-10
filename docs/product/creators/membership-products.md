---
title: Membership Products
sidebar_position: 7
---

# Membership Products

## Overview

Membership products let creators configure a membership-style content hub in the current frontend builder.

The current Membership builder supports shared product setup, native member-only content, including existing Course and Download products, unified content ordering, recurring pricing controls, and readiness feedback. It does not yet create a real subscription, entitlement, checkout, publish action, or member-access experience.

## Who can use this

This page is for Creators configuring Membership products.

## What you can do

Creators can:

- Create a Membership product from the shared product creation flow.
- Use shared product settings such as basics, pricing, and media.
- Open Membership Content in the builder.
- Add native Posts, Videos, and Resources.
- Edit or delete native Membership content while the builder page remains open.
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

Start from [Creating a Product](./creating-a-product.md), choose Membership, enter a title, and continue into the builder.

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

Native Posts, Videos, and Resources are Membership-only content types in the builder. They can be created, edited, deleted, and marked Draft, Published, or Hidden while the builder page remains open.

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

Membership products use a recurring pricing UI instead of the standard one-time price selector.

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

When the readiness check passes, the Membership Publish button becomes clickable, but clicking it only shows a message that Membership publishing is waiting for persistence support. It does not call a Membership publish API or mutate Product status.

## Current limitations

- Native Posts, Videos, and Resources are stored only in the current frontend builder state and are not persisted yet.
- Included Product relationships are stored only in the current frontend builder state and are not persisted yet.
- Recurring pricing is stored only in the current frontend builder state and is not persisted yet.
- Membership ordering is stored only in the current frontend builder state and is not persisted yet.
- Membership-specific state survives switching between builder tabs while the page remains open, but it is lost on full page refresh or reload.
- The current Product API does not include Membership-specific native content, recurring pricing, ordering, or included-product relationship fields.
- No real subscription or Stripe checkout flow exists for Membership products yet.
- No entitlement or member access logic exists yet.
- No buyer-facing Membership experience exists yet.
- Real Membership publishing is not implemented yet.
- Membership media and public product page presentation still have limitations shared with other product types.

## Related pages

- [Creating a Product](./creating-a-product.md)
- [Managing Products](./managing-products.md)
- [Course Products](./course-products.md)
- [Download Products](./download-products.md)
- [Consultation Products](./consultation-products.md)
- [Product Types](../core-concepts/product-types.md)
- [Current Platform Status](../start-here/current-platform-status.md)
