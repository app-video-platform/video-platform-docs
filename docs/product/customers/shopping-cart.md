---
title: Shopping Cart
sidebar_position: 5
---

# Shopping Cart

## Overview

The shopping cart lets customers collect products before checkout.

The current cart supports adding Products, viewing and removing items, moving items to the wishlist, displaying totals, enrolling in free Products, and starting backend checkout for eligible one-time paid Products.

## Who can use this

Signed-in users can open the cart page.

Product cards in discovery areas include cart actions, but the cart page itself requires access to the signed-in app.

## What you can do

Customers can:

- Add products to the cart from product discovery pages.
- See a cart count in customer navigation.
- Open a cart dropdown from the navigation bar.
- View cart items on the cart page.
- See a displayed total for cart items.
- Move cart items to the wishlist.
- Remove cart items where removal is working correctly.
- Enroll in a cart containing only free Products.
- Start checkout for eligible paid Course, Download, or Consultation Products.

## How it works

Adding a product to the cart places it in the browser's saved cart. The cart dropdown shows a compact list of cart items and links to the cart page.

The cart page shows each item with its title, price, and supporting display information. Customers can move an item to the wishlist or remove it from the cart. The page also shows a total based on the products currently in the cart.

Checkout prices and eligibility are recalculated by the backend. A paid checkout grants access only after a verified successful payment event.

## Current limitations

- A cart containing only free Products can add them to the signed-in user's
  entitlement Library.
- No production payment provider is configured, so paid checkout cannot complete in production. Provider redirection is used when a configured gateway returns a checkout URL.
- Cart items are saved in the browser and are not synchronized to a backend account.
- Cart placement does not reserve or grant a Product. Free enrollment or a successful paid event creates access.
- Product images and ratings shown in cart areas include placeholder content.
- Removing the first item in the cart may not work correctly in the current frontend.

## Related pages

- [Exploring Products](./exploring-products.md)
- [Product Detail Pages](./product-detail-pages.md)
- [Wishlist](./wishlist.md)
- [Library](./library.md)
