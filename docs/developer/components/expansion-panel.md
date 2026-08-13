---
title: LegacyExpansionPanel
---

### LegacyExpansionPanel
> Collapsible container component with accessible behavior and flexible headers.  

---

#### Location
`src/shared/ui/legacy-expansion-panel/`

---

### Props

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| `header` | `string` | — | Text displayed in the clickable header. |
| `children` | `ReactNode` | — | Content rendered inside the panel when expanded. |
| `defaultExpanded?` | `boolean` | `false` | Sets the initial expanded state (uncontrolled mode). |
| `disabled?` | `boolean` | `false` | Disables toggle interaction. |
| `onToggle?` | `(isOpen: boolean) => void` | — | Callback fired when the panel opens or closes. |

---

### Usage

#### Standalone (Uncontrolled)
```tsx
<LegacyExpansionPanel header="More information" defaultExpanded>
  <p>This section contains additional details for advanced users.</p>
</LegacyExpansionPanel>
```

### Accessibility

- Toggle element is a `<button>` with:
  - `aria-expanded`, `aria-controls`, and `aria-disabled` attributes.
  - `role="region"` applied to the content container.
- Focusable and keyboard-operable by default.
- Works with screen readers and supports nested interactive content.

### Behavior

- Expands/collapses smoothly using a CSS transition on `max-height` based on `ref.scrollHeight`.
- Maintains its own open/closed state.
- Calls `onToggle` when the panel state changes.

### Style Classes

| Class                             | Purpose                               |
| --------------------------------- | ------------------------------------- |
| `.legacy-expansion-panel`         | Base wrapper                          |
| `.expansion-panel__header`        | Clickable header button               |
| `.expansion-panel__icon`          | Arrow icon container                  |
| `.expansion-panel__content`       | Collapsible region                    |
| `.expansion-panel__content-inner` | Inner wrapper for padding/content     |
| `.expanded` / `.collapsed`        | State indicators for arrow rotation   |
| `.open`                           | Expanded content state                |
| `.disabled`                       | Disabled visual and interaction state |


### Notes

- Keep content lightweight for smoother animation performance.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Wed, 22 Oct 2025
