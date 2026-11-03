---
title: Library
sidebar_position: 6
---

# Library

## Overview

The Library is the signed-in customer area for saved and owned products.

The Product tabs load the signed-in user's active backend entitlements. The
Wishlist tab continues to use the browser-saved wishlist.

## Who can use this

Signed-in End Users, Creators and Administrators can open the same Library routes. Creators use this existing Library after successful free enrollment or confirmed paid checkout; there is no separate Creator Library. Opening the page does not itself grant ownership or bypass backend entitlement checks.

## What you can do

Customers can:

- Open the Library area.
- Switch between Library tabs.
- View and manage wishlisted products from the Wishlist tab.
- Move wishlist products to the shopping cart.
- Remove products from the wishlist.
- View entitled Products in All products or the matching Product-type tab.
- Open an entitled Product from its Library card.

The Library currently includes tabs for:

- All products.
- Courses.
- Download Packages.
- Consultation sessions.
- Wishlist.

## How it works

The Library presents product categories as tabs. The Wishlist tab connects to the same wishlist used from product discovery areas and customer navigation.

The All products, Courses, Download Packages, and Consultation sessions tabs
query active entitlements and render the matching Products. Server-backed purchases and entitlements remain authoritative; Cart/Wishlist entries do not grant access, and Product/file requests still require server authorization.

The selected tab follows the active address, including direct links and browser Back/Forward. The visible content and accessible selected state follow that same route. Tab enters the selected tab; Left/Right arrows move between tabs with wrapping, while Home/End select the first/last tab and move focus.

## Current limitations

- The Library lists owned Products, but complete lesson playback, Download delivery actions, and Consultation booking/session management are not all finished end to end.
- Wishlist and Cart data remain browser-local rather than account-synchronized.
- M5 live Creator purchase, backend entitlement/content access and live file access remain unverified end to end. Role access to Library is not proof of access to every listed Product.

## Related pages

- [Customer Overview](./customer-overview.md)
- [Wishlist](./wishlist.md)
- [Shopping Cart](./shopping-cart.md)
- [Current Platform Status](../start-here/current-platform-status.md)
