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
