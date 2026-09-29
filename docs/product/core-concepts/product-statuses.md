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
- Publish supported non-Membership Products from Product Workspace when readiness validation passes.

## How it works

Product statuses appear in Creator and Admin product management areas, where users can filter product lists by status.

For supported non-Membership Products, Product Workspace provides a Publish action. Publish works with the current save state, uses frontend readiness checks for immediate guidance, and then updates the existing Product with `status: PUBLISHED`.

Backend readiness validation is authoritative. The backend can reject publication with HTTP `422` field-path/message errors, and the frontend surfaces those errors in the Readiness area. Frontend readiness guidance does not guarantee that publication will succeed.

Membership Products are the exception: Membership readiness can be evaluated, but Product-level Membership publishing remains unavailable in the current frontend.

For direct full-Product backend reads, callers without owner, Administrator, or
active-entitlement access can read only Published Products. Protected Course
content and Download URLs are removed. Some Product summary and search
endpoints do not apply the same status filtering yet.

## Current limitations

- Unpublish is not implemented in the current frontend.
- Membership Product publishing is not implemented in the current frontend.
- Public catalogue visibility is not consistently enforced across every backend summary/search route.

## Related pages

- [Product Types](./product-types.md)
- [Managing Products](../creators/managing-products.md)
- [Managing Products](../administrators/managing-products.md)
- [Creating a Product](../creators/creating-a-product.md)
