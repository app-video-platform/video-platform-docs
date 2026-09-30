# Execution summary

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
