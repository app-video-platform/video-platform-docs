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
