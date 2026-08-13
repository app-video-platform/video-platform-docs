---
title: Select
---

### Select (quick notes)
- **Location:** `src/shared/ui/select/`
- **Props:**
  - `label?` — optional field label
  - `name` — name/id of the select element
  - `value` — current selected value (controlled)
  - `options` — array of `{ value, label }` option objects
  - `required?` — whether the field is mandatory
  - `onChange(e)` — callback fired when selection changes
  - `...otherProps` — additional HTML props (e.g., `className`, `id`)
- **Usage:**
  - A stylized `<select>` input component with floating label behavior (like `Input`).
  - Used throughout product creation forms, onboarding steps, and filters.
- **A11y:**
  - Fully keyboard accessible (Tab, Arrow keys, Enter).
  - Each label is correctly linked via `htmlFor={name}`.
  - Use descriptive `label` text to help assistive tech users.

### Example
```tsx
import { Select, SelectOption } from '@/shared/ui';

const options: SelectOption[] = [
  { value: 'course', label: 'Course' },
  { value: 'consultation', label: 'Consultation' },
  { value: 'download', label: 'Download Package' },
];

function ProductTypeSelect() {
  const [type, setType] = useState('');

  return (
    <Select
      label="Product Type"
      name="type"
      value={type}
      onChange={(e) => setType(e.target.value)}
      options={options}
      required
    />
  );
}
```

### Notes
- Displays a default “Select…” placeholder when no label is provided.
- The label floats (`shrink` class) when a value is selected.
- CSS structure:
    - `.group`
    - `.form-input`
    - `.form-input-label`
- Supports any data type for values (`string` or `number`).
- Matches the styling conventions of other Gal form controls for visual consistency.
- Often paired with:
    - [`Input`](form-input.md)
    - [`CheckboxInput`](checkbox-input.md)
    - [`PriceSelector`](price-selector.md)

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025
