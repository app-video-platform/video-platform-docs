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

Storefront presentation is shared between the Creator management preview and the public Storefront route. The shared Storefront feature owns the public presentation and view-model shaping; route pages own loading, access, and composition with User/Profile, Product, and Storefront config/read-model state. Storefront config owns featured Product ID and Product ordering only.

Membership remains Product-scoped rather than becoming a separate sellable root. Product owns the generic sellable shell and recurring-pricing metadata, while Membership owns content, included Product associations, and feed/order configuration through backend-pending contracts.

## `styles`

`styles` contains the global SCSS foundation imported by the application entry point.

It currently provides reset, base styles, variables, typography, breakpoints, spacing, radius, transitions, and mixins.

Component-level styles usually live next to the component that uses them. Global styles should stay limited to app-wide foundations.

## How code usually connects

Domains compose UI and use shared infrastructure:

```text
domain page or feature
  -> shared UI/utilities
  -> core store
  -> core API services
```

The implementation does not enforce strict dependency rules between these areas. Treat the folder structure as a practical ownership guide rather than a formal boundary system.
