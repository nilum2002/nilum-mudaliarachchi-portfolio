# Nilum Mudaliarachchi - Portfolio

Personal academic and research portfolio logbook showcasing projects, publications, and writings in Robotics, Embedded Systems, Machine Learning, and Computer Vision.

Live Website: https://mudali.page

## Overview

This portfolio is built using Vanilla web technologies without third-party frameworks or build steps.

- **HTML5 & CSS3**: Custom CSS custom properties, responsive grid layout, light/dark mode support.
- **Vanilla JavaScript**: Modular component architecture, client-side hash router, and dynamic Medium RSS feed integration.

## Project Structure

```text
portfolio/
├── index.html            # Main HTML entry point
├── assets/               # Profile image and media assets
├── css/                  # Modular design system and stylesheets
│   ├── tokens.css        # Design tokens and theme color variables
│   ├── layout.css        # Shell layout and panel containers
│   ├── sidebar.css       # Navigation sidebar and profile styles
│   ├── projects.css      # Project cards layout
│   ├── about.css         # Bio and experience section styles
│   └── blogs.css         # Medium article feed layout
└── js/
    ├── app.js            # Main application bootstrap
    ├── data/             # Content data stores
    │   ├── profile.js    # Bio, contact, and social links
    │   ├── projects.js   # Project entries and tech stacks
    │   ├── research.js   # Research papers and thesis entries
    │   ├── blogs.js      # Medium RSS feed integration
    │   └── achievements.js
    └── components/       # UI rendering modules
        ├── sidebar.js    # Navigation sidebar component
        ├── router.js     # Client-side hash routing
        ├── theme.js      # Light/Dark theme manager
        └── icons.js      # SVG icon dictionary
```
