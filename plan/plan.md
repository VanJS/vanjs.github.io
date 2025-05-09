# Website Improvement Plan for VanJS

This document outlines actionable steps to improve the VanJS website, based on a review of the codebase and live site functionality.

## I. Performance & Optimization

1.  **Manual Image Optimization (High Priority):**
    *   **Context:** `next.config.mjs` has `images: { unoptimized: true }`. This means Next.js image optimization is disabled.
    *   **Action:** Manually optimize all raster images (`.png`, `.jpg`) in the `public/` directory. Use tools like Squoosh, TinyPNG, or ImageOptim. Focus on:
        *   `public/hero.jpg` (Likely LCP element)
        *   `public/ducky.png`
        *   `public/JasonLaughing.png`
        *   `public/JasonNerd.png`
        *   `public/VanJS.png`
        *   Event sticker images (e.g., `public/beerjs.png`, `public/santa.png`)
    *   **Goal:** Reduce file sizes to improve LCP and overall load times.

2.  **SVG Optimization:**
    *   **Action:** Minify SVG files in `public/` (e.g., `tickets.svg`, `meetup.svg`, `linkedin.svg`, `discord.svg` if used by `bg-discord-image`) using a tool like SVGO.
    *   **Goal:** Reduce file sizes of vector assets.

3.  **Review LCP (Largest Contentful Paint):**
    *   **Context:** Mobile LCP was 2.5s, which is on the edge of "good".
    *   **Action:** After image optimization, re-test LCP. If `public/hero.jpg` is the LCP, ensure it's preloaded if possible or not deferred. Since it's a static export, server-side preloading hints are limited, but ensuring the image tag is high in the DOM and not blocked by CSS/JS can help.

## II. Accessibility (A11y)

1.  **Image Alt Text:**
    *   **`src/app/page.jsx`:**
        *   `hero.jpg`: Change `alt="Hero"` to be descriptive of the image content.
        *   `ducky.png`: Consider `alt="VanJS mascot duck"` for the first instance. For purely decorative uses (e.g., near "Discord" or "FAQs" headings if context is clear), `alt=""` might be acceptable if an A11y expert confirms.
    *   **`src/components/EventCard.jsx`:**
        *   Sticker Image: Replace hardcoded `alt="VanJS October 2024"` with dynamic alt text (e.g., `alt={\`Sticker for \${title}\`}`) or `alt=""` if purely decorative and event title provides context. Consider adding an `stickerAlt` field to event data.
    *   **`src/components/Footer.jsx`:**
        *   Social Icons (`tickets.svg`, `meetup.svg`, `linkedin.svg`): If the `title` attribute on the `Link` is considered sufficient, these could use `alt=""`. Otherwise, ensure current alt text is the best description.

2.  **Mobile Navigation (High Priority):**
    *   **`src/components/Header.jsx`:**
    *   **Action:** Implement a mobile-friendly navigation menu (e.g., hamburger menu) to provide access to all navigation links on smaller screens.

3.  **Link Attributes:**
    *   **Action:** Add `rel="noopener noreferrer"` to all `Link` components that use `target="_blank"`.
        *   `src/components/EventCard.jsx` (Attend/View Recap buttons)
        *   `src/components/Jokes.jsx` (Submit Your Joke button)
        *   `src/components/Header.jsx` (Attend button)
        *   `src/components/Footer.jsx` (Social links, if changed to `target="_blank"`)

4.  **Accordion CSS Reset:**
    *   **`src/components/ui/accordion/styles.css`:**
    *   **Action:** Re-evaluate the aggressive `all: unset;` on `button, h3`. Test for any negative impacts on focus indicators or default accessibility styling. Consider removing if Tailwind's preflight is sufficient.

5.  **Contrast Ratios:**
    *   **Action:** Use browser developer tools to check text contrast ratios, especially for:
        *   Text on `bg-[#FEB92F]` (VanJS yellow background).
        *   Text on `bg-muted`.
        *   Links with `className="text-black"` against their backgrounds in `src/app/page.jsx`.
        *   Paragraph text in `Jokes.jsx` with `bg-[#ffffff8c]` (semi-transparent white).

## III. Code & Component Structure

1.  **Styling Consistency & Simplification:**
    *   **`src/components/ui/accordion/styles.css`:**
        *   Fix `background-color: var(blue);` typo in `:hover` state.
        *   Verify definition of `--violet-11` or replace.
        *   Migrate simple styles (padding, font-size, etc.) to Tailwind utility classes in `index.jsx` to reduce custom CSS.
    *   **Accordion Animations:**
        *   Consolidate accordion animations. The animations in `tailwind.config.js` should be sufficient if using Shadcn/UI components correctly. Remove redundant keyframes from `src/components/ui/accordion/styles.css`.
    *   **`src/components/Header.jsx` & `src/components/Footer.jsx` (Logo Image Style):**
        *   Remove redundant inline `style={{ height: "64px" }}` on the logo `Image` component if `height={64}` prop is used. Use Tailwind for sizing or ensure `width`/`height` props reflect true aspect ratio.
    *   **`src/components/Footer.jsx` (Icon Image Styles):**
        *   Review inline `objectFit` and `borderRadius` styles on SVG icons. Use Tailwind classes if possible.
    *   **`src/components/Jokes.jsx` (Shadow Style):**
        *   Clarify/simplify `shadow-[0_0_10px_#00000033] shadow-white` on the paragraph.
    *   **`src/components/PastEvents.jsx` (Button Style):**
        *   Consider using the standard `Button` component from `@/components/ui/button` for the "Show More/Less" button for visual consistency.

2.  **Data Structure Enhancements (`src/data/events.js`):**
    *   **Action (Recommended):**
        *   Add an `isoDate` field (ISO 8601 format) to event objects for better machine readability (SEO, sorting).
        *   Structure `location` into an object (e.g., `{ name: "Venue", address: "Details", mapLink: "..." }`) for richer data and Schema.org.
    *   **Goal:** Improve data robustness for SEO (Schema.org) and future display needs.

3.  **Component Logic & Cleanup:**
    *   **`src/components/Jokes.jsx`:** Remove the empty `<a>` tag and the commented-out `<section>` tag.
    *   **`src/app/page.jsx`:** Remove empty comment ` {/* */}`.
    *   **`src/components/Header.jsx`:** Address the "Speakers" nav link which points to a non-existent section (remove or mark as upcoming).
    *   **`src/components/PastEvents.jsx` (Fade-in Animation):**
        *   If the `fade-in` effect is desired, define the CSS classes (`.fade-in`, `.show`) in global or component-specific CSS.

4.  **Dark Mode Strategy (`tailwind.config.js`):**
    *   **Action:** Decide if dark mode is a planned feature. If not, set `darkMode: false`. If yes, plan for implementation and testing.

## IV. Potential Future Enhancements

1.  **Add Testing:**
    *   **Action:** Introduce testing libraries (e.g., Jest, React Testing Library for components; Playwright/Cypress for E2E).
    *   **Goal:** Improve code quality, prevent regressions.

2.  **Code Formatting with Prettier:**
    *   **Action:** Integrate Prettier with ESLint for consistent code formatting.
    *   **Goal:** Improve code readability and maintainability.

3.  **Structured Data (Schema.org):**
    *   **Action:** Implement Schema.org markup for Events (using the enhanced `isoDate` and structured `location` from `events.js`) to improve SEO and search result appearance. This can be done by outputting a `<script type="application/ld+json">` in your page components.

4.  **FAQ Data Source:**
    *   **`src/components/ui/accordion/index.jsx`:** For more than a few FAQs, consider moving Q&A data to `src/data/faqs.js`.

5.  **Richer Event Details:**
    *   Consider adding speaker/talk details directly into the `events.js` data structure if you plan to display this on event cards or main listings.

## V. Content & UX

1.  **"Make Us LOL!" Section Clarity:**
    *   Clarify where/how featured jokes will be used.
    *   Provide submission confirmation feedback (even if just redirecting to Google Form's confirmation).
2.  **Event Listing Enhancements:**
    *   Add speaker names/talk titles to upcoming events when known.
    *   Ensure "View Recap" links for past events lead to content-rich pages.
    *   Provide full venue addresses or map links for event locations.
3.  **Footer Links:**
    *   **`src/components/Footer.jsx`**: Decide if social links (Meetup, LinkedIn) should open in a new tab. If so, implement with `target="_blank" rel="noopener noreferrer"`.

This plan provides a prioritized list of actions. Addressing items in "Performance & Optimization" and "Accessibility" (especially mobile navigation) should yield the most immediate benefits. 