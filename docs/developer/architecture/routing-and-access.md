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
| `/onboarding` | `Onboarding` through `ProtectedRoute` | Canonical onboarding outside the app role-home layout; Admin, Creator and User. |
| `/unauthorized` | Shared page | Public unauthorized page used by role guards. |
| `/dev-dashboard` | Shared page | Developer dashboard route. |

Legacy auth paths still redirect into `/auth`, including `/signin`, `/signup`, `/login`, `/verify-email`, `/email-sent`, and `/forgot-password`.

## Layouts

Marketing routes render through `MarketingLayout`, which provides the public navigation and footer.

App routes render through `AppLayout`, which provides the app header and, for creator/admin management areas, the sidebar. Creator Product Overview routes render inside the Creator management shell. Product Landing Page Builder routes also render inside the Creator management shell and request sidebar collapse. Product Workspace edit/create routes intentionally bypass the normal Creator shell and use the focused editing workspace. Public app routes such as product discovery and Product Landing Pages use the marketplace-style app layout.

## Public and protected app routes

The `/app` route tree contains both public and protected routes.

Public app routes include product discovery and Product Landing Page experiences, such as explore, search, product landing pages, and storefront pages. The current public Product route is distinct from Creator Product Overview and renders only published Products in the frontend. That frontend guard is not a security boundary; production public Product visibility still needs server-side enforcement in a dedicated public read model.

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

- `unauthenticated`: redirect to `/auth/login`, including immediately on logout.
- `authenticated`: render only with a confirmed user and an allowed role; otherwise redirect to `/unauthorized`.
- `resolving`: show a spinner; unknown sessions never mount protected children.
- `unavailable`: show **Unable to verify your session** and explicit **Retry** for profile-service availability failures. Profile HTTP 401/403 instead invalidates authentication.

An already-authorized workspace can remain mounted but hidden during same-session verification or outage at the same pathname/query. Retry restores it without discarding local edits. A navigation or account/role boundary removes that retained workspace; its session-version key also handles batched account switches. Profile mutation `loading` alone does not gate authenticated routes. Bootstrap preserves the requested URL.

`selectAuthUser` supplies confirmed identity for visible UI. `selectRetainedSessionUser` is limited to shell selection and draft continuity; it must never authorize routes or expose account controls. See [State and Data Flow](./state-and-data-flow.md) for session ownership.

This is route-level access control. The current implementation does not include a separate permission-policy system.

## Updating routes

When adding or changing a route:

- Add the page under the owning domain.
- Register it in the relevant router.
- Add `ProtectedRoute` when the route requires authentication or role checks.
- Update the [Routing and Access Reference](../routing-and-access-reference.md).
- Use the [Add a Route playbook](../playbooks/add-a-route.md) for the detailed checklist.

## Onboarding entry and profile updates

`src/App.tsx` directly mounts Onboarding at `/onboarding` through the existing allowed-role guard for ADMIN, CREATOR and USER. Do not delegate that entry to AppRouter's role-home layout. `src/domains/app/routes/app-router.tsx` retains `/app/onboarding` with the same roles. Unresolved authentication never mounts the wizard; missing allowed roles deny access. `Onboarding` selects MultiStepForm for an incomplete profile and CountdownRedirect for a completed profile.

Ordinary `updateUserDetails.pending` loading must not replace an authorized wizard with a spinner. Keep M1 session-status authorization separate from profile mutation loading, preserving progress while the save settles. Authentication/account boundaries still remove the old wizard. See [profile step persistence](../api/user.md#onboarding-profile-save-lifecycle) for async ownership and verification limits.
