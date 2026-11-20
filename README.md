# Website Under Maintenance

A responsive maintenance page with an original inline SVG construction illustration. It uses plain HTML and CSS, with no external image assets or build step.

## Customize

- Update the maintenance message and page title in `index.html`.
- Change the notification email in the `mailto:` link.
- Adjust the page colors and layout in `styles.css`.

## Run locally

Open `index.html` in a browser, or start a local server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

For production maintenance mode, configure the web server to return HTTP 503 responses while this page is displayed.
