# navrudh.github.io — Personal Portfolio & Project Directory

A clean, minimalist editorial portfolio and hub for projects, field notes, and subpage deployments.

## Structure
- `/index.html`: Main hub listing projects, subpages, writing, bookshelf, and contact.
- `/style.css`: Minimalist editorial theme with dark/light mode toggle (persisted via `localStorage`).
- `/script.js`: Theme switching and interactions.
- `/<project-subpage>/`: Dedicated directories for subpage projects (e.g. `/market_data_backtest/`, `/music/`, etc.).
- `/notes/`: Technical field notes and architectural writeups.

## Subpage Deployment Convention
To add a new subpage:
1. Create a subfolder: `mkdir my-new-project`
2. Place its static assets or built app inside `my-new-project/index.html`
3. Add a card to the `projects-grid` in `index.html` linking to `/my-new-project/`
4. The page will be automatically live at `https://navrudh.github.io/my-new-project/`
