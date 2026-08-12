---
title: Storefront
sidebar_position: 8
---

# Storefront

## Overview

The Creator Storefront is the fixed public page a creator can share with customers.

Creators use the Storefront management area to review the public profile summary, see which products are eligible for the public page, copy the Storefront link, choose a featured product, adjust product order, and compare changes against a live preview.

Customers and visitors use the public Storefront page to view the creator profile and browse published products.

## Who can use this

The Storefront management area is available from the Creator navigation. It is a protected Creator/Admin route, with the active Creator profile and creator-owned products driving the management view.

The public Storefront page can be opened by visitors and signed-in users.

## What creators can do

Creators can:

- Open **Storefront** from the Creator navigation.
- Review the Storefront status.
- Copy the public Storefront URL.
- Open the public Storefront in a new tab.
- Review the public profile summary used by the Storefront.
- See how many products are public and how many are draft or hidden.
- See each product's type and status.
- Set a published product as featured.
- Move products up or down.
- Use the live preview to compare the management view with the customer-facing presentation.

Profile information comes from the existing account/profile data already available to the app. Profile editing is handled by the existing account/profile flows, not by the Storefront page.

## Public Storefront

The public Storefront page is available at `/app/store/:creatorId`.

It presents the creator profile, a featured product when one is available, and the creator's public product cards. Product cards link to the public product detail page for that product.

The current Storefront presentation supports the product types used by the product catalog:

- Course
- Download
- Consultation
- Membership

## Product visibility

Only products with **Published** status appear on the public Storefront.

Draft and Hidden products are shown in the management area so creators can understand why they are not public, but they are not shown on the customer-facing Storefront page.

## Responsive behavior

The Storefront management page uses a controls-and-preview layout on wider screens and collapses into a stacked presentation on smaller screens.

The public Storefront adapts its hero, featured product, and product grid so the page remains usable on desktop and mobile.

## Current limitations

- The Storefront uses a fixed layout. There is no page builder, theme editor, custom layout, custom domain, password protection, or SEO configuration workflow.
- Featured product selection and product ordering have frontend configuration contracts, but the production backend Storefront configuration endpoint is not implemented yet.
- The public Storefront uses a frontend public read-model contract. Production backend support for that read model is still pending.
- Profile fields remain owned by account/profile data, and product identity, status, price, and media remain owned by Product data.
- The Storefront does not add, edit, publish, delete, or bulk-update products. Product creation and product status changes happen in the product management workflow.
- Storefront analytics, customer messaging, customer impersonation, and access grants are not part of the current Storefront experience.

## Related pages

- [Creator Overview](./creator-overview.md)
- [Managing Products](./managing-products.md)
- [Membership Products](./membership-products.md)
- [Product Statuses](../core-concepts/product-statuses.md)
- [Local vs Server-backed Features](../core-concepts/local-vs-server-backed-features.md)
