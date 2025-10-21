---
title: GalProductCard
---

### GalProductCard (quick notes)
- **Location:** `src/components/gal-product-card/`
- **Props:**
  - `product: ProductMinimised` — minimal product object containing:
    - `id: string`
    - `title: string`
    - `type: string` (e.g., `'course' | 'consultation' | 'download'`)
    - `price: 'free' | number`
    - (optional) `image`, `updatedAt`
- **Usage:**
  - Displays a compact product card with:
    - Thumbnail image  
    - Title and product type  
    - Price (shows € symbol if numeric)  
    - “View Product” button linking to `/app/product/:id/:type`
  - Used throughout store pages, explore pages, and creator dashboards.
- **A11y:**
  - Image includes `alt={product.title}` for accessibility.
  - The “View Product” button has a clear call-to-action role.
  - Consider wrapping the entire card in a `<Link>` for easier keyboard navigation (optional enhancement).

### Example
```tsx
import GalProductCard from '@/components/gal-product-card/gal-product-card.component';
import { ProductMinimised } from '@/api/models/product/product';

const mockProduct: ProductMinimised = {
  id: 'abc123',
  title: 'Creative Filmmaking Course',
  type: 'course',
  price: 59,
};

<GalProductCard product={mockProduct} />;
```


### Notes
- Uses a static placeholder image (`assets/image-placeholder.png`) as a fallback.
- Uses [`GalButton`](button.md) for navigation.
- CSS structure:
    - `.product-card`
    - `.product-card-image`
    - `.product-card-details`
    - `.type-and-price-line`
- Commonly used inside product listing components or creator dashboards.
- Consider later improvement:
    - Show real `product.image` when available.
    - Format `updatedAt` date using `Intl.DateTimeFormat`.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025