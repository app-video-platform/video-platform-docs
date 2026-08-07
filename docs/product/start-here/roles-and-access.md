---
title: Roles and Access
sidebar_position: 2
---

# Roles and Access

## Overview

Video Platform App uses roles to decide what each person can access and manage.

The main roles are:

- **Visitor**: someone browsing without signing in.
- **End User**: a signed-in customer account.
- **Creator**: a signed-in user who can create and manage products.
- **Administrator**: a signed-in user who can manage users, products, and audit activity across the platform.

## Who can use this

This page is for Administrators, Creators, End Users, and anyone reviewing how access works across the product.

## What you can do

### Visitors

Visitors can:

- View public marketing pages.
- Register or sign in.
- Browse product exploration pages.
- Search products.
- View product detail pages.
- Open public storefront routes.

Visitors cannot access account, cart, library, admin, creator, or settings pages that require sign-in.

### End Users

End Users can:

- Access the signed-in app home.
- Browse and search products.
- Use wishlist and cart features.
- Open the library area.
- Manage account settings screens.
- Complete onboarding screens.

End Users cannot access creator product management, creator marketing, sales, or admin pages.

### Creators

Creators can:

- Access the creator dashboard.
- Create and manage products.
- Edit course, download, and consultation product details.
- Access creator marketing screens.
- Access sales and settings screens.
- Complete onboarding screens.

Creators cannot access the user library in the current role setup.

### Administrators

Administrators can:

- Access the admin dashboard.
- Manage users.
- Change user roles.
- Manage platform products.
- Create products on behalf of creators.
- Review audit logs.
- Access creator-style product management routes.
- Access the user library route.
- Complete onboarding screens.

## How it works

Access is based on the user's active role.

| Area | Visitor | End User | Creator | Administrator |
|---|:---:|:---:|:---:|:---:|
| Public marketing pages | Yes | Yes | Yes | Yes |
| Sign in, sign up, email verification | Yes | Yes | Yes | Yes |
| Explore and search products | Yes | Yes | Yes | Yes |
| Product detail pages | Yes | Yes | Yes | Yes |
| Storefront routes | Yes | Yes | Yes | Yes |
| App home | No | Yes | Yes | Yes |
| Onboarding | No | Yes | Yes | Yes |
| Settings | No | Yes | Yes | Yes |
| Cart | No | Yes | Yes | Yes |
| Library | No | Yes | No | Yes |
| Creator product management | No | No | Yes | Yes |
| Creator marketing | No | No | Yes | Yes |
| Sales page | No | No | Yes | Yes |
| Admin area | No | No | No | Yes |

## Current limitations

- The cart route is protected even though product browsing is public.
- The product detail page shows purchase buttons, but checkout is not implemented.
- Some navigation items point to areas that are not fully implemented, such as analytics and messages.
- Storefront routes are public, but the current storefront page does not yet present a complete creator storefront.
- Password reset screens are visible, but the full reset workflow is not currently connected end to end.

## Related pages

- [Product Overview](./product-overview.md)
- [Current Platform Status](./current-platform-status.md)
- [Glossary](./glossary.md)
