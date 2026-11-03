---
title: Wishlist
sidebar_position: 4
---

# Wishlist

## Overview

The wishlist lets customers save products for later.

Wishlist items can be added from product discovery areas, viewed from customer navigation, and managed from the Library's Wishlist tab.

## Who can use this

Signed-in End Users, Creators and Administrators can access the shared Library's Wishlist tab.

Wishlist actions are also visible in product discovery areas. Saved wishlist items are kept in the browser.

## What you can do

Customers can:

- Add a product to the wishlist from a product card.
- See a wishlist count in customer navigation.
- Open a wishlist dropdown from the navigation bar.
- Open the Library's Wishlist tab.
- Remove products from the wishlist.
- Move wishlist products to the shopping cart.
- See when a wishlist product is already in the cart.

## How it works

Use the heart action on a product card to save or unsave a product. The wishlist count updates in the navigation bar when products are saved.

The wishlist dropdown gives a quick view of saved items. Its **Add to cart** action uses the same move as **Move to cart** in the Library: it adds the Product once, removes it from Wishlist and opens Cart. If the Product is already in Cart, it stays there without duplication and its Wishlist entry is removed. If its details cannot be accepted by Cart, the move leaves it in Wishlist and does not navigate. The Library's move keeps you on the Wishlist tab; a Product already in Cart shows a disabled **Already in cart** action there. The dropdown can still remove that Wishlist entry without adding a duplicate. The Library's Wishlist tab also supports removing saved items.

Wishlist items are saved in this browser and remain local preferences across account/session changes. Invalid saved entries and duplicates are discarded; malformed saved data can reopen empty. If browser storage is unavailable, the app continues but persistence across reload is not guaranteed. This recovery does not restore purchases or entitlements.

## Current limitations

- Wishlist items are not synchronized to a backend account.
- Wishlist items may not follow the user across devices or browsers.
- Product images and ratings shown in wishlist areas include placeholder content.
- Moving a product to the cart does not purchase the product or grant access to it.
- M5 browser-storage recovery through the synthetic browser surface remains unverified; automated recovery tests do not establish deployed behavior.

## Related pages

- [Exploring Products](./exploring-products.md)
- [Shopping Cart](./shopping-cart.md)
- [Library](./library.md)
