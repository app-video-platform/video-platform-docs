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
| `updateUserDetailsAPI` | `PUT api/user/userInfo` | Used by onboarding profile updates. |
| `changeDevUserRoleAPI` | `PUT api/user/dev/role` | Dev role switcher in the user dropdown. |

## Notes

Settings profile forms currently do not clearly call the user update service. Onboarding does.

## Onboarding profile save lifecycle

M3 [PR #73](https://github.com/app-video-platform/video-platform-ui/pull/73), merged as `05f25db`, keeps the existing `PUT api/user/userInfo` contract. `MultiStepForm` awaits `dispatch(updateUserDetails(payload)).unwrap()` before advancing a profile step. Welcome advances without a write. A local pending guard prevents duplicate submissions; Next/Back/Skip are disabled during saves and a status message is shown. Rejection retains the current step and React Hook Form values, exposes an alert and Retry save, and keeps Back/Skip disabled. Next can resubmit; Retry save builds a payload from current form values and social links.

Late completion may advance only while mounted and owned by the same starting step, session version and user ID. Profile mutation loading does not unmount the authorized wizard. M1's guard and session middleware retain their account-boundary behavior. This is local async ownership, not a backend transaction or persisted wizard-step contract.

`UpdateUserRequest` includes `userId`, title, bio, website, city, country, `taglineMission` and socialLinks for this flow. Lookup lat/lon values can exist locally, but the request interface and payload omit coordinates. Skip and final Continue navigate to `/app`; M3 adds no completion-flag persistence. CountdownRedirect's RESET dispatches the existing local `resetOnboarding` action.

PR #73 records 689 tests across 108 suites, TypeScript and production build passes, ESLint with 0 errors / 202 existing warnings, and whitespace checks. Synthetic browser verification covered completed-profile redirects only. Full incomplete-profile browser onboarding, live-backend profile persistence and deployed Nominatim error/retry remain unverified. Automated router/component tests use synthetic profiles and controlled responses; deployment/final QA is not established. No new backend endpoint or capability is implied.
