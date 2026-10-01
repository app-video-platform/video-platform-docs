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
- Complete test checkout for eligible paid Course, Download, or Consultation Products.

## How it works

Adding a product to the cart places it in the browser's saved cart. The cart dropdown shows a compact list of cart items and links to the cart page.

The cart page shows each item with its title, price, and supporting display information. Customers can move an item to the wishlist or remove it from the cart. The page also shows a total based on the products currently in the cart.

Free Products use free enrollment and do not enter paid checkout. Free and paid Products cannot be checked out together; customers must split mixed carts.

Paid checkout supports eligible carts only. Current frontend validation rejects Membership Products, duplicate Products, unpublished Products, Products from multiple Creators, Products owned by the buyer, carts larger than 20 Products, and Products without checkout-ready IDs.

When paid checkout starts, the frontend creates a Commerce checkout session. If the backend returns a checkout URL, the browser redirects there. In the current test/fake payment setup, checkout can also complete without a redirect; the frontend then confirms the Order state and clears the cart only after the Order is confirmed as Paid.

The cart page explicitly tells customers: "Test payment — No real charge will be made during checkout."

Checkout prices and eligibility are recalculated by the backend. In the current deployed test environment, the fake provider can record a successful payment event immediately, grant access, clear the Cart, and open the Library. No card details are collected and no charge is made.

## Current limitations

- A cart containing only free Products can add them to the signed-in user's
  entitlement Library.
- Paid checkout is connected for eligible paid non-Membership carts, but it uses the current test/fake payment path. No production payment provider or real charging is configured. Provider redirection remains supported when a configured gateway returns a checkout URL.
- Cart items are saved in the browser and are not synchronized to a backend account.
- Products in the cart are not reserved or granted as owned content until free enrollment or a paid Order succeeds.
- Product images and ratings shown in cart areas include placeholder content.
- Removing the first item in the cart may not work correctly in the current frontend.

## Related pages

- [Exploring Products](./exploring-products.md)
- [Product Detail Pages](./product-detail-pages.md)
- [Wishlist](./wishlist.md)
- [Library](./library.md)
