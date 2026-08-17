---
title: Backend Overview
sidebar_position: 1
---

# Backend Overview

## Purpose

The `video-platform` repository is the Spring Boot backend for Video Platform.
It owns persisted business rules, authentication and authorization, API
contracts, database migrations, protected content access, and external service
integrations.

The frontend may contain models and local HTTP mocks for capabilities that the
backend does not yet implement. A frontend contract is therefore not proof of a
production backend capability.

## Technology

| Area | Current choice |
|---|---|
| Runtime | Java 17 |
| Framework | Spring Boot 3.4.x |
| HTTP | Spring MVC |
| Security | Spring Security, JWT cookies, custom CSRF filter |
| Persistence | Spring Data JPA and Hibernate |
| Production database | PostgreSQL |
| Test database | H2 |
| Schema management | Liquibase SQL migrations |
| API reference | Springdoc OpenAPI and Swagger UI |
| File storage | DigitalOcean Spaces through the AWS S3 SDK |
| Email | SendGrid |
| External identity | Google sign-in |
| Calendar integration | Provider clients for Google, Microsoft, and iCloud |
| Build | Maven Wrapper |
| Deployment | GitHub Actions to Dokku on DigitalOcean |

## Current backend capabilities

The production backend currently includes:

- registration, email verification, login, logout, refresh, and Google sign-in
- authenticated profile and social-link management
- one active role per user and Admin role replacement
- Course, Download, Consultation, and Membership Product persistence
- Membership recurring-price, content-metadata, included-Product, and feed
  authoring for Creators/Admins
- owner-or-Admin Product mutation rules
- Product search and summary reads
- canonical nested section, lesson, and Download file authoring
- Course Quiz authoring, play, scoring, and attempt persistence
- calendar connection infrastructure
- Admin user, Product, and audit queries
- free Product enrollment and active entitlement storage
- provider-neutral one-time Commerce Orders, fake dev/test payment transitions,
  paid entitlement creation, and full-refund revocation
- protected Course content filtering and authorized Download delivery
- generated OpenAPI documentation under the `docs` profile

## Important boundaries

The backend does not currently provide complete production support for:

- Membership publishing, binary media upload/delivery, subscriptions,
  entitlements, checkout, or member access
- production Stripe or other real-provider checkout
- customer-facing paid checkout integration
- partial refunds, taxes, coupons, payouts, or payment retries
- Creator Dashboard, Customers, Sales, or Analytics aggregate APIs
- Storefront configuration or public Storefront read models
- Product Landing Page configuration persistence
- subscriptions or member access

See [Current Backend Coverage](./current-limitations.md) for the detailed
boundary between implemented backend behavior and frontend-pending contracts.

## Main references

- [Architecture](./architecture.md)
- [API and Swagger](./api-and-swagger.md)
- [Authentication and Security](./authentication-and-security.md)
- [Products and Authoring](./products-and-authoring.md)
- [Entitlements and Content Access](./entitlements-and-content-access.md)
- [Commerce and Payments](./commerce-and-payments.md)
- [Persistence and Data Model](./persistence-and-data-model.md)
- [Integrations and Files](./integrations-and-files.md)
- [Administration and Audit](./administration-and-audit.md)
- [Testing and Deployment](./testing-and-deployment.md)

## Source of truth

Use the backend implementation in `video-platform` as the source of truth:

- controllers and DTOs for HTTP contracts
- services for business rules and transactions
- security configuration and filters for access behavior
- entities and repositories for persistence behavior
- Liquibase migrations for the deployed database schema
- Springdoc annotations for generated API documentation

Tests support these sources but do not replace implementation inspection.
