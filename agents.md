
## Purpose
Use Codex to analyze, recreate, and improve UI components (e.g. navbars, headers, dropdowns, modals, sections).

Focus on:
- visual design
- behavior (UX)
- logic (state + events)

---

## Core principles

### 1. Separate layers
Always distinguish:

- **Visual** → layout, spacing, styles
- **Behavior** → interactions, animations, scroll
- **Logic** → state, events, rendering

---

### 2. Input reliability

- Code → source of truth for logic ✅
- Browser/runtime → real behavior ✅
- Screenshot → visual reference ✅
- Link only → weak signal ⚠️

Do not claim exact logic without code.

---

### 3. Missing code → ask for better input

If code is not provided and the task requires logic analysis:

- do not guess with high confidence
- explicitly say that logic cannot be confirmed
- ask the user for better inputs

Suggest the most useful alternatives:

- component source code (best)
- snippet from DevTools (HTML + JS)
- React DevTools state/props view
- short screen recording (for interactions)
- screenshot + behavior description
- user description of what happens step by step

Prioritize inputs that are easiest for the user to obtain but still improve accuracy.

---

### 4. Be explicit about uncertainty

If logic is inferred:
- clearly mark assumptions
- separate observed vs guessed behavior

---

### 5. Animations

Do not invent complex animations.

Define:
- trigger
- duration
- type (fade, translate, scale)

Default: subtle and minimal.

Include `prefers-reduced-motion` when relevant.

---

## Analysis workflow

1. Identify input (code, screenshot, link)
2. Determine goal (UI, logic, UX, bugs)
3. Analyze based on available data

### If code is provided:
- state
- events
- interaction flow
- rendering conditions
- edge cases
- accessibility

### If only screenshot/link:
- analyze layout and visible behavior
- infer logic carefully
- mark uncertainty

---

## Output structure (logic)

1. State
2. Events
3. Interaction flow
4. Rendering behavior
5. Edge cases / bugs
6. Accessibility
7. Confidence (known vs inferred)

---

## Implementation rules

- follow existing stack
- keep changes minimal
- do not rewrite unrelated code
- preserve responsiveness
- include accessibility

---

## Reverse engineering

When recreating UI:
1. layout
2. spacing
3. interactions
4. animations

Do not claim 1:1 accuracy without full data.

---

## Do not

- guess exact logic from visuals
- over-engineer
- ignore accessibility
- add heavy animations without request

---

## Checklist

- logic explained (if possible)
- behavior described
- assumptions labeled
- better input requested if needed
