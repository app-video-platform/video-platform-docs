---
title: Frontend API Reference
sidebar_position: 4
---

# Frontend API Reference

## Overview

The frontend API layer wraps backend calls behind domain-specific service functions.

The current service layer lives under `src/core/api/` in `video-platform-ui`.

## Key locations

| Area | Current location |
|---|---|
| HTTP client | `src/core/api/http-client.ts` |
| Auth services | `src/core/api/services/auth/auth-api.ts` |
| User services | `src/core/api/services/user/user-api.tsx` |
| Product service index | `src/core/api/services/products/products-api.ts` |
| Product CRUD | `src/core/api/services/products/product-crud-api.ts` |
| Product sections | `src/core/api/services/products/product-sections-api.ts` |
| Product lessons | `src/core/api/services/products/product-lessons-api.ts` |
| Download files | `src/core/api/services/products/product-download-files-api.ts` |
| Product Landing Page | `src/core/api/services/product-landing-page/product-landing-page-api.ts` |
| Creator Customers | `src/core/api/services/customers/customers-api.ts` |
| Creator Sales | `src/core/api/services/sales/sales-api.ts` |
| Creator Analytics | `src/core/api/services/analytics/analytics-api.ts` |
| Creator Dashboard | `src/core/api/services/dashboard/dashboard-api.ts` |
| Storefront | `src/core/api/services/storefront/storefront-api.ts` |
| Membership | `src/core/api/services/membership/membership-api.ts` |
| Calendar services | `src/core/api/services/calendar/calendar-api.ts` |
| Admin services | `src/core/api/services/admin/admin-api.ts` |

## Domain references

- [HTTP Client](./api/http-client.md)
- [Auth API](./api/auth.md)
- [User API](./api/user.md)
- [Products API](./api/products.md)
- [Calendars API](./api/calendar.md)
- [Backend API and Swagger](./backend/api-and-swagger.md)

## Current scope

The frontend currently calls APIs for authentication, profile loading, Product
creation and editing, Product search, Course sections, lesson shells, Download
file upload, calendar connection initiation, Admin user/Product/audit
management, and Creator data surfaces. Some service wrappers target
backend-pending contracts or routes that are not implemented by the current
production backend.

Creator Product Overview reuses the existing Product detail retrieval path. It does not add a dedicated Product Overview service, endpoint, Redux slice, or backend contract.

Several Creator data surfaces now have frontend-defined contracts, services, thunks, and Redux slices. Their production backend endpoints are still pending unless a feature-specific page says otherwise.

Current backend-pending frontend contracts include:

- Creator Customers list and Customer Detail.
- Creator Sales summary, Orders page, and Order Detail.
- Creator Analytics aggregate overview with `7d`, `30d`, and `90d` period queries.
- Creator Dashboard aggregate summary.
- Product Landing Page config reads and Creator config updates.
- Public Storefront read model and Creator Storefront configuration/update, including theme, featured Product selection, and Product ordering.
- Membership aggregate, configuration update, native content create/update/delete, and feed ordering.
- Product recurring-pricing extension using `price`, `pricingModel`, `billingInterval`, and `currency`.

Ownership boundaries matter for these frontend contracts. The current backend
Product contract is authoritative for Product identity, type, name,
description, status, image, price amount, and supported type-specific content.
The frontend's pricing model, billing interval, currency extension, Product
Landing Page config, Membership, Storefront, and several Creator aggregate
contracts remain backend-pending.

Local development may substitute ignored HTTP mocks at the Axios boundary when `REACT_APP_USE_MOCKS=true`. Feature components should not branch on mock mode for Creator business data.

This section documents frontend clients, including backend-pending clients. Use
[Backend API and Swagger](./backend/api-and-swagger.md) to determine whether a
matching production endpoint exists.
