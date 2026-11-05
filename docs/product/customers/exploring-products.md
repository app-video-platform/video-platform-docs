---
title: Exploring Products
sidebar_position: 2
---

# Exploring Products

## Overview

The Explore experience helps customers browse and search products that are available in the platform.

Customers can view product cards, search by keyword, use search suggestions, and open Product Landing Pages for more information.

## Who can use this

Visitors and signed-in users can browse and search products.

Some follow-up areas, such as the cart and library, require a signed-in account.

## What you can do

Customers can:

- Browse product cards on the Explore page.
- Search for products from the main search field.
- See search suggestions while typing.
- Open a search results page.
- Move through search result pages using pagination controls.
- Open public creator Storefront pages when a Storefront link is available.
- Open a Product Landing Page from product discovery areas.
- Save products to the wishlist from product cards.
- Add products to the shopping cart from product cards.

## How it works

On narrow marketplace layouts, the search field stays visible in a second header
row. **Menu** opens Explore and the actions available to the current account;
visitors see **Log In** and **Register**, while signed-in customers can reach
Library, Wishlist, Cart, Notifications and their account menu. Creator/Admin
headers retain their own supported actions rather than adding customer collection
shortcuts. Selecting a new route closes Menu; Escape closes it and returns focus
to its trigger. Wider layouts show the navigation inline. The public Creator
Storefront uses its own page layout rather than this marketplace header.

Product cards show the product name, product type, price, and creator information when available. Cards also include actions for viewing the product, saving it to the wishlist, and adding it to the cart.

Search suggestions appear after at least two characters. Selecting a current
suggestion searches for its title on the results page; **View Product** on a result
opens its Product Landing Page.

Use Arrow Down or Arrow Up to highlight a current suggestion, then Enter to search
for its title. With no highlighted suggestion, Enter searches the current text
once it has at least two characters. Changing the text clears the previous
selection immediately, so an earlier
suggestion cannot be submitted for a different query. Escape closes suggestions
and clears the highlight; mouse selection also uses a current suggestion.

A new search starts on the first results page, including when submitted from a
later page. Back, Forward, direct search links and reload restore the corresponding
search text, heading, results and page. Page labels start at **Page 1**. Invalid
page addresses return to the first page. An empty later page offers **Return to
first page** rather than treating the entire search as empty.

Creator links on Explore and Search cards open the public Creator Storefront,
separately from **View Product**. If Creator identity is missing, Explore shows
plain Creator text and search results omit that link. Visitors, End Users,
Creators and Administrators can use the public Storefront destination.

Wishlist and cart actions help customers collect products for later review. These actions do not complete a purchase.

## Current limitations

- At very narrow widths, an Explore Product-card action can still extend outside the page. Header/search responsiveness does not resolve every Product card or long Product-content layout issue.

- Product images in discovery areas are currently placeholders.
- Wishlist and cart items are saved in the browser and are not synchronized across devices.
- Adding a product to the cart does not reserve, buy, or grant access to the product.
- Product discovery may show creator or storefront information only when that information is available in the product data.
- Later matching results can remain unreachable when the server incorrectly reports the first page as final. M10 corrects page labels and navigation state, but the underlying pagination defect (BUG-013) still requires backend correction; Next availability is not inferred from the number of visible cards.
- Storefront pages show published products and link to Product Landing Pages, but they do not complete checkout, payment, or post-purchase access.

## Related pages

- [Customer Overview](./customer-overview.md)
- [Product Landing Pages](./product-detail-pages.md)
- [Wishlist](./wishlist.md)
- [Shopping Cart](./shopping-cart.md)
