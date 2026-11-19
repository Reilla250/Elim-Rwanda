# Maintenance Page

A simple, generic "under maintenance" page. Plain HTML, CSS and JavaScript, with no build step.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page content (name, message, times, progress, contact) |
| `styles.css` | Colors, fonts and layout. Light and dark themes are automatic |
| `script.js` | "Copy address" button |

## Customize

Open `index.html` and change:

- `Your Organization` and the `O` logo mark
- The start time, expected return time and date
- The three progress items and their status (`done`, `live` or no class for waiting)
- `contact@example.org`

Colors and fonts are variables at the top of `styles.css`.

## Run locally

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Push to GitHub

```bash
cd maintenance-page
git init
git add .
git commit -m "Add maintenance page"
git branch -M main
git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git
git push -u origin main
```

## Publish with GitHub Pages

1. In the repository, open Settings, then Pages.
2. Under Source, choose "Deploy from a branch", then branch `main` and folder `/ (root)`.
3. Save. The page will be live at `https://YOUR-USER.github.io/YOUR-REPO/` after a minute or two.

To show this page on your own domain while your real site is down, point the domain to your host and serve `index.html` for every request. Servers should send HTTP status 503 during maintenance so search engines know it is temporary.
