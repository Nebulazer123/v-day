# LAINIE.EXE — a mostly-troll arcade for Lainie 🕹️🦆

A single-page retro arcade that pretends to malfunction with love. Built for Lainie, from
Corbin. Funny for ~9 minutes, sincere for 10 seconds.

## The ride (beat-sheet — so you know what she's walking into)

1. **The Gatekeeper** — "IS THIS LAINIE?" The **YES** button grows every time she taps it;
   the **no** button guilt-trips her, shrinks, then teleports around so it's uncatchable
   (give up 10 times and it surrenders and becomes a second YES).
2. **love.exe** — a fake install bar that runs *backwards* (to −3%), then a cascade of fake
   error popups ("4,000 photos of Corbin found on this device. This is a normal amount.").
3. **The Impossible Quiz** — "How well do you know us?" Every answer is secretly right; she
   graduates at **200%**. Includes the "LOADING LAINIE'S TRUE FORM…" grandma reveal.
4. **The Escape Arcade** — four mini-games, each a different classic:
   - **Escape Lincoln** (platformer out of town, Bentley trotting behind)
   - **Boba & Ramen Fishing** (rare secret-duck catch)
   - **Bentley's Errands** (village with Cole who won't stop talking + Hayden who invoices you)
   - **Twilight Fantasy → Team Corbin** (she gets her Edward moment… then werewolf-Corbin
     handles it)
5. **The gotcha** — the cabinet powers down, and one real photo + one honest sentence land.

Woven throughout: the ankh tattoo, the secret ducks, the C7-to-the-dock night, ramen + boba,
escaping Lincoln, and a Konami-code duck stampede easter egg.

## Tech

Vanilla HTML/CSS/JS + `<canvas>`. No build step, no framework. Self-contained (only external
request is Google Fonts). Faces are real (pixelated); everyone else is hand-drawn pixel art.
Sound effects are synthesized; music bed is the Glue Song.

- `index.html` — shell + font/script load order
- `css/style.css` — the whole "Midnight Drive CRT" design system
- `js/core.js` — engine (router, audio, state, arcade registry)
- `js/shell.js` — starfield, cursor trail, HUD, toasts, confetti, duck mode
- `js/gate.js`, `js/loading.js`, `js/quiz.js` — the troll gauntlet
- `js/arcade.js` + `js/games/level{1,2,3,4}_*.js` — the arcade + levels
- `js/finale.js` — the gotcha
- `assets/` — photos, face sprites, synthesized SFX · `music/gluesong.mp3`
- `design/DESIGN_SPEC.md` — the full creative spec everything was built from

## Deploy

Static — deploys anywhere. This repo is set up for **Vercel** (`vercel.json` adds a
`noindex` header + robots.txt so the link stays unlisted). Push the branch, import to Vercel,
done — or use the Vercel CLI. Send her the link. Best opened on a phone.

## Undocumented

- `?skipto=finale` (or `gate`/`loading`/`quiz`/`arcadehub`) jumps straight to a screen.
- Konami code (↑↑↓↓←→←→BA), or tap the ♥ logo 7×, for DUCK MODE.

_© corbin & the ducks · est. august 2023 · lincoln survivors club, members: 2 (+1 dog)_
