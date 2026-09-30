---
title: Integrations and Files
sidebar_position: 8
---

# Integrations and Files

## DigitalOcean Spaces

The backend uses the AWS SDK S3 client against DigitalOcean Spaces.

### Creator upload flow

The canonical Download upload flow is:

1. The Creator requests a presigned PUT URL for a Product section.
2. The backend verifies the Product type, ownership, and section relationship.
3. The browser uploads the binary directly to object storage.
4. The client confirms the upload with file metadata and the storage key.
5. The backend stores a `files_download_products` row.

Object keys are namespaced by user, upload folder, section, generated file UUID,
and sanitized filename.

Deleting current file metadata does not visibly remove the object from storage
in the file service. Treat object lifecycle cleanup as a maintenance gap when
changing deletion behavior.

### Product marketing media

Product thumbnails, galleries, and promo videos use a separate raw-body flow.
The frontend sends the file to the backend, which validates ownership, MIME
type, size, and gallery count before streaming it to Spaces. This flow does not
use browser presigned uploads.

Objects use owner/Product-scoped keys and public CDN URLs. Metadata is stored in
`product_media` and returned in Product responses with immediate `READY`
status. Image limits are 10 MB for JPEG, PNG, WebP, or GIF; promo-video limits
are 100 MB for MP4 or WebM; gallery count is 20. These defaults are runtime
configurable. Replacement, removal, reorder, and Product deletion are handled
server-side. Failed object cleanup is logged after active metadata is removed.

### Customer download flow

Permanent object/CDN URLs are removed from Product responses. Authorized
delivery uses the entitlement endpoint, verifies Product/file ownership, and
creates a ten-minute presigned GET URL.

The Library lists entitled Products. Authorized file delivery still depends on
the customer Download experience exposing the download action.

## Email

SendGrid supports account email flows, including verification email delivery.
Provider credentials and sender configuration are runtime configuration and
must not appear in documentation examples or logs.

Registration currently logs more User/request detail than is appropriate for
authentication data. Redaction is a known security task.

## Google sign-in

Google sign-in verifies an ID token, resolves or creates the user, and issues the
same application cookie set used by local login.

The Google client ID is deployment configuration. Authentication changes should
test both existing-user and new-user flows as well as unverified/malformed token
behavior.

## Calendar providers

Calendar integration exposes:

- provider discovery
- connection initiation
- OAuth callback completion
- connection listing
- disconnection

Provider client classes exist for Google, Microsoft, and iCloud. Existing
classes do not prove equal end-to-end support. Inspect the provider switch and
client implementation before documenting a provider as production-ready.

OAuth state binds the provider and authenticated user and has an expiry. State
integrity and stored provider token confidentiality depend on separate signing
and encryption configuration.

The frontend currently exposes provider discovery and connection initiation,
but not the complete list/disconnect management flow.

## Configuration boundaries

Runtime configuration includes:

- PostgreSQL connection settings
- frontend/CORS domains
- JWT signing and expiry
- refresh-token duration
- object-storage access, bucket, region, and endpoints
- SendGrid credentials and sender
- Google sign-in client identity
- calendar state signing, token encryption, provider client credentials, and
  redirect URI
- development role-switch enablement

Use environment-managed values for all secrets and deployment-specific
configuration. Never copy current tracked values into Docusaurus.

## Related pages

- [Authentication and Security](./authentication-and-security.md)
- [Entitlements and Content Access](./entitlements-and-content-access.md)
- [Calendar Connections](../../product/core-concepts/calendar-connections.md)
- [Download Products](../../product/creators/download-products.md)
