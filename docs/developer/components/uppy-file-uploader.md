---
title: UppyFileUploader
---

### UppyFileUploader (quick notes)
- **Location:** `src/shared/ui/uppy-file-uploader/`
- **Props:**
  - `onFilesChange?(files: File[])` — emits native `File` objects when files are added/removed
  - `allowedFileTypes?: string[]` — e.g. `['image/*']`, `['video/*','audio/*']`
  - `maxNumberOfFiles?: number` — default `10`
  - `maxFileSize?: number` — bytes; default `5 * 1024 * 1024` (5MB) in this wrapper
  - `disableImporters?: boolean` — hide Google Drive / Dropbox / OneDrive / URL / Unsplash (default `false`)
  - `uploadMode?: 'UPLOAD' | 'SELECT_ONLY'` — default UPLOAD; SELECT_ONLY does not install XHRUpload
  - `note?: string` — Dashboard helper text
- **Usage:**
  - A Uppy Dashboard with optional importers via Companion. UPLOAD mode installs XHRUpload at `/upload`; SELECT_ONLY emits files for caller-owned persistence without installing a transfer plugin. The Dashboard upload button is hidden.
  - Emits controlled file list via `onFilesChange` so the parent can show previews or push to API.
- **A11y:**
  - Uppy’s Dashboard is keyboard accessible (focusable, ARIA roles).
  - Provide clear helper text (e.g., accepted types and size limits) via `note` or surrounding copy.

### Example
```tsx
import { UppyFileUploader } from '@/shared/ui';

function MediaStep() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div>
      <UppyFileUploader
        uploadMode="SELECT_ONLY"
        disableImporters
        allowedFileTypes={['image/*']}
        maxNumberOfFiles={5}
        maxFileSize={5 * 1024 * 1024}
        onFilesChange={setFiles}
      />
      <p>Selected: {files.length} file(s)</p>
    </div>
  );
}
```


### Notes
- UPLOAD mode configures `XHRUpload` to `POST /upload` with `formData` and field name `file`; this is not the Product media API or evidence that a production `/upload` route exists. SELECT_ONLY leaves transfer/persistence to the caller.
- Importers: When `disableImporters=false`, enables Companion integrations:
    - Google Drive, Dropbox, OneDrive, URL, Unsplash (via `https://companion.uppy.io`)
    - If self-hosting Companion, change `companionUrl`.
- Thumbnails: If `allowedFileTypes` includes `'image/*'`, `ThumbnailGenerator` is enabled to generate previews.
- Styling: Uppy styles are imported in the component:
    - `@uppy/core/dist/style.css`, `@uppy/dashboard/dist/style.css`
- Cleanup deactivates and detaches file-added/file-removed selection listeners before destroying the instance, so destruction cannot emit a false empty selection to the parent.
- Extensibility:
    - Show upload button and call `uppy.upload()` programmatically.
    - Localize strings or override Dashboard `note`.
    - Track `upload` events to surface progress to parent.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025

### Stable selection ownership

The current `onFilesChange` callback is stored in a ref. Effective allowed-file-type contents are serialized/memoized, so a new equivalent inline array or callback does not recreate Uppy. Initialization depends on restrictions and upload-mode/importer options; actual option changes or unmount still tear down the instance. Genuine user file removal emits the current selection. Do not promise File-object persistence across teardown, route changes or reload.

Membership Video/Resource and Course Video use this wrapper; normal editor rerenders preserve selection. Membership metadata-only saving and Course `pending-video-asset://` references do not establish binary storage, streaming or playback. Shared Uppy tests cover stable ownership/latest callback, actual removal and listener teardown (eight tests total). Editor regression tests support retained Membership selections through validation/Save and Course filename display. Native file selection was not exercised by the available M6 browser automation. See [Product API verification boundary](../api/products.md#m6-verification-boundary).

### Container-width dashboards (M14)

The shared wrapper passes `width="100%"` to Uppy Dashboard. Its
`.custom-uppy-dashboard` has `width: 100%` / `min-width: 0`, and
`.uppy-Dashboard-inner` has `max-width: 100%`. Product Media's section/upload
children can shrink, with narrow Thumbnail/Promo grid tracks using
`minmax(0, 1fr)`. Keep the dashboard within its parent instead of retaining a
fixed thumbnail width or hiding document overflow.

Thumbnail, Gallery and Promo continue to use the existing wrapper in SELECT_ONLY
mode, then caller-owned Product media APIs; M14 changes width, not upload modes,
selection lifecycle, limits, persistence contracts or Download deliverables.
`uppy-file-uploader.test.tsx` asserts the Dashboard width prop using a mock; this
is configuration coverage, not real Uppy geometry. The reported local Creator
Course Media check covers all three dashboards at 320, 375, 390, 480, 768, 1280
and 1440px. Thumbnail measured 309px at 375px and 702px at 768px. Other Product
types/roles, keyboard Browse reachability and native upload/persistence remain
retest work. Do not infer upload success from a fitting Browse control. See
[long-content verification](../architecture/application-structure.md#long-content-and-media-layout-m14).
