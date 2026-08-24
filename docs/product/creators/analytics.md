---
title: Analytics
sidebar_position: 10
---

# Analytics

## Overview

The Analytics area lets creators inspect high-level business performance over preset reporting periods.

Creators can open Analytics from the app navigation at `/app/analytics`. The workspace uses a server-backed aggregate for Commerce performance, Product ranking, customer growth, and payment health.

## Who can use this

This page is for signed-in users with the Creator role.

The reporting API accepts Creator accounts only. Administrators and End Users receive an access-denied response.

## What you can do

Creators can currently:

- Select Last 7 days, Last 30 days, or Last 90 days.
- View summary metrics for Revenue, Orders, and Customers.
- See trend and comparison information against the previous matching period.
- Switch the main Performance visualization between Revenue and Orders.
- Review Product performance by revenue, orders, and revenue share.
- Review Customer growth for total customers and new customers in the selected period.
- Review Payment health for refund-rate and failed-payment movement.
- Open a linked product workspace from Product performance when a product ID is available.

## How it works

The period selector changes the whole Analytics workspace. It updates the summary metrics, performance visualization, product ranking, customer growth chart, membership movement chart, payment health summaries, and comparison text.

Performance can be viewed as:

- **Revenue**: an area chart showing revenue movement for the selected period.
- **Orders**: a bar chart showing order movement for the selected period.

Product performance ranks Products using immutable Order-item amounts and shows Product type, retained revenue, distinct Order count, and revenue share. Customer growth focuses on the first paid/refunded purchase or access grant for each customer. Payment health summarizes full-refund rate and failed-payment movement using aggregate trends, not individual sales events.

Seven-day and 30-day periods use daily buckets. The 90-day period uses 13 grouped buckets. Membership summary data is intentionally empty and no Active memberships metric is returned because Membership commerce does not exist yet.

If analytics data is unavailable, the page shows an unavailable state explaining that analytics trends need revenue, order, customer, membership, and payment analytics APIs. Individual chart sections also have empty-state presentation when a chart or ranking has no data.

On smaller screens, the Analytics layout collapses from multi-column grids into single-column sections, the period selector expands to the available width, product rankings stack their values, and chart containers reduce their height for mobile.

## Current limitations

- The aggregate Analytics endpoint is server-backed from Commerce Orders, immutable Order items, and entitlements.
- Membership summary and trend data remain empty until Membership commerce exists.
- The frontend currently exposes this workspace to Administrators even though the reporting API is Creator-only.
- Preset period selection is limited to Last 7 days, Last 30 days, and Last 90 days. It is not a custom date-range system.
- The current UI does not provide traffic analytics, conversion funnels, attribution/source analytics, payouts, tax analytics, disputes, cohorts, course/content engagement analytics, exports, report building, custom dashboards, or custom dashboard configuration.

## Related pages

- [Creator Overview](./creator-overview.md)
- [Sales](./sales.md)
- [Customers](./customers.md)
- [Current Platform Status](../start-here/current-platform-status.md)
- [Local vs Server-backed Features](../core-concepts/local-vs-server-backed-features.md)
