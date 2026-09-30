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

All product types share basic setup fields such as title, description, pricing,
thumbnail, gallery, and promo video. Membership remains a Product; it is not a
separate root sellable entity.

Course products can include sections and lessons. Download products can include file groups with downloadable files. Consultation products include fields for duration, meeting method, weekly availability, buffers, daily session limits, confirmation messaging, and cancellation policy. Membership products include a Membership Content area with native Posts, Videos, and Resources, existing Course and Download product references, a unified feed, Newest first or Manual ordering, and a recurring pricing UI for EUR monthly or yearly pricing.

Membership products do not use Course or Download sections. Native Membership content and included standalone Products remain separate domain concepts; they are combined in the Membership feed shown by the builder.

Product media is shared across all Product types and currently covers thumbnail images, gallery images, and a Product-level promo video. Image files can be JPEG, PNG, WebP, or GIF up to 10 MB each. Promo videos can be MP4 or WebM up to 100 MB. Galleries can contain up to 20 images total.

## Current limitations

- Product media does not cover Course lesson-video storage, Download deliverable files, or Membership native Video/Resource binary delivery.
- Course lesson content does not yet fully support durable video delivery or a complete customer learning/player workflow.
- Download file upload exists for creator setup, and authorized Product-page delivery exists where the current user has access or owns the Product. Library lists entitled Products, but delivery maturity still varies by Product type.
- Consultation setup and creator weekly availability persist, but customer booking, time-slot selection, rescheduling, and session management are not complete.
- Membership Video and Resource selections persist file metadata only; binary upload and delivery are not implemented.
- Membership readiness feedback is frontend-derived, and there is no subscription, entitlement, member access, checkout, real publishing, or buyer-facing Membership experience yet.

## Related pages

- [Creating a Product](../creators/creating-a-product.md)
- [Course Products](../creators/course-products.md)
- [Download Products](../creators/download-products.md)
- [Consultation Products](../creators/consultation-products.md)
- [Membership Products](../creators/membership-products.md)
- [Product Statuses](./product-statuses.md)
