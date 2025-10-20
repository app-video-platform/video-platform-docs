---
title: GalBreadcrumbs
---

### GalBreadcrumbs (quick notes)
- **Location:** `src/components/gal-breadcrumbs/`
- **Props:** *(none — uses `useLocation` internally)*
- **Usage:** 
  - Displays a breadcrumb trail based on the current URL path.
  - Dynamically builds navigation links for intermediate segments.
  - Used in internal pages like Dashboard, Products, Edit, etc.
- **A11y:**
  - Wrapped in a `<nav aria-label="breadcrumb">` for assistive technology.
  - Uses semantic list markup (`<ul><li>`) for correct hierarchy.
  - Active page indicated via `.breadcrumb-current` span (not a link).

### Example
```tsx
// Example usage within a page
import GalBreadcrumbs from '@/components/gal-breadcrumbs/gal-breadcrumbs.component';

function ProductsPage() {
  return (
    <div>
      <GalBreadcrumbs />
      <h1>Products</h1>
    </div>
  );
}
```

### Notes
- Automatically hides breadcrumbs if fewer than 2 path segments.
- Customizes display labels using an internal `labelMap`.
- Converts kebab-case routes (e.g. `user-profile`) to camelCase labels.
- Extend `labelMap` to add friendly names for new routes.
- If editing a resource (`/edit/...`), only shows up to the edit segment.

> Owner: @aleb, el Hijo del Diablo · Last reviewed: 2025-10-20
