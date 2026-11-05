---
title: Drawer
---

# Drawer

## Overview

`Drawer` is the shared UI primitive for contextual panels that slide over the current workspace.

## Location

`src/shared/ui/drawer/`

## Responsibility

The shared Drawer owns generic behavior:

- Overlay rendering.
- Overlay click close behavior.
- Header and close button.
- Escape-key close behavior.
- Focus movement into the drawer.
- Focus restoration after close.
- Tab focus containment while open.
- Body scroll locking.
- Optional footer slot.
- Responsive full-screen mobile presentation.

Feature code owns the domain content inside the drawer. For example, Sales owns order-specific sections, labels, links, and status mapping for order detail.

## Usage guidance

Use Drawer when the user should inspect or interact with contextual detail while retaining the parent workspace. Do not put feature-specific business behavior into the shared Drawer component.

## Overlapping dialog ownership (M12)

Each mounted Drawer generates a stable instance-specific title ID with `useId`;
`aria-labelledby` points to its own visible title. Keep a meaningful `title` and
close-button name. The public props remain `open`, `title`, `children`, `onClose`,
optional `footer`, `className`, and `closeLabel`; there is no stack prop.

Open Drawers register in a shared module-level stack. New layers appear above
older layers; inactive Drawer layers become `inert` and `aria-hidden`. Only the
top entry handles Escape, Tab/Shift+Tab boundaries, and focus escaping its panel.
Opening moves focus to the first focusable control, with the panel as fallback.
Escape requests only that entry's `onClose`; consumers must update `open`.

Closing the top entry restores its connected trigger when it is inside the
remaining active Drawer, otherwise focuses that Drawer. Closing the final entry
restores the connected trigger where available. The first open captures body
`overflow` and locks scrolling; the last cleanup restores the captured value.
Cleanup removes listeners/timers and transfers focus-restoration references if a
lower entry disappears first. Feature code should use this shared primitive
rather than independent Escape handlers or competing scroll locks.

Sales Order/Filters, Product editors, and Settings consume Drawer. Component tests
cover a synthetic nested Order/Filters composition under StrictMode: distinct
names, top-only Escape, Tab boundaries, parent-trigger restoration, final scroll
restoration and unmount cleanup. Reported browser checks cover a single Sales
Order Drawer and Escape/focus restoration. The actual Sales Order + Filters
history composition still needs browser verification; these tests do not prove
all application nesting or assistive-technology behavior. See the M12 section of the repository's `qa/test-execution-plan.md` for retest scope.
