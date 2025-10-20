---
sidebar_position: 3
title: Routing Map
---

This page lists major routes and what they do. Start with a small table and grow it.

| Route | Access | Roles | Use | Notes |
|-|-|-|-|-|
| `/` | public | — | Marketing site landing page | Index |
| `/*` | public | — | Used to catch unknown URL's in the marketing site | NotFoundPage |
| `/about` | public | — | Marketing site about page |  |
| `/pricing` | public | — | Marketing site pricing page |  |
| `/contact` | public | — | Marketing site contact page |  |
| `/login` | public | — | Login page |  |
| `/signup` | public | — | Register page |  |
| `/email-sent` | public | — | Email sent message page |  |
| `/verify-email` | public | — | Verify email message page |  |
| `/forgot-password` | public | — | Password reset initiator page |  |
| `/onboarding` | protected | Admin, Creator, User | User info onboarding flow |  |
| `/unauthorized` | public | — | Unauthorized message page |  |
| `/app` | public | — | Used as a dashboard with suggested products for public visitors | Public for everyone. |
| `/app` | protected | Admin, Creator, User | Dashboard for logged users | Index · Role-based landing: Creator→CreatorDashboard, Admin→AdminPage, else GalacticaHome |
| `/app/*` | protected | — | Fallback for unknown paths | Redirects to /app |
| `/app/cart` | protected | Admin, Creator, User | Shopping cart for visitors or USERs |  |
| `/app/explore` | public | — | Explore products page |  |
| `/app/explore/search` | public | — | Search products page |  |
| `/app/library` | protected | User, Admin | - | Index |
| `/app/library/all-products` | protected | User, Admin | USER's own personal list of purchased products |  |
| `/app/library/my-consultation` | protected | User, Admin | USER's list of purchased consultation sessions |  |
| `/app/library/my-courses` | protected | User, Admin | USER's list of purchased courses |  |
| `/app/library/my-download-packages` | protected | User, Admin | USER's list of purchased download packages |  |
| `/app/library/my-wishlist` | protected | User, Admin | USER's list of wishlisted products |  |
| `/app/marketing` | protected | Creator, Admin | CREATOR's page for marketing strategies planning |  |
| `/app/my-page-preview` | protected | Admin, Creator, User | CREATOR's editable storefront |  |
| `/app/product/:id/:type` | public | — | Page for viewing all details for a specific product |  |
| `/app/products` | protected | Creator, Admin | CREATOR's page for viewing all their created products | Index |
| `/app/products/create` | protected | Creator, Admin | CREATOR's page for creating a new product |  |
| `/app/products/edit/:type/:id` | protected | Creator, Admin | CREATOR's page for editing a new product |  |
| `/app/sales` | protected | Creator, Admin | CREATOR's page viewing sold products |  |
| `/app/settings` | protected | Admin, Creator, User | Page where the user can change multiple settings |  |
| `/app/store/:creatorId` | public | — | CREATOR specific storefront |  |
| `/dev-dashboard` | public | — | Inner use |  |



> Owner: @aleb, el Hijo del Diablo · Last reviewed: 2025-10-20
