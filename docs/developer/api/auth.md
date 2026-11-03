---
title: Auth API
sidebar_position: 3
---

# Auth API

## Location

`src/core/api/services/auth/auth-api.ts`

## Functions called by the frontend

| Function | Method and URL | Notes |
|---|---|---|
| `registerUser` | `POST api/auth/register` | Public signup. |
| `verifyEmailApi` | `GET api/auth/verify?token=` | Public email verification. Returns the Axios response. |
| `signInUser` | `POST api/auth/login` | Email/password sign-in. |
| `logoutAPI` | `POST api/auth/logout` | Server logout. |
| `googleAPI` | `POST api/auth/googleSignIn` | Google sign-in with an ID token payload. |
| `forgotPasswordAPI` | `POST api/auth/forgot` | Frontend wrapper only; the current backend has no matching controller endpoint and the screen does not call it. |

## Notes

- Public register and verify calls override credentials to `false`.
- Sign-in is followed by profile loading through the user service.
- Product docs should not describe the forgot-password flow as complete until the visible screen actually calls the service.
- See [Backend Authentication and Security](../backend/authentication-and-security.md) for cookie, refresh, CSRF, and role behavior.

## Frontend session transitions

Auth uses explicit session lifecycle states independently of operation `loading`. Profile 401/403 invalidates authentication; network/availability failures offer Retry without claiming logout. Logout invalidates local identity and private caches immediately, even if the server request fails. No authentication endpoint was added by M1. See [Routing and Access](../architecture/routing-and-access.md#route-guards) and [State and Data Flow](../architecture/state-and-data-flow.md#account-and-session-boundaries).
