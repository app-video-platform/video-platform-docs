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
| `createProductAPI` | `POST api/products` | Creates Course, Download, Consultation, or Membership Products; the frontend starts with Draft. |
| `updateProductDetailsAPI` | `PATCH api/products/:id` | Updates shared product details. |
| `deleteProductAPI` | `DELETE api/products/:productId` | Deletes by product ID. |
| `getAllProductsByUserIdAPI` | `GET api/products?userId=` | Creator/admin product retrieval by user. |
| `getProductsByOwnerAPI` | `GET api/products?ownerId=` | Product summaries by owner. |
| `getProductByIdAPI` | `GET api/products/:productId` | Product detail retrieval. |
| `getAllProductsMinimalAPI` | `GET api/products/get-all-products-min` | Product summaries for discovery. |
| `getAllProductsMinimalByUserAPI` | `GET api/products/get-all-products-min?userId=` | Product summaries for a user. |
| `fetchProducts` | `GET /api/products/search?term=&page=&size=&sort=` | Search results and autocomplete. |
| `addImageToProductAPI` | `POST api/products/image?productId=` | Replaces the persisted thumbnail through a raw upload. |
| `removeImageFromProductAPI` | `DELETE api/products/image?productId=` | Removes the thumbnail. |
| `addProductGalleryImageAPI` | `POST api/products/:id/media/gallery` | Uploads one gallery image. |
| `removeProductGalleryImageAPI` | `DELETE api/products/:id/media/gallery/:imageId` | Removes one gallery image. |
| `reorderProductGalleryImagesAPI` | `PUT api/products/:id/media/gallery/order` | Sends the complete duplicate-free gallery ID order. |
| `addProductPromoVideoAPI` | `POST api/products/:id/media/promo-video` | Replaces the promo video. |
| `removeProductPromoVideoAPI` | `DELETE api/products/:id/media/promo-video` | Removes the promo video. |

Creator Product Overview uses `getProductByIdAPI` through the existing single-Product read path. It does not have a dedicated Product Overview backend endpoint.

Publishing supported non-Membership Products uses the same Product update path with `status: PUBLISHED`. Frontend readiness provides immediate guidance, but backend readiness validation is authoritative. Backend readiness failures are surfaced as HTTP `422` responses with a top-level message and field-path/message errors.

Membership Products remain excluded from Product-level publishing even though Membership readiness can be evaluated in the frontend.

## Product media

Product presentation media is Product-owned and separate from Course lesson video storage, Download deliverables, and Membership native Video/Resource binary delivery.

| Function | Method and URL | Notes |
|---|---|---|
| `addImageToProductAPI` | `POST api/products/image?productId=` | Uploads/replaces the Product thumbnail using the raw-file Product media API. |
| `removeImageFromProductAPI` | `DELETE api/products/image?productId=` | Removes the Product thumbnail. |
| `addProductGalleryImageAPI` | `POST api/products/:productId/media/gallery` | Adds a Product gallery image. |
| `removeProductGalleryImageAPI` | `DELETE api/products/:productId/media/gallery/:imageId` | Removes a Product gallery image. |
| `reorderProductGalleryImagesAPI` | `PUT api/products/:productId/media/gallery/order` | Persists gallery ordering from an ordered image ID list. |
| `addProductPromoVideoAPI` | `POST api/products/:productId/media/promo-video` | Uploads a Product-level promo video. |
| `removeProductPromoVideoAPI` | `DELETE api/products/:productId/media/promo-video` | Removes the Product-level promo video. |

Current frontend validation matches the Product media contract:

- images: JPEG, PNG, WebP, or GIF up to 10 MB
- promo video: MP4 or WebM up to 100 MB
- gallery: up to 20 images total

The frontend sends selected raw File bodies to these Product media APIs with an explicit `Content-Type: file.type`. Product media validation rejects missing or unsupported MIME before the API callback. This per-request override does not change shared Axios JSON defaults. Spaces persistence is backend-owned behind the API boundary; direct browser-to-Spaces upload is not the current Product media architecture.

### Gallery signature lifecycle

`product-media/product-media-section.component.tsx` reserves `name:size:lastModified` signatures before awaiting Gallery uploads. Successful uploads map saved image IDs to signatures; upload rejection releases the signature for retry. Only successful deletion releases the matching image reservation. Failed deletion retains both image and duplicate protection. These refs are component-local, not a permanent backend deduplication contract.

## Product Landing Page config

Product Landing Page config services live under `src/core/api/services/product-landing-page/product-landing-page-api.ts`.

| Function | Method and URL | Notes |
|---|---|---|
| `getPublicProductLandingPageConfigAPI` | `GET api/products/:productId/landing-page` | Server-backed public-safe landing-page config read. |
| `getCreatorProductLandingPageConfigAPI` | `GET api/creator/products/:productId/landing-page` | Server-backed Creator config read. |
| `updateCreatorProductLandingPageConfigAPI` | `PATCH api/creator/products/:productId/landing-page` | Server-backed Creator config update. |

The current config model contains `marketingDescription`, `heroLayout`, `visibleSections`, and `sectionOrder`. If `visibleSections` is absent, the frontend uses the default section set; if it is an explicit empty array, the empty selection is preserved. Product Landing Page config must not duplicate canonical Product fields, Creator profile fields, Storefront theme, checkout/access state, SEO, slugs, or custom-domain data.

The public Product route composes the protected Product read, persisted
landing-page configuration, and public Storefront theme/profile data. A
dedicated combined public Product read model is still unavailable; the
individual public Product and landing-page reads enforce Published visibility.

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

Only `uploadDownloadSectionFileAPI` completion after presign, direct storage PUT and backend confirmation yields a file row. SectionEditor keeps upload status/errors by selected file signature. Retry start removes that file's stale error; success clears only its error; failure restores it and releases the upload reservation. Confirmed rows merge against current section state, preventing out-of-order completions from losing other files. Another file's error remains visible when an older operation succeeds. Failed confirmation may leave storage bytes; no orphan cleanup operation was added.

## M6 verification boundary

M6 [PR #76](https://github.com/app-video-platform/video-platform-ui/pull/76) is merged as `fbc0145` (implementation `4b6cd12`). Reported automated checks passed 756 tests / 116 suites, including eight shared Uppy regressions; TypeScript, ESLint (0 errors / 203 warnings), whitespace and production build passed (26.95 seconds; three existing webpack performance warnings). Browser testing reached seeded Course Media but could not select files through the native chooser. Native selection E2E, live Product media/storage/CDN delivery and Download retries remain unverified; separate BUG-069 access-denied behavior is unchanged. Membership/Course binary upload/delivery remains backend-pending. Metadata acceptance is not proof of public delivery or orphan cleanup.

## Types

Current frontend product types are `COURSE`, `DOWNLOAD`, `CONSULTATION`, and `MEMBERSHIP`.

Current backend Product types are `COURSE`, `DOWNLOAD`, `CONSULTATION`, and
`MEMBERSHIP`.

Current product statuses represented in frontend types are `DRAFT`, `PUBLISHED`, and `HIDDEN`.

Product responses include `imageUrl`, ordered `galleryImages`, and nullable
`promoVideo`. Consultation details include persisted seven-day
`weeklyAvailability` with ordered `windows`. Backend publication validation is
authoritative and returns HTTP 422 issue maps when readiness blockers remain.

Membership uses the shared Product create/update shape for core Product fields and Product-owned recurring-pricing metadata. The Product contract carries `price`, `pricingModel`, `billingInterval`, and `currency`; the backend persists those fields and defaults Membership to recurring EUR monthly pricing.

Membership-native Posts, Videos, Resources, included Product relationships, feed ordering, and Membership configuration are owned by implemented Product-scoped Membership contracts, not by Product `details` payloads. Video/Resource bodies persist metadata only. Membership readiness is derived in the frontend and is not persisted by Product or Membership APIs.

See [Backend Products and Authoring](../backend/products-and-authoring.md) for
persisted Product rules and [Backend API and Swagger](../backend/api-and-swagger.md)
for the implemented server routes.
