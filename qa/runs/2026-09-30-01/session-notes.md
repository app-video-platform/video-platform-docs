# Session notes

## Checkpoint at 203 variations

182 Pass, 17 Fail, 3 Needs clarification, 1 Blocked. These are assertions, not completed catalog cases. Six cases have all expanded variations assessed. Read coverage.json and results.jsonl for exact current state.

OWNER-A is CREATOR, restored after the approved ADMIN → USER → CREATOR cycle and verified in UI and read-only DB. Chrome tab 769287702 is the owner session. Independent in-app browser tab 1 is Guest. Read-only DB tunnel session 84448 and restricted logs were available; recheck after interruption.

Four synthetic Products and one native Post are listed in fixtures.md. Consultation is Published; the other Products Draft. Owner Cart and Wishlist are empty after UI cleanup. Guest local Cart contains one synthetic Consultation. No purchases, uploads, account creation, credential changes, calendar writes, or edits to original Products occurred. Missing-owner Admin creation was rejected and no matching Course persisted.

Eight defects are documented in issues/. Saved authoring is obstructed by BUG-001; avoid repeatedly revisiting blank edit routes. Price, Guest creator name, storefront route, Library accessibility state, Wishlist dropdown action, and false verification success are confirmed. Draft metadata visibility, Consultation initial defaults, and Membership analytics wording remain Needs clarification.

Public deployed bundle identifies API origin https://serious-debauchery.click. No authenticated terminal API session exists. Direct authenticated API navigation in Chrome was blocked by client; temporary tab closed. Do not bypass browser security or extract cookies/tokens. Anonymous API checks use synthetic malformed values and save sanitized response shapes, not unrelated identities or raw logs.

Native accessibility clicks reliably navigated and read current form state where semantic clicks used stale state. Inspect state after actions and verify the settled page. An unchanged semantic click alone is not an app defect.

Next: independent Creator Customers/Settings presentation and negative anonymous authentication/security API checks. A second disposable signed-in identity has been requested asynchronously for cross-owner/enrollment journeys; retain Creator session. Payment success needs verified provider configuration. See summary.md for prerequisites.

JSONL is authoritative. Regenerate CSV/progress with /private/tmp/vpqa_record.py and empty JSON array after browser-appended records. Persist each variation, checkpoint every 15, and continue. Do not mark a parent complete before all role/data assertions are accounted for. User pushed changes through docs revision 3d284dc; preserve them. Unrelated .DS_Store files are preexisting.

At the latest checkpoint Chrome is on a connection-reset error at /app/settings. Profile synthetic changes were local-only; DB Bio/Tagline/Website remain empty and title unchanged. Native retry and CLI checks of both frontend and API fail. Restricted logs/DB still work. Owner was asked whether a deployment/configuration change is in progress. Resume with one connectivity check before browser work; do not treat interruption as an application defect without diagnosis. Pending negative API checks: missing/unknown REFRESH_TOKEN; malformed Google idToken; CORS preflight approved/unapproved/local origins. The earlier malformed-cookie evidence did not record the cookie name; use explicit JWT_TOKEN in future checks rather than infer that detail.

Browser tabs are marked for continuation. The final API retry also failed its diagnostic connectivity gate (curl35); no negative-auth/CORS requests or new results ran. Prepared runner is /private/tmp/vpqa_security_batch.py, with synthetic values only. Frontend connection error screenshot: evidence/frontend-connection-reset.jpg. Documentation typecheck passed.

Validation: documentation typecheck passed. Default npm build initially rejected Node18; the same Docusaurus build passed using the installed bundled Node24 runtime. Existing stale browser-data and update-check warnings remain; no dependencies or system permissions were changed. Ledger/CSV row counts match and all recorded evidence paths exist.

## Connectivity recovered; checkpoint at 246 variations

{'Pass': 220, 'Fail': 23, 'Needs clarification': 3}. Frontend Chrome session and terminal API both recovered. Profile interrupted variation resolved Pass after original values rehydrated. Authenticated backend root displays greeting through normal browser cookies, without extraction; ENV-012 is now fully assessed. Negative refresh/Google-token/JWT-cookie checks passed; eighteen CORS preflights passed. These do not complete all expiry/rotation/authentication or actual mutation-origin scenarios.

Current owner CREATOR, at Calendar Settings after local cleanup. Settings Profile, Account, Payment and placeholder edits did not persist. BUG-009 documents placeholder validation failure; nine defects total. iCloud Connect with synthetic email opens incidental Dashboard rather than provider consent; tab closed, Settings reloaded. Read-only DB confirms three GOOGLE calendar rows and no ICLOUD; originals were untouched. No provider authorization, new calendar connection, event, purchase, credentials, or account deletion occurred.

Next: Creator Storefront read-only builder/link behavior, public anchors and independent routing. Test Calendar own listing/tampered callback through authenticated browser navigation where safe; no existing-calendar disconnect. Remaining fixture/second-identity requests stay pending. Avoid regenerating tracked documentation output unnecessarily; last typecheck/build passed and generated changes were removed.

## Checkpoint at 302 variations

{'Pass': 265, 'Fail': 27, 'Needs clarification': 10}. Catalog state: {'Not run': 395, 'Pass': 7, 'Partially assessed': 90, 'Needs clarification': 1}. JSONL and CSV agree; all evidence exists. Browser/terminal connectivity recovered. No current network block. Nine issues remain; BUG-002 expanded to three private preview surfaces. BUG-008 corrected: native Bio clamps250; fill-only251 is a tooling artifact, not a Bio maximum defect. Native short Bio, Tagline9/121 and malformed Website reconfirm missing validation.

Chrome owner appTab769287702 stays CREATOR at Storefront builder with unsaved Light/green#18c7a5/Friendly. Public baseline Dark/gold#ffbd41/Modern, own saved config rowcount0. Action-time approval question for temporary save-and-restore is pending; do not save until owner answers. All temporary Chrome read/preview/audit/public tabs closed. Guest in-app tab1 is at Sign in after rejecting private Published Consultation preview. Owner Cart/Wishlist empty; Guest still has one synthetic Consultation locally. Four Product and native Post fixtures remain unchanged.

Private previews load and reload all four types; saved editing remains BUG-001. Unknown private Product gives explicit not-found and Back to Products recovery. Course landing defaults readable with0 saved config rows; native1201 input clamps1200, local description/left hero/visibility/order changes work; Reset and reload clear local edits. No landing config save occurred. Six NAV-011 routes are fully observed blank and need intended fallback policy. NAV-010 Guest/Creator four-route branches pass; User/Admin remain.

Next: if Storefront theme approval arrives, save exact prepared Light/#18c7a5/Friendly, verify public+DB+reload, restore baseline Dark/#ffbd41/Modern and verify (saved config row will remain, as disclosed). If approval declined/pending, Reset unsaved theme when leaving. Continue independent public missing-storefront/Product recovery, deployed documentation/anonymous API validation, current-role fixture landing checks. Password/deletion/provider consent and additional identities need their specific prerequisites. Current actor has no second identity yet. Native input should verify HTML maximum boundaries; generic fill may bypass maxlength.

## Checkpoint: 333 variations

{'Pass': 295, 'Fail': 27, 'Needs clarification': 11}. Marketing direct loads and reloads passed for all eight catalog routes as Guest and Creator at desktop size. Customer list recovered to genuine empty state; unknown detail shows a generic unavailable state with successful Back to Customers recovery. Exact missing-customer presentation remains unspecified. Public landing-config visibility and actual CORS GET checks passed; Swagger remains unauthenticated 401, without inferring the deployment profile. Pending theme approval is unchanged. Main owner tab retains unsaved Light/green/Friendly; no persistent theme or landing save. Next: marketing interactions and responsive checks.

## Checkpoint: 380 variations

{'Pass': 325, 'Fail': 43, 'Needs clarification': 12}. Marketing demo steps, pricing selectors/wrap/keyboard/reload, native Contact requirements/email/local submit/reset, and all Help/Contact FAQ pointer and keyboard toggles were checked. Shared marketing header overflows375px for Guest and Creator on all eight routes (BUG-010); Demo header fits768px for Creator. Customer mobile empty controls fit375px. Product filtering/menu/Overview fit375/768/1024/1440px; known price defect remains. Mobile navigation route selection closes overlay; Escape/focus expectation is unspecified because this is complementary navigation, not shared modal Drawer. Product dropdown Escape works. Sales shared Drawer has correct modal metadata, focus trap, Escape restoration and scroll lock. Main owner theme approval still pending, no saved configuration. Temporary viewport overrides remain active for testing and must be reset before handoff.

## Checkpoint: 403 variations

{'Pass': 343, 'Fail': 48, 'Needs clarification': 12}. Sales filters/sort survive375/768/1440 resizing; explicit and overlay closures restore scrolling. Analytics90-day Orders controls/charts and own zero-commerce Dashboard fit375/768/1440px. Sign-in stays800px at320/375/768; recovery password step stays500px at320/375 (BUG-011). Recovery empty/malformed email blocks; valid synthetic email advances locally, Back button is inert, resend only logs, and blank OTP advances to local password fields. No password entered or credential changed. Static Email Sent direct/reload checked and fully expanded. Pending theme save approval unchanged. Viewport overrides must be reset before handoff.

## Checkpoint: 427 variations

{'Pass': 356, 'Fail': 56, 'Needs clarification': 15}. Signup stays800px at320/375/768 (BUG-011). Guest Explore requires861px at320/375/768; Product detail at375/768 also overflows public navbar (BUG-012). Public Storefront fits320/375/768/1440 despite known name defect. Missing Storefront loads/reloads unavailable, Back recovers own Storefront; missing Product loads/reloads unavailable. Guest synthetic Consultation Explore Wishlist toggles on/off and cart dedup remains disabled at1item; View Product resolves canonical route. Autocomplete ArrowUp/Down/Enter selects and searches the title; Escape/outside leave suggestions visible and combobox metadata is absent (unresolved catalog expectations). Search first-page label shows Page0of1 and navbar term remains prior typed prefix after suggestion selection. Pending theme approval unchanged; Guest Wishlist empty, Guest cart1; main roleCreator and theme unsaved. No credentials/account/purchases/uploads/implementation changes. Current focus: Guest querytest search; continue URL pagination investigation. Chrome viewport reset; Guest override reset.

## Continuation checkpoint — 2026-10-01: 452 variations

{'Pass': 374, 'Fail': 63, 'Needs clarification': 15} across 136 catalog IDs. Full catalog coverage: {'Not run': 357, 'Pass': 8, 'Partially assessed': 126, 'Needs clarification': 1, 'Fail': 1}. Seventeen confirmed issues are documented; no implementation fixes. Search page0 metadata incorrectly reports20 total/1page/last despite page1 containing20 more (BUG-013). New query after page2 produces false-empty Page2of1; Prev recovers, Back loses previous page (BUG-014). Collapsed navigation seven links lack names (BUG-015); UX-002 fully expanded. Account menu Space/Escape/outside work, but Logout is skipped by Tab (BUG-016). Landing Marketing description textarea has no accessible name (BUG-017). Course landing controls/preview fit375/768/1440 without a save.

Viewport correction: browser viewport capability targets selected main tab769287702. Auxiliary tab769287782 retained1728px during the initial Cart and breakpoint attempts, making those attempts invalid. Rechecks in main tab used actual375/768/1440 Cart widths and actual1023/1024/1279/1280 Product widths. Cart375 overflows to730px;768/1440fit. Compact desktop sidebar at1023/1024 has7links and intentionally hidden toggle (name defect remains);1279/1280 exposes expanded sidebar and toggle. Manual collapse persists Products→Settings in memory; reload restores default expansion. Historical invalid/provisional attempts remain in append-only ledger and are superseded, not deleted. Always verify actual innerWidth matches requested size before scoring.

Access checkpoint: restricted reader returned200 log lines successfully without saving raw logs. DBvp_test_reader remains read-only with10s statement timeout; own Storefront configs0, synthetic Course landing configs0. No new purchases/uploads/account/credential changes or role changes. Original fixtures remain. Main roleCREATOR.

Handoff: main tab retains unsaved Light/#18c7a5/Friendly with Save enabled, matching original pending approval; exact restoration verified by aria-pressed and screenshot. No Save clicked. Guest tab remains signed out, synthetic Cart1/Wishlist0. Auxiliary Chrome testing tab closed; all temporary viewport overrides reset. Both main and Guest tabs marked for continuation.

Next: finish approved Storefront save/restore once owner answers; obtain second disposable signed-in identity and supported authenticated API session for ownership/commerce/API journeys. Continue unrun cases from coverage.json; do not treat variation count as493-case completion. Authoring remains obstructed by BUG-001, and provider/mail/upload/failure fixtures remain prerequisites.

## Continuation checkpoint — 2026-10-01: 570 variations

{'Pass': 475, 'Fail': 71, 'Needs clarification': 23, 'Blocked': 1} across 169 catalog IDs. Catalog coverage: {'Partially assessed': 159, 'Pass': 8, 'Not run': 324, 'Needs clarification': 1, 'Fail': 1}. Twenty-two confirmed defects; BUG-018 through022 are new. Full suite remains incomplete. JSONL is authoritative; projections regenerated, evidence-path integrity checked separately.

Fifth Product `cb045295-cf70-445c-99a7-46fc0618e58e` (QA-2026-09-30-01 Curriculum) has3sections and3lessons. Article body was restored to bold QA article body A after synthetic overwrite reproduction. Quiz question wizard has no persisted quiz definition; Video has no asset. Section/lesson order, titles/descriptions and timestamps verified in DB.

Publication incident: Publish request completed; subsequent automatic approval review rejected further publication workflow for lack of explicit public-content approval. Read-only UI/API confirm PUBLISHED, with no Unpublish UI. Owner informed with screenshot; async retention approval pending. Do not repeat Publish or bypass rejection through API/hiding/deletion. Only read-only follow-ups occurred.

Browser: main Chrome769287702 retains unsaved Light/#18c7a5/Friendly Storefront preview (Save approval pending). Chrome769287812 remains in working Published Course creation workspace; preserve without reload/navigation because BUG-001 obstructs saved edit reopen. Auxiliary read-only Chrome769287816 currently opens Membership Overview; initial auth shell may need settling. Guest IABtab1 remains signed out at synthetic Published Course public page; its Cart1/Wishlist0 remain. No role changes, purchases, uploads, credentials or provider writes in this continuation. OWNER-A remains CREATOR.

Read-only Guest canonical Course API200 exposes outline but null content/videoUrl; owner frontend reveals saved body but raw JSON (BUG-021). Typed Product routes redirect canonical and reload successfully for Guest/Creator. Temporary connection reset recovered; later empty Guest shell on protected Overview resolved to Creator without login. No network failure fixture was induced.

Next: finish Membership Overview and independent read-only cases. Pending prerequisites remain second identity, supported authenticated API session, fake payment/provider/mail/upload/failure fixtures. Storefront Save/restore and synthetic Course retention approvals remain unanswered. Do not mark unobserved catalog cases Pass or bulk Blocked.

## Latest checkpoint: 586 variations / 173 catalog IDs

{'Pass': 487, 'Fail': 72, 'Needs clarification': 25, 'Blocked': 2}. Coverage: {'Partially assessed': 163, 'Pass': 8, 'Not run': 320, 'Needs clarification': 1, 'Fail': 1}. JSONL/CSV616attempts agree; all evidence exists and latest Fail/Blocked records have linked issues/reasons. No implementation fixes.

Sixth synthetic Product: `91f68d91-137b-4008-88ed-3e6695db74ba`, Draft/free/EUR Download; file group `816d520c-68a6-4da1-a8ae-681a73b4ec76`, QA Files A,position1,0files. Working Chrome769287816 is back on Files, uploader ready, no file chosen/uploaded. Specific201byte synthetic text upload approval pending. Preserve this tab without reload/navigation. The public curriculum Course retention question remains unanswered; no further public mutation occurred.

Google Drive import screen settled to no files/folders without explicit connection in this run. No connect/logout, credentials or remote file selection occurred. Cancel returned initial picker. This does not establish configured provider import; LOCAL-009 remains partial/Needs clarification.

Guest now at public owner Storefront with2Published Products. Private email is not exposed. Fresh read-only builder showed a different default featured Product/order than public site; STORE-020 consistency Needs clarification. That temporary tab was closed without edits or Save. Main unsaved Light/#18c7a5/Friendly remains preserved; Course creation workspace Published remains preserved; no viewport override.

Next dependent action: only after approval, use current Download browse-files chooser for `/private/tmp/vp-qa-fixtures/QA-2026-09-30-01-download.txt`,201bytes. Do not publish. Verify metadata/DB and cloud byte lifecycle; no entitlement/delivery success without a suitable authorized actor. Unsupported authenticated API, second-account, payment, provider/mail and controlled-failure prerequisites remain.
