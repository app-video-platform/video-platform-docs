---
title: Managing Users
sidebar_position: 2
---

# Managing Users

## Overview

Administrators can use the Users area to review platform users and change a user's role.

The current user-management experience focuses on finding users, understanding their current account state, and replacing their single platform role.

## Who can use this

This page is for Administrators.

## What you can do

Administrators can:

- View a paginated table of users.
- Search users by name or email.
- Filter users by role.
- See each user's name, email, role, authentication provider, account status, and created date.
- Change a user's role to Administrator, Creator, or End User.
- Move between user result pages.

## How it works

The Users page includes a search field and role filter. Changing either control refreshes the user list and returns to the first page of results.

Each user row includes a role selector. Changing the selected role updates that user. The UI indicates that role changes replace the user's role and force re-login.

The table also shows whether the account is enabled or disabled and whether the user signed in manually or through another authentication provider when that provider information is available.

## Current limitations

- Role changes replace the user's single role; the UI does not support multiple active roles for one user.
- The page does not expose custom permissions, permission groups, or bulk user actions.
- The page shows account status, but does not include controls for enabling, disabling, inviting, or deleting users.

## Related pages

- [Admin Overview](./admin-overview.md)
- [Roles and Access](../start-here/roles-and-access.md)
- [Audit Logs](./audit-logs.md)
