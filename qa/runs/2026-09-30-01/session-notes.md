# Session notes

## Checkpoint at 150 variations

135 Pass, 12 Fail, 3 Needs clarification. These are assertion variations, not 150 fully completed catalog cases. Only NAV-002 has all catalog route variations assessed for its Guest session.

OWNER-A currently USER in existing Chrome tab 769287702, at Shopping Cart with one synthetic Consultation. The owner explicitly approved temporary ADMIN → USER → CREATOR role cycle during this run. ADMIN was verified by DB and UI; USER verified by DB and UI. Restore CREATOR after buyer checks. Guest uses independent in-app browser tab 1, at Draft Membership denial. Restricted logs available; read-only DB tunnel terminal session 84448. Recheck availability after interruption.

Four new product fixtures and native Post are listed in fixtures.md. Consultation is Published; others Draft. Guest cart contains one synthetic Consultation; owner's User cart also contains that Consultation after Wishlist Move to cart. Owner Wishlist currently empty. No purchases, files or calendar writes performed. Role changes are limited to the approved current account. Original owner products untouched. Admin missing-owner creation returned Access Denied; DB confirms no matching Course was created.

Confirmed issues: BUG-001 saved edit workspace blank for all four types and Dashboard Add images action; BUG-002 positive price absent on detail pages; BUG-003 literal null in Guest creator names; BUG-004 Explore Creator link opens wrong blank route; BUG-005 Library aria-selected incorrectly stays All products for Admin and User. Catalog visibility policy remains unclear: Guest summaries/search return Draft metadata, while full Draft API reads deny access. Analytics Membership wording is also marked Needs clarification. Wishlist/Cart hardcoded ratings are cataloged placeholders, not verified real reviews.

API origin verified from public deployed frontend configuration: https://serious-debauchery.click. No authenticated terminal API session established. Direct backend API navigation in Chrome was blocked by client; that temporary tab was closed. Do not extract browser credentials. Visible account menu role controls succeeded through the app. Eight Guest authentication checks (no cookie and synthetic malformed cookie across profile, entitlements, admin users, root) returned401/empty body. Deployed docs interface returned401 without authentication.

Next: record the just-observed User self-purchase rejection (toast You cannot buy your own product, Cart retained). Then Cart totals/removal, Wishlist already-in-cart/dropdown variation, and remaining User allowed-route checks. Restore CREATOR through the app account menu and verify DB. Paid success/entitlement journeys need another owner and verified fake-provider configuration; do not treat the Test payment label alone as proof. Saved authoring and injected failure/configuration cases still need their prerequisites. Avoid retrying known blank saved editing routes.

Results JSONL is authoritative. Rebuild CSV/progress using /private/tmp/vpqa_record.py with empty JSON array after browser-appended records. Do not mark a parent case complete until all role/data assertions are accounted for.
