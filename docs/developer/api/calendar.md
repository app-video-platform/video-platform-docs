---
title: Calendars API
sidebar_position: 6
---

# Calendars API

## Location

`src/core/api/services/calendar/calendar-api.ts`

## Functions called by the frontend

| Function | Method and URL | Notes |
|---|---|---|
| `getAllCalendarProvidersAPI` | `GET api/calendars/providers` | Expects a response shaped like `{ providers: string[] }` and returns the providers array. |
| `connectCalendarAPI` | `POST /api/calendars/connect` | Sends provider and login hint data, then returns connection initiation data such as an authorization URL. |

## Current frontend usage

The Settings Calendar tab loads providers, lets the user choose one, and opens the returned authorization URL in a new tab or window.

Connected-calendar listing, disconnect, and sync management are not currently implemented in the frontend.

The backend does implement authenticated list and disconnect routes. See
[Backend Integrations and Files](../backend/integrations-and-files.md). Their
presence does not make those controls available in the current UI.
