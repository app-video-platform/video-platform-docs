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
| `customers` | `src/core/store/customers-store/*` | `selectCreatorCustomersPage`, `selectCreatorCustomers`, `selectCurrentCreatorCustomer` | Backend-backed Creator Customer list and detail contracts. |
| `sales` | `src/core/store/sales-store/*` | `selectCreatorSalesSummary`, `selectCreatorOrders`, `selectCurrentCreatorOrder` | Backend-backed Sales summary, Orders page, and Order Detail contracts. |
| `analytics` | `src/core/store/analytics-store/*` | `selectAnalyticsOverview`, `selectAnalyticsLoading`, `selectAnalyticsError` | Backend-backed Creator Analytics aggregate overview contract. |
| `dashboard` | `src/core/store/dashboard-store/*` | `selectCreatorDashboardSummary`, `selectCreatorDashboardLoading`, `selectCreatorDashboardError` | Backend-backed Creator Dashboard aggregate summary contract. |
| `productLandingPage` | `src/core/store/product-landing-page-store/*` | `selectPublicProductLandingPageConfigByProductId`, `selectCreatorProductLandingPageConfigByProductId` | Backend-backed public and management Product Landing Page config contracts. |
| `storefront` | `src/core/store/storefront-store/*` | `selectPublicStorefrontByCreatorId`, `selectCreatorStorefrontConfig` | Backend-backed public Storefront read model and Creator configuration. |
| `membership` | `src/core/store/membership-store/*` | `selectMembershipAggregateByProductId`, `selectMembershipLoading`, `selectMembershipSaving` | Backend-backed Product-scoped Membership aggregate, content-metadata, and feed authoring. |
| `reviews` | `src/core/store/reviews-store/*` | `selectAllReviews` | Creator Marketing Reviews list and filters. |
| `notifications` | `src/core/store/notifications/*` | `selectNotifications` | In-memory notification list. |
| `shopCart` | `src/core/store/shop-cart/*` | `selectAllShopCartProducts`, `selectShopCartTotal`, `selectCartCount`, `selectCartIds` | Browser-saved cart. No checkout/payment state. |
| `wishlist` | `src/core/store/wishlist/*` | `selectWishlistProducts`, `selectWishlistIds`, `selectWishlistCount`, `makeSelectIsInWishlist` | Browser-saved wishlist with cart interop. |

## Persistence notes

Auth persistence depends on backend/session behavior through the HTTP client and profile loading.

Wishlist and cart are browser-saved and should not be treated as backend account state.

Membership domain data is stored in the `membership` slice by Product ID. Native Membership content, included Product feed entries, ordering mode, and manual feed updates flow through Membership thunks and services. Recurring Membership pricing is Product-owned and flows through Product draft/autosave state using `price`, `pricingModel`, `billingInterval`, and `currency`.

Membership editor drafts, selected File objects, chooser state, picker state, active editor state, active builder tab, and derived readiness feedback remain local UI state.

Storefront public read-model data and persisted Creator config live in the `storefront` slice. The Builder keeps unsaved config changes as local draft UI state until Save dispatches the Storefront config update. User/Profile remains the source for Creator profile fields and public email, and Product state remains the source for creator product summaries.

Product Landing Page public and Creator config data lives in the `productLandingPage` slice. The Creator Landing Page Builder keeps unsaved config changes as local draft UI state until Save dispatches the full config update. Product remains the source for canonical Product fields; Storefront config supplies inherited theme; User/Profile or public Storefront data supplies Creator identity when available.

Customers, Sales, Analytics, Dashboard, Storefront, Product Landing Page, and Membership use Redux thunks and services that call Axios. Local mock support, when enabled, intercepts at the Axios boundary rather than replacing feature component data flow.
