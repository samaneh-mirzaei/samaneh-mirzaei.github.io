# Samaneh Mirzaei — Portfolio

A bilingual English/Persian developer portfolio built with HTML, CSS, and vanilla JavaScript ES modules. The site presents AI, web, game-development, and desktop projects in a Neo-Brutalist layout, with a fixed header, an interactive project spotlight, and a responsive project grid.

[Live website](https://samaneh-mirzaei.github.io) · [راهنمای فارسی](README.fa.md)

## Project categories

On tablet, category rows follow their own content height. On mobile, stacked categories and cards use natural heights, without desktop alignment spacers.

All work lives under Projects in six bordered category blocks: AI & machine learning, backend, frontend, games, desktop tools, and 3D & animation. Blocks sit side by side, share the tallest block’s height, and stack on mobile. AI and artwork use wider blocks. Category jump links provide navigation. Assign each software project a `category` in `js/data/projects.js`; labels and ordering live in `js/data/projectCategories.js`.

Software cards keep equal heights across categories. Flexible space before the skill tags and consistent role rows align the dividers. The layout remeasures after resizing, font loading, and language changes.

## Current features

- **PIM by default:** PIM is used on first visit and when storage is unavailable. A saved theme choice takes priority. The theme picker offers nine active themes; Oil and Late Night remain disabled palette references.
- **English and Persian:** Text, theme names, and accessibility labels switch together. Persian uses a mirrored RTL layout. Both languages use the locally hosted Vazirmatn font.
- **Fixed navigation:** The header stays visible while scrolling. Its measured height sets the page padding and anchor offsets so section headings remain visible. The mobile menu closes after selection, on Escape, or when clicking outside the header.
- **Interactive spotlight:** All seven projects appear in the spotlight, which starts with SafePlay. Browse with previous/next buttons, numbered choices, mouse hover, arrow keys, Home/End, scrolling, or horizontal touch swipes. There is no autoplay. Vertical scrolling can leave the preview at either end; zoom gestures remain available. The preview is tilted and straightens on hover or keyboard focus.
- **Compact, equal-height project cards:** Category blocks use a responsive three/two/one-column outer grid, with project grids inside each block. Every project card shares the tallest card's required height at the current layout, without a fixed oversized minimum or truncated descriptions. Image frames have consistent dimensions.
- **Categorized skills:** Existing skills are grouped into programming languages, frontend, backend, AI and machine learning, game development, and tools.
- **Certificates, resume, and contact:** The homepage includes certificates, a PDF resume download, GitHub, and an email contact section. Only configured social profiles are rendered.
- **Accessible interactions:** A skip link, visible keyboard focus, labeled controls, screen-reader announcements for spotlight changes, and reduced-motion support are included.
- **No framework or build step:** Serve the repository as static files. No package installation is required to run the site.

## 3D & animation

The 3D & animation block is nested inside Projects on both pages. It includes the mug-and-donut Blender render and the cat animation as a muted, looping, inline MP4. The animation plays while visible, pauses offscreen or in a hidden tab, and has a play/pause control. Reduced-motion preferences disable automatic playback. Both artwork cards include translated roles (Animator / 3D artist) below their skill tags and a matching divider. Their media frames are 180 px high and track the standard software image width without cropping. Artwork lives in `assets/art/`.

## Pages and projects

The homepage contains the introduction, About, Skills, Projects, Certificates & learning, Resume, and Contact sections. `details.html` provides a separate projects-and-learning view. Optional case studies can be enabled through `FEATURES.caseStudies` in `js/config.js`.

The shared project data currently includes:

1. Brain Tumor Classification
2. RAG Assistant for Science Articles
3. RAG Assistant for Khamenei.ir Content
4. Story-Driven & Pixel-Art Games
5. HTML, CSS & JavaScript Webpage Templates
6. SafePlay Companion — Windows/mpv desktop companion
7. Basalam Marketplace API — an independent, Basalam-inspired bootcamp backend using FastAPI and PostgreSQL

SafePlay uses its actual dashboard screenshot. Basalam uses a Swagger UI screenshot showing its API documentation. The earlier Basalam checkout diagram is also retained as an alternative asset. Existing project screenshots and certificates remain in `assets/`.

## Run locally

Clone the repository, then start any static HTTP server from its root:

```bash
git clone https://github.com/samaneh-mirzaei/samaneh-mirzaei.github.io.git
cd samaneh-mirzaei.github.io
python -m http.server 8000
```

Open [localhost:8000](http://localhost:8000). Alternatively, use `npx serve .` or your editor's Live Server extension.

The JavaScript uses ES modules, so opening `index.html` directly through `file://` may prevent the content from rendering.

## Customize

### Identity and contact

Edit `js/config.js` to change the English/Persian names, email address, social URLs, default language/theme, and optional feature flags. Leave an unused social URL empty to hide that profile. The email drives both contact links.

### Translations

Page text lives in `js/i18n/en.js` and `js/i18n/fa.js`. Use matching keys in both files. Missing Persian keys fall back to English. Translatable elements use `data-i18n` or `data-i18n-attr`.

### Add or update projects

1. Put the cover image in `assets/projects/`.
2. Add an entry to `js/data/projects.js` with a unique key, a `category` matching `js/data/projectCategories.js`, an `image` containing `src` and descriptive `alt`, a `tags` array, a `role` or translated `roleKey`, and optional `links`.
3. Add `<key>.title` and `<key>.desc` in both translation files, plus the role translation when using `roleKey`.

The project card grid and spotlight are generated from the same array, so the new project appears on both pages and in the spotlight automatically. Missing project links and empty technology lists are omitted rather than displaying editing placeholders. Other optional components may still use placeholders for missing content.

To change the initial spotlight selection, update the project key used in `js/components/ProjectSpotlight.js`.

### Skills, certificates, and navigation

- `js/data/skills.js`: the source list of skills.
- `js/data/skillGroups.js`: category membership, reusing the source skills list.
- `js/data/certificates.js`: certificate images and titles. Issuer/date/verification rendering is currently commented out in `CertificateCard.js`.
- `js/data/caseStudies.js`: optional case-study content.
- `js/data/navigation.js`: links for each page.
- `assets/profile.jpg` and `assets/resume.pdf`: profile image and downloadable resume.

### Themes and styling

Theme colors live in `css/base/themes.css`; the picker names and swatches live in `js/data/themes.js`. Keep their theme IDs aligned. Set `enabled: false` to hide a palette from the picker.

When changing the default theme, keep `DEFAULT_THEME` in `js/config.js`, the fallback in `js/theme-init.js`, and the `:root` palette in `css/base/themes.css` consistent. Saved visitor choices override the default.

Typography and shared tokens live in `css/base/tokens.css`. Component styles live in `css/components/`, with Persian adjustments in `css/rtl.css` and breakpoints in `css/responsive.css`. `css/style.css` imports these files in cascade order.

Preferences are saved under `portfolio-theme` and `portfolio-lang` in `localStorage`.

## Code structure

```text
index.html / details.html       Thin HTML shells and SEO metadata
js/main.js                      Renders the page and initializes behavior
js/pages/                       Page composition
js/sections/                    Hero, About, Skills, Projects, Learning, Resume, Contact
js/components/                  Header, cards, spotlight, tags, and shared markup
js/data/                        Projects, skills, categories, certificates, navigation, themes
js/features/navigation.js       Fixed-header measurement and mobile menu
js/features/spotlight.js        Project browsing, gestures, keyboard, and RTL behavior
js/features/language.js         Translation and document direction
js/features/theme.js            Theme picker and persistence
js/features/reveal.js           One-time scroll reveals
js/i18n/                        English/Persian text and translation helpers
css/                            Tokens, palettes, component styles, RTL, breakpoints
assets/                         Screenshots, certificates, font, profile image, resume
```

Each page renders its components into `#app`. The HTML keeps the title and description metadata, but page content requires JavaScript; a `noscript` notice is supplied.

## Publish

This repository targets GitHub Pages at [samaneh-mirzaei.github.io](https://samaneh-mirzaei.github.io). In repository **Settings → Pages**, select the appropriate publishing source; a branch-based setup uses `main` and the repository root. No build command is needed. For a personal fork, update the identity, assets, links, and repository/site URLs.

## Credits

The design polish used [unslop](https://heydamir.design/unslop) by Damir Sokolovsky ([@heydamir](https://x.com/heydamir)), licensed under CC BY 4.0. Vazirmatn is bundled locally for typography. Other project screenshots and certificate images retain their applicable rights. No repository-wide LICENSE file is currently included.
