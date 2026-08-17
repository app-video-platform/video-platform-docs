---
title: Library
sidebar_position: 6
---

# Library

## Overview

The Library is the signed-in customer area for saved and owned products.

Today, the Library exists as a customer-facing shell. The Wishlist tab contains
useful product management behavior. The backend can return the signed-in user's
active Product entitlements, but the Library does not yet use that API to show
owned Course, Download, or Consultation content.

## Who can use this

Signed-in End Users can open the Library.

Administrators can also access the Library route. Creators do not currently have access to the Library in the role setup.

## What you can do

Customers can:

- Open the Library area.
- Switch between Library tabs.
- View and manage wishlisted products from the Wishlist tab.
- Move wishlist products to the shopping cart.
- Remove products from the wishlist.

The Library currently includes tabs for:

- All products.
- Courses.
- Download Packages.
- Consultation sessions.
- Wishlist.

## How it works

The Library presents product categories as tabs. The Wishlist tab connects to the same wishlist used from product discovery areas and customer navigation.

The All products, Courses, Download Packages, and Consultation sessions tabs are
visible but do not currently render entitlement-backed Product content.

## Current limitations

- The Library does not yet show purchased products.
- Customers cannot currently access owned course lessons, download files, or consultation sessions from the Library.
- The Wishlist tab is the only Library tab with meaningful product behavior today.
- The backend stores active/revoked Product entitlements and supports free Product enrollment, but the Library is not integrated with those endpoints.
- The backend can create paid purchase entitlements after a successful Commerce
  payment event, but paid checkout and the Library are not connected to that
  flow in the frontend.

## Related pages

- [Customer Overview](./customer-overview.md)
- [Wishlist](./wishlist.md)
- [Shopping Cart](./shopping-cart.md)
- [Current Platform Status](../start-here/current-platform-status.md)
