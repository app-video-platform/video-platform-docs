---
title: 8 - Key User Flows
sidebar_position: 8
---

## Move item from Wishlist → Cart
1. Visit `/app/library/my-wishlist`
2. Click **Move to cart** on an item
3. On success: toast and item appears in `/app/cart`

Edge cases:
- Already in cart → show info toast
- Network error → retry button

```mermaid
flowchart LR
  W[Wishlist] -->|Move to cart| C[Cart]
  C -->|Checkout| P[Payment]
  C -.->|Remove| W
```


<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025
