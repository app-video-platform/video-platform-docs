---
title: GalUppyFileUploader
---

### GalUppyFileUploader (quick notes)
- **Location:** `src/components/gal-uppy-file-uploader/`
- **Props:**
  - `onFilesChange?(files: File[])` — emits native `File` objects when files are added/removed
  - `allowedFileTypes?: string[]` — e.g. `['image/*']`, `['video/*','audio/*']`
  - `maxNumberOfFiles?: number` — default `10`
  - `maxFileSize?: number` — bytes; default `5 * 1024 * 1024` (5MB) in this wrapper
  - `disableImporters?: boolean` — hide Google Drive / Dropbox / OneDrive / URL / Unsplash (default `false`)
- **Usage:**
  - A preconfigured Uppy Dashboard with XHR upload (endpoint `/upload`) and optional importers via Companion.
  - Emits controlled file list via `onFilesChange` so the parent can show previews or push to API.
- **A11y:**
  - Uppy’s Dashboard is keyboard accessible (focusable, ARIA roles).
  - Provide clear helper text (e.g., accepted types and size limits) via `note` or surrounding copy.

### Example
```tsx
import GalUppyFileUploader from '@/components/gal-uppy-file-uploader/gal-uppy-file-uploader.component';

function MediaStep() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div>
      <GalUppyFileUploader
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
- Upload target: This wrapper configures `XHRUpload` to `POST /upload` with `formData` and field name `file`.
    - Implement that route on your backend or change the endpoint.
- Importers: When `disableImporters=false`, enables Companion integrations:
    - Google Drive, Dropbox, OneDrive, URL, Unsplash (via `https://companion.uppy.io`)
    - If self-hosting Companion, change `companionUrl`.
- Thumbnails: If `allowedFileTypes` includes `'image/*'`, `ThumbnailGenerator` is enabled to generate previews.
- Styling: Uppy styles are imported in the component:
    - `@uppy/core/dist/style.css`, `@uppy/dashboard/dist/style.css`
- Cleanup: Uppy instance is destroyed on unmount to avoid memory leaks.
- Extensibility:
    - Show upload button and call `uppy.upload()` programmatically.
    - Localize strings or override Dashboard `note`.
    - Track `upload` events to surface progress to parent.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025