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
| `registerUser` bootstrap | `GET api/auth/csrf` | Credentialed bootstrap; requires a non-empty returned token and matching XSRF cookie contract. |
| `registerUser` | `POST api/auth/register` | Credentialed signup with explicit X-XSRF-TOKEN after bootstrap. |
| `verifyEmailApi` | `GET api/auth/verify?token=` | Public email verification. Returns the Axios response. |
| `signInUser` | `POST api/auth/login` | Email/password sign-in. |
| `logoutAPI` | `POST api/auth/logout` | Server logout. |
| `googleAPI` | `POST api/auth/googleSignIn` | Google sign-in with an ID token payload. |
| `forgotPasswordAPI` | `POST api/auth/forgot` | Frontend wrapper only; the current backend has no matching controller endpoint and the screen does not call it. |

## Notes

- Registration bootstrap and POST use `withCredentials: true`; public verification alone overrides credentials to `false`.
- Sign-in is followed by profile loading through the user service.
- Product docs should not describe the forgot-password flow as complete until the visible screen actually calls the service.
- See [Backend Authentication and Security](../backend/authentication-and-security.md) for cookie, refresh, CSRF, and role behavior.

## Frontend session transitions

Auth uses explicit session lifecycle states independently of operation `loading`. Profile 401/403 invalidates authentication; network/availability failures offer Retry without claiming logout. Logout invalidates local identity and private caches immediately, even if the server request fails. No authentication endpoint was added by M1. See [Routing and Access](../architecture/routing-and-access.md#route-guards) and [State and Data Flow](../architecture/state-and-data-flow.md#account-and-session-boundaries).

## Registration CSRF contract

`registerUser` sequentially calls credentialed `GET api/auth/csrf`, validates a non-empty string `response.data.token`, then sends the unchanged registration payload to credentialed `POST api/auth/register` with that token in `X-XSRF-TOKEN`. The backend endpoint is expected to set or reuse the matching `XSRF-TOKEN` cookie. The frontend does not validate cookie equality or implement additional token storage; deployment-specific cookies/CORS remain backend integration requirements.

Bootstrap failure or an invalid/missing token prevents the registration POST and raises **Secure registration could not be initialized. Please try again.** Bootstrap errors and registration rejections are not logged with Axios configuration/token material. Signup unwraps the thunk, retains local form values on failure and exposes an alert; retry is another submission. A pending guard prevents duplicate submits. Only fulfillment navigates to `/auth/email-sent`. See [HTTP Client](./http-client.md#registration-and-csrf-interceptors).

## Verification outcomes

`VerifyEmail` unwraps `verifyEmail(token)`. Missing tokens select missing-link guidance without a request; loading shows verification in progress. Fulfillment alone selects success and the login link. Rejection strings matching `/expir/i` select expired/support guidance; other rejections select invalid-or-already-used feedback. There is no distinct service/network error message or resend endpoint/workflow. Effect cleanup ignores results after the component becomes inactive; no new guarantee about token consumption or duplicate server requests is implied.

## M4 verification scope

Merged [PR #74](https://github.com/app-video-platform/video-platform-ui/pull/74) is main merge `47f80d9`, implementation `1653a0d`. PR #74 records 706 tests across 111 suites, TypeScript, ESLint (0 errors, 203 warnings), and whitespace checks. Synthetic layout checks passed on signup, sign-in, recovery, email-sent and verification at 320, 375, 768 and 1440px; local Sign in interaction passed. The subsequent user-terminal production build (`REACT_APP_USE_MOCKS=false npm run build`) succeeded with webpack 5.98.0 in 26,373 ms, three bundle-size/performance warnings and no errors. Earlier asset-processing stalls are not a confirmed application regression.

Real deployed CSRF cookie/CORS interoperability, successful live registration, mailbox delivery, actual invalid/expired verification responses and the complete registration/verification E2E journey remain unverified. Synthetic browser checks did not exercise successful CSRF registration or invalid/expired verification API responses. These are frontend integration contracts and reported synthetic checks, not confirmation that every environment deploys the CSRF endpoint or satisfies its cookie/CORS requirements. M1 cookie refresh/session isolation and M3 onboarding behavior remain in place.
