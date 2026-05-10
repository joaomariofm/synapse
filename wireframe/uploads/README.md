# Synapse

An Anki-style flashcard app with spaced repetition (FSRS), built as a personal Android tablet app.

## Objective

Build an Anki-style flashcard app for a single end user — my girlfriend, a medicine student — to install on her Samsung tablet (Android) and use as her primary study tool.

Because the app targets one known user on one known device, the design optimizes for her study workflow rather than for a broad audience: no accounts, no monetization, no multi-device sync as a hard requirement. Medicine students typically rely on large pre-built Anki decks (e.g. AnKing), so deck import compatibility is likely a high-value feature.

## Scope

### In scope (MVP)
- Import `.apkg` files from device storage (one-shot, no AnkiWeb), **preserving review history and current scheduling state from the imported deck** (tentative — revisit details during implementation)
- Card rendering: basic front/back **and** cloze deletions
- **Image occlusion** — *rendering only* in MVP. Imported IO cards (e.g. from AnKing) display correctly during study. In-app authoring is deferred. Storage uses Anki's **native IO format** (JSON masks on the note); legacy IO Enhanced decks are converted to native on `.apkg` import.
- Card creation and editing in-app (front/back, cloze, image, tags)
- Deck creation and editing, with **nested decks** (`Parent::Child::Grandchild`); studying a parent includes all descendants
- Note-level **tags**, stored as flat strings with `::` rendered as a tree in the UI (Anki-compatible)
- **Tag-based browsing** of the card list (filter by one or more tags)
- **Suspend / unsuspend** cards, including **bulk suspend/unsuspend by tag** (essential for AnKing-style workflows)
- Daily study session with the core review loop (Again / Hard / Good / Easy)
- Spaced-repetition scheduler: **FSRS** with default parameters (per-user optimization deferred to post-MVP)
- Persist a full review log per card (every rating, with timestamp and prior interval) — enables future FSRS optimization without a schema migration
- Per-deck FSRS parameter storage (defaults at launch; values can be replaced later by optimization or by `.apkg` import)
- Local persistence (survives app restarts, no data loss)
- **UI localized in pt-BR and en**, language selected automatically from the device's system locale (no in-app toggle). Falls back to en if the locale is anything other than pt-BR.

### Out of scope
- **AnkiWeb sync** — the tablet is the single source of truth; no multi-device sync
- User accounts / authentication
- Monetization (free, personal use)
- Cross-platform builds (Android tablet only — see Tech stack)
- Deck sharing / publishing from inside the app
- Add-on / plugin system

### Deferred (post-MVP, maybe)
- Study statistics and review heatmaps
- Custom study sessions / filtered decks (tag-based *studying*; tag-based *browsing* is in MVP)
- Audio playback / TTS
- Export back to `.apkg`
- FSRS parameter optimization (manual "Optimize" button in settings; v1 ships with defaults only)
- **In-app image occlusion authoring** (drawing masks on images to create new IO cards). v1 supports rendering only; authoring requires a canvas editor that's a meaningful piece of work.

## Tech stack

- **Platform:** Android tablet (Samsung) — single target, sideloaded `.apk`
- **Android `applicationId`:** `dev.joaomariofm.synapse`
- **App shell:** [Capacitor](https://capacitorjs.com/) (loads the web app inside a native Android WebView and provides plugin bridges for native APIs)
- **Build tool:** [Vite](https://vitejs.dev/)
- **UI framework:** React + TypeScript
- **Component library:** [shadcn/ui](https://ui.shadcn.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Spaced-repetition library:** [`ts-fsrs`](https://github.com/open-spaced-repetition/ts-fsrs)
- **Local database:** SQLite via [`@capacitor-community/sqlite`](https://github.com/capacitor-community/sqlite)
- **Media storage:** filesystem via [`@capacitor/filesystem`](https://capacitorjs.com/docs/apis/filesystem), under `Filesystem.Directory.Data` (private app data)
- **Internationalization:** [`react-i18next`](https://react.i18next.com/) with translations for **pt-BR** and **en**; locale resolved from the device via [`@capacitor/device`](https://capacitorjs.com/docs/apis/device) (`getLanguageCode`) — no in-app language toggle
- **Backend:** none — fully local, no server, no auth, no sync

### Implications of this stack

- **No engine reuse possible.** `libanki` (Python) and `rsdroid` (Rust/Anki backend) cannot be embedded in a Capacitor WebView. The card model, deck model, scheduler integration, and `.apkg` import will be reimplemented in TypeScript.
- **Anki cards render naturally** — they are HTML/CSS templates, which is the web stack's home turf.
- **Distribution:** the `.apk` is built from Android Studio (after `npx cap sync`) and sideloaded onto the tablet (no Play Store).

## Development environment

**Host OS:** Debian Trixie (Linux).

The Capacitor stack gives a three-tier dev loop. Most work happens in tier 1.

### Tier 1 — Browser (primary dev loop, ~90% of work)

`npm run dev` runs Vite's dev server. The whole React app — UI, card rendering, FSRS scheduling, deck logic — runs in a regular Chromium/Firefox tab with hot module reload, React DevTools, and the standard browser debugger. No Android needed for this layer.

### Tier 2 — Android emulator (Capacitor-plugin testing)

When the work touches native APIs (file picker for `.apkg` import, SQLite plugin, storage), the browser is no longer sufficient. Run an Android Virtual Device (AVD) from Android Studio with a tablet profile (e.g. Pixel Tablet or a generic 10"/12") and launch with:

```bash
npx cap run android
```

### Tier 3 — Physical Samsung tablet (final verification)

Connect the tablet over USB with USB debugging enabled (Settings → Developer options). Deploy with:

```bash
npx cap run android --target=<device-id>   # adb devices to find the id
```

Inspect/debug the running WebView from desktop Chrome via `chrome://inspect/#devices` — same DevTools experience as a normal web page.

### Tooling installed on the host

- **Android Studio** — official IDE from developer.android.com (tarball, unpacked to `/opt/android-studio`). Bundles the Android SDK, AVD Manager, and the JDK Gradle expects. Set `ANDROID_HOME` (e.g. `~/Android/Sdk`) in shell config.
- **Node.js** — installed via `nvm` for flexibility across versions.
- **adb / fastboot** — `sudo apt install android-tools-adb android-tools-fastboot`
- **scrcpy** — `sudo apt install scrcpy` (mirror and control the tablet from desktop over USB)
- **KVM (for the emulator)**:
  ```bash
  sudo apt install qemu-kvm
  sudo usermod -aG kvm $USER   # then log out and back in
  ```

### Build → device flow (recap)

1. `npm run build` — Vite produces a static web bundle in `dist/`.
2. `npx cap sync android` — copy the bundle into the native Android project under `android/`.
3. Open `android/` in Android Studio (or use Gradle CLI) to build the `.apk`.
4. Install on the tablet via `adb install` or directly from Android Studio.

## Data model

### Note-type model — Option C (generic schema, simplified editor)

The underlying schema is fully Anki-equivalent: notes carry arbitrary fields, note types carry arbitrary card templates (HTML/CSS), and custom note types from imported `.apkg` files are stored as-is and rendered correctly.

The **in-app editor** only exposes the built-in note types for creating new notes:

- **Basic** — fields `{Front, Back}`
- **Cloze** — single field with `{{c1::…}}` markers; card count derived from markers
- **Image Occlusion** — *rendering only* in v1. Imported IO notes display correctly; new IO notes can't be authored in-app yet (deferred — see "Deferred" list).

To author a brand-new custom note type from scratch, she uses Anki Desktop and imports. A full in-app template editor is a possible v2 feature.

### Schema sketch

```
note_type     (id, name, fields[], templates[], css, source: 'builtin' | 'imported')
note          (id, guid, note_type_id, fields_values[], tags[], created_at, modified_at)
card          (id, note_id, template_index, deck_id, due_at, fsrs_state, suspended: bool)
review_log    (id, card_id, reviewed_at, rating, prior_state)
deck          (id, name, parent_id, fsrs_params)   -- parent_id NULL for top-level; nesting unbounded
media         (id, sha256, original_filename, mime_type, byte_size, created_at)
```

Tags live in `note.tags[]` as flat strings; the UI splits on `::` for tree display.

### Media storage

Media files (images, audio) live on the filesystem under `Filesystem.Directory.Data`, **content-addressed by SHA-256** of the file bytes. The DB's `media` row stores the hash plus the original filename, mime type, and size; the bytes themselves are on disk at a path derived from the hash.

Consequences:

- **Automatic deduplication** — AnKing's repeated icons / common images collapse to one file on disk.
- **Card templates reference media by `original_filename`** (Anki-compatible). The renderer resolves `filename → sha256 → file URL` at render time.
- **Garbage collection** — when a note is deleted, count remaining references to each media row; delete file + row if zero.
- **Backup/export** = zip DB + media folder. Shape is essentially an `.apkg`.

This is a faithful subset of Anki's schema. Consequence: `.apkg` import becomes a near-direct table-to-table copy (with FSRS-state translation where needed) rather than a lossy transformation.

## Open decisions

- **`.apkg` import — implementation details** (the *direction* is to preserve history; the open questions are):
  - Mapping Anki's card scheduling state (ease, interval, due date) onto FSRS state (stability, difficulty, last review, due date) when the source deck wasn't already on FSRS
  - Behavior on re-import of the same deck (merge updates? duplicate? skip?)
  - Edge cases when an imported note type uses HTML/JS features we haven't implemented in the renderer yet
- **Routing / state management:** undecided (React Router vs. TanStack Router; plain React state vs. Zustand vs. another store).

## References

- Original Anki: https://github.com/ankitects/anki
- AnkiDroid: https://github.com/ankidroid/Anki-Android
- FSRS (modern algorithm): https://github.com/open-spaced-repetition/fsrs4anki

## Next steps

1. Sketch wireframes of main screens (deck list, study session, card editor)
2. Bootstrap the project: Vite + React + TS + Tailwind + shadcn/ui + Capacitor
