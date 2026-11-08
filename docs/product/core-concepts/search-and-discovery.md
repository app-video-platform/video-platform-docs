---
title: Search and Discovery
sidebar_position: 5
---

# Search and Discovery

## Overview

Search and discovery help visitors and signed-in users find products.

This concept page summarizes the shared discovery behavior. For the detailed customer journey, use [Exploring Products](../customers/exploring-products.md).

## Who can use this

Visitors, End Users, Creators, and Administrators can access public product discovery pages.

## What you can do

Users can:

- Browse products on the Explore page.
- Search products from the app search field.
- See autocomplete suggestions while typing.
- Open a search results page.
- Move through paginated search results.
- Open public creator Storefront pages when a Storefront link is available.
- Open Product Landing Pages from discovery areas.

## How it works

Explore loads product summaries and presents them as product cards. Search suggestions appear after enough text is entered in the search field. Submitting a search opens a results page with paginated results.

Product cards can include customer actions such as saving to wishlist or adding to cart. Checkout and access are handled from the cart or Product Landing Page rather than by the discovery card itself.

Public Storefront pages present a creator profile and that creator's published products. Storefront product cards link to Product Landing Pages.

Creator links from Explore and Search use the public Storefront destination;
Product viewing remains a separate action. When Creator identity is absent,
Explore keeps a plain label and Search omits the Creator link.

New searches begin on the first page. Browser history and reload restore the
committed search and page, and visible numbering starts at one. Autocomplete
selection belongs to the current input: changing text clears an older highlight,
Enter uses current text unless a current suggestion has been selected, and Escape
closes the list. Selecting a suggestion searches its title. See [Exploring
Products](../customers/exploring-products.md#how-it-works) for keyboard and recovery
behavior.

## Current limitations

- Product images in discovery areas are currently placeholders.
- Search pagination depends on server-provided page information. A known defect can mark the first page as final even when more matching Products exist, leaving Next disabled. Page-label/empty-state improvements do not resolve this backend dependency (BUG-013); reliable later-page access remains pending.
- Storefront pages lead to Product Landing Pages; they do not process checkout directly.
- Wishlist and cart actions are saved in the browser and do not represent checkout, payment, or product ownership.
- Search and cart placement do not grant access. Free enrollment or a successful paid event creates the entitlement.

## Related pages

- [Exploring Products](../customers/exploring-products.md)
- [Product Landing Pages](../customers/product-detail-pages.md)
- [Wishlist](../customers/wishlist.md)
- [Shopping Cart](../customers/shopping-cart.md)
