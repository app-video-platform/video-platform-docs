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
- Publish Course, Download, and Consultation products after resolving their readiness blockers.

## How it works

Product statuses appear most clearly in the Admin Products area, where Admins can filter product lists by status.

The Product Workspace provides a readiness view and Publish action. The backend
also validates every create, full update, or partial update whose resulting
status is Published. Readiness failures keep the Product unchanged and identify
the fields that need attention.

Course publication requires a name, valid free-or-paid price, a section, and a
lesson. Download publication requires a name, valid price, and confirmed file.
Consultation publication requires a name, positive price and duration, meeting
method, any required custom location, and valid weekly availability. A
thumbnail and connected calendar are recommendations, not blockers.

For direct full-Product backend reads, callers without owner, Administrator, or
active-entitlement access can read only Published Products. Protected Course
content and Download URLs are removed. Some Product summary and search
endpoints do not apply the same status filtering yet.

## Current limitations

- Membership products cannot be Published yet.
- The current Creator workflow focuses on publishing; Product Overview does not provide a complete unpublish/archive lifecycle.
- Public catalogue visibility is not consistently enforced across every backend summary/search route.

## Related pages

- [Product Types](./product-types.md)
- [Managing Products](../creators/managing-products.md)
- [Managing Products](../administrators/managing-products.md)
- [Creating a Product](../creators/creating-a-product.md)
