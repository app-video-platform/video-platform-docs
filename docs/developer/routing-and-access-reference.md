---
title: Routing and Access Reference
sidebar_position: 3
---

# Routing and Access Reference

## Overview

The frontend uses React Router with separate marketing, auth, and app route trees.

Product-facing access behavior is documented in [Roles and Access](../product/start-here/roles-and-access.md). This page is the developer routing reference.

| Route | Access | Roles | Use | Notes |
|-|-|-|-|-|
| `/` | public | - | Marketing landing page | Index |
| `/about` | public | - | Marketing about page |  |
| `/features` | public | - | Marketing features page |  |
| `/pricing` | public | - | Marketing pricing page |  |
| `/contact` | public | - | Marketing contact page |  |
| `/getting-started` | public | - | Marketing getting-started page |  |
| `/*` | public | - | Marketing fallback | NotFoundPage |
| `/auth/login` | public | - | Login page |  |
| `/auth/signup` | public | - | Register page |  |
| `/auth/email-sent` | public | - | Email sent page |  |
| `/auth/verify-email` | public | - | Verify email page | Uses `token` query param |
| `/auth/forgot-password` | public | - | Password reset screen | Visible flow is incomplete |
| `/onboarding` | protected | Admin, Creator, User | Onboarding flow |  |
| `/unauthorized` | public | - | Unauthorized page |  |
| `/app` | protected | Admin, Creator, User | Role-based app home | Admin, Creator, or End User landing |
| `/app/explore` | public | - | Explore products |  |
| `/app/explore/search` | public | - | Product search results |  |
| `/app/product/:id` | public | - | Product detail page |  |
| `/app/product/:id/:type` | public | - | Product detail page | Type param is accepted |
| `/app/store/:creatorId` | public | - | Creator storefront route | Rendered storefront is limited |
| `/app/cart` | protected | Admin, Creator, User | Shopping cart | No checkout |
| `/app/library` | protected | User, Admin | Library shell |  |
| `/app/library/all-products` | protected | User, Admin | Library tab | Currently empty |
| `/app/library/my-consultation` | protected | User, Admin | Library tab | Currently empty |
| `/app/library/my-courses` | protected | User, Admin | Library tab | Currently empty |
| `/app/library/my-download-packages` | protected | User, Admin | Library tab | Currently empty |
| `/app/library/my-wishlist` | protected | User, Admin | Wishlist tab | Useful behavior exists |
| `/app/admin` | protected | Admin | Admin dashboard |  |
| `/app/admin/users` | protected | Admin | Admin user management |  |
| `/app/admin/products` | protected | Admin | Admin product management |  |
| `/app/admin/products/create` | protected | Admin | Create product for creator | Requires selected owner |
| `/app/admin/audit` | protected | Admin | Admin audit log |  |
| `/app/products` | protected | Creator, Admin | Product list |  |
| `/app/products/create` | protected | Creator, Admin | Create product |  |
| `/app/products/edit/:id` | protected | Creator, Admin | Edit product |  |
| `/app/products/edit/:type/:id` | protected | Creator, Admin | Edit product legacy-compatible route |  |
| `/app/customers` | protected | Creator, Admin | Creator Customers list | Shows unavailable state unless mock inspection data is enabled |
| `/app/customers/:customerId` | protected | Creator, Admin | Creator Customer detail | Read-only detail tabs backed by inspection fixtures in mock mode |
| `/app/marketing` | protected | Creator, Admin | Marketing area | Mostly incomplete except reviews |
| `/app/sales` | protected | Creator, Admin | Sales page | Placeholder static content |
| `/app/settings` | protected | Admin, Creator, User | Settings tabs | Most save flows incomplete |
| `/app/my-page-preview` | protected | Admin, Creator, User | User page preview |  |
| `/app/*` | protected | - | App fallback | Redirects to `/app` |

## Guarding pattern

Protected app routes use `ProtectedRoute` with allowed roles. The app index chooses a role-specific landing page using the user's primary role.
