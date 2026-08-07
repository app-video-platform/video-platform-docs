# ADR 0001: Routing and Role Guards

Date: Mon, 20 Oct 2025
Status: Accepted

## Context
We use React Router v6 with a layout shell at `/app` and role-based access.

## Decision

- Keep public marketing routes under `/`.
- Keep authentication routes under `/auth`.
- Keep the app shell under `/app` with `ProtectedRoute` role checks.
- Role-based index component resolution on `/app`

## Consequences

+ Clear separation of public vs app routes
- Must update [Routing and Access Reference](../../routing-and-access-reference.md) on route changes
