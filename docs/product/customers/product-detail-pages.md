---
title: Product Landing Pages
sidebar_position: 3
---

# Product Landing Pages

## Overview

Product Landing Pages are public pages for viewing an individual product.

The current page uses real product information where it is available, including product name, type, description, price, product image, and type-specific summaries. It is different from the Creator Product Overview and Product Workspace.

## Who can use this

Visitors and signed-in users can open public Product Landing Pages for products that are published.

Draft and Hidden products are not rendered as normal public Product Landing Pages.

## What you can do

Customers and visitors can:

- Review the product name, type, description, image, and price.
- View the Product image gallery and a ready promotional video when the creator has added them.
- See recurring Membership pricing when it is configured.
- Review type-specific public summaries when the product has supporting data.
- Enroll in a published free Product after signing in.
- Check existing Product access and open protected content when access is active.
- Start one-time checkout for eligible paid Products when commerce is configured.
- Complete one-time test checkout for eligible paid Products when automatic fake payment is enabled.
- See an honest unavailable state when commerce or Membership checkout is unavailable.

## How it works

Published products render through the public Product Landing Page. The page inherits the Creator's Storefront theme when available and otherwise uses the platform/default Storefront theme.

Product-specific landing-page configuration is server-backed for the current marketing copy, hero layout, supported section visibility, and supported section order behavior.

The page can show type-specific summaries:

- **Course**: module/section count, lesson count, curriculum outline, lesson titles, and lesson types.
- **Download**: section count, file/resource count when available, section outline, and file names. It does not expose storage URLs or technical file metadata.
- **Consultation**: public-relevant configured details such as duration, meeting method, buffers, daily availability, booking messages, policies, and connected calendar availability when present.
- **Membership**: conservative product information and recurring pricing. It does not show subscriber counts, active members, revenue, entitlement state, or Membership feed details.

Creators configure product-specific public presentation from the Product Landing Page Builder. Product-owned fields such as name, description, price, product status, thumbnail, and product contents are edited from Product Workspace instead.

## Current limitations

- The deployed test checkout does not charge a card. With the fake provider
  enabled, eligible paid Products complete immediately, grant real Product
  access, and appear in the Library. This is functional testing, not real
  payment processing.
- Membership subscription checkout and waitlists are not implemented.
- Ratings, reviews, customer counts, subscriber/member counts, landing-page analytics, SEO controls, slugs, custom domains, slideshows, presentations, and arbitrary page-builder blocks are not part of the current Product Landing Page.
- Product-specific theme overrides are not supported; Product Landing Pages inherit the Creator Storefront theme or use the default Storefront theme.
- Product Landing Page presentation configuration is backend-persisted. The page still composes Product and Creator/Storefront data through separate reads rather than a dedicated combined public Product read model.

## Related pages

- [Exploring Products](./exploring-products.md)
- [Wishlist](./wishlist.md)
- [Shopping Cart](./shopping-cart.md)
- [Library](./library.md)
