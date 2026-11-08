---
title: Application Structure
sidebar_position: 2
---

# Application Structure

The frontend is organized around route-facing domains, core infrastructure, shared code, and global styles.

## Simplified folder tree

```text
src/
├── App.tsx
├── index.tsx
├── core/
│   ├── api/
│   ├── constants/
│   ├── enums/
│   ├── providers/
│   └── store/
├── domains/
│   ├── app/
│   ├── auth/
│   └── marketing/
├── shared/
│   ├── hooks/
│   ├── icons/
│   ├── pages/
│   ├── ui/
│   └── utils/
└── styles/
```

## `domains`

`domains` contains the main route-facing areas of the product.

| Domain | Responsibility |
|---|---|
| `domains/marketing` | Public marketing pages, marketing layout, navigation, footer, and marketing-specific UI. |
| `domains/auth` | Auth pages and the `/auth` route tree. |
| `domains/app` | Main application pages, app layout, widgets, app-specific components, and feature areas. |

New route pages usually belong under the domain that owns the user experience: creator/admin/customer screens in `domains/app`, auth screens in `domains/auth`, and public marketing screens in `domains/marketing`.

Larger app workflows are grouped under `domains/app/features`, such as `product-form`, `settings`, `onboarding`, `marketing`, `smart-search`, and `storefront`.

Creator Product Overview, Product Landing Page Builder, and Product Workspace are intentionally separate route experiences. Product Overview routes live in the normal Creator management shell for read-only inspection. Product Landing Page Builder routes also live in Creator management, request sidebar collapse, and use the shared public Product Landing Page presentation as the live editing surface. Product Workspace routes use the focused product editing shell outside the normal Creator shell.

## Architectural layers

The folder structure maps to a few practical layers:

| Layer | Main location | Responsibility |
|---|---|---|
| UI | `src/domains`, `src/shared/ui` | Pages, layouts, app widgets, and reusable components. |
| Routing | `src/App.tsx`, `src/domains/*/routes` | Marketing, auth, app, onboarding, and guarded route trees. |
| State | `src/core/store` | Shared Redux Toolkit state, async thunks, selectors, and listener middleware. |
| API layer | `src/core/api` | Typed models, service wrappers, Axios client, interceptors, and local mocks. |
| Browser persistence | `src/core/store` | Local persistence for cart and wishlist state. |

These are descriptive layers, not enforced module boundaries.

## `core`

`core` contains application-wide infrastructure used across domains.

It currently owns:

- API models and service wrappers under `core/api`.
- The shared Axios client and request/response interceptors.
- Redux Toolkit store setup and slices under `core/store`.
- Providers such as app initialization and protected route handling.
- Shared constants and enums.

Add code to `core` when it is infrastructure or cross-domain behavior. Keep route-specific UI in the owning domain.

## `shared`

`shared` contains reusable code that is not owned by one domain.

It currently includes:

- Reusable UI components under `shared/ui`.
- Shared system pages such as not found and unauthorized pages.
- Small hooks, icons, and utility functions.
- Test and asset mocks used by the frontend tooling.

Add code to `shared` when multiple domains can reasonably reuse it. If a component is only used inside app shell or creator/admin/customer flows, prefer `domains/app/components` or the relevant `domains/app/features` area.

Shared UI should own reusable interaction and presentation behavior, not feature-specific business meaning. For example, the shared Drawer owns generic drawer infrastructure such as overlay, close behavior, Escape handling, focus management and restoration, scroll locking, and responsive full-screen mobile presentation. A feature such as Sales owns its own order-detail content.

Similarly, shared status presentation primitives own reusable visual and semantic presentation. Feature code should map domain-specific business statuses, such as order or product states, into shared presentation props. Do not turn a feature-specific status mapping into a generic shared business component unless multiple domains truly share the same business meaning.

Shared chart primitives own reusable visualization presentation and infrastructure, such as chart sizing, tooltips, legends, empty states, accessibility labels, responsive behavior, and design tokens. Feature code owns domain-specific analytics meaning, including metric selection, series labels, comparison copy, ranking logic, and insights.

Product Overview reuses the existing single-Product read path and Product state. It does not introduce a dedicated Product Overview API or state slice. Product identity links in Creator management generally target Product Overview; explicit edit/build actions target Product Workspace.

Product Landing Page presentation is shared between the public Product route and the Creator Product Landing Page Builder. The shared feature owns public presentation and view-model shaping. Route pages own loading, access, public visibility handling, draft composition, and composition with Product, Product Landing Page config, Storefront theme, and User/Profile or public Storefront data. Product Landing Page config owns only marketing description, hero layout, supported section visibility, and supported section order.

Storefront presentation is shared between the Creator Storefront Builder and the public Storefront route. The shared Storefront feature owns the public presentation, theme application, and view-model shaping; route pages own loading, access, draft composition, and composition with User/Profile, Product, and Storefront config/read-model state. Storefront config owns theme, featured Product ID, and Product ordering. User/Profile owns public profile fields and public email.

Membership remains Product-scoped rather than becoming a separate sellable root. Product owns the generic sellable shell and recurring-pricing metadata, while Membership owns content, included Product associations, and feed/order configuration through implemented authoring contracts.

## `styles`

`styles` contains the global SCSS foundation imported by the application entry point.

It currently provides reset, base styles, variables, typography, breakpoints, spacing, radius, transitions, and mixins.

Component-level styles usually live next to the component that uses them. Global styles should stay limited to app-wide foundations.

## Responsive navigation and Settings (M13)

[PR #83](https://github.com/app-video-platform/video-platform-ui/pull/83) merged
on 5 November 2026 as `62c4cfbcb31a7573a3a43ccaaef34aadb8621175`, implementation
`f814170a224edbdcb29e1ad13e589d9c8d328708`. The implementation and merge trees
have no file differences. This establishes merged source, not deployment or
complete responsive conformance.

### Two public header families

MarketingLayout uses `domains/marketing/widgets/nav/Navigation` for `/`, `/about`,
`/pricing`, `/getting-started`, `/contact`, `/features`, `/help`, and `/demo`.
At widths **up to and including 900px**, its brand stays visible and **Menu**
reveals the existing Home, About, Pricing, Getting Started and Contact Us links,
plus role/session-dependent actions. The eight routes share a header; they are
not eight primary-header links. Settled Guests see Sign In/Register; confirmed
users see Go to Dashboard and UserDropdown. Guest actions are withheld while the
session is resolving or unavailable. Above 900px, navigation is inline.

Marketplace `domains/app/widgets/top-navbar/TopNavbar` uses compact navigation
at **1000px and below**. It keeps the existing SmartSearch outside the menu,
always visible in a second grid row; above 1000px the layout is inline. Explore is
separate from the search container. Authenticated users without Creator/Admin
roles see Library, Wishlist and Cart controls; signed-in users see Notifications
and UserDropdown. Creator/Admin presence does not add collection shortcuts.
Library uses absolute `/app/library/all-products`, without changing route grants
or entitlement checks. Settled Guests see Log In/Register, withheld during
resolving/unavailable sessions. AppLayout's header has a minimum height rather
than a fixed height to accommodate the second row.

These are existing separate header families, not a new shared navigation API.
AppLayout continues to select CreatorAppShell for management areas and bypasses
the marketplace header for Product Workspace and public `/app/store/:creatorId`.
Retest public Storefront separately; do not claim this navbar appears there.

Both compact menus are non-modal disclosures using native Menu buttons,
instance-specific `aria-controls` targets and `aria-expanded`. Location changes
close the menu; Escape closes it and focuses its trigger. Their contents stay
mounted and are hidden by responsive CSS when closed. Account/collection panels
flow within the compact menu with vertical overflow available. They do not use
Drawer's modal stack, trap focus or lock body scrolling. Do not infer an
outside-click dismissal contract for the outer compact menu. M12 semantic
controls and existing role/session behavior remain in place.

### Sizing and contained Settings scrolling

Search and SmartSearch containers must be allowed to shrink. Search's former
450px minimum conflicted with SmartSearch's 400px maximum and covered Explore's
pointer target. Search now uses `width: 100%` / `min-width: 0`, as do relevant
input/container shrink boundaries. Keep search bounds inside the allocated
layout and verify actual pointer targets, not only document width. See
[Search sizing](../components/search.md#responsive-container-sizing-m13).

Settings uses `min-width: 0` / bounded page width through the page, tabs, content
and shared SettingsSection. Its tab header scrolls horizontally in its own strip;
tab buttons retain their width. At `$bp-tablet` (768px) and below, section headers
stack above content, input/action rows can wrap, and Profile action buttons can
share available width. SocialInput replaces the fixed 350px prefix wrapper with
50% width and shrinkable prefix/value wrappers. Calendar rows/selectors receive
wrap/shrink rules; this is source coverage, not proof that every Settings panel
was browser-tested. Keep document overflow separate from intentional tab-strip
scrolling; do not hide page overflow to mask oversized controls. M9 validation,
save/persistence and M12 disabled/read-only semantics remain unchanged.

### Evidence and remaining scope

PR #83 reports 927 tests / 133 suites, TypeScript, ESLint (0 errors / 183 warnings),
a production build with three Webpack size/performance warnings, and
`git diff --check`. Navigation tests cover Guest actions, authenticated branches,
Menu expanded state and Escape/focus restoration; marketplace child controls and
SmartSearch are mocked in the navbar tests. Route-change closure is verified in
source, not an explicit route-change assertion in those new tests. CSS geometry
and complete keyboard behavior require browser checks.

`M13_DOCUMENTATION_HANDOFF.md` reports local synthetic Creator checks at 320, 375,
390, 480, 768, 1280 and 1440px: marketplace header/search and loaded Profile
Settings fit; Explore's center hit test and pointer click work at 1440px. All
eight marketing routes expose a 320px header with Menu. Full Guest/User/Admin
browser matrices, all Product families, native 200% zoom, complete keyboard
traversal and deployed/live-backend E2E remain unverified. No full responsive or
WCAG compliance claim follows from these checks.

M13 recorded Home/About body and Explore Product-card action overflow at 320px;
header fit is not page-body fit. Those measurements remain in the repository's
`qa/runs/2026-09-30-01/summary.md` and `qa/test-execution-plan.md`. M14 adds Explore
action wrapping and shared Product hero changes below, with long-content fixture
retests still pending. Home/About body overflow remains unresolved; do not assign
it to a specific section or assume later marketing work has fixed it.

## Long content and media layout (M14)

[PR #84](https://github.com/app-video-platform/video-platform-ui/pull/84) merged
on 5 November 2026 as `a5e9bf16dcea18f51b9108f12a4d54ab6dcf4325`, implementation
`91389882bd641a55b4cb1f690b823e2ea3b348b6`. Implementation/merge file trees are
identical. Source implementation is complete for BUG-066, BUG-067, BUG-076,
BUG-079 and BUG-088; their original long-content/deployed browser retests are
not complete.

### Shrink containers before wrapping content

Long user-generated text must fit its allocated Grid/Flex region. Use
`min-width: 0` on the relevant children, `minmax(0, 1fr)` where the grid track
must shrink, and `overflow-wrap: anywhere` for unbroken identity/title values.
Do not discard a full name or accessible label just to mask intrinsic sizing.
Test element bounds and readable wrapping with genuinely long valid data;
ordinary-content document fit is not a retest of long-content overflow.

- Customer detail (`customers.styles.scss`): identity/title rows can shrink and wrap; heading nowrap/ellipsis clipping is removed. Detail tabs/panels use shrinkable tracks, and definition values including email wrap. Existing Overview/Purchases/Access/Notes and Creator-only reporting access remain unchanged.
- Sales (`sales-page.styles.scss`): page and Customer/Product cells can shrink; primary/item text wraps instead of forcing single-line overflow, while status and amount retain their existing layout roles. Desktop ledger/mobile cards, filtering, Order selection and immutable item/amount contracts are unchanged. This does not change checkout, refunds, payments or entitlements.
- [ProductPicker/CheckboxInput](../components/checkbox-input.md#compact-product-selection-m14): preserve the full accessible selection name independently of the compact visible control so the automatic selection column cannot consume the identity column. Native checked/disabled/focus semantics remain available. Membership includes the same eligible standalone Course/Download Products through the existing domain flow.
- [Uppy Dashboard](../components/uppy-file-uploader.md#container-width-dashboards-m14): pass available container width and allow Media grid/upload children to shrink. Thumbnail/Gallery/Promo keep their existing selection and Product API paths; width configuration is not upload verification.

Shared `features/product-landing-page/product-landing-page.styles.scss` gives the
hero-copy grid and h1 `min-width: 0`, adds `overflow-wrap: anywhere` to the full
title, and uses a shrinkable single-column hero track in the narrow layout.
The shared renderer is used by the public Product page, authorized private
preview and Landing Builder live preview. No view-model/API rewrite or title
truncation was introduced; M11 price normalization/formatting and owner public
identity/theme boundaries remain unchanged. The new DOM test preserves a long
heading and Free price, but does not measure its browser bounds.

Explore `.explore-card-actions` now wraps, and the inner content padding reduces
to `16px 0` at 480px and below. The reported local 320px Explore document now
measures 320px, compared with M13's 366px. This is a scoped improvement without a
new issue ID, not proof of every role/card layout. M10 search and M13 navbar
contracts remain. Marketing Home/About body widths of 1062px/762px at 320px remain
unresolved at M14; the M15 follow-up below records bounded improvements and remaining overflow.

ContactForm's checkbox compatibility change reads the native boolean checked
value, preserving on/off interaction. It adds no submission or consent enforcement;
see [ContactForm](../components/contact-form.md#agreement-compatibility-m14).

### Verification boundary

PR #84 reports 930 tests / 134 suites, TypeScript, ESLint (0 errors / 183
warnings), production build (three existing Webpack size/performance warnings)
and `git diff --check`. New assertions cover picker long-title accessible naming
and Space selection, Dashboard width configuration, long Product heading/Free
price preservation, and Contact agreement toggling. Existing Customer/Sales/media
regression tests check behavior; DOM tests and CSS inspection do not establish
computed long-content geometry or manual assistive-technology behavior.

`M14_DOCUMENTATION_HANDOFF.md` reports local synthetic Creator checks at 320, 375,
390, 480, 768, 1280 and 1440px for ordinary Customer Detail, populated Sales,
Course Media and a Course public hero. Thumbnail measured 309px at 375px and
702px at 768px. Historical long Customer identity, long Sales identity/items,
long-title Membership picker and long unbroken Download hero were unavailable
for browser measurement. Guest/Admin, other Product types, reload/zoom/complete
keyboard-pointer matrices, native uploads and deployed/live-backend E2E remain
unverified. Marketing Home/About overflow is not fixed. Follow the M14 retest
matrix in the repository's `qa/test-execution-plan.md`; do not report complete
responsive or accessibility conformance from these scoped passes.

## Marketing interactions and animation ownership (M15)

[PR #85](https://github.com/app-video-platform/video-platform-ui/pull/85) merged
on 5 November 2026 as `4c381a86bfa1353dda131c80346736df31074d78`, implementation
`f7eade2004c3313ecf6a9059c3b26f1fefcc9711`; comparison shows identical file trees.
This is the final planned implementation milestone, not deployment or QA sign-off.
BUG-034's implementation was delivered in M14; M15 adds regression coverage.

Use [post-mount panel measurement](../components/expansion-panel.md#initial-and-changing-content-height-m15)
for default-expanded/dynamic content, [boolean native/visual agreement state](../components/contact-form.md#m15-regression-coverage-and-faq-boundary)
and the matching [Contact FAQ fragment target](../components/footer.md#contact-faq-fragment-m15).
These do not introduce Contact submission, consent enforcement or backend delivery.

### Reveal lifetime versus interactive CSS

Homepage ProductsSection and FeaturesSection keep interactive reveal targets in
keyboard order by animating opacity instead of autoAlpha. CTASection does the
same for its button wrapper. Focus capture on these groups completes their
existing timeline via a ref, so entering by focus can reveal controls without
waiting for scroll entry. Headers/illustrations and Trust's reveal may still use
autoAlpha; do not claim it was removed from every animation. Product focus now
selects emphasis, Feature focus retains its existing selection, and blur leaving
the group or mouse exit clears Product/Feature emphasis.

After Product, Feature and Trust reveal completion, GSAP clears inline
`opacity,visibility` and releases the revealing-state class, allowing CSS
`is-active`/`is-dimmed` styling to own persistent appearance. Product/Feature CSS
dims siblings to 0.38; Trust CSS specifies 0.42. Class presence alone cannot
verify dimming: measure computed opacity after the animation settles and after
leaving/revisiting the group. Trust has pointer selection in current source;
it does not gain the Product/Feature focus-capture path.

Existing ScrollTriggers play/reverse reveals on entry/back navigation through
the viewport. Products, Features and CTA clear timeline refs and revert scoped
GSAP contexts on cleanup; Trust retains context reversion. These sections retain
an early prefers-reduced-motion check before animation setup. Preserve those
paths when editing animations, but do not assume every reverse/revisit lifecycle
or runtime reduced-motion mode has passed browser testing.

### Bounded responsive follow-up

Home Product cards stack at 1000px and below, with bounded card widths. Home text blocks
use `min(550px, 100%)` and Feature controls `min(520px, 100%)`. About's Different
section switches to a shrinkable single-column grid at 768px and below. These are
verified changed sections, not proof of the exact remaining overflow source.
The handoff reports Home 485px at both 320/375px; About 464px at 320px, 472px at
375px and 874px at 768px. Earlier 320px observations were Home 1062px and About
762px. Headers fit, but both page bodies still overflow. Inspect actual element
bounds before assigning further causes; no new issue ID or complete mobile
containment claim follows. The QA summary retains both measurement sets.

### Verification and roadmap boundary

PR #85 reports 934 tests / 135 suites, TypeScript, ESLint (0 errors / 183
warnings), production build with three existing Webpack size/performance warnings
and `git diff --check`. Added assertions cover initial/dynamic panel height and
observer cleanup, Contact fragment targeting, and agreement Tab/Space/native
versus visual-class state. Heights, ResizeObserver and scrolling are mocked;
there are no new dedicated homepage computed-opacity/complete traversal tests.

Reported local synthetic Creator checks: default-open Contact answer 50px on
initial load; direct fragment/Enter footer navigation reaches the FAQ heading;
FAQ Enter toggle; Tab from hero to Create a Course and from the last Product
control to Private Storefronts; active Product/Feature opacity 1 and siblings
0.38. This is not a complete replay of BUG-046's fresh Guest forward-Tab failure.
Trust hover/computed opacity, complete fresh Guest traversal, runtime reduced
motion, manual screen-reader output and deployed/live-backend parity remain
unverified. Contact delivery is unimplemented, not a passing milestone check.

The existing QA status table reconciles 75 distinct original items: 74 have
completed frontend remediation and BUG-013 remains partial/backend-dependent.
M12 browser/accessibility gaps, M14 historical long-content retests, M15 runtime
gaps and Home/About overflow remain open verification/implementation scope. Do
not describe all 75 issues as resolved or infer production acceptance. Use the
M15 section of the repository's `qa/test-execution-plan.md` for remaining checks.

## How code usually connects

Domains compose UI and use shared infrastructure:

```text
domain page or feature
  -> shared UI/utilities
  -> core store
  -> core API services
```

The implementation does not enforce strict dependency rules between these areas. Treat the folder structure as a practical ownership guide rather than a formal boundary system.
