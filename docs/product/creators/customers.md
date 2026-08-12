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

Administrators can also access the Customers route.

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

The list supports relationship statuses for Active member, Past due, Buyer, and Waitlist customers. The product filter is built from products represented in the customer list. The membership filter supports Active, Past due, Cancelled, and No membership states.

Opening a customer shows a Customer Detail page with a back link to the Customers list, identity information, relationship status, and summary metrics. The detail page organizes customer information into these tabs:

- **Overview**: contact details, customer-since date, relationship summary, product summary, tags, and recent activity.
- **Purchases**: purchase rows when purchase history is available.
- **Access**: access records when access information is available.
- **Notes**: internal notes when note information is available.

On smaller screens, the customer list changes from a table-like layout into stacked customer cards, and the detail tabs remain usable in a compact horizontal tab list.

## Current limitations

- Frontend Customer list and detail contracts exist, but dedicated production Customer endpoints are not implemented yet.
- Detailed customer-domain information such as purchases, access records, notes, tags, waitlist details, spend, order counts, and relationship history is available only when the frontend contract receives data, such as through local mock support.
- When production Customer endpoints are unavailable, the Customers area shows an unavailable state until customer, purchase, membership, waitlist, access, and notes APIs exist.
- Access and Notes are read-only. Creators cannot grant or revoke access or add, edit, or delete notes from the current UI.
- Creators cannot manually add customers, edit customer profiles, send messages, export customers, delete customers, perform bulk actions, or impersonate customers from this area.

## Related pages

- [Creator Overview](./creator-overview.md)
- [Membership Products](./membership-products.md)
- [Sales](./sales.md)
- [Local vs Server-backed Features](../core-concepts/local-vs-server-backed-features.md)
