---
title: Routing and Access
sidebar_position: 3
---

# Routing and Access

The frontend uses React Router v6. Routing is split by domain instead of one flat route file.

For the exhaustive route list, see the [Routing and Access Reference](../routing-and-access-reference.md).

## Top-level route groups

`src/App.tsx` mounts the major route groups:

| Route group | Router | Purpose |
|---|---|---|
| `/` | `MarketingRouter` | Public marketing site. |
| `/auth/*` | `AuthRouter` | Auth flows. |
| `/app/*` | `AppRouter` | Main application experience. |
| `/onboarding` | `AppRouter` | Protected onboarding route implemented by the app router. |
| `/unauthorized` | Shared page | Public unauthorized page used by role guards. |
| `/dev-dashboard` | Shared page | Developer dashboard route. |

Legacy auth paths still redirect into `/auth`, including `/signin`, `/signup`, `/login`, `/verify-email`, `/email-sent`, and `/forgot-password`.

## Layouts

Marketing routes render through `MarketingLayout`, which provides the public navigation and footer.

App routes render through `AppLayout`, which provides the app header and, for creator/admin management areas, the sidebar. The app layout also wraps public app routes such as product discovery and product detail pages.

## Public and protected app routes

The `/app` route tree contains both public and protected routes.

Public app routes include product discovery and product detail experiences, such as explore, search, product detail, and storefront pages.

Protected app routes use `ProtectedRoute` and require a logged-in user with one of the allowed roles.

## Contextual detail navigation

Some workspaces keep the parent route mounted while the URL identifies a selected contextual resource.

The Sales workspace uses this pattern: `/app/sales` remains the page route, and a selected order is represented with query state such as `/app/sales?order=ORD-2026-00124`. The page uses the query value to open contextual order detail while preserving the surrounding Sales list, filters, and metrics.

Use this pattern when the user benefits from retaining collection context, and when deep linking, refresh, and browser navigation should preserve the selected resource. Do not treat it as the default for every detail experience. A substantial detail destination, such as Customer Detail, can remain a dedicated route when it needs its own page context.

## Role-based routing

Roles are represented by the `UserRole` enum:

```text
USER
CREATOR
ADMIN
```

The `/app` index route chooses a landing page from the user's primary role. Primary role precedence is:

```text
ADMIN -> CREATOR -> USER
```

Route guards use allowed-role lists. For example, admin routes require `ADMIN`, product-management routes allow `CREATOR` and `ADMIN`, and library routes allow `USER` and `ADMIN`.

## Route guards

`ProtectedRoute` reads auth state from the Redux auth slice.

Its behavior is:

- If the user is confirmed logged out, redirect to `/auth/login`.
- If the user is logged in but lacks an allowed role, redirect to `/unauthorized`.
- If authentication is still loading, show a spinner.
- Otherwise render the protected child route.

This is route-level access control. The current implementation does not include a separate permission-policy system.

## Updating routes

When adding or changing a route:

- Add the page under the owning domain.
- Register it in the relevant router.
- Add `ProtectedRoute` when the route requires authentication or role checks.
- Update the [Routing and Access Reference](../routing-and-access-reference.md).
- Use the [Add a Route playbook](../playbooks/add-a-route.md) for the detailed checklist.
