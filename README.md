# Personal Portfolio Website

A modern, responsive personal portfolio built with HTML, CSS, and vanilla JavaScript. Originally created for my own introduction page, this project is also available for anyone who wants to create and customize their own portfolio.

**Make it yours!** Change the colors, content, profile picture, social links, resume, and styling to create a website that reflects your own personality.

🌐 **Live Demo:** [samaneh-mirzaei.github.io](https://samaneh-mirzaei.github.io)

## Features

- **Interactive theme switcher:** Choose from 8 available color themes, each with its own palette and visual identity.
- **10 curated color palettes:** Includes PIM, Halloween, Oil, Twilight, Ice Cream, Late Night, Bitter Sweet, Mold, Watermelon, and Night Sky. Oil and Late Night are currently available as palette references but are not enabled in the theme picker.
- **Persistent theme selection:** Your selected theme is saved in `localStorage` and restored on your next visit.
- **Responsive design:** Adapts to desktop, tablet, and mobile screens.
- **Personal introduction:** Hero section with a profile picture, introduction, and social links.
- **About section:** Space for background, interests, skills, and goals.
- **Resume download:** A dedicated section linking to a PDF resume.
- **Accessible interactions:** Keyboard focus indicators, a skip-to-content link, and reduced-motion support.
- **No frameworks required:** Built with HTML, CSS, and vanilla JavaScript.

## Built With

- HTML5
- CSS3 — custom properties and responsive layouts
- Vanilla JavaScript
- Local Storage API
- SVG icons

## Getting Started

### 1. Get your own copy

Fork this repository on GitHub, or clone it:

```bash
git clone https://github.com/samaneh-mirzaei/samaneh-mirzaei.github.io.git
```

### 2. Open the project

Open the folder in your preferred code editor, such as VS Code. Run `index.html` using a local development server, such as the Live Server extension.

### 3. Customize your portfolio

**Personal information — `js/main.js`**

Find the `CONFIG` object and update your name and social links:

```javascript
const CONFIG = {
  name: "Your Name",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername",
  },
};
```

The name and social URLs are shared across the page, so you don't need to update every link individually.

**Page content — `index.html`**

Replace the placeholder introduction, About section, interests, skills, goals, and resume text with your own information.

**Profile picture and resume**

Replace these files with your own:

- `assets/profile.jpg` — your profile picture.
- `assets/resume.pdf` — your resume.

Keep the filenames the same, or update the corresponding paths in `index.html`.

**Colors and styling — `css/style.css`**

Edit the CSS custom properties under the active PIM theme to change the website's background, text, surfaces, accents, and other colors. You can also customize typography, spacing, borders, and layout.

### 4. Customize the themes

The theme definitions are split between `css/style.css` and `js/main.js`.

To add or modify a theme:

1. Define its semantic color variables in `css/style.css` using a matching `data-theme` identifier.
2. Add an entry to the `THEMES` array in `js/main.js`, including its ID, display name, and palette colors.
3. Use the same ID in both files.
4. Test text contrast and check the theme across the page.

The theme picker generates its color swatches from the JavaScript palette configuration. Theme selection is saved automatically using `localStorage`.

To disable a theme, remove its entry from the `THEMES` array. Keep the CSS palette definitions if you want to preserve them as references.

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
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    ├── profile.jpg
    └── resume.pdf
```

## Use and Customization

You're welcome to use this project as a starting point for your own personal portfolio. Fork it, modify it, experiment with the palettes, change the layout, and add your own features.

If you share your customized version publicly, a mention or link back to this repository would be appreciated, but the applicable license determines the permissions and conditions for reuse.

## License

See the repository's `LICENSE` file for the terms of use. If no license file is present, reuse and redistribution are not automatically granted by this README.

---

Built with HTML, CSS, JavaScript, and a little creativity.