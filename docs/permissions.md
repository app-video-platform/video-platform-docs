---
title: 7 - Permissions & Guards
sidebar_position: 7
---

Roles: **Admin**, **Creator**, **User**, (**Visitor** = unauthenticated)

> Guarding is done with `<ProtectedRoute allowedRoles={[...]}/>`.

### Legend
✅ allowed · ❌ blocked · *(dev)* only when `NODE_ENV === 'development'`

---

### Public (no auth required)
| Capability / Route | Visitor | User | Creator | Admin |
|---|:---:|:---:|:---:|:---:|
| `/` Home & static pages (`/about`, `/contact`, `/pricing`) | ✅ | ✅ | ✅ | ✅ |
| `/signup`, `/login` | ✅ | ✅ | ✅ | ✅ |
| `/verify-email`, `/email-sent` | ✅ | ✅ | ✅ | ✅ |
| `/forgot-password`, `/unauthorized` | ✅ | ✅ | ✅ | ✅ |
| `/dev-dashboard` | ✅ | ✅ | ✅ | ✅ |
| `__routes-dev` *(dev route)* | ✅ | ✅ | ✅ | ✅ |
| `/app/explore`, `/app/explore/search` | ✅ | ✅ | ✅ | ✅ |
| `/app/product/:id/:type`, `/app/store/:creatorId` | ✅ | ✅ | ✅ | ✅ |

---

### Protected (auth required)
These live under `/app/` inside a `<ProtectedRoute allowedRoles={[Admin, Creator, User]}>`.

| Capability / Route | Visitor | User | Creator | Admin |
|---|:---:|:---:|:---:|:---:|
| `/app` (index, role-based) | ❌ | ✅ | ✅ | ✅ |
| `/app/settings` | ❌ | ✅ | ✅ | ✅ |
| `/app/my-page-preview` | ❌ | ✅ | ✅ | ✅ |
| `/app/cart` | ❌ | ✅ | ✅ | ✅ |
| `/app/checkout` | ❌ | ✅ | ✅ | ✅ |

**Role-specific sections inside `/app`:**

| Capability / Route | Visitor | User | Creator | Admin |
|---|:---:|:---:|:---:|:---:|
| `/app/products/*` (product mgmt) | ❌ | ❌ | ✅ | ✅ |
| `/app/sales`, `/app/marketing` | ❌ | ❌ | ✅ | ✅ |
| `/app/library/*` | ❌ | ✅ | ❌ | ✅ |

---

### Onboarding
| Route | Visitor | User | Creator | Admin |
|---|:---:|:---:|:---:|:---:|
| `/onboarding` | ❌ | ✅ | ✅ | ✅ |

---

### Routing notes
- **Role-based `/app` index:**  
  - `Creator` → `<CreatorDashboard />`  
  - `Admin` → `<AdminPage />`  
  - otherwise (logged-in `User`) → `<GalacticaHome />`
- **Visitors** can browse the “shopfront” paths under `/app` (explore, store, product) but **cannot** access `/app` index or any protected subroutes.
- **Library** is intentionally **User/Admin-only** (Creators are blocked).
- `__routes-dev` only exists when `process.env.NODE_ENV === 'development'`.
- Fallback inside `/app`: any unknown subpath redirects to `/app`.

<br/>
<br/>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Tue, 21 Oct 2025
