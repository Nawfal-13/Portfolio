# Personal Portfolio Website — Nawfal Ahmed Qadri

**CSC-240 Final Project — Track 1: Static Website (HTML/CSS/JS)**
Union College, Fall 2026

A fully responsive personal portfolio website built from scratch with
semantic HTML, modern CSS, and vanilla JavaScript — no frameworks or
build tools required.

🔗 **Live site:** https://nawfal-13.github.io/portfolio/

---

## Features

- **Responsive design** — adapts from desktop to phone using CSS Grid,
  Flexbox, and a media query; mobile navigation collapses into a
  hamburger menu.
- **Dark / light mode** — one-click theme toggle, implemented with CSS
  custom properties and remembered across visits via `localStorage`.
- **Typing animation** — the hero headline cycles through phrases
  character by character using a self-scheduling `setTimeout` loop.
- **Scroll-reveal animations** — sections fade in as they enter the
  viewport, powered by the `IntersectionObserver` API.

## Folder Structure

```
CSC240 Final Project/
├── index.html        # The single page: all content and structure
├── css/
│   └── style.css     # All styling: theme variables, layout, media queries
├── js/
│   └── script.js     # All interactivity: theme, menu, typing, reveal
└── README.md         # This file
```

## How to Run Locally

No installation, server, or dependencies needed — it's a static site.

1. Download or clone this repository:
   ```
   git clone https://github.com/Nawfal-13/portfolio.git
   ```
2. Open `index.html` in any modern browser (double-click it, or in
   VS Code right-click → "Open with Live Server" if you have that
   extension).

That's it.

## How It Was Deployed (GitHub Pages)

1. Pushed this folder to a public GitHub repository.
2. On GitHub: **Settings → Pages → Source: Deploy from a branch**,
   branch `main`, folder `/ (root)`.
3. GitHub serves `index.html` at `https://<username>.github.io/<repo>/`.

## Tech Stack

| Layer     | Choice               | Why                                              |
|-----------|----------------------|--------------------------------------------------|
| Structure | HTML5 (semantic tags)| Accessibility + clear document outline           |
| Styling   | Plain CSS3           | Full control, no framework overhead to learn/load|
| Behavior  | Vanilla JavaScript   | Small site; a framework would add complexity     |
| Fonts     | Google Fonts         | Space Grotesk (headings) + Inter (body)          |
| Hosting   | GitHub Pages         | Free, reliable, integrates with version control  |

## Author

**Nawfal Ahmed Qadri** — Computer Science & Math, Union College
GitHub: [@Nawfal-13](https://github.com/Nawfal-13)
