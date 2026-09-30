# Reporting empty fixture check

Read-only query at 2026-09-30T10:38 UTC: SELECT status,count(*) FROM commerce_orders WHERE creator_user_id=OWNER-A GROUP BY status. Result: zero rows, consistent with Sales/Dashboard/Analytics zero-order history. No customer/order records exported.
