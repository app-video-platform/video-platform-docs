---
title: Search
---

### Search (quick notes)
- **Location:** `src/domains/app/components/search/`
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

### SmartSearch query ownership (M10)

`src/domains/app/features/smart-search/smart-search.component.tsx` wraps Search for
Product autocomplete. The optional Search `combobox` prop carries `controls`,
`expanded`, and `activeDescendant`; when supplied, the labeled input has
`role="combobox"`, `aria-autocomplete="list"`, and the listbox relationship. Options
use `role="option"` / `aria-selected`. SmartSearch supplies an option ID as
active-descendant for a nonnegative highlight; input change and Escape clear that
highlight. These DOM semantics do not establish verified screen-reader speech.

SmartSearch debounces trimmed input for 250 ms and enables suggestions at two
characters. It requests page 0 / size 10 with React Query key
`['products-autocomplete', debouncedQuery]`. Options are visible/selectable only
when the current trimmed input equals that debounced query. Input change clears
the highlight and closes the old list immediately; clearing/shortening below two
characters cancels debounce. Late responses stay isolated to their original key.
No option is selected by default. ArrowDown/ArrowUp select current options; Enter
searches the highlighted current title or the raw input when none is highlighted.
Escape closes and clears selection. Current-option mouse selection also submits
its title; it does not navigate directly to a Product ID.

Submission trims the chosen text and builds `/app/explore/search?term=...` through
URLSearchParams, omitting `page` to start at zero, even for a resubmitted term.
SmartSearch mirrors the committed URL term on Search route/history changes. Base
Search still gates ordinary form submission on at least two trimmed characters;
direct empty-term results URLs are supported independently.

### Search results and pagination (M10)

`src/domains/app/pages/search-page/search-page.component.tsx` reads `term` and
`page` from `useSearchParams`, with no duplicate committed page state. Results use
`['products-search', term, page, 20]`; a late prior term/page response remains in
its own query cache. Pagination pushes URL entries, and Back/Forward/reload restore
the matching query. `goToPage(0)` omits page; positive pages retain the term.

Missing page means zero. Supplied page must match `^(0|[1-9]\d*)$` and parse as a
safe integer; negative, fractional, nonnumeric, empty, leading-zero or unsafe
values normalize to zero using history replace. Normalization preserves the
presence/value of `term` and rebuilds only supported parameters. A valid
out-of-range page is not silently clamped to the API total.

The inline pagination controls disable Prev at zero. Presentation uses at least
one page for an empty total; an in-range page shows `Page N of M` with N=page+1.
A deep link beyond the reported total shows `Page N` without inventing more pages.
Empty later content offers **Return to first page**. Next remains disabled when
`data.last` is true or page+1 reaches the reported total. M10 does not derive total
counts from content length or assume a full page implies continuation. See the
[unresolved backend contract](../backend/products-and-authoring.md#pagination-metadata-dependency-bug-013).

### M10 verification boundary

Merged [PR #80](https://github.com/app-video-platform/video-platform-ui/pull/80)
(main merge `bc248bf`, implementation `97aad2e`, 4 November 2026) and
`M10_DOCUMENTATION_HANDOFF.md` report 874 tests / 127 suites, TypeScript, ESLint
(0 errors / 185 existing warnings), production build (three existing Webpack
bundle-size/performance warnings), and whitespace checks. Source comparison
confirms the implementation is contained in main with no file differences.

Adjacent SmartSearch/SearchResultsPage tests cover current-query keyboard/mouse
selection, stale highlighted input, late responses, Escape/clearing, direct pages,
new/same-term reset, encoded terms, Back/Forward, malformed page values and
empty/out-of-range labels. Explore/ProductBox tests cover canonical Creator links
and absent identity; AppRouter tests cover Guest/User/Creator/Admin public access.
API-mocked Storefront tests cover unavailable data separately from local mocks.

Reported synthetic browser checks covered Guest Creator-link navigation/reload,
new search from `page=2` resetting to zero, history restoration, and immediate
Enter after replacing a query. Unknown Creator IDs fall back to a default
Storefront in the local mock, so their browser behavior is not authoritative.
No live-backend/deployed E2E was performed. Real discovery navigation/history,
network timing and corrected backend pagination/later-page reachability remain
unverified; BUG-013 stays open.

### Example
```tsx
import { Search } from '@/domains/app/components';

function ProductExplorer() {
  const [query, setQuery] = useState('');

  const handleSearch = (term: string) => {
    console.log('Searching for:', term);
  };

  return (
    <Search
      value={query}
      onChange={setQuery}
      onSearch={handleSearch}
      placeholder="Search products..."
    />
  );
}
```


### Notes
- Internally uses [`Icon`](icon.md) with `CiSearch` icon from `react-icons/ci`.
- CSS structure:
    - `.search-form` — outer wrapper
    - `.search-input` — text field
    - `.search-button` — clickable icon
- Logic:
    - Submitting or pressing Enter runs `onSearch` callback.
    - Requires input length ≥ 2 before triggering search.
- SmartSearch owns debounce and query freshness; base Search remains a controlled form primitive.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025

### Responsive container sizing (M13)

The existing Search and SmartSearch are reused at every marketplace header size;
there is no independent mobile search system. Search's `.search-form` uses
`width: 100%`, `min-width: 0` and its existing 800px maximum; `.search-input` also
has `min-width: 0`. SmartSearch keeps `width: 100%`, `min-width: 0` and its 400px
maximum, overridden to no maximum in the compact TopNavbar search row. The header
search container can shrink independently from Explore/menu actions. This removes
the former 450px form minimum overflowing a 400px SmartSearch wrapper.

At 1000px and below, TopNavbar keeps search visible in a second row outside its
compact menu. Above that width it shares the inline header. Preserve M10 URL
term/page ownership, new-query reset, history restoration and current-query
suggestions; M13 changes layout, not query or API behavior. Header fit and pointer
reachability must be checked independently of page-content bounds. The reported
local Creator pointer check covers Explore at 1440px; it does not establish all
roles, Product families, zoom or deployed behavior. See [navigation conventions
and verification scope](../architecture/application-structure.md#responsive-navigation-and-settings-m13).
