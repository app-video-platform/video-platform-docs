---
title: GalSearch
---

### GalSearch (quick notes)
- **Location:** `src/components/gal-search/`
- **Props:**
  - `value: string` — current text input value (controlled)
  - `onChange(value)` — called on each keystroke or change
  - `onSearch(value)` — called when user presses Enter or clicks the search button
  - `onKeyDown?` — optional keyboard event handler for custom shortcuts
  - `inputRef?` — ref to access the input from the parent (for focusing)
  - `placeholder?` — input placeholder (default: `"Search..."`)
  - `customClassName?` — additional CSS class for styling
- **Usage:**
  - A reusable search field for products, users, or any data list.
  - Triggers `onSearch` only when text length ≥ 2 (to avoid empty queries).
  - Commonly used in explore pages, admin dashboards, and storefront headers.
- **A11y:**
  - Uses semantic `<form>` with a labeled input (`aria-label="Product search"`).
  - Search button has `aria-label="Submit search"` for assistive tech.

### Example
```tsx
import GalSearch from '@/components/gal-search/gal-search.component';

function ProductExplorer() {
  const [query, setQuery] = useState('');

  const handleSearch = (term: string) => {
    console.log('Searching for:', term);
  };

  return (
    <GalSearch
      value={query}
      onChange={setQuery}
      onSearch={handleSearch}
      placeholder="Search products..."
    />
  );
}
```


### Notes
- Internally uses [`GalIcon`](icon.md) with `CiSearch` icon from `react-icons/ci`.
- CSS structure:
    - `.search-form` — outer wrapper
    - `.search-input` — text field
    - `.search-button` — clickable icon
- Logic:
    - Submitting or pressing Enter runs `onSearch` callback.
    - Requires input length ≥ 2 before triggering search.
- Recommended enhancements:
    - Add loading spinner when search is processing.
    - Integrate with debounce utilities to avoid excessive calls.

> Owner: @aleb, el Hijo del Diablo · Last reviewed: 2025-10-20