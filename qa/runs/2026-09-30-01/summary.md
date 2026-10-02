# Execution summary

Run in progress. [Progress](progress.md) and [session notes](session-notes.md) contain the current checkpoint. [JSONL results](results.jsonl) are authoritative; [CSV results](results.csv) can be opened in Excel.

## Checkpoint — 2 October 2026

736 assessed variations: 610 Pass, 79 Fail, 39 Needs clarification and 8 Blocked. The append-only ledger contains 778 historical attempt rows. Three latest Not run entries correct mistaken case associations and are excluded from assessment counts.

The 493 original cases comprise 295 not started, 184 partially assessed and 14 fully assessed (11 Pass, 1 Fail, 2 Needs clarification). **479 original cases still require execution or additional checks.** An assessed variation is not a completed catalog case; blocked entries were not executed.

Latest continuation assessed Admin home/navigation, user name/email/role filters, Product filters and all three pagination pages, invalid owner errors, legacy fallbacks and Library root recovery. NAV-010, NAV-016, ADMIN-001 and ACCESS-008 now have their specified browser variations assessed; unresolved Library root contents remain Needs clarification. Guest Sales browser/API denials passed. No authenticated API result is inferred from a browser route gate.

New finding: BUG-025, Admin landing builder omits another Creator's profile while private preview displays it. BUG-001 also obstructs Admin saved editing. The formerly working Decimal Pricing creation tab is now blank after interruption; the planned Admin audit mutation was not attempted. Database confirms its Draft price18 and zero target audit rows remain, and OWNER-A is restored to CREATOR.

Prior findings remain: deployed Consultation weekly availability support is absent (BUG-023), and its integer price column loses cents (BUG-024):17.25→17,17.50→18 and0.49→0. Range validation, local removal and successful immediate Back flush portions have evidence. Guest full-list filtering and Membership authoring denial passed. Fabricated nonexistent-account sign-in gave no visible rejection feedback; no HTTP status was inferred from browser logs.

## Confirmed defects

| Issue | Severity | Observed behavior |
| --- | --- | --- |
| [BUG-001](issues/BUG-001.md) | High | Saved authoring workspaces reopen blank for all four Product types. |
| [BUG-002](issues/BUG-002.md) | Medium | Positive saved prices are missing from Overview, public detail and private preview. |
| [BUG-003](issues/BUG-003.md) | Low | Public creator names append literal null. |
| [BUG-004](issues/BUG-004.md) | Medium | Explore Creator opens an incorrect blank Storefront route. |
| [BUG-005](issues/BUG-005.md) | Low | Library selected-tab accessibility state stays on All products. |
| [BUG-006](issues/BUG-006.md) | Medium | Wishlist menu Add to cart navigates without adding the Product. |
| [BUG-007](issues/BUG-007.md) | Medium | Rejected verification token still displays Email verified. |
| [BUG-008](issues/BUG-008.md) | Medium | Profile Save ignores Bio, Tagline and Website validation. |
| [BUG-009](issues/BUG-009.md) | Low | Settings placeholder title validation does not appear. |
| [BUG-010](issues/BUG-010.md) | Medium | Shared marketing navigation overflows narrow screens. |
| [BUG-011](issues/BUG-011.md) | Medium | Authentication forms overflow phone and tablet widths. |
| [BUG-012](issues/BUG-012.md) | Medium | Public Explore/Product navigation overflows narrow screens; Creator Cart also clips at375px. |
| [BUG-013](issues/BUG-013.md) | Medium | Search pagination disables Next while later results exist. |
| [BUG-014](issues/BUG-014.md) | Medium | Search retains old pages and loses browser-history page state. |
| [BUG-015](issues/BUG-015.md) | Medium | Collapsed Creator navigation loses accessible link names. |
| [BUG-016](issues/BUG-016.md) | Low | Account-menu Logout is skipped by keyboard navigation. |
| [BUG-017](issues/BUG-017.md) | Low | Landing Marketing description lacks an accessible field name. |
| [BUG-018](issues/BUG-018.md) | High | Reopening Article editor restores stale initial body; follow-up editing can overwrite saved text. |
| [BUG-019](issues/BUG-019.md) | Medium | Quiz total points input ignores edits and stays at100 in automatic mode. |
| [BUG-020](issues/BUG-020.md) | Low | Quiz fields reuse IDs; second question Points label focuses first question. |
| [BUG-021](issues/BUG-021.md) | Medium | Course reader displays saved Article JSON instead of formatted content. |
| [BUG-022](issues/BUG-022.md) | Low | Public authenticated notification button has no accessible name. |
| [BUG-023](issues/BUG-023.md) | Medium | Weekly availability appears saved, but deployed Consultation schema/API lack its persistence. |
| [BUG-024](issues/BUG-024.md) | High | Consultation prices lose cents in the deployed integer price column. |
| [BUG-025](issues/BUG-025.md) | Medium | Admin landing builder omits another Creator's profile shown by private preview. |

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
- Alignment of deployed Consultation weekly availability and price persistence before retesting BUG-023/024.

Unexecuted cases stay Not run until their actual variation or blocker is assessed. Prerequisites do not justify bulk Pass or Blocked classifications.

## Retained state and limits

OWNER-A is restored to CREATOR after the owner performed the temporary Admin switch. Restoration is verified in the browser and read-only database. Ten synthetic Products and three native Posts remain for retesting. Only the earlier Consultation and curriculum Course are Published. Original Products were inspected read-only and were not edited. No Admin Product mutation, purchase, upload, account creation, credential change or calendar write occurred in this continuation.

All old authoring sessions and the unsaved Storefront theme preview are gone. The Decimal Pricing workspace became blank after interruption and was closed; its database price remains18 and status Draft. Main Chrome769287843 retains the signed-in Creator Dashboard for continuation. Temporary Admin and Guest tabs are closed. The old Guest local Cart state remains unverified. Owner collections were previously empty and were not rechecked in this Admin continuation.

Restricted logs returned200lines (6 ERROR lines in the latest bounded sample) without retaining raw logs. Frontend connections, tunnel attempts and automatic approval review intermittently timed out, then recovered. Short-lived localhost-only tunnels verified final role/fixture state and closed after each check. The reader remains read-only with a10s statement timeout. The existing observer key and reader account remain the access mechanism.

Restricted logs and read-only DB were verified. Local repository revisions do not prove deployed revisions, which remain unknown. Most ledger timestamps record entry time rather than action start; see [run metadata](run.md).

Historical interruption: frontend and API HTTPS connections reset during Profile reload, then recovered. Restricted SSH and DB remained available. See [connectivity evidence](evidence/connectivity-blocker.json). No deployed revision changes have been confirmed.

Validation: documentation typecheck passed. Default npm build initially rejected Node18; the same Docusaurus build passed using the installed bundled Node24 runtime. Existing stale browser-data and update-check warnings remain; no dependencies or system permissions were changed. Ledger/CSV row counts match and all recorded evidence paths exist.

## Historical continuation notes through 1 October

The notes below describe earlier checkpoints and browser state, superseded by the current retained-state section above. Connectivity recovered after the recorded interruption. Browser and anonymous terminal API checks worked; protected direct API navigation remains blocked by the browser, without bypass or credential extraction.

Latest independent checks: all four owner private Product previews and reloads, missing-preview recovery, Course landing local controls/reset/reload, native description limit, public Storefront anchors and link copy, Guest and Creator legacy-route gates. Six undefined public/auth routes render blank; their intended fallback is unresolved. Native Profile input corrected the earlier automation-only Bio maximum observation; Bio clamps at250, while short Bio and invalid Tagline/Website validation still fail.

Pending approval: temporary persistent public Storefront theme save and restore. Current owner browser retains unsaved Light/#18c7a5/Friendly preview; public theme remains Dark/#ffbd41/Modern and no saved config row exists. No Product landing config was saved. Second identity and authenticated API mutation harness remain prerequisites for other journeys.

Latest continuation: restricted logs and read-only DB still work; Storefront and synthetic Course landing saved-config counts remain0. Marketing, local recovery, responsive controls, drawer keyboard behavior, search pagination/history and collapsed navigation were assessed. Creator Cart fits768/1440px but public header overflows375px. Initial Cart/breakpoint viewport attempts targeted another tab; corrected attempts supersede them, with actual target widths verified. No extra application defect was inferred from the invalid attempts.

The main owner tab again holds the exact unsaved Light/#18c7a5/Friendly preview for pending save approval. Temporary viewport overrides are reset. The separate Guest session retains one synthetic Cart item and an empty Wishlist.

Latest continuation: nested Course section/lesson creation, editing, ordering and read-only DB persistence were assessed in a working creation session. The Article overwrite reproduction affected only synthetic text; its original bold body was restored. Quiz wizard remains local with no persisted quiz definition. Guest canonical API correctly redacts protected Course body; owner reader retains it but displays raw JSON. Fresh notification session is empty. Course/Download/Consultation Overview portions were inspected; saved positive prices still fail.

Publication incident: the synthetic curriculum Course Publish request completed before automatic approval review rejected further publication work as lacking explicit approval for public test content. Current UI/API show PUBLISHED and no Unpublish action is available. Owner informed; retention approval pending. No further publication, hiding or deletion was attempted. Read-only checks continued.

Upload checkpoint: sixth synthetic Product is a Draft/free Download with one trimmed file group and0files, verified in read-only DB.201byte local text fixture prepared; specific upload approval pending, so no file selected or uploaded. Restricted log reader still succeeds with200lines; no raw logs retained. Download missing-file readiness link returns Files correctly. New public Course remains PUBLISHED. Anonymous canonical/legacy/full-owner-list APIs all redact its saved Article body.

Storefront read checkpoint: public page/API show only two Published synthetic Products; explicit public contact fields and email are empty. With featuredProductId null, public fallback features Course while fresh builder features Consultation and says all changes saved. This default preview/live consistency is Needs clarification. No Storefront save occurred; original unsaved theme preview remains in main tab.

Ledger integrity: JSONL/CSV attempt counts agree, all evidence paths exist, and each latest Fail/Blocked has its issue/reason. QA artifacts only changed; prior site typecheck/build passed. Full case catalog remains incomplete.
