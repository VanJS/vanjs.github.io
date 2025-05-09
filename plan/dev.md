# VanJS Development & CI Enhancement Plan

This plan outlines suggestions for local development practices and Continuous Integration (CI) improvements to enhance code quality, developer experience, and site reliability for the VanJS website.

## I. Local Development Environment Enhancements

1.  **Code Formatting with Prettier:**
    *   **Observation:** ESLint is configured (`next/core-web-vitals`), but a dedicated, opinionated formatter like Prettier is not explicitly integrated.
    *   **Suggestion:** Integrate Prettier for consistent code formatting across the project. This reduces cognitive load from style debates and makes diffs cleaner.
    *   **Action:**
        *   Install Prettier: `npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier` (or `yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier`).
        *   Create a Prettier configuration file (e.g., `.prettierrc.json` or `.prettier.config.js`) with your preferred settings (or use defaults).
        *   Update `.eslintrc.json` to extend `eslint-config-prettier` (disables ESLint rules that conflict with Prettier).
        *   Optionally, add `eslint-plugin-prettier` to run Prettier as an ESLint rule.
        *   Encourage use of Prettier on save via editor integrations (e.g., VS Code Prettier extension).

2.  **Linting Staged Files with Husky & lint-staged:**
    *   **Suggestion:** Automate linting and formatting on pre-commit to catch issues early and ensure consistent code style before it enters the codebase.
    *   **Action:**
        *   Install Husky and lint-staged: `npm install --save-dev husky lint-staged` (or `yarn add --dev husky lint-staged`).
        *   Set up Husky hooks (e.g., `npx husky install`, then `npx husky add .husky/pre-commit "npx lint-staged"`).
        *   Configure `lint-staged` in `package.json` to run ESLint (with `--fix`) and Prettier (`--write`) on staged files.
            ```json
            // package.json (example lint-staged config)
            "lint-staged": {
              "*.{js,jsx,ts,tsx}": [
                "eslint --fix",
                "prettier --write"
              ],
              "*.{json,md,css}": "prettier --write"
            }
            ```

3.  **Type Checking (If/When Migrating to TypeScript):**
    *   **Observation:** Project is currently JavaScript.
    *   **Suggestion (Future):** If migrating to TypeScript, ensure `tsc --noEmit` is run as part of local checks (and CI) to catch type errors.

4.  **Dependency Management & Updates:**
    *   **Suggestion:** Regularly check for outdated dependencies to benefit from security patches, bug fixes, and new features.
    *   **Action:**
        *   Use `npm outdated` or `yarn outdated`.
        *   Consider tools like `npm-check-updates` for easier updating.
        *   Update dependencies systematically and test thoroughly after updates.

5.  **Environment Variables:**
    *   **Observation:** Currently, no obvious use of environment variables that require local setup (like API keys).
    *   **Suggestion:** If the site ever needs API keys or configurable settings, use a `.env.local` file (gitignored) for local development, and manage production/preview variables through your hosting provider (e.g., Vercel, Netlify, GitHub Pages secrets for Actions).

## II. Testing Strategy

1.  **Component/Unit Tests:**
    *   **Observation:** No testing libraries currently in `package.json`.
    *   **Suggestion:** Introduce Jest and React Testing Library for testing individual components and utility functions.
    *   **Action:**
        *   Install: `npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom` (or Yarn equivalent).
        *   Configure Jest (Next.js has built-in Jest configuration support, or you can create `jest.config.js`).
        *   Write tests for critical UI components (`EventCard`, `Header`, `AccordionFAQ`, etc.) to ensure they render correctly and handle props/state as expected.

2.  **End-to-End (E2E) Tests:**
    *   **Suggestion:** For ensuring key user flows work (e.g., navigation, form submissions if any, accordion interaction), consider E2E tests.
    *   **Action:**
        *   Choose a framework: Playwright (recommended by Microsoft, good Next.js support) or Cypress.
        *   Install and configure.
        *   Write tests for critical user paths (e.g., navigating to sections, opening/closing FAQ, checking links).

3.  **Visual Regression Testing (Optional but Beneficial):**
    *   **Suggestion:** For projects where visual consistency is paramount, visual regression testing can catch unintended UI changes.
    *   **Tools:** Percy, Chromatic (often integrates with Storybook).

## III. Continuous Integration (CI) Enhancements

*   **Current CI:** A `.github/workflows` directory exists, but specific CI setup was not reviewed.
*   **Assumptions:** Likely uses GitHub Actions for build/deployment (common for Next.js on GitHub Pages/Vercel).

1.  **Linting & Formatting Check:**
    *   **Action:** Add a CI step to run ESLint and Prettier (check-only mode, e.g., `prettier --check .`) on every push and pull request. Fail the build if issues are found.
    *   **Goal:** Enforce code style and catch lint errors automatically.

2.  **Run Tests (Unit & E2E):**
    *   **Action:** Add CI steps to execute all unit tests and E2E tests on every push to the main branch and on pull requests.
    *   **Goal:** Prevent regressions and ensure new code doesn't break existing functionality.

3.  **Build Check:**
    *   **Action:** Ensure the `next build` (and `next export` if applicable for static export) command runs successfully in CI.
    *   **Goal:** Catch build errors before deployment.

4.  **Dependency Vulnerability Scanning:**
    *   **Action:** Integrate a tool like `npm audit --audit-level=moderate` or GitHub's Dependabot alerts/scanning into CI.
    *   **Goal:** Get notified about security vulnerabilities in dependencies.

5.  **Lighthouse CI (Optional but Recommended for Performance/Accessibility):**
    *   **Action:** Use Lighthouse CI (e.g., `@lhci/cli` with GitHub Actions) to run Lighthouse audits automatically on pull requests or after deployments to a staging/preview environment.
    *   **Goal:** Track performance, accessibility, SEO, and best practice scores over time and prevent regressions in these areas.
    *   Set performance budgets to fail builds if metrics drop below thresholds.

6.  **Deployment Strategy:**
    *   **Suggestion:** Ensure a clear deployment strategy:
        *   **Preview Deployments:** For every PR, automatically deploy to a preview environment (Vercel and Netlify do this by default for Next.js apps).
        *   **Production Deployment:** Triggered by merges to the main branch after all checks pass.

7.  **Bundle Size Monitoring:**
    *   **Suggestion:** Use tools like `@next/bundle-analyzer` (can be run locally or in CI) or other bundle size checkers to monitor JavaScript bundle sizes.
    *   **Goal:** Prevent accidental inclusion of large libraries or code that negatively impacts load performance.

## IV. Developer Experience (DX)

1.  **Storybook (For Component Development):**
    *   **Suggestion:** Consider using Storybook to develop UI components in isolation. This can improve development speed, testing, and visual documentation of components.
    *   **Action:** Install and configure Storybook for your Next.js project.

2.  **Clear README & Contribution Guidelines:**
    *   **Suggestion:** Enhance `README.md` with more project-specific setup instructions, contribution guidelines (if applicable for open source), and a brief overview of the project architecture.

By implementing these development practices and CI checks, the VanJS project can achieve higher code quality, fewer bugs, better performance, and a more reliable and maintainable website.
