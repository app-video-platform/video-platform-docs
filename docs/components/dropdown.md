---
title: GalDropdown
---

### GalDropdown (quick notes)
- **Location:** `src/components/gal-dropdown/`
- **Props:** 
  - `customClassName` — additional class name(s) for the dropdown menu.
  - `trigger` — render prop that receives `{ open, toggle }` to render the toggle element.
  - `menu` — render prop that receives `{ close }` to render dropdown content.
- **Usage:** 
  - Generic dropdown container that controls open/close logic and closes automatically on outside clicks.
  - Used in navigation menus, user profile menus, and contextual actions.
- **A11y:**
  - Uses controlled state and `useOnClickOutside` for focus management.
  - To make it fully accessible, ensure the trigger is a `<button>` with `aria-expanded` and `aria-controls`.
  - The menu should use semantic roles (`menu`, `menuitem`) if you implement custom content.

### Example
```tsx
<GalDropdown
  customClassName="menu-container"
  trigger={({ open, toggle }) => (
    <button onClick={toggle}>
      {open ? 'Close menu' : 'Open menu'}
    </button>
  )}
  menu={({ close }) => (
    <ul>
      <li onClick={close}>Profile</li>
      <li onClick={close}>Settings</li>
      <li onClick={close}>Logout</li>
    </ul>
  )}
/>
```


### Notes
- `useOnClickOutside` hook closes the menu automatically when clicking elsewhere on the page.
- The dropdown menu is rendered conditionally only when `open === true`.
- You can add transitions or portals to improve UX.
- Works well for both header menus and inline controls.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025