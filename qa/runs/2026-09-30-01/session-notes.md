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
