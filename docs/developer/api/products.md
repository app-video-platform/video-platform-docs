---
title: Products API
sidebar_position: 5
---

# Products API

## Locations

Product services are split across:

- `src/core/api/services/products/product-crud-api.ts`
- `src/core/api/services/products/product-sections-api.ts`
- `src/core/api/services/products/product-lessons-api.ts`
- `src/core/api/services/products/product-download-files-api.ts`
- `src/core/api/services/products/products-api.ts`

`products-api.ts` re-exports the product service modules.

## Product CRUD and discovery

| Function | Method and URL | Notes |
|---|---|---|
| `createProductAPI` | `POST api/products` | Sends Course, Download, Consultation, or Membership frontend drafts. The current backend accepts only Course, Download, and Consultation. |
| `updateProductDetailsAPI` | `PATCH api/products/:id` | Updates shared product details. |
| `deleteProductAPI` | `DELETE api/products/:productId` | Deletes by product ID. |
| `getAllProductsByUserIdAPI` | `GET api/products?userId=` | Creator/admin product retrieval by user. |
| `getProductsByOwnerAPI` | `GET api/products?ownerId=` | Product summaries by owner. |
| `getProductByIdAPI` | `GET api/products/:productId` | Product detail retrieval. |
| `getAllProductsMinimalAPI` | `GET api/products/get-all-products-min` | Product summaries for discovery. |
| `getAllProductsMinimalByUserAPI` | `GET api/products/get-all-products-min?userId=` | Product summaries for a user. |
| `fetchProducts` | `GET /api/products/search?term=&page=&size=&sort=` | Search results and autocomplete. |
| `addImageToProductAPI` | `POST api/products/image?productId=` | Frontend hook without a matching current backend controller route; Product image persistence remains incomplete. |

Creator Product Overview uses `getProductByIdAPI` through the existing single-Product read path. It does not have a dedicated Product Overview backend endpoint.

## Product Landing Page config

Product Landing Page config services live under `src/core/api/services/product-landing-page/product-landing-page-api.ts`.

| Function | Method and URL | Notes |
|---|---|---|
| `getPublicProductLandingPageConfigAPI` | `GET api/products/:productId/landing-page` | Backend-pending public-safe landing-page config read. |
| `getCreatorProductLandingPageConfigAPI` | `GET api/creator/products/:productId/landing-page` | Backend-pending Creator config read. |
| `updateCreatorProductLandingPageConfigAPI` | `PATCH api/creator/products/:productId/landing-page` | Backend-pending Creator config update. |

The current config model contains `marketingDescription`, `heroLayout`, `visibleSections`, and `sectionOrder`. Product Landing Page config must not duplicate canonical Product fields, Creator profile fields, Storefront theme, checkout/access state, SEO, slugs, or custom-domain data.

The public Product route still composes available Product, config, theme, and Creator/profile inputs through frontend/backend-pending paths. A dedicated production public Product read model is still needed for public-safe Product presentation and server-enforced visibility.

## Sections and lessons

| Function | Method and URL |
|---|---|
| `createSectionAPI` | `POST api/products/:productId/sections` |
| `updateSectionDetailsAPI` | `PATCH api/products/:productId/sections/:sectionId` |
| `deleteSectionAPI` | `DELETE api/products/:productId/sections/:sectionId` |
| `createLessonAPI` | `POST api/products/:productId/sections/:sectionId/lessons` |
| `updateLessonDetailsAPI` | `PATCH api/products/:productId/sections/:sectionId/lessons/:lessonId` |
| `deleteLessonAPI` | `DELETE api/products/:productId/sections/:sectionId/lessons/:lessonId` |

## Download files

| Function | Method and URL |
|---|---|
| `getPresignedUrlAPI` | `GET /api/products/:productId/sections/:sectionId/files/presigned-url` |
| `uploadToPresignedUrl` | `PUT presignedUrl` |
| `confirmFileUploadAPI` | `POST /api/products/:productId/sections/:sectionId/files/confirm-upload` |
| `deleteSectionFileAPI` | `DELETE /api/products/:productId/sections/:sectionId/files/:fileId` |
| `uploadDownloadSectionFileAPI` | Composes the presigned upload flow. |

## Types

Current frontend product types are `COURSE`, `DOWNLOAD`, `CONSULTATION`, and `MEMBERSHIP`.

Current backend Product types are `COURSE`, `DOWNLOAD`, and `CONSULTATION`.
Sending `MEMBERSHIP` to the generic Product endpoint is not a supported
production backend flow.

Current product statuses represented in frontend types are `DRAFT`, `PUBLISHED`, and `HIDDEN`.

Membership uses the shared Product create/update shape for core Product fields and Product-owned recurring-pricing metadata. The current frontend Product contract carries `price`, `pricingModel`, `billingInterval`, and `currency`; production backend support for those recurring-pricing fields is still pending.

Membership-native Posts, Videos, Resources, included Product relationships, feed ordering, and Membership configuration are owned by Product-scoped Membership contracts, not by Product `details` payloads. Membership readiness is derived in the frontend and is not persisted by Product or Membership APIs.

See [Backend Products and Authoring](../backend/products-and-authoring.md) for
persisted Product rules and [Backend API and Swagger](../backend/api-and-swagger.md)
for the implemented server routes.
