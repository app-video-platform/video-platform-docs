---
title: Local Setup
sidebar_position: 2
---

# Local Setup

## Repositories

This documentation project is maintained alongside:

- `video-platform-ui`: React frontend application.
- `video-platform`: Spring Boot backend application.
- `video-platform-UI-docs`: Docusaurus documentation site.

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

## Backend app

Run these commands from `video-platform`. Use Java 17.

| Command | Purpose |
|---|---|
| `./mvnw spring-boot:run` | Start the backend locally. |
| `./mvnw test` | Run unit and integration tests. |
| `./mvnw package` | Run tests and package the application. |

The default datasource expects PostgreSQL. Configure database and integration
credentials through environment variables; never add real secrets to tracked
configuration. Tests use H2 through the test profile.

The current compiler and Lombok setup is intended for Java 17. A newer default
JDK may fail during compilation even though the project source level is 17.

## Documentation site

Run these commands from `video-platform-UI-docs`.

| Command | Purpose |
|---|---|
| `npm install` | Install dependencies. |
| `npm run start` | Start the Docusaurus development server. |
| `npm run typecheck` | Typecheck the Docusaurus configuration. |
| `npm run build` | Build the static documentation site. |
| `npm run serve` | Serve the built documentation locally. |

The docs package requires Node `>=20.0`.

## Environment notes

The frontend HTTP client reads its base URL from `REACT_APP_BASE_PATH`. The
backend reads its PostgreSQL, storage, email, JWT, and calendar configuration
from Spring configuration and environment variables.

Calendar, authentication, Product, Admin, and entitlement behavior depends on
backend availability. Browser-only features such as the current wishlist and
cart can function without a completed checkout backend.

See [Backend Testing and Deployment](./backend/testing-and-deployment.md) for
profiles, CI, Dokku deployment, and validation notes.
