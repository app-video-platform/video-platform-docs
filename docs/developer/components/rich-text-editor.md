---
title: RichTextEditor
---

### RichTextEditor (quick notes)
- **Location:** `src/shared/ui/rich-text-editor/`
- **Props:**
  - `initialContent?: JSONContent` — TipTap document to seed the editor
  - `onChange?(content: JSONContent)` — fired on every editor update with TipTap JSON
- **Usage:**
  - A TipTap-based rich text editor with `StarterKit` + `Image` extensions.
  - Renders a toolbar via `RTEMenuBar` and the editable surface via `EditorContent`.
  - Emits the whole **TipTap JSON document** on every change so callers can persist it.
- **A11y:**
  - TipTap’s content area is a contenteditable element. Provide a visible label or heading for screen readers (e.g., `<label htmlFor>`, or an aria-label on the container).
  - Ensure focus styles are visible when the editor is active.

### Example
```tsx
import { RichTextEditor } from '@/shared/ui';
import type { JSONContent } from '@tiptap/react';

export default function LessonEditor() {
  const [doc, setDoc] = useState<JSONContent | null>(null);

  return (
    <div>
      <h2>Write your lesson</h2>
      <RichTextEditor
        initialContent={{
          type: 'doc',
          content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Hello!' }] }],
        }}
        onChange={(json) => setDoc(json)}
      />
      <pre style={{ background:'#f7f7f7', padding: 12, borderRadius: 8 }}>
        {JSON.stringify(doc, null, 2)}
      </pre>
    </div>
  );
}
```


### Notes
- Extensions: Uses `StarterKit` (paragraphs, headings, bold, italic, lists, etc.) and `Image`.
- Lifecycle: The `useEditor` instance is destroyed on unmount to prevent leaks.
- Styling: TipTap expects some base styles on `.ProseMirror` (selection, spacing). Add them to your global CSS to improve UX (e.g., min-height, focus outline).
- Persistence: Store `onChange` JSON to your backend; hydrate via `initialContent` when editing later.
- Extensibility ideas:
    - Add more extensions (link, code block, underline, YouTube, placeholder).
    - Debounce `onChange` or add “Save” button for manual persistence.
    - Image upload handler with a custom menu action that inserts an `<img>` node.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025

### Article initialization and preservation

In the Course `LessonEditor`, initialization depends on both `lesson.id` and `lesson.content`. Reopening/remounting reads the current draft body; loading the saved workspace reads persisted content. Changing initialization props does not reset an already-mounted Tiptap editor during typing, and opening alone emits no body edit. Supported Tiptap documents and plain-text fallback are retained; unsupported structured JSON shows an alert without mounting an editor that could replace the saved body. M2 handles editor initialization; the separate M7 reader conversion is described below.

See [saved workspace lifecycle](../architecture/state-and-data-flow.md#saved-workspace-and-nested-authoring) for separate Lesson autosave and navigation behavior.

### Article reader conversion and sanitization

`src/domains/app/pages/product-page/article-content.utils.ts` recognizes a supported Tiptap root `doc` and recursively checks allowed nodes/marks before generateHTML. Installed reader extensions are StarterKit, Link, TaskList/TaskItem, Image and Underline. Supported nodes include paragraphs, text, headings, lists/list items, blockquotes, code blocks, breaks/rules, images and task lists/items; marks include bold, italic, strike, code, link and underline. This is a subset, not arbitrary extension support.

Generated HTML and recognized legacy HTML pass through DOMPurify before the reader uses dangerouslySetInnerHTML. Legacy plain text is a React text node. Empty content, malformed JSON beginning with `{`/`[`, unsupported documents or conversion failures produce no reader body; serialization is not exposed as fallback. The helper does not migrate or overwrite CourseLesson.content and does not change owner/entitlement authorization.

Utility tests cover formatted paragraphs/marks, lists/HTTPS links, legacy HTML sanitization (scripts, unsafe attributes/schemes) and plain text. Product reader tests check guest/no-entitlement redaction and authorized rendering. Full browser/read/reload and live-backend journeys remain pending; see [M7 authoring lifecycle](../architecture/state-and-data-flow.md#m7-course-content-and-ordering).
