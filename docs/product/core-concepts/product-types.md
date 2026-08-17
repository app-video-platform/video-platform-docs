---
title: Product Types
sidebar_position: 2
---

# Product Types

## Overview

The current frontend presents four product types:

- Course.
- Download.
- Consultation.
- Membership.

Each product type uses the shared product creation flow, then adds type-specific setup areas in the builder.

The backend persists all four Product types. Membership persistence currently
covers Creator/Admin authoring, not publishing, subscriptions, or member access.

## Who can use this

This page is for Creators and Administrators who create or manage products.

It is also useful for customers who want to understand what kinds of products can appear in discovery.

## What you can do

Creators and Administrators can create:

- **Course products** for structured learning content.
- **Download products** for downloadable file packages.
- **Consultation products** for paid one-to-one sessions or services.
- **Membership products** for configuring a content hub with native member-only content and referenced existing Course and Download products.

## How it works

All product types share basic setup fields such as title, description, pricing, and media. Membership remains a Product; it is not a separate root sellable entity.

Course products can include sections and lesson shells. Download products can include sections with downloadable files. Consultation products include fields for duration, meeting method, buffers, daily session limits, confirmation messaging, and cancellation policy. Membership products include a Membership Content area with native Posts, Videos, and Resources, existing Course and Download product references, a unified feed, Newest first or Manual ordering, and a recurring pricing UI for EUR monthly or yearly pricing.

Membership products do not use Course or Download sections. Native Membership content and included standalone Products remain separate domain concepts; they are combined in the Membership feed shown by the builder.

## Current limitations

- Product media selection is visible, but product images are not reliably shown across customer-facing product cards and pages.
- Course lesson content does not yet fully support persisted video, article, assignment, and quiz workflows.
- Download file upload exists for creator setup, but customer delivery through the Library is not implemented.
- Consultation setup exists, but customer booking, availability, rescheduling, and session management are not complete.
- Membership Video and Resource selections persist file metadata only; binary upload and delivery are not implemented.
- Membership readiness feedback is frontend-derived, and there is no subscription, entitlement, member access, checkout, real publishing, or buyer-facing Membership experience yet.

## Related pages

- [Creating a Product](../creators/creating-a-product.md)
- [Course Products](../creators/course-products.md)
- [Download Products](../creators/download-products.md)
- [Consultation Products](../creators/consultation-products.md)
- [Membership Products](../creators/membership-products.md)
- [Product Statuses](./product-statuses.md)
