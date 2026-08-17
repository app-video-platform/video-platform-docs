---
title: Product Statuses
sidebar_position: 3
---

# Product Statuses

## Overview

Product status describes the current state assigned to a product.

The current frontend represents these product status values:

- Draft.
- Published.
- Hidden.

## Who can use this

This page is for Creators and Administrators who manage products.

## What you can do

Administrators can:

- See product status in the Admin Products table.
- Filter Admin product results by Draft, Published, or Hidden.

Creators can:

- Create draft products through the product builder.
- See status where product summaries expose it.

## How it works

Product statuses appear most clearly in the Admin Products area, where Admins can filter product lists by status.

The product builder currently creates and edits products, but the frontend does not present a complete publish workflow with clear status transition controls.

For direct full-Product backend reads, callers without owner, Administrator, or
active-entitlement access can read only Published Products. Protected Course
content and Download URLs are removed. Some Product summary and search
endpoints do not apply the same status filtering yet.

## Current limitations

- Do not treat Draft, Published, and Hidden as a complete creator publishing lifecycle.
- The frontend does not currently provide a finished publish/unpublish workflow for Creators.
- Public catalogue visibility is not consistently enforced across every backend summary/search route.

## Related pages

- [Product Types](./product-types.md)
- [Managing Products](../creators/managing-products.md)
- [Managing Products](../administrators/managing-products.md)
- [Creating a Product](../creators/creating-a-product.md)
