---
title: Membership Products
sidebar_position: 7
---

# Membership Products

## Overview

Membership products let creators configure a membership-style product in the current frontend builder.

The current Membership builder supports shared product setup, selecting existing Course and Download products as membership content, and entering recurring pricing controls. It does not yet create a real subscription, entitlement, checkout, or member-access experience.

## Who can use this

This page is for Creators configuring Membership products.

## What you can do

Creators can:

- Create a Membership product from the shared product creation flow.
- Use shared product settings such as basics, pricing, and media.
- Open Membership Content in the builder.
- Select existing Course and Download products to include.
- See included products listed with title, type, status, and image or product-type icon.
- Remove products from the included-products list.
- Enter a Membership recurring price amount.
- Use EUR as the displayed recurring price currency.
- Choose a monthly or yearly billing interval.

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

The Membership Content area lets a creator select existing products to include in the Membership.

Only Course and Download products are eligible for inclusion. Other Membership products are not shown as eligible included products.

The included-product picker uses the creator's existing product summaries. After products are selected, the Membership Content area shows them in the included-products list. Creators can remove a product from that list and select it again later.

### Configure recurring pricing

Membership products use a recurring pricing UI instead of the standard one-time price selector.

The Pricing area includes:

- Membership price amount.
- EUR currency display.
- Monthly billing interval.
- Yearly billing interval.
- A summary of the recurring charge.

## Current limitations

- Included products are stored only in the current frontend state and are not persisted yet.
- Recurring pricing is stored only in the current frontend state and is not persisted yet.
- The current Product API does not include Membership-specific recurring pricing fields or included-product relationship fields.
- No real subscription or Stripe checkout flow exists for Membership products yet.
- No entitlement or member access logic exists yet.
- No buyer-facing Membership experience exists yet.
- Membership media and public product page presentation still have limitations shared with other product types.

## Related pages

- [Creating a Product](./creating-a-product.md)
- [Managing Products](./managing-products.md)
- [Course Products](./course-products.md)
- [Download Products](./download-products.md)
- [Consultation Products](./consultation-products.md)
- [Product Types](../core-concepts/product-types.md)
- [Current Platform Status](../start-here/current-platform-status.md)
