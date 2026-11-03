---
title: State Reference
sidebar_position: 5
---

# State Reference

Redux Toolkit state lives under `src/core/store`.

| Slice | File | Main selectors | Notes |
|---|---|---|---|
| `auth` | `src/core/store/auth-store/*` | `selectAuthUser`, `selectAuthLoading`, `selectAuthError`, `selectIsUserLoggedIn` | Signup, email verification, sign-in, Google sign-in, profile load/update, logout, onboarding state, and dev role switching. |
| `products` | `src/core/store/product-store/*` | `selectAllProducts`, `selectProductsLoading`, `selectProductsError`, `selectCurrentProduct`, `selectProductsByType`, `selectTopThreeProducts` | Product CRUD, sections, lessons, download files, owner/product queries, and current product editing state. |
| `admin` | `src/core/store/admin-store/*` | `selectAdminUsersPage`, `selectAdminProductsPage`, `selectAdminAuditPage`, `selectAdminLoading`, `selectAdminError` | Admin user list, role update, product list, and audit log pages. |
| `customers` | `src/core/store/customers-store/*` | `selectCreatorCustomersPage`, `selectCreatorCustomers`, `selectCurrentCreatorCustomer` | Server-backed Creator Customer list and detail contracts. |
| `sales` | `src/core/store/sales-store/*` | `selectCreatorSalesSummary`, `selectCreatorOrders`, `selectCurrentCreatorOrder` | Server-backed Sales summary, Orders page, and Order Detail contracts, including multi-Product Order items. |
| `analytics` | `src/core/store/analytics-store/*` | `selectAnalyticsOverview`, `selectAnalyticsLoading`, `selectAnalyticsError` | Server-backed Creator Analytics aggregate overview contract. |
| `dashboard` | `src/core/store/dashboard-store/*` | `selectCreatorDashboardSummary`, `selectCreatorDashboardLoading`, `selectCreatorDashboardError` | Server-backed Creator Dashboard aggregate summary contract. |
| `productLandingPage` | `src/core/store/product-landing-page-store/*` | `selectPublicProductLandingPageConfigByProductId`, `selectCreatorProductLandingPageConfigByProductId` | Server-backed public and Creator Product Landing Page config contracts. |
| `storefront` | `src/core/store/storefront-store/*` | `selectPublicStorefrontByCreatorId`, `selectCreatorStorefrontConfig` | Server-backed public Storefront read model and Creator Storefront config contracts, including theme, featured Product, and Product ordering. |
| `membership` | `src/core/store/membership-store/*` | `selectMembershipAggregateByProductId`, `selectMembershipLoading`, `selectMembershipSaving` | Backend-backed Product-scoped Membership aggregate, content-metadata, and feed authoring. |
| `reviews` | `src/core/store/reviews-store/*` | `selectAllReviews` | Creator Marketing Reviews list and filters. |
| `notifications` | `src/core/store/notifications/*` | `selectNotifications` | In-memory notification list. |
| `shopCart` | `src/core/store/shop-cart/*` | `selectAllShopCartProducts`, `selectShopCartTotal`, `selectCartCount`, `selectCartIds` | Browser-saved cart used by the current free-enrollment and paid-checkout flow; payment/order records stay in backend APIs, not Redux. |
| `wishlist` | `src/core/store/wishlist/*` | `selectWishlistProducts`, `selectWishlistIds`, `selectWishlistCount`, `makeSelectIsInWishlist` | Browser-saved wishlist with cart interop. |

## Current detail and query status

M8 keeps request ownership in each affected slice. Use these selectors for active
read status instead of a shared list/mutation flag:

| Channel | Status and identity selectors |
| --- | --- |
| Product detail | `selectProductDetailLoading`, `selectProductDetailError`, `selectProductDetailId` |
| Customer detail | `selectCreatorCustomerDetailLoading`, `selectCreatorCustomerDetailError`, `selectCreatorCustomerDetailStatus`, `selectCreatorCustomerDetailId` |
| Sales Order detail | `selectCreatorOrderDetailLoading`, `selectCreatorOrderDetailError`, `selectCreatorOrderDetailId` |
| Admin Products | `selectAdminProductsLoading`, `selectAdminProductsError`, `selectAdminProductsQueryKey` |
| Admin Audit | `selectAdminAuditLoading`, `selectAdminAuditError`, `selectAdminAuditQueryKey` |

Product detail status is independent of Product lists/mutations. Customer and
Order detail status remains independent of their lists. Admin Product and Audit
requests neither consume nor mutate the legacy `selectAdminLoading` /
`selectAdminError` channel used by Users/role operations. Data selectors remain
available as listed above, but components must guard data/status against the
current route or query. See [request ownership and lifecycle](./architecture/state-and-data-flow.md#active-read-request-ownership-m8)
for pending, completion, clear, retry and session rules.

## Persistence notes

Auth persistence depends on backend/session behavior through the HTTP client and profile loading.

Wishlist and cart are browser-saved and should not be treated as backend account state.

Membership domain data is stored in the `membership` slice by Product ID. Native Membership content, included Product feed entries, ordering mode, and manual feed updates flow through Membership thunks and services. Recurring Membership pricing is Product-owned and flows through Product draft/autosave state using `price`, `pricingModel`, `billingInterval`, and `currency`.

Membership editor drafts, selected File objects, chooser state, picker state, active editor state, active builder tab, and derived readiness feedback remain local UI state.

Storefront public read-model data and persisted Creator config live in the `storefront` slice. The Builder keeps unsaved config changes as local draft UI state until Save dispatches the Storefront config update. User/Profile remains the source for Creator profile fields and public email, and Product state remains the source for creator product summaries.

Product Landing Page public and Creator config data lives in the `productLandingPage` slice. The Creator Landing Page Builder keeps unsaved config changes as local draft UI state until Save dispatches the full config update. Product remains the source for canonical Product fields; Storefront config supplies inherited theme; User/Profile or public Storefront data supplies Creator identity when available.

Customers, Sales, Analytics, Dashboard, Storefront, Product Landing Page, and Membership use Redux thunks and services that call Axios. Local mock support, when enabled, intercepts at the Axios boundary rather than replacing feature component data flow.

## Session and authoring lifecycle

Auth also exposes `sessionStatus`, `sessionVersion`, `profileRequestId` and `profileError`. `selectAuthUser` returns confirmed identity; `selectRetainedSessionUser` supports hidden same-session draft continuity only and must not authorize access. Session changes reset private slices and reject stale asynchronous results before listeners.

Membership `selectMembershipRequest` reads Product-keyed request identity, loading/loaded/failed status and error. Failed aggregate loads require deliberate retry. Section/Lesson dirty revisions and flush handles remain local to mounted editors; Product detail autosave does not absorb their payloads. See [State and Data Flow](./architecture/state-and-data-flow.md#saved-workspace-and-nested-authoring) for sequencing, session compatibility and verification limits.

## Profile and Landing Page mutation status

M9 keeps Auth `profileUpdateRequestId`, `profileUpdateLoading`, and
`profileUpdateError` independent of session/profile resolution and generic Auth
status. Use `selectProfileUpdateLoading` / `selectProfileUpdateError` for saves
from Settings or Storefront. Only the current request may settle shared profile
mutation state; session boundaries invalidate that ownership.

Product Landing Page save uses `creatorSaveRequestId` and the existing
`selectCreatorProductLandingPageConfigSaveLoading` /
`selectCreatorProductLandingPageConfigSaveError`, separate from config reads.
Components catch rejected `.unwrap()` at the action boundary and retain local
failure/draft feedback where implemented. Calendar initialization and placeholder
validation remain local component state. See [M9 save lifecycles and verification](./architecture/state-and-data-flow.md#profile-and-integration-save-feedback-m9).

## Browser-local collection recovery

M5 [PR #75](https://github.com/app-video-platform/video-platform-ui/pull/75) (main merge `10413bf`, implementation `e5a6a84`) validates collections through `src/core/store/collection-storage.utils.ts`. `cart:v1` stores Cart state; `wishlist:v1` stores a Product-summary array. Hydration accepts arrays of valid summaries, deduplicates by exact Product ID (first accepted entry wins), and normalizes date strings. Every item requires a non-empty string ID. Optional summary fields must have supported shapes/enums; Cart additionally requires a finite non-negative numeric price or `free`. Numeric strings and unsupported quantities are rejected; there is one entry per Product and no quantity UI.

Cart ignores saved loading/total, resets loading to false and recomputes total from accepted prices (`free` contributes zero). Malformed JSON resets to empty when storage is writable; wrong root/collection shapes normalize empty and invalid entries are dropped. Denied reads leave storage untouched and use empty/default state; denied writes are caught so app startup/actions continue, without promising persistence. Add/toggle/set boundaries validate ingress as well. Valid Cart removal handles index zero.

`moveWishlistItemToCart` returns success only for a valid Cart-compatible Wishlist Product, adds only if absent and removes the Wishlist entry once present in Cart. Dropdown Add to cart navigates only on success. Missing/invalid identity or required Cart price leaves the entry and destination unchanged. Cart-to-Wishlist movement preserves the existing deduplicating behavior.

M1 intentionally retains these local preferences at session boundaries. They are not account-owned purchase caches or entitlements; local recovery cannot reconstruct missing backend grants. Shared Library reads the current principal through `GET api/entitlements/me`; Product and file endpoints remain server-authorized.

Reported M5 checks passed 737 tests / 115 suites, TypeScript, lint (0 errors / 203 warnings), whitespace and a subsequent 27.2-second local production build with three existing webpack performance warnings. The earlier stalled-build cause remains unconfirmed. Live Creator checkout, real entitlements/content/file access and browser-storage recovery through the synthetic browser surface remain unverified. Browser coverage was limited by storage access and missing commerce/entitlement mocks; deployment/final QA is not established.
