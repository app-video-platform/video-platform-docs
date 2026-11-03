---
title: User API
sidebar_position: 4
---

# User API

## Location

`src/core/api/services/user/user-api.tsx`

## Functions called by the frontend

| Function | Method and URL | Notes |
|---|---|---|
| `getUserProfileAPI` | `GET api/user/userInfo` | Loads the authenticated profile and forces CSRF handling for the GET. |
| `updateUserDetailsAPI` | `PUT api/user/userInfo` | Used by onboarding, Settings Profile, and Storefront inline profile updates; returns the updated User. |
| `changeDevUserRoleAPI` | `PUT api/user/dev/role` | Dev role switcher in the user dropdown. |

## Notes

Settings Profile submits through `methods.handleSubmit(onSubmit)` and awaits
`dispatch(updateUserDetails(payload)).unwrap()`. Field validation precedes the PUT;
only fulfillment shows **Profile saved.** Failure shows a safe retry message.
`PageHeader` supplies a submit-type Save button and profile-operation loading.

The payload contains trimmed `firstName`, `lastName`, `title`, `bio`, `website`,
`taglineMission`, and `publicEmail`, plus a full `socialLinks` array. Clearing the
optional public email sends an empty string. Nonempty social handles become
platform URLs for Facebook, Instagram, X, YouTube, and TikTok; empty handles are
omitted from that array, so clearing all handles submits `[]`. Hydration resets
the form from the current User and extracts handle paths from stored social URLs.
The existing service uses credentials and returns User data; M9 adds no endpoint.
`UpdateUserRequest` has no phone field, and this form has no profile-image upload.

Bio/Tagline have optional `minLength`/`maxLength` rules (30–250 / 10–120), without
`required`. Website uses the form's domain-style pattern with optional HTTP(S)
and `www.` prefixes; it is not unrestricted URI-scheme validation. Other backend
validation remains authoritative. See [M9 save lifecycles](../architecture/state-and-data-flow.md#profile-and-integration-save-feedback-m9)
for mutation ownership, session boundaries, safe failure handling and verification
limits. The same form is shared across Settings roles; live role/save/reload
verification remains pending.

## Onboarding profile save lifecycle

M3 [PR #73](https://github.com/app-video-platform/video-platform-ui/pull/73), merged as `05f25db`, keeps the existing `PUT api/user/userInfo` contract. `MultiStepForm` awaits `dispatch(updateUserDetails(payload)).unwrap()` before advancing a profile step. Welcome advances without a write. A local pending guard prevents duplicate submissions; Next/Back/Skip are disabled during saves and a status message is shown. Rejection retains the current step and React Hook Form values, exposes an alert and Retry save, and keeps Back/Skip disabled. Next can resubmit; Retry save builds a payload from current form values and social links.

Late completion may advance only while mounted and owned by the same starting step, session version and user ID. Profile mutation loading does not unmount the authorized wizard. M1's guard and session middleware retain their account-boundary behavior. This is local async ownership, not a backend transaction or persisted wizard-step contract.

`UpdateUserRequest` includes `userId`, title, bio, website, city, country, `taglineMission` and socialLinks for this flow. Lookup lat/lon values can exist locally, but the request interface and payload omit coordinates. Skip and final Continue navigate to `/app`; M3 adds no completion-flag persistence. CountdownRedirect's RESET dispatches the existing local `resetOnboarding` action.

PR #73 records 689 tests across 108 suites, TypeScript and production build passes, ESLint with 0 errors / 202 existing warnings, and whitespace checks. Synthetic browser verification covered completed-profile redirects only. Full incomplete-profile browser onboarding, live-backend profile persistence and deployed Nominatim error/retry remain unverified. Automated router/component tests use synthetic profiles and controlled responses; deployment/final QA is not established. No new backend endpoint or capability is implied.
