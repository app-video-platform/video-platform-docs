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
| Calendar services | `src/core/api/services/calendar/calendar-api.ts` |
| Admin services | `src/core/api/services/admin/admin-api.ts` |

## Domain references

- [HTTP Client](./api/http-client.md)
- [Auth API](./api/auth.md)
- [User API](./api/user.md)
- [Products API](./api/products.md)
- [Calendars API](./api/calendar.md)

## Current scope

The frontend currently calls APIs for authentication, profile loading, product creation and editing, product search, course sections, lesson shells, download file upload, review listing and filtering, calendar connection initiation, and Admin user/product/audit management.

There is not yet a dedicated production Customer API client for the Creator Customers area. The current Customer list and detail screens use deterministic inspection fixtures when mock mode is enabled and otherwise show that customer data is unavailable.

There is not yet a dedicated production Sales API client for the complete creator financial domain. The current Sales metrics, order ledger, and order detail use deterministic inspection fixtures when mock mode is enabled and otherwise show that sales data is unavailable. Backend work is still needed for orders, payments, refunds, subscriptions and renewals, entitlements/access, server pagination, payment-provider normalization, and safe financial mutation contracts.

Do not document backend capabilities here unless the frontend currently calls them.
