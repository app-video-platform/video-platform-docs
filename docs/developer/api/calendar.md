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

`ConnectedCalendarTab` loads provider strings and sends `{ provider, loginHint }`
through the existing credentialed connection service. `ConnectInitResponse`
contains optional `authorizationUrl` and `state`; the UI does not expose state or
backend response details. Authorization URL creation remains backend-owned.

M9 wraps initialization in `try/catch/finally` with local `connecting` and
`connectError`. Connect requires a provider and is disabled while pending; the
selector is also disabled. Failure sets an alert, retains the selected provider,
and releases pending state for retry. Changing the provider clears the error.
Provider discovery failure has separate generic unavailable feedback.

The component requires an authorization URL that parses with `new URL` and has
`https:` protocol before `window.open(url, '_blank', 'noopener,noreferrer')`.
This checks URL syntax/protocol, not successful consent or provider configuration.
The calendar service logs fixed failure summaries rather than caught response
objects. Safe UI feedback excludes raw backend/OAuth parameters.

Merged M9 [PR #79](https://github.com/app-video-platform/video-platform-ui/pull/79)
changes frontend initialization feedback only. The prior BUG-081 backend encoding
work is separate; its Trello completion status does not establish deployed URL
correctness or provider success. No backend fix, consent, token exchange, callback,
synchronization, or cross-origin behavior was verified by M9. Automated tests use
synthetic HTTPS URLs and stub `window.open`; no real provider URL was opened.
See [M9 verification limits](../architecture/state-and-data-flow.md#m9-verification-boundary).

Connected-calendar listing, disconnect, and sync management are not currently implemented in the frontend.

The backend does implement authenticated list and disconnect routes. See
[Backend Integrations and Files](../backend/integrations-and-files.md). Their
presence does not make those controls available in the current UI.
