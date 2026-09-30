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
