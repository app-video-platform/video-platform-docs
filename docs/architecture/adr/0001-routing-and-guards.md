# ADR 0001: Routing and Role Guards
Date: Mon, 20 Oct 2025
Status: Accepted

## Context
We use React Router v6 with a layout shell at `/app` and role-based access.

## Decision
- Keep top-level public routes under `/`
- App shell at `/app` with `ProtectedRoute` role checks
- Role-based index component resolution on `/app`

## Consequences
+ Clear separation of public vs app routes
- Must update docs + route map on changes



<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025
