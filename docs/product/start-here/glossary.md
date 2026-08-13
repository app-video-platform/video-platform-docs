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

The current frontend includes the Analytics workspace with preset reporting periods and a frontend aggregate read-model contract. The production Analytics endpoint is not implemented yet.

### Cart

A browser-stored list of products an End User has added while shopping.

The current cart is frontend-only and does not complete checkout or payment.

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

The current frontend includes a Customers list, Customer Detail tabs, and frontend Customer list/detail contracts. Production Customer endpoints are not implemented yet.

### Download product

A product type for selling downloadable files.

Creators can create sections and upload files. Customer delivery through the library is not implemented yet.

### End User

A signed-in customer account.

End Users can browse products, use the wishlist, use the cart, and open the library area.

### Library

The signed-in customer area for owned or saved products.

The current library has tabs for all products, courses, downloads, consultations, and wishlist. The wishlist tab has behavior; purchased-product tabs are not yet populated.

### Membership product

A product type for configuring a membership content hub in the creator product builder.

Creators can add native Posts, Videos, and Resources, reference existing Course and Download products, order the unified Membership feed, and set a EUR recurring price with monthly or yearly billing controls. Membership configuration/content/feed and Product recurring-pricing frontend contracts exist, but production backend support, subscriptions, entitlements, publishing, member access, checkout, and buyer-facing Membership flows are not implemented yet.

### Product

An item a Creator can sell or configure.

The currently supported product types are:

- Course
- Download
- Consultation
- Membership

### Product detail page

A public page for viewing an individual product.

The current page shows some real product information, but also includes placeholder fields and inactive purchase buttons.

### Sales

A creator-facing area for reviewing sales metrics, order records, and contextual order detail.

The current frontend includes the Sales workspace, read-only order detail, and frontend Sales summary/order contracts. Production order, payment, refund, subscription, renewal, and entitlement endpoints are not implemented yet.

### Storefront

A creator's public page for showing public profile information and published products.

Creators use the Storefront Builder from the Creator area to edit supported public profile fields, set public email, customize appearance, choose a featured product, adjust product order, save or reset Storefront configuration changes, and open or copy the public URL. Frontend Storefront read-model and Creator config contracts exist, but production backend endpoints are not implemented yet.

### Visitor

Someone using the public site without signing in.

Visitors can browse public pages, explore products, search products, and view product detail pages.

### Wishlist

A browser-stored list of products an End User has saved for later.

The current wishlist is frontend-only and does not sync to a backend user account.

## Related pages

- [Product Overview](./product-overview.md)
- [Roles and Access](./roles-and-access.md)
- [Current Platform Status](./current-platform-status.md)
