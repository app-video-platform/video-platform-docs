# AGENTS.md

Guidance for Codex sessions maintaining the Video Platform documentation.

## Repository Purpose

This repository contains the documentation site for the Video Platform App.
The documentation should describe the current product accurately and help the
right audience find the right information quickly.

The implementation lives in the sibling `video-platform-ui` repository.
`video-platform-ui` is always the source of truth.

## Core Principles

Document the product, not the implementation.

Verify capabilities against `video-platform-ui` before documenting them.

Never invent unsupported features.

Never document unmerged work as current behavior.

Never let roadmaps, ideas, or old documentation override the implementation.

If documentation and implementation disagree, update the documentation.

Prefer narrow, accurate updates over broad rewrites.

## Source Of Truth

Use `video-platform-ui` to verify:

- available routes and screens
- user roles and access behavior
- product capabilities
- forms, fields, and validation rules
- visible UI terminology
- API clients and backend contracts used by the UI
- feature flags, mocks, fallbacks, and local-only behavior
- current limitations

Treat comments, TODOs, roadmap notes, tickets, and old docs as context only.

Treat tests as supporting evidence, not a replacement for inspecting the
current UI implementation.

If a feature exists only in plans or unmerged work, do not document it as
available.

If a feature is partially implemented, document only the behavior that is
currently supported.

## Documentation Structure

Keep Product Documentation and Developer Documentation separate.

Product Documentation explains user-facing behavior.

Developer Documentation explains implementation, architecture, and maintenance
details.

Never mix the two audiences on the same page.

When a product page needs technical nuance, translate it into user-facing
behavior.

When a developer page needs product context, keep it brief and link to the
relevant product page.

## Product Documentation

Product docs should explain what users can do today.

Describe visible behavior, permissions, flows, states, and outcomes.

Use terminology that appears in the app whenever possible.

Document role differences when they affect what a user can see or do.

Mention prerequisites only when they affect the user experience.

Avoid component names, hook names, file paths, state libraries, and API
internals.

Current limitations belong on the relevant feature page.

Do not create standalone "limitations" pages.

## Developer Documentation

Developer docs should help maintainers understand the codebase.

It is appropriate to reference files, modules, routes, state, APIs, and
architecture.

Keep developer docs grounded in the implementation.

Prefer concrete references over generic explanation.

Document patterns future contributors should follow.

Update developer docs when architecture, routing, shared components, API
contracts, setup steps, or maintenance workflows change.

## Product Page Standards

Use this structure when it fits the page:

- Overview
- Who can use this
- What you can do
- How it works
- Current limitations
- Related pages

Skip sections that add no useful information.

Use `Overview` for a short summary of the feature or workflow.

Use `Who can use this` for roles, access, permissions, or eligibility.

Use `What you can do` for supported user actions.

Use `How it works` for flows, states, rules, and outcomes.

Use `Current limitations` only for limitations that are true now.

Use `Related pages` for high-value cross-links, not exhaustive link lists.

## Documentation Workflow

After every merged feature or product change:

1. Inspect the implementation in `video-platform-ui`.
2. Determine whether documentation changes are required.
3. If no documentation changes are needed, explicitly report that.
4. If changes are required, update only the affected pages.
5. Preserve navigation and cross-links.
6. Validate the docs site.

Run validation from this repository:

```bash
npm run typecheck
npm run build
```

Run both commands before finishing documentation changes whenever practical.
If validation cannot be run, report why.

Avoid broad rewrites when a targeted update is sufficient.
Do not clean up unrelated pages during a focused feature update.
Do not reorganize the docs tree unless the requested change requires it.

## Inspecting Implementation

Start in `video-platform-ui`.

Find the relevant route, page, component, state, API client, mock data,
validation schema, and permission checks.

Check whether behavior is local-only, mocked, server-backed, disabled, or
feature-flagged.

Check whether the UI exposes the capability directly or only contains unfinished
support code.

Document only what the current implementation supports.

If the implementation is internally inconsistent, document only behavior you can
verify.

## Writing Style

Prefer writing that is:

- concise
- factual
- user-focused
- implementation-backed

Avoid writing that is:

- speculative
- roadmap-driven
- promotional
- vague

Use present tense for current behavior.
Use short sections and practical lists.
Use consistent terminology across related pages.
Link to related pages instead of repeating the same explanation everywhere.

Do not describe future functionality as current behavior.
Do not use "will" for future features in product docs.
Avoid claims such as "seamless", "powerful", or "robust" unless the specific
behavior is documented.

## Navigation

Preserve the established information architecture.
Avoid unnecessary sidebar reorganizations.
Keep new pages near related existing pages.
Update sidebars only when adding, removing, or moving a page requires it.
Preserve useful cross-links when editing a page.
Add cross-links when they help readers move between related concepts.
Do not create duplicate pages for the same concept.
Prefer improving an existing relevant page over adding a new one.

## Quality Standards

Every documented feature must be supported by the current implementation.

Every user-facing claim should answer at least one of these questions:

- Who can use it?
- What can they do?
- What happens when they do it?
- What are the current limits?
- Where should they go next?

Every developer-facing claim should help maintain or understand the codebase.

Keep pages scoped to their audience.
Keep headings meaningful and predictable.
Keep examples aligned with real product behavior.
Do not leave broken links.
Do not leave obsolete screenshots, names, or role descriptions in affected
pages.
Do not introduce formatting that conflicts with the existing docs style.

## Change Discipline

Make the smallest documentation change that accurately reflects the product.
Touch only files needed for the requested documentation update.
Do not modify unrelated documentation files.
Do not edit generated directories such as `.docusaurus`, `build`, or
`node_modules`.
Do not copy `video-platform-ui/AGENTS.md`.

This file is documentation-specific and governs maintenance of this repository.


## Documentation Scope

This repository documents the current state of the Video Platform App.

It is not a product roadmap.

It is not a requirements specification.

It is not a design proposal repository.

Future or planned functionality should only be documented when clearly marked as such and only if the documentation already contains an explicit roadmap section.

## Repository Relationship

Responsibilities are divided between repositories:

- `video-platform-ui`
  - implementation
  - architecture
  - product behavior

- `video-platform-docs`
  - product documentation
  - developer documentation

Changes to implementation belong in the UI repository.

Changes to documentation belong here.

Do not modify implementation code from this repository.

## When Unsure

If documentation cannot be verified from the implementation:

- inspect more of the implementation
- report uncertainty
- ask for clarification if necessary

Never guess.

Never infer behavior solely from documentation, TODOs, comments, or naming.