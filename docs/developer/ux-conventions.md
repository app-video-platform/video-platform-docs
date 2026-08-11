---
title: UX Conventions
sidebar_position: 6
---

# UX Conventions

## Loading

- Use skeleton or inline spinner for short operations.
- Disable buttons during mutations.
- Communicate saving states where product edits are autosaved.

## Errors

- Known business errors should appear near the relevant control.
- Unknown server errors should use a general retryable message.

## Toasts

- Use success toasts after clear user actions.
- Avoid toasting on ordinary page-load fetches.

## Empty states

- Empty states should explain what the user can do next.
- Placeholder tabs should not look like completed workflows.

## Pages, Drawers, and Dialogs

Use pages for substantial destinations or workspaces, especially when a resource needs meaningful navigation depth or its own working context.

Use drawers for contextual inspection or interaction that should retain the parent workspace. Drawers are useful when the user benefits from keeping list, filter, or dashboard context visible while inspecting a selected item.

Use modals or dialogs for short focused tasks, decisions, confirmations, or temporary workflow interruptions.

These are design and architecture guidelines, not rigid rules. Dedicated detail pages and contextual drawers can both be correct depending on the workflow.

## Forms

- Use client validation before submitting.
- Map server errors back to fields when possible.
- Submit buttons should use `type="submit"` when inside forms.

## Current implementation caution

This page describes intended UX standards. It should not be read as proof that every current screen follows each convention.
