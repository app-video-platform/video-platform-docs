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
| `createProductAPI` | `POST api/products` | Creates Course, Download, Consultation, or Membership products from a draft payload. |
| `updateProductDetailsAPI` | `PATCH api/products/:id` | Updates shared product details. |
| `deleteProductAPI` | `DELETE api/products/:productId` | Deletes by product ID. |
| `getAllProductsByUserIdAPI` | `GET api/products?userId=` | Creator/admin product retrieval by user. |
| `getProductsByOwnerAPI` | `GET api/products?ownerId=` | Product summaries by owner. |
| `getProductByIdAPI` | `GET api/products/:productId` | Product detail retrieval. |
| `getAllProductsMinimalAPI` | `GET api/products/get-all-products-min` | Product summaries for discovery. |
| `getAllProductsMinimalByUserAPI` | `GET api/products/get-all-products-min?userId=` | Product summaries for a user. |
| `fetchProducts` | `GET /api/products/search?term=&page=&size=&sort=` | Search results and autocomplete. |
| `addImageToProductAPI` | `POST api/products/image?productId=` | Product image upload hook; product image persistence is still limited in the UI. |

Creator Product Overview uses `getProductByIdAPI` through the existing single-Product read path. It does not have a dedicated Product Overview backend endpoint.

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

Current product statuses represented in frontend types are `DRAFT`, `PUBLISHED`, and `HIDDEN`.

Membership uses the shared Product create/update shape for core Product fields and Product-owned recurring-pricing metadata. The current frontend Product contract carries `price`, `pricingModel`, `billingInterval`, and `currency`; production backend support for those recurring-pricing fields is still pending.

Membership-native Posts, Videos, Resources, included Product relationships, feed ordering, and Membership configuration are owned by Product-scoped Membership contracts, not by Product `details` payloads. Membership readiness is derived in the frontend and is not persisted by Product or Membership APIs.
