---
title: Creator Settings
sidebar_position: 7
---

# Creator Settings

## Overview

Creators can use Settings to view and edit account, profile, payment, calendar, privacy, notification, and subscription screens.

Most settings tabs are visible forms. Profile updates and calendar connection initiation are backend-backed; several other tabs remain presentation-only.

## Who can use this

This page is for Creators.

Administrators and End Users can also access the shared Settings area, but this page focuses on Creator-facing needs.

## What you can do

Creators can open these Settings tabs:

- Profile.
- Account.
- Subscriptions.
- Payment Methods.
- Calendar.
- Privacy.
- Notifications.

Creators can:

- View profile details loaded from the signed-in account.
- Edit profile form fields on screen.
- View the account email as a disabled field.
- Edit the public email field used for customer-facing profile contact information.
- Enter password and account preference fields.
- Enter business and tax fields on the Payment Methods tab.
- Open the Calendar tab and start connecting a calendar provider.
- Enter visible privacy, notification, and subscription fields.

## How it works

Settings are organized as tabs. The selected tab is reflected in the page URL so users can return to a specific settings area.

The Profile tab displays account profile information where available and includes fields for public profile information, contact information, public email, and social media links. Public email is customer-facing and separate from the login email. The same profile-owned public-email field is also editable from the Storefront Builder.

The Account tab shows password, preference, and delete-account sections. Payment Methods shows business information and a payment-provider connection button. Calendar loads available providers and starts a calendar authorization flow.

## Current limitations

- Profile name, public presentation fields, public email, and social links persist through the authenticated profile API. Omitted social links remain unchanged; clearing the list removes them.
- Change picture, remove picture, password change, account preferences, delete account, payment provider connection, subscription, privacy, and notification settings are visible but not confirmed as saved workflows.
- The Payment Methods tab does not complete payment-provider onboarding.
- Calendar connection can be initiated, but connected-calendar management is not complete.
- Calendar connection does not make Consultation booking or availability management a finished workflow.

## Related pages

- [Calendar Connections](../core-concepts/calendar-connections.md)
- [Consultation Products](./consultation-products.md)
- [Creator Overview](./creator-overview.md)
- [Current Platform Status](../start-here/current-platform-status.md)
