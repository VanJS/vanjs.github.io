# VanJS Pixel — design system

A slide-first design system for **VanJS**, the Vancouver JavaScript meetup. The look: 8-bit
platformer HUD meets Vancouver — harbour blues, cedar green, cherry-blossom dusk, and a
**JS-yellow cover** as the deck's signature move.

Sources given by the user, in this project's `uploads/`:
- Two Vancouver pixel-art plates (Coal Harbour daylight; downtown at dusk behind cherry blossom) — copied into `assets/` and used as the system's only imagery.
- Two screenshots of a commercial 8-bit slide template, given as a *vibe* reference. Nothing was copied from them: no characters, castles, coins or layouts. This system's motifs (dither, seawall, HUD, outline+offset shadow) are original.

There is **no VanJS logo in the sources**, so no mark was drawn. Wherever a logo would go, the
name is set in Press Start 2P. Drop in a real mark and swap it wherever `VanJS` appears in display type.

---

## Content fundamentals

Community voice, not conference marketing. Plain, dry, a little self-aware.

- **Person:** "we" for the organisers, "you" for the room. Never "attendees" or "participants".
- **Casing:** sentence case in body copy. Pixel type (kickers, HUD, tags, buttons) is UPPERCASE — it is a label, not a sentence.
- **Length:** a slide title is under seven words. A lede is one sentence. If it needs two, it needs a second slide.
- **Numbers:** short and literal — `128 RSVPs`, `20 min`, `6:40`. Press Start 2P is very wide; four characters is a comfortable maximum for a stat.
- **Game metaphor, used lightly:** "Press start", "Level 02", "Talk 02 · 3 lives". It flavours labels and section breaks — it never turns talks into "quests" or speakers into "heroes". One joke per deck.
- **No emoji.** The pixel language does the tone work; emoji fight it.
- **Examples:** "Run of show" · "Pitch a talk — ten minutes is a real talk." · "Pizza, patio, hallway track." · "0 recruiter pitches."

## Visual foundations

**Colour.** Four themes, set with `data-theme` on the slide root: *night* (default, ink-900
ground), *cover* (full JS yellow, ink type — cover, section breaks, closing only), *day*
(harbour blues, for image-led slides), *dusk* (mauve + blossom, for quotes and closings).
Never more than two themes' worth of background in a single deck plus the yellow. JS yellow
`#F7DF1E` is the only high-chroma accent; blues, cedar and blossom are all sampled from the
pixel plates so imagery and UI share a palette.

**Type.** Press Start 2P for display and slide titles only. Silkscreen for kickers, tags, HUD and
agenda numbers. IBM Plex Sans for anything longer than a label — 18px floor on the 1280 canvas
(27px at 1920). IBM Plex Mono for code and metadata. Pixel fonts are a costume; nobody should
have to *read* one.

**Layout.** A 1280×720 canvas, 72px side margins, 64px top/bottom, 32px gutters, everything on a
4px grid. The HUD status line sits at the same bottom position on every slide — it is the deck's
constant, like a game's score panel.

**Backgrounds.** Flat colour or full-bleed pixel art. No photographic imagery, no soft gradients —
where a gradient is wanted, use an 8px checker dither (`.dither`, `.dither-25`) masked with a
linear fade. Scanlines (`.scanlines`) are for art overlays only, never over body copy.
The `.seawall` band grounds full-bleed slides the way a platformer floor does.

**Imagery.** Pixel art only, always `image-rendering: pixelated`, always square-cropped inside a
4px outline (`.px-plate`). Crop the plates in `assets/`; do not redraw, recolour, upscale
smoothly or filter them. Empty plates render a hatched slot naming the art that belongs there.

**Borders, radii, shadows.** 4px outlines, `border-radius: 0` everywhere, and one shadow: a hard
`4px 4px 0` offset in ink-900. No blur, no inner shadow, no glow, no transparency layers or
blur backdrops — the 8-bit world has no depth of field.

**States.** Hover shifts a button 2px up-left and lengthens the shadow to 6px; press moves it the
full 4px into its own shadow (the shadow disappears). Focus is a 4px yellow outline, offset 2px.
Disabled is 40% opacity, no movement.

**Motion.** Two animations, both stepped (`steps(4, end)`): `.blink` (1s, for a "press start"
prompt) and `.bob` (an 8px vertical hop). Transitions are 120ms stepped. Nothing eases, nothing
fades smoothly — smooth motion breaks the illusion faster than any colour does.

## Iconography

The system deliberately has **no icon set**. Its glyph vocabulary is geometric primitives drawn
in CSS: 8px squares (HUD pips, code-bar dot), checker dither, dashed pixel rules, and the
numbered slot block in `.px-agenda`. If a deck genuinely needs iconography, use a pixel icon
font (e.g. a 8×8 bitmap set) at a multiple of 4px — never a smooth stroke-icon library like
Lucide, whose curves and 1.5px strokes contradict every rule above. Emoji are never used.

## Index

- `styles.css` — entry point (imports only)
- `tokens/` — `fonts`, `colors`, `typography`, `spacing`, `effects`
- `patterns/` — `base`, `pixel` (dither/seawall/outline language), `components`, `slide`
- `components/core/` — Button, Tag, Card, Stat
- `components/slides/` — AgendaRow, SpeakerCard, CodeBlock, HudBar, ImagePlate
- `slides/` — eight slide templates + `index.html` gallery
- `guidelines/` — 15 foundation specimen cards
- `assets/` — the two Vancouver pixel plates
- `legacy/industry.css` — the previous, unrelated stylesheet this project shipped with; kept so older decks can be repointed at it

### Intentional additions
- `HudBar`, `AgendaRow`, `ImagePlate` — no source library existed; these three carry the meetup-deck patterns the system is for.
