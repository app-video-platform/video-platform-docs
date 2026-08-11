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
