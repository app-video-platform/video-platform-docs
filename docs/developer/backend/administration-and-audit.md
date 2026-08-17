---
title: Administration and Audit
sidebar_position: 9
---

# Administration and Audit

## Access

All `/api/admin/**` routes require the `ADMIN` role. Product APIs also allow
Admins to perform cross-owner Product operations, subject to Admin-specific
creation rules.

## User administration

Admin user search supports:

- free-text search across first name, last name, and email
- role filtering
- Spring Data pagination and sorting

Role updates replace the user's existing role; they do not add a second role.

Important rules:

- the requested role must exist in the database
- the last Admin cannot be demoted
- changing a role invalidates that user's refresh tokens
- the operation records an audit event

## Product administration

Admin Product search supports:

- text search
- owner filtering
- Product type filtering
- Product status filtering
- pagination and sorting

Admins create and mutate Products through the standard Product APIs. Admin
creation requires an explicit owner with exactly the `CREATOR` role.

Admin Product create, update, and delete actions are audited when the service
detects an Admin actor.

## Audit records

`admin_audit_logs` stores:

- actor User UUID
- action
- target type and target identifier
- before and after summaries
- creation timestamp

The Admin audit API supports filtering by actor, target type, target ID, and
action, with pagination and sorting.

Audit summaries are operational context, not complete entity snapshots. Avoid
putting secrets, tokens, full sensitive DTOs, or unnecessary personal data into
audit text.

## Current limitations

- There is no bulk role management.
- There are no custom permissions beyond the three roles.
- There is no exposed Admin entitlement grant/revoke API.
- There is no Product archive/recovery workflow.
- Admins can author Memberships across owners, but Membership publishing,
  checkout, subscriptions, entitlements, and member access are unavailable.

## Related pages

- [Authentication and Security](./authentication-and-security.md)
- [Products and Authoring](./products-and-authoring.md)
- [Admin Overview](../../product/administrators/admin-overview.md)
- [Audit Logs](../../product/administrators/audit-logs.md)
