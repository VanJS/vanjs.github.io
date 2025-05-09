# VanJS Website: GitHub Issues Integration for Talk Proposals

This plan outlines a system for leveraging GitHub Issues as a backend to manage talk proposals and allow potential speakers to sign up via the VanJS website.

## I. Core Concept

The goal is to create a transparent, developer-friendly workflow where:
1.  Talk ideas and calls for speakers are managed as GitHub Issues.
2.  These issues are dynamically displayed on the VanJS website.
3.  Interested individuals can express their interest or "sign up" to speak on a topic via a form on the website.
4.  This interaction (optionally) updates the corresponding GitHub Issue.

## II. Workflow Details

**1. GitHub Issue Management (The "Backend")**

*   **Repository:** Use a designated GitHub repository (e.g., `VanJS/meetup` or a new `VanJS/talk-proposals`).
*   **Issue Template:** Implement a GitHub Issue Template to standardize proposal submissions. Key fields:
    *   `Title:` (Proposed Talk Title)
    *   `Speaker Name / GitHub Handle:` (e.g., @yourhandle)
    *   `Abstract/Summary:` (Brief overview of the talk)
    *   `Estimated Duration:` (e.g., 20 mins, 40 mins, Lightning Talk - 10 mins)
    *   `Target Audience Level:` (e.g., Beginner, Intermediate, Advanced, All)
    *   `Tags/Keywords:` (e.g., React, Performance, Accessibility, WebAssembly)
    *   `Notes for Organizers:` (Optional, internal notes)
*   **Labels for Status Management:** Utilize GitHub labels extensively:
    *   `type:talk-proposal` (To identify all talk proposals)
    *   `status:new` (Newly submitted proposal)
    *   `status:needs-speaker` (A topic VanJS wants, but needs someone to present)
    *   `status:speaker-interested` (Someone expressed interest via the website)
    *   `status:under-review` (Organizers are reviewing the proposal/speaker match)
    *   `status:accepted` (Proposal accepted)
    *   `status:declined` (Proposal declined)
    *   `status:scheduled` (Talk is scheduled for an event)
    *   `event:[event-id/date]` (e.g., `event:2024-03-20` - if scheduled)
    *   Topic-specific tags (e.g., `topic:react`, `topic:testing`, `topic:ai`)

**2. Displaying Talk Proposals on VanJS Website**

*   **Data Source:** GitHub API.
*   **Fetching:**
    *   During the Next.js build (`getStaticProps` or ISR for a `/talks` or `/speak` page), fetch issues from the designated repository.
    *   Filter issues by relevant labels (e.g., `type:talk-proposal` AND (`status:new` OR `status:needs-speaker` OR `status:speaker-interested`)).
    *   Requires a GitHub API token (PAT or GitHub App token) stored securely as an environment variable (e.g., `GITHUB_TOKEN`).
*   **Display:**
    *   List available talk topics/proposals.
    *   For each, show: Title, (partial) Abstract, relevant tags/labels (like topic and duration).
    *   If the issue has a `status:needs-speaker` or `status:new` (and is open for others to claim), display a prominent "Sign Up to Speak" or "I'm Interested!" button.

**3. Website Form for Speaker Sign-up**

*   **Trigger:** User clicks the "Sign Up to Speak" button next to a specific talk proposal.
*   **Form Fields:**
    *   Name
    *   Email Address
    *   GitHub Handle (Optional, but encouraged)
    *   A (potentially hidden) field carrying the GitHub Issue ID/Number they are interested in.
    *   Brief message (e.g., "Why you'd be great for this talk / your relevant experience").
*   **Form Submission Handling:**
    *   **Option A (Manual - Simplest Start):**
        *   The form uses a `mailto:` link that pre-fills an email to VanJS organizers with the talk details and speaker info.
        *   Organizers manually update the GitHub issue (assign speaker, change label to `status:speaker-interested` or `status:under-review`).
    *   **Option B (Third-Party Forms):**
        *   Submit to a service like Netlify Forms, Vercel Forms, Tally.so, or Google Forms.
        *   Organizers receive notifications and manually update the GitHub issue.
    *   **Option C (Automated GitHub Interaction - Advanced):**
        *   Form submits to a Next.js API Route (requires moving beyond pure static export for this interaction).
        *   The API route, using an authenticated GitHub client (GitHub App preferred):
            1.  Receives form data.
            2.  Comments on the specified GitHub Issue: e.g., "@speaker-handle has expressed interest in speaking on this topic via the VanJS website! Contact: [email]. Message: [message]."
            3.  Changes the issue label (e.g., to `status:speaker-interested`).
            4.  (Optional) Assigns the issue to the speaker if their GitHub handle was provided and validated.
            5.  Sends a notification to organizers (e.g., email or Discord message).

## III. Technical Implementation Steps (High-Level)

1.  **Setup GitHub Repository & Issue Process:**
    *   Define issue template.
    *   Define label set.
    *   Train organizers on the new workflow.
2.  **Develop GitHub API Fetching Logic:**
    *   Securely store GitHub token (`GITHUB_TOKEN` environment variable).
    *   Write script/function (e.g., in `lib/github.js`) to fetch and parse issues using `node-fetch` or a GitHub client library (like Octokit).
3.  **Create Talk Proposal Display Page/Section in Next.js:**
    *   Use `getStaticProps` or ISR to fetch data via the logic from step 2.
    *   Design UI components to display proposals and the "Sign Up" button.
4.  **Implement Speaker Sign-Up Form:**
    *   Choose submission handling option (A, B, or C).
    *   Build the form component.
    *   If Option C, develop the Next.js API Route with GitHub API write capabilities.
5.  **Styling & UX:**
    *   Ensure the process is clear and user-friendly for potential speakers.
    *   Provide clear feedback on form submission.

## IV. Benefits

*   **Transparency:** Call for papers and available topics are public.
*   **Developer-Friendly:** Uses a platform (GitHub) familiar to most developers.
*   **Reduced Organizer Overhead (especially with Option C):** Automates parts of the speaker interest tracking.
*   **Dynamic Content:** Website can showcase active calls for speakers.
*   **Single Source of Truth:** GitHub issues remain the canonical source for talk proposal status.

## V. Considerations & Future Enhancements

*   **Static Site Limitations:** Full automation (Option C) requires server-side logic, impacting the pure `output: "export"` model. Consider ISR for the talk list page if it needs to be more frequently updated than full rebuilds allow.
*   **GitHub API Rate Limits:** Cache API responses during build or use conditional requests (ETags) if fetching frequently.
*   **User Authentication (for speakers):** Not strictly necessary for initial sign-up, but a more advanced version could allow speakers to log in with GitHub to claim/manage their proposals directly (much more complex).
*   **Filtering/Sorting:** Allow users to filter displayed talk proposals by tags on the website.

This integration offers a robust way to manage talk proposals and engage the community in shaping the content of VanJS meetups.
