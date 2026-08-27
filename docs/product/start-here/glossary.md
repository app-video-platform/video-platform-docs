---
title: Glossary
sidebar_position: 4
---

# Glossary

## Overview

This glossary defines product terms used across Video Platform App documentation.

## Who can use this

This page is for Administrators, Creators, End Users, and documentation contributors.

## Terms

### Administrator

A signed-in user who can manage platform users, products, and admin audit history.

### Audit log

A record of administrative activity, such as role changes or admin product actions.

### Creator Analytics

A creator-facing area for reviewing business performance metrics, charts, rankings, and summary panels.

The current frontend includes a Creator-only, server-backed Analytics workspace
with preset 7-, 30-, and 90-day periods, metrics, charts, rankings, and summary
panels. Membership subscription analytics remains unavailable.

### Cart

A browser-stored list of products an End User has added while shopping.

The cart contents are browser-saved. Free-only carts use backend enrollment and
eligible paid carts can create backend checkout sessions, but production payment
completion is unavailable without a configured provider.

### Consultation product

A product type for selling a one-to-one session or service.

Creators can configure details such as meeting duration, meeting method, buffers, daily session limits, confirmation message, and cancellation policy. Customer booking is not implemented yet.

### Course product

A product type for structured learning content.

Creators can create course sections and lesson shells. Some lesson content types are visible in the editor but are not fully persisted yet.

### Creator

A signed-in user who can create and manage products.

### Creator Customers

A creator-facing area for reviewing customer relationship records.

The current frontend includes a server-backed Customers list and Customer Detail tabs for reviewing qualifying customer relationships.

### Download product

A product type for selling downloadable files.

Creators can create sections and upload files. The backend can authorize a
short-lived customer Download URL for an entitled user, but the frontend
Library does not expose that delivery flow yet.

### End User

A signed-in customer account.

End Users can browse products, use the wishlist, use the cart, and open the library area.

### Library

The signed-in customer area for owned or saved products.

The current library has tabs for all products, courses, downloads, consultations, and wishlist. The wishlist tab has behavior; purchased-product tabs are not yet populated.

### Membership product

A persisted Product type for configuring a membership content hub.

Creators can persist native Posts and Video/Resource metadata, reference existing Course and Download products, order the unified Membership feed, and set a EUR recurring price with monthly or yearly billing controls. Binary media, subscriptions, entitlements, publishing, member access, checkout, and buyer-facing Membership flows are not implemented yet.

### Product

An item a Creator can sell or configure.

The currently supported product types are:

- Course
- Download
- Consultation
- Membership

### Product Landing Page

A public page for viewing an individual product.

The current Product Landing Page renders published Products with real Product information, persisted presentation settings, inherited Storefront/default theme, free enrollment/access checks, and eligible one-time checkout initiation.

### Product Landing Page Builder

A Creator/Admin management area for configuring product-specific public presentation settings.

The current builder owns landing-page marketing copy, hero layout, supported section visibility, and supported section order. It does not edit canonical Product fields, Creator profile data, Storefront theme, checkout, access, SEO, custom domains, or arbitrary page-builder blocks.

### Product Overview

A Creator/Admin management page for inspecting one product.

The current Product Overview is read-only. It shows product identity, status, pricing, dates, and type-specific summaries, and provides explicit navigation to edit the product in Product Workspace or edit public presentation in Product Landing Page Builder.

### Product Workspace

The focused Creator/Admin editing environment for building or changing a product.

Product Workspace is separate from Product Overview. Product identity links generally open Product Overview, while explicit edit/build actions open Product Workspace.

### Sales

A creator-facing area for reviewing sales metrics, order records, and contextual order detail.

The current frontend includes a Creator-only, server-backed Sales workspace,
summary metrics, an Order ledger, read-only Order detail, and itemized
multi-Product reporting from one-time Commerce and entitlement data.

### Storefront

A creator's public page for showing public profile information and published products.

Creators use the server-backed Storefront Builder to edit supported public
profile fields, set public email, customize appearance, choose a featured
Product, adjust Product order, save or reset configuration, and open or copy
the public URL. The public read model includes only published Products and
explicitly public profile fields.

### Visitor

Someone using the public site without signing in.

Visitors can browse public pages, explore products, search products, and view Product Landing Pages.

### Wishlist

A browser-stored list of products an End User has saved for later.

The current wishlist is frontend-only and does not sync to a backend user account.

## Related pages

- [Product Overview](./product-overview.md)
- [Roles and Access](./roles-and-access.md)
- [Current Platform Status](./current-platform-status.md)
