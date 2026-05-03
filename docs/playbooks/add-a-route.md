---
sidebar_position: 10
title: Add a Route
---

1. Create your page component under the relevant domain folder, usually `src/domains/.../pages`.
2. Register the route in the domain router, usually `src/domains/app/routes/app-router.tsx` for app routes.
3. If guarded, wrap the route with `ProtectedRoute` and use canonical role values: `UserRole.ADMIN`, `UserRole.CREATOR`, and `UserRole.USER`.
4. For role checks outside route declarations, use the shared helpers: `hasRole`, `hasAnyRole`, `isCreatorOrAdmin`, or `getPrimaryRole`.
5. Add or update unit tests for the route guard or role branching.
6. Update **docs**: add or adjust rows in **Routing Map** and **Permissions & Guards**.

**PR checklist**
- [ ] Route added
- [ ] Tests updated
- [ ] `docs/routing-map.md` updated
- [ ] `docs/permissions.md` updated if access changed


<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025
