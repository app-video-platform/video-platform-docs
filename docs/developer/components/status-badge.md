---
title: Status Badge
---

# Status Badge

## Overview

`StatusBadge` is the shared presentation primitive for compact status labels with semantic tones.

`StatusChip` wraps `StatusBadge` for product status display.

## Locations

| Component | Location |
|---|---|
| `StatusBadge` | `src/shared/ui/status-badge/` |
| `StatusChip` | `src/shared/ui/status-chip/` |

## Responsibility

Shared status primitives own reusable visual and semantic presentation:

- Visible status text.
- Tone classes such as success, warning, danger, neutral, and info.
- Optional icon display.
- Small and medium sizing.

Feature or domain code owns business meaning and maps domain statuses into shared presentation props. For example, Sales maps order statuses such as Paid, Failed, Refunded, and Pending to labels and tones before rendering `StatusBadge`.

Do not assume every status display in the platform uses `StatusBadge`. Use the shared primitive when the feature needs a reusable badge presentation, and keep domain-specific status mappings near the domain that owns the status.
