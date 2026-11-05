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

Keep routine successful observations in the result row when its description establishes the assertions. When supporting DOM measurements or diagnostic summaries are needed, append them to one evidence file per feature batch and identify the observation in the result description. Do not create a separate snapshot file for every successful click, filter value, or screen width. Keep separate screenshots and diagnostic excerpts for defects, blockers, or meaningful persisted state changes. Reuse existing evidence when it supports several results.

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

## M1/M2 retest guidance — 3 November 2026

The [run summary](runs/2026-09-30-01/summary.md#current-frontend-implementation-status--3-november-2026) tracks the eight merged frontend implementations. These are implementation/verification annotations, not new ledger Pass results. Preserve the 493-case catalog, original outcomes and evidence; append actual retest attempts only after execution. Trello remains the operational issue board.

| Area | Issues | Required live-backend confirmation |
| --- | --- | --- |
| Account isolation and logout guards | BUG-058, BUG-073 | Two-account reporting, pending responses, logout/Back and role boundaries. |
| Refresh and profile recovery | BUG-026, BUG-086 | Real cookie rotation, concurrent request settlement, cross-origin behavior, refresh/logout ordering and same-session dirty-work recovery. |
| Saved workspace and Article | BUG-001, BUG-018 | Four-type saved entry/reload, legacy entry, Article body/formatting round trip without a save on open. |
| Nested saves and Membership recovery | BUG-060, BUG-077 | Persisted Section/Lesson sequencing, tab/Products/Preview/Publish waits, retained edits/retry, Product-scoped stable load failure and deliberate retry. |

Record the deployed frontend revision before retesting. Synthetic checks used intercepted HTTP; M2 browser checks were not rerun after final M1 integration. Browser termination and forced/history navigation do not promise asynchronous persistence. Deployment/final QA remains unestablished; M3 is now merged in PR #73; its separate retest scope is below. M4 is merged in PR #74; its retest scope is below.

## M3 onboarding retest guidance — 3 November 2026

Use the [existing implementation-status table](runs/2026-09-30-01/summary.md#current-frontend-implementation-status--3-november-2026) and six issue resolution notes. M3 automated tests and completed-profile synthetic browser redirects do not change the historical ledger to Pass. Testing remains paused; record new attempts only after authorized execution against a confirmed revision. Trello remains the operational board.

| Area | Issues | Outstanding verification |
| --- | --- | --- |
| Canonical routing and progress | BUG-035, BUG-064 | Incomplete USER/CREATOR/ADMIN direct entry, reload, sign-in and successful save without wizard reset; completed-profile redirect and guest denial. |
| Save rejection and validation | BUG-037, BUG-036 | Real save/reload, retained values and explicit retry; field/error correction and assistive-technology checks beyond automated DOM associations. |
| Social links and location | BUG-084, BUG-085 | Original-link restoration through actual profile saves; deployed reverse lookup failure/retry while preserving an accepted location. |

The existing profile contract saves city and country only. Coordinates returned by the lookup are not persisted through UpdateUserRequest. M4 frontend implementation is now merged in PR #74; its deployment/final QA remains unestablished.

## M4 authentication retest guidance — 3 November 2026

Use the [existing implementation-status table](runs/2026-09-30-01/summary.md#current-frontend-implementation-status--3-november-2026) and seven issue resolution notes. PR #74 is merged; source/synthetic verification does not turn historical Fail results into Pass. Trello remains the operational board. Testing remains paused; this documentation update does not resume execution.

| Area | Issues | Outstanding verification |
| --- | --- | --- |
| Registration | BUG-044 | Confirm deployed CSRF route, matching real cookie/header, credentialed CORS, bootstrap failure/retry, successful live registration and mailbox delivery. |
| Verification | BUG-007, BUG-057 | Real valid, missing, invalid/used and expired token outcomes, readable guidance and complete mailbox-to-login journey. Service/network rejection currently uses generic invalid/used-link feedback. |
| Interaction and layout | BUG-056, BUG-089, BUG-090, BUG-011 | Deployed first pointer/Enter submission, field correction/error associations, Show/Hide names/pressed state and narrow-screen reachability; assistive-technology/zoom checks beyond synthetic coverage. |

Synthetic layout checks covered five authentication routes at 320, 375, 768 and 1440px and local Sign in interaction. Successful CSRF registration and invalid/expired verification API responses were not exercised in that browser scope. Confirm deployed revisions and append real retest attempts only after execution; no resend or connected password-reset backend capability is implied.

## M5 collections and Library retest guidance — 3 November 2026

M5 [PR #75](https://github.com/app-video-platform/video-platform-ui/pull/75) is merged. Use the [existing status table](runs/2026-09-30-01/summary.md#current-frontend-implementation-status--3-november-2026) and five issue notes; preserve historical outcomes and append attempts only after authorized execution. Trello remains the operational tracker; paused QA is not resumed by this update.

| Area | Issues | Outstanding verification |
| --- | --- | --- |
| Storage recovery | BUG-050, BUG-048 | Actual browser malformed JSON/wrong shapes/invalid entries, storage denial, repeat reload and valid removal/movement. Automated storage tests do not establish browser-surface recovery. |
| Wishlist move | BUG-006 | Dropdown and Library moves, totals, duplicate avoidance and unsuccessful-move retention/navigation against deployed UI. |
| Purchased access | BUG-049 | Live Creator free enrollment/paid checkout into shared Library, current-principal entitlements and real Product/file authorization; retain User/Admin/guest controls. |
| Library tabs | BUG-005 | All child routes, Back/Forward, selected state/focus, Left/Right/Home/End and native assistive-technology checks. |

Reported verification: 737 tests / 115 suites, TypeScript, lint (0 errors / 203 warnings), whitespace and a subsequent successful 27.2-second production build (three existing performance warnings). Earlier build-stall cause remains unconfirmed. Live purchase, entitlements/content/file access and browser-storage recovery remain pending; synthetic browser storage and commerce/entitlement coverage was limited.

## M6 upload and selection retest guidance — 3 November 2026

[PR #76](https://github.com/app-video-platform/video-platform-ui/pull/76) is merged; the [existing status table](runs/2026-09-30-01/summary.md#current-frontend-implementation-status--3-november-2026) and four issue notes distinguish automated checks from pending browser/live integration. Trello remains the operational tracker. Preserve historical attempts; documentation work does not resume paused QA or execute live-storage mutations.

| Issue | Retest after authorized execution is available |
| --- | --- |
| BUG-042 | Select valid Thumbnail, Gallery and Promo files natively; inspect actual MIME headers/raw bodies and confirmed backend metadata, then verify storage/CDN separately (BUG-069). |
| BUG-055 | Select Membership Video/Resource, edit Title/Description, correct validation and rerender; verify retained selection and Save. Check Course Video filename display, explicit removal/replacement and editor teardown without claiming playable/durable content. |
| BUG-043 | Upload Gallery image, delete successfully and select the identical name/size/lastModified file again; confirm a new request and saved entry. Include upload failure/retry, failed deletion and concurrent duplicate selection. |
| BUG-074 | Independently fail presign, storage PUT and confirmation; retry each successfully, verify confirmed rows and obsolete error removal while unrelated/concurrent failures stay visible. |

Reported checks: 756 tests / 116 suites, including eight shared Uppy tests; TypeScript, lint (0 errors / 203 warnings), whitespace and 26.95-second production build passed with three existing webpack performance warnings. The browser reached seeded Course Media but could not select files. Native file-selection E2E, live uploads/storage/CDN, Download retry and orphan cleanup are unverified. No success is inferred before confirmation, and no cleanup of unconfirmed storage objects is promised.

## M7 Course content retest guidance — 3 November 2026

[PR #77](https://github.com/app-video-platform/video-platform-ui/pull/77) is merged. Use the [existing status table](runs/2026-09-30-01/summary.md#current-frontend-implementation-status--3-november-2026) and four resolution notes. Preserve historical outcomes; add new attempts only after authorized execution. Trello remains operational, and paused QA is not resumed by documentation work. Do not run destructive tests on production content.

| Issue | Required retest |
| --- | --- |
| BUG-021 | Save paragraphs, bold, lists and permitted links; read/reload as owner and entitled learner, compare safe legacy HTML/text, and verify guest/unauthorized redaction plus unsafe markup/scheme sanitization. |
| BUG-019 | With multiple questions change Auto-Split 100→200→50; test uneven totals, first-question remainder allocation, invalid empty/zero/negative/fractional input, Manual Split switching and unchanged passing-score behavior. Verify dedicated Quiz persistence separately from Lesson payloads. |
| BUG-020 | In at least two questions activate second Points/Explanation labels and verify own-field focus, unique IDs, accessible names and keyboard move/remove; add/reorder/remove and repeat. |
| BUG-059 | Course sections and Download groups: fail a position PATCH, inspect error/saving, retry successfully and ensure the old error clears only after all relevant writes succeed. Safely test partial failure and queued/out-of-order completion against actual server order. |

Reported automated verification passed 781 tests / 119 suites (81 focused / six), TypeScript, lint (0 errors / 195 warnings), whitespace and a 27.065-second production build with three existing performance warnings. Browser compilation/homepage checks passed, but the saved Course route was unavailable, preventing interaction verification. Article/Quiz/reorder browser journeys, live-backend E2E and complete learner assessment remain pending. Multiple position PATCHes are non-atomic, with no automatic rollback/all-or-nothing guarantee or forced-navigation/browser-termination persistence guarantee.

## M8 request freshness retest guidance — 3 November 2026

[PR #78](https://github.com/app-video-platform/video-platform-ui/pull/78) is merged
into main as `ee826e5`, implementation `a0e0c3b`. Use the [existing implementation
status table](runs/2026-09-30-01/summary.md#current-frontend-implementation-status--3-november-2026)
and five resolution notes. Confirm the deployed revision before recording new
attempts; preserve the original September-run outcomes and evidence. This update
does not resume paused execution or change Trello. Use harmless fixtures and
controlled environments for response ordering; do not mutate production data.

| Issue | Required retest |
| --- | --- |
| [BUG-039](runs/2026-09-30-01/issues/BUG-039.md) | Start Product A, select B while A is pending, resolve B then A; B must remain visible. Also finish A while B is pending and confirm B stays loading, then test real current 404/error, Retry and direct reload. |
| [BUG-071](runs/2026-09-30-01/issues/BUG-071.md) | Display A then select delayed B: A must disappear rather than appear under B's route. Resolve newer B before older A success/rejection, repeat rapid A → B → A, verify matching identity/loading, current failure/Retry and direct reload. |
| [BUG-072](runs/2026-09-30-01/issues/BUG-072.md) | Select A then B; resolve B before A success/rejection and confirm B's drawer and URL remain selected. Close during a pending read and release it: no reopening. Reopen the same Order, reload its URL, and check current 404/error/Retry without changing selection. |
| [BUG-054](runs/2026-09-30-01/issues/BUG-054.md) | Rapidly combine Audit Target ID, mixed-case type, Action and page changes, resolving older queries last. Repeat for Product exact search, owner, type/status and paging. Assert current-filter rows, page reset, loading/disabled paging, empty/error/Retry states, stale errors ignored and independence from Users/role status. Verify any deletion refresh only with disposable nonproduction fixtures. |
| [BUG-053](runs/2026-09-30-01/issues/BUG-053.md) | Load an owned Customer, then missing/inaccessible Customers: both unavailable cases must have safe identical 404 feedback. Simulate 503/network failure for distinct load/retry messaging. Retry successfully and navigate from failed to valid Customer; no placeholder integration copy, raw backend details or previous-customer error. |

Across the five request channels, include current failure followed by stale
success, stale rejection while the current request is pending, duplicate
same-target reads, A → B → A, unmount/clear and account/role changes during pending
reads. Verify data, loading and errors; request cancellation alone is not a pass.
Record the actual completion order and selected route/query. Keep server ownership
and M1 account isolation checks separate from per-view freshness.

PR #78 and the handoff report 836 tests / 121 suites, 58 focused tests / three
suites, TypeScript, lint (0 errors / 195 warnings), whitespace and a successful
30.173-second mocks-disabled production build with three existing Webpack
bundle-size/performance warnings. Synthetic browser coverage: Product Overview,
Customer switching/404, Sales selection/close/reload. Deliberate ordering and Admin
filter races were automated tests, not browser E2E. Deployed detail races, live
Admin queries, real backend/network timing and final deployment QA remain pending;
append results only after those retests are actually executed.

## M9 Profile and Calendar feedback retest guidance — 3 November 2026

[PR #79](https://github.com/app-video-platform/video-platform-ui/pull/79) is merged
as `8674513`, implementation `8cc07e3`. Use the [existing status table](runs/2026-09-30-01/summary.md#current-frontend-implementation-status--3-november-2026)
and five issue notes. Confirm deployed frontend/backend revisions before appending
new attempts. Preserve historical outcomes; this docs update does not resume
paused QA, mutate live accounts, open real consent URLs, or update Trello. Use
controlled fixtures for rejected/overlapping saves and Calendar responses.

| Issue | Required retest |
| --- | --- |
| [BUG-008](runs/2026-09-30-01/issues/BUG-008.md) | Enter Bio 29/251, Tagline 9/121 and malformed Website; assert field errors and no invalid User PUT. Native Bio input may stop at 250: preserve the historical distinction from automation fills. Correct fields, test click and keyboard submit, hold the response to ensure success waits for API acceptance, then reload/read back supported fields. Repeat Creator/Admin/User where shared, optional blanks/public-email clearing and social mapping. Confirm phone/image controls remain unavailable. |
| [BUG-033](runs/2026-09-30-01/issues/BUG-033.md) | Reject a Storefront inline profile save, confirm the editor/draft/error remain, correct and retry, verify accepted value and cleared old alert, then reload/read back. In a controlled environment interleave requests; newer profile state must survive stale success/error, while unrelated Auth/Product/config status remains independent. Check backend write ordering separately. |
| [BUG-052](runs/2026-09-30-01/issues/BUG-052.md) | Simulate 403, 404, 503 and network failure. Assert safe permission/unavailable/retry feedback, retained local draft, no saved-success and no unhandled promise/runtime rejection. Retry valid owned changes; keep backend ownership checks authoritative and confirm foreign configuration is unchanged. Draft retention does not imply reload persistence. |
| [BUG-081](runs/2026-09-30-01/issues/BUG-081.md) | Simulate Microsoft initialization failure and retry; verify alert, retained provider and restored Connect/selector. Switch to Google and confirm stale errors clear. Hold pending to test duplicate prevention; cover provider discovery failure and missing/malformed/non-HTTPS authorization URLs. Stub opening for a synthetic HTTPS success; it is initialization only. Verify real cross-origin, consent/callback/token/sync separately under an authorized provider test, never as part of documentation work. |
| [BUG-009](runs/2026-09-30-01/issues/BUG-009.md) | For all three placeholder tabs enter 1/51 characters and blur, inspect associated errors, correct to 2/50 and verify clearing. Test trim, optional blank and native keyboard focus/blur; confirm the Privacy label. Repeat shared roles where relevant. Leaving/reloading must not be scored as persisted subscription, privacy or notification preference behavior. |

Repeat profile saves across M1 session boundaries and retain M8 read-freshness
regressions. Component validation/ARIA assertions are not native keyboard or
assistive-technology E2E evidence. Profile response ownership guards frontend
state, not atomic or last-write server ordering. Restore any disposable fixtures
through the normal authorized workflow after actual execution.

PR #79 and the handoff report 848 tests / 125 suites, TypeScript, lint (0 errors /
185 warnings), whitespace and a roughly 31-second mocks-disabled production build
with three existing Webpack performance warnings. The final targeted record is
19 tests / five suites, followed by a 3/3 Profile rerun after optional-email payload
cleanup; no later full-suite rerun is claimed. No browser-driven/live-backend E2E
was performed. Deployed Profile save/reload, live Storefront/Landing recovery,
real Calendar/provider/cross-origin behavior and final deployment QA remain pending.

BUG-081's prior backend work was already reported Dev done 🎉 in Trello; the
read-only card status confirms operational completion only. The historical scope/
redirect-encoding failure, backend URL construction, real consent/callbacks,
token exchange and sync require their own verified evidence. M9 implements
frontend initialization feedback and does not establish those backend/provider
outcomes. Trello status remains unchanged.

## M10 Discovery and Search retest guidance — 4 November 2026

[PR #80](https://github.com/app-video-platform/video-platform-ui/pull/80) is merged
as `bc248bf`, implementation `97aad2e`. Use the [existing implementation-status
table](runs/2026-09-30-01/summary.md#current-frontend-implementation-status--3-november-2026)
and four issue follow-ups. Three frontend fixes are complete; BUG-013 is partial
and remains open. Confirm the deployed revisions, use harmless stable fixtures
and append actual attempts only after authorized execution. Documentation does not
resume paused QA, mutate production data or update Trello.

| Issue | Required retest |
| --- | --- |
| [BUG-004](runs/2026-09-30-01/issues/BUG-004.md) | Guest/User/Creator/Admin: follow an Explore Creator link and Search Creator link to `/app/store/:creatorId`; verify public rendering, direct navigation and reload. Check missing identity fallback and unavailable Storefront responses with controlled APIs, not permissive unknown-ID mocks. Verify Product viewing still opens its separate Product route. |
| [BUG-014](runs/2026-09-30-01/issues/BUG-014.md) | Open API page 1 (visible page two), submit new and same terms, confirm API page zero and omitted page parameter. Traverse Back/Forward and reload: input, heading, URL, results and page must match. Cover encoded/empty direct terms, malformed/negative/noncanonical/unsafe page replacement, stale prior query response and valid empty/out-of-range Return to first page. |
| [BUG-091](runs/2026-09-30-01/issues/BUG-091.md) | Highlight query A's option, replace with B and immediately press Enter: B must be searched. Repeat with no highlighted option, intentional current ArrowUp/ArrowDown/Enter selection, mouse selection, Escape and clearing. Delay older suggestion responses; they must not replace current options. Inspect combobox/listbox relationships and selected-current active-descendant, with native assistive-technology checks recorded separately. |
| [BUG-013](runs/2026-09-30-01/issues/BUG-013.md) | **Backend correction required before final Pass.** With more than one page of stable matching Products, compare public page zero/one/final responses and owner-scoped equivalents using identical query, owner, sort and size. Check actual IDs, complete stable totalElements/totalPages, and last only on the true final page. Include empty, exact full-final and partial-final pages, 24 owner role/sort combinations and owner isolation. After correction, verify Next reaches later IDs, Prev, one-based labels, empty states, direct links and reload in the four-role public UI. |

The recorded defect is public page zero: 20 rows / totalElements=20 /
totalPages=1 / last=true, while page one contains 20 additional IDs / 40 / 2 /
last=true. The isolated owner route reproduces 5/1/last=true then 10/2/last=true
before the final two of twelve matches. The public and owner environments remain
separate evidence scopes. M10 keeps the API metadata contract; row counts alone
cannot establish reliable continuation. Refer to the [backend follow-up](../docs/developer/backend/products-and-authoring.md#pagination-metadata-dependency-bug-013).
Do not count corrected labels or controlled pagination fixtures as a resolved
backend defect or completed later-page E2E.

PR #80 and the handoff report 874 tests / 127 suites, TypeScript, lint (0 errors /
185 warnings), a successful mocks-disabled production build with three existing
Webpack performance warnings, and whitespace checks. Synthetic browser checks:
Guest Storefront navigation/reload, page=2 new-search reset, Back/Forward and
immediate Enter after input replacement. Unknown-ID local mock Storefront fallback
is not authoritative; API-mocked unavailable coverage is separate. No M10
live-backend/deployed E2E was performed. Deployed navigation/history, real network
timing, corrected metadata and reliable access to later results remain pending.

## M11 Product and Storefront retest guidance — 4 November 2026

[PR #81](https://github.com/app-video-platform/video-platform-ui/pull/81) is merged
as `a2f5695`, implementation `bfc7a64`. Use the [existing implementation-status
table](runs/2026-09-30-01/summary.md#current-frontend-implementation-status--3-november-2026)
and five resolution notes. Confirm deployed frontend/backend revisions before
new attempts. Preserve original failures and evidence; documentation does not
resume paused QA, mutate real accounts/Products, or update Trello. Use isolated
fixtures for price/profile/order changes and restore them through the authorized
workflow during actual retesting.

| Issue | Required retest |
| --- | --- |
| [BUG-002](runs/2026-09-30-01/issues/BUG-002.md) | Saved positive Download, Course, Consultation and Membership: compare summary/list, Overview, public Product where Published access permits, authorized private preview and Landing Builder; reload. Test number vs numeric-string detail prices, Free/zero, month/year cadence and EUR formatting, malformed/negative/precision-losing strings remaining unset. Keep Membership publication/checkout unavailable; do not use current Product price to rewrite historical Order amounts. |
| [BUG-075](runs/2026-09-30-01/issues/BUG-075.md) | Save nonblank synthetic title/bio, compare profile/public API values, then view/reload as Guest and authenticated visitor. Check saved copy wins over placeholders, public empty/null/undefined rows are omitted and whitespace-only copy uses empty placeholders. Builder editing must remain available; verify public fields do not expose private profile data. |
| [BUG-070](runs/2026-09-30-01/issues/BUG-070.md) | Consultation before/after buffers: null and undefined omit rows, zero shows 0 minutes and a positive value shows saved minutes. No literal null/undefined duration. Recheck existing duration/availability independently without inventing booking behavior. |
| [BUG-068](runs/2026-09-30-01/issues/BUG-068.md) | With multiple Published Products and empty explicit order/feature config, compare freshly loaded Builder vs public API/page. Verify newest createdAt, equal-time signed Java UUID tie-break, eligible first featured Product and no dirty Save/PATCH. Preserve explicit IDs/feature and reject Draft/Hidden from public preview. Exercise absent/invalid remaining creation metadata: Builder must retain supplied remaining order, and parity cannot be scored as guaranteed. Verify Save/Reset and actual deployed timestamp precision/comparator separately. |
| [BUG-025](runs/2026-09-30-01/issues/BUG-025.md) | Admin foreign Course/Download/Consultation/Membership: compare live Builder and authorized private preview with Creator enabled. Verify Product owner's public identity/theme, never Admin substitution, and no private Creator-config request; then simulate unavailable owner data. Creator-owner control should use own profile/config. Retain backend permission/Published/private-data restrictions. |

PR #81 and the handoff report 913 tests / 129 suites, 48 focused tests / five
suites, TypeScript, lint (0 errors / 185 warnings), whitespace and a successful
mocks-disabled production build with three existing Webpack performance warnings.
Reported synthetic browser checks covered public title/bio after reload and the
same paid Course's Overview/public/private/owner Builder price. Numeric-string
Download, null buffers, empty default order and foreign Admin cases were automated
checks rather than browser E2E. Live four-type normalization, creation metadata,
Builder/public order parity, cross-owner previews and full deployed E2E remain
pending. Do not convert those limitations into passing historical tests.

M11 changes no Order/checkout monetary contract, M5 entitlement boundary, M8
request ownership, M9 profile persistence contract or M10 canonical Storefront
route. BUG-013 remains open and backend-dependent; these fixes do not repair
search pagination metadata or count that issue as complete.

## M12 Accessibility and interaction retest guidance — 4 November 2026

[PR #82](https://github.com/app-video-platform/video-platform-ui/pull/82) merged
as `0effcc7` (implementation `f41155f`). Use the [existing implementation-status
table](runs/2026-09-30-01/summary.md#current-frontend-implementation-status--3-november-2026)
and eight appended resolution notes. Confirm deployed revisions before scoring
new attempts; source merge is not deployed accessibility verification. This docs
update does not resume paused QA or alter original September outcomes, counts or
Trello. Use isolated synthetic fixtures; do not change real accounts, Products,
purchases or generate backend notifications for documentation verification.

| Issue | Required retest |
| --- | --- |
| [BUG-038](runs/2026-09-30-01/issues/BUG-038.md) | Open two shared Drawers; inspect distinct correct title relationships, top-layer focus and Tab/Shift+Tab containment. Escape must close only the top, restore focus inside the remaining dialog and retain scroll lock; final close restores prior overflow and connected trigger. Check close controls, lower-entry removal and cleanup. Repeat actual Sales Order + Filters browser-history composition at mobile width. Preserve isolated lifecycle failure vs deployed title-collision evidence; the old deployed sequence passed Escape/focus/scroll. |
| [BUG-062](runs/2026-09-30-01/issues/BUG-062.md) | Creator/User/Admin Settings Profile: Tab and Shift+Tab skip disabled login email and social prefixes. Inspect native disabled/readOnly properties, not CSS only. A readOnly control remains focusable; enabled fields accept input and retain M9 validation. Use synthetic drafts without real account writes. |
| [BUG-015](runs/2026-09-30-01/issues/BUG-015.md) | Collapse/expand Creator navigation and inspect every destination's name, keyboard reachability and current-route aria-current; labels match across states. Named Help remains disabled/unavailable. Record actual assistive-technology output separately from DOM names. |
| [BUG-016](runs/2026-09-30-01/issues/BUG-016.md) | Creator/User/Admin controlled test sessions: keyboard-open account menu, Tab to native Logout, activate with Enter and Space in separate fresh sessions. Escape dismisses without logout. Check existing M1 session cleanup separately; browser menu opening or mocked dispatch alone is not a real logout Pass. Do not change a real user's session for documentation checks. |
| [BUG-017](runs/2026-09-30-01/issues/BUG-017.md) | Desktop/mobile Landing customization: find Marketing description by accessible name, click its visible label to focus, verify unique field IDs/description associations. Use synthetic edits to recheck Save/Reset and existing error recovery; no real Product configuration writes. |
| [BUG-022](runs/2026-09-30-01/issues/BUG-022.md) | Find Notifications button by name; activate from keyboard and check aria-expanded false/true, aria-controls targeting only the mounted open panel, Escape and outside dismissal. Cover empty and synthetic populated menus; record focus behavior without assuming Dropdown restoration. |
| [BUG-027](runs/2026-09-30-01/issues/BUG-027.md) | Measure computed foreground and effective opaque background for Cart, Wishlist, Notifications and expanded Course Articles. Cover empty/populated, buttons/links/text, hover/active/focus indicators and relevant theme states. Record each surface/browser scope separately, including expanded HTML/JSON Article content. Preserve M5 collection behavior, M7 sanitization and M11 pricing. Token arithmetic is not a full runtime contrast audit. |
| [BUG-045](runs/2026-09-30-01/issues/BUG-045.md) | Fixture a mixed session-local list: isRead=false shows visible/programmatic Unread text; isRead=true omits it. Check order, empty state, readability and non-color-only distinction. Do not infer mark-as-read/remove UI from reducers or server delivery/history/read synchronization/preferences. No backend notification generation is needed. |

PR #82 reports 923 tests / 132 suites, TypeScript, ESLint (0 errors / 185
warnings), production build (three existing Webpack size/performance warnings),
and whitespace checks. Automated coverage includes StrictMode stacked Drawer
ownership, native input states, sidebar names, mocked keyboard Logout, Textarea
label IDs, notification state and Course region names. Reported synthetic browser
checks cover collapsed navigation, Settings disabled controls, account-menu
opening and a single Sales Order Drawer Escape/focus restoration.

The actual Sales Order + Filters overlap, browser Landing labels, populated
read/unread states, computed menu/expanded Course Article contrast, manual
screen-reader behavior and deployed parity remain unverified. Theme-token pair
calculations reportedly meet WCAG AA normal-text targets; this does not establish
full WCAG compliance or all runtime/theme/browser combinations. Axe is not a
project dependency, and no axe run or manual screen-reader audit occurred.
Record future browser and assistive-technology evidence explicitly. M1–M11
contracts and BUG-013's backend dependency remain unchanged.

## M13 Responsive navigation and Settings retest guidance — 5 November 2026

[PR #83](https://github.com/app-video-platform/video-platform-ui/pull/83) merged as
`62c4cfb` (implementation `f814170`). Use the [existing implementation-status
table](runs/2026-09-30-01/summary.md#current-frontend-implementation-status--3-november-2026)
and four resolution notes. Confirm deployed revisions and authorized execution
before new attempts. Preserve historical September outcomes/evidence, including
later role/viewport findings; this docs update does not resume paused QA or change
Trello. No real account, Profile, Product, purchase or collection changes are
needed for documentation verification. Use controlled synthetic data for later
mutation/validation retests, with authorized cleanup.

Retain existing MKT-001–MKT-008, UX-003 and UX-015 case identities in the original
[case catalog](test-cases-current-state-29-09-26.md); this matrix supplements
retesting rather than creating competing cases or scoring original failures Pass.

| Issue | Required retest |
| --- | --- |
| [BUG-010](runs/2026-09-30-01/issues/BUG-010.md) | On `/`, `/about`, `/pricing`, `/getting-started`, `/contact`, `/features`, `/help`, `/demo`, test narrow Menu and inline navigation. Include 320/375/390/480/768/1280/1440px plus 900px and just above. Check brand, Home/About/Pricing/Getting Started/Contact Us, Guest Sign In/Register and authenticated Dashboard/account actions according to confirmed role/session. Keyboard/touch-open, Tab/Shift+Tab, visible focus, Escape/trigger focus, route-change dismissal, direct reload and Back/Forward. Measure header and body separately. |
| [BUG-087](runs/2026-09-30-01/issues/BUG-087.md) | Repeat all eight routes for settled Guest/User/Creator/Admin, especially Contact and auth/account reachability before horizontal document scrolling. Verify unresolved/unavailable sessions do not expose Guest actions prematurely. Account popup must flow within the compact menu, with reachable vertically overflowing content. Native 200% zoom and complete keyboard traversal remain required; do not infer them from CSS or viewport fit. |
| [BUG-012](runs/2026-09-30-01/issues/BUG-012.md) | Explore, Search, public Course/Download/Consultation, Cart and Library under existing access rules; assess public Storefront separately because AppLayout bypasses TopNavbar there. Check seven widths plus 1000px/just above: search always visible in the compact second row, supported role/auth/collection controls in Menu, no search/Explore hit-target overlap. Actual pointer-activate Explore at desktop 1280/1440px from deep routes; keyboard activation is a separate check. Recheck absolute Library destination, reload/history, M10 URL term/page/new-query reset and current-query autocomplete. Preserve M12 names/keyboard controls and distinguish header fit from Product-body overflow. |
| [BUG-065](runs/2026-09-30-01/issues/BUG-065.md) | Creator/Admin/User Settings with long and short synthetic names: inspect every supported tab, contained tab-strip horizontal scrolling vs document width, Profile field/social prefix-value bounds and visible Save/action rows. Cover seven widths and 768px/just above, keyboard reachability/visible focus and native 200% zoom. Preserve M12 disabled Tab skipping vs focusable readOnly controls and M9 validation/persistence using controlled drafts. Calendar style rules are not a completed browser/provider flow; retest selectors/buttons without real consent/account changes. |

### Keep remaining body overflow separate

The [reported M13 measurements](runs/2026-09-30-01/summary.md#m13-remaining-page-content-overflow--5-november-2026)
are local Creator observations: at 320px, Home document 1062px, About 762px and
Explore Product-card action 366px, with headers fitting. The handoff reports the
Explore document fits from 375px in that fixture. Identify actual overflowing
elements before assigning causes; do not automatically attribute Home/About to
one section, hide body overflow, create unsupported issue IDs or claim later
M14/M15 work is complete. Existing [BUG-088](runs/2026-09-30-01/issues/BUG-088.md)
remains independent long Download body overflow, not repaired by a navbar fix.

### Evidence boundary

PR #83 reports 927 tests / 133 suites, TypeScript, ESLint (0 errors / 183
warnings), production build (three Webpack size/performance warnings), and
whitespace checks. Nav component tests cover Guest/authenticated branches and
Escape/focus; TopNavbar tests mock SmartSearch/dropdown children and exercise a
User collection branch. Source closes both menus on location changes; new tests
do not explicitly assert that navigation lifecycle or measure CSS. Existing
SmartSearch tests retain their M10 scope. No new dedicated Settings geometry
test was added.

Reported browser scope is local synthetic Creator: marketplace header/search and
loaded Profile Settings/action/social rows at 320, 375, 390, 480, 768, 1280 and
1440px; Explore center hit-test/pointer click at 1440px; all eight marketing
headers and compact menus at 320px. No reported full Guest/User/Admin browser
matrix, all Product families, native 200% zoom, complete keyboard traversal,
full history/reload matrix or deployed/live-backend E2E. Neither build success
nor these scoped observations establish complete responsive or WCAG compliance.
M1–M12 contracts and BUG-013's backend dependency remain unchanged.

## M14 Long content and media layout retest guidance — 5 November 2026

[PR #84](https://github.com/app-video-platform/video-platform-ui/pull/84) merged
as `a5e9bf1` (implementation `9138988`). Use the [existing implementation-status
table](runs/2026-09-30-01/summary.md#current-frontend-implementation-status--3-november-2026)
and five M14 issue addenda. Frontend implementation is complete; exact historical
long-content reproductions are not verified after the fix. Confirm deployed
revisions and authorized QA before new attempts. Preserve original results,
measurements, roles, screenshots, investigations and cleanup. This documentation
update does not resume paused execution or change Trello.

Use retained valid synthetic fixtures or isolated controlled data. Do not mutate
real accounts, Orders, payments, Product inclusion relationships or upload to
real storage merely for a documentation audit. Keep layout evidence separate
from transaction, entitlement and native upload/persistence checks. Native zoom,
keyboard and pointer observations must be recorded separately from DOM assertions.

| Issue | Required historical-fixture retest |
| --- | --- |
| [BUG-066](runs/2026-09-30-01/issues/BUG-066.md) | Retained Customer with long valid combined/individual names, long email and unbroken segments: Overview, Purchases, Access, Notes at 375/768/1440px plus 320px when possible. Measure document/title/identity/panel bounds, verify readable full wrapping, status/actions/links and keyboard interaction. Ordinary Customer fit does not retest the prior 152-character name/112-character email. Reporting remains Creator-only; access-denied roles are not fabricated reporting layout passes. |
| [BUG-067](runs/2026-09-30-01/issues/BUG-067.md) | Historical two-item Order with long Customer identity/Product titles: mobile transaction cards and desktop ledger at 375/768/1440px plus 320px. Check status/amount alignment, every item and line/Order totals, filters, Order opening, resize/filter retention and keyboard/pointer controls. Verify layout without changing immutable snapshots, payments/refunds or access grants. |
| [BUG-076](runs/2026-09-30-01/issues/BUG-076.md) | Membership Content → Add content → Existing Product with ordinary, long multiword and long unbroken titles. Check full title/description/status, compact checkbox named Select plus complete title, native checked state/Space and pointer selection, visible focus, readable identity-column width and no drawer/document overflow. Use temporary local selection/cancel or authorized isolated confirmation; do not alter real inclusion relationships for documentation verification. Component tests do not measure the historical collapsed columns. |
| [BUG-079](runs/2026-09-30-01/issues/BUG-079.md) | Course/Download/Consultation/Membership Media at 375/768/1440px, Creator/Admin where supported: measure parent/dashboard/document bounds and Browse files visibility/keyboard reachability. Compare Thumbnail with Gallery/Promo and desktop. Existing selection/remove/error flows remain separate regression checks. Course's local 309px/702px dimensions do not verify all historical types/roles, native chooser behavior or storage persistence. |
| [BUG-088](runs/2026-09-30-01/issues/BUG-088.md) | Original valid unbroken Download title at 320/375/768/1440px, direct load and reload: measure hero/title/document bounds, retain full heading, price/actions and no hero-caused document overflow. Add other Product types, themes/layouts, Guest/User/Creator/Admin and authorized private/Builder previews where fixtures permit. Preserve M11 pricing/profile boundaries; ordinary Course fit and a long-title DOM assertion are not a browser Pass for the historical Download. |

### Additional scoped checks and remaining Marketing overflow

Explore action wrapping/reduced mobile padding produced a local synthetic
Creator document width of 320px at a 320px viewport, versus M13's 366px.
Retest ordinary and varied Product cards/roles with existing M10 routing/search
and M13 navigation; do not invent a new issue ID or claim every card fits.

Shared CheckboxInput forwards native checked/disabled states and retains a
focusable input with a custom focus-visible indicator. Check controlled boolean
state, disabled/native keyboard behavior and complete accessible names.
Contact agreement component coverage verifies on/off pointer toggles by reading
`event.target.checked`; it adds no submission, consent enforcement or backend
Contact handling. Browser/assistive-technology verification is separate.

Marketing Home/About remain unresolved: M13 recorded 1062px and 762px document
widths respectively at 320px. These are body findings distinct from corrected
shared navigation; do not assign an unverified section/root cause or M15 fix.
See the [current M14 scope](runs/2026-09-30-01/summary.md#m14-implementation-and-remaining-layout-scope--5-november-2026).

### Evidence boundary

PR #84 reports 930 tests / 134 suites, TypeScript, ESLint (0 errors / 183
warnings), production build (three existing Webpack size/performance warnings)
and whitespace checks. New component assertions cover full-title picker naming
and Space selection, mocked Uppy width, full long hero heading/Free price, and
Contact agreement toggling. Existing Customer/Sales/media tests are behavioral
regressions, not long-fixture browser geometry tests.

The handoff reports local synthetic Creator ordinary Customer Detail, populated
Sales, Course Media (Thumbnail/Gallery/Promo) and ordinary Course public hero
fitting at 320, 375, 390, 480, 768, 1280 and 1440px. Thumbnail measured 309px at
375px and 702px at 768px. The long Customer/Sales, long-title Membership picker
and long Download fixtures were unavailable; the local Membership had no
eligible Products. Guest/Admin, additional Product types, relevant reload/zoom/
keyboard-pointer matrices, deployed/live-backend E2E and actual native upload
persistence remain unverified. Neither ordinary-content passes nor CSS/DOM tests
establish complete responsive conformance. M1–M13 contracts, historical outcomes,
paused execution and BUG-013's backend dependency remain unchanged.
