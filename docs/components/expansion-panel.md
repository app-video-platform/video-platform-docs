---
title: GalExpansionPanel
---

### GalExpansionPanel
> Collapsible container component with accessible behavior and flexible headers.  
> Often used standalone or as part of a [`GalExpansionGroup`](./GalExpansionGroup.md).

---

#### Location
`src/components/gal-expansion-group/gal-expansion-panel/`

---

### Props

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| `header` | `ReactNode` | — | Content displayed in the clickable header. Can include icons, text, or custom layouts. |
| `children` | `ReactNode` | — | Content rendered inside the panel when expanded. |
| `defaultExpanded?` | `boolean` | `false` | Sets the initial expanded state (uncontrolled mode). |
| `expanded?` | `boolean` | — | Controlled open state. Use together with `onExpandedChange`. |
| `onExpandedChange?` | `(isOpen: boolean) => void` | — | Callback fired when expanded/collapsed (standalone or non-group use). |
| `disabled?` | `boolean` | `false` | Disables toggle interaction. |
| `value?` | `string` | — | Unique identifier when used inside a `GalExpansionGroup` (radio behavior). |
| `showGroupRadio?` | `boolean` | `true` | When used in a radio group, shows the built-in radio input. Set `false` to render custom headers. |

---

### Usage

#### Standalone (Uncontrolled)
```tsx
<GalExpansionPanel header="More information" defaultExpanded>
  <p>This section contains additional details for advanced users.</p>
</GalExpansionPanel>
```

### Controlled (External State)

```tsx
const [open, setOpen] = useState(false);

<GalExpansionPanel
  header={<span>Controlled panel</span>}
  expanded={open}
  onExpandedChange={setOpen}
>
  <p>Content controlled by external state.</p>
</GalExpansionPanel>
```


### In a Radio Group
See [`GalExpansionGroup`](expansion-group.md) for full example.

```tsx
<GalExpansionGroup mode="radio" value={method} onValueChange={setMethod}>
  <GalExpansionPanel
    value="paypal"
    header={<><PaypalIcon /> PayPal</>}
  >
    <p>Redirect to PayPal to complete payment.</p>
  </GalExpansionPanel>
</GalExpansionGroup>
```

### Accessibility

- Toggle element is a `<button>` with:
  - `aria-expanded`, `aria-controls`, and `aria-disabled` attributes.
  - `role="region"` applied to the content container.
- Focusable and keyboard-operable by default.
- Works with screen readers and supports nested interactive content.

### Behavior

- Expands/collapses smoothly using a CSS transition on `max-height` based on `ref.scrollHeight`.
- When used in a `GalExpansionGroup` with `mode="radio"`, selecting a panel opens it and closes the others.
- Can be controlled externally for custom animation or programmatic open/close.

### Style Classes

| Class                             | Purpose                               |
| --------------------------------- | ------------------------------------- |
| `.expansion-panel`                | Base wrapper                          |
| `.expansion-panel__header`        | Clickable header button               |
| `.expansion-panel__icon`          | Arrow icon container                  |
| `.expansion-panel__content`       | Collapsible region                    |
| `.expansion-panel__content-inner` | Inner wrapper for padding/content     |
| `.expanded` / `.collapsed`        | State indicators for arrow rotation   |
| `.disabled`                       | Disabled visual and interaction state |


### Notes

- Works seamlessly with `GalExpansionGroup` for grouped or radio-style panels.
- Use `showGroupRadio={false}` when building fully custom headers (e.g., with icons and your own selection visuals).
- Use `expanded`/`onExpandedChange` for controlled React state integrations (e.g., form validation, checkout flow).
- Keep content lightweight for smoother animation performance.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Wed, 22 Oct 2025