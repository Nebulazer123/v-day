# LAINIE.EXE — Master Design Spec
### a mostly-troll arcade love letter, by Corbin (creative direction: locked)

> **This file is the single source of truth.** Engineers: implement copy VERBATIM
> (including lowercase, punctuation, and the number of periods — comedic timing lives there).
> Where a value is given, it is the value. Do not improvise different jokes.

---

## 0. THE ONE-PARAGRAPH VISION

A single-page retro arcade cabinet that appears to be actively working against Lainie.
The machine is a troll: it guilt-trips her, lies about loading, quizzes her with rigged
answers, and makes her fight her way out of Lincoln, Maine one pixel at a time. Every
screen is early-2000s prank-site chaos wrapped in a warm CRT glow — and then, after the
final boss (Edward Cullen, obviously), the whole cabinet powers down and one real photo
and one honest sentence land the sweetest gut-punch of the night. **Funny for 9 minutes,
sincere for 10 seconds.** That ratio is the product.

**Comedy law of the site:** the machine is never mean to Lainie. The machine is
*pathetically, desperately in love with her* and bad at hiding it. Every troll is
Corbin-flavored clinginess wearing a Windows-98 costume.

---

## 1. VISUAL DESIGN SYSTEM

### 1.1 Direction
"Midnight drive CRT." The whole site lives inside a dark late-night-drive sky — the
color memory of driving around til sunrise and lying on the dock watching stars — with
hot arcade neons on top. Two skins share the palette:

- **ARCADE skin** (default): deep navy space, neon pink/gold accents, pixel borders, scanlines.
- **SYSTEM skin** (fake OS moments): grey-beige Win98 chrome sitting ON TOP of the arcade
  background, so the fake errors always look like an intrusion, never a new page.

### 1.2 Color palette — paste directly into `:root`

```css
:root {
  /* --- core night sky --- */
  --midnight-drive: #0B1026;   /* app background. the 3am sky over Lincoln */
  --dock-water:     #14224A;   /* panels, cards, level backgrounds base */
  --star-white:     #F4F1E8;   /* primary text. warm, not pure white */
  --star-dim:       #9BA3C9;   /* secondary text, hints, timestamps */

  /* --- neon (interactive + celebration) --- */
  --heart-neon:     #FF4D8D;   /* primary action, YES button, hearts, cursor trail */
  --heart-deep:     #C2185B;   /* pressed states, heart shadows */
  --ramen-gold:     #FFB627;   /* score, coins, highlights, level-complete */
  --taro-purple:    #B388EB;   /* quiz accents, Twilight sparkle base, links */
  --crt-green:      #33FF88;   /* "system OK" text, progress %, terminal lines */

  /* --- character & lore colors --- */
  --boba-brown:     #8C5A32;   /* boba tea body, wood, dock planks */
  --boba-pearl:     #3B2417;   /* pearls, dark outlines, pixel borders */
  --bentley-caramel:#D9A05B;   /* Bentley's fur, friendly UI moments */
  --duck-yellow:    #FFD23F;   /* THE DUCKS. easter eggs only. never explained */
  --corvette-silver:#C8CDD6;   /* the C7, chrome details, disabled states */
  --lincoln-mud:    #5B5242;   /* Lincoln level ground, boring-town jokes, NO button */
  --grandma-lilac:  #CBB7E8;   /* grandma-meme moments; soft + loving */
  --edward-pale:    #DDE7F0;   /* vampire skin, L4 sparkle scene */

  /* --- fake OS (SYSTEM skin) --- */
  --sys-beige:      #D8D4C8;   /* window chrome */
  --sys-blue:       #1034A6;   /* title bars, BSOD-lite moments */
  --sys-error:      #E5484D;   /* error icons, close buttons */

  /* --- functional --- */
  --shadow-pixel:   #05070F;   /* all hard pixel shadows */
  --scrim:          rgba(11,16,38,0.82); /* modal backdrop */
}
```

Usage rules:
- `--heart-neon` is THE action color. If it's clickable and we want her to click it, it's pink.
- `--lincoln-mud` is deliberately the ugliest color in the system. It is the NO button.
  It is Lincoln. This is on purpose.
- `--duck-yellow` appears ONLY on duck content. It must feel like a glitch of joy.
- Never put `--heart-neon` text on `--taro-purple` (fails contrast). Body text is always
  `--star-white` or `--boba-pearl`-on-light.

### 1.3 Typography — 3 Google Fonts, no more

```css
--font-arcade: 'Press Start 2P', monospace;  /* headings, buttons, scores, level names */
--font-system: 'VT323', monospace;           /* fake OS text, terminal, progress bars */
--font-body:   'Nunito', sans-serif;         /* dialogue, quiz options, anything > 1 line */
```

Type scale (px, desktop / mobile):

| token          | font   | size          | usage |
|----------------|--------|---------------|-------|
| `--text-title` | arcade | 32 / 22       | screen titles ("THE ESCAPE ARCADE") |
| `--text-h2`    | arcade | 20 / 16       | level names, quiz question numbers |
| `--text-btn`   | arcade | 14 / 12       | all buttons |
| `--text-body`  | body   | 18 / 16, 700  | dialogue, questions. Nunito always bold-ish |
| `--text-sys`   | system | 22 / 18       | fake OS copy (VT323 runs small; size up) |
| `--text-tiny`  | arcade | 9 / 8         | footers, "© the ducks", disclaimers |

- Press Start 2P line-height: 1.6 minimum (it clips otherwise).
- ALL-CAPS is reserved for the machine's voice. Lowercase is reserved for Corbin's real
  voice. **The finale is the only screen that is entirely lowercase.** Protect this.

### 1.4 Spacing, borders, shadows

```css
--space-1: 4px; --space-2: 8px; --space-3: 16px; --space-4: 24px;
--space-5: 40px; --space-6: 64px;

/* signature pixel border: use on every card, button, window */
--border-pixel: 4px solid var(--boba-pearl);
--shadow-hard: 6px 6px 0 var(--shadow-pixel);      /* cards, windows */
--shadow-btn:  4px 4px 0 var(--shadow-pixel);      /* buttons at rest */
--shadow-btn-press: 1px 1px 0 var(--shadow-pixel); /* buttons pressed (translate 3px,3px) */
--radius: 0px; /* yes, zero. nothing is rounded except boba pearls and hearts */
```

Buttons: pixel border + hard shadow; on `:active` translate(3px,3px) and swap to
`--shadow-btn-press`. That 2-frame "clunk" is 80% of the game feel. Never use CSS
`transition` on the press — it should snap.

### 1.5 Background & CRT treatment (persistent, all screens)

1. Base: `--midnight-drive` with a 2-layer parallax starfield (Canvas or two tiled PNGs):
   far layer 1px stars drifting left at 4px/s, near layer 2px stars at 9px/s. One star
   twinkles (opacity 1→0.2→1, 3s) every ~7s. **One of the "stars" is a tiny 6px yellow
   duck. It drifts across the far layer roughly once every 90 seconds. Never referenced.**
2. Scanline overlay: full-viewport `repeating-linear-gradient(transparent 0 2px,
   rgba(0,0,0,0.14) 2px 4px)`, `pointer-events:none`, on top of everything except modals.
3. Vignette: radial gradient, corners to `rgba(5,7,15,0.55)`.
4. Subtle screen curvature is faked with the vignette only — do NOT warp the DOM.
5. `prefers-reduced-motion`: starfield static, scanlines static, all teleport/shake
   animations become instant position changes with a 150ms fade.

---

## 2. PERSISTENT LAYER (present on every screen)

### 2.1 Cursor trail
- Desktop: every 40px of cursor travel spawns alternating **boba pearl** (8px brown
  circle, the only rounded thing) and **pixel heart** (10px, `--heart-neon`).
- Particle life: 600ms — rise 14px, sway ±6px sine, scale 1→0.3, fade 1→0. Max 24 live
  particles (recycle oldest).
- Touch: spawn a 5-particle heart burst on every tap instead of a trail.
- Trail pauses during Level gameplay (it fights with game sprites), resumes on menus.

### 2.2 HUD bar (top of viewport, 44px, always visible after Gatekeeper)
Left: `♥ LAINIE.EXE` (arcade font, 10px).
Right, three icon buttons (32×32, pixel border):
- **♪ music toggle** — default ON but does not autoplay until first user click (browser
  rules). Tooltip ON: "music: yes obviously". Tooltip OFF: "silence… like Lincoln".
- **🔊 sfx toggle** — tooltip OFF: "the ducks can still hear you."
- **↺ start over** — confirm dialog: "Restart everything? All 200% of your progress
  will be lost." / buttons: `[RESTART]` `[ok fine stay]`

### 2.3 Konami code (↑↑↓↓←→←→BA — on touch: tap the ♥ logo 7 times)
Triggers **DUCK MODE** for 10 seconds: 30 tiny yellow pixel ducks parade across the
bottom of the screen (walk cycle, 2 frames), quack SFX ×3 pitch-shifted, and a toast:
> `CLASSIFIED: yes. it was the ducks. it was always the ducks.`
Then everything returns to normal and nothing acknowledges it happened. Re-triggerable.

### 2.4 Audio direction
- **Music**: one chiptune loop per zone. Menus = laid-back 90 BPM chiptune (think
  night-drive synthwave but 8-bit). Levels each get a faster variant. Finale = music
  STOPS (see §8). Keep every loop under 45s and seamless.
- **SFX inventory** (jsfxr/ZzFX style, engineers can synthesize): `blip` (hover),
  `clunk` (press), `coin`, `error` (harsh Win98-ish), `teleport` (descending zap),
  `quack`, `bark` (Bentley, 2 pitches), `sparkle` (L4), `howl` (werewolf), `splash`,
  `reel` (fishing), `jump`, `stomp`, `fanfare-win`, `sad-trombone-8bit` (lose),
  `typewriter` (dialogue tick), `powerdown` (CRT off, finale), `heartbeat` (finale, soft).
- Comedy rule: the `error` sound is slightly TOO loud relative to everything else
  (+3dB). It should make her flinch-laugh. Everything else mixed politely.

---

## 3. SCREEN 1 — THE GATEKEEPER

### 3.1 Layout
Centered card (max-width 560px, pixel border, `--dock-water`), on the starfield.
Stack: pixel heart sprite (48px, idle-bob §9.2) → question (arcade, `--text-h2`,
`--star-white`) → sub-line (body font, `--star-dim`) → button row.

**Question:**
> `IS THIS LAINIE?`

**Sub-line:**
> `security question. the ducks require verification.`

Buttons start equal size (160×56):
- `[YES, OBVIOUSLY]` — `--heart-neon`
- `[no]` — `--lincoln-mud`, lowercase (it has no confidence)

Tiny footer at card bottom (`--text-tiny`, `--star-dim`):
> `certified secure by the Department of Ducks`

### 3.2 YES button behavior (the reward path)
Each click: scale ×1.25 (spring pop §9.1), `coin` SFX rising +2 semitones per click,
label escalates. At click 4 → screen transition (§9.6) to Loading.

| click | YES label |
|---|---|
| 0 | `YES, OBVIOUSLY` |
| 1 | `YES!!` |
| 2 | `SHE SAID YES` (5-heart burst) |
| 3 | `LET HER IN!!!` (button now ~60% of card width; screen shakes 4px, 200ms) |
| 4 | → proceed. Toast during transition: `identity confirmed: it's her. play it cool.` |

If YES is clicked first (no NO clicks), during the transition add a second toast:
`wow. first try. she's so smart.` — because she will screenshot that.

### 3.3 NO button behavior (the troll path)
Each click: `error` SFX + guilt line REPLACES the sub-line + button shrinks ×0.88.

| NO click | sub-line becomes | NO label becomes |
|---|---|---|
| 1 | `hm. the corvette says otherwise.` | `no?` |
| 2 | `Bentley just looked up. he heard that.` | `wait no` |
| 3 | `ok now the ducks are involved. this is serious.` | `um` |
| 4 | `Lainie. we have your gym check-in records.` | `no ❤` |

**After click 4 → TELEPORT MODE:** the NO button becomes uncatchable.
- Desktop: on `pointerenter` within 90px proximity, `teleport` SFX + button vanishes
  (1-frame white flash) and reappears at a random point ≥240px away, inside the viewport
  with 24px padding. 120ms cooldown so it doesn't strobe.
- Touch: on `touchstart` over the button, it teleports BEFORE the tap registers
  (listener on `touchstart`, `preventDefault`, relocate). Feels haunted. That's correct.
- Every 3rd teleport, a random micro-taunt toasts (rotate, don't repeat consecutively):
  `nice try` · `too slow` · `the button has trust issues now` · `it's faster than a
  duck and twice as smart` · `just press yes baby`
- After **10 failed attempts**, mercy rule: NO button stops, sighs (squash-stretch),
  label becomes `fine. i give up. -no button`, and one second later it morphs
  (300ms crossfade + grow) into a second YES button labeled `YES (you were saying?)`.
  Either YES proceeds.

---

## 4. SCREEN 2 — FAKE-LOADING TROLL (love.exe)

Full SYSTEM-skin sequence. A Win98-style window (title bar `--sys-blue`, chrome
`--sys-beige`) opens center screen on the starfield with `error`-adjacent chime.

### 4.1 Window: `love.exe — InstallShield Wizard (not suspicious)`
Contents: VT323 text, a chunky segmented progress bar (20 segments, `--crt-green`
fill), status line under it, and a `[Cancel]` button that is `disabled` with tooltip:
`you can't cancel love, Lainie.`

**Progress bar choreography (scripted, total ~24s):**

| t (s) | % | status line (VT323) |
|---|---|---|
| 0 | 0 | `Installing love.exe …` |
| 2 | 12 | `Loading feelings ............ ok` |
| 4 | 47 | `Reticulating heart splines ... ok` |
| 6 | 99 | `Almost there!` |
| 6.5 | **12** | `ok that's my bad` (bar SLAMS backwards, `error` SFX, window shakes) |
| 9 | 38 | `Downloading ramen (2 servings) ... ok` |
| 11 | 61 | `Brewing boba ... 0 shops found in Lincoln ... importing` |
| 14 | 84 | `Consulting the ducks ......... [REDACTED]` |
| 16 | **-3** | `wait. negative? how` |
| 18 | 69 | `nice.` |
| 20 | 91 | `Polishing corvette ........... ok` |
| 22 | 99.9 | `Do NOT close this window` |
| 24 | 100 | `love.exe installed. it was already installed. it's been installed since August 2023.` |

At 100%: `fanfare-win` + window auto-minimizes toward the taskbar area and POPUP CASCADE begins.

### 4.2 Popup cascade (three draggable fake errors)
All windows: draggable by title bar (mouse + touch), spawn offset-stacked (+32px,+32px),
each with `error` SFX. Each must be dismissed to continue; a taskbar-ish counter bottom
of screen reads `problems remaining: 3` → `2` → `1` → `0 (for now)`.

**POPUP 1 — "Scan Complete"** (info icon)
> **Title:** `Corbin Scanner Pro v2.0`
> **Body:** `Scan complete.` `4,000 photos of Corbin found on this device.` `This is a
> normal amount. Do not investigate.`
> **Buttons:** `[Keep All 4,000]` `[Keep All 4,000 (bigger button)]`
> Both proceed. The second button is 1.4× bigger. That's the whole joke.

**POPUP 2 — "Critical Error"** (red X icon) — *the dodging close button*
> **Title:** `ERROR: FEELINGS.DLL`
> **Body:** `A fatal exception has occurred: Corbin thought about you at 2:47 AM and
> did not text "you up?" This restraint requires a system reward.`
> **Button:** `[OK]`
> The window's ✕ close button DODGES: on pointer within 40px, ✕ slides to the other
> end of the title bar (150ms ease-out, max 5 dodges, then allows itself to be clicked
> with tooltip `fine.`). The `[OK]` button works immediately — the joke is she'll go
> for the ✕ first because everyone does.

**POPUP 3 — "Multiplying close button"**
> **Title:** `Are you sure?`
> **Body:** `Are you sure you want to continue to the quiz? Corbin worked really hard
> on the quiz. Like, embarrassingly hard.`
> **Buttons:** `[Yes, continue]` `[No]`
> Clicking `[No]` spawns a CLONE of this window (up to 5, cascade-offset, each `error`
> SFX pitched +1). Every clone's `[No]` spawns more until cap. All `[Yes, continue]`
> buttons close ALL windows at once (satisfying `clunk` ×n) and proceed.
> At the 5-window cap, all `[No]` buttons relabel to `[No (this does nothing)]` — and
> indeed do nothing but a sad `blip`.

### 4.3 Exit interstitial
Brief full-screen VT323 terminal moment (2.5s, auto-advance):
```
> launching quiz.exe
> difficulty: IMPOSSIBLE
> curve: none
> good luck. you'll need it. (you won't. you'll get 200%.)   ← this line flashes for exactly 300ms
```

---

## 5. SCREEN 3 — THE IMPOSSIBLE QUIZ: "HOW WELL DO YOU KNOW US?"

### 5.1 Layout & flow
Game-show card center screen: question counter top-left (`Q 3/12`), running score
top-right (`SCORE: ???` — literally three question marks the whole time, ticking with a
slot-machine shuffle animation on every answer). Question in `--text-body` on the card;
2×2 grid of answer buttons (stack 1-col on mobile). Correct answer → `coin` SFX,
button flashes `--ramen-gold`, confetti micro-burst (12 particles), snarky verdict line
appears under the grid for 1.6s, auto-advance. There are no wrong answers that halt
progress — wrong picks get a verdict line and then ALSO count as correct ("we'll allow
it"). She cannot lose. She must never suspect she cannot lose until 200%.

Troll behavior legend used below:
- **DODGE** — button flees cursor like the NO button (3 dodges max, then clickable).
- **DECOY** — tempting non-Corbin answer; clicking it triggers a special verdict, still advances.
- **SWAP** — labels shuffle positions once, 500ms after render (with `teleport` blip).
- **GROW** — correct answer very slowly grows (scale 1→1.15 over 6s). Subliminal.

### 5.2 THE QUESTIONS (implement all 12, in order, verbatim)

**Q1.** `Who picked you up from the gym in a silver C7 Corvette like it was a movie?`
- `Corbin` ✅ — verdict: `correct. the movie was rated PG for excessive smoothness.`
- `Corbin's dad (it was his car)` — verdict: `technically the executive producer. point awarded.`
- `Edward Cullen` **DECOY** — verdict: `Edward doesn't lift. next question.`
- `a very polite carjacker` — verdict: `…who then dated you for years? sure. point.`

**Q2.** `That first night back: gym → corvette → beach → dock → stars. What was the fifth stop?`
- `falling for Corbin` ✅ **GROW** — verdict: `ding ding ding. speedrun world record.`
- `getting sand in the corvette` — verdict: `also true. his dad has not forgotten. point.`
- `home, at a reasonable hour` — verdict: `lol. point for optimism.`
- `the moon` — verdict: `emotionally? yes. point.`

**Q3.** `Who gave you a PROFESSIONAL, MUSEUM-QUALITY Egyptian ankh tattoo?`
- `Corbin` ✅ — verdict: `an artist. a visionary. a safety pin.`
- `a licensed tattoo artist` **DODGE** (this button flees — she literally cannot select
  the responsible answer) — if finally caught: verdict: `LIES. it was a safety pin and
  a pen. and you hated it. and it's canon now.`
- `ancient Egyptians (long distance)` — verdict: `they consulted. point.`
- `Corbin (unlicensed) (confident)` — verdict: `the most correct answer on this quiz.`

**Q4.** `On a scale of ramen to boba, how do you feel right now?`
- `ramen` — verdict: `warm and a little salty. accurate.`
- `boba` — verdict: `sweet with something to chew on. accurate.`
- `ramen but make it boba` — verdict: `chaotic. correct. this is the ADHD answer and we love it.`
- `Corbin` ✅ — verdict: `not even an option on the scale and yet. 2 points.`
*(all four are "correct"; the score shuffle just spins harder)*

**Q5.** `Who controls everything?`
- `the government` — verdict: `[flagged by the ducks] point awarded to keep you quiet.`
- `Corbin` — verdict: `he wishes. point anyway.`
- `Lainie` — verdict: `in this house? yes. point.`
- `██████` ✅ **SWAP** — verdict shows only: `🦆` *(+ single quack SFX. move on.
  never explain.)*

**Q6.** `Lincoln, Maine is world-famous for:`
- `nothing` — verdict: `correct.`
- `nothing.` — verdict: `MORE correct.`
- `having exactly zero (0) bubble tea establishments` ✅ — verdict: `a civic tragedy.
  population: small. boba: none. exits: one (you took it).`
- `the road out of it` — verdict: `poetic. point.`

**Q7.** `Bentley is:`
- `a dog` — verdict: `factually thin. point, reluctantly.`
- `a Scooby-Doo stunt double collecting a paycheck` ✅ — verdict: `those ears are on the
  payroll. correct.`
- `the fastest ears in Maine` — verdict: `aerodynamically true. point.`
- `Corbin` **DECOY** — verdict: `no. but they do have the same enthusiasm when you walk in. point.`

**Q8.** *(special — THE GRANDMA GAG)* Question renders as:
`LOADING LAINIE'S TRUE FORM…`
with a fake progress bar (0→100 over 3s, VT323 ticks: `analyzing volume (loud)… ok` ·
`analyzing cleaning supplies (alphabetized)… ok` · `analyzing attention span… ok wait
come back` ). Then the card flips (§9.5) to reveal **the grandma photo** (asset slot:
`assets/grandma-truth.jpg`, pixel border, slight polaroid tilt -3°) captioned:
> `TRUE FORM IDENTIFIED: short. blonde. glasses. huge laugh. suspiciously good at
> loving people. match confidence: 100%`
One button: `[yeah that's me]` — verdict: `we know. it's our favorite thing about you.`
*(this is the mid-quiz warmth beat — one sincere clause smuggled in, then move on fast)*

**Q9.** `Corbin and Lainie: together since…`
- `August 2023` ✅ — verdict: `correct, but also technically since high school, a
  sunrise, and one questionable curfew.`
- `high school, your honor` — verdict: `the prequel counts. point.`
- `since the corvette door opened` — verdict: `cinematically? yes. point.`
- `1947` **DECOY** (grandma-form callback) — verdict: `grandma-form confirmed. point.`

**Q10.** `Who is the loudest person in any given room?`
- `Lainie` — verdict: `self-awareness bonus. +2.`
- `Lainie, whispering` ✅ — verdict: `correct. your whisper has a zip code.`
- `Cole` **DECOY** — verdict: `…ok fair. it's a tie. it's always a tie. you two in the
  same room is an OSHA violation. point.`
- `a fire alarm` — verdict: `the fire alarm asked you both to keep it down. point.`

**Q11.** `Edward Cullen vs. Corbin. Who wins?`
- `Corbin` ✅ — verdict: `correct. see Level 4 for the documentary footage.`
- `Edward` **DODGE, uncatchable** (never allows the click; after 5 attempts it relabels
  to `Corbin` with a `teleport` blip) — if she chases it, toast: `stop. STOP. he
  sparkles. that's not a personality.`
- `Corbin (in a wig, as Edward)` — verdict: `commitment to the bit. point.`
- `Bentley (interference)` — verdict: `the ears alone. point.`

**Q12.** `Final question. Rate this quiz:`
- `★★★★★` — verdict: `thank you.`
- `★★★★★ (different font)` — verdict: `thank you.`
- `5 stars` — verdict: `thank you.`
- `no` **teleports ONCE**, relabels to `★★★★★ (against my will)` — verdict: `thank you.`

### 5.3 Results screen
Slot-machine shuffle of `???` finally resolves with rising `coin` arpeggio →
giant `200%` in `--ramen-gold`, arcade font 64px, confetti (§9.4 full burst).

> **`FINAL GRADE: 200%`**
> `you scored higher than the quiz thought possible. flaws detected in you: 0.
> flaws detected in Corbin: also 0 (self-graded).`
> `reward unlocked: THE ESCAPE ARCADE`
> Button: `[INSERT COIN →]`

---

## 6. SCREEN 4 — THE ESCAPE ARCADE (hub + 4 levels)

### 6.1 Hub: the cabinet screen
Full-screen "attract mode": title `THE ESCAPE ARCADE` in `--ramen-gold` with
letter-by-letter flicker-on (§9.7). Subtitle (body font, `--star-dim`):
> `objective: get out of Lincoln, Maine. by any means. even fishing.`

Center: `INSERT COIN` blinking (arcade font, 700ms on / 400ms off). Clicking anywhere
drops a pixel coin from top of screen into a slot (400ms, ease-in, `coin` SFX +
screen-shake 3px) → level-select rail appears.

**Level-select rail:** 4 arcade-cabinet cards in a row (stack 2×2 mobile). Locked
levels are greyscale (`--corvette-silver`) with a pixel padlock and tooltip
`beat the previous level. no skipping. the ducks are watching.` Completed levels get a
gold `CLEAR!` ribbon and remain replayable. Below the rail:
`progress: [♥][♥][♡][♡] — distance from Lincoln: growing`

Every level: same skeleton — INTRO CARD (title, tagline, controls, `[START]`) →
gameplay → WIN card (`fanfare-win`) or LOSE card (`sad-trombone-8bit`, `[RETRY]`,
infinite retries, no penalty). Keep each level 60–120 seconds. **Short and dumb beats
long and polished.** Controls: keyboard on desktop (arrows/space), giant thumb-zones on
touch. Every intro card lists controls in one line, VT323.

---

### 6.2 LEVEL 1 — "ESCAPE LINCOLN" (side-scrolling platformer)

**INTRO CARD**
> **`LEVEL 1: ESCAPE LINCOLN`**
> `pop. small — boba shops: 0 — vibes: also 0`
> `run right until Maine ends. Bentley's coming. obviously.`
> controls: `← → move · SPACE/tap jump · double-tap double-jump`
> `[START]`

**Design:** classic Mario-like auto-scroll-nudge runner, 90 seconds max. Parallax:
starfield → distant pines (`--lincoln-mud` silhouettes) → ground. Lainie sprite (16×24,
ponytail, determined) with **Bentley trotting 30px behind, matching jumps 150ms late**
(pure follow-through comedy; Bentley cannot die, he's invincible and slightly too happy).

Obstacles (collide = LOSE card): cornfield rows (jump over), parked pickup trucks
(jump), a slow tractor (moving, jump). Signposts (non-colliding, readable, in order):
`LINCOLN — POP. small` · `NO BUBBLE TEA next 1,000,000 mi` · `NOTHING AHEAD (still)` ·
`SERIOUSLY WHY ARE YOU STILL HERE` · and at the end, `→ ANYWHERE ELSE`.

Collectibles: boba cups (+10, `coin`), ramen bowls (+25, `coin` +2 semis), pixel hearts
(+50, heart-burst). Hidden: ONE duck sitting on the tractor. Touch it: +500,
quack, toast `you weren't supposed to find him.`

**Finish:** flagpole labeled `WAY OUT OF TOWN`. Lainie grabs it, Bentley overshoots and
skids past the flag, ears up. Fireworks.

**WIN CARD:** `LEVEL CLEAR!` / `you escaped Lincoln at a top speed of "finally."` /
`Bentley rated the trip: 2 ears up.` `[CONTINUE]`
**LOSE CARD:** `caught by Lincoln.` / `the town thanks you for staying. don't.` `[RETRY]`

---

### 6.3 LEVEL 2 — "BOBA & RAMEN FISHING" (timing/casting)

**INTRO CARD**
> **`LEVEL 2: BOBA & RAMEN FISHING`**
> `the dock. the stars. the same dock, actually. yes THAT dock.`
> `catch dinner. quota: 6. beware of boots.`
> controls: `hold to aim (meter swings) · release to cast · tap when it bites`
> `[START]`

**Design:** side view — wooden dock (`--boba-brown`) on `--dock-water`, night sky with
the BIG starfield (this level is the prettiest on purpose; it's the dock from their
night). Lainie sits on the edge, tiny Bentley lying beside her, tail thump loop (0.8s).
Hold-to-aim swinging power meter; cast; shadow circles under water; exclamation `!` +
`reel` SFX = 700ms reaction window to tap.

Catch table: boba cup 40% (+10) · ramen bowl 30% (+25) · old boot 20% (0 pts, toast
rotates: `a boot. Lincoln's #1 export.` / `another boot. someone out there is barefoot
and free.`) · **SECRET DUCK 10%** — screen flashes `--duck-yellow`, quack ×3, +100,
toast: `you caught a duck. it caught you first. it lets you win this level.` and the
quota instantly completes.

**WIN CARD:** `LEVEL CLEAR!` / `dinner secured: boba AND ramen. balanced diet (ours).` /
`the stars from this dock still go hard. just saying.` `[CONTINUE]`
**LOSE CARD** (timer out): `the fish voted no.` / `even the boot got away. embarrassing
for everyone.` `[RETRY]`

---

### 6.4 LEVEL 3 — "BENTLEY'S ERRANDS" (top-down village, Animal-Crossing-lite)

**INTRO CARD**
> **`LEVEL 3: BENTLEY'S ERRANDS`**
> `a tiny village. three menaces. one very good boy.`
> `do Bentley's 3 errands. survive the conversations.`
> controls: `arrows/joystick move · SPACE/tap talk`
> `[START]`

**Design:** cozy top-down map (5 buildings, path, flowers Bentley has clearly dug up —
dirt patches with a proud Bentley nearby). NPCs with `!` bubbles. Dialogue = bottom
letterbox, typewriter tick, portrait left. Fetch chain: Bentley gives quest →
Cole has the item but talks → Hayden has the next item but negotiates → grandma-Lainie
NPC cameo → return to Bentley.

**BENTLEY** (quest giver — speaks in barks; SUBTITLES do the comedy):
> `boof.` *(translation: greetings. i require three things. i ate the list.)*
> `boof boof.` *(translation: 1. my ball. Cole "borrowed" it. 2. one (1) treat. Hayden
> has it and is treating it like an asset. 3. a snack for the tiny loud grandma. she
> knows why.)*
> `…boof.` *(translation: i believe in you more than i believe in squirrels. go.)*

**COLE** (ADHD fast-talker — his text renders at 2× typewriter speed, no punctuation
breaks, and the `[SKIP]` button visibly dodges twice before working):
> `LAINIE hey hey hey ok so funny story about the ball I borrowed it for a science
> thing ok not science a test ok not a test I threw it on a roof BUT hear me out the
> roof is basically storage and also did I tell you about my new business idea it's
> like a food truck but for soup no WAIT for boba no WAIT both — soup boba — ok yes
> the ball here's the ball I got it down an hour ago I just wanted to talk`
> *(receives: BALL 🎾)* `bye wait no one more thing — ok bye — WAIT — ok actually bye`

**HAYDEN** (cheap, anal about money — dialogue in itemized-receipt format):
> `Lainie. good. you want the dog treat. let's talk terms.`
> `ITEM: dog treat (1) — market value: $0.30 — my price: $4.75 — reason: convenience fee,
> handling fee, "I had to hold it" fee.`
> Choice buttons: `[pay $4.75]` → he says `pleasure doing business. no refunds. tell no
> one I rounded down.` / `[remind him Corbin bought his lunch in 2022]` → 2s pause…
> `…debt acknowledged. take the treat. this never happened. I'm writing it off.`
> *(either choice works; the second is funnier and costs nothing — she'll pick it)*

**GRANDMA-LAINIE NPC** (a tiny sprite: short, blonde bob, big round glasses, broom,
`--grandma-lilac` cardigan — standing outside a suspiciously spotless house):
> `oh SWEETHEART there you are — WATCH THE FLOORS I JUST DID THEM — come here, you look
> just like me, isn't that FUNNY —`
> `I swept this porch four times today. it needed it once. that's not the point.`
> *(hand over snack)* `you tell that boy with the corvette he can come by IF he takes
> his shoes off. and tell the dog he's perfect and also BANNED from the flower beds.
> ok I love you, SPEAK UP next time, you're so quiet.` *(she is the loud one. Lainie
> has said nothing. this is the joke.)*

**Return to BENTLEY:**
> `BOOF!!` *(translation: flawless. you're my favorite. don't tell Corbin. actually
> tell him. he'll be so normal about it.)*

**WIN CARD:** `LEVEL CLEAR!` / `errands complete. Cole is still talking to no one.
Hayden invoiced the wind. grandma says hi (loudly).` `[CONTINUE]`
*(no lose state in L3 — it's a vibe level)*

---

### 6.5 LEVEL 4 — "TWILIGHT FANTASY → TEAM CORBIN" (visual novel → boss fight)

**INTRO CARD**
> **`LEVEL 4: TWILIGHT FANTASY`**
> `a forest. a mist. a suspiciously pale gentleman.`
> `Corbin is aware of this level. Corbin approved this level. Corbin wrote this level
> through gritted teeth.`
> controls: `tap to advance · then MASH SPACE / MASH THE BUTTON`
> `[START]`

**Phase 1 — the sparkle scene (visual novel, `--edward-pale` + `--taro-purple` mist,
floating sparkle particles §9.8, romantic music-box chiptune):**
Edward sprite (pale, brooding, jaw for days) drifts in with `sparkle` SFX.

> **EDWARD:** `Lainie… I've waited 108 years for—`
> *(choice)* `[😍 continue the fantasy]` / `[😍 continue the fantasy (this button
> also does that)]`
> **EDWARD:** `Your scent… is that… ramen? …intoxicating.`
> **EDWARD:** `Run away with me. We'll live forever. Coldly. Sparkling at a
> reasonable distance.`
> *(choice)* `[yes edward]` / `[YES EDWARD]`
> **EDWARD:** `First, let me stare at you across a cafeteria for several months—`

**RECORD SCRATCH. Music cuts. Screen shakes 8px.** A door (in a forest) SLAMS open.

> `HOWL SFX` — **WEREWOLF CORBIN** bursts in: brown pixel wolf, backwards baseball cap
> (the wolf keeps the cap — non-negotiable design detail), one shredded sleeve.
> **WEREWOLF CORBIN:** `ABSOLUTELY NOT.`
> **EDWARD:** `And you are?`
> **WEREWOLF CORBIN:** `the guy with the corvette, sparkles.`

**Phase 2 — boss fight (mash-to-attack, 15–25s):**
UI: `TEAM CORBIN` mash meter bottom-center (fills with SPACE-mash / button-mash, drains
slowly). Edward's HP bar top: `EDWARD — HP: 108 (years)`. Each mash: wolf-Corbin lunges,
`stomp` SFX, sparkle particles fly off Edward like loose glitter, HP drops with numbers
popping (`-13!`, `-24!`, crit `-108!!` at random, 5% chance = instant win).
Edward "attacks" between lunges by posing dramatically; the pose does 0 damage; caption:
`EDWARD used BROOD. it had no effect.` / `EDWARD used STARE. Lainie is taken. it failed.`
Meter full → finisher cutscene: wolf-Corbin yeets Edward gently over the treeline
(arc + twinkle `sparkle` at the apex, Team-Rocket style), Edward's fading line floats:
`…tell her I sparkled…`

**WIN CARD:**
> **`FLAWLESS VICTORY — TEAM CORBIN`**
> `Edward has been returned to the mist (politely). the fantasy has been upgraded to a
> guy who actually texts back.`
> `[CLAIM PRIZE →]` *(button pulses — this is the door to the finale)*

*(no lose state — meter can't fail, only take longer. she always wins. always Team Corbin.)*

---

## 7. THE FINALE — THE GOTCHA (protect this at all costs)

**This is the only sincere screen. It earns everything. Do not add jokes past the
scripted one. Do not add sparkles. Do not add ducks.**

Sequence, precisely:
1. From `[CLAIM PRIZE →]`: screen "powers down" — CRT-off animation (§9.9),
   `powerdown` SFX, music **stops**, starfield freezes. 1.5 full seconds of dark
   silence. (Engineers: do not shorten this. The silence is the setup.)
2. Soft `heartbeat` SFX ×2, very quiet. A single real photo fades in over 1200ms —
   asset slot `assets/finale-photo.jpg` (Corbin picks: ideally the two of them, dock /
   beach / corvette era). White polaroid frame, tilt −2°, soft (NOT pixel) shadow —
   the one element in the whole site that isn't pixelated, because it's real.
3. Under it, lowercase, `--font-body`, `--star-white`, typed at gentle typewriter pace
   (40ms/char, no tick SFX):

   > `ok. troll over.`
   >
   > `no dodging button this time. no ducks. just this:`
   >
   > `from driving around til sunrise, to the dock, to whatever this website is —`
   > `you're my favorite person, and i actually love you.`
   >
   > `gotcha.`
   >
   > `— corbin`

   *(the word `gotcha.` lands alone on its own line after a 900ms pause. that pause is
   the entire emotional engineering of this site.)*
4. After 2s, one small final button fades in, pixel-style again (the machine waking
   back up, gently): `[replay the chaos ↺]` — returns to the arcade hub with everything
   unlocked. Beneath it, `--text-tiny`, `--star-dim`:
   `© corbin & the ducks · est. august 2023 · lincoln survivors club, members: 2 (+1 dog)`

---

## 8. FLOW & STATE

```
GATEKEEPER → LOADING/POPUPS → QUIZ (12Q) → 200% → ARCADE HUB
  HUB → L1 → L2 → L3 → L4 (sequential unlock; replay allowed) → FINALE
```
- Persist progress in `localStorage` (`lainie.exe/v1`): screen reached, levels cleared,
  duck-mode found (y/n). Refreshing mid-troll must NOT restart the gate — she'll
  refresh to escape the NO button. The site remembers. Toast on return:
  `welcome back. the button also remembers.`
- Hard skip for emergencies: `?skipto=finale` query param (undocumented, for Corbin).

---

## 9. ANIMATION & MOTION SPEC (named, engineer-ready)

Global easing tokens:
```css
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);  /* overshoot pop */
--ease-snap:   cubic-bezier(0.7, 0, 0.3, 1);        /* quick UI moves */
--ease-heavy:  cubic-bezier(0.4, 0, 1, 1);          /* falling things */
```

| # | name | spec |
|---|------|------|
| 9.1 | `yes-grow` | on click: scale from current → ×1.25 via `--ease-spring`, 350ms; tiny -2° → +2° → 0° rotation wobble concurrently. Never exceed 90vw width. |
| 9.2 | `sprite-idle-bob` | all idle sprites: translateY 0→-3px→0, 1.2s, steps(2) — pixel games bob in steps, not smooth curves. Bentley's ear gets its own 0.9s counter-phase flop. |
| 9.3 | `no-teleport` | 1 frame opacity 0 + white 2px outline flash at old spot (80ms) → reposition → pop-in scale 0.6→1, 150ms `--ease-spring`, `teleport` SFX pitched randomly ±2 semis. |
| 9.4 | `confetti-burst` | micro: 12 particles; full (200%, level wins): 80 particles. Squares 6–10px in `--heart-neon/--ramen-gold/--taro-purple/--crt-green`; initial v 300–600px/s in 60° cone, gravity 1400px/s², rotation ±540°/s, life 1.8s, fade last 400ms. |
| 9.5 | `card-flip` (grandma reveal) | rotateY 0→90 (200ms `--ease-snap`), swap content, 90→0 (300ms `--ease-spring`). Backface = static noise pattern. |
| 9.6 | `screen-transition` | CRT wipe: current screen scales Y 1→0.005 + brightness 3 (250ms `--ease-heavy`) into a 2px horizontal line, hold 120ms, new screen reverses it. Used between all major screens. |
| 9.7 | `title-flicker-on` | letters appear L→R, 60ms stagger; each letter flickers opacity 0→1→0.3→1 within 180ms + `blip` every 3rd letter. |
| 9.8 | `sparkle-field` (L4) | 20 diamond particles, spawn random, scale 0→1→0 over 2s, `--edward-pale`, twinkle rotate 45°. Kill ALL instantly on the record scratch — the abrupt stop is the joke. |
| 9.9 | `crt-off` (finale) | contents scale Y→0.005/brightness 4 (300ms), then scale X→0 (150ms) to a single dot, dot fades 400ms. Reverse (`crt-on`) never used on finale — photo just fades. |
| 9.10 | `screen-shake` | translate ±Npx random both axes, 6 frames at 60fps, decay to 0. N=3 small (coin), 4 (gate click 3), 8 (Corbin door slam). |
| 9.11 | `progress-slam` | bar width animates forward `linear`; backward jumps use 120ms `--ease-heavy` + shake(4) — going backwards must feel like a physical malfunction. |
| 9.12 | `toast` | slide up from bottom +8px overshoot, 250ms `--ease-spring`; hold 1.8s; fall out with `--ease-heavy` 200ms. Max 1 visible; queue others. |
| 9.13 | `mash-lunge` (L4) | wolf sprite translateX +40px → back, 120ms total, steps(3); Edward flinch: 6px knockback + 1-frame white flash (classic hit-flash). |

Comedic-timing constants (do not tune without the director, i.e. this document):
- Beat before a punchline toast: **600ms**. Beat before `gotcha.`: **900ms**.
- Dark silence in finale: **1500ms**. Error popup stagger: **450ms** apart.

---

## 10. SPRITE & ASSET MANIFEST

All sprites 16×16 to 32×32 logical px, drawn at 1× and rendered with
`image-rendering: pixelated` at 3× scale. Palette-locked to §1.2 colors.

| asset | notes |
|---|---|
| `lainie` | ponytail, determined brows; walk 4f, jump 2f, sit 1f, fish 2f |
| `bentley` | tan/caramel (`--bentley-caramel`), HUGE ears (⅓ of sprite height, they flop independently), Scooby-esque lankiness; run 4f, skid 1f, tail-thump 2f |
| `werewolf-corbin` | brown wolf + backwards cap; lunge 3f, howl 1f |
| `edward` | pale, tall hair, sparkle overlay; brood 2f, flinch 1f, yeet-arc 1f |
| `cole` | spiky hair, mid-gesture always, motion lines baked into idle |
| `hayden` | buttoned-up, holds a tiny ledger; idle = counting 2f |
| `grandma-lainie` | short, blonde bob, round glasses, broom, lilac cardigan |
| `duck` | 8×8, yellow, smug (1px eyebrow). walk 2f. reused everywhere |
| `props` | boba cup, ramen bowl, heart, coin, boot, corvette (side view, silver, low), flag, signposts, tractor, pickup |
| `photos` | `assets/grandma-truth.jpg`, `assets/finale-photo.jpg` — Corbin supplies; build with labeled placeholder frames |

---

## 11. TONE GUARDRAILS (legal for jokes)

1. **Never mean.** Every troll punches at the *machine*, at *Corbin*, at *Lincoln*, or
   at *Edward*. Jokes about Lainie (loud, ADHD, clean-freak, grandma) are ALWAYS framed
   as her superpowers / "our favorite thing about you." If a line could sting read
   aloud in front of her mom, cut it.
2. **Lincoln = "boring small town," full stop.** No jokes about the people who live
   there, poverty, or anything punching down. The joke is emptiness and zero boba.
3. **Grandma meme = loving.** She's warm, hilarious, house is spotless, laugh is huge.
   Never "old = bad." The reveal caption ends on "suspiciously good at loving people."
4. **Origin story stays light.** "Drove around til sunrise" — nothing beyond that.
   Tattoo joke targets Corbin's technique, never her skin/body.
5. **No crude content, no innuendo.** This link WILL be shown to friends and family.
   Rating: PG. "baby" appears exactly once (§3.3 taunt) — matches their real usage.
6. **The finale is sacred.** One sincere beat, lowercase, then out. Any engineer who
   adds a joke after `— corbin` will be reported to the ducks.
7. Names are always `Corbin`, `Lainie`, `Bentley`, `Cole`, `Hayden`. No invented pet
   names anywhere.

---

## 12. BUILD PRIORITY (if time runs out)

1. Gatekeeper (the hook) → 2. Finale (the point) → 3. Quiz → 4. Loading/popups →
5. L1 platformer → 6. L4 Twilight → 7. L2 fishing → 8. L3 village → 9. Konami/duck mode.
A site with only #1–#4 still works as a complete gift. The arcade is the flex.

*— end of spec. the ducks have reviewed and approved this document. 🦆*
