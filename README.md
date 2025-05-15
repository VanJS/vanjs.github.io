# General Information

To test the project:

- Clone the repository
- Install dependencies: `npm i`
- Run in development mode locally: `npm run dev`
- Deploy to GitHub Pages: `npm run deploy`

# Troubleshooting

- In `vite.config.ts`, review the `base` configuration. It must point to your repository folder name. For example: `base: '/your-repository-name/'`
- Deployment is automated using the `gh-pages` dependency.