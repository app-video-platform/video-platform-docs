---
title: CTASection
---

### CTASection (quick notes)
- **Location:** `src/domains/marketing/shared/components/cta-section/`
- **Props:** required `title: ReactNode`, `primaryText`, `onPrimaryClick`; optional `subtitle`, `secondaryText`, `onSecondaryClick`.
- **Usage:** 
  - Displays a marketing call-to-action with a title, optional subtitle, a primary button and an optional secondary button.
  - Consumers supply labels and click handlers; destinations are not hardwired by CTASection.
- **A11y:**
  - Uses semantic `<section>` to denote a distinct page region.
  - Actions use ButtonMarketing controls; browser focus/reveal behavior still needs explicit verification.

### Example
```tsx
<CTASection
  title="Start creating today"
  primaryText="Launch now"
  onPrimaryClick={handleLaunch}
/>
```


### Notes
- Click behavior belongs to the supplied callbacks; a no-op callback does not establish a working destination.
- Styling handled in `cta-section.styles.scss`.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025

### Focus-completed reveal (M15)

CTASection stores its existing paused GSAP timeline in a ref. The button wrapper
uses opacity rather than autoAlpha for its hidden reveal state, preserving its
controls in keyboard order; focus capture completes the timeline with
`progress(1)`. Decorative/header animation remains separate. The existing
prefers-reduced-motion check skips animation setup, and cleanup clears the ref
and reverts the GSAP context. M15 does not establish runtime reduced-motion
coverage or a complete fresh Guest traversal through every lower CTA.

Product/Feature/Trust sibling-dimming cleanup is a separate group-reveal contract;
CTASection has no new active/dimmed selection API. See [animation ownership and
verification](../architecture/application-structure.md#marketing-interactions-and-animation-ownership-m15).
