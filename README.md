# General Information

To test the project:

- Clone the repository
- Install dependencies: `npm i`
- Run in development mode locally: `npm run dev`
- Deploy to GitHub Pages: `npm run deploy`

# Troubleshooting

- In `vite.config.ts`, review the `base` configuration. It must point to your repository folder name. For example: `base: '/your-repository-name/'`
- Deployment is automated using the `gh-pages` dependency.

# Click analytics

Clicks and page views are reported to the VanJS admin app and charted at
[admin.vanjs.com/analytics](https://admin.vanjs.com/analytics). There is no
third-party analytics service, no cookie, and no personal data: the only
identifier is a random id held in `sessionStorage` that dies with the tab,
and neither IP nor user-agent is sent.

- `src/lib/analytics.ts` installs one delegated click listener at startup.
- An element opts in by carrying `data-track`, plus optional
  `data-track-section` and `data-track-label`:

  ```jsx
  <a href="https://discord.gg/..."
     data-track="footer.social.discord"
     data-track-section="footer"
     data-track-label="Discord">
  ```

  Clicks on anything inside the element count too, so an icon wrapped in a
  tagged link needs no attributes of its own. `data-track-label` is optional
  — the label falls back to `aria-label`, a nested image's `alt`, then the
  element's text.

Nothing is sent in `npm run dev`, or when the browser sends Do Not Track.
To test against a locally running admin app, set `VITE_ANALYTICS_ENDPOINT`
(e.g. `http://localhost:3000/api/track`) in a `.env.local` file; production
builds default to `https://admin.vanjs.com/api/track`.
