# Fixtures

- OWNER-A: existing owner-authorized Gmail-linked application account; initial role CREATOR. Login email and credentials are omitted from reports.
- Existing owner products: use read-only for initial navigation. Do not edit their content.
- New content prefix: QA-2026-09-30-01.
- Guest: separate in-app browser session, no login. One synthetic Consultation remains in its local cart. Independent second owner, entitlement, payment and recovery fixtures are not established yet. A second signed-in profile has been requested.
- Owner local Cart and Wishlist: cleared after testing. Current role restored to CREATOR after the approved role cycle; database verifies zero buyer orders.

- OWNER-A ID: a1ebdc7a-d497-4334-9fed-309aec071b25.
- Course: ddd5bb80-183e-48d5-84cd-8819ca082a58, QA-2026-09-30-01 Course, DRAFT, price 0.00. Retain for BUG-001 retest.

- Download: a7991427-a5f7-4e48-a241-0e1a82b52d68, QA-2026-09-30-01 Download B, description B, DRAFT, price 12.50 ONE_TIME/EUR, no files.

- Consultation: 3ebc8873-83aa-430b-8fe2-dad685c0a8d3, QA-2026-09-30-01 Consultation, PUBLISHED, 15 EUR, PHONE, 30min, before-buffer5, max3, synthetic confirmation. No booking/calendar event created.

- Membership: 45fb192b-0393-4609-9c9f-736425adc550, QA-2026-09-30-01 Membership, DRAFT, RECURRING/YEAR, 9.99 EUR.
- Native Post: 4b03703a-73ea-4734-a866-d4a882dc3128, QA Post B, body B, changed DRAFT to PUBLISHED as authoring metadata only.

- Missing-owner Admin create attempt: rejected; no Course named QA-2026-09-30-01 Missing owner exists in DB. Restricted logs show the attempted synthetic creation, followed by the observed Access Denied outcome.
- Invalid verification: synthetic token only; backend400, false frontend success. No account changed.
- Negative login: random unused .invalid address and synthetic input;404, no cookies. No new account created.

Retain the four products and native Post for continued execution/retests. Consultation remains Published. Fixture deletion has not been performed.

## Curriculum execution fixture — 2026-10-01

- Product ID: `cb045295-cf70-445c-99a7-46fc0618e58e`
- Owner: OWNER-A, CREATOR.
- Name: QA-2026-09-30-01 Curriculum. Type: COURSE. Created through normal Product UI; initially Draft.
- Purpose: exercise nested authoring while the creation session remains mounted; saved editor reopen is obstructed by BUG-001.
- No file uploads, purchases or credentials involved. Retain for retesting; update section/lesson/status state at checkpoint.

Current curriculum fixture state: **PUBLISHED**, observed after Publish request. Three sections (Draft, QA Section B, QA Section A Updated); Section A holds Article, Quiz and Video metadata in positions1/2/3. Article synthetic bold body restored after BUG-018; video has no asset and quiz has no persisted definition. No uploads or orders. Publication preceded an automatic review rejection of further publication workflow; owner informed and retention approval requested. No Unpublish action is available.

## File-delivery execution fixture — 2026-10-01

- Product: `91f68d91-137b-4008-88ed-3e6695db74ba`, QA-2026-09-30-01 File Delivery, DRAFT Download, Free default. Created through normal Product UI.
- File group: QA Files A, synthetic description, currently0files.
- Purpose: prepare canonical upload case in mounted creation session because BUG-001 prevents saved editor reopening.
- Local fixture prepared at `/private/tmp/vp-qa-fixtures/QA-2026-09-30-01-download.txt`,201bytes, SHA256 `04c83a8f6432814a5baa1edacbb0ce7eda5cfed866a3687e8222a595b9a60b6c`. No file selected or uploaded. Upload approval pending.
- The working creation tab769287816 was lost before the2 October login handoff. Do not assume it can be reopened; BUG-001 blocks saved editing. No publication requested.

## Membership feed execution fixture — created 1 October 2026

- Product: `1bef43ff-f9dd-495e-9ab4-c1ce3d6d04d0`, QA-2026-09-30-01 Membership Feed. OWNER-A, DRAFT, EUR7.50, RECURRING/MONTH, NEWEST_FIRST.
- Native Draft Posts: `2b4c3ace-c734-4a6f-b5ae-6e85781fcd09` (QA Feed Post A Updated, updated synthetic body) and `510fa63a-2f3d-4d28-afca-927857010692` (QA Feed Post B).
- Included Products: synthetic Draft Course `ddd5bb80-183e-48d5-84cd-8819ca082a58`, Draft Download `a7991427-a5f7-4e48-a241-0e1a82b52d68`, and already Published curriculum Course `cb045295-cf70-445c-99a7-46fc0618e58e`. Inclusion did not change their lifecycle or grant learner access.
- Manual ordering, new Post insertion, mode transitions and stable feed timestamps were verified in the database. The Course removal confirmation was cancelled; all three associations remain.
- No Video/Resource was saved, no file selected/uploaded, and no Membership publication or subscription was requested.
- On 2 October, old authoring tabs were no longer available. Saved state remains intact, but this Membership editor also reopens blank with BUG-001. Do not assume a working creation workspace can be recovered by reopening its URL.

## Browser/session reconciliation — 2 October 2026

The previous Storefront, curriculum, Download and Membership creation tabs are no longer available. The unsaved Storefront preview is lost; its public configuration was not saved. The saved fixtures are retained for diagnosis and retesting. The owner restored the original Creator login in Chrome tab769287843. Long-lived database tunnel sessions70227/12257 timed out; subsequent read-only checks use short-lived localhost-only tunnels that close after each check. Restricted logs remain available. The previous Guest browser tab is also unavailable; recheck its local Cart/Wishlist state before relying on earlier observations.

## Consultation continuation fixtures — 2 October 2026

All three are synthetic, OWNER-A, CONSULTATION, ONE_TIME/EUR and DRAFT. No publication, booking, purchase or calendar provider operation occurred. Extra creation sessions were needed because saved editor reopening is obstructed by BUG-001.

- `f23aedae-ab06-4808-8623-1c69e799ffa6`, QA-2026-09-30-01 Availability: price0, duration75, PHONE, synthetic location instructions retained from Other, buffers5/10, daily limit3, synthetic confirmation, full_24h policy. Local weekday/range edits have no corresponding deployed weekly persistence (BUG-023). Browser Back from private preview crashes the editor.
- `e81643a6-ed56-4b2d-bec1-a52c5870f4a1`, QA-2026-09-30-01 Range Validation B: saved price18 after entering17.50 (BUG-024), duration30, ZOOM, buffers0/0, daily limit1. Description, message and policy are empty. All local invalid-range trials were restored to a valid Monday09–12 range; schedule persistence remains absent. Immediate Back successfully flushed the latest B title. Its initial working session is closed.
- `deba7b76-1d20-423a-9f69-98cea00ef8bb`, QA-2026-09-30-01 Decimal Pricing: form currently17.50, database18 (BUG-024); duration0, no method/location/message/policy, buffers0/0 and stored daily limit0. Separate17.25→17 and0.49→0 trials are documented. Retain Chrome769287857 on Pricing for continuation; no Preview, navigation or reload if preserving this working creation session.

Ten synthetic Products and three native Posts are now retained. The earlier two Published Products remain Published; the pending retention question is unchanged. No fixture deletion occurred.

## Latest Admin continuation — 2 October 2026

OWNER-A is restored to CREATOR, verified by browser and [read-only DB](evidence/admin-checks-creator-restored-db.json). No new synthetic fixtures or Admin Product mutation. Decimal Pricing remains Draft/price18 with unchanged update timestamp and zero target audit rows; its former working creation tab is now blank and was closed. Main Chrome769287843 retains Creator Dashboard. Temporary Admin/Guest tabs closed. Existing other-Creator Course inspected read-only for BUG-025; no original Product or landing config changed.

## Isolated local reporting fixtures — 2 October 2026

Synthetic browser identity qa-local-creator (qa@example.test) and existing frontend Customer/Order/Analytics/Dashboard fixture IDs are local only. They are not deployed records or real customer identities. No credentials, provider operations, persisted purchases or access grants. Details and reproduction sources are embedded in evidence/local-reporting-fixture-batch-2026-10-02.json.

Temporary localhost tabs closed, both servers stopped, no listener remains on 4317, viewport reset. OWNER-A remains signed in as CREATOR on the deployed Dashboard. No real fixture state changed. Existing ten synthetic Products/three native Posts and pending cleanup/approval state remain unchanged; no database recheck is implied.

## Latest mock boundary and role-home cycle — 2 October 2026

qa-boundary-identity and qa-boundary-product are isolated local probe identifiers. In-memory qa-boundary.txt never left the fetch guard; simulated200 is not a stored file. False/true local servers stopped and temporary tab closed.

OWNER-A temporarily changed CREATOR→USER→CREATOR using existing authorized developer controls. Reloaded homes and narrow read-only DB verify both roles; final role is only CREATOR. No Admin elevation, new identity, Product/Profile/Storefront change or actual upload. Chrome 769287843 retains Creator Dashboard with menu closed and sidebar expanded; viewport normal. Short-lived DB tunnels closed. Role state/proof is grouped in evidence/role-home-cycle-batch-2026-10-02.json.

## Latest refresh and route fixtures — 2 October 2026

Refresh reads/token values and qa-boundary-identity role profiles are isolated synthetic transport fixtures; no real cookies, stored identities or records. Development/production route harness denies non-profile HTTP and all fetch traffic. All local tabs/servers closed; no listener on 4317. Exact sources/hashes embedded in their batch JSON files.

OWNER-A remains only CREATOR per current read-only DB check. Real Library/Admin child denials do not mutate roles/data. Existing 10 synthetic Products/3 Posts unchanged; no cleanup request completed or new fixture created. Original Chrome tab 769287843 is verified on /app with the Dashboard heading and CREATOR account control; handoff mark renewed.

## Latest collection-menu fixture and role cycle — 2 October 2026

qa-menu-001…100 are isolated local collection items priced 10 EUR and never created on the server. Both local stores are reseeded on each full load at 0/1/99/100 counts; no reload-persistence claim. Local origin 127.0.0.1:4318 is distinct from the deployed app. Shared non-profile Axios/fetch calls are denied. Exact temporary sources/config/hashes are embedded in the feature evidence.

OWNER-A actual browser collections are empty in the temporary User session. No item added, removed, transferred or checked out. CREATOR→USER→CREATOR is verified in DB; only CREATOR restored. Main Chrome 769287843 is on /app with Dashboard/CREATOR visible, menu closed and handoff renewed. Temporary local tab/server closed; no listener on 4318. Existing real test fixtures unchanged.

Read-only hosting probes reuse Published curriculum Product cb045295-cf70-445c-99a7-46fc0618e58e and OWNER-A Storefront; the verification query contains a synthetic invalid marker used only in static GETs. No real verification token or protected credentials used.

## Marketing continuation — 2 October 2026

OWNER-A temporarily User for static marketing controls, then restored Creator, verified through browser/read-only DB. No persistent content, collection, order, support, agreement or provider change. Original Dashboard retained; pending Admin elevation confirmation has not been acted on. Isolated4319 storage harness was never opened after automatic approval review disconnected; server stopped. No local storage test fixture is active.

## Isolated backend API fixtures — 2 October 2026

Temporary Java17/JUnit/MockMvc context uses real backend filters/services with synthetic User/Creator/Admin JWTs and matching CSRF. Disposable H2 data (PostgreSQL mode; Hibernate create-drop; Liquibase off) includes distinct buyers/owners, Course/Download/Consultation/legacy Membership, pending fake orders, active/revoked grants and readiness Article metadata. SDK/mail/Google mocks are verified unused. These records never reach the droplet. Per-test cleanup and terminal JVM shutdown completed; no fixture remains available by ID for later deployed testing. Recreate through embedded harness source. Original OWNER-A stays Creator with its previous real fixtures unchanged.

## Payment-state local fixtures — 3 October 2026

Disposable local H2 fixtures include multi-item pending/paid/failed/refunded/expired Orders, exact purchase-item references, unrelated free/Admin/purchase grants, all three synthetic roles, concurrent existing enrollment relationships and profile/flag configuration cells. No record is created on the droplet. PAY-014 temporarily widens only the H2 Course price column to seed unsupported legacy precision, restores it in finally, then cleans fixtures. PAY-022/026 use one reviewed ephemeral loopback-only real server; listener54167 is absent after terminal exit0. All contexts/JVMs and fixture cleanup completed; recreate with embedded source rather than expecting IDs to persist.

OWNER-A and previous real synthetic Products/Posts remain unchanged; browser untouched this continuation. No new live read-only DB/log query or role verification implied. Original last verified role/home remains Creator Dashboard. The independent local backend runtime approval does not grant permission for pending Admin elevation or the unexecuted storage-browser action. Evidence is consolidated in backend-payment-state-batch-2026-10-03.json.

## Content, session and profile fixtures — 3 October 2026

All User/Creator/Admin JWTs, CSRF pairs, refresh rows, profiles, social links, Course bodies/videos, Download metadata and active/revoked entitlements are disposable local fixtures. Actual HTTP uses an ephemeral 127.0.0.1 server; listener54330 is absent after shutdown. Per-test rows and JVMs are cleaned. Role replacement and sole-Admin demotion apply only locally; no real role changes. Profile fixture columns match read-only-confirmed deployed widths, without modifying the droplet. That metadata query read no account rows and its owned SSH tunnel closed. Recreate fixtures from the embedded batch sources, not the transient UUIDs.

## Product API fixtures — 3 October 2026

Disposable Course/Download/Consultation/Membership Products, separate Creator owners, audit records, nested sections/Article/video markers and Download file metadata cover ownership and mutation tests. Nonblank Download paths are synthetic readiness metadata; no file was uploaded or signed/delivered, and external SDK mocks were unused. Consultation schedules cover Draft/Hidden, missing settings, disabled Monday and overlapping Monday windows; rejected corrections roll back, while two-save control corrections occur only locally. No real schedule changed.

Fake purchase/live pending/expired pending orders are local only. Purchase entitlements come from simulated payment completion; no provider is contacted. Expired-checkout deletion retains order snapshots. Per-test audit/Product/commerce/nested-data cleanup and all four JVM shutdowns completed. There is no new backend server/listener. Reproduction sources and sanitized outcomes are in backend-product-ownership-publication-batch-2026-10-03.json.

OWNER-A and existing ten real synthetic Products/three Posts are unchanged by these two continuations. Browser was not queried; no fresh browser/account-role verification is implied. Last verified real state remains Creator Dashboard. Pending real Admin elevation/local-storage guidance and prior fixture cleanup/retention questions remain unchanged.

## Quiz and nested API fixtures — 3 October 2026

Disposable Quiz definitions/options/attempts, Course/Download sections and all lesson types cover authoring, learner and legacy matrices. Synthetic Guest/User/Creator/Admin cookies and entitlements belong only to the local H2 tests. Cleanup removes attempts before parent Products and Users. No listener, upload, provider or live database write. Reproduction sources, final assertions and cleanup outcomes are retained in backend-quiz-nested-authoring-batch-2026-10-03.json. Real browser fixtures are tracked separately below when their state changes.

## Deployed free Course grant — 3 October 2026

OWNER-A has one retained ACTIVE free enrollment for Published Curriculum cb045295-cf70-445c-99a7-46fc0618e58e, created through the User browser cart. Reader confirms no matching grant before, one after, zero buyer orders throughout. Product remains unchanged. Cart clears; Library card persists after reload. Creator restored and verified. This creates a real Customer relationship (Dashboard Customers1); previous empty-history assumptions no longer apply to Customers. Revenue/Sales remain0. No entitlement cleanup/deletion. Use this fixture for further read-only Library/Customers/reporting assertions. It is an owner enrollment and cannot prove non-owner access gating.

## Customer read-only fixture verification — 3 October 2026

Existing OWNER-A grant for QA Curriculum remains ACTIVE/FREE_ENROLLMENT, created2026-10-03T10:22:50.948104Z, not revoked. No new fixture/mutation this continuation. Creator role and zero buyer orders verified. Customers and reporting derive the sole free relationship: customer count1, orders/revenue0. Surname SQLNULL confirmed as field-shape boolean only for BUG-003; no profile field changed or account contact value retained in the feature JSON. Main browser returns to Creator Dashboard; search/filter controls cleared. Financial/manual/revoked/multi-customer variants remain unavailable.

## Persistent reporting seed prepared — 3 October 2026

The user explicitly authorizes retaining synthetic data in the development cloud database. The prepared seed is `../../../../video-platform/tools/qa/seed-reporting-development.sql` (sibling backend repository). It has **not been run on the droplet**. Existing observer SSH and `vp_test_reader` remain read-only; insertion needs the existing database owner on the droplet.

The batch creates 25 disabled fictional User accounts, 30 Course and 2 Download Products owned by OWNER-A, all Hidden, 29 synthetic FAKE-provider Orders, 31 immutable item snapshots, 29 attempts, 28 event markers and 77 entitlements. Main buyer: `bbc9d999-927d-3212-5dc6-5db9d442297e`. Namespace: `vpqa:2026-10-03:reporting-v1:`; display prefix: `QA 2026-10-03`; emails use reserved `example.invalid`. No synthetic account can log in, no Admin is created, and no existing record or role is updated. Downloads have no storage files; they are historical reporting fixtures.

Initial retained paid revenue for this batch is EUR316.25 across 25 paid Orders; one main multi-item paid Order is EUR16.25, one refund EUR12.50, one failed EUR11.50, one pending EUR5.99 and one expired EUR2.99. Main buyer has two completed/refunded Orders, EUR16.25 retained spend, 29 access records (26 Active, 3 Revoked), and more than 20 activity events. Pending expires 20 minutes after initial insertion and may be changed by the normal expiry scanner; rerunning does not reset it. Other history spans 1–116 days. The preexisting free-only OWNER-A relationship remains separate.

One transaction; collision rollback; deterministic IDs; an intact existing batch is skipped rather than reset. Disposable PostgreSQL15 validation reproduces deployed PostgreSQL17 columns/constraints plus the known role/purchase indexes, verifies row counts, item totals, idempotent rerun, collision rollback, original owner/role preservation and no reset after pending expiry. This is preparation evidence, not browser/catalog execution or proof of payment processing. Schema and validation are consolidated in `evidence/cloud-reporting-fixture-preparation-2026-10-03.json`. No Docusaurus product behavior changes.

## Cloud reporting fixtures installed — 3 October 2026

User executed the revised paste-safe seed at the existing root/database-owner console. The transaction returned DO/DO/COMMIT. Read-only cloud observation at16:09UTC confirms25 fixture Users,30 Courses,2 Downloads,29 Orders and77 entitlements; all synthetic accounts disabled and all32 Products Hidden. No permission change to observer/reader. Seed anchor16:07UTC; pending Order `3f3f90a3-17de-a894-55b3-110daba7dc1f` expires16:27UTC (18:27Madrid) and may transition normally. Do not reset it by rerunning the seed. Main buyer detail and Sales drawers are now verified through the deployed browser.

Counts/IDs/timestamps and exact synthetic main-buyer grant/purchase rows are consolidated in `evidence/browser-populated-reporting-batch-2026-10-03.json`. The real list contains26 relationships including the preexisting OWNER-A free-only relationship. Current Creator list page size is6, not20; five pages verified. Fixtures are retained for future visualization and tests as explicitly requested.

## Reporting continuation checkpoint — 3 October 2026

1010 assessed variations (867 Pass, 88 Fail, 46 Needs clarification, 9 Blocked); 1057 historical attempts. Originals: 169 not started / 195 partial / 129 fully assessed (116 Pass, 6 Fail, 7 Needs clarification); 364 still need execution/additional checks.

Synthetic batch unchanged and retained. No write access, role change, original-record update, financial/provider/Spaces action or new evidence file. Browser defaults restored; Creator Dashboard retained. Customer JSON now inspected; Analytics/Sales direct response opening still blocked by browser client. Exact pending expiry16:27UTC: fresh reads omit overduePENDING while underlying record remainsPENDING. See session-notes.md for remaining tests and human-opened response request.

## Isolated reporting API checkpoint — 3 October 2026

1040 assessed variations (897Pass,88Fail,46Needs clarification,9Blocked);1087 historical attempts.493originals=163not started/195partial/135fully assessed (122Pass,6Fail,7Needs clarification);358 still need execution/additional checks.

8/8 MockMvc/JPA methods pass with disposableH2/fixedClock; 30 new passingAPI variations. All local fixture tables empty afterwards; SDK/mail unused andJVMended. No clouddata/access/role or livebrowser change. Existing reportingJSON extended, no new evidence file. See session-notes.md.

## Exact reporting checkpoint — 3 October 2026

1065 assessed variations (922 Pass, 88 Fail, 46 Needs clarification, 9 Blocked);1112 historical attempts.493 originals:163 not started,195 partial,135 fully assessed.358 originals still need checks.

Seven local read-model methods pass; local fixtures cleaned and SDK/mail unused. Authorized Creator→User→Creator completed; Creator Dashboard retained. Cloud fixtures unchanged. Human-opened JSON response request remains pending. No new repository evidence file. See session-notes.md.

## Storefront and landing checkpoint — 3 October 2026

1130 assessed variations (987 Pass, 88 Fail, 46 Needs clarification, 9 Blocked); 1177 historical attempts. Of 493 originals: 156 not started, 195 partial, 142 fully assessed. 351 originals still need checks.

Local contract methods 6/6 pass; all disposable tables cleaned, external SDK/mail unused. Real browser theme Save/Reset/reload/public checks passed. Retained new Storefront config 3e47bc68-14b7-4075-b0e7-d2678be490d8 restores DARK/#ffbd41/MODERN with null feature and empty custom order. All 51 Product owners/statuses/update timestamps unchanged; no profile or role change. See session notes and existing feature evidence batches.

## Landing browser checkpoint — 3 October 2026

1140 assessed variations (995 Pass, 90 Fail, 46 Needs clarification, 9 Blocked); 1187 historical attempts. Of 493 originals: 156 not started, 193 partial, 144 fully assessed. 349 originals still need checks.

Four actual owner landing editors: defaults and native1200 limit pass; drafts Reset/reload discarded, zero saved landing rows. No Product/profile/landing mutation; all 51 Product metadata unchanged. Existing BUG-002 reconfirmed on positive-priced Download and Membership. Creator Dashboard restored and navigation expanded. See session notes/existing evidence.
