---
title: Analytics
sidebar_position: 10
---

# Analytics

## Overview

The Analytics area lets creators inspect high-level business performance over preset reporting periods.

Creators can open Analytics from the app navigation at `/app/analytics`. The current frontend includes summary metrics, performance charts, product ranking, customer growth, membership health, and payment health views.

## Who can use this

This page is for signed-in users with the Creator role.

Administrators can also access the Analytics route.

## What you can do

Creators can currently:

- Select Last 7 days, Last 30 days, or Last 90 days.
- View summary metrics for Revenue, Orders, Customers, and Active memberships.
- See trend and comparison information against the previous matching period.
- Switch the main Performance visualization between Revenue and Orders.
- Review Product performance by revenue, orders, and revenue share.
- Review Customer growth for total customers and new customers in the selected period.
- Review Membership analytics for active, new, cancelled, and churn-rate summary values.
- Review Payment health for refund-rate and failed-payment movement.
- Open a linked product workspace from Product performance when a product ID is available.

## How it works

The period selector changes the whole Analytics workspace. It updates the summary metrics, performance visualization, product ranking, customer growth chart, membership movement chart, payment health summaries, and comparison text.

Performance can be viewed as:

- **Revenue**: an area chart showing revenue movement for the selected period.
- **Orders**: a bar chart showing order movement for the selected period.

Product performance ranks products and shows each product's product type, revenue, order count, and share. Customer growth focuses on new-customer movement and summarizes total and new customers. Membership analytics compares new and cancelled memberships and summarizes active members, new members, cancellations, and churn rate. Payment health summarizes refund-rate and failed-payment movement using aggregate trends, not individual sales events.

If analytics data is unavailable, the page shows an unavailable state explaining that analytics trends need revenue, order, customer, membership, and payment analytics APIs. Individual chart sections also have empty-state presentation when a chart or ranking has no data.

On smaller screens, the Analytics layout collapses from multi-column grids into single-column sections, the period selector expands to the available width, product rankings stack their values, and chart containers reduce their height for mobile.

## Current limitations

- Analytics business data is deterministic frontend fixture data behind the project's mock-mode strategy.
- Outside mock mode, the Analytics area shows that analytics data is unavailable until production Analytics APIs are connected.
- The current frontend does not establish production Analytics API, Redux, or backend data contracts.
- Preset period selection is limited to Last 7 days, Last 30 days, and Last 90 days. It is not a custom date-range system.
- The current UI does not provide traffic analytics, conversion funnels, attribution/source analytics, payouts, tax analytics, disputes, cohorts, course/content engagement analytics, exports, report building, custom dashboards, or custom dashboard configuration.
- Analytics values and comparisons are fixture-backed and should not be treated as production reporting.

## Related pages

- [Creator Overview](./creator-overview.md)
- [Sales](./sales.md)
- [Customers](./customers.md)
- [Current Platform Status](../start-here/current-platform-status.md)
- [Local vs Server-backed Features](../core-concepts/local-vs-server-backed-features.md)
