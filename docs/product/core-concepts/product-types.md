---
title: Product Types
sidebar_position: 2
---

# Product Types

## Overview

Video Platform App currently supports four product types:

- Course.
- Download.
- Consultation.
- Membership.

Each product type uses the shared product creation flow, then adds type-specific setup areas in the builder.

## Who can use this

This page is for Creators and Administrators who create or manage products.

It is also useful for customers who want to understand what kinds of products can appear in discovery.

## What you can do

Creators and Administrators can create:

- **Course products** for structured learning content.
- **Download products** for downloadable file packages.
- **Consultation products** for paid one-to-one sessions or services.
- **Membership products** for grouping existing Course and Download products behind a membership setup in the creator builder.

## How it works

All product types share basic setup fields such as title, description, pricing, and media.

Course products can include sections and lesson shells. Download products can include sections with downloadable files. Consultation products include fields for duration, meeting method, buffers, daily session limits, confirmation messaging, and cancellation policy. Membership products include a Membership Content area for selecting existing Course and Download products, plus a recurring pricing UI for EUR monthly or yearly pricing.

## Current limitations

- Product media selection is visible, but product images are not reliably shown across customer-facing product cards and pages.
- Course lesson content does not yet fully support persisted video, article, assignment, and quiz workflows.
- Download file upload exists for creator setup, but customer delivery through the Library is not implemented.
- Consultation setup exists, but customer booking, availability, rescheduling, and session management are not complete.
- Membership included products and recurring pricing controls are frontend-only in the current builder. They are not persisted through the current Product API, and there is no subscription, entitlement, member access, checkout, or buyer-facing Membership experience yet.

## Related pages

- [Creating a Product](../creators/creating-a-product.md)
- [Course Products](../creators/course-products.md)
- [Download Products](../creators/download-products.md)
- [Consultation Products](../creators/consultation-products.md)
- [Membership Products](../creators/membership-products.md)
- [Product Statuses](./product-statuses.md)
