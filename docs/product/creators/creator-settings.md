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
- Edit and save supported profile fields, with field-specific validation.
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

Login email and fixed social-link prefixes are skipped when moving through Profile
with Tab or Shift+Tab. The editable profile fields remain available for keyboard
entry and validation.

### Profile validation and saving

Profile Save supports first and last name, title, Bio, Tagline / Mission, Website,
public email, and the displayed Facebook, Instagram, X, YouTube, and TikTok social
links. Login email is disabled and cannot be edited. Phone, Change picture, and Remove picture
controls are disabled because those edits are unavailable.

Save validates the form before sending changes. Bio and Tagline are optional;
when provided, Bio must be 30–250 characters and Tagline 10–120. A nonempty Website
must match a domain-style web address, such as `https://example.com`,
`www.example.com`, or `example.com`. Invalid fields show their own messages and
prevent submission. The form supports keyboard submission.

**Profile saved.** appears only after the profile update is accepted. A rejected
save shows **Could not save your profile. Please try again.** Correct the values
and select **Save** again. Supported values are loaded from the account profile;
M9's automated checks do not establish deployed save/reload persistence.

### Local placeholder validation

Subscriptions, Privacy, and Notifications remain local placeholder forms. Their
single text field is trimmed and validated when focus leaves it: entered values
must contain 2–50 characters. The error is associated with the field, and a valid
correction clears it. Privacy has its own label. These tabs do not save
subscription settings, privacy choices, or notification preferences.

## Current limitations

- Profile name, public presentation fields, public email, and social links persist through the authenticated profile API. Omitted social links remain unchanged; clearing the list removes them.
- Phone and profile-image editing are unavailable. Password change, account preferences, delete account, and payment-provider connection remain incomplete workflows. Subscription, Privacy, and Notification forms validate locally without preference persistence.
- The Payment Methods tab does not complete payment-provider onboarding.
- Calendar connection can be initiated, but connected-calendar management is not complete.
- Calendar connection does not make Consultation booking or availability management a finished workflow.

## Related pages

- [Calendar Connections](../core-concepts/calendar-connections.md)
- [Consultation Products](./consultation-products.md)
- [Creator Overview](./creator-overview.md)
- [Current Platform Status](../start-here/current-platform-status.md)
