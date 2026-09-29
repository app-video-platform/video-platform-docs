---
title: Consultation Products
sidebar_position: 6
---

# Consultation Products

## Overview

Consultation products let creators define a paid one-to-one session or service.

The current builder supports configuring consultation product details. The full customer booking and calendar availability flow is not implemented yet.

## Who can use this

This page is for Creators configuring Consultation products.

## What you can do

Creators can:

- Create a Consultation product from the shared product creation flow.
- Set meeting duration.
- Select a meeting method.
- Enter a custom location when the meeting method is Other.
- Configure weekly availability with enabled days and time ranges.
- Set buffer time before each meeting.
- Set buffer time after each meeting.
- Set a maximum number of sessions per day.
- Write a confirmation message.
- Choose a cancellation policy.
- Use shared product settings such as basics, pricing, and media.

Supported meeting methods are:

- Zoom
- Google Meet
- Phone
- Other

## How it works

### Create the product

Start from [Creating a Product](./creating-a-product.md), choose Consultation, enter a title, and continue into the builder.

Consultation products use the shared builder areas:

- Basics
- Pricing
- Availability
- Media

### Configure consultation details

The Availability area controls how the creator wants the session to be offered.

Creators can choose a duration between 20 and 120 minutes in 5-minute increments.

Meeting method controls how the session location is described. If **Other** is selected, a custom location field is shown.

Buffers let creators reserve time before and after each meeting. The maximum sessions setting limits how many sessions the creator wants to accept in one day.

The confirmation message is the message shown or sent after booking in the intended workflow.

The cancellation policy lets creators choose from the available policy options.

### Weekly availability

Weekly availability is persisted with the Product's consultation details. Each day can be enabled or disabled, and enabled days can contain one or more time ranges.

The builder validates enabled days locally: at least one range is required, start and end times are required, start must be before end, and overlapping ranges are shown as errors.

### Calendar display

The builder can show connected calendar information when it is present on the Product's consultation details and links creators to Settings for account-level calendar management. This is not a Product-level calendar selection contract.

### Readiness

Consultation readiness checks the session duration, meeting method, custom location when the method is Other, and valid weekly availability. A missing connected calendar is a warning, not a publication blocker.

## Current limitations

- Creators can configure consultation product details, but customers cannot complete a full booking flow in the current frontend.
- Calendar OAuth/provider completion, slot computation, time-slot selection, meeting-room creation, rescheduling, cancellation execution, and session management are not complete.
- Persisted weekly availability is configuration only; it is not a finished customer booking system.
- The confirmation message can be configured, but the full customer notification flow should not be documented as available yet.

## Related pages

- [Creating a Product](./creating-a-product.md)
- [Managing Products](./managing-products.md)
- [Course Products](./course-products.md)
- [Download Products](./download-products.md)
- [Membership Products](./membership-products.md)
- [Calendar Connections](../core-concepts/calendar-connections.md)
- [Current Platform Status](../start-here/current-platform-status.md)
