---
title: GalRichTextEditor
---

### GalRichTextEditor (quick notes)
- **Location:** `src/components/gal-rich-text-editor/`
- **Props:**
  - `initialContent?: JSONContent` — TipTap document to seed the editor
  - `onChange?(content: JSONContent)` — fired on every editor update with TipTap JSON
- **Usage:**
  - A TipTap-based rich text editor with `StarterKit` + `Image` extensions.
  - Renders a toolbar via `GalRTEMenuBar` and the editable surface via `EditorContent`.
  - Emits the whole **TipTap JSON document** on every change so callers can persist it.
- **A11y:**
  - TipTap’s content area is a contenteditable element. Provide a visible label or heading for screen readers (e.g., `<label htmlFor>`, or an aria-label on the container).
  - Ensure focus styles are visible when the editor is active.

### Example
```tsx
import GalRichTextEditor from '@/components/gal-rich-text-editor/gal-rich-text-editor.component';
import type { JSONContent } from '@tiptap/react';

export default function LessonEditor() {
  const [doc, setDoc] = useState<JSONContent | null>(null);

  return (
    <div>
      <h2>Write your lesson</h2>
      <GalRichTextEditor
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