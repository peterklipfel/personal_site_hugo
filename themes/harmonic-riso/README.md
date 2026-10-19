# Harmonic Riso

A Hugo blog theme whose wordmark is drawn from Fourier harmonics and printed as three overlapping risograph inks. Each ink uses a different number of harmonics, sits slightly out of register, and gently oscillates. Nav links rest soft and out of register, then sharpen and snap into register on hover.

Requires **Hugo 0.146.0 or newer** (it uses the new template layout). Tested with Hugo 0.168.0.

## Install

As a git submodule, from your site's root:

```sh
git submodule add <your-repo-url>/harmonic-riso.git themes/harmonic-riso
```

Or copy the `harmonic-riso` folder into `themes/`. Then set `theme = "harmonic-riso"` in your `hugo.toml`.

To try it with the example content:

```sh
cd themes/harmonic-riso/exampleSite
hugo server --themesDir ../..
```

## Configuration

See `exampleSite/hugo.toml` for a complete example. The parts specific to this theme:

```toml
[params]
  description = "Shown in search results and link previews"
  author = "Peter Klipfel"
  subtitle = "biotech · music · software · musings"   # under the wordmark, optional
  mainSections = ["blog"]                              # which sections are posts

  [[params.social]]
    name = "GitHub"
    url = "https://www.github.com/peterklipfel"

  [params.harmonic]
    heroText = "Peter Klipfel"   # defaults to the site title
    inks = "Coral"               # Coral, Classic, Sunset or Forest
    misregistration = 25         # percent, 0-100
    bottomHarmonics = 59         # 1-256 per ink
    middleHarmonics = 30
    topHarmonics = 13
    order = "frequency"          # "frequency" or "circle" (largest circle first)
    motion = true
    motionAmount = 40            # percent, 0-100
    oscillateUpper = 81          # percent of each ink's harmonics that oscillate, 10-100
    buildUp = true               # animate the wordmark in on load
    controls = true              # show the "Print settings" panel on the home page
```

The main menu (`[[menus.main]]`) becomes the riso nav links. The current page's link rests partly resolved.

### Print settings

With `controls = true`, the home page has a collapsed **Print settings** panel under the wordmark with every setting above, plus epicycles and a replay button. A visitor's changes are saved in their own browser (localStorage) and apply on every page, including the nav links. "Reset to defaults" returns to your config values. Your config is always the default for first-time visitors.

### Code highlighting

The theme styles Chroma's CSS classes using its own colors, so set:

```toml
[markup.highlight]
  noClasses = false
```

## Content

- Posts live in the sections listed in `mainSections` (e.g. `content/blog/`). They show date, word count and reading time, tags, and links to the neighboring posts.
- Other pages, like `content/about.md`, use the same layout without the post metadata.
- Lists are grouped by year and paginated (`[pagination] pagerSize`).
- Tags are at `/tags/`. RSS is at `/index.xml`.
- `description` in front matter is used for the list summary and meta description; otherwise the post summary is used.

## Accessibility and fallbacks

- Without JavaScript, the hero is a normal `<h1>` and nav links are normal text. With JavaScript, the text stays in the page for screen readers and search engines, and the canvases are hidden from assistive tech.
- Visitors with reduced motion set get a still wordmark: no build-up and no oscillation (they can still turn motion on in Print settings).
- Light and dark mode follow the visitor's system setting. In dark mode the inks blend as light on dark paper. Setting `data-theme="light"` or `"dark"` on `<html>` forces one.

## Upgrading from Hugo 0.85

If you're moving an existing site from an old Hugo version:

- Update Hugo itself (on Netlify, set `HUGO_VERSION` in `netlify.toml` under `[build.environment]`).
- `paginate = 10` becomes `[pagination]` with `pagerSize = 10`.
- `languageCode` is now `locale` (the old key still works with a deprecation warning).
- Any layout overrides in your own `layouts/` folder need the new structure: `_default/` files move up to `layouts/`, and `partials/` becomes `_partials/`.

Your content and URLs (`/blog/<slug>/`, `/tags/`, `/about/`, `/index.xml`) don't need to change.

## Customizing

- Colors, type and spacing: `assets/css/main.css`. Override by copying it to your site's `assets/css/main.css`.
- Ink sets and plate offsets: `PALETTES` and `PLATE` near the middle of `assets/js/harmonic.js`.
- Fonts load from Google Fonts (Archivo and IBM Plex Mono) in `layouts/_partials/head.html`. Self-host them there if you prefer.

## How it works

Each line of the wordmark is drawn to an offscreen canvas and its outlines are traced with marching squares. Every outline is resampled to 256 points, treated as complex numbers, and run through a discrete Fourier transform once. Each frame then sums only the chosen number of terms per ink, with small phase and amplitude oscillations on the higher ones, and the three inks are composited with multiply (or screen in dark mode) and a speckle that thins the ink.

## License

MIT
