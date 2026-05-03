---
sidebar_position: 3
title: 3 - Routing Map
---

This page lists major routes and what they do. Start with a small table and grow it.

Role values are the canonical backend/API values: `ADMIN`, `CREATOR`, and `USER`.

| Route | Access | Roles | Use | Notes |
|-|-|-|-|-|
| `/` | public | — | Marketing site landing page | Index |
| `/*` | public | — | Used to catch unknown URL's in the marketing site | NotFoundPage |
| `/about` | public | — | Marketing site about page |  |
| `/pricing` | public | — | Marketing site pricing page |  |
| `/contact` | public | — | Marketing site contact page |  |
| `/auth/login` | public | — | Login page | Legacy `/login` and `/signin` redirect here. |
| `/auth/signup` | public | — | Register page | Legacy `/signup` redirects here. |
| `/auth/email-sent` | public | — | Email sent message page | Legacy `/email-sent` redirects here. |
| `/auth/verify-email` | public | — | Verify email message page | Legacy `/verify-email` redirects here. |
| `/auth/forgot-password` | public | — | Password reset initiator page | Legacy `/forgot-password` redirects here. |
| `/onboarding` | protected | `ADMIN`, `CREATOR`, `USER` | User info onboarding flow |  |
| `/unauthorized` | public | — | Unauthorized message page |  |
| `/app` | protected | `ADMIN`, `CREATOR`, `USER` | Dashboard for logged users | Index · Role-based landing: `ADMIN` → AdminPage, `CREATOR` → CreatorDashboard, `USER` → GalacticaHome |
| `/app/*` | protected | — | Fallback for unknown paths | Redirects to /app |
| `/app/cart` | protected | `ADMIN`, `CREATOR`, `USER` | Shopping cart |  |
| `/app/explore` | public | — | Explore products page |  |
| `/app/explore/search` | public | — | Search products page |  |
| `/app/library` | protected | `USER`, `ADMIN` | Library shell | Index |
| `/app/library/all-products` | protected | `USER`, `ADMIN` | USER's own personal list of purchased products |  |
| `/app/library/my-consultation` | protected | `USER`, `ADMIN` | USER's list of purchased consultation sessions |  |
| `/app/library/my-courses` | protected | `USER`, `ADMIN` | USER's list of purchased courses |  |
| `/app/library/my-download-packages` | protected | `USER`, `ADMIN` | USER's list of purchased download packages |  |
| `/app/library/my-wishlist` | protected | `USER`, `ADMIN` | USER's list of wishlisted products |  |
| `/app/marketing` | protected | `CREATOR`, `ADMIN` | CREATOR's page for marketing strategies planning |  |
| `/app/my-page-preview` | protected | `ADMIN`, `CREATOR`, `USER` | User page preview |  |
| `/app/product/:id/:type` | public | — | Page for viewing all details for a specific product |  |
| `/app/products` | protected | `CREATOR`, `ADMIN` | CREATOR's page for viewing all their created products | Index |
| `/app/products/create` | protected | `CREATOR`, `ADMIN` | CREATOR's page for creating a new product |  |
| `/app/products/edit/:type/:id` | protected | `CREATOR`, `ADMIN` | CREATOR's page for editing a product |  |
| `/app/sales` | protected | `CREATOR`, `ADMIN` | CREATOR's page viewing sold products |  |
| `/app/settings` | protected | `ADMIN`, `CREATOR`, `USER` | Page where the user can change multiple settings |  |
| `/app/store/:creatorId` | public | — | CREATOR specific storefront |  |
| `/dev-dashboard` | public | — | Inner use |  |



<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025
