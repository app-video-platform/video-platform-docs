---
title: Architecture Notes
sidebar_position: 7
---

# Architecture Notes

## Overview

The Video Platform frontend is a React application organized around route-based pages, shared UI, Redux Toolkit state, and service wrappers under `src/core/api`.

```mermaid
graph TD
  User["User"] --> UI["Pages and components"]
  UI --> Router["React Router"]
  UI --> State["Redux Toolkit store"]

  subgraph "Redux Store"
    State -->|auth| Auth["Auth Slice"]
    State -->|products| Products["Products Slice"]
    State -->|reviews| Reviews["Reviews Slice"]
    State -->|admin| Admin["Admin Slice"]
    State -->|browser saved| Wishlist["Wishlist Slice"]
    State -->|browser saved| ShopCart["ShopCart Slice"]
    State -->|UI alerts| Notifications["Notifications Slice"]
  end

  State --> Thunks["Async thunks"]
  Thunks --> API["API services"]
  API --> HTTP["Axios httpClient"]
  API --> Models["Typed models"]
```

## Layer breakdown

- **UI layer:** route pages under `src/domains`, shared UI under `src/shared`, and app-specific components under `src/domains/app/components`.
- **Routing layer:** React Router route trees for marketing, auth, and app areas.
- **State layer:** Redux Toolkit slices under `src/core/store`.
- **API layer:** service wrappers and typed models under `src/core/api`.
- **Browser persistence:** current wishlist and cart state are browser-saved.

## Data flow example

```mermaid
sequenceDiagram
  participant U as User
  participant C as Component
  participant A as authSlice
  participant T as Thunk
  participant S as API Service
  participant B as Backend

  U->>C: Enters credentials
  C->>A: dispatch(signinUser)
  A->>T: invoke thunk
  T->>S: call signInUser()
  S->>B: POST api/auth/login
  B-->>S: success message
  S-->>A: payload
  A-->>C: updates auth state
  C-->>U: navigates to app
```
