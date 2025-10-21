---
title: GalRTEMenuBar
---

### GalRTEMenuBar (quick notes)
- **Location:** `src/components/gal-rich-text-editor/gal-rte-menu-bar/`
- **Props:**
  - `editor: Editor | null` — TipTap editor instance; required for commands.
- **Usage:**
  - Toolbar for TipTap’s rich text editor. Handles formatting actions (bold, italic, headings, lists, image insertion).
  - Built to work directly with the `editor` instance created in `GalRichTextEditor`.
- **A11y:**
  - Each formatting option is a `<button>`.
  - Add `aria-pressed={editor.isActive(...)?true:false}` for accessible state toggles.
  - Include `aria-label` on buttons (e.g., “Toggle bold”, “Insert image”).

### Example
```tsx
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import GalRTEMenuBar from '@/components/gal-rich-text-editor/gal-rte-menu-bar/gal-rte-menu-bar.component';

export default function EditorWithMenu() {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: '<p>Hello <strong>world!</strong></p>',
  });

  return (
    <div className="editor-wrapper">
      <GalRTEMenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
```


### Notes
- Buttons available:
    - Bold / Italic
    - Heading levels 1 and 2
    - Bullet list
    - Image insertion (via `window.prompt`)
- State:
    - Each button uses `editor.isActive(type)` to show the active format visually.
- Styling:
    - `menubar` container wraps all buttons horizontally.
    - `.is-active` style highlights the current formatting mode.
- Extensibility:
    - Add new buttons for underline, link, blockquote, code, etc.
    - Replace `window.prompt` for image upload with a modal or integrated picker.
    - Add keyboard shortcuts via TipTap commands.


### Example CSS (simplified)
```css
.menubar {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.menubar button {
  border: 1px solid #ccc;
  background: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
}

.menubar button.is-active {
  background: #6366f1;
  color: white;
  border-color: #4f46e5;
}
```

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025