---
title: API Layer (Frontend)
sidebar_position: 6
---

The **API Layer** is a thin abstraction over `axios` that:

- centralizes base URL, headers, credentials, and interceptors
- exposes service modules per domain (`auth`, `products`, `user`, …)
- returns typed data to **Redux thunks** and components

**Key files**
- `src/api/http-client.ts` — shared `axios` instance, interceptors, optional mocks
- `src/api/services/*` — domain-specific API functions (e.g., `auth-api.ts`)
- `src/api/models/*` — TypeScript models for requests/responses

### Call flow

```mermaid
sequenceDiagram
  participant Slice as Redux Slice / Thunk
  participant API as API Service (auth-api.ts)
  participant HTTP as httpClient (axios)
  participant BE as Backend

  Slice->>API: call signInUser({email, password})
  API->>HTTP: httpClient.post('/api/auth/login', body)
  HTTP->>BE: POST /api/auth/login
  BE-->>HTTP: 200 { "message": "Login successful" }
  HTTP-->>API: response.data
  API-->>Slice: "Login successful"
```

<br></br>
<br></br>
<br></br>
> See slice docs for how thunks consume these functions.
<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Tue, 21 Oct 2025