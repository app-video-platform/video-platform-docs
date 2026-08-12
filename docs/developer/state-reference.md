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
| `customers` | `src/core/store/customers-store/*` | `selectCreatorCustomersPage`, `selectCreatorCustomers`, `selectCurrentCreatorCustomer` | Backend-pending Creator Customer list and detail contracts. |
| `sales` | `src/core/store/sales-store/*` | `selectCreatorSalesSummary`, `selectCreatorOrders`, `selectCurrentCreatorOrder` | Backend-pending Sales summary, Orders page, and Order Detail contracts. |
| `analytics` | `src/core/store/analytics-store/*` | `selectAnalyticsOverview`, `selectAnalyticsLoading`, `selectAnalyticsError` | Backend-pending Creator Analytics aggregate overview contract. |
| `dashboard` | `src/core/store/dashboard-store/*` | `selectCreatorDashboardSummary`, `selectCreatorDashboardLoading`, `selectCreatorDashboardError` | Backend-pending Creator Dashboard aggregate summary contract. |
| `storefront` | `src/core/store/storefront-store/*` | `selectPublicStorefrontByCreatorId`, `selectCreatorStorefrontConfig` | Backend-pending public Storefront read model and Creator Storefront config contracts. |
| `membership` | `src/core/store/membership-store/*` | `selectMembershipAggregateByProductId`, `selectMembershipLoading`, `selectMembershipSaving` | Backend-pending Product-scoped Membership aggregate, content, and feed contracts. |
| `reviews` | `src/core/store/reviews-store/*` | `selectAllReviews` | Creator Marketing Reviews list and filters. |
| `notifications` | `src/core/store/notifications/*` | `selectNotifications` | In-memory notification list. |
| `shopCart` | `src/core/store/shop-cart/*` | `selectAllShopCartProducts`, `selectShopCartTotal`, `selectCartCount`, `selectCartIds` | Browser-saved cart. No checkout/payment state. |
| `wishlist` | `src/core/store/wishlist/*` | `selectWishlistProducts`, `selectWishlistIds`, `selectWishlistCount`, `makeSelectIsInWishlist` | Browser-saved wishlist with cart interop. |

## Persistence notes

Auth persistence depends on backend/session behavior through the HTTP client and profile loading.

Wishlist and cart are browser-saved and should not be treated as backend account state.

Membership domain data is stored in the `membership` slice by Product ID. Native Membership content, included Product feed entries, ordering mode, and manual feed updates flow through Membership thunks and services. Recurring Membership pricing is Product-owned and flows through Product draft/autosave state using `price`, `pricingModel`, `billingInterval`, and `currency`.

Membership editor drafts, selected File objects, chooser state, picker state, active editor state, active builder tab, and derived readiness feedback remain local UI state.

Storefront public read-model data and Creator config live in the `storefront` slice. User/Profile remains the source for Creator profile fields in management, and Product state remains the source for creator product summaries.

Customers, Sales, Analytics, Dashboard, Storefront, and Membership use Redux thunks and services that call Axios. Local mock support, when enabled, intercepts at the Axios boundary rather than replacing feature component data flow.
