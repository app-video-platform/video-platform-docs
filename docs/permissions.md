---
title: 7 - Permissions & Guards
sidebar_position: 7
---

Roles: **`ADMIN`**, **`CREATOR`**, **`USER`**, (**Visitor** = unauthenticated)

The frontend consumes role values from the backend exactly as uppercase API values. Do not map or rename them in API services.

> Guarding is done with `<ProtectedRoute allowedRoles={[...]}/>`.

### Legend
✅ allowed · ❌ blocked · *(dev)* only when `NODE_ENV === 'development'`

---

### Public (no auth required)
| Capability / Route | Visitor | `USER` | `CREATOR` | `ADMIN` |
|---|:---:|:---:|:---:|:---:|
| `/` Home & static pages (`/about`, `/contact`, `/pricing`) | ✅ | ✅ | ✅ | ✅ |
| `/auth/signup`, `/auth/login` and legacy auth redirects | ✅ | ✅ | ✅ | ✅ |
| `/auth/verify-email`, `/auth/email-sent` | ✅ | ✅ | ✅ | ✅ |
| `/auth/forgot-password`, `/unauthorized` | ✅ | ✅ | ✅ | ✅ |
| `/dev-dashboard` | ✅ | ✅ | ✅ | ✅ |
| `__routes-dev` *(dev route)* | ✅ | ✅ | ✅ | ✅ |
| `/app/explore`, `/app/explore/search` | ✅ | ✅ | ✅ | ✅ |
| `/app/product/:id/:type`, `/app/store/:creatorId` | ✅ | ✅ | ✅ | ✅ |

---

### Protected (auth required)
These live under `/app/` inside a `<ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.CREATOR, UserRole.USER]}>`.

| Capability / Route | Visitor | `USER` | `CREATOR` | `ADMIN` |
|---|:---:|:---:|:---:|:---:|
| `/app` (index, role-based) | ❌ | ✅ | ✅ | ✅ |
| `/app/settings` | ❌ | ✅ | ✅ | ✅ |
| `/app/my-page-preview` | ❌ | ✅ | ✅ | ✅ |
| `/app/cart` | ❌ | ✅ | ✅ | ✅ |

**Role-specific sections inside `/app`:**

| Capability / Route | Visitor | `USER` | `CREATOR` | `ADMIN` |
|---|:---:|:---:|:---:|:---:|
| `/app/products/*` (product mgmt) | ❌ | ❌ | ✅ | ✅ |
| `/app/sales`, `/app/marketing` | ❌ | ❌ | ✅ | ✅ |
| `/app/library/*` | ❌ | ✅ | ❌ | ✅ |

---

### Onboarding
| Route | Visitor | `USER` | `CREATOR` | `ADMIN` |
|---|:---:|:---:|:---:|:---:|
| `/onboarding` | ❌ | ✅ | ✅ | ✅ |

---

### Routing notes
- **Role-based `/app` index:**
  - `ADMIN` → `<AdminPage />`
  - `CREATOR` → `<CreatorDashboard />`
  - otherwise (logged-in `USER`) → `<GalacticaHome />`
- Primary role precedence is `ADMIN`, then `CREATOR`, then `USER`.
- `ProtectedRoute` redirects unauthenticated users to `/auth/login` and authenticated users without an allowed role to `/unauthorized`.
- **Visitors** can browse the “shopfront” paths under `/app` (explore, store, product) but **cannot** access `/app` index or any protected subroutes.
- **Library** is intentionally **`USER`/`ADMIN`-only** (`CREATOR` is blocked).
- Product management, sales, and marketing are **`CREATOR`/`ADMIN`-only**.
- The user dropdown displays the backend-provided primary role as read-only. It must not mutate Redux roles locally.
- `__routes-dev` only exists when `process.env.NODE_ENV === 'development'`.
- Fallback inside `/app`: any unknown subpath redirects to `/app`.

<br/>
<br/>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Tue, 21 Oct 2025
