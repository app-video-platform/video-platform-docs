---
title: Storefront
sidebar_position: 8
---

# Storefront

## Overview

The Creator Storefront is the public page a creator can share with customers.

Creators edit it from the Storefront Builder at `/app/storefront`. The Builder renders the same Storefront presentation used by the public page, so changes are made directly in the customer-facing layout instead of in a separate preview panel.

Customers and visitors use the public Storefront page at `/app/store/:creatorId` to view the creator profile and browse published products.

## Who can use this

The Storefront Builder is available to Creator accounts. Storefront configuration endpoints intentionally reject Administrator and End User accounts.

The public Storefront page can be opened by visitors and signed-in users.

## What creators can do

Creators can:

- Open **Storefront** from the Creator navigation.
- Edit public-facing profile fields inline in the Storefront layout.
- Set a public email that is separate from the login email.
- Copy the public Storefront URL.
- Open the public Storefront in a new tab.
- See which products are public and which are draft or hidden.
- Set a published product as featured.
- Move products up or down.
- Customize Storefront appearance, accent color, and typography.
- Save Storefront configuration changes together.
- Reset unsaved Storefront configuration changes back to the persisted configuration.

Opening the Builder collapses the Creator sidebar so the Storefront editing surface has more room.

## Public profile fields

The Storefront Builder supports inline editing for these public-facing profile fields:

- Display name.
- Title.
- Tagline.
- Bio.
- Website.
- Public email.

Public email is a profile field, not the account login email. The public Storefront API never exposes the login email. If the creator has not set a public email, no email is returned publicly. Editing the public email does not change the login email.

The same public-email concept is also surfaced in Settings. Storefront Builder edits save the public email through the profile/user data path, while Storefront configuration remains responsible for Storefront-specific presentation settings.

Profile image editing is not part of the current Storefront Builder because a reusable persisted profile-image upload flow is not available there.

## Customization

Creators can customize the current Storefront presentation with:

- **Appearance**: Light or Dark.
- **Accent color**: a brand color used by Storefront presentation elements.
- **Typography**: Modern, Classic, or Friendly.

Customization updates the Builder live. On wider screens the customization controls appear as a floating panel; on smaller screens they open in a mobile drawer.

This is not a general page builder. The current Builder does not support arbitrary drag-and-drop sections, custom content blocks, custom CSS, spacing controls, custom layouts, custom templates beyond the implemented appearance/color/typography options, custom domains, or SEO configuration.

## Storefront configuration

Storefront configuration owns:

- Theme settings.
- Featured Product selection.
- Product ordering.

These settings are edited as a draft in the Builder. Changing the featured product, product order, appearance, accent color, or typography updates the Builder immediately, but those Storefront configuration changes persist together only when the creator selects **Save changes**.

Selecting **Reset changes** restores the persisted Storefront configuration and discards unsaved Storefront configuration changes.

Public profile fields are different: they are owned by User/Profile data. Product identity, type, status, price, image, and catalogue details are owned by Product data.

## Public Storefront

The public Storefront page applies the persisted Storefront theme and presents the creator profile, a featured product when one is available, and the creator's public product cards. Product cards link to the public Product Landing Page for that product.

The current Storefront presentation supports the product types used by the product catalog:

- Course.
- Download.
- Consultation.
- Membership.

## Product visibility

Only products with **Published** status appear on the public Storefront.

Draft and Hidden products are shown in the Builder so creators can understand why they are not public, but they are not shown on the customer-facing Storefront page.

## Responsive behavior

The Builder uses the shared Storefront presentation rather than a separate preview. Supporting controls such as the product ordering strip and customization controls adapt for smaller screens, including a mobile customization drawer.

The public Storefront adapts its hero, featured product, contact section, and product grid so the page remains usable on desktop and mobile.

## Current limitations

- Storefront configuration and the public Storefront read model are persisted by the backend. Unsaved Builder changes remain local until **Save changes** is selected.
- Deterministic local HTTP mocks may provide Storefront data for development and inspection when mock mode is enabled. Mock data should not be treated as production-backed Storefront data.
- The Builder does not provide arbitrary page-building, drag-and-drop sections, custom content blocks, custom CSS, spacing controls, custom domains, SEO configuration, password protection, or Storefront analytics.
- Profile image inline editing is not part of the current Builder.
- Product identity, status, price, media, and publishing remain part of Product management. The Storefront does not add, edit, publish, delete, or bulk-update products.
- Storefront customer messaging, customer impersonation, and access grants are not part of the current Storefront experience.
- The current frontend route metadata still permits Administrators even though the Builder and backend are Creator-only. This frontend navigation mismatch does not grant backend access.

## Related pages

- [Creator Overview](./creator-overview.md)
- [Creator Settings](./creator-settings.md)
- [Managing Products](./managing-products.md)
- [Membership Products](./membership-products.md)
- [Product Statuses](../core-concepts/product-statuses.md)
- [Local vs Server-backed Features](../core-concepts/local-vs-server-backed-features.md)
