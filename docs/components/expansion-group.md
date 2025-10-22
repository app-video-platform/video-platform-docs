---
title: GalExpansionGroup
---

### GalExpansionGroup
> Groups multiple [`GalExpansionPanel`](./GalExpansionPanel.md) components together.  
> Provides coordinated expansion behavior — for example, **radio-style selection** (only one panel open at a time) or independent expansion.

---

#### Location
`src/components/gal-expansion-panel/`

---

### Props

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| `mode?` | `'none' \| 'radio'` | `'none'` | Determines how panels behave. `'radio'` enforces one active selection; `'none'` allows independent expansion. |
| `accordion?` | `boolean` | `true` | When `mode="radio"`, controls whether only the selected panel is expanded (`true`) or multiple can remain open (`false`). |
| `value?` | `string \| null` | — | Controlled selected value (used in radio mode). |
| `defaultValue?` | `string \| null` | — | Uncontrolled initial selected value (used in radio mode). |
| `onValueChange?` | `(val: string) => void` | — | Callback fired when selection changes in radio mode. |
| `name?` | `string` | auto-generated | Optional name for the internal radio group (useful in forms). |
| `children` | `ReactNode` | — | The set of [`GalExpansionPanel`](./GalExpansionPanel.md) elements to group. |

---

### Usage

#### Basic Radio Group
```tsx
<GalExpansionGroup mode="radio" defaultValue="paypal">
  <GalExpansionPanel value="paypal" header="PayPal">
    <p>Redirect to PayPal to complete payment.</p>
  </GalExpansionPanel>

  <GalExpansionPanel value="applepay" header="Apple Pay">
    <p>Use Apple Pay on supported devices.</p>
  </GalExpansionPanel>

  <GalExpansionPanel value="card" header="Credit / Debit Card">
    <p>Enter your card details below.</p>
  </GalExpansionPanel>
</GalExpansionGroup>
```

### Controlled Radio Group

```tsx
const [method, setMethod] = useState('card');

<GalExpansionGroup
  mode="radio"
  value={method}
  onValueChange={setMethod}
  accordion
>
  <GalExpansionPanel value="paypal" header="PayPal">...</GalExpansionPanel>
  <GalExpansionPanel value="applepay" header="Apple Pay">...</GalExpansionPanel>
  <GalExpansionPanel value="card" header="Credit Card">...</GalExpansionPanel>
</GalExpansionGroup>
```

### Custom Headers (Hide Built-in Radios)

```tsx
<GalExpansionGroup mode="radio" defaultValue="paypal">
  <GalExpansionPanel
    value="paypal"
    header={<div className="custom-header">PayPal</div>}
    showGroupRadio={false}
  >
    <p>Custom visuals, no built-in radio button.</p>
  </GalExpansionPanel>
</GalExpansionGroup>
```

### Independent Panels (No Group Selection)

```tsx
<GalExpansionGroup mode="none">
  <GalExpansionPanel header="FAQ 1" defaultExpanded>
    <p>Answer 1</p>
  </GalExpansionPanel>
  <GalExpansionPanel header="FAQ 2">
    <p>Answer 2</p>
  </GalExpansionPanel>
</GalExpansionGroup>
```

### Behavior

- In **radio mode**, the group coordinates which panel is selected.
  - With `accordion: true` (default), only the selected panel is expanded.
  - With `accordion: false`, multiple panels can remain open while still tracking the selected one.
- In `none mode`, panels behave independently — no selection or coordination.
- Works seamlessly with both controlled (`value` / `onValueChange`) and uncontrolled (`defaultValue`) patterns.

### Accessibility

- When `mode="radio"`, the group sets `role="radiogroup"` and manages ARIA state for each internal panel’s radio input.
- Individual panels maintain their own accessible labeling (`aria-controls`, `aria-expanded`, `aria-labelledby`).
- The built-in radio inputs are focusable and keyboard-navigable.
- You can hide the default radios (`showGroupRadio={false}`) and use your own visuals — behavior remains fully accessible.


### Style Notes

While the `GalExpansionGroup` itself is layout-neutral, you can style spacing between panels:

```css
.gal-expansion-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

Each `GalExpansionPanel` already provides:

- `.expansion-panel`
- `.expansion-panel__header`
- `.expansion-panel__content`
- `.expanded` / `.collapsed`


### Related Components

[`GalExpansionPanel`](expansion-panel.md) — single expandable section used within the group.


### Notes

- Use `GalExpansionGroup` to implement checkout payment method lists, FAQ accordions, or preference selection UIs.
- If you only need a single collapsible section, you can use `GalExpansionPanel` standalone.
- Supports both controlled and uncontrolled state, matching React’s conventions.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Wed, 22 Oct 2025