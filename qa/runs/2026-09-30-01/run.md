# Test run 2026-09-30-01

Started 30 September 2026 (Europe/Madrid). Execution in progress.

- Target: https://app.serious-debauchery.click/app
- Catalog: ../../test-cases-current-state-29-09-26.md (493 cases)
- Browser: existing Chrome session; account alias OWNER-A; initial role CREATOR.
- API deployment version: unknown. Frontend deployment version: unknown.
- Local frontend HEAD: 12765d4568796f8472124383a221b74d82850c5b
- Local backend HEAD: 1b860413436d5f850af0ecc228c5b613ebae4836
- Local revisions are context only and do not establish deployed versions.
- Restricted SSH logs verified. Localhost SSH database tunnel reopened; vp_test_reader has read-only mode on.
- API base URL verified from deployed frontend configuration: https://serious-debauchery.click.
- Approved role cycle CREATOR → ADMIN → USER → CREATOR completed through the application. Each resulting role verified in the database; current role restored to CREATOR.
- Provider modes are unverified. Test-payment UI copy does not establish fake-provider configuration.
- Operational results.jsonl is the append-only record; results.csv is its Excel-compatible projection.
- Times in result rows are recording/checkpoint times; most individual action start times were not captured separately. Timestamped browser console and server excerpts retain their observed times.
- Guest checks use a separate in-app browser session. Owner's signed-in Chrome session remains available.
- Browser version and explicit viewport metadata were not captured. Screenshots preserve the observed page presentation.

## Coverage

See progress.md for current counts; coverage.json retains all catalog IDs.

See [checkpoint summary](summary.md) for confirmed defects and remaining prerequisites. This run has not completed the 493-case catalog.

## Evidence consolidation — 2 October 2026

Routine passing checks use self-contained result descriptions or one feature-batch evidence file. A result may identify an observation key within a JSON batch. Consolidated Markdown evidence references use `path.md#heading` to identify an individual original observation. Reference validation checks the base file and heading.29 routine Admin JSON snapshots were moved into one Markdown bundle preserving original payloads, filenames and SHA-256 hashes. Historical `evidence_paths` were migrated; outcomes, IDs, attempts and timestamps were preserved. Defect, blocker, role-change and persistence evidence was kept separate.

## Isolated fixture presentation and controlled failures — 2 October 2026

LOCAL-004/005/006/007 use a temporary explicit adapter harness at 127.0.0.1:4317, frontend revision 12765d4568796f8472124383a221b74d82850c5b, fake Creator profile and no real credentials. Runtime mock flag is false; API base points to 127.0.0.1:9; unmatched shared-client requests return local 501. Existing fixture modules are registered explicitly. No repository implementation changes or dependency installation. Compile succeeded.

The batch evidence JSON embeds exact temporary entry/config sources, SHA-256 hashes, launch environment/command and observation keys. Static fixtures exercise presentation; persistence, server sorting/accounting and provider integration remain unverified. After the first harness shutdown, fixture values were compared with the original deployed empty-history account. This uses two builds/origins; deployed revisions remain unknown. No same-build live-backend comparison is asserted.

A second harness selects delayed 503 responses using qaFault query modes for Dashboard, Analytics, Sales summary, Sales ledger and Customers. Other requests remain explicit local fixtures. Loading, failure and reload recovery were observed. These UI-only variations leave server-backed cases partial. No real service outage or backend diagnosis was performed.

Both local tabs closed and servers stopped with exit 0; no listener remains on 4317. Viewport reset; original Creator Dashboard retained. Deployed logs/DB were not re-queried because there were no persistence/backend assertions. Most ledger timestamps remain recording times; batch observations include capture times.

## Mock flag and deployed home matrix — 2 October 2026

SEC-015 is assessed using isolated false/true builds with real reporting/Product clients and upload helper called through temporary probe controls alongside the app. Preinstalled Axios/fetch guards deny API/storage network; fake identity profiles cover Guest/User/Creator/Admin. No explicit reporting fixture adapters are installed. True runtime warns that ./_mocks is absent and retains the guard. The configured matching mock-upload prefix returns simulated200 only under true, without PUT; other tested targets attempt guarded PUT. This establishes runtime boundaries, not deployed authentication, real upload or an offline app. Reproduction sources/hashes/environment are embedded in the feature batch JSON. Both servers stopped and tab closed.

NAV-014 completes deployed Creator links/Back/disabled Help. NAV-006 adds real User reload and Creator restoration to earlier real Admin/Creator home evidence. OWNER-A role and reader restrictions are verified through short-lived authorized SSH tunnels; no secret contents read or stored. Final Creator role/home confirmed in browser/DB and preserved in one screenshot. Restricted logs rechecked successfully; raw logs omitted. Local mock roles are not used as deployed role proof. No Admin elevation or Product/Profile/Storefront mutation.

## Refresh queue and route matrix — 2 October 2026

BUG-026 is locally confirmed using the real client/interceptor and synthetic concurrent401/refresh responses; deployed reproduction is pending. Successful text refresh loses queued waiters. Token-bearing success and refresh 401 controls isolate response-shape handling; no real credentials or session rotation were tested. SEC-008/009 stay partial.

NAV-012 uses isolated development/production builds and four synthetic identities to assess actual frontend route/link behavior. NAV-004 adds five Library and four Admin child denials using the real deployed Creator session, verified in read-only DB. Raw logs omitted; aggregate errors uncorrelated. Temporary localhost servers exited 0, tabs closed and 4317 listener absent. No deployment, implementation or real data/role change. See feature-batch evidence and current progress.

## Collection menus and hosting boundary — 2 October 2026

CART-017 covers explicit browser-local count fixtures at 0/1/99/100 with real components, local User/Creator/Admin identity profiles and a network guard. These are collection rendering/navigation checks, not persisted purchases or backend authorization. Deployed OWNER-A User empty menus/navigation confirm BUG-027 white-panel readability. Original Creator role/home restored and verified through browser/read-only DB. No real collection or financial operation.

ENV-001 covers anonymous static hosting GET/repeat, legacy path/query redirect and current public bundle API-base verification, supported by real JSON/401 backend responses. No JavaScript-rendered authoring, onboarding or verification success is inferred. Local server/tab closed; feature-batch sources/hashes and limited screenshots retained. Full catalog incomplete; see current progress.

## Marketing controls and initial FAQ visibility — 2 October 2026

837 assessed distinct variations (703 Pass,84 Fail,41 Needs clarification,9 Blocked);879 historical attempts.493 originals:278 not started,191 partial,24 fully assessed;469 still need work. This continuation adds13 assessments; no original case is declared fully assessed because Admin role coverage and other prerequisites remain.

Real deployed Creator and User Demo steps/reset and Pricing monthly/bi-yearly/yearly, Previous/Next, ArrowLeft/Right and reload controls pass. Help FAQ pointer/Enter controls pass; User own-region answer heights26/0 confirm reveal/hide. Contact password/support pointer/Space and purchase-history close/reopen controls pass. BUG-028 Medium: initial purchase-history panel says expanded but own answer region has0 height; two visits per role reproduce it. A screenshot and one feature batch contain evidence. Prior Guest activation passes did not assert initial content visibility. An exploratory getElementById selected duplicated first region and is marked unreliable; panel-local checks are authoritative. Initial uppercase heading wait was a locator mistake; observed lowercase DOM correction passes. Initial User Start at first was no-op; real growth→first reset observed separately.

ENV-002 current deployed synthetic docs-path HTTP200 yields main SPA shell, unchanged URL/same hash; intended docs proxy and isolated config matching remain Needs clarification. Separate Docusaurus navigation is not inferred broken.

Original OWNER-A temporarily User, verified by reader, then Creator restored and verified by browser/read-only DB. Current original tab769287843 is Creator Dashboard; account menu opened only to prepare pending Admin confirmation. No Admin click. Menu contains ADMIN but new action-time elevation permission is pending. Temporary approval screenshot is /private/tmp/vpqa-admin-confirmation.png, outside repository; do not score this as a test.

Local storage harness entry/config at /private/tmp/vpqa-storage-entry.js and /private/tmp/vpqa-storage-webpack.cjs compiled. Automatic browser approval review disconnected before creating localhost4319 tab; action not executed. Async user question remains pending. Do not retry same local browser action through another port/browser/API as a workaround. No CART-005 assertion executed or scored. Owned server15523 stopped with exit0;4319 has no listener. No storage tab exists. If user permits restoring approval, revalidate/start owned harness and use supported browser entry. Controlled Storage.prototype SecurityError only tests explicit local exceptions, not native browser privacy-policy denial. Preserve that distinction.

Evidence: signed-in-marketing-batch-2026-10-02.json, existing hosting/role batches and BUG-028 screenshot. Original Creator restoration screenshot retained. No implementation, deployment, credential, Product, provider, support, agreement, collection or payment change. No raw DB/log contents retained; presentation checks did not require new logs. QA consistency validation applies; site build not rerun because only files outside Docusaurus site changed (previous typecheck/build passed).

Next: pending Admin confirmation can finish static signed-in-role matrices, then restore Creator. Pending local-browser guidance unblocks actual storage exception/wrong-shape UI checks. Other cases still need second identity, supported authenticated API testing, fake provider/mail/upload/failure fixtures and authoring BUG-001 repair or fresh authorized creation sessions. Do not treat unrecorded variations as Pass or bulk Blocked.

Independent ENV-013 local portion: actual shared helper and four reporting GET client functions were transpiled with installed TypeScript and executed against a network-free HTTP request recorder.11 assertions/8 recordedGETs pass literal symbols/Unicode/page0 and cleared filter omission. Real UI, Admin implementation, session authentication and deployed server defaults remain required. No network or mutation. Exact probe/source hashes are embedded in one query-serialization batch. Parent remains partial.

## Isolated backend API matrices — 2 October 2026

852 assessed variations:718 Pass,84 Fail,41 Needs clarification,9 Blocked;894 historical attempts.493 originals:263 not started,191 partial,39 fully assessed (35 Pass,2 Fail,2 Needs clarification).454 originals still need work. This continuation completed15 API catalog cases, each recorded as one aggregate matrix with all named roles/inputs/assertions in the feature evidence. Variation counts are not parent-case counts.

New complete API cases: PAY-002/003/004/005/006/007/008/009/010/011/012/015 and ACCESS-001/003/006. No new app defect. Exact assertions and method mapping are in evidence/backend-core-api-batch-2026-10-02.json. Current backend revision1b860413436d5f850af0ecc228c5b613ebae4836; deployed revision remains unknown. Do not transfer isolated results to the cloud/browser suite.

Independent API execution is now available through a temporary Java17/JUnit/MockMvc harness compiled outside repository source. Real filters/controllers/services/repositories use synthetic valid JWTs and matching CSRF, H2 in PostgreSQL mode with Hibernate create-drop/Liquibase off; fake gateway enabled and auto-success false. Mail/Google/S3/S3Presigner mocks are verified unused. No real credentials/cookies/signing material/raw logs or response dumps saved. APIs mutate disposable local data only. Parent cases specifying isolated backend are assessed there; migration/PostgreSQL/provider/cloud/browser requirements stay separate.

Existing AuthRoleSmokeIntegrationTest, ProductEntitlementIntegrationTest and CommerceCheckoutIntegrationTest:14 tests passed. Extended runner initially15 methods:13 passed; two harness-only assertion errors were corrected (wire status absent in DTO; detached lazy items). Focused retest2 passed. PAY-002 then passed a focused assertion completion audit for exact item IDs/names/types/unique item IDs/line totals/subtotal.13 unaffected methods were not repeated. Exact initial/corrected sources and outcomes retained in one feature batch, without reporting erroneous harness assumptions as product failures.

Temporary files: /private/tmp/vpqa-backend-api-src/CatalogCheckoutMatrixTest.java, CatalogApiRunner.java and classes/runtime classpath siblings; embedded source is durable reproduction authority. Runner selects declared catalog methods only, excluding inherited baseline tests. Original parent CommerceCheckoutIntegrationTest supplies isolated setup/cleanup. Additional local Download/Consultation fixtures are cleaned by derived hooks; no droplet/account/content/provider changes. Maven session41798, main runner26312, corrected runner64623 and item audit2118 are terminal exit0 after corrections. No service port/listening application server created.

Browser diagnostic: attempted normal GET https://serious-debauchery.click/api/creator/dashboard/summary was net::ERR_BLOCKED_BY_CLIENT. Subsequent page read's automatic approval timed out (explicit once-retry allowance, but no read retry used). Do not label a backend HTTP error or authenticated API result. Temporary API tab769287956 closed through supported cleanup without reading protected contents. Original tab769287843 remains Creator Dashboard, menu closed and handoff retained. Actual browser/Admin/local-storage confirmations remain pending; no protected API browser access or storage execution established. Do not bypass those restrictions through another browser/port or cookie export.

Next available independent queue: extend the isolated API harness for remaining payment/access/security/nested-authoring cases against their exact catalog matrices; keep local API evidence separate from browser/deployed tests. PAY-013 and PAY-016 onward need entitlement/payment state/Clock/provider configuration variants. No real financial/provider action. Continue browser cases once the relevant pending confirmations/prerequisites arrive. Never bulk mark unexecuted cases Pass or substitute API proofs for browser journeys.

## Payment-state and configuration matrices — 3 October 2026

867 assessed variations:732 Pass,84 Fail,42 Needs clarification,9 Blocked;909 historical attempts.493 originals:248 not started,191 partial,54 fully assessed (49 Pass,2 Fail,3 Needs clarification).439 originals still need execution or further checks. This continuation adds15 fully assessed originals:PAY-001/013/014/016/017/018/019/020/021/022/023/024/025/026 andACCESS-002.14 Pass;PAY-024 Needs clarification. All26 PAY originals have outcomes within their specified isolated API/service/source scope; this does not complete separate browser/cloud payment journeys.

No new confirmed product defect. Successful/failed/refunded state changes, exact order-item grants, refund-only purchase revocation, protected Course content, unrelated free/Admin/other-order access, Creator failure/refund reports, nine incompatible transitions, stable repeated outcomes, overdue GET/replay identity, and existing ACTIVE/REVOKED re-enrollment across three roles including concurrent calls all pass. Price checks reject caller financial/status overrides and individual/aggregate minor-unit overflow. Excess-precision service rejection uses a clearly labelled persisted legacy fixture: only the disposable H2 price column is widened to scale4, then restored2 in finally; no deployed migration/schema claim.

Six profile/flag cells cover test/dev/outside×fake.enabledtrue/false. Enabledtest/dev expose simulation, Admin alone succeeds, User/Creator403, invalid/missing outcome400; Guest with valid syntheticCSRF401 under test. Disabled/outside controllers are absent; Admin/User/Creator attempts return400 through existing missing-route error handling with no payment processing. Initial Guest test lackedCSRF and initial absent-route test wrongly assumed404; both harness assumptions corrected. Five context classes received focused role/completeness audits. No erroneous harness failure is scored as an app defect.

PAY-024: outside dev/test, providerfake and fake.enabledfalse still create PENDING or automatically PAID orders depending on auto-success. Simulations remain absent. Implementation boundary is verified; intended deployment policy needs a decision. No configuration or deployed financial mode was changed. PAY-025 provider-none checkout503 ignores attempted caller-success fields; runtime has no gateway adapter and exactly two supported commerce routes. Frontend service/helper/Cart/routes/read-only Sales refund section were inspected; generic checkoutURL redirect is not server confirmation, and a complete real provider/webhook/return/refund UI integration is absent. Source-boundary finding is not a browser/provider test.

PAY-022 andPAY-026 use an actual ephemeral Spring Boot server bound127.0.0.1 with H2/mock external services. The default terminal sandbox denied socket binding before assertions; a separately reviewed escalation authorized this catalog backend runtime. It does not bypass the pending storage-browser action. Actual500ms scheduling marks overdue PENDING order/attempt EXPIRED before any orderGET or manual expiry call; paid and future controls unaffected. ActualHTTP reads verify state. Supported normalized-event seam rejects mismatched amount/currency/provider with409 and unchanged snapshots/access, then exact PAID/refund event duplicates retain stable grant/event counts. No webhook endpoint invented.

All22 distinct new test methods have successful final executions; results are grouped into15 catalog matrices. One new file, evidence/backend-payment-state-batch-2026-10-03.json, embeds exact sources/hashes, sanitized observations, configuration attempts/audits, source references and limitations. No routine screenshots/files per check. The temporary loopback54167 listener is absent; authorized runtime21654, price74771, unavailable-provider46935 and final config22352 are terminal exit0. Other config contexts finished in separate JVMs. Per-test fixtures/H2 contexts are cleaned. No backend/frontend implementation, deployment, real account/role/content/order, droplet configuration, log/DB read or provider change this continuation. Original Creator browser was not touched; its last verified state remains the previous Dashboard. Pending real Admin/local-storage guidance is unchanged.

Next: extend the isolated API queue for remaining entitlement/content/file authorization, authentication/CSRF and nested authoring catalog matrices, reading exact owning implementation first. Disposable mocks do not prove actual Spaces/mail/provider operations. Continue deployed/browser journeys only through supported authorized surfaces when their outstanding prerequisites arrive. Existing BUG-001/023/024 retests need deployed repair/alignment, not repeated known failures. Keep the full objective active;439 original cases need work.

Validation:909 CSV/JSONL rows match;867 assessed variations and all493 catalog IDs/coverage projections reconcile. All894 tracked baseline outcome rows preserved. New feature batch has12 unique keys,15 catalog matrices/22 successful distinct methods,9 embedded source hashes and14 current implementation reference hashes verified. All26 payment parents expanded. lsof confirms no loopback54167 listener. QA whitespace check passes excluding intentional CSV CRLF. Only QA artifacts changed; site build/typecheck not rerun because these files are outside Docusaurus and previous checks passed. Backend/frontend source and revisions unchanged; preexisting .DS_Store untouched. Full objective remains active.

## Current API checkpoint — 3 October 2026

94 of 493 original cases are fully assessed; 399 still require execution or further checks. The ledger has 954 historical attempts and 911 assessed distinct variations (771 Pass, 87 Fail, 44 Needs clarification, 9 Blocked). See progress.md for authoritative current counts and session-notes.md for resume actions.

Content/session/role/profile matrices completed 19 originals and four API portions of browser cases, including actual loopback HTTP and a read-only deployed profile-column metadata query. BUG-029 records the profile DTO/database capacity mismatch. Product ownership/publication/deletion matrices completed another 21 originals: 18 Pass, 2 Fail, 1 Needs clarification. BUG-030 records failed existing-weekday replacement in the isolated Consultation API. All new evidence is grouped into two feature JSON files; screenshots were not added.

Both continuations use temporary Java17 real backend/filter/JPA harnesses with disposable H2 data and verified-unused external-service mocks. No live account/profile/Product/role/order/provider or application implementation changed. Deployed API revision and PostgreSQL/browser reproduction of local findings remain unverified. Original browser untouched; its last verified Creator Dashboard state is historical. Pending real Admin/local-storage action guidance is unchanged. All owned JVMs/tunnels ended, the prior HTTP listener is absent, and disposable fixtures are cleaned.

Three historical PAPI-008 Guest GET association corrections stay in the ledger, but are excluded from that parent's projection now that its actual full PUT matrix is assessed. No historical outcome was rewritten. QA consistency/hash validation applies; these files are outside the Docusaurus site, so the previously passing site build/typecheck is not repeated. Full objective remains active and incomplete.

## Quiz, nested authoring and legacy API checkpoint — 3 October 2026

937 assessed distinct variations, 983 historical attempts: 795 Pass, 87 Fail, 46 Needs clarification, 9 Blocked. Original catalog: 183 not started, 190 partial, 120 fully assessed (108 Pass, 5 Fail, 7 Needs clarification); 373 remain. This continuation completes 26 originals: QUIZ-001–015/017, CONTENT-008/010/011/016–019 and LEG-001–003. Twenty-four Pass; CONTENT-008/010 Needs clarification. No new confirmed issue.

Quiz coverage includes all three question types, author identity/order/replace/delete, field validation, caller denials, learner redaction, entitlement gating, exact/deduplicated answer sets, scores/rounding/thresholds, malformed submissions and persisted attempts. Nested/legacy matrices cover ownership and path identity, role denials, type conversion, unchanged rejection snapshots and request/response fields. CONTENT-011 reconciles four actual frontend-client payloads; it does not establish browser autosave timing.

One evidence file: backend-quiz-nested-authoring-batch-2026-10-03.json. Eight nodes include embedded initial sources, 926 API observations, 26 successful declared methods, catalog matrices, cleanup and the three-method completion audit. The focused audit strengthens QUIZ-001/003/013 field/option identity and feedback assertions; it adds attempts to the same variations, not new original cases. Real Spring security/controllers/services/JPA run with disposable H2; external SDK/mail/Google mocks verify no interactions. All JVMs ended successfully and per-test fixtures are cleaned. No application source, deployment, cloud operation or live content changed in this API batch.

Human steering asks whether browser testing continues: yes. Fresh Chrome OWNER-A Creator Dashboard was verified, then the authorized User switch was used for an independent free-cart browser journey. Account owns the synthetic Published Curriculum, so its Product page exposes Edit product and content even without an entitlement. It cannot prove the non-owner DISC-018 enrollment transition. Record the free-cart scope separately and restore Creator at checkpoint. Pending Admin and local-storage confirmations remain unchanged.

## Real browser free-cart continuation — 3 October 2026

940 assessed variations (798 Pass, 87 Fail, 46 Needs clarification, 9 Blocked), 986 historical attempts. Originals: 182 not started, 191 partial, 120 fully assessed; 373 remain. Three passing browser portions recorded: CART-006 single-free owned Course, ACCESS-007 persisted Library card/Open, DISC-019 additional User-owner bypass edge. None completes the broader parent matrix. No new confirmed issue.

OWNER-A Creator→User used the previously authorized developer control. Existing Published zero-price Curriculum was added through Explore, cart had one EUR0 item/Total free, and Proceed to checkout showed Processing then cleared the cart/navigated to Library. Reload retained the Course card; Open loaded the Product and Course content. Read-only SQL before/after proves zero→one ACTIVE grant and buyer orders zero→zero. This is a genuine deployed browser/server journey, separate from the isolated API batch. Account owns this Product, so even before enrollment it exposed Edit product/content without a grant. DISC-018 non-owner transition remains unexecuted and needs a separate buyer or specifically authorized other-owner fixture.

Creator restored through the same control, verified in read-only DB and settled Creator Dashboard. Initial /app navigation briefly showed Guest shell then settled; no login/credential extraction needed. Dashboard now shows Customers1, Revenue0, Sales0, reflecting retained free grant. Product status/content unchanged; no paid checkout, provider, upload, publication or Admin elevation. No deletion performed. Existing Article raw JSON presentation remains previously reported; no additional defect/retest scored.

Evidence: browser-free-course-batch-2026-10-03.json (four restricted DB observations and one browser step/limitations node), browser-free-course-library-2026-10-03.jpg. One passing journey screenshot, no per-click files. Owned tunnels terminated. Main tab769287843 at /app Creator Dashboard, account menu closed, retained for continuation. Pending Admin/local-storage guidance unchanged.

Resume browser journeys using current live state. The new free grant supplies a real Customer relationship for Customers/detail/read-only reporting checks; use OWNER-A only and avoid exporting private identity/contact fields. Separate buyer still required for non-owner content access. Complete remaining multi-item/role/controlled-failure matrices without treating these portions as full cases. Keep API and browser evidence separately labelled.

Validation: CSV exactly matches 986 append-only JSONL rows, all493 catalog IDs present, latest counts/projection consistent, all894 baseline rows retained, all evidence links exist. New API batch eight unique nodes, 11 embedded source hashes, 32 backend and four frontend reference hashes verified. No application source edits. QA files are outside the documentation site; no site build needed for these operational records.

## Real browser Customer and free-reporting continuation — 3 October 2026

950 assessed variations (807 Pass, 88 Fail, 46 Needs clarification, 9 Blocked), 996 historical attempts. Originals: 176 not started, 196 partial, 121 fully assessed (109 Pass, 5 Fail, 7 Needs clarification); 372 remain. This turn progresses the goal: ten new actual browser portions (nine Pass, one Fail) and CUSTOM-003 now fully assessed. No new issue; existing BUG-003 gains a Customer reproduction.

Fresh Creator Dashboard verified, then real Customers shows one Buyer/one Course/EUR0. Customer detail: sinceOct3, zero orders, one active access, no membership. Overview/Purchases/Access/Notes/Overview/reload gives matching selected tabs/panels; Purchases empty, Access Active/Free enrollment/GrantedOct3/no end date, Notes persistence-unavailable without input, Overview No tags and one Access granted event. No grant/revoke/email/edit-customer actions. These are free-only portions of CUSTOM-005/006/008/009; paid/revoked/manual/multiple-row/history-limit checks remain.

CUSTOM-003 completion: Active member/Past due/Waitlist each tested after restoring populated Buyer control1; Active/Past due/Cancelled membership each tested after restoring No membership control1. Every unsupported result has correct selection, zero customers, no customer link and filter-empty copy. Clear filters resets defaults and restores1. Initial quick reads used AX diffs and equal-zero states; those were inconclusive and not scored. The completion matrix instead uses full DOM snapshots and populated→empty controls. Historical empty-list passes remain unchanged.

CUSTOM-002/004 portions: unmatched synthetic name0, mixed-case name1, unrelated synthetic Download0, associated Curriculum1 and reset1. With combined search/filter, actual empty copy prioritizes search. One initially incorrect filter-heading expectation timed out; current state inspected, expectation corrected, and independent filter-only control executed. No product failure inferred from that harness expectation. Email search, multi-customer sorting and pagination/page-reset remain.

BUG-003 extends to the Customer list accessible identity/row and detail heading, both appending literal null; reload reproduces while sidebar name is clean. Restricted deployed SQL confirms surname SQLNULL, not stringnull. Only field-shape booleans are retained; no actual identity/contact values copied into JSON. Current helper concatenates nullable name fields and frontend retains the resulting nonblank value; this supports the local-source cause, while deployed revision remains unknown. Contact-free cropped screenshot retained. Profile unchanged.

ANALYTICS-014 free-only portion: Customers1/one Course/zero orders/one access/EUR0; Analytics Last30days Customers1/new1, revenue/orders/refund/failed0; Sales Last30days zero orders/revenue/refunds/failed and No sales yet; Dashboard Customers1/Sales0/Revenue0. No fixed Clock/UTC response-window audit or paid/failed/refund/multi-item journey claimed.

Evidence is one browser-customer-relationship-batch-2026-10-03.json with seven nodes, six unavailable-filter cells, source hashes and one restricted DB snapshot; customer-null-name-2026-10-03.jpg is the only new screenshot. Embedded DB-reader hash and five implementation references verified. Ledger/CSV/coverage/progress/catalog/evidence validation passes; all894 baseline rows preserved. No implementation or Docusaurus page changes. QA-only files outside the site do not require repeating earlier site build/typecheck.

Current state: main Chrome769287843 /app Creator Dashboard, account menu closed and handoff retained. Creator unchanged this turn. Search/filter controls cleared. Existing synthetic ACTIVE free grant retained, zero buyer orders, no Product/profile/grant mutation. Owned database tunnel stopped. No financial/provider/upload/publication/Admin action or raw-log retention. Pending Admin/local-storage guidance unchanged.

Resume real browser journeys where current fixtures suffice; newly qualified Customer supports further detail/negative-route and reporting checks. Larger Customer/payment/access matrices require independent buyer and paid/refunded/manual/revoked fixture data or a specifically authorized controlled environment. Continue independent catalog API matrices separately when browser prerequisites prevent progress; never count those as browser journeys. Goal active and incomplete.

## Persistent reporting data — 3 October 2026

The user ran the validated transactional seed with the existing development database owner and authorized retaining it.25disabled fictional Users/32Hidden Products/29FAKE historical Orders/77entitlements; scoped read-only verification and real deployed browser checks recorded. Observer permissions unchanged. See fixtures.md, session-notes.md and browser-populated-reporting-batch evidence. No real payment/provider/upload/deployment or role change. Current checkpoint127/493originals fully assessed,366remaining; test execution remains incomplete.

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

## Saved-order checkpoint — 4 October 2026

1178 assessed variations (1023 Pass, 100 Fail, 46 Needs clarification, 9 Blocked); 1225 historical attempts. Of493 originals: 152 not started, 194 partial, 147 fully assessed. 346 originals still need checks.

BUG-031: existing Storefront/landing permutations collide with unique constraints. Six new landing configs retained with empty marketing/MEDIA_RIGHT/Contents+Creator visible; five default orders, Hidden reporting Course retains Creator-first order. Storefront retains DARK/#ffbd41/MODERN, explicit Curriculum feature and51-ID custom order; public original visible presentation preserved. Product metadata/profile fingerprint unchanged; Creator Dashboard verified. See session notes and feature batches.
