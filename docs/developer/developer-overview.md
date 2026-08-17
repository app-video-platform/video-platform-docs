---
title: Developer Overview
sidebar_position: 1
---

# Developer Overview

Developer Documentation explains how the Video Platform frontend and backend
are structured, connected, and maintained.

Product Documentation explains what Administrators, Creators, and End Users can
do. Developer Documentation covers implementation references, local setup,
routing, API contracts, business rules, persistence, state, shared UI,
architecture, integrations, testing, and deployment.

## Main references

- [Local Setup](./local-setup.md)
- [Frontend Architecture](./architecture/index.md)
- [Frontend API Reference](./frontend-api-reference.md)
- [Frontend Routing and Access](./routing-and-access-reference.md)
- [Backend Overview](./backend/index.md)
- [Backend API and Swagger](./backend/api-and-swagger.md)
- [Backend Business Rules](./backend/products-and-authoring.md)
- [Backend Persistence and Data Model](./backend/persistence-and-data-model.md)

## Frontend documentation

Use the **Frontend** section for React routes, Redux state, frontend API
wrappers, shared components, UX conventions, architecture, and frontend
playbooks.

## Backend documentation

Use the **Backend** section for Spring Boot architecture, HTTP contracts,
security, persisted business rules, entitlements, database tables, Liquibase,
external integrations, tests, and deployment.

## Source of truth

Use `video-platform-ui` as the source of truth for routes, screens, frontend
state, client behavior, and local mocks.

Use `video-platform` as the source of truth for APIs, persisted business rules,
security, integrations, entities, and database migrations.

Swagger is the exhaustive backend wire-contract reference. These pages explain
the architecture and business meaning around that contract rather than copying
every generated request and response schema.

When product behavior is incomplete, document the user-facing limitation in
Product Documentation and keep implementation detail in the relevant Frontend
or Backend developer section.
