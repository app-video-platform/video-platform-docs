---
title: State Slices (Index)
sidebar_position: 5
---

Brief index of Redux Toolkit slices and selectors. Expand as needed.

| Slice | File | Key actions | Selectors | Notes |
|---|---|---|---|---|
| `auth` | `src/store/auth/*` | `setUserProfile`, `logout`, `resetOnboarding`, `changeUserRole` | `selectAuthUser`, `selectAuthLoading`, `selectAuthError`, `selectIsUserLoggedIn` | Thunks: `signupUser`, `verifyEmail`, `signinUser`, `googleSignInUser`, `getUserProfile`, `logoutUser`, `updateUserDetails`. Sets `isUserLoggedIn`; triggers profile fetch post-login. |
| `products` | `src/store/product/*` | `clearCurrentProduct`, `deleteProductFromStore`, `deleteSectionFromStore`, `deleteLessonFromStore` | `selectAllProducts`, `selectProductsLoading`, `selectProductsError`, `selectCurrentProduct`, `selectProductsByType`, `selectTopThreeProducts`,  | Thunks: `createCourseProduct`, `updateCourseProductDetails`, `deleteProduct`, `createSection`, `updateSectionDetails`, `deleteSection`, `createLesson`, `updateLessonDetails`, `deleteLesson`, `getAllProductsByUserId`, `addImageToProduct`, `getProductByProductId`. Mutates nested `sections/lessons` in `currentProduct`. |
| `notifications` | `src/store/notifications/*` | `addNotification`, `removeNotification`, `markAsRead` | `selectNotifications` | Uses `uuidv4()` for client IDs; simple in-memory toast/alert list. |
| `shopCart` | `src/store/shopCart/*` | `addProductToCart`, `removeFromCart` | `selectAllShopCartProducts`, `selectShopCartTotal`, `selectCartCount`, `selectCartIds` | Derived total from items; cross-refs product data. |
| `wishlist` | `src/store/wishlist/*` | `addToWishlist`, `removeFromWishlist`, `moveWishlistItemToCart` | `selectWishlistProducts`, `selectWishlistIds`, `selectWishlistCount`, `makeSelectIsInWishlist` | Interop with cart via “move to cart”. |

> Owner: @aleb, el Hijo del Diablo · Last reviewed: 2025-10-20
