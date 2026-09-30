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

The onboarding flow has five steps:

- Welcome.
- Basic Profile.
- About You.
- Additional information.
- Completion.

Onboarding can collect profile title, bio, tagline, website, location, and social links. It can update user profile details while the user moves through the flow.

Role routing sends Administrators to Admin, Creators to the Creator dashboard, and End Users to the customer home area.

## Current limitations

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
