# Execution summary

## Persisted collection shape and duplicate IDs — 9 October 2026

Seventeen collection-storage browser assessments: nine Pass/eight Fail. CART-022 exact User duplicate-ID guard fully assessed: message/no request, repeat after reload and normal removal. CART-005 now partial: malformed JSON recovers in all four roles; valid wrong-shaped cart/wishlist data causes unhandled errors (new BUG-050). Actual browser storage read/write denial remains open. Original493:67 not started/239partial/187full;306 incomplete.50 issues; existing evidence file extended.

**2,248 assessed variations / 2,296 historical attempts**:1,992 Pass,184 Fail,61 Needs clarification,11 Blocked. Backend HTTP saw no commerce/enrollment request;11 grants/four orders unchanged. No cloud change.

Loopback frontend7767/port4329 retained (previous54153 confirmed exit0); actual backend42456/port52014 and private PostgreSQL51980 unchanged. Local User cart and wishlist restored empty with visible fixture controls; final empty normal Cart verified. Real cloud account untouched; tabs1/3 retained.

## Creator/Admin cart journeys — 9 October 2026

Eight additional role/cart browser assessments: five Pass and three Fail. New BUG-049: Creator free/paid checkout and corrected partial-enrollment retry persist access and clear cart, then navigate to unauthorized Library. Synthetic Admin free/paid checkout and partial recovery reach Library and survive reload. Cases remain partial. 493 originals: 69 not started, 238 partial, 186 fully assessed; 307 incomplete. 49 issues; existing evidence file extended.

**2,231 assessed variations / 2,279 historical attempts**: 1,983 Pass, 176 Fail, 61 Needs clarification, 11 Blocked. Actual local DB final: 11 ACTIVE grants, four PAID fake orders; User5/Creator3/Admin3 grants. No cloud changes or real charges.

Actual loopback fixture retained: frontend54153/port4329 (previous27209 confirmed exit0 after session refresh), backend42456/port52014, PostgreSQL51980. Real cloud account remains untouched. Private synthetic session file stays mode600. Local Creator cart empty; cloud tab1 and local tab3 retained for continuation.

## Actual backend partial failure and stale carts — 9 October 2026

Eleven new browser assessments pass. CART-026 is fully assessed against its explicit User price/hide/delete contract using actual local frontend/backend/PostgreSQL; seven variations include fresh-summary recovery. CART-007 is now partial; failure preserves one grant and the cart, restored retry adds the second grant without duplicates. First-time free-cart enrollment also passes. Original 493: 69 not started, 238 partial, 186 fully assessed; 307 incomplete. No new issue or evidence file.

**2,223 assessed variations / 2,271 historical attempts**: 1,978 Pass, 173 Fail, 61 Needs clarification, 11 Blocked. Actual local fake orders use server-current amounts; stale client amounts remain visible until refreshing the cart item. No real payment or cloud change.

Local fixture remains live for continuation: frontend handle27209/port4329, backend handle42456/port52014, private PostgreSQL port51980. Both terminal handles re-polled live; database readback succeeded. Real signed-in Creator tab1/cart and observer tunnel87598 preserved. Synthetic local session file remains private until final fixture cleanup.

## Actual backend enrollment and fake payment — 9 October 2026

Thirteen assessments: 11 Pass / 1 Fail / 1 Blocked. Actual local full App/backend/PostgreSQL prove non-owner free grants, typed Library reloads, FAKE PAID order/purchase grant/cart clear and duplicate-free retries. BUG-005 persists; Published Membership prerequisite prevented by schema. Original 493: 71 not started, 237 partial and 185 fully assessed; 308 incomplete. No new issue or evidence file.

**2,212 assessed variations / 2,260 historical attempts**: 1,967 Pass, 173 Fail, 61 Needs clarification, 11 Blocked. All new journeys retain local scope; synthetic session setup does not prove deployed login/cookies/providers/storage. Temporary fixture cleaned; cloud Creator session/cart preserved. Optional JVM shutdown recorder exited 1; successful independent live SQL supplies persisted-state proof.

## Cart identity and lifecycle validation — 8 October 2026

Seven local full-app browser assessments: **6 Pass, 1 Fail**. Distinct Creator IDs, Draft/Hidden status and missing Product ID correctly block checkout without a request. Missing status delegates one normal request to the controlled backend. CART-021, CART-023 and CART-025 remain partial: their frontend guards were exercised, while their required real backend environment and deployment parity were not established.

New **BUG-048**: a missing-ID entry is accepted into the cart but cannot be removed or moved to Wishlist; it survives reload and blocks checkout. Normal duplicate prevention works, while CART-022's deliberately duplicated-ID checkout guard still requires a fixture.

Current totals: **2,199 assessed variations**, 2,247 historical attempts (1,956 Pass, 172 Fail, 61 Needs clarification, 10 Blocked). Of the original 493 cases: 75 not started, 233 partial, 185 fully assessed; **308 incomplete**. There are 48 issues. Existing evidence batch extended; the only new repository file is BUG-048. Temporary fixture storage, cart, browser tab and server cleaned up. Deployed Creator session and original cart preserved.

## Signed-in deployed continuation — 8 October 2026

The built-in browser is signed in and testing resumed through normal app controls. Eight new assessments: **6 Pass, 2 Fail**. Same-account role/cart persistence and Creator self-purchase rejection pass. Saved Course, Download and Consultation summaries match read-only cloud records. Existing Membership pricing and blank saved-editor defects persist (BUG-002 and BUG-001); no new issue or evidence file.

**2,192 assessed variations**, 2,240 historical attempts: 1,950 Pass, 171 Fail, 61 Needs clarification, 10 Blocked. Of the original 493 cases: 78 not started, 230 partial, 185 fully assessed; **308 incomplete**. ENV-007 is partially assessed, because the existing browser profile retains local collection state and clean-profile/cross-device and remaining nested/media/config/library checks are unproved.

Account restored to CREATOR/Dashboard; original synthetic Consultation cart preserved. Restricted logs and replacement read-only database tunnel on port 15432 work. Chrome remains disconnected; the earlier Chrome local Course cart is uninspected.

## Checkout response and recovery checkpoint — 8 October 2026

Eleven additional local browser assertions pass. The current full frontend shows the distinct 400/409/422/503/network error messages, retains the cart, restores the checkout button and retries to the controlled PENDING result. A held response shows disabled Processing. FAILED, EXPIRED and REFUNDED response fixtures retain the cart. Missing session identity also retains the cart; a synthetic loopback checkout URL navigates correctly and browser Back restores the cart.

CART-011, CART-013, CART-014 and CART-016 remain partial. These results do not establish deployed provider configuration, durable orders, backend idempotency or server entitlements. No PAID/Library access check was executed.

Current coverage: **2,184 assessed variations** (1,944 Pass, 169 Fail, 61 Needs clarification, 10 Blocked), with 2,232 historical attempts. Of 493 original cases, 79 are not started, 229 are partial and 185 are fully assessed. **308 original cases remain incomplete; 47 issues are documented.** No new issue or evidence file. The local cart was emptied and verified after reload, and the temporary browser and server are closed. Signed-in Chrome and cloud diagnostic prerequisites remain pending.

## Cart boundary and deployed navigation checkpoint — 8 October 2026

Seven new assessments: **6 Pass, 1 Fail**. Five local browser checks pass using the full current frontend and a controlled HTTP service:

- Checkout rejects 21 items without a request; 20 items reach the service.
- A 503 response retains the cart and restores the checkout button.
- Reload and reordering the same items preserve the retry key.
- Changing the item set creates a new retry key.

CART-009, CART-010 and CART-015 remain partial. Their deployed backend checks and remaining role, expiry and account variations are outstanding. No payment provider or cloud mutation was involved.

Actual deployed Guest testing confirms that search overlaps the Explore link at 1280px and 1440px. Pointer clicks focus search; keyboard Enter navigates correctly. The existing [BUG-012](issues/BUG-012.md) report now includes this evidence.

Current coverage: **2,173 assessed variations** (1,933 Pass, 169 Fail, 61 Needs clarification, 10 Blocked), with 2,221 historical attempts. Of the 493 original cases, 83 are not started, 225 are partial and 185 are fully assessed. **308 original cases remain incomplete; 47 issues are documented.**

The local cart was emptied and verified after reload. Both temporary tabs and the server are closed, and the viewport is reset. The signed-in Chrome connection and cloud diagnostic prerequisites remain pending.

## Two-build pricing display checkpoint — 8 October 2026

PROD-032 completed with eight passing paired browser comparisons using identical controlled summaries and actual current frontend builds. Legacy Membership fallback appears only with the mock flag. Valid monthly/yearly metadata works in both; missing interval, explicit one-time Membership and three other Product types behave as specified. Mock build independently shows the missing-adapter warning; rendering continues after dismissing the development overlay. This is the catalog's local display contract, not deployed authentication/persistence or Membership commerce.

Current coverage:2166 assessed variations (1927Pass/168Fail/61Needs clarification/10Blocked),2214historical attempts;493 originals:86not started/222partial/185fully assessed,308remain.47issues. Existing evidence batch extended; no new issue or evidence file. Both temporary browser tabs and servers closed. Signed-in Chrome and cloud diagnostics prerequisites remain pending.

## Deployed Guest homepage animation and keyboard checkpoint — 8 October 2026

Nine additional assessments:5Pass/2Fail/1Needs clarification/1Blocked. Actual deployed public browser, independent Guest session; no controlled local responses. MKT-017 advances to partial. Current2158 assessed variations (1919Pass/168Fail/61Needs clarification/10Blocked),2206historical attempts;493 originals:87not started/222partial/184fully assessed,309remain.47issues.

[BUG-046](issues/BUG-046.md): initial Tab progression skips animated homepage controls and jumps from the hero to the footer. Later reveal and backward recovery work. [BUG-047](issues/BUG-047.md): animation inlineopacity1 overrides sibling dimming CSS. Revealed feature keyboard selection, mobile focus and default-size revisit pass. Signed-in roles/reduced-motion remain outstanding; decorative presentation parity needs clarification.

Chrome app cleanup remains pending: review rejected reading unrelated private foreground content and extension unavailable. SSH log access fails authentication with no loaded agent keys; database tunnel has no listener. Reconnection/key-loading/tunnel requests pending. Guest tabs closed and viewport reset; only two new issue files, existing evidence extended. No app fix, successful cloud DB/log query, provider action, commit or deployment.

## Deployed browser continuation — 8 October 2026

Returned to the actual signed-in Chrome app tab after the user clarified browser coverage. One additional Course self-purchase variation passes: a synthetic12.25 Course added through Explore is rejected with “You cannot buy your own product”; cart item/total retained. This is deployed UI evidence, with no direct API/local fixture response. Network/order/entitlement readback remains outstanding, so CART-024 stays partial. Setup navigation and already-known collection behavior are not counted again.

2149 assessed variations (1914Pass/166Fail/60Needs clarification/9Blocked),2197 historical attempts;493 originals unchanged:88not started/221partial/184fully assessed,309remain.45issues unchanged.

Browser user activity interrupted the subsequent reload and task-tab cleanup attempt. Last confirmed state is USER with one synthetic Course in cart; clearing it and restoring CREATOR/Dashboard are pending. Existing evidence batch extended; no new repository evidence file, app fix or cloud DB/log query.

Run in progress. [Progress](progress.md) and [session notes](session-notes.md) contain the current checkpoint. [JSONL results](results.jsonl) are authoritative; [CSV results](results.csv) can be opened in Excel.

## Notification rejection, recovery and presentation checkpoint — 8 October 2026

2148 distinct assessed variations (1913Pass,166Fail,60Needs clarification,9Blocked);2196 historical attempts. Of493 originals:88not started,221partial,184fully assessed;309remain. Forty-five issue reports exist.

Twenty-five additional assessments add23Pass/2Fail. LOCAL-003 completes its frontend failed-mutation notification contract asPass; LOCAL-002 completes its menu/read-state contract asFail. LOCAL-001 advances but remains partial for its normal authoring/backend/media journey.

Current store/thunks/services/listeners/dropdown run in a real browser with controlled loopback503/200/201 responses. Seven failed Product/image/section/lesson requests leave the list empty. Seven successful requests append exact corresponding unread messages. Three later failures preserve all prior seven entries; three retries append one each. Reload clears the ten-entry session list. These results do not establish actual upload, backend persistence or delivery.

[BUG-045](issues/BUG-045.md): unread entries render no state marker. A fixture-only reducer diagnostic creates a marker only after marking an entry read, but it has zero height and transparent background. The normal menu has no mark-read/remove controls.

[BUG-027](issues/BUG-027.md) now includes the actual notification dropdown: titles/messages areRGB248,249,250 on whiteRGB255,255,255, reproducing the previously recorded Cart/Wishlist contrast problem. Existing unnamed-trigger BUG-022 is not duplicated.

Twenty actual XHR observations and24 browser snapshots are retained in the existing browser evidence batch. Only BUG-045 is a new file. Temporary tab/server closed; no backend/database server started, cloud/account/provider action, app fix, commit or deployment.

## Frontend/backend CSRF interoperability checkpoint — 8 October 2026

2123 distinct assessed variations (1890 Pass,164 Fail,60 Needs clarification,9 Blocked);2171 historical attempts. Of493 originals:90 not started,221 partial,182 fully assessed;311remain. Forty-four issue reports exist.

Forty-six new assessments add44Pass/2Fail. SEC-005 completes as Fail: actual frontend clients and real backend HTTP/security/database verify four principals, canonical/leading-slash URLs, profile/Product/enrollment/checkout, missing-CSRF rejection and restored retry. Supported operations succeed; User Product creation and Admin self-target creation are legitimate denials. Corrected Admin creation for a Creator succeeds. Six current profile reads carry credentials and the force-CSRF header and return exact persisted titles.

[BUG-044](issues/BUG-044.md): registration's current cross-origin client omits cookies while supplying a CSRF header. A canonical credentials-enabled control reaches field validation; a slash-prefixed control skips the required header and is rejected. Invalid payloads prevent account creation. AUTH-005 and PROF-019 remain partial for their full normal browser flows.

There are97 actual HTTP observations including35 successful preflights. The temporary backend permits only the fixture's loopback frontend origin; synthetic session/cookie setup does not establish deployed CORS, login or Secure/SameSite parity. PostgreSQL readback confirms4 seeded users,6 Courses,3 entitlements and6 FAKE/PENDING orders with zeroPAID. No payment URL is followed and storage/email mocks receive zero calls.

The initial seed used a nonexistent common Product table; the temporary fixture was corrected to the real Course table and restarted with a fresh cleaned database before any browser test. Only the two unsupported Admin target requests were corrected later. No application failure is inferred from fixture setup. Synthetic cookies cleared, tab/proxy/backend closed and both initial/final PostgreSQL clusters stopped with36 domain tables empty/40 migrations retained. Existing evidence files extended; only BUG-044 is new. No app fix or real/cloud identity, role, Product, provider, commit or deployment change.

## Media ownership, capacity and browser request checkpoint — 8 October 2026

2077 distinct assessed variations (1846 Pass, 162 Fail, 60 Needs clarification, 9 Blocked); 2125 historical attempts. Of493 originals:93 not started,219 partial,181 fully assessed;312 still need checks. Forty-three issue reports exist.

This continuation saves148 passing API/database assessments and15 additional browser/transport checks (11Pass/4Fail). Five principals × four Product types × seven media endpoints verify owner/Admin access, nonowner Creator/User403 and Guest401, unchanged denied metadata and zero denied storage calls. Eight gallery capacity flows accept20, reject21 without mutation, free a slot and append a new image. These use real migrated PostgreSQL/security/transactions with mock storage, not deployed object transport.

[BUG-042](issues/BUG-042.md): real Uppy selections through current frontend services transmit valid PNG/MP4 bytes as `application/json`. Three focused actual backend requests confirm400 MIME rejection before storage. Explicit media MIME controls succeed in the local browser fixture.

[BUG-043](issues/BUG-043.md): after successful gallery upload and removal, selecting the same file is silently filtered out. The gallery stays empty with no POST; a fresh component accepts the identical file. The diagnostic MIME control bypasses BUG-042 only in the temporary fixture; no application fix is made.

Zero-byte PNG/MP4 selections reach the server and display an inline400 while retaining saved media. They are not locally size-rejected. Controlled responses and prior actual backend validation evidence are distinguished; deployed reload/Spaces proof remains outstanding. MEDIA-003/005/011/016 advance but remain partial. No original is newly completed in this batch.

Existing evidence batches are extended; only two new issue files are added. Temporary browser tab and webpack server are closed. Both new PostgreSQL clusters are stopped with36 domain tables empty and40 migration records retained; both JVMs exit0. No cloud resource, live account, provider, application source, commit or deployment is changed. The signed-in Chrome tab was successfully observed as Creator/Dashboard on7 October; the extension connection remained absent.

## Media validation and storage recovery checkpoint — 7 October 2026

1914 assessed variations (1687 Pass, 158 Fail, 60 Needs clarification, 9 Blocked); 1962 historical attempts. Of 493 originals: 97 not started, 215 partial, 181 fully assessed; 312 remain. Forty-one issue reports remain.

Sixty-four additional passing groups cover owner/Admin × four Product types: image MIME/size validation for thumbnail and gallery, promo MIME/size validation, storage PUT failure/retry, best-effort cleanup DELETE failures, thumbnail removal and promo removal. Exact10MiB/100MiB boundaries succeed; zero, one byte over, unsupported and missing MIME reject without changing prior metadata or invoking upload. These are actual API/security/transaction/database checks with mock storage, not deployed file selection, CDN delivery or playback.

Fifteen initial groups exhausted the temporary768MiB runner heap. Disabling its request printing and repeating only affected groups with fresh fixtures and the same heap yielded allPass; forty-nine prior passing groups are retained. Initial diagnostics and both fixture sources remain in the existing evidence file. There are1112 recorded request observations overall,904 within the final passing groups. Runner resource errors are not new application failures or duplicate assessed variations.

MEDIA-002/008/009/010/012 advance to partial. No original is newly marked complete because deployed browser/storage requirements remain. Both JVMs exited0; all36 fixture tables are empty,40 migrations retained and private PostgreSQL stopped. No application fix, cloud mutation, new browser/account action or new issue file.

## PostgreSQL media ordering and authorization checkpoint — 7 October 2026

1850 assessed variations (1623 Pass, 158 Fail, 60 Needs clarification, 9 Blocked); 1898 historical attempts. Of 493 originals: 102 not started, 210 partial, 181 fully assessed; 312 remain. Forty-one issue reports exist.

This batch adds92 executed API/database assessments:72Pass and20Fail, with300 actual request observations. One additional Hidden-Library prerequisite is Blocked and was not executed. Four media originals advance but remain partial because their deployed browser/Spaces requirements are not covered by mock storage.

[BUG-040](issues/BUG-040.md): complete two/three-image gallery swaps return400 under the immediate PostgreSQL position uniqueness constraint. Sixteen role/type swaps fail; unchanged-order, invalid-permutation, middle-deletion normalization and missing/foreign association controls pass.

[BUG-041](issues/BUG-041.md): a distinct nonowner Creator's Product DELETE returns403 and rolls back database metadata, but has already invoked storage deletion for the owner's gallery keys. Four type variants fail. Eight owner/Admin controls succeed. Storage is mocked: no actual cloud object was deleted, and no real storage consequence is claimed.

The User Library check found no Hidden entitled fixture for the current account, so ACCESS-010 remains unexecuted for its target journey. No enrollment or Product lifecycle changes occurred. The account is restored to Creator at Dashboard. Both local API JVMs exited0; all36 fixture tables are empty and the isolated PostgreSQL cluster is stopped. Existing evidence files are extended, with two new necessary bug reports. No application fix, deployment or new cloud DB/log query.

## Catalog response and customer navigation checkpoint — 7 October 2026

1757 assessed variations (1551 Pass, 138 Fail, 60 Needs clarification, 8 Blocked); 1805 historical attempts. Of 493 originals: 107 not started, 205 partial, 181 fully assessed; 312 remain.

Thirty additional variations include 27 Pass and three Fail. DISC-002/003 and PROD-004 complete their explicit controlled frontend response contracts as Pass. PROD-007 completes as Fail: late successful responses for the previous Product replace the current Overview, causing a false Product not found state. [BUG-039](issues/BUG-039.md) records a reproduction with exactly one request per Product and the separate premature loading-clear symptom. Thirty-nine issue reports now exist.

Actual local browser checks cover Explore empty/delayed/failed/reloaded responses across four synthetic roles; Creator management loading/error/Retry; empty Course and Download outlines; ID changes; reversed and ordered request completion; and recovery. These use actual router/providers/store/components with controlled Axios responses. Their completion scope does not establish deployed authentication, persistent backend fixtures or injected cloud transport failures.

Chrome's extension connection is still unavailable, but native controls successfully selected the existing signed-in Creator tab. Two additional deployed customer checks pass: Main Buyer to Customer01 through the list, then target reload. CUSTOM-010 remains partial for deliberately delayed/concurrent requests and failure recovery. The real tab is restored to Dashboard. No application fix, role change, cloud mutation, provider operation or new DB/log query. The existing evidence file is extended; only the new bug report creates a repository file.

## Migrated PostgreSQL cascades checkpoint — 7 October 2026

1727 assessed variations (1524 Pass, 135 Fail, 60 Needs clarification, 8 Blocked); 1775 historical attempts. Of 493 originals: 111 not started, 205 partial, 177 fully assessed; 316 remain.

Twenty passing owner/Admin scenarios complete ENV-011 on a separate local PostgreSQL15.19 database with all forty Liquibase migrations and Hibernate schema generation disabled. Supported API deletions remove Course quizzes/attempts/lessons/sections, Download metadata/groups, native Membership metadata/feed and included-Product references. After a local fake full refund, permitted Course deletion preserves the buyer's immutable Order items and Creator order/report ledger. These are API integration results; no cloud or complete browser journey is claimed.

All 244 HTTP observations have expected statuses; 190 belong to the final passing scenarios. Six initial Course assertions overlooked the automatically created Draft section and were corrected and repeated with fresh fixtures. Their original observations are retained as harness diagnostics, not application failures or duplicate assessed variations. External storage/email mocks had zero interactions. All36 fixture tables were emptied, both JVMs exited0, and the isolated database was stopped. Thirty-eight issue reports remain.

Browser work is paused because the active Chrome page changed to unrelated private work content. Automatic approval review rejected further browser inventory inspection; a request to select the existing Video Platform tab is pending. No unrelated page was manipulated.

## Nonpublished public access checkpoint — 7 October 2026

1707 assessed variations (1504 Pass, 135 Fail, 60 Needs clarification, 8 Blocked); 1755 historical attempts. Of 493 originals: 112 not started, 205 partial, 176 fully assessed; 317 remain.

Five actual browser checks complete ACCESS-005 as Pass. Four existing synthetic Course/Download records are confirmed as Draft/Hidden in their owner management pages; all four public Product URLs show the exact nonpublic availability message. The Published curriculum Course renders normally as a positive control. These complete the missing browser assertions alongside the earlier successful 24 Product/access API pairs across three states and four access principals. The API and deployed browser fixtures are independent; this is not a new purchase, file-delivery or complete learner journey.

Chrome's dedicated browser connection was unavailable after reconnection, but native accessibility and keyboard controls reached the signed-in Creator session. Eleven masked page observations are appended to the existing browser evidence. The original tab is back at Dashboard. No Product/status, entitlement, role, profile, account, payment or provider change; no new database/log query or app fix. Thirty-eight issue reports remain.

## Onboarding and drawer checkpoint — observed 4 October, finalized 7 October 2026

1702 assessed variations (1499 Pass, 135 Fail, 60 Needs clarification, 8 Blocked); 1750 historical attempts. Of 493 originals: 112 not started, 206 partial and 175 fully assessed; 318 remain.

The interrupted batch retained 98 new assessments: 82 Pass, twelve Fail and four Needs clarification. It includes 69 onboarding input trials across three synthetic roles, successful-response and rejected-save controls, Skip/Continue navigation, accessible field/error inspection and 23 drawer states. These are additional checks on unfinished originals; no original is newly marked complete.

New issues: [BUG-035](issues/BUG-035.md), normal onboarding URL renders role home; [BUG-036](issues/BUG-036.md), onboarding labels/errors lack programmatic associations; [BUG-037](issues/BUG-037.md), rejected saves still advance the wizard; [BUG-038](issues/BUG-038.md), overlapping shared drawers collide in names and break Escape cleanup. Thirty-eight issue reports now exist. The onboarding route symptom was also observed through a read-only deployed navigation/reload. Other new failures use actual components with isolated synthetic responses; a deployed overlapping-drawer flow was not reproduced.

PROF-001/002/003, UX-005 and UX-016 remain partial. A diagnostic component route cannot establish normal-route persistence, logout/login or cloud role behavior. Existing browser evidence was extended; four necessary issue reports complete its previously saved ledger references. No application fix, account/role change, provider operation or new test execution is claimed by this documentation recovery.

## Read contracts and controlled browser checkpoint — 4 October 2026

1604 assessed variations (1417 Pass, 123 Fail, 56 Needs clarification, 8 Blocked); 1652 historical attempts. Of 493 originals: 116 not started, 202 partial, 175 fully assessed; 318 still need checks.

This continuation adds 126 attempts and 125 distinct variations. Seven originals become fully assessed: PAPI-009/010/011, ADMIN-014 and STORE-021 Pass; PAPI-028 Needs clarification; MKT-010 Fail. Five local API methods pass with 394 HTTP observations. Typed/canonical parity, owner-list access filtering, invalid mutations and Creator-versus-Admin audit behavior are verified. The old blocked ADMIN-014 deployed attempt remains historical; a new attempt independently executes the original API requirement with disposable fixtures, without claiming browser recovery.

Twenty controlled browser landing cells use the actual current router/components. Empty About/Creator sections and positive controls cover four Product types on public pages and private previews. Optional profile/config failure presentation is checked for four synthetic roles; DISC-016 remains partial for broader deployed checks. A separate deployed Creator Course read/reload verifies its missing-image placeholder. No real account, role or Product is changed.

New [BUG-034](issues/BUG-034.md) records the contact agreement tick remaining visible after the native checkbox is unchecked, plus keyboard skipping of the hidden control. Four role fixtures reproduce it; thirty observations cover valid form inputs and unchecked/checked submissions. The current local handler generates no contact request; intended future consent enforcement remains unspecified. This is a local frontend reproduction, not a deployed or consent-persistence claim. Thirty-four confirmed issues. Existing evidence batches extended; one new issue file and one temporary local screenshot, no new repository evidence file or application fix.

## Publication, hidden lifecycle and unavailable API checkpoint — 4 October 2026

1479 assessed variations (1302 Pass, 119 Fail, 49 Needs clarification, 9 Blocked); 1526 historical attempts. Of 493 originals: 119 not started, 206 partial, 168 fully assessed; 325 still need checks.

Ninety-six new assessments: 88 Pass and eight Fail. AUTH-017, LOCAL-008, PROD-024 and PROD-029 are fully assessed as Pass; PROD-026 is fully assessed as Fail for existing [BUG-030](issues/BUG-030.md). PROD-025 advances through missing-file/path rejection and positive controls, but remains partial for actual browser readiness comparison. Six unique local methods produce 759 authoritative HTTP observations; five methods pass and the valid Consultation retry assertion fails. Sixteen counted fixture tables are empty after both invocations. The initial review metadata SQL and assumed Membership rejection status were harness corrections, superseded by passing focused runs; they are not application issues. Existing evidence extended; 33 confirmed issues remain. No application fix, deployed mutation or new evidence file.

The newly referenced customer JSON tab is absent from the connected Chrome inventory; one exact URL navigation renders Chrome `ERR_BLOCKED_BY_CLIENT`. Earlier CUSTOM-009 wire evidence remains valid and is not counted again. No new database or server-log verification is claimed.

## Admin, owner search and Consultation API checkpoint — 4 October 2026

1383 assessed variations (1214 Pass, 111 Fail, 49 Needs clarification, 9 Blocked); 1430 historical attempts. Of 493 originals: 125 not started, 205 partial, 163 fully assessed; 330 still need checks.

Five original API cases now fully assessed: ADMIN-006/013 and CONS-005/007 Pass; DISC-012 Fail for existing [BUG-013](issues/BUG-013.md). Seventy-nine assessments include owner/role/sort matrices, invalid Admin payload isolation and Consultation partial/clear/calendar derivation. Six unique methods produce 295 authoritative HTTP observations; owner-search pagination deliberately remains a failing assertion. All sixteen fixture tables are empty after the accepted runs. Existing evidence extended; no new issue, application fix, real account/role change or cloud/browser operation. Thirty-three confirmed issues remain.

## Inline Storefront profile checkpoint — 4 October 2026

1304 assessed variations (1144 Pass, 103 Fail, 48 Needs clarification, 9 Blocked); 1351 historical attempts. Of 493 originals: 130 not started, 205 partial, 158 fully assessed; 335 still need checks.

Twelve browser assessments add six Cancel checks, title rejection/save/reload, Creator/Guest public presentation and original-title restoration. STORE-011/012 remain partial. New [BUG-033](issues/BUG-033.md) records the old failure alert remaining after a successful retry; 33 confirmed issues. Original title restored and verified on all three views. No implementation fix. The latest referenced customer JSON tab was absent from Chrome inventory; its earlier verified response was not counted again. A later reload became blank, then the Creator Dashboard recovered. Both read-only database rechecks timed out; no fresh database/log verification is claimed.

## Membership API checkpoint — 4 October 2026

1292 assessed variations (1133 Pass, 102 Fail, 48 Needs clarification, 9 Blocked); 1339 historical attempts.493 originals: 132 not started, 203 partial, 158 fully assessed; 335 still need checks.

65 assessments:64 Pass/1 Needs clarification;8API originals complete. Metadata/feed/identity/permissions/basefields validated; browser/provider Membership cases remain.32 issues unchanged. No app or cloud change.

## Admin mutation and deletion checkpoint — 4 October 2026

1227 assessed variations (1069 Pass, 102 Fail, 47 Needs clarification, 9 Blocked); 1274 historical attempts.493 originals: 140 not started, 203 partial, 150 fully assessed; 343 still need checks.

37 new passing checks complete3 original API cases: PAPI-006/014/015. Final4/4 methods,414 HTTP observations with migration collection uniqueness.32 issues unchanged; no application or cloud change. Full catalog remains incomplete.

## File-contract checkpoint — 4 October 2026

1190 assessed variations (1032 Pass, 102 Fail, 47 Needs clarification, 9 Blocked); 1237 historical attempts.493 originals: 143 not started, 203 partial, 147 fully assessed; 346 still need checks.

12 new aggregate checks,9 Pass/2 Fail/1 Needs clarification. New BUG-032 identifies foreign storage-key acceptance and signing delegation in isolated backend;32 confirmed issues. Nine original deployed-service cases now partial, with real provider/browser steps outstanding. No application fix or cloud change.

## Saved-order checkpoint — 4 October 2026

1178 assessed variations (1023 Pass, 100 Fail, 46 Needs clarification, 9 Blocked); 1225 historical attempts. Of493 originals: 152 not started, 194 partial, 147 fully assessed. 346 originals still need checks.

38 checks recorded; new BUG-031 confirms saved Storefront/landing reorder failures. Completes two originals as Fail and one as Pass. Successful Save/Reset/navigation and Guest public persistence recorded separately.31 confirmed issues; no application fix. Retained test settings documented; Product metadata/profile unchanged.

### Previous landing checkpoint

## Landing browser checkpoint — 3 October 2026

1140 assessed variations (995 Pass, 90 Fail, 46 Needs clarification, 9 Blocked); 1187 historical attempts. Of 493 originals: 156 not started, 193 partial, 144 fully assessed. 349 originals still need checks.

Eight passing browser checks complete LAND-001/004; two failing checks reconfirm existing BUG-002 price display on current Download/Membership fixtures. No new issue or application fix. Creator Dashboard restored; original Storefront appearance retained. Existing evidence batches extended.

### Previous Storefront checkpoint

## Storefront and landing checkpoint — 3 October 2026

1130 assessed variations (987 Pass, 88 Fail, 46 Needs clarification, 9 Blocked); 1177 historical attempts. Of 493 originals: 156 not started, 195 partial, 142 fully assessed. 351 originals still need checks.

65 new passing checks. Completes five API cases and two real browser cases; local API proof stays separate from browser journeys. No new confirmed issue or application fix. Original Storefront appearance restored; one new configuration row retained, Products/profile unchanged. Existing evidence batches extended.

### Previous reporting checkpoint

## Exact reporting checkpoint — 3 October 2026

1065 assessed variations (922 Pass, 88 Fail, 46 Needs clarification, 9 Blocked);1112 historical attempts.493 originals:163 not started,195 partial,135 fully assessed.358 originals still need checks.

25 new passing checks: seven local read-model methods and deployed User-route denial/Creator restoration. API and browser scopes remain separate; incomplete controlled browser journeys remain partial. No new issue, application fix or repository evidence file.

### Previous API checkpoint

## Reporting API checkpoint — 3 October 2026

1040 assessed variations (897Pass,88Fail,46Needs clarification,9Blocked);1087 historical attempts.493originals=163not started/195partial/135fully assessed (122Pass,6Fail,7Needs clarification);358 still need execution/additional checks.

30 new passing API variations;8/8 isolated backend methods. Completes six original API cases for validation/isolation/expiry; role denial API portions advanced separately from browser journeys. No new issue, codefix or evidence file. Current live role/cloud fixturedata unchanged.

### Previous reporting checkpoint

## Reporting continuation checkpoint — 3 October 2026

1010 assessed variations (867 Pass, 88 Fail, 46 Needs clarification, 9 Blocked); 1057 historical attempts. Originals: 169 not started / 195 partial / 129 fully assessed (116 Pass, 6 Fail, 7 Needs clarification); 364 still need execution/additional checks.

38 passing attempts; 37 new distinct variations. Completes CUSTOM-009 and SALES-007; actual browser Sales controls,150 visible Analytics tooltips, three-period totals/rank/payment cards and Dashboard links reconcile with retained cloud fixtures. Customer wire blocker resolved through the human-opened tab. No new issue, application fix or evidence file. Analytics/Sales wire views still require normal user-opened tabs.

### Previous checkpoints

## Populated cloud browser checkpoint — 3 October 2026

973 assessed variations: 829 Pass, 88 Fail, 46 Needs clarification and 10 Blocked. 1019 historical attempts. Of493 originals: 173 not started, 193 partial, **127 fully assessed** (114 Pass, 6 Fail, 7 Needs clarification). **366 originals still need execution/additional checks.**

This deployed browser batch adds 23 assessments (22 Pass, one Blocked) and completes CUSTOM-002/005/006/007/008 and SALES-005. CUSTOM-005 remains Fail for the existing separate literal-null identity issue. Five-page customer sorting/refinements, the main fictional buyer summary/tabs/purchase/access records, latest20 activity reconciliation, five order drawers, reload/history/query preservation and all four Sales periods are backed by real cloud fixtures and read-only SQL. Direct API response navigation was blocked; wire/window boundaries remain partial. No new issue or application fix. One [populated reporting batch](evidence/browser-populated-reporting-batch-2026-10-03.json) and one [purchase-history screenshot](evidence/customer-purchase-history-2026-10-03.jpg) retain the continuation.

The user inserted and authorized retaining 25 disabled fictional User accounts,32 Hidden Products,29 FAKE historical Orders and77 access records. Existing reader permissions remain read-only. No provider/storage/email/payment operation, role change or original record update. See [fixture notes](fixtures.md). Testing remains incomplete.

### Previous Customer checkpoint

950 assessed variations: 807 Pass, 88 Fail, 46 Needs clarification and 9 Blocked. The ledger contains 996 historical attempts; three latest Not run association corrections are excluded from assessments.

The 493 original cases comprise 176 not started, 196 partial and **121 fully assessed** (109 Pass, 5 Fail, 7 Needs clarification). **372 original cases still need execution or further checks.** Fully assessed includes failures and clarifications; this is not a bug-free result.

The latest browser continuation records ten assessments: nine Pass and one Fail. CUSTOM-003 is fully assessed: all six unsupported relationship/membership filters yield zero from populated controls, while Buyer/No membership retain the actual customer. Customer detail tabs, free-source labels, search/refinement and four reporting views add scoped portions. [BUG-003](issues/BUG-003.md) now also records the literal-null name in Customers, confirmed against read-only surname field-shape data. No duplicate issue. One [Customer batch](evidence/browser-customer-relationship-batch-2026-10-03.json) and one cropped, contact-free screenshot retain these results.

The latest isolated API batch completes 26 originals: QUIZ-001–015/017, CONTENT-008/010/011/016–019 and LEG-001–003. Twenty-four Pass; CONTENT-008/010 need clarification about title/position validation consistency and retained Quiz definitions after type conversion. One [feature batch](evidence/backend-quiz-nested-authoring-batch-2026-10-03.json) retains exact sources, 926 HTTP observations, catalog matrices, frontend payload reconciliation and a focused three-method completion audit. No new issue.

These checks use real Spring filters/controllers/services/JPA with disposable H2 and verified-unused external-service mocks. They establish the specified local API behavior, not deployed PostgreSQL, browser editing or Spaces/provider delivery. All 26 matrix methods and three focused audit methods pass; fixtures and JVMs are cleaned. No application implementation or deployment changed.

Real browser testing resumed: the User single-free-Course cart journey passes. Cart cleared and Library opened; the card persisted after reload. Read-only SQL confirms one ACTIVE grant and zero buyer orders. [Browser evidence](evidence/browser-free-course-batch-2026-10-03.json) and one [Library screenshot](evidence/browser-free-course-library-2026-10-03.jpg) retain the result. CART-006 and ACCESS-007 remain partial for their wider matrices. The account owns this Course, so this does not establish the non-owner DISC-018 access transition. Creator role and Dashboard are restored; synthetic grant retained.

API evidence does not count as completed browser journeys. Pending Admin elevation, local-storage review guidance, separate buyer and cloud prerequisites remain separate. The objective remains active and incomplete.

### Previous Product checkpoint

911 assessed variations: 771 Pass, 87 Fail, 44 Needs clarification and 9 Blocked. The ledger contains 954 historical attempts; three latest Not run association corrections are excluded from assessments.

The 493 original cases comprise 209 not started, 190 partial and **94 fully assessed** (84 Pass, 5 Fail, 5 Needs clarification). **399 original cases still need execution or further checks.** Fully assessed includes failures and clarifications; this is not a bug-free result.

Latest Product continuation fully assesses 21 originals: PAPI-001–005, 007–008, 012–013 and 016–027. Eighteen Pass; PAPI-026/027 Fail for [BUG-030](issues/BUG-030.md); PAPI-012 Needs clarification about intended handling of invalid strings. Current isolated backend ownership, role denials, nested preservation, full PUT, deletion guards, publication errors/rollback and correction controls are covered. One [Product batch](evidence/backend-product-ownership-publication-batch-2026-10-03.json) contains sources, observations, outcomes and limitations.

The preceding content/session/role/profile continuation fully assessed 19 originals and four API portions of browser cases. Seventeen Pass, PROF-013 Fail for [BUG-029](issues/BUG-029.md), SEC-012 Needs clarification about the developer switch allowing sole-Admin demotion. The [content and session batch](evidence/backend-content-session-batch-2026-10-03.json) records actual loopback HTTP authentication/refresh/CSRF checks, content/file denials, caller isolation and profile/social validation. ACCESS-005/007 and SEC-010/011 remain partial for browser assertions. The profile read completion audit passed; no real role or profile changed.

Two new findings have scoped evidence: profile DTO limits exceed read-only-confirmed deployed column widths (BUG-029), and replacing an existing Consultation weekday violates its uniqueness rule in the isolated API (BUG-030). Deployed API versions are unknown; neither rejected mutation was attempted on the live account. Java17 temporary harnesses use real filters/controllers/services/JPA, disposable H2 and unused external-service mocks. No Spaces delivery, provider operation, browser journey or PostgreSQL reproduction is inferred from those local outcomes.

Historical association corrections for three Guest GETs mistakenly attached to PAPI-008 remain unchanged in the append-only ledger. They are retired associations, not pending PUT checks, so they no longer force the newly completed PUT matrix to Not run in the coverage projection. No recorded outcome was deleted or rewritten.

No implementation fixes, deployment, live content/order/profile/role change or new routine screenshots. Browser untouched in these two API continuations; the last verified real state remains Creator Dashboard. Pending Admin/local-storage action guidance and cloud/browser prerequisites remain separate. The objective remains active and incomplete.

### Previous payment checkpoint

867 assessed variations: 732 Pass, 84 Fail, 42 Needs clarification and 9 Blocked. The ledger contains 909 historical attempts; three latest Not run corrections are excluded from assessments.

The 493 original cases comprise 248 not started, 191 partial and 54 fully assessed (49 Pass, 2 Fail, 3 Needs clarification). **439 original cases still need execution or further checks.** A recorded variation is not a completed original case; blocked entries were not executed.

Latest continuation fully assesses15 more originals:PAY-001/013/014/016–026 andACCESS-002.14 Pass;PAY-024 Needs clarification for intended fake-payment deployment policy. All26 PAY cases now have their explicit isolated API/service/source matrices assessed. No new confirmed defect. One feature batch contains sources, configuration matrices, outcomes and limitations. See [payment-state evidence](evidence/backend-payment-state-batch-2026-10-03.json).

Coverage includes payment/refund/failure reporting and protected-access consequences, terminal-transition rejection, repeated-event stability, read/replay expiry, concurrent re-enrollment across roles, authoritative prices/overflow, six simulation profile/flag cells and real-provider absence. A reviewed loopback-only server proves actual automatic expiry without order reads and normalized-event deduplication/mismatch rejection through the service seam and actualHTTP reads. TemporaryH2 widening is explicitly only a legacy excess-precision fixture. All isolated contexts cleaned; listener gone; real browser/account/droplet unchanged. No API proof is substituted for browser or cloud-specific tests.

Previous continuation completed15 API catalog cases with15 passing aggregate matrices: PAY-002/003/004/005/006/007/008/009/010/011/012/015 and ACCESS-001/003/006. All explicit case role/input/assertion variations are covered in the catalog-authorized isolated backend environment. Separate browser/cloud cases remain incomplete. One feature batch contains exact temporary harness sources/hashes, individual observations, provenance and scoped assertions.

The harness runs real Spring Boot controllers/services/repositories and the security filters with synthetic JWT/CSRF cookies; no real session values are extracted. Java17 and the repository test profile use H2/Hibernate create-drop with Liquibase off, commerce enabled/fake/automatic success false. Per-test SDK/mail/Google mocks verify no operations. This proves local API behavior; it does not establish deployed PostgreSQL races/schema constraints, cloud financial configuration, real provider/Spaces/mail or browser journeys.

Coverage includes exact1/20-item Course/Download/Consultation pending totals/items, DTO/key boundaries, unchanged replay snapshots after supported title/price/Hidden PATCHes, buyer key isolation, two threaded identical retries, rollback on semantic rejection, owner/Admin self-purchase rejection, buyer/Admin/seller/unrelated/Guest order reads,18 null/zero enrollment combinations across three roles/types,12 role/price/lifecycle rejections and the six access-boolean states. An item completion audit added exact IDs/names/types/unique item IDs/line totals and subtotal checks to PAY-002 before scoring it.

Existing14 backend integration tests passed as setup/supporting evidence. Initial extended run passed13 matrices; two harness errors (nonexistent entitlement wire status and detached lazy item access) were corrected and only those two rerun. Both passed. They are not app defects. No new issue this batch. All processes ended0 and disposable H2 data was cleaned; no backend/frontend implementation or deployment changed.

A normal browser GET to the documented API URL was blocked by the client, then a page-read approval check timed out. No authenticated API response/status was obtained or inferred. The temporary tab was closed without reading its contents. Original Creator Dashboard remains unchanged. Pending real Admin elevation/local-storage browser guidance is unchanged. These API harness tests are independent of the unexecuted storage browser action.

Previous continuation adds13 assessments:10 Pass,2 Fail and1 Needs clarification. Real deployed Creator/User Demo sequences and reset, Pricing selector/wrap/arrow/reload matrix, Help and Contact FAQ controls are recorded in one marketing batch. Medium BUG-028: Contact purchase-history FAQ is marked expanded but has zero-height answer on initial entry; closing/reopening reveals it. Two visits per role confirm it. Prior activation passes stay valid. An exploratory duplicate-ID measurement and incorrect uppercase heading locator are explicitly excluded from product-defect conclusions.

ENV-013 also adds two local serialization portions:11 assertions on the actual helper and four reporting client functions, using a network-free request recorder. Literal symbols/Unicode/page0 and cleared-filter omission pass. Real UI/Admin/session/server-default checks remain; parent stays partial.

ENV-002 adds a scoped anonymous HTTP docs-path observation: /docs/qa-current-state-probe serves the main SPA shell, not established documentation proxy content. Intended behavior and an isolated deployment matching source redirect configuration need clarification. This does not establish that the separate Docusaurus account-menu link is broken.

OWNER-A returned to Creator Dashboard with browser/read-only DB verification. No Product, cart/wishlist, purchase, agreement, support, provider or credential change. No Admin elevation. Its remaining role checks await action-time confirmation. Local storage harness compiled, but automatic browser approval review disconnected before opening it; no storage test ran or was scored. The owned4319 server exited0 and no listener remains. Storage retry awaits user guidance; do not bypass the review failure.

Previous continuation adds 18 assessments: 16 Pass and 2 Fail. CART-017 is fully assessed with a failure for menu readability. Isolated browser-local collections cover 0/1/99/100 items, exact lists/prices, badge omission/99/99+, both menu destinations, and Creator/Admin shortcut suppression. Real deployed User checks cover empty menus and both destinations. Enter/Space/Tab/Escape/outside dismissal add two UX-006 portions; broader focus/arrow and dropdown families remain partial. Long-menu pointer automation missed offscreen buttons; successful keyboard navigation is established, with no extra navigation defect inferred.

New Medium defect BUG-027: deployed Cart/Wishlist empty text is almost white on white panels; local populated names/prices have the same problem. Deployed rendering and computed colors are retained in one feature batch and one defect screenshot. Both destination buttons work. The original account was briefly switched to User, verified through read-only DB, then restored only Creator and verified on /app Dashboard. No real collection item changed, checkout/payment attempted, or Admin elevation performed.

ENV-001 is fully assessed for its HTTP hosting/base-path boundary. Five catalog deep links serve the SPA shell on initial and repeated no-cache GETs, preserving path/query. Legacy hosting redirects to the current origin preserving path/query. The current public bundle confirms the expected API base; the backend returns the Published fixture as JSON and anonymous userInfo as 401, without serving frontend HTML. These service-level results do not imply successful editor rendering, verification, onboarding or protected-data access.

Preceding continuation added 19 assessments, completed NAV-012 and confirmed BUG-026 locally. All development/production route/link variations used explicit local identity fixtures; nine deployed Library/Admin child denials passed. The real refresh client loses queued waiters after successful text refresh; token-bearing success and rejection controls isolate the local cause. SEC-008/009 stay partial for deployed cookies/session rotation/re-login. The cause of the earlier deployed initial-shell delay remains unestablished.

Local tabs and owned servers are closed; no listeners remain on 4317/4318. Evidence uses feature batches with reproduction sources/hashes. No implementation fixes, deployment, provider operation, upload, content edit or new real fixture. Full testing remains incomplete.

Previous continuation added 13 passing checks and completed SEC-015, NAV-014 and NAV-006: mock flag boundaries, deployed Creator navigation, and User reload/Creator restoration with DB verification. Its details remain in session notes and evidence.

Preceding batch added 29 assessments: 28 Pass and 1 Needs clarification. LOCAL-004/005/006/007 are fully assessed for their narrow fixture-display scope. An isolated local source build explicitly installs the existing adapters and synthetic Creator identity; every unmatched shared-client request stays local with501. Customer profile tabs, multi-item/renewal/refund/failed/pending orders, populated periods and verified375/768/1440px layouts were inspected. After harness shutdown, the original deployed account still shows zero sales/customers and absent/unavailable membership values. This comparison uses two builds/origins; deployed revision is unknown. It does not establish persisted commerce, real provider state, accounting or supported server Membership history.

Five additional local response-handling checks cover delayed503 and reload recovery for Dashboard, Analytics, Customers and separate Sales summary/ledger failures. Loading/unavailable/recovery states render without automatic fixture fallback; server-backed cases remain partial. No real service was interrupted. One chart nonvisual/keyboard investigation remains Needs clarification: named charts and aggregate text exist, but automated key attempts did not establish reliable series navigation or screen-reader access. No new defect was confirmed. Actual200%zoom remains untested. Routine evidence uses one local batch JSON, including reproducible harness sources, hashes, observations and cleanup. No repository implementation changes, deployment or real data mutation.

Previous batch added8 passing empty reporting controls/layout checks and an authoring blocker linked to BUG-001.29 prior routine Admin snapshots remain consolidated in one document with original payloads/hashes; outcomes and timestamps were preserved.

Prior continuation assessed Admin home/navigation, user name/email/role filters, Product filters and all three pagination pages, invalid owner errors, legacy fallbacks and Library root recovery. NAV-010, NAV-016, ADMIN-001 and ACCESS-008 now have their specified browser variations assessed; unresolved Library root contents remain Needs clarification. Guest Sales browser/API denials passed. No authenticated API result is inferred from a browser route gate.

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
| [BUG-026](issues/BUG-026.md) | High | Local refresh client discards concurrent waiters after successful text response; deployed reproduction pending. |
| [BUG-027](issues/BUG-027.md) | Medium | Cart/Wishlist menu text is almost white on white panels; empty menus confirmed deployed. |
| [BUG-028](issues/BUG-028.md) | Medium | Contact default-expanded FAQ answer stays hidden until closed/reopened. |
| [BUG-029](issues/BUG-029.md) | Medium | Profile DTO limits exceed confirmed persisted column widths; at-limit isolated saves are rejected. |
| [BUG-030](issues/BUG-030.md) | Medium | Isolated API cannot replace an existing Consultation weekday; valid corrections fail with a uniqueness error. |

Repairing BUG-001 would unblock many saved authoring journeys. No implementation fixes are part of this execution pass.

## Verified portions

Evidence covers Guest and role route guards, initial creation of four Product types, selected autosave and publishing assertions, product refinements, Guest public discovery, owner Wishlist and Cart behavior, empty reporting surfaces, read-only Admin checks, and selected anonymous API authentication boundaries. Successful purchases, entitlement creation, uploaded content delivery, and cross-owner isolation are not established by these results. Local populated fixture observations exercise presentation only.

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

Restricted logs and read-only DB were reverified during the latest User/Creator home cycle; queries were limited to OWNER-A role and reader restrictions. The earlier local fixture batch made no deployed persistence assertions. Local repository revisions do not prove deployed revisions, which remain unknown. Most ledger timestamps record entry time rather than action start; see [run metadata](run.md).

Historical interruption: frontend and API HTTPS connections reset during Profile reload, then recovered. Restricted SSH and DB remained available. See [connectivity evidence](evidence/connectivity-blocker.json). No deployed revision changes have been confirmed.

Validation: all 829 CSV/JSONL rows, evidence references, embedded source hashes, 493 catalog IDs and coverage counts passed. Historical outcomes were preserved; diff whitespace check passed. Documentation typecheck and production build passed in this continuation using the bundled Node24 runtime. Existing stale browser-data and update-check warnings remain; no dependencies or system permissions changed.

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
