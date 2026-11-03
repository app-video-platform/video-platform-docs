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

## Registration and CSRF interceptors

M4 registration performs an explicit credentialed CSRF bootstrap before sending an explicit `X-XSRF-TOKEN` header; see [Auth API](./auth.md#registration-csrf-contract). `csrf.ts` no longer excludes registration, and injects the `XSRF-TOKEN` cookie value for POST/PUT/DELETE/PATCH or `X-CSRF-Force` only when the request does not already carry an explicit header. Preserve the bootstrap-returned header instead of overwriting it with a potentially different browser-readable cookie.

`refresh-token.ts` excludes `api/auth/csrf` alongside the existing authentication endpoints from 401-triggered refresh. A failed guest bootstrap returns its error rather than starting cookie refresh. M1's single refresh promise, bounded replay and session-generation cancellation remain unchanged. Credentialed CSRF bootstrap/register interoperability, cookie issuance and cross-origin CORS still require deployed-backend verification.
