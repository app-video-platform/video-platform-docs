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
- Each header and content region has an instance-specific ID; `aria-labelledby` gives the region its header name. DOM tests verify distinct relationships and expanded state. Manual screen-reader behavior remains unverified.

### Behavior

- Animates `max-height` between zero and measured inner-content height; initial measurement and size observation are described below.
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

### Course reader contrast (M12)

LegacyExpansionPanel uses `--surface-panel` and `--text-primary` for its outer
surface, header and content surface, with `--border-strong` separators. This
removes the white-panel/near-white inherited-text mismatch in the Course reader;
Article rendering and sanitization remain unchanged. Do not treat region-name
tests or theme-token contrast calculations as computed-style coverage of expanded
Articles. Follow the [shared contrast checks](../architecture/state-and-data-flow.md#accessibility-and-interaction-conventions-m12).

### Initial and changing content height (M15)

LegacyExpansionPanel measures the inner wrapper's `scrollHeight` in
`useLayoutEffect` after mount and whenever `children` changes, storing the height
in state. Where ResizeObserver exists, it observes that inner wrapper and updates
the height on size changes; cleanup disconnects the observer. Without
ResizeObserver, mount/children-effect measurement still occurs, but independent
size changes are not continuously observed.

`defaultExpanded` still initializes local uncontrolled state; no new prop/API was
added. An expanded region uses the measured max-height, while a collapsed region
uses zero and `aria-hidden=true`. Header `aria-expanded`, unique header/region
IDs, native button activation, disabled behavior and `onToggle` remain. The region
stays mounted; aria-hidden is not an inert or descendant tab-removal mechanism.
Course-reader consumers retain M7 rendering and M12 contrast conventions.

Tests mock scrollHeight for initial default-open content, close/reopen through
pointer/Enter, and mock ResizeObserver growth plus disconnect. Existing tests
retain distinct section/region names. These assertions are not actual browser
geometry or screen-reader speech. The reported synthetic Creator Contact answer
was visible at 50px on initial load and toggled with Enter. Dynamic content,
revisits, Space, Course runtime and manual assistive-technology checks remain
retest work. See [marketing interaction scope](../architecture/application-structure.md#marketing-interactions-and-animation-ownership-m15).
