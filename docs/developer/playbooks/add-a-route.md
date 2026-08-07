---
title: Add a Route
---

# Add a Route

1. Create the page under the appropriate `src/domains/.../pages` area.
2. Export it from that area's `index.ts` if local patterns require it.
3. Register the route in the relevant React Router tree.
4. If guarded, wrap it with `ProtectedRoute` and the correct roles.
5. Add or update focused route tests.
6. Update [Routing and Access Reference](../routing-and-access-reference.md).

## PR checklist

- [ ] Route added.
- [ ] Tests updated.
- [ ] Developer docs updated.
- [ ] Product docs updated if user-facing behavior changed.
