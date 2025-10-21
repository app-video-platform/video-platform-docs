---
title: Http Client (Axios)
sidebar_position: 1
---

`httpClient` is a preconfigured `axios` instance used by all service modules.

**File:** `src/api/http-client.ts`

```ts
import axios, { AxiosInstance } from 'axios';
import { attachCsrfInterceptor } from './interceptors/csrf';
import { attachRefreshTokenInterceptor } from './interceptors/refresh-token';

const API_BASE_URL = process.env.REACT_APP_BASE_PATH;

const httpClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

// Interceptors
attachCsrfInterceptor(httpClient);
attachRefreshTokenInterceptor(httpClient);

// Optional runtime mocks (dev only)
if (process.env.REACT_APP_USE_MOCKS === 'true') {
  const { setupMocks } = require('./_mocks');
  setupMocks(httpClient);
}
export default httpClient;
```

### Responsibilities

- Base URL via REACT_APP_BASE_PATH
- Credentials: cookies/session included (withCredentials: true)
- Headers: JSON by default
- Interceptors:
    - CSRF: injects/refreshes CSRF token headers
    - Refresh-Token: retries when access token expires

### Environment variables

Set in your frontend env (Netlify/CI/local).

| Variable              | Example                                 | Purpose                                      |
| --------------------- | --------------------------------------- | -------------------------------------------- |
| `REACT_APP_BASE_PATH` | `https://api.serious-debauchery.click/` | Axios `baseURL` for all requests             |
| `REACT_APP_USE_MOCKS` | `true`                                  | Enables runtime axios mocks via `setupMocks` |

> If `_mocks.ts` is missing, the require fails gracefully and is ignored.

### Usage

All services import and use this instance:

```ts
import httpClient from '../http-client';

export const getSomething = () => httpClient.get('/api/something');
```


### Error handling

Service functions should `throw` on failure so thunks/components can handle:

```ts
try { ... } catch (err) {
  console.error('Contextual message', err);
  throw err;
}
```

Your thunks normalize errors via `extractErrorMessage`.


<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Tue, 21 Oct 2025