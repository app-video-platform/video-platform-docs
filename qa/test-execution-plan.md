# Current-stage test execution plan

Prepared: 30 September 2026. Execution started in [run 2026-09-30-01](runs/2026-09-30-01/run.md).

## Scope and starting point

Use [the current-state catalog](test-cases-current-state-29-09-26.md) as the case inventory. It contains 493 cases: 284 browser E2E, 145 API integration, and 64 deployed-service integration cases. Expand each case into its required role, route, data, and environment variations before marking it complete.

The target is the existing development environment at `https://app.serious-debauchery.click/app`. Browser access to the owner's signed-in Creator session, restricted application logs, and a read-only database connection were verified on 30 September 2026. Recheck connections when execution begins; their availability is session dependent. Follow the [diagnostics runbook](../docs/developer/backend/testing-and-deployment.md) for connection setup.

The objective is to execute all applicable catalog cases, document reproducible findings, and identify unresolved prerequisites. A complete catalog execution is evidence of coverage; it is not a guarantee that no bugs exist.

## Phase 1: Prepare the run

1. Read the applicable repository instructions before inspecting implementation. Preserve existing work and keep this initial execution pass focused on observations and results.
2. Create a run directory under `qa/runs/<run-id>/`, using a date and sequence such as `2026-09-30-01`.
3. Record frontend and backend deployment versions if available, local repository revisions separately, the base URLs, browser version, viewport, timezone, and enabled integration/test modes. Mark unknown deployment versions explicitly; local HEAD does not prove the deployed version.
4. Initialize the results, progress, fixture, and issue files described below. Parse case IDs and variations so coverage can be reconciled with the catalog.
5. Verify the browser, read-only database connection, and restricted log command. Verify the documented API base URL and supported authentication mechanism without storing session secrets in tracked files.
6. Inspect and verify the role-switching API contract and feature flag before relying on it. Record the initial account role. The owner's Gmail-linked application account is authorized for this test workflow. Role changes must satisfy any access-change confirmation required by the active tools.
7. Identify additional prerequisites: a second independent owner for ownership isolation, an account without entitlements, entitlement fixtures, recovery email access, file fixtures, payment test mode, calendar test access, and any other catalog-specific requirements. Changing one account's role does not create a second identity.
8. Resolve unclear expected results where implementation and product intent can establish an acceptance rule. Record unresolved cases as Needs clarification. Do not pass a case merely because the UI matches an existing implementation defect.

Create all test content with a recognizable run prefix, for example `QA-2026-09-30-01`. Record created IDs and ownership. Prefer newly created test content over altering existing products. Use the application or its authenticated API to create fixtures; the database connection remains read-only.

## Phase 2: Establish a working execution loop

Select 10–20 catalog cases covering the core path: public access, authenticated navigation, role authorization, product creation, save and reload, publication prerequisites, public visibility, and protected access. Choose exact IDs after reviewing dependencies and existing fixtures. Include a persistence check and a diagnostic check so the full evidence workflow is exercised.

Execute each variation separately. Save its result immediately. If core failures prevent dependent tests, mark those variations Blocked with the prerequisite or issue ID and continue with independent cases.

After this first group, reconcile the tracker against the cases attempted and confirm that another session could reproduce the failures and resume from the progress file. Continue automatically when execution is reliable.

## Phase 3: Execute the remaining catalog

Keep one catalog and one continuous execution record. Organize the queue by dependencies and feature area, prioritizing P0/P1 cases within those groups. Reuse suitable sessions and fixtures while keeping test prerequisites explicit.

Recommended feature order:

1. Routes, authentication, session handling, profile, and role authorization.
2. Product management and lifecycle; Course, Download, Consultation, and Membership authoring.
3. Files, media, persisted content, storefronts, landing pages, public discovery, and search.
4. Entitlements, Library, protected delivery, wishlist, cart, and checkout in verified test mode.
5. Orders, payment states, calendar integrations, and other deployed dependencies.
6. Administration, audit, Sales, Customers, Analytics, and dashboards.
7. Responsive behavior, keyboard access, error recovery, and cross-feature journeys.
8. Any remaining API-only, security, configuration, and environment-specific cases.

API and deployed-service cases should run alongside the relevant feature when possible. Every catalog ID remains in the coverage ledger, including cases requiring a different environment. Do not replace browser E2E with API calls: direct API checks support the journey or satisfy explicitly API-level cases.

Checkpoint every 15 case variations or at the end of a feature area. Save progress and continue without routine approval requests. Read only the relevant catalog sections and implementation when needed. Diagnose failures enough to establish reproducibility and useful evidence; avoid repeatedly retrying the same known defect. Record fixture dependencies so a reused object does not silently invalidate a later case.

## Execution procedure for each variation

1. Confirm role, starting state, fixture ownership, and prerequisites.
2. Perform the listed steps and every required assertion.
3. Observe the actual visible outcome, navigation, and relevant responses using available supported tools.
4. For persistence or ownership assertions, perform a narrow read-only database query against relevant fixture IDs. Record the query purpose and sanitized result.
5. For failures or cases explicitly asserting backend behavior, inspect logs around the action timestamp and available request/correlation ID. Preserve relevant excerpts rather than whole log streams.
6. Record status, actual result, assertion evidence, fixture IDs, and any issue link immediately.
7. Record resulting fixture state and cleanup requirements, then advance the queue.

Use screenshots for visual defects and meaningful state changes. Successful cases need enough evidence to establish their assertions, without collecting redundant screenshots. A loaded page alone does not establish a successful multi-step journey.

## Results and evidence files

Keep the catalog as the specification. Store results per run:

| File | Purpose |
| --- | --- |
| `run.md` | Environment, versions, access checks, run scope, and final coverage summary. |
| `results.csv` | One row per case variation and attempt; open in Excel for filtering. |
| `progress.md` | Next queued cases, current role, reusable fixtures, blockers, and last checkpoint. |
| `fixtures.md` | Test accounts by alias, object IDs, ownership, state, dependencies, and cleanup. |
| `issues/BUG-001.md` | Reproducible defect reports; additional files use stable sequential IDs. |
| `evidence/` | Sanitized screenshots and relevant diagnostic excerpts. |

CSV columns:

`run_id, case_id, variation_id, attempt, feature, test_level, priority, role, fixture_ids, started_at, finished_at, status, expected_result_reference, actual_result, evidence_paths, issue_ids, blocker_reason, cleanup_state`

Quote CSV fields correctly when they contain commas or newlines. Prevent spreadsheet formula interpretation of captured text. Append retest attempts rather than overwriting original failures. Summaries use the latest result for each variation within the applicable deployment version. Generate an optional Excel workbook from these records after execution; the persisted CSV and issue files remain the execution record.

## Status rules

| Status | Meaning |
| --- | --- |
| Not run | No execution has begun for this variation. |
| In progress | Started but assertions are incomplete; resume or repeat after interruption. |
| Pass | All specified assertions completed with supporting evidence. |
| Fail | A clear expected outcome was violated. |
| Blocked | A named prerequisite, access limitation, environment requirement, or existing defect prevents completion. |
| Needs clarification | Expected behavior cannot yet be judged reliably. |
| Not applicable | The variation does not apply to this deployment; record the reason and any alternate environment required. |

A parent catalog case is complete only when all identified variations are accounted for. Report variations and parent cases separately. Partially executed cases do not count as passed. Known missing functionality remains visible as a gap or failed expectation rather than being silently excluded.

## Defect reports

Each issue includes case and variation IDs, severity, deployment version, prerequisites, minimal reproduction steps, expected and actual results, reproducibility, affected fixture IDs, evidence links, and cleanup needs. Label suspected causes as hypotheses. Link several failing cases to one issue when evidence indicates the same defect.

Use severity independently of catalog priority: Critical for broad access/data compromise or application-wide failure; High for broken core journeys without a reasonable workaround; Medium for limited functionality failures or failures with a workaround; Low for minor visual or usability defects.

## Account and service boundaries

The supplied application account can be used for testing as authorized by the owner. Keep Gmail inbox access separate: an application login does not establish access to recovery messages. Record recovery tests as blocked if required messages or handoff are unavailable.

Keep passwords, tokens, cookies, private keys, connection credentials, personal records, and raw production-like logs out of tracked reports. Refer to accounts by alias and sanitize evidence. Avoid dumping whole tables or log streams.

Verify payment/provider test modes before tests that create charges, send external communications, or alter calendar data. Record any required action-time approval or user handoff as a precise blocker and continue independent work. Credential changes, irreversible deletion, and security-sensitive access changes follow the active tool policies. Prefer disposable test fixtures for destructive scenarios and distinguish them from the owner's existing content.

Use the restricted log command and the existing read-only database role. Broader server access is not a prerequisite for ordinary test execution.

## Resume, retest, and completion

At each checkpoint, update completed counts by status and test level, queued work, current session role, fixture state, and blockers. After interruption, read `run.md` and `progress.md`, recheck access, and reconcile any In progress rows before resuming. Identify deployment changes and start a new run or explicitly separate results by version.

After the initial pass, prioritize confirmed defects for a separate repair pass. Retest failed variations after fixes are deployed and rerun affected neighboring journeys. Restore temporary account roles and track cleanup of created fixtures through the authorized workflow.

Finish the execution pass when every catalog case and identified variation has a recorded status, every failure has useful evidence and an issue link, and every blocked or unclear case has a specific explanation. Report executed coverage, pass/fail counts, unresolved cases, remaining defects by severity, untested environment variations, and cleanup state. Do not report full success while blocked or unclear cases remain.

Select stable, repeatedly useful journeys for automated regression tests after the first pass establishes their prerequisites and expected behavior. Automation code belongs in the owning implementation repository.
