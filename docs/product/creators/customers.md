---
title: Customers
sidebar_position: 8
---

# Customers

## Overview

The Customers area gives creators a place to review customer relationships across their products.

Creators can open the Customers page from the creator navigation, refine the list, and open a customer detail page to inspect the information currently available for that customer.

## Who can use this

This page is for signed-in users with the Creator role.

The reporting APIs accept Creator accounts only. Administrators and End Users receive an access-denied response.

## What you can do

Creators can currently:

- View a customer management list.
- Search customers by name or email.
- Filter by relationship status, product, and membership state.
- Sort by recent activity, highest spend, lowest spend, name A-Z, or name Z-A.
- Open a customer detail page from the customer row.
- Move through paginated customer results when more than one page is available.

Customer rows summarize the customer's name or email, relationship status, related products, total spend, and last activity when that information is available.

## How it works

The backend currently returns Buyer relationships with No membership. Active member, Past due, Waitlist, and other Membership filters remain visible frontend options but return an empty result until those domains exist.

A customer is included after a paid or refunded Order, or after free, purchased, or manually granted access to one of the Creator's Products. A user whose only interaction is a pending, failed, or expired checkout is not a customer. Spend counts retained Paid Orders, while completed Order count includes Paid and Refunded Orders.

Opening a customer shows a Customer Detail page with a back link to the Customers list, identity information, relationship status, and summary metrics. The detail page organizes customer information into these tabs:

- **Overview**: contact details, customer-since date, relationship summary, product summary, tags, and recent activity.
- **Purchases**: purchase rows when purchase history is available.
- **Access**: access records when access information is available.
- **Notes**: internal notes when note information is available.

On smaller screens, the customer list changes from a table-like layout into stacked customer cards, and the detail tabs remain usable in a compact horizontal tab list.

## Current limitations

- Customer list/detail, spend, completed Orders, Product history, access history, and recent Commerce activity are server-backed.
- Membership relationships and waitlists are not implemented, so their filters return no results.
- Notes and tags are returned as empty read-only collections. Phone, language, timezone, and avatar data are omitted because they are not supported by the current backend profile.
- Free enrollment is returned as a truthful access source, but the frontend type and label still need to recognize it.
- The frontend currently exposes this workspace to Administrators even though the reporting APIs are Creator-only.
- Access and Notes are read-only. Creators cannot grant or revoke access or add, edit, or delete notes from the current UI.
- Creators cannot manually add customers, edit customer profiles, send messages, export customers, delete customers, perform bulk actions, or impersonate customers from this area.

## Related pages

- [Creator Overview](./creator-overview.md)
- [Membership Products](./membership-products.md)
- [Sales](./sales.md)
- [Local vs Server-backed Features](../core-concepts/local-vs-server-backed-features.md)
