---
title: Download Products
sidebar_position: 5
---

# Download Products

## Overview

Download products let creators package files into a product that can be sold as a downloadable offer.

The current creator-side setup supports sections, file upload, uploaded file display, and file removal.

## Who can use this

This page is for Creators configuring Download products.

## What you can do

Creators can:

- Create a Download product from the shared product creation flow.
- Add file groups to organize files.
- Edit file group titles and descriptions.
- Move file groups up or down.
- Upload files inside a file group.
- See uploaded files listed with file name and file type.
- Remove uploaded files.
- Use shared product settings such as basics, pricing, and media.

## How it works

### Create the product

Start from [Creating a Product](./creating-a-product.md), choose Download, enter a title, and continue into the builder.

Download products use the shared builder areas:

- Basics
- Pricing
- Files
- Media

### Add file groups

Download files are added inside file groups. A file group needs a title before it can be created and used for file uploads.

Creators can edit file group titles and descriptions after a group exists. File groups can be moved up or down, and deletion requires confirmation.

### Add files

Inside an existing Download file group, use the file uploader to select files.

The current upload path requests a presigned upload URL, uploads the selected file, and confirms the file metadata. After a file is confirmed successfully, it appears in the file group's uploaded files list with:

- File name.
- File type when available.
- Size when available.
- Remove action.

### Remove files

Use the Remove action on an uploaded file to delete it from the file group.

### Readiness and delivery

Download readiness requires at least one persisted or confirmed file across the Product's file groups. Empty groups do not make a Download ready.

After a customer has access, or when the current user is the Product owner, the public Product page can request an authorized short-lived Download URL for a file. This does not mean the customer Library is fully integrated with entitlement-backed owned Download content.

## Current limitations

- The backend can issue a short-lived Download URL after an entitlement/owner/Admin access check, and the Product page can request it where the current user has access or owns the Product. Customer delivery is not integrated into the frontend Library.
- Uploaded files can be managed inside Download sections, but the current documentation should not describe a complete buyer download experience.
- Product media and public Product Landing Page presentation still have limitations shared with other product types.

## Related pages

- [Creating a Product](./creating-a-product.md)
- [Managing Products](./managing-products.md)
- [Course Products](./course-products.md)
- [Consultation Products](./consultation-products.md)
- [Membership Products](./membership-products.md)
- [Current Platform Status](../start-here/current-platform-status.md)
