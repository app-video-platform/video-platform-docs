---
title: Customer Account Settings
sidebar_position: 7
---

# Customer Account Settings

## Overview

End Users can access the shared Settings area to view account and profile settings screens.

Login email and fixed social-link prefixes are disabled and skipped by Tab and
Shift+Tab. Editable profile fields remain available for keyboard entry.

The shared Profile form saves supported account-profile fields. Calendar connection can be initiated; several other Settings tabs remain local forms or incomplete workflows.

## Who can use this

This page is for signed-in End Users.

Administrators and Creators can also access Settings, but their product needs are covered separately.

## What you can do

End Users can open these Settings tabs:

- Profile.
- Account.
- Subscriptions.
- Payment Methods.
- Calendar.
- Privacy.
- Notifications.

End Users can:

- View basic profile fields from the signed-in account.
- Edit and save supported profile fields, with validation before submission.
- View the account email as a disabled field.
- Enter password and account preference fields.
- Open the Calendar tab and start connecting a calendar provider.
- Enter visible privacy, notification, subscription, and payment fields.

## How it works

Settings are organized as tabs. The Profile tab contains basic identity, public information, contact information, and social media fields. The Account tab includes password, preference, and delete-account sections.

The shared Profile form saves first/last name, title, Bio, Tagline / Mission,
Website, public email, and displayed social links. Optional Bio and Tagline values
must contain 30–250 and 10–120 characters respectively when entered; a nonempty
Website must be a domain-style web address. Field errors prevent Save, and success
is shown only after the update is accepted. Failed saves offer a generic error so
the user can correct values and save again. See the shared [Profile validation
and saving rules](../creators/creator-settings.md#profile-validation-and-saving).

Phone and profile-image controls are disabled. Subscriptions, Privacy, and
Notifications remain [local validation placeholders](../creators/creator-settings.md#local-placeholder-validation):
blur trims/checks the 2–50-character entered value, correction clears errors, and
no account preferences are persisted. The same form implementation serves
Creator, Admin, and End User accounts; deployed role/save/reload checks remain
unverified for M9.

The Calendar tab can load available calendar providers and open a provider authorization flow after the user selects a provider. Other tabs currently present fields or buttons but are not confirmed complete account-management workflows.

## Current limitations

- Supported Profile fields use the existing authenticated update flow; deployed persistence across reload has not been verified by M9. Phone and profile-image editing are unavailable.
- Password change, account preferences, delete account, payment methods, subscriptions, privacy, and notification settings are visible but not confirmed as saved workflows.
- Calendar connection can be initiated, but connected-calendar management is not complete.
- Customer settings do not provide purchase history, payment confirmation, order management, or entitlement controls.

## Related pages

- [Customer Overview](./customer-overview.md)
- [Library](./library.md)
- [Shopping Cart](./shopping-cart.md)
- [Calendar Connections](../core-concepts/calendar-connections.md)
