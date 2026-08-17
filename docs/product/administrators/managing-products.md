---
title: Managing Products
sidebar_position: 3
---

# Managing Products

## Overview

Administrators can manage products across the platform from the Admin Products area.

This area is for finding products, reviewing product ownership, opening public Product Landing Pages, editing products, deleting products, and starting product creation for a selected creator.

## Who can use this

This page is for Administrators.

## What you can do

Administrators can:

- View a paginated table of products.
- Search products.
- Filter products by owner ID.
- Filter products by product type.
- Filter products by product status.
- See product title, owner, type, status, price, and updated date.
- Open a public Product Landing Page.
- Open the product builder to edit a product.
- Delete a product after confirming the action.
- Start creating a new product for a selected creator.

## How it works

The Admin Products page includes filters for product search, owner ID, product
type, and product status. The frontend includes Course, Download, Consultation,
and Membership filters; the current backend persists only Course, Download, and
Consultation. Visible status filters are Draft, Published, and Hidden.

Each product row shows the product owner name when available and the owner ID. Admins can view the current public Product Landing Page, open the edit flow, or delete the product.

Creating a product from this area starts with selecting a creator owner. After that, the shared product builder is used.

## Current limitations

- Product editing uses the same builder as Creator product management and inherits the same limitations.
- Deleting a product is available from the Admin table, but the UI does not show a separate recovery or archive workflow.
- Admin filters include owner ID rather than a full creator search experience in the product filter bar.
- Public Product Landing Pages do not call the backend's free-enrollment/access APIs and do not complete checkout, paid fulfillment, subscriptions, or waitlists.
- Product media, publishing, Product Landing Page Builder, checkout, and customer access limitations still apply to products managed by Admins.
- Membership rows can exist in frontend mock/contract data, but Membership is not a persisted backend Product type.

## Related pages

- [Admin Overview](./admin-overview.md)
- [Creating Products for Creators](./creating-products-for-creators.md)
- [Creating a Product](../creators/creating-a-product.md)
- [Managing Products](../creators/managing-products.md)
- [Product Landing Pages](../customers/product-detail-pages.md)
