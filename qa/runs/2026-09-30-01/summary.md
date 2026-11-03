# Execution summary

## Current frontend implementation status — 3 November 2026

This update records merged frontend fixes separately from the historical execution checkpoint below. Trello remains the operational issue board; no ticket or case is declared fully resolved by a source merge.

| Issue | Milestone / PR | Frontend implementation | Synthetic frontend verification | Live-backend E2E | Deployment/final QA |
| --- | --- | --- | --- | --- | --- |
| [BUG-058](issues/BUG-058.md) | M1 / [#71](https://github.com/app-video-platform/video-platform-ui/pull/71) | Complete and merged | Passed within recorded synthetic scope | Pending | Not established |
| [BUG-073](issues/BUG-073.md) | M1 / [#71](https://github.com/app-video-platform/video-platform-ui/pull/71) | Complete and merged | Passed within recorded synthetic scope | Pending | Not established |
| [BUG-026](issues/BUG-026.md) | M1 / [#71](https://github.com/app-video-platform/video-platform-ui/pull/71) | Complete and merged | Passed within recorded synthetic scope | Pending | Not established |
| [BUG-086](issues/BUG-086.md) | M1 / [#71](https://github.com/app-video-platform/video-platform-ui/pull/71) | Complete and merged | Passed within recorded synthetic scope | Pending | Not established |
| [BUG-001](issues/BUG-001.md) | M2 / [#72](https://github.com/app-video-platform/video-platform-ui/pull/72) | Complete and merged | Passed within recorded synthetic scope | Pending | Not established |
| [BUG-018](issues/BUG-018.md) | M2 / [#72](https://github.com/app-video-platform/video-platform-ui/pull/72) | Complete and merged | Passed within recorded synthetic scope | Pending | Not established |
| [BUG-060](issues/BUG-060.md) | M2 / [#72](https://github.com/app-video-platform/video-platform-ui/pull/72) | Complete and merged | Passed within recorded synthetic scope | Pending | Not established |
| [BUG-077](issues/BUG-077.md) | M2 / [#72](https://github.com/app-video-platform/video-platform-ui/pull/72) | Complete and merged | Passed within recorded synthetic scope | Pending | Not established |

M1 merged as `52413ed`; M2 merged as `7c13a37` into frontend main. M1 PR verification records 627 tests / 102 suites. Final M2 verification records 664 tests / 103 suites, including M1/M2 compatibility. Both record TypeScript, lint (0 errors, 205 existing warnings), production build (3 performance warnings), and earlier synthetic browser passes. M1 browser checks were not rerun during PR preparation; M2 browser checks used intercepted HTTP and fixture destinations before final integration and were not rerun afterward.

Retest real cookie rotation, cross-origin deployment, refresh/logout ordering, account/role changes, saved workspace/Article persistence, nested navigation failure/retry and Membership load recovery. Confirm the deployed revision first. Browser termination and forced/history navigation have no asynchronous save guarantee. M3 is separate ongoing work and is not complete here.

The local checkout originally contained only BUG-001–008. The eight affected reports now include their current GitHub-main historical text plus resolution notes; other historical run files below remain this checkout's September checkpoint. Later source-run updates are available in the [upstream historical summary](https://github.com/app-video-platform/video-platform-docs/blob/main/qa/runs/2026-09-30-01/summary.md). No execution results, coverage counts or case outcomes were recomputed, and the retained fixture/session information below is historical, not a current environment check.

## Historical September checkpoint

Run in progress. [Progress](progress.md) and [session notes](session-notes.md) contain the current checkpoint. [JSONL results](results.jsonl) are authoritative; [CSV results](results.csv) can be opened in Excel.

## Checkpoint at 203 variations

182 Pass, 17 Fail, 3 Needs clarification, 1 Blocked. These are individual assertions and data variations, not 198 completed cases. Of 493 catalog cases, 73 have evidence: 6 fully assessed, 67 partially assessed, and 420 not run.

## Confirmed defects

| Issue | Severity | Observed behavior |
| --- | --- | --- |
| [BUG-001](issues/BUG-001.md) | High | Saved authoring workspaces reopen blank for all four Product types. |
| [BUG-002](issues/BUG-002.md) | Medium | Saved positive prices are absent on Overview and public detail surfaces. |
| [BUG-003](issues/BUG-003.md) | Low | Guest creator names append literal `null`. |
| [BUG-004](issues/BUG-004.md) | Medium | Explore Creator opens an incorrect, blank storefront route. |
| [BUG-005](issues/BUG-005.md) | Low | Library selected-tab accessibility state remains on All products. |
| [BUG-006](issues/BUG-006.md) | Medium | Wishlist dropdown Add to cart navigates without adding the Product. |
| [BUG-007](issues/BUG-007.md) | Medium | Invalid verification token displays Email verified after API rejection. |

| [BUG-008](issues/BUG-008.md) | Medium | Profile Save ignores Bio, Tagline, and Website validation. |

Repairing BUG-001 would unblock many saved authoring journeys. No implementation fixes are part of this execution pass.

## Verified portions

Evidence covers Guest and role route guards, initial creation of four Product types, selected autosave and publishing assertions, product refinements, Guest public discovery, owner Wishlist and Cart behavior, empty reporting surfaces, read-only Admin checks, and selected anonymous API authentication boundaries. Successful purchases, entitlement creation, uploaded content delivery, and cross-owner isolation are not established by these results.

## Unresolved expectations

- CONS-004: displayed initial Consultation defaults differ from persisted values and readiness requirements.
- DISC-005: Guest summary/search responses contain Draft metadata while full Draft reads deny access. Intended metadata visibility needs clarification.
- ANALYTICS-006: Membership no-data wording does not distinguish absent active membership history from the unavailable runtime.

## Remaining prerequisites

- A second disposable signed-in identity for ownership isolation and successful buyer enrollment; requested from the owner.
- An authenticated API test session through a supported mechanism without extracting browser credentials.
- Verified fake payment-provider configuration and controlled commerce history.
- Controlled failure/configuration fixtures, test mail and credential handoff, upload fixtures, and calendar-provider test setup where required.
- A deployed repair of saved authoring for cases obstructed by BUG-001.

Unexecuted cases stay Not run until their actual variation or blocker is assessed. Prerequisites do not justify bulk Pass or Blocked classifications.

## Retained state and limits

OWNER-A is restored to CREATOR. Its Cart and Wishlist are empty. Four synthetic Products and one native Post remain for retesting; Consultation is Published. Guest has one synthetic Consultation in its separate local Cart. Original Products were not edited. No purchases, uploads, account creation, credential changes, or calendar writes occurred.

Restricted logs and read-only DB were verified. Local repository revisions do not prove deployed revisions, which remain unknown. Most ledger timestamps record entry time rather than action start; see [run metadata](run.md).

Current interruption: frontend and API HTTPS connections reset during Profile reload. Restricted SSH and DB remain available. See [connectivity evidence](evidence/connectivity-blocker.json). No deployed revision changes have been confirmed.

Validation: documentation typecheck passed. Default npm build initially rejected Node18; the same Docusaurus build passed using the installed bundled Node24 runtime. Existing stale browser-data and update-check warnings remain; no dependencies or system permissions were changed. Ledger/CSV row counts match and all recorded evidence paths exist.
