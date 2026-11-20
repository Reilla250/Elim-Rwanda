# Website Under Maintenance

A responsive maintenance page inspired by a construction notice. It uses plain HTML and CSS, with no build step. The construction artwork is stored locally as `construction-background.avif`.

## Customize

- Update the maintenance message and page title in `index.html`.
- Change the notification email in the `mailto:` link.
- Adjust the yellow background and typography variables at the top of `styles.css`.

## Run locally

Open `index.html` in a browser, or start a local server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

For production maintenance mode, configure the web server to return HTTP 503 responses while this page is displayed.
