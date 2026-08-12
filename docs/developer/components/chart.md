---
title: Chart
---

# Chart

## Overview

The frontend uses `recharts` for chart rendering and shared chart primitives for reusable chart presentation.

## Dependency

`recharts` is listed in `video-platform-ui` dependencies and is used by the Creator Analytics charts.

## Locations

| Area | Location |
|---|---|
| Shared chart primitives | `src/shared/ui/chart/` |
| Chart design tokens | `src/styles/_variables.scss` |
| Creator Analytics charts | `src/domains/app/pages/creator-specific/creator-analytics/` |

## Shared chart responsibilities

Shared chart components own generic visualization infrastructure and presentation:

- `ChartContainer` provides stable chart sizing, accessible image semantics, title and description wiring, and responsive chart height behavior.
- `ChartTooltip` provides reusable tooltip presentation and value formatting hooks.
- `ChartLegend` provides reusable legend presentation.
- `ChartEmptyState` provides a consistent no-data state for chart and ranking surfaces.
- Chart CSS tokens provide shared grid, tick, tooltip, and series colors.

Creator Analytics owns its domain-specific chart decisions:

- Which metrics exist.
- What each series means.
- Business labels and comparison text.
- Product ranking logic.
- Analytics-specific summaries and insights.

Do not treat the current Analytics composition as a rule that every future chart must use exactly the same structure. Use the shared primitives when they fit the chart's interaction and presentation needs, and keep domain-specific analytics meaning in the feature that owns it.

## Accessibility and responsive conventions

Charts should include accessible labels or nearby text summaries so the visual is not the only way to understand the data.

Use responsive containers for chart dimensions and keep mobile chart height within the shared responsive constraints. Provide empty states when a chart has no data instead of rendering a blank visualization.
