---
title: Dropdown
---

### Dropdown (quick notes)
- **Location:** `src/shared/ui/dropdown/`
- **Props:** 
  - `customClassName` — additional class name(s) for the dropdown menu.
  - `trigger` — render prop that receives `{ open, toggle }` to render the toggle element.
  - `menu` — render prop that receives `{ close }` to render dropdown content.
- **Usage:** 
  - Generic dropdown container that controls open/close logic and closes automatically on outside clicks.
  - Used in navigation menus, user profile menus, and contextual actions.
- **A11y:**
  - Owns local open state; outside clicks and Escape dismiss it. This is not a focus trap or a guaranteed trigger-focus restoration contract.
  - Give the trigger a meaningful accessible name; use a native `<button>` with `aria-expanded` and an `aria-controls` target for the mounted panel.
  - Use native links for destinations and buttons for actions. A custom ARIA menu requires its full keyboard model; Dropdown does not implement that model automatically.

### Example
```tsx
<Dropdown
  customClassName="menu-container"
  trigger={({ open, toggle }) => (
    <button onClick={toggle}>
      {open ? 'Close menu' : 'Open menu'}
    </button>
  )}
  menu={({ close }) => (
    <ul>
      <li><a href="/app/settings" onClick={close}>Settings</a></li>
      <li><button type="button" onClick={close}>Close</button></li>
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

### Named triggers and account actions (M12)

Dropdown accepts optional `id`, assigned to the conditionally mounted panel.
Notifications uses an instance ID, a native button named **Notifications**,
`aria-expanded`, and `aria-controls` only while the panel exists. A name is
required even when an icon supplies the visible trigger.

UserDropdown renders Logout as a native `type="button"` for its shared Creator,
User and Admin account-menu variations. Tab reaches it; Enter and Space invoke
the existing `logout()` then `logoutUser()` flow. M1 session isolation still owns
local logout and stale-request handling. Shared tests use mocked authentication
for both activation keys and Escape dismissal without logout. Browser evidence
covers account-menu opening only; actual logout/role variations remain retest
work. Outside dismissal and Escape do not establish trigger-focus restoration.

See [notification state and contrast conventions](../architecture/state-and-data-flow.md#accessibility-and-interaction-conventions-m12) for the session-local boundary and runtime checks.
