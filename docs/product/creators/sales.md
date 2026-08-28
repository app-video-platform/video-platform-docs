---
title: Sales
sidebar_position: 9
---

# Sales

## Overview

The Sales area lets creators review server-backed one-time order activity and inspect contextual order details from the creator workspace.

Creators can open Sales from the app navigation at `/app/sales`. The current frontend includes a sales overview, metrics, an orders ledger, list refinement controls, pagination, and an order detail drawer.

## Who can use this

This page is for signed-in users with the Creator role.

The reporting APIs accept Creator accounts only. Administrators and End Users receive an access-denied response.

## What you can do

Creators can currently:

- View sales overview metrics for Revenue, Orders, Refunds, and Failed payments.
- Search orders by customer name, customer email, or order ID.
- Filter orders by date range, status, and product. Product filtering checks every item in an Order.
- Sort orders by newest first, oldest first, amount high to low, or amount low to high.
- Page through the orders ledger when more than one page of results is available.
- Open contextual order detail without leaving the Sales workspace.
- Open linked customer or product workspaces when the order has linked customer or product IDs.

The orders ledger shows order date, customer, every ordered Product, per-item line amount and access result, order status, order type, and the Order total.

## How it works

The date filter supports Today, Last 7 days, Last 30 days, and Last 90 days.

The current order statuses are:

- Paid
- Failed
- Refunded
- Pending

The backend currently reports one-time Orders. Subscription and renewal values remain part of the frontend presentation contract but are not produced by the current backend.

Retained Revenue and Orders count only Orders that are currently Paid. Fully refunded Orders are excluded from retained revenue and reported through Refunds instead. Financial comparisons use the immediately preceding equal-length UTC period.

Refunds are represented on the original order. The current creator UI does not show a separate refund ledger or separate refund record page.

If there are no orders, the page shows an empty state with a link back to Products. If a search or filter returns no matches, the page shows a no-result state with a clear action.

On desktop, filters are visible in the toolbar. On smaller screens, filters move into a drawer, and the orders ledger changes into a stacked card-style layout.

## Order detail

Selecting an order opens a detail drawer while keeping the Sales workspace visible in the background. The URL stores the selected order in the `order` query parameter, so a selected order can be deep-linked or restored on refresh when the Sales detail contract has data for that order.

Order detail can show:

- Order amount, type, date, and status.
- Customer name and email, with a link to the customer profile when available.
- Itemized Products, including Product name, type, line amount, access result, optional access detail, and a link to the product workspace when available.
- Payment provider, payment method, transaction ID, payment date, and currency when available.
- Order summary rows.
- Subscription or renewal context for subscription-related orders.
- Refund amount, refund date, and reason for refunded orders.
- Failed-payment message and retry timing for failed orders.

An Order can contain more than one Product. The Sales UI renders every immutable Order-item snapshot and its access result. Historical names, types, prices, and line totals remain available even when the current Product changes.

## Current limitations

- Sales summary, Order list, and Order detail are now server-backed for one-time Commerce Orders.
- The current frontend does not establish provider-safe financial mutation contracts for refunds, payment retries, subscription changes, or entitlement changes.
- Creators cannot issue refunds, retry charges, change subscriptions, grant access, revoke access, export orders, or perform bulk actions from the current Sales UI.
- The customer Cart completes eligible checkouts through automatic fake success in the deployed test environment. These Orders appear in Sales but represent no-charge functional tests, not collected revenue.
- Subscriptions, renewals, partial refunds, taxes, payouts, and financial exports are not supported.
- Messages navigation is visible elsewhere in the app, but a complete standalone Messages page is not implemented in the current router.

## Related pages

- [Creator Overview](./creator-overview.md)
- [Customers](./customers.md)
- [Analytics](./analytics.md)
- [Current Platform Status](../start-here/current-platform-status.md)
- [Local vs Server-backed Features](../core-concepts/local-vs-server-backed-features.md)
