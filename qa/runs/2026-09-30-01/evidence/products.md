# Product observations

PROD-003: /app/products initially shows 9 products. Search QA-no-match-2026-09-30 yields 0 products, query-specific no-match heading, Clear filters and Clear search. Clicking Clear search restores 9 products.

PROD-008 COURSE: create assigned ID ddd5bb80-183e-48d5-84cd-8819ca082a58; Basics workspace had Draft, readonly Course type, Curriculum with server Draft section. Reload blank, React #300. Database confirms DRAFT row and owner.

PROD-012 DOWNLOAD: all five relevant tabs opened from newly created workspace. Files shows Create a file group to start adding customer downloads. Media has Thumbnail/Gallery/Promo video.
PROD-017 DOWNLOAD: selected One-time, entered 12.50; read-only SQL confirms 12.50/ONE_TIME/EUR.

PROD-013 DOWNLOAD: name A then B entered in same tool call plus description B; read-only SQL confirms B and description B with price unchanged 12.50. Reloaded Overview preserves title/description; empty sections remain empty.
PROD-031 DOWNLOAD: list EUR12.50 versus Overview Price not set, reproducible after Overview reload.

CONS-004: new Consultation Availability displays duration50 and weekdays09-17 while Readiness says missing duration/weekly availability; SQL showed duration0 after method PHONE saved. Explicit duration30 and Saturday enable generated valid readiness.
PROD-023: Publish succeeds with thumbnail warning; SQL confirms PUBLISHED, price15, duration30, PHONE, before-buffer5, max3; public page reflects session metadata but price unavailable (BUG-002).
