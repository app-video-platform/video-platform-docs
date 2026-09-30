---
title: Persistence and Data Model
sidebar_position: 7
---

# Persistence and Data Model

## Schema ownership

PostgreSQL is the production database. Hibernate runs with `ddl-auto: none`, so
JPA entity changes do not update the deployed schema automatically.

Liquibase is authoritative. The master changelog is:

`src/main/resources/db/changelog/db.changelog-master.xml`

It includes numbered SQL files from
`src/main/resources/db/changelog/scripts`.

## Migration rules

- Add a new migration for every schema change.
- Include it from the master changelog in execution order.
- Do not rewrite a migration that may already have run.
- Keep entity mappings, database constraints, converters, and DTO assumptions
  aligned.
- Test constraints, cascades, inheritance, and query behavior affected by the
  migration.
- Plan safe forward repair for destructive or data-transforming changes.

## Table inventory

### Identity and authentication

| Table | Purpose | Important relationships/constraints |
|---|---|---|
| `users` | Account identity, profile, verification state, auth provider, onboarding, optional public email | UUID primary key; unique login email |
| `roles` | `ADMIN`, `CREATOR`, and `USER` role records | Unique role name |
| `user_roles` | User-to-role assignment | Foreign keys to users/roles; unique `user_id` enforces one role |
| `verification_tokens` | Email-verification token lifecycle | Unique token; belongs to a user |
| `refresh_tokens` | Refresh-token lifecycle | Unique token; associated with user email |
| `social_media_links` | Profile social links | Belongs to a user; cascades on user deletion |

The JPA User model exposes roles as a set, but the database deliberately
enforces one role per user.

### Products

| Table | Purpose | Important relationships/constraints |
|---|---|---|
| `course_products` | Shared Product fields for Course Products | Belongs to owner User; owner deletion cascades |
| `download_products` | Shared Product fields for Download Products | Belongs to owner User; owner deletion cascades |
| `consultation_products` | Shared Product fields plus consultation configuration | Belongs to owner User; several setup fields are nullable for drafts |
| `membership_products` | Shared Product fields plus Membership ordering mode | Belongs to owner User; recurring EUR pricing; Draft/Hidden only |
| `product_media` | Product thumbnail, gallery, and promo-video metadata | Product UUID without a cross-table FK; owner/Product-scoped object key; unique kind/position slot |

There is no `products` table. JPA `TABLE_PER_CLASS` inheritance means each
concrete Product table stores the shared columns.

All concrete Product tables store `pricing_model`, `billing_interval`, and
`currency`. Existing Products were backfilled to `ONE_TIME`, no interval, and
`EUR`; Membership uses `RECURRING` with `MONTH` or `YEAR`.

`product_media.product_id` cannot reference one shared Product table because
none exists. Services validate the Product and remove metadata on Product
deletion. The existing Product `image` column remains synchronized with the
active thumbnail for summary compatibility.

### Membership authoring

| Table | Purpose | Important relationships/constraints |
|---|---|---|
| `membership_content` | Post bodies or Video/Resource file metadata | Belongs to Membership and cascades with it; type-specific shape checks |
| `membership_feed_entries` | Unified native-content and included-Product feed | Belongs to Membership; unique content/Product associations; positive optional manual position |

Included Product IDs cannot use one database foreign key because Products use
table-per-class storage. The service validates existence, owner, and allowed
Course/Download type, and removes feed references before an included Product is
deleted.

### Course content

| Table | Purpose | Important relationships/constraints |
|---|---|---|
| `course_sections` | Ordered Course sections | Belongs to Course; cascades when Course is deleted |
| `course_lessons` | Ordered Video, Article, or Quiz lesson shells/content | Belongs to section; cascades when section is deleted |
| `course_quizzes` | One Quiz definition per Quiz lesson | Unique `lesson_id`; cascades with lesson |
| `quiz_questions` | Ordered scored questions | Belongs to Quiz; points must be positive |
| `quiz_options` | Ordered answer options | Belongs to question |
| `quiz_attempts` | Persisted user submissions and scores | References Quiz, lesson, and user; stores normalized answers as JSON text |

Quiz passing score is constrained to 0-100 when present. Quiz titles and
descriptions were removed from `course_quizzes`; the lesson owns presentation
identity.

### Download content

| Table | Purpose | Important relationships/constraints |
|---|---|---|
| `sections_download_products` | Ordered Download sections | Belongs to Download Product |
| `files_download_products` | Uploaded file metadata and storage key | Belongs to Download section; tracks size, type, upload time, and count |

Storage objects live in DigitalOcean Spaces. These tables store metadata and
object paths; permanent delivery URLs should not be treated as public Product
fields.

### Consultation availability and calendars

| Table | Purpose | Important relationships/constraints |
|---|---|---|
| `consultation_availability_days` | Enabled state for a persisted Consultation weekday | Belongs to Consultation; unique Product/weekday; cascades on Product deletion |
| `consultation_availability_windows` | Ordered start/end ranges for one weekday | Belongs to availability day; cascades with it |
| `consultation_connected_calendars` | Encrypted provider tokens and expiry for a Creator connection | Belongs to a User; cascades on user deletion |

The table stores encrypted OAuth and refresh token material. Do not expose it in
API responses, logs, or documentation examples.

### Administration and access

| Table | Purpose | Important relationships/constraints |
|---|---|---|
| `admin_audit_logs` | Admin role/Product action history | Indexed by actor, target, action, and creation time |
| `product_entitlements` | User access to a Product UUID | Unique user/Product pair; status/source enums; purchase grants can reference the originating Commerce Order item; user deletion cascades |

`product_entitlements.product_id` cannot have a normal foreign key to one
concrete Product table because Products use table-per-class storage. Product
deletion therefore explicitly removes entitlement records in the service.

### Commerce

| Table | Purpose | Important relationships/constraints |
|---|---|---|
| `commerce_orders` | One-time buyer checkout and lifecycle | Belongs to one buyer and one Creator; unique buyer/idempotency-key pair; stores EUR minor-unit totals |
| `commerce_order_items` | Immutable Product and price snapshots | Belongs to an Order; unique Product per Order; quantity is currently fixed at one |
| `commerce_payment_attempts` | Provider checkout/payment state | One attempt per Order in the current foundation; unique provider session and payment identifiers |
| `commerce_payment_events` | Idempotent normalized payment events | Unique provider/event identifier; belongs to an Order |

Commerce Order items reference Product UUIDs without a database foreign key
because Products use table-per-class storage. Active purchase entitlements and
unexpired pending Orders therefore block Product deletion in the service.

### Public presentation

| Table | Purpose | Important relationships/constraints |
|---|---|---|
| `storefront_configs` | One Creator Storefront theme and featured Product | Unique Creator; cascades on Creator deletion |
| `storefront_product_order` | Creator-defined Product ordering | Unique Product and position per Storefront |
| `product_landing_page_configs` | Product-specific marketing description and hero layout | Unique Product UUID |
| `product_landing_visible_sections` | Ordered visible landing-page sections | Unique section per configuration |
| `product_landing_section_order` | Complete landing-page section order | Unique section and position per configuration |

Product references in these tables cannot target one shared Product table because
Products use table-per-class storage. Services validate existence and ownership,
and Product deletion removes landing-page, featured-Product, and ordering references.

### Legacy table

The first migration creates `dummy`, a bootstrap/test-era table that is not part
of the current domain model. Do not build new behavior on it.

## Search indexes

PostgreSQL extensions and indexes include:

- `pgcrypto` for UUID migration support
- `pg_trgm` for trigram search
- trigram indexes on Course and Download Product names
- trigram indexes on user first and last names
- relationship and lookup indexes for sections, lessons, quizzes, calendars,
  audit logs, and entitlements
- Commerce Order buyer/Creator/status lookups and Order-item/payment-event
  relationships
- Creator/payment-date indexes for paid, failed, and refunded reporting;
  Creator/buyer/status aggregation; and entitlement Product/user/status and
  purchase-item relationships
- Membership owner, content, feed ordering, and included-Product lookups

Consultation Product search indexing is not implemented alongside the Course
and Download trigram indexes in the current migration set.

## JPA and schema mismatches

When inspecting persistence, compare both entities and the final migration
history. Historical DDL may show an earlier constraint that a later migration
relaxes, such as nullable Consultation setup fields.

Do not infer the final schema from one migration file in isolation.

## Related pages

- [Architecture](./architecture.md)
- [Products and Authoring](./products-and-authoring.md)
- [Entitlements and Content Access](./entitlements-and-content-access.md)
- [Commerce and Payments](./commerce-and-payments.md)
- [Testing and Deployment](./testing-and-deployment.md)
