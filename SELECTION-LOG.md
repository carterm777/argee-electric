# Selection log — Argee Electric

Working document. Started at Step 0, updated through both finishing passes.

---

## Step 0 — Page inventory

**Subject, audience, job.** A family-run electrical shop in Red Deer, Alberta, that
wires houses, farmyards and storefronts. The audience is a homeowner, an acreage owner
or a shop owner in Central Alberta who is about to phone somebody. The page's single job
is to make that phone call happen, and the widget is the second-best outcome.

**Design thesis — the printed job ticket.** The subject's own artifacts are paper: the
handwritten quote, the carbon-copy work order, the manila envelope in the van, the red
inspection stamp, the panel schedule labelled in pencil. The whole page is built as
printed matter from that shop. Kraft/manila ground, white form stock floating on it,
maroon as structural ink, brown as body ink, clay used almost nowhere except as stamp
red. Letterpress weight, grain, ruled fields, hairline rules. Nothing glassy, nothing
blurred, no gradients used as decoration.

**Explicit anti-default check** (front-end-design.md's three AI clusters): cluster 1 is
"warm cream #F4F1EA + high-contrast serif + terracotta accent", which this brief's fixed
inputs walk straight into. Avoided by pushing the ground from cream to a genuinely
saturated manila/kraft (`#E3D6C0`), by keeping the fixed terracotta accent `#B54A3A`
restricted to stamp ink and one hover state rather than making it the page's accent, and
by leaning on Coustard's low-contrast slab weight (the opposite of a Playfair/Fraunces
high-contrast display face).

**Page ambition level:** mixed, per DIRECTION.md — maximal on the hero widget, the
reviews section and the story timeline; deliberately quiet on the trust banner, the
coverage list and the FAQ so the loud moments have somewhere to land.

**Page inventory, in order.**

| # | Section | Type file used | Imagery available |
|---|---|---|---|
| 1 | Header / nav | navigation | none (wordmark only) |
| 2 | Hero | hero | `home-hero.webp` |
| 3 | Google Reviews | social-proof | none (typographic) |
| 4 | Trust Badges Banner | credibility | none (icons only, by design) |
| 5 | Why Us | value-proposition | `about-crew.webp` |
| 6 | Services | services | 6 photos, one per service |
| 7 | Coverage / Service Area | location | `tuscany-hero.webp` |
| 8 | Our Story | about-story | `team-dave`, `vans-morning`, `panel-new` |
| 9 | Final CTA | calls-to-action | `flatlay-materials.webp` |
| 10 | FAQ | faq | none (dense Q&A — deliberate) |
| 11 | Footer | footer | none (texture only) |

**Font substitutions:** none required. Coustard (400, 900) and Lato (400, 700, 900) are
both on Google Fonts under those exact names. Coustard ships only 400 and 900, so the
brief's "Coustard (Bold)" is set as Coustard 900 for display and 400 for sub-heads.

---

## Sections

### 1. Header / navigation
- **Layout:** Centered Logo Split Nav (assigned). Wordmark centred, four links left, three
  links plus the call button right, contact subheader above.
- **Visual style:** Textured Hairline Nav Divider (assigned) — a grain-fed 2px rule under
  the bar instead of a hard border, plus a fine ruled edge under the subheader.
- **Style family:** textured-organic + editorial.
- **Animation:** Underline Grow On Hover (navigation) for links; Mega Menu Column Stagger
  Reveal for the 12-item Services dropdown, which needs three columns to be readable;
  a scroll-state compaction that removes the subheader row and shrinks the bar.
- **Element sequence:** header is present on load (no entrance — it must not animate into
  a fold-constrained hero). Dropdown panel enters as one unit, then its columns stagger
  left→right at 70ms. Reduced motion: panel appears instantly.
- **Rationale.** Layout: assigned, and it beats Standard Horizontal Nav Bar because the
  wordmark *is* the logo on this build — there is no mark — so centring it gives it the
  weight a corner placement would not. Visual: assigned; Minimal Underline Link Treatment
  lost because the page's whole argument is texture. Animation: Mega Menu Column Stagger
  is the only entry that handles a 12-item service list without a scroll trap.

### 2. Hero
- **Layout:** Split-Screen Hero (assigned). Left: eyebrow → H1 → subhead → 4 value badges
  → CTA pair. Right: the photo-diagnosis job ticket on a photographic panel.
- **Visual style:** Organic Texture Overlay (assigned) — grain over both halves, a warm
  kraft scrim over the photo, letterpress rules under the eyebrow.
- **Style family:** textured-organic.
- **Image richness:** Full-Bleed Background Photo With Foreground Card on the right half;
  Framed Or Bordered Photo Insert via the site-wide frame-draw.
- **Animation:** Staggered Load-In (assigned, `load` trigger — correct, since a scroll
  trigger in a fold-constrained hero would never fire). Weighted Word Reveal on the H1,
  used once on the page.
- **Element sequence (motion budget: 5 groups):** eyebrow + its rule (0ms, clip) →
  H1 word reveal (120ms start, 70ms/word) → subhead (620ms, rise) → badge row as one
  group (760ms, rise, 90ms internal step) → CTA pair + reassurance line (980ms, rise) →
  widget as one unit (300ms, depth settle) so it is present early rather than last, since
  it is the fold's most important element. Reduced motion: all groups render at final
  state, no transform.
- **Rationale.** Layout: assigned; Hero With Embedded Quote/Booking Form was the obvious
  alternative and lost because the widget is not a form, it is the signature object, and
  a 50/50 split gives it more presence than an inset panel. Visual: assigned. Animation:
  assigned; the deviation is running the widget's beat *early* rather than "media last",
  justified because the fold constraint means a late widget beat would look broken.

### 3. Google Reviews
- **Layout:** Single Featured Pull-Quote plus a compact secondary row (assigned).
  One review at full weight, four in a compact 4-up row, aggregate callout beside them.
- **Visual style:** Oversized Quote Mark Typography (assigned) — a Coustard 900 quote
  mark set enormous, cropped by its own container, behind the featured quote.
- **Style family:** editorial.
- **Image richness:** Textured Or Patterned Background, No Photo — deliberate. Real
  customer photos do not exist and inventing them on a reviews block is exactly the
  fabrication the brief forbids.
- **Animation:** Star Rating Fill Animation On Scroll for the aggregate; Counting Numerals
  for the 4.9 (the page's only counter); Staggered Rise for the secondary row.
- **Element sequence (budget: 4 groups):** section label + H2 (0ms, clip) → aggregate
  card with count-up and star sweep (140ms) → featured pull-quote (280ms, rise) →
  secondary review row (420ms, rise, 110ms per card). Threshold 0.18 / rootMargin
  `0px 0px -12% 0px`. Reduced motion: 4.9 renders immediately, stars render filled.
- **Rationale.** Layout: assigned; Testimonial Card Grid lost because five equal cards is
  the default answer everyone reaches for and flattens the one review that actually
  carries the section (the shop wired from the ground up). Visual: assigned.

### 4. Trust Badges Banner
- **Layout:** Certification Badge Wall — four badges, equal size, equal padding.
- **Visual style:** Textured Certificate-Style Panel (assigned) — engraved caps, double
  hairline border, corner ticks, kraft ground.
- **Style family:** textured-organic + industrial-utilitarian.
- **Animation:** Badge Fade And Scale-In On Scroll.
- **Element sequence (budget: 2 groups):** panel border draws (0ms, wipe) → four badges
  as one staggered group (120ms start, 90ms step). Threshold 0.2. Reduced motion: border
  and badges render in place.
- **Rationale.** Layout: the wall is the only credibility layout that wants exactly four
  equal marks; Insurance/Bonding Detail Block lost because there are no real licence
  numbers to print and the brief forbids inventing one. Visual: assigned.

### 5. Why Us
- **Layout:** Numbered Reasons List (assigned) — four reasons, 01–04.
- **Visual style:** Oversized Number Typography (assigned).
- **Style family:** editorial.
- **Image richness:** Tilted Or Rotated Photo Card (DIRECTION's featured image technique,
  use 1 of 2) — `about-crew.webp` pinned at −1.8° beside the list heading.
- **Animation:** Sequential Reveal On Scroll + Underline Draw Animation on each reason's
  rule.
- **Element sequence (budget: 5 groups):** heading column incl. tilted photo (0ms) →
  four reason rows, each as one unit of numeral + icon + h3 + body (140ms start, 120ms
  step), with the row's hairline rule drawing as that row's closing beat (+180ms).
  Reduced motion: rules render full-width instantly.
- **Rationale.** Layout: assigned; the numbering is honest here because the reasons are
  ordered by how a customer actually weighs them, not decorative. Visual: assigned.

### 6. Services
- **Layout:** Zig-Zag Alternating Service List (assigned), six rows.
- **Visual style:** Textured Paper Card (assigned) — each text half sits on a white form
  card with a ruled header and a punched corner, on the kraft ground.
- **Style family:** textured-organic.
- **Image richness:** Overlapping Or Bleeding Image — each photo bleeds a third of the
  way under its paper card so the two halves interlock rather than sit side by side.
- **Animation:** Staggered Grid Fade-In On Scroll adapted per row, plus the site-wide
  frame-draw on every photo and Image Zoom On Hover on the photo.
- **Element sequence (budget: 6 groups, one per row):** per row — photo (0ms, depth
  settle) → frame draws (+150ms after the photo, 420ms) → card contents as one unit
  (+120ms, rise). Rows fire independently at threshold 0.18 so a long section never
  runs one giant cascade. Reduced motion: photos and frames render in place.
- **Rationale.** Layout: assigned; Service Card Grid lost because six identical cards is
  the single most common trades-site answer and the copy per service is written as prose,
  not as a card blurb. Visual: assigned.

### 7. Coverage / Service Area
- **Layout:** Neighborhood Or Landmark Mention Block (assigned) — the ten named towns as
  a ledger of rows, with the coverage paragraph as the block's opening statement.
- **Visual style:** Textured Background Address Card (assigned).
- **Style family:** textured-organic + warm-approachable.
- **Image richness:** Framed Or Bordered Photo Insert — `tuscany-hero.webp` matted inside
  a wide paper border, the one photo in the section.
- **Animation:** Address Card Slide-In On Scroll for the card; Coverage Zone Highlight On
  Hover as a per-town ledger-rule wipe (site-specific technique #3).
- **Element sequence (budget: 3 groups):** H2 + paragraph (0ms) → framed photo with frame
  draw (160ms) → town ledger as one group (300ms, 60ms per row). Reduced motion: rows
  render in place; hover rule appears without sweeping.
- **Rationale.** Layout: assigned; Service Area List/Coverage Zone Grid lost because a
  bare grid of ten town names reads as an SEO block, and the brief's paragraph is written
  as human framing that a landmark-mention block can actually carry.

### 8. Our Story
- **Layout:** Chronological Timeline (assigned), three chapters. No dates are invented —
  the markers are the three places the copy itself names.
- **Visual style:** Warm Archival Photo Treatment (assigned), strongest on the founding
  photo and easing off through the third chapter.
- **Style family:** textured-organic.
- **Image richness:** Tilted Or Rotated Photo Card (use 2 of 2) — the founding photo sits
  at +2.2° with a second sheet behind it.
- **Animation:** Timeline Progress Line Draw On Scroll, scroll-linked via `useScrub` so
  the rule's height tracks scroll position rather than firing once.
- **Element sequence (budget: 4 groups):** H2 + intro (0ms) → the spine draws with scroll
  → each chapter's marker + photo + text as one unit as the spine reaches it (three
  groups). Reduced motion: spine at full height, chapters at final state.
- **Rationale.** Layout: assigned; Single-Column Long-Form Story lost because the copy
  already moves through three distinct places, and a timeline makes that geography
  legible instead of burying it in prose.

### 9. Final CTA
- **Layout:** Full-Width CTA Banner (assigned).
- **Visual style:** Textured Warm CTA Background (assigned) — `flatlay-materials.webp`
  under a deep-maroon multiply and heavy grain.
- **Style family:** textured-organic.
- **Image richness:** Full-Bleed Background Photo With Foreground Card.
- **Animation:** Banner Background Slow Pan (idle) + Button Magnetic Hover on the call
  button.
- **Element sequence (budget: 2 groups):** background pans continuously and independently;
  H2 → sentence → button pair + reassurance line enter as one grouped band (0ms / 140ms).
  Reduced motion: no pan, no magnetic pull.
- **Rationale.** Layout: assigned; Split CTA With Form lost deliberately — the page already
  has one form and it is the signature element, so a second form here would compete with
  it and dilute the single ask.

### 10. FAQ
- **Layout:** Classic Accordion List (assigned), six questions.
- **Visual style:** Warm Illustrated Accordion (assigned) — softened corners and one
  distinct meaning-matched icon per question, on paper stock.
- **Style family:** warm-approachable + textured-organic.
- **Image richness:** Textured Or Patterned Background, No Photo — deliberate. Six dense
  Q&A pairs are the one place on this page that genuinely wants to be quiet, and it sits
  between two of the loudest sections.
- **Animation:** Accordion Expand And Collapse With Height Transition + Icon Rotate On
  Expand + Staggered Fade-In On Scroll.
- **Element sequence (budget: 2 groups):** H2 + intro (0ms) → six rows stagger top to
  bottom (140ms start, 80ms step), each row's icon + question moving as one unit.
  Reduced motion: rows render in place, panels open without a height transition.
- **Rationale.** Layout: assigned; Conversational FAQ Feed lost because six fully-expanded
  multi-sentence answers is a wall of text this late on the page.

### 11. Footer
- **Layout:** Mega Footer (assigned), four columns exactly as the brief lists them.
- **Visual style:** Textured Footer Background (assigned) — deepest brown on the page,
  heavy grain, hairline column rules.
- **Style family:** textured-organic.
- **Animation:** Link Column Staggered Fade-In On Scroll + Social Icon Hover.
- **Element sequence (budget: 2 groups):** columns stagger left→right (0ms, 110ms step,
  heading + links as one unit per column) → legal rule + copyright (last).
  Reduced motion: columns render in place.
- **Rationale.** Layout: assigned; Split Footer With Final CTA Panel lost because the
  Final CTA band sits directly above it and a second ask would read as pushy.

---

## Site-specific motion techniques (written for this build, not in the kit)

1. **Frame Draw** — from *Bordered Frame Draw*. A four-sided hairline frame that draws
   top → right → bottom → left around every photograph, starting 150ms after that
   photo's own entrance completes. Two pseudo-elements on a wrapper, scaleX/scaleY with
   sequenced delays. Reduced motion: frame renders complete.
2. **Stamp Impression** — from *Success State Confirmation Animation* + *Depth Settle*.
   The widget's success state lands a rotated "RECEIVED" stamp: scale 1.35 → 1, blur
   3px → 0, opacity 0 → 1 over 460ms ease-out-quart, with the surrounding card's ruled
   fields dimming underneath. Reduced motion: stamp appears at final state.
3. **Ledger Rule Wipe** — from *Underline Sweep* + *Coverage Zone Highlight On Hover*.
   Hovering a town row wipes a maroon rule left→right under the name while the name
   itself shifts 6px right against a fixed leader dot. Reduced motion: rule appears
   without sweeping, no shift.
4. **Carbon-Copy Lift** — from *Magnetic Lift*. Paper elements that have a second sheet
   behind them widen their offset on hover: top sheet lifts 4px, backing sheet stays,
   shadow deepens. Reduced motion: shadow only, no translate.

---

## Finishing passes

Both passes ran after every section existed once, against the screenshots rather
than the source.

### Pass 1 — Elevation sweep

Section by section, reopening each one's visual-styles / animations /
image-and-visual-richness entries.

| Section | Outcome |
|---|---|
| Header | **Left as-is on ambition, rebuilt on correctness.** It has to stay quiet or it eats the fold. The dropdown was rebuilt: mounted only while open and animated with keyframes (see Fixes below), and re-anchored to the trigger's left edge so the 12-item panel can never run off the viewport. |
| Hero | **Left as-is.** Already the most-worked part of the page and hard-constrained by the fold; adding anything would cost one of the six required elements. The value badges were restacked (icon over label) so the four cells read as one printed spec strip instead of a ragged row. |
| Google Reviews | **Upgraded.** The featured pull-quote now sits on the page's carbon-copy backing sheet (*Tilted Or Rotated Photo Card*'s paper logic applied to a quote rather than a photo), so it reads as a printed review slip on the same stationery as the job ticket instead of a plain white box. Quote-mark opacity raised from 0.07 to 0.10 so the *Oversized Quote Mark Typography* choice is actually legible as a choice. |
| Trust Badges | **Left as-is on ambition, corrected on system.** The four labels now reserve two lines each so all four sub-notes sit on one baseline — a *Certification Badge Wall*'s premium execution note is equal size and consistent padding, and ragged label heights broke it. |
| Why Us | **Left as-is.** Oversized outlined numerals plus the tilted crew photo already carry it; a second device here would compete with the numerals. Added a hairline top rule so it separates from the trust banner, which shares its kraft ground. |
| Services | **Upgraded.** The whole row now responds to the cursor — the paper card's shadow deepens alongside the existing *Image Zoom On Hover* — so the interlocked photo/card pair reads as one object rather than a card sitting next to a reactive photo. |
| Coverage | **Upgraded.** The ledger panel stretches to the height of the taller left column so the two halves resolve instead of leaving the right side floating short. |
| Our Story | **Upgraded.** Chapters switched from centre-aligned to top-aligned so each marker dot lands on its own chapter's first line — a timeline whose dots float in space between entries isn't reading as a timeline. |
| Final CTA | **Left as-is on ambition.** *Textured Warm CTA Background* over the materials flat-lay plus the idle pan is the page's one continuous motion and should stay the only one. The reassurance line's measure was widened so it stops breaking mid-phrase. |
| FAQ | **Left as-is, deliberately.** Six dense Q&A pairs between the dark story band and the maroon CTA is the page's one quiet moment; the *Numbered Question Treatment* upgrade was considered and rejected because the numerals would duplicate Why Us's oversized numerals two sections earlier. |
| Footer | **Upgraded.** Hairline rules between the four columns, so the mega footer reads as the same ruled ledger language used in the coverage list and the job ticket rather than four floating lists on a dark field. |

**Completeness check against the logged element sequences.** Every logged group
was found in the build except one gap, now closed: the trust banner's rule and
title were animating as a single block rather than rule-then-title, because the
rule was the observed element. Both now sequence correctly.

### Pass 2 — Coherence sweep

- **The paper motif is now a system, not a repetition.** The carbon-copy backing
  sheet appears four times across a 12,000px page — hero ticket, Why Us crew
  photo, Story chapter one, featured review — always on the single most important
  object in its section, never twice in one viewport. Kept.
- **Motion load is within budget.** One idle/continuous effect on the page (the
  CTA background pan), one word reveal (hero H1), one counter (4.9). Cursor-
  Reactive Glow was never used: its Avoid-when rules out light grounds, and this
  page has no dark section that isn't already carrying its own motion.
- **Nothing was walked back.** Pass 1's changes were corrections and one paper
  upgrade rather than new effects, so none of them pushed the page busier.
- **Tonal run checked.** Bottom half reads story (dark brown) → FAQ (light) →
  CTA (deep maroon) → footer (near-black brown). The light FAQ is what keeps
  that from being one long dark run, which is the second reason it stayed quiet.
- **Style-family spread across eleven sections:** textured-organic ×6, editorial
  ×3, warm-approachable ×1, industrial-utilitarian ×1 (as the trust banner's
  secondary tag). Weighted to the assigned primary family without every section
  landing in it.

### Fixes found by the screenshot loop, not by reading code

1. **Every section heading was invisible.** The kit's `Reveal technique="clip"`
   puts `clip-path: inset(0 0 100% 0)` on the same element its own
   IntersectionObserver watches, which zeroes the intersection ratio — the
   trigger can never fire, so the heading stays clipped forever. Fixed with
   `SectionHead.jsx`: the observed wrapper carries a plain fade and the clip runs
   on its children, using motion.css's own descendant rest-state rule. Same
   technique, working trigger. The trust banner's `wipe` rule had the same fault
   and the same fix.
2. **Sections stayed at opacity 0 after a scroll jump.** `scroll-behavior:
   smooth` means an anchor jump animates past whole sections in a few frames and
   an IntersectionObserver can miss its threshold entirely. Added a page-level
   safety net in `App.jsx` that re-checks the same geometry the observers use
   (top crossing 88% of viewport height) and releases anything they skipped.
3. **The mega menu painted as a half-transparent panel with invisible links.**
   Its opacity transition started from `visibility: hidden` and was left
   un-composited. The panel is now mounted only while open and animates with
   keyframes — which also keeps twelve closed links out of the tab order.
4. **The H1's words ran together.** `WordReveal` wraps each word in an
   overflow-hidden inline-block; the inter-word gap is restored on the box.
5. **1px of horizontal overflow at 390px** from the rotated backing sheet behind
   the crew photo. Rotation and offset reduced on mobile.
6. **The whole page rendered through one full-height blended layer.** A fixed,
   viewport-sized "mix-blend-mode: multiply" grain over an 11,700px page breaks
   Chromium compositing — it is what made the mega menu paint half-transparent
   and what turned a full-page raster into a blank kraft field. The grain is now
   blended into each ground through "background-blend-mode" (the .grainbed class)
   instead of laid over the page, which looks identical and composites cleanly.
7. **Decorative photo beds fell into the flow during full-page capture.** The
   capture path neutralises positioning, so the hero's photo panel, the CTA's
   background bed and the timeline's marker dots were laid out as in-flow blocks
   and stretched the page by 2,500px. They now carry "contain: size layout
   paint" — they are sized entirely by their inset containing block anyway — and
   the timeline dot moved inside the text column so it can never become a third
   grid item. Captured height now matches the real page to within 150px.
8. **Anchor navigation is no longer smooth-scrolled.** base.css sets
   "scroll-behavior: smooth" at zero specificity; a smooth jump animates past
   whole sections in a few frames, which left scroll-triggered entrances
   unfired and a third of the page blank in any scripted scroll. Overridden to
   "auto"; scroll-padding-top still clears the sticky header.

### Verified at the end

- Fold constraint holds at 1440×900 and 390×844 with zero scrolling (measured,
  not eyeballed): widget bottom edge at 749px of 900 on desktop, 787px of 844 on
  mobile, with all six required elements above those lines.
- Zero horizontal overflow at 390, 480, 768, 1024, 1280, 1440 and 1680.
- Reduced motion: no element left below full opacity.
- Keyboard: every tab stop paints a 2px focus ring; the FAQ accordion opens on
  Enter and reports `aria-expanded` correctly.
- One `h1`, one `h2` per section, no heading-level skips, no console errors, no
  broken images, no image without alt text.
