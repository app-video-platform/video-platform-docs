---
title: Authentication and Onboarding
sidebar_position: 4
---

# Authentication and Onboarding

## Overview

Authentication lets people create an account, verify email, sign in, and reach the correct app area for their role.

Onboarding gives signed-in users a guided profile setup flow before they continue into the app.

## Who can use this

This page is for visitors, End Users, Creators, and Administrators.

## What you can do

Visitors can:

- Sign up with first name, last name, email, password, and password confirmation.
- Open the email verification screen from a verification link.
- Sign in with email and password.
- Sign in with Google.
- Open the forgot password screen.

Signed-in users can:

- Complete onboarding.
- Skip onboarding and go to the app.
- Continue to a role-appropriate app landing area after sign-in.

## How it works

After sign-up, the user is sent to an email-sent screen. Email verification uses a token from the verification link and then shows success, expired, or error messaging.

After email/password sign-in, the app loads the user's profile. If onboarding is complete, the user goes to the app. If onboarding is not complete, the user goes to onboarding.

End Users, Creators and Administrators can open the canonical `/onboarding` address after sign-in. `/app/onboarding` remains an alternate entry. Visitors are sent to Sign in. An incomplete profile opens the wizard; a completed profile sees the existing redirect screen with Go now and RESET.

The onboarding flow has five steps:

- Welcome.
- Basic Profile.
- About You.
- Additional information.
- Completion.

Onboarding collects profile title, bio, tagline, website, city/country and social links. Welcome opens Basic Profile without saving. Each profile step waits for a successful save before advancing; saving keeps the wizard in place rather than restarting at Welcome.

### Save and validation feedback

While **Saving profile changes…** is shown, Next, Back and Skip are disabled to avoid duplicate requests. If saving fails, the current step and entered values remain available with **Retry save**. Back and Skip remain disabled until a successful retry; Next can submit again. Retry save uses your current entered values. These retained edits are local to the open wizard, not a promise of recovery after closing or reloading the browser.

Title, Bio, Tagline / Mission and Website show validation messages associated with their controls. Invalid fields communicate their invalid state and error text; correct the value before submitting again.

### Social links and location

In Additional information, confirm a social URL with Enter or its action button. You can change a URL, clear it, or restore the original value after either action. Each platform keeps one link; changes are included in the profile save.

Selecting a location looks up its city and country. A failed reverse lookup shows feedback and **Retry location lookup**, or asks you to choose a valid result. A failed later lookup leaves the previously accepted location in the form. Only city and country are included in the profile save; location coordinates are not saved.

Role routing sends Administrators to Admin, Creators to the Creator dashboard, and End Users to the customer home area.

### Session checks and recovery

Private pages wait until the app confirms your identity and role. A temporarily unavailable profile service shows **Unable to verify your session** with **Retry**. An already-open workspace at the same address can retain its local edits while hidden during that same-session check. Changing address or account ends that retention. Invalid authentication sends you to Sign in.

Logging out immediately removes access to private pages, including through browser Back, and clears account-owned cached data before another account uses the app. A failed server logout request does not restore the previous identity in the current page.

## Current limitations

- The M3 full incomplete-profile browser journey, live-backend profile saves and deployed location lookup error/retry have not yet been verified end to end.
- Skip and final Continue navigate to the app; M3 does not add persistence of an onboarding completion flag. RESET reopens the wizard locally.
- Forgot password shows a multi-step reset interface, but the visible flow does not currently call the backend reset endpoint.
- The expired email verification message links to a resend-verification path that is not currently documented as a complete workflow.
- Onboarding copy mentions analytics; current Creator Analytics is server-backed
  for the implemented preset-period reporting workspace, without Membership
  subscription analytics.
- Some settings/profile fields outside onboarding are visible but not confirmed as persisted.

## Related pages

- [Roles and Access](../start-here/roles-and-access.md)
- [Product Overview](../start-here/product-overview.md)
- [Creator Settings](../creators/creator-settings.md)
- [Customer Account Settings](../customers/customer-account-settings.md)
