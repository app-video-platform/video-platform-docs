# Progress

Run in progress. Last checkpoint: 2026-10-09T13:20:38.625584+00:00

## Original test cases

| State | Cases |
| --- | ---: |
| Original catalog total | 493 |
| Not started | 67 |
| Partially assessed; more checks needed | 239 |
| Fully assessed | 187 |

**306 original cases still need execution or additional checks.** Fully assessed does not mean passed: {'Pass': 165, 'Needs clarification': 8, 'Fail': 14}.

## Individual checks

**2248 distinct case variations have assessment results recorded.** One original case can generate several checks for different roles, inputs, states or assertions. This count is not completed original cases and includes blocked entries that were not executed.

{'Pass': 1992, 'Fail': 184, 'Needs clarification': 61, 'Blocked': 11}

Ledger contains 2296 historical attempt rows. 3 latest Not run entries correct mistaken case associations and are excluded from assessed-variation counts. Historical attempts are retained.

The exact number of remaining individual checks is not yet known: many original cases still require their role/data variations to be expanded.

Last verified real role: CREATOR/Dashboard on 9 October in signed-in IAB. Original synthetic Consultation €15 cart preserved. The earlier Chrome Course cart remains uninspected; no cross-browser cleanup assumed.

Resume: read session-notes.md for the next action and fixture state. Never treat an unrecorded variation as passed. Controlled local browser/API results retain their scope in coverage and evidence; they do not establish deployed service/authentication/storage parity.

Access: signed-in built-in browser usable after user login; Chrome extension remains disconnected. Restricted vp-read-logs returns 200 lines without raw-log retention. Read-only database verified on replacement loopback tunnel on port 15432 with 20-second keepalives, current role CREATOR. Temporary port 15433 diagnostic tunnel closed; no credential/database-permission changes.

Latest: PROD-032 completed as the catalog explicitly specified controlled identical summaries and two builds. Eight paired display comparisons pass locally; no deployed authentication/persistence claim. No new issue or evidence file. Local tabs and servers closed.

Latest cart checkpoint: five local browser checks pass for the 21/20-item limit, controlled 503 recovery, retry after reload/reordering and a changed-item retry key. CART-009, CART-010 and CART-015 are now partial; their deployed backend and remaining variants still need execution. Actual deployed Guest testing adds a pointer failure at 1280px/1440px and a passing keyboard recovery, extending BUG-012. No new issue or evidence file. Both temporary tabs and the server are closed; the synthetic local cart is empty.

Latest checkout checkpoint: 11 local browser response/recovery assertions pass. CART-011, CART-013, CART-014 and CART-016 are now partial; their real orders, entitlements, idempotency semantics and remaining roles still need execution. No new issue or evidence file. Temporary cart, tab and server cleaned up.

Latest deployed checkpoint: 8 browser assessments, 6 Pass / 2 Fail. Same-account role/cart reload checks pass; saved Course, Download and Consultation summaries match read-only DB. Membership pricing and saved Course editing reproduce existing BUG-002/001. ENV-007 is now partial, not complete: clean-profile and remaining nested/media/config/library fixtures outstanding. No new issue or evidence file. 308 original cases remain incomplete.

Latest identity checkpoint: seven local browser assessments, six Pass and one Fail. CART-021/023/025 now have passing local frontend guard results and remain partial because their required real backend environment was not established. Normal duplicate prevention passes, but the actual duplicate-ID checkout guard in CART-022 is still Not run. New BUG-048 documents an unremovable missing-ID cart item. Temporary origin storage, cart, tab and server cleaned up. 308 original cases remain incomplete; 48 issues are documented.

Latest enrollment/paid checkpoint — 9 October: Thirteen assessments: 11 Pass / 1 Fail / 1 Blocked. Actual local full App/backend/PostgreSQL prove non-owner free grants, typed Library reloads, FAKE PAID order/purchase grant/cart clear and duplicate-free retries. BUG-005 persists; Published Membership prerequisite prevented by schema. Original 493: 71 not started, 237 partial and 185 fully assessed; 308 incomplete. No new issue or evidence file.

Latest partial/stale-cart checkpoint — 9 October: Eleven new browser assessments pass. CART-026 is fully assessed against its explicit User price/hide/delete contract using actual local frontend/backend/PostgreSQL; seven variations include fresh-summary recovery. CART-007 is now partial; failure preserves one grant and the cart, restored retry adds the second grant without duplicates. First-time free-cart enrollment also passes. Original 493: 69 not started, 238 partial, 186 fully assessed; 307 incomplete. No new issue or evidence file.

Local fixture remains live for continuation: frontend handle27209/port4329, backend handle42456/port52014, private PostgreSQL port51980. Both terminal handles re-polled live; database readback succeeded. Real signed-in Creator tab1/cart and observer tunnel87598 preserved. Synthetic local session file remains private until final fixture cleanup.

Latest role/cart checkpoint — 9 October: Eight additional role/cart browser assessments: five Pass and three Fail. New BUG-049: Creator free/paid checkout and corrected partial-enrollment retry persist access and clear cart, then navigate to unauthorized Library. Synthetic Admin free/paid checkout and partial recovery reach Library and survive reload. Cases remain partial. 493 originals: 69 not started, 238 partial, 186 fully assessed; 307 incomplete. 49 issues; existing evidence file extended.

Actual loopback fixture retained: frontend54153/port4329 (previous27209 confirmed exit0 after session refresh), backend42456/port52014, PostgreSQL51980. Real cloud account remains untouched. Private synthetic session file stays mode600. Local Creator cart empty; cloud tab1 and local tab3 retained for continuation.

Latest collection-storage checkpoint — 9 October: Seventeen collection-storage browser assessments: nine Pass/eight Fail. CART-022 exact User duplicate-ID guard fully assessed: message/no request, repeat after reload and normal removal. CART-005 now partial: malformed JSON recovers in all four roles; valid wrong-shaped cart/wishlist data causes unhandled errors (new BUG-050). Actual browser storage read/write denial remains open. Original493:67 not started/239partial/187full;306 incomplete.50 issues; existing evidence file extended.

Loopback frontend7767/port4329 retained (previous54153 confirmed exit0); actual backend42456/port52014 and private PostgreSQL51980 unchanged. Local User cart and wishlist restored empty with visible fixture controls; final empty normal Cart verified. Real cloud account untouched; tabs1/3 retained.
