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
