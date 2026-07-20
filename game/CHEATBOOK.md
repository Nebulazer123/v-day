# THE DUCK JOB — Cheatbook

This is the source-of-truth list for hidden inputs in the 3D game. The root
LAINIE.EXE site has separate Easter eggs; those do not run inside `game/dist`.

## Highway cheats and Easter eggs

- **Duck code / POND ZERO:** on THE HIGHWAY, tap top-left → top-right →
  bottom-left → bottom-right → center within six seconds. This triggers the
  30-duck flypast and permanently reveals POND ZERO.
- **Collector unlock:** collecting all 21 golden ducks also reveals POND ZERO.
- **Grandma's Diner:** get in the C6 and drive backward. Sustained reverse or
  reaching the diner end of the highway reveals the shop.
- **Certified dog botherer:** while walking on THE HIGHWAY, click Bentley seven
  times. The barks rise in pitch, then the heart burst triggers.
- **Grandma check-in:** stand completely idle on THE HIGHWAY for 30 seconds.
- **Heart horn:** while driving, press FIRE three times within 1.2 seconds.
- **Date cards:** return to THE HIGHWAY on February 14 or during August.
- **License plate:** inspect the back of the C6.

## Chapter secret

- **Grandma's Cookie:** buy the cookie at the diner, enter Chapters 1–6, and press
  `H` for Grandma's first puzzle hint. The pause menu's **GET A HINT** page is
  always available and reveals three progressive hints per story level.

## Developer-only shortcuts

- Add `?debug` to the game URL to expose `window.__dj` in the browser console.
- `__dj.go('play', { id: 'ch1' })` through `ch7` jumps to a chapter.
- `__dj.state()` returns the current scene, pause state, and save data.

The normal player-facing controls and remappable keyboard bindings live under
**Pause → Settings → Keybinds**.
