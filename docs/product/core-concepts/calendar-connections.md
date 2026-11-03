---
title: Calendar Connections
sidebar_position: 1
---

# Calendar Connections

## Overview

Calendar Connections let a signed-in user start connecting an external calendar provider from Settings.

The current experience supports provider discovery, provider selection, an email login hint, and opening the provider authorization flow. It does not yet provide a complete consultation scheduling or availability management workflow.

## Who can use this

This page is for Creators, End Users, and Administrators who can access Settings.

Calendar connections are most relevant to Creators who configure Consultation products.

## What you can do

Users can:

- Open Settings.
- Open the Calendar tab.
- See available calendar providers when provider discovery succeeds.
- Enter or adjust the email address used for the calendar connection.
- Select a provider.
- Start the connection flow.

## How it works

The Calendar tab loads the available provider list and displays those providers in a selector.

The email field is used as the login hint for the calendar provider. After a
provider is selected, **Connect** asks the server to initialize authorization.
Microsoft and Google use the same feedback flow. While **Connecting…** is shown,
Connect and the provider selector are disabled to prevent duplicate attempts.

If initialization fails, an alert explains that the selected provider's Calendar
connection could not be started and asks the user to check their details and try
again. The provider selection is retained and the controls become usable again.
Changing providers clears the old error. Backend error details and sensitive
authorization parameters are not shown. If provider discovery fails, the page
shows **Calendar providers are unavailable. Please try again later.**

A successful initialization can open a valid HTTPS authorization address returned
by the server in a new tab or window. Missing or invalid addresses show the same
recoverable failure feedback. Starting authorization does not confirm provider
consent, callback completion, or calendar synchronization.

## Current limitations

- The frontend starts the connection flow but does not show a complete connected-calendar management screen afterward.
- Users cannot currently disconnect calendars, inspect connected calendars, or manage calendar sync settings from this page.
- Calendar Connections should not be read as complete Consultation scheduling. Creator weekly availability is persisted separately, but customer slot selection, booking, rescheduling, cancellation, and session management are not finished workflows.
- If provider discovery fails, the provider selector may not show options.
- M9 changes initialization feedback only. Browser-driven/live-backend checks, real Microsoft/Google consent and callbacks, synchronization, and cross-origin deployment behavior remain unverified.

## Related pages

- [Creator Settings](../creators/creator-settings.md)
- [Customer Account Settings](../customers/customer-account-settings.md)
- [Consultation Products](../creators/consultation-products.md)
- [Current Platform Status](../start-here/current-platform-status.md)
