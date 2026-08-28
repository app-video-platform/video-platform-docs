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
- Set buffer time before each meeting.
- Set buffer time after each meeting.
- Set a maximum number of sessions per day.
- Write a confirmation message.
- Choose a cancellation policy.
- Configure enabled weekdays and one or more ordered time windows for each day.
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
- Consultation Details
- Media

### Configure consultation details

The Consultation Details area controls how the creator wants the session to be offered.

Creators can choose a duration between 20 and 120 minutes in 5-minute increments.

Meeting method controls how the session location is described. If **Other** is selected, a custom location field is shown.

Buffers let creators reserve time before and after each meeting. The maximum sessions setting limits how many sessions the creator wants to accept in one day.

The confirmation message is the message shown or sent after booking in the intended workflow.

The cancellation policy lets creators choose from the available policy options.

Weekly availability is saved with the Consultation. The builder always shows
all seven weekdays, including disabled days. A draft can be incomplete, but
publishing requires at least one enabled window with a start time before its
end time and no overlapping windows on the same day.

## Current limitations

- Creators can configure consultation product details, but customers cannot complete a full booking flow in the current frontend.
- Weekly creator availability is persisted, but customer time-slot selection, rescheduling, cancellation by customers, and session management are not complete.
- Connected calendars can be initiated from settings, but neither connected calendars nor persisted weekly availability provide a finished booking experience yet.
- The confirmation message can be configured, but the full customer notification flow should not be documented as available yet.

## Related pages

- [Creating a Product](./creating-a-product.md)
- [Managing Products](./managing-products.md)
- [Course Products](./course-products.md)
- [Download Products](./download-products.md)
- [Membership Products](./membership-products.md)
- [Calendar Connections](../core-concepts/calendar-connections.md)
- [Current Platform Status](../start-here/current-platform-status.md)
