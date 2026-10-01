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
- Retain working tab769287816 without reload or navigation for the upload test. No publication requested.
