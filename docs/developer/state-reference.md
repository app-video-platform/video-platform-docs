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
| `reviews` | `src/core/store/reviews-store/*` | `selectAllReviews` | Creator Marketing Reviews list and filters. |
| `notifications` | `src/core/store/notifications/*` | `selectNotifications` | In-memory notification list. |
| `shopCart` | `src/core/store/shop-cart/*` | `selectAllShopCartProducts`, `selectShopCartTotal`, `selectCartCount`, `selectCartIds` | Browser-saved cart. No checkout/payment state. |
| `wishlist` | `src/core/store/wishlist/*` | `selectWishlistProducts`, `selectWishlistIds`, `selectWishlistCount`, `makeSelectIsInWishlist` | Browser-saved wishlist with cart interop. |

## Persistence notes

Auth persistence depends on backend/session behavior through the HTTP client and profile loading.

Wishlist and cart are browser-saved and should not be treated as backend account state.
