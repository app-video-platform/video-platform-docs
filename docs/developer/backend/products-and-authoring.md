---
title: Products and Authoring
sidebar_position: 5
---

# Products and Authoring

## Supported Product model

The backend currently persists three Product types:

| Type | Type-specific model |
|---|---|
| `COURSE` | Ordered sections containing lessons |
| `DOWNLOAD` | Ordered sections containing files |
| `CONSULTATION` | Consultation configuration fields |

Supported statuses are `DRAFT`, `PUBLISHED`, and `HIDDEN`.

`MEMBERSHIP` exists in the frontend but is not a backend Product type. The
backend does not currently persist Membership configuration, content, feed
ordering, subscriptions, or recurring-pricing metadata.

## Shared Product fields

Concrete Product entities share these concepts:

- UUID
- name and description
- image reference
- type and status
- owning User
- price
- customer count
- created and updated timestamps

Because the entity uses `TABLE_PER_CLASS`, these fields are stored in each
concrete Product table rather than a shared Product table.

## Creation rules

Product creation requires `CREATOR` or `ADMIN`.

- A Creator is always assigned as the owner of their own new Product. A
  caller-supplied foreign `userId` is not trusted.
- An Admin must provide an owner.
- The Admin-selected owner must exist and have exactly the `CREATOR` role.
- The Product type must have a registered `ProductTypeHandler`.

The frontend uses a two-step draft flow, but the backend contract itself is a
typed Product creation operation. End-to-end behavior must be verified against
both repositories.

## Updates

Creators can mutate only Products they own. Admins can mutate Products across
owners.

Generic PATCH maps the existing Product and partial JSON into the concrete DTO.
For Course and Download Products, generic PATCH intentionally excludes nested
details. Sections, lessons, and files have separate APIs and transaction
boundaries.

Both a typed `PUT /api/products` and canonical
`PATCH /api/products/{productId}` currently exist. Prefer the canonical ID path
for new partial-update integrations while preserving existing consumers.

## Deletion

Product deletion:

1. Resolves the concrete Product and checks authorization.
2. Deletes entitlement records for the Product.
3. Dispatches deletion through the type handler.
4. Records an Admin audit event when the current actor is an Admin.

Concrete Product child records use cascade/orphan behavior and database foreign
keys where configured. Deletion changes require both JPA and migration review.

## Sections

Canonical section routes work for Course and Download Products.

- A section belongs to exactly one concrete Product.
- Sections have title, description, position, and timestamps where supported.
- Course sections and Download sections use separate entity/table types.
- Services reject section operations for unsupported Product types.
- Updating or deleting a section verifies that it belongs to the Product path.

## Lessons

Lessons are supported only for Course Products.

- A lesson belongs to one Course section.
- Supported lesson types are `VIDEO`, `ARTICLE`, and `QUIZ`.
- Lessons have title, optional description, type-specific content fields,
  position, and timestamps.
- Section/Product ownership and parent-child relationships are checked before
  mutation.

Video and article fields exist in persistence, but the current frontend does
not yet provide a complete reliable media/article delivery workflow.

## Quizzes

A Quiz belongs one-to-one with a Course lesson. Authoring validates that the
lesson is a Quiz lesson and that the actor owns the parent Product or is an
Admin.

Supported question types:

- `multiple_choice_single`
- `multiple_choice_multi`
- `true_false`

Important validation rules include:

- at least one question
- positive question points
- passing score between 0 and 100 when present
- option and correct-answer rules appropriate to the question type
- exactly two True/False options with one correct answer
- submitted question and option IDs must belong to the Quiz being answered
- duplicate answers for one question are rejected

Scoring awards all points for an exactly correct answer and no points for a
partially correct answer. Multiple-select answers must equal the complete set of
correct options. If no passing score is configured, an attempt is considered
passed.

Every submission persists an attempt with points, percentage, pass result, and
normalized answers.

## Search and discovery

Product search uses Spring Data pagination and PostgreSQL trigram indexes for
Course and Download names. User-scoped and global search routes exist.

Search/summary routes currently do not all apply a consistent `PUBLISHED`
filter. Before using them for a public catalogue, define and test server-side
visibility semantics across all concrete Product tables, including
Consultations.

## Legacy routes

Legacy typed Product reads/deletes, Course section/lesson routes, and generic
file routes coexist with the canonical nested API. Do not remove them without
checking frontend usage and providing a migration path.

## Related pages

- [API and Swagger](./api-and-swagger.md)
- [Persistence and Data Model](./persistence-and-data-model.md)
- [Entitlements and Content Access](./entitlements-and-content-access.md)
- [Frontend Products API](../api/products.md)

