---
title: HTTP Client
sidebar_position: 2
---

# HTTP Client

`httpClient` is the shared Axios instance used by frontend service modules.

## Location

`src/core/api/http-client.ts`

## Responsibilities

- Reads the API base URL from `REACT_APP_BASE_PATH`.
- Sends JSON `Content-Type` and `Accept` headers by default.
- Uses `withCredentials: true` by default.
- Attaches CSRF and refresh-token interceptors.
- Optionally enables local Axios mocks when `REACT_APP_USE_MOCKS === 'true'` and a local `_mocks` module exists.

## Usage

Service modules import the shared client and return `response.data` where possible.

```ts
import httpClient from 'core/api/http-client';

export const getSomething = async () => {
  const response = await httpClient.get('api/example');
  return response.data;
};
```

## Cookie refresh and request ownership

`src/core/api/interceptors/refresh-token.ts` coordinates one refresh promise per Axios instance. Concurrent private 401s await `POST api/auth/refresh` with credentials; successful text responses settle every waiter without reading `data.token` or adding Bearer headers. Each original request replays at most once. A failed refresh rejects waiters; a persistent private 401 reports into Auth rather than refreshing indefinitely. Refresh transport times out after 15 seconds.

Synchronous request interceptors capture session ownership when requests are invoked. A session boundary cancels refresh waiters, aborts refresh transport and rejects stale private HTTP responses. Explicit public Storefront, public landing-config and search GETs remain independent. Availability failures are recoverable; invalid authentication ends the frontend session. See [session lifecycle and verification limits](../architecture/state-and-data-flow.md#account-and-session-boundaries).

Frontend cancellation does not revoke a server operation already committed. Real cookie rotation, cross-origin behavior and server refresh/logout ordering still need live-backend E2E verification.
