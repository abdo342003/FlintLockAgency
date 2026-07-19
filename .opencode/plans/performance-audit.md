# Performance Audit — Final Plan (4 Changes)

## Change 1: CategoryFilter.astro — Add `prefers-reduced-motion` guard
**File:** `src/components/CategoryFilter.astro`

### What:
Add a `prefers-reduced-motion` check at the top of the IIFE (line 37). When reduced motion is preferred, skip the `scale()` transform on filter (keep only opacity change).

### Exact edits:
1. After line 37 `const prefersReduced = ...`, add:
```js
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
```

2. Line 76: Change `card.style.transform = "scale(1)";` to:
```js
card.style.transform = prefersReduced ? "none" : "scale(1)";
```

3. Line 81: Change `card.style.transform = "scale(0.95)";` to:
```js
card.style.transform = prefersReduced ? "none" : "scale(0.95)";
```

---

## Change 2: CalendlyModal.astro — Add `prefers-reduced-motion` guard
**File:** `src/components/CalendlyModal.astro`

### What:
Add CSS media query to disable `calendly-fade-in` animation when reduced motion is preferred.

### Exact edits:
1. In the `<style>` block, add before the closing `</style>`:
```css
@media (prefers-reduced-motion: reduce) {
  #calendly-modal {
    animation: none;
  }
}
```

---

## Change 3: HeroCore.astro — Reduce FPS check interval
**File:** `src/components/HeroCore.astro`

### What:
Change FPS check interval from 60 frames to 30 frames for faster degradation detection.

### Exact edit:
- Line 162: Change `var fpsCheckInterval = 60;` to `var fpsCheckInterval = 30;`

---

## Change 4: global.css — Optimize card-luminous filter blur
**File:** `src/styles/global.css`

### What:
Reduce hover blur from 12px to 10px and add `will-change: filter` for compositor layer promotion.

### Exact edits:
1. Line 269: Change `filter: blur(12px);` to `filter: blur(10px);`
2. Add `will-change: filter;` to `.card-luminous::after` (around line 273-278, in the base style before the hover)

---

## Verification
1. `npm run build` — must pass (20 pages, 0 errors)
2. `npm run dev` — verify portfolio renders, filter works, modal opens
3. Test `prefers-reduced-motion: reduce` in Chrome DevTools
