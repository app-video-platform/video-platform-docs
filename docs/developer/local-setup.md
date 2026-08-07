---
title: Local Setup
sidebar_position: 2
---

# Local Setup

## Repositories

This documentation project is maintained alongside:

- `video-platform-ui`: React frontend application.
- `video-platform-docs`: Docusaurus documentation site.

## Frontend app

Run these commands from `video-platform-ui`.

| Command | Purpose |
|---|---|
| `npm install` | Install dependencies. |
| `npm start` | Start the webpack development server. |
| `npm run build` | Build the production frontend bundle. |
| `npm test` | Run Jest tests. |
| `npm run lint` | Run ESLint over frontend source files. |
| `npm run lint:fix` | Run ESLint with automatic fixes. |
| `npm run tsc` | Run TypeScript without emitting files. |
| `npm run storybook` | Start Storybook on port 6006. |
| `npm run build-storybook` | Build Storybook. |

## Documentation site

Run these commands from `video-platform-docs`.

| Command | Purpose |
|---|---|
| `npm install` | Install dependencies. |
| `npm run start` | Start the Docusaurus development server. |
| `npm run typecheck` | Typecheck the Docusaurus configuration. |
| `npm run build` | Build the static documentation site. |
| `npm run serve` | Serve the built documentation locally. |

The docs package requires Node `>=20.0`.

## Environment notes

The frontend HTTP client reads its base URL from `REACT_APP_BASE_PATH`.

Calendar, authentication, product, admin, and review behavior depends on backend availability. Browser-only features such as the current wishlist and cart can function without a completed checkout backend.
