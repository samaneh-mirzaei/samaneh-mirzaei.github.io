# Personal Portfolio Website

A modern, responsive, bilingual (English / Persian) personal portfolio built with HTML, CSS, and vanilla JavaScript. Originally created for my own introduction page, this project is also available for anyone who wants to create and customize their own portfolio.

**Make it yours!** Change the colors, content, profile picture, social links, resume, projects, and styling to create a website that reflects your own personality.

🌐 **Live Demo:** [samaneh-mirzaei.github.io](https://samaneh-mirzaei.github.io)

## Features

- **Interactive theme switcher:** Choose from 8 available color themes, each with its own palette and visual identity.
- **10 curated color palettes:** Includes PIM, Halloween, Oil, Twilight, Ice Cream, Late Night, Bitter Sweet, Mold, Watermelon, and Night Sky. Oil and Late Night are currently available as palette references but are not enabled in the theme picker.
- **English / Persian language switch:** One click switches all text, theme names, and accessibility labels, and flips the layout to right-to-left for Persian.
- **Persistent preferences:** Your selected theme and language are saved in `localStorage` and restored on your next visit, before the page first paints.
- **Responsive design:** Adapts to desktop, tablet, and mobile screens.
- **Personal introduction:** Hero section with a profile picture, introduction, and social links.
- **About section:** Space for background, interests, skills, and goals.
- **Details page:** A separate page for projects and certificates, with optional case studies. Missing information is shown as dashed placeholders until you fill it in.
- **Resume download:** A dedicated section linking to a PDF resume.
- **Accessible interactions:** Keyboard focus indicators, a skip-to-content link, and reduced-motion support.
- **Component-based code:** Header, footer, cards, tags, and sections are small reusable JavaScript components, and all content lives in data files.
- **No frameworks or build step:** Built with HTML, CSS, and vanilla JavaScript (ES modules).

## Built With

- HTML5
- CSS3 — custom properties and responsive layouts
- Vanilla JavaScript (ES modules)
- Local Storage API
- SVG icons

## Getting Started

### 1. Get your own copy

Fork this repository on GitHub, or clone it:

```bash
git clone https://github.com/samaneh-mirzaei/samaneh-mirzaei.github.io.git
```

### 2. Open the project

Open the folder in your preferred code editor, such as VS Code, and run it with a local development server. The JavaScript uses ES modules, which browsers block when a page is opened directly from disk (`file://`), so double-clicking `index.html` will show a blank page.

Any of these work:

```bash
npx serve .                  # Node
python3 -m http.server       # Python
```

or use the **Live Server** extension in VS Code.

### 3. Customize your portfolio

**Personal information — `js/config.js`**

Update your name (English and Persian) and social links:

```javascript
export const CONFIG = {
  name: "Your Name",
  nameFa: "نام شما",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername",
  },
};
```

The name and social URLs are shared across both pages, so you don't need to update every link individually. If you don't need Persian, you can ignore `nameFa`, `js/i18n/fa.js`, and the language switch.

**Page text — `js/i18n/en.js` and `js/i18n/fa.js`**

All text on the site lives in these two files, using the same keys. Replace the introduction, About section, interests, goals, resume text, and project descriptions in `en.js` with your own. Translate the same keys in `fa.js`; any key missing from `fa.js` falls back to English.

**Skills, projects, and certificates — `js/data/`**

| File              | What it controls                                                        |
| ----------------- | ----------------------------------------------------------------------- |
| `skills.js`       | The skill tags in the About section                                     |
| `projects.js`     | Project cards: image, tags, role, links                                 |
| `certificates.js` | Certificate cards: image, issuer, date, verification link               |
| `caseStudies.js`  | Optional case studies (turn on with `FEATURES.caseStudies` in `js/config.js`) |
| `navigation.js`   | Header links for each page                                              |
| `themes.js`       | Theme picker entries                                                    |

To add a project, add an entry to `projects.js` and its `d.pN.title` / `d.pN.desc` text to `en.js` (and `fa.js`). Leave `role` and `links` as `null` to show placeholders, or fill them in to replace the placeholders.

**Profile picture, resume, and images**

Replace these files with your own:

- `assets/profile.jpg` — your profile picture.
- `assets/resume.pdf` — your resume.
- `assets/projects/` and `assets/certificates/` — thumbnails used by the details page.

Keep the filenames the same, or update the corresponding paths in `js/sections/Hero.js`, `js/sections/Resume.js`, and the files in `js/data/`.

**Colors and styling — `css/`**

Edit the CSS custom properties under the active PIM theme in `css/base/themes.css` to change the website's background, text, surfaces, accents, and other colors. Typography, radius, and max width are in `css/base/tokens.css`. Each component has its own stylesheet in `css/components/`.

### 4. Customize the themes

The theme definitions are split between `css/base/themes.css` and `js/data/themes.js`.

To add or modify a theme:

1. Define its semantic color variables in `css/base/themes.css` using a matching `data-theme` identifier.
2. Add an entry to the `THEMES` array in `js/data/themes.js`, including its ID, English name, Persian name (`nameFa`), and palette colors.
3. Use the same ID in both files.
4. Test text contrast and check the theme across the page.

The theme picker generates its color swatches from the JavaScript palette configuration. Theme selection is saved automatically using `localStorage`.

To disable a theme, set `enabled: false` on its entry in `js/data/themes.js`. Keep the CSS palette definitions if you want to preserve them as references. This is how Oil and Late Night are currently hidden.

### 5. Publish your own website

You can adapt this project for your own GitHub Pages site.

1. Create a repository named `yourusername.github.io` under your GitHub account.
2. Upload your customized website files.
3. Open **Settings → Pages**.
4. Select your deployment branch and the repository root.
5. Wait for GitHub Pages to publish your website.

Your site will be available at `https://yourusername.github.io`.

## Project Structure

```text
.
├── index.html              # Home page shell (<head> + empty #app)
├── details.html            # Projects & learning page shell
├── css/
│   ├── style.css           # Imports everything below, in cascade order
│   ├── base/               # fonts, palettes, tokens, themes, reset
│   ├── components/         # one stylesheet per component
│   ├── rtl.css             # Persian typography
│   └── responsive.css      # Breakpoints (last so they win)
├── js/
│   ├── main.js             # Entry: renders the page, starts features
│   ├── theme-init.js       # Applies saved theme/language before first paint
│   ├── config.js           # Name, social links, feature flags
│   ├── data/               # Content: projects, certificates, skills, themes, ...
│   ├── i18n/               # en.js, fa.js, and translation helpers
│   ├── components/         # Reusable pieces: Header, Footer, Card, Tags, ...
│   ├── sections/           # Page sections: Hero, About, Projects, ...
│   ├── pages/              # Which sections make up each page
│   ├── features/           # Behaviour: theme, language, scroll reveal
│   └── utils/              # HTML escaping, safe localStorage
└── assets/
    ├── profile.jpg
    ├── resume.pdf
    ├── fonts/              # Vazirmatn (Persian)
    ├── projects/
    └── certificates/
```

## How It Works

Each HTML page is a thin shell: `<body data-page="home">` and an empty `<div id="app">`. `js/main.js` looks up the page, renders its sections from components into `#app`, then starts the theme, language, and scroll-reveal features. Components are plain functions that return HTML strings, and every translatable element is tagged with a `data-i18n` key that the language switch swaps between `en.js` and `fa.js`.

Because the content is rendered by JavaScript, the page body is empty for visitors or crawlers without JavaScript. The title and description stay in the HTML.

## Use and Customization

You're welcome to use this project as a starting point for your own personal portfolio. Fork it, modify it, experiment with the palettes, change the layout, and add your own features.

If you share your customized version publicly, a mention or link back to this repository would be appreciated, but the applicable license determines the permissions and conditions for reuse.

## License

See the repository's `LICENSE` file for the terms of use. If no license file is present, reuse and redistribution are not automatically granted by this README.

---

Built with HTML, CSS, JavaScript, and a little creativity.