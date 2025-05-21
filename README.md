# Taige's Blog - Immersive Design Prototype

A personal blog with a modern, immersive design approach, featuring fluid layouts, glass morphism, and content that blends seamlessly with the background.

## Project Overview

This repository contains design prototypes and implementation files for Taige's Blog, a personal platform for sharing tech discoveries, creative experiments, and photography. The design focuses on creating an immersive experience where content blends with the background without clear boundaries.

## Design Approach

The immersive design approach used in this project is characterized by:

- **Fluid Backgrounds**: Gradient and blur elements create depth and visual interest
- **Glass Morphism**: Semi-transparent elements with backdrop filters for a modern, layered look
- **Reduced Boundaries**: Content that flows naturally without rigid containers
- **Gradient Typography**: Text with gradient fills to enhance visual appeal
- **Subtle Animations**: Smooth transitions and hover effects for an engaging experience

## Design Files

The `/design` folder contains all prototype and design documentation:

- **Immersive Homepage**: [`design/immersive-home.html`](design/immersive-home.html)
- **Original Prototypes**:
  - Homepage: [`design/prototype.html`](design/prototype.html)
  - Blog Page: [`design/blog.html`](design/blog.html)
  - Gallery Page: [`design/gallery.html`](design/gallery.html)
  - About Page: [`design/about.html`](design/about.html)
- **CSS Files**:
  - Immersive Styles: [`design/immersive-styles.css`](design/immersive-styles.css)
  - Original Styles: [`design/styles.css`](design/styles.css)
- **Documentation**:
  - Requirements: [`design/requirements.md`](design/requirements.md)
  - Design System: [`design/design-system.md`](design/design-system.md)
  - Immersive Design Notes: [`design/immersive-design-readme.md`](design/immersive-design-readme.md)
- **Index Page**: [`design/index.html`](design/index.html) - Access all prototypes from here

## Features

The immersive design prototype includes:

- Responsive layout that adapts to different screen sizes
- Light/dark mode toggle
- Glass card elements with subtle backdrop blur effects
- Animated UI elements with smooth transitions
- Gradient text for headings and important elements
- Background blur elements that create depth

## Getting Started

1. Clone the repository
2. Open `design/index.html` in your browser
3. Navigate to the different prototype pages from the index

## Implementation Notes

The immersive design implementation uses:

- CSS custom properties for consistent theming
- Flexible grid layouts for responsive design
- CSS backdrop-filter for glass effects
- Modern CSS features like gradient text and fluid spacing
- Subtle animations and transitions for enhanced user experience

## Technologies Used

- HTML5
- CSS3 (with modern features like CSS variables, flexbox, grid)
- JavaScript (minimal, for theme toggle and interactions)
- Feather Icons
- Google Fonts (Inter, JetBrains Mono)

## Inspiration

The design was inspired by:
- The Astro blog template (https://astro-blog-template.netlify.app/)
- Modern glass morphism UI trends
- Fluid web experiences that focus on content over rigid containers

```sh
pnpm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
