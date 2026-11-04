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
2. The backend verifies the Product type, ownership, and section relationship,
   and records an expiring receipt for the generated key and filename.
3. The browser uploads the binary directly to object storage.
4. The client confirms using the server-issued key, filename, byte size, and MIME
   type before the receipt expires. Canonical and legacy confirmation apply the
   same receipt checks.
5. The backend verifies the object size and MIME metadata in Spaces and stores
   one `files_download_products` row. MIME comparison ignores case and parameters;
   an empty browser MIME type is treated as `application/octet-stream`.
   Repeating a successful confirmation returns
   the same file. Unissued, expired, foreign, missing, or mismatched uploads are
   rejected; request a new upload URL when a receipt expires.

The optional client URL must match the server-issued URL. The backend computes
its response URL rather than accepting an arbitrary client URL. Receipts are
bound to the Product owner, Product, and section; they are removed when the
owner or section is deleted. Expiry rejects late confirmation without deleting
the object. Existing file delivery additionally checks that stored keys match
the owning user and section before signing, including metadata created before
receipt enforcement.

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

Objects use owner/Product-scoped keys, object-level `public-read` ACLs, and
public CDN URLs. The dedicated public upload method accepts only canonical
Product presentation keys. Protected Download uploads keep their private
presigned flow. Presentation object permissions are independent of Product
status: hiding a Product does not revoke an existing marketing-media URL.
Metadata is stored in
`product_media` and returned in Product responses with immediate `READY`
status. Image limits are 10 MB for JPEG, PNG, WebP, or GIF; promo-video limits
are 100 MB for MP4 or WebM; gallery count is 20. These defaults are runtime
configurable. Replacement, removal, reorder, and Product deletion are handled
server-side. Object deletions run only after the database transaction commits;
a rollback leaves the previous objects untouched. Product deletion checks
ownership before any metadata or storage cleanup. Failed post-commit object
cleanup is logged after active metadata is removed.

### Existing presentation objects after a permission repair

Changing upload code affects new objects. Existing private presentation objects
need a separate, reviewed object-ACL repair. Select exact `READY` rows from
`product_media`, verify the owner/Product/kind namespace against the owning
Product, and confirm that each key identifies presentation media. Do not apply
this repair to protected Download objects or change the bucket's permissions.

With the existing Spaces credentials configured privately in the AWS CLI,
inspect and then repair one verified object:

```bash
aws --endpoint-url "$SPACES_ORIGIN_ENDPOINT" s3api get-object-acl \
  --bucket "$SPACES_BUCKET" --key "$VERIFIED_PRODUCT_MEDIA_KEY"
aws --endpoint-url "$SPACES_ORIGIN_ENDPOINT" s3api put-object-acl \
  --bucket "$SPACES_BUCKET" --key "$VERIFIED_PRODUCT_MEDIA_KEY" --acl public-read
```

Verify anonymous retrieval from both origin and CDN afterward, including image
rendering or video playback. A bucket policy can still deny access even when an
object has a public ACL; inspect that policy if retrieval remains forbidden.
Use the Spaces CDN cache controls if an earlier denial remains cached. No ACL
repair runs automatically at application startup or during a migration.

[DigitalOcean object-permission guidance](https://docs.digitalocean.com/products/spaces/how-to/set-file-permissions/)
explains public object ACLs and temporary access to private files.

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

Microsoft consent initialization encodes scopes, the configured redirect URI,
signed state, and optional login hint as opaque query values. Consumers should
navigate to the returned authorization URL without decoding and rebuilding
it. Initialization alone does not create a connection or prove provider
consent/token exchange.

Microsoft token redemption uses the form writer for the original authorization
code, client secret, redirect URI, and other fields. Pass original values to
the writer so it encodes each field exactly once. This preserves characters
such as `+`, `&`, and `%` in the values Microsoft decodes. See
[Microsoft’s token redemption contract](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow#redeem-a-code-for-an-access-token).

Microsoft token exchange requires a nonblank string access token before a
connection can be encrypted and stored. Missing, blank or wrongly typed access
values and malformed response bodies fail with a controlled OAuth error.
Rejected responses do not create a connection.

Provider token expiry is optional. Connection-list and Consultation summaries
retain connections with an unknown expiry and return a nullable timestamp;
they do not invent an expiry or expose stored token material.

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
