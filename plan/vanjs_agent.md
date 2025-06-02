# VanJS AI Agent: Talk Proposal Assistant

This document outlines ideas for creating an AI-powered agent to assist VanJS organizers with the review, feedback, and selection process for talk proposals submitted as GitHub Issues.

## I. Agent Mission & Goals

*   **Primary Goal:** To reduce organizer workload, improve the quality and completeness of talk proposals, and help identify relevant and engaging topics for meetups.
*   **Key Functions:**
    1.  Automated review of new proposals for completeness based on defined criteria.
    2.  Interactive information gathering by commenting on GitHub Issues if details are missing.
    3.  Providing initial, objective feedback on proposal clarity and relevance.
    4.  Assisting organizers in identifying and prioritizing promising talk topics.
*   **Guiding Principle:** The agent assists human organizers, who always have the final say.

## II. Core Agent Capabilities & Features

**1. Proposal Intake & Completeness Check:**

*   **Trigger:** When a new issue with a `type:talk-proposal` (and perhaps `status:new`) label is created or updated.
*   **Action:**
    *   The agent parses the issue body against the fields defined in the GitHub Issue Template (Title, Abstract, Duration, Target Audience, etc.).
    *   **Completeness Verification:** Checks if all mandatory fields are present and seem to contain relevant information (e.g., duration isn't just "yes").
    *   **Automated Commenting for Missing Info:** If key information is missing or unclear, the agent posts a polite, helpful comment on the GitHub issue:
        *   *Example Comment:* "Hi @[proposer_github_handle], thanks for submitting '[Talk Title]'! To help us review your proposal effectively, could you please add/clarify the following:
            *   Estimated Duration (e.g., 20 mins, 40 mins)
            *   Target Audience (e.g., Beginner, Intermediate, All)
            You can refer to our submission guidelines here: [Link to Issue Template or Speaking Guidelines]. Thanks!"
        *   The agent could add a label like `status:needs-info`.

**2. Automated Initial Feedback & Analysis:**

*   **Trigger:** After a proposal is deemed complete (either initially or after the proposer updates it).
*   **Action:** The agent analyzes the proposal content and can provide feedback via a GitHub comment and/or by adding labels.
    *   **Clarity of Abstract:** Assess if the abstract clearly explains the topic and what attendees will learn.
        *   *Feedback Example (Comment/Internal Note):* "Abstract is clear and outlines key takeaways well." or "Abstract could be clearer on the specific problems solved or skills taught."
    *   **Relevance to VanJS:** Check if the topic aligns with JavaScript, front-end, open web, and the general interests of the VanJS community.
        *   *Label Examples:* `feedback:highly-relevant`, `feedback:moderately-relevant`, `feedback:off-topic-query`.
    *   **Actionable Title:** Is the title engaging, clear, and reflective of the content?
    *   **Keyword Extraction & Tagging:** Identifies key technologies, concepts, or keywords from the title and abstract.
        *   *Action:* Suggest adding relevant GitHub labels (e.g., `topic:react`, `topic:performance`, `topic:accessibility`) if not already present. The agent might even be empowered to add highly confident topic labels.

**3. Quality Enhancement Suggestions (Constructive Feedback):**

*   **Trigger:** As part of the feedback process.
*   **Action:** The agent, using LLM capabilities, could offer gentle, constructive suggestions to improve the proposal. This should be framed carefully.
    *   *Example (if abstract is vague):* "Consider elaborating on [specific part of abstract] by providing a concrete example or highlighting a key problem it solves for developers."
    *   *Example (if target audience is unclear for a complex topic):* "This seems like an advanced topic. Would it be helpful to specify prerequisites or suggest it's for experienced developers?"
    *   **Important:** Feedback should be supportive and aim to help the proposer, not to be overly critical or reject proposals outright (that's for humans).

## III. Assisting with Topic Selection for Meetups

This is where the agent acts as a tool for organizers, not a decider.

**1. Proposal Summarization & Digest:**

*   **Trigger:** On demand by an organizer (e.g., via a specific command/comment) or on a schedule (e.g., weekly digest of new/updated proposals).
*   **Action:** The agent provides a concise summary of active proposals (`status:new`, `status:needs-speaker`, `status:speaker-interested`, `status:under-review`).
    *   For each: Title, Proposer, 1-2 sentence summary of abstract, key tags, agent's initial assessment (clarity, relevance).

**2. Thematic Grouping & Trend Spotting:**

*   **Action:** Analyzes keywords and tags across all active proposals to identify clusters of similar topics.
    *   *Example Output for Organizers:* "We have multiple proposals related to 'State Management in React' and 'Web Performance Optimization'. Consider a themed meetup?"
    *   Could also highlight if many proposals are for advanced vs. beginner topics, helping balance meetup content.

**3. Identifying Gaps / Novelty:**

*   **Prerequisite:** A list/database of topics covered in recent (e.g., past 6-12 months) meetups.
*   **Action:** Compares new proposals against past topics to highlight:
    *   Novel topics not recently covered by VanJS.
    *   Topics that might be too similar to very recent talks, flagging for organizer review.

**4. Prioritization Assistance (Scoring/Ranking - with caveats):**

*   **Action:** The agent could provide a *suggested* prioritization or a set of scores based on configurable criteria:
    *   Completeness of information.
    *   Clarity of abstract (agent assessment).
    *   Relevance to VanJS (agent assessment).
    *   Speaker experience (if available and deemed appropriate to use).
    *   Novelty/Recency (compared to past talks).
    *   (Optional) Community interest signals, if such signals exist (e.g., GitHub issue reactions like 👍, ❤️).
*   **Output:** A dashboard or report for organizers with these scores/rankings, clearly stating they are AI-assisted suggestions.
*   **Human Decision:** Organizers use this information alongside their own judgment, community needs, and speaker availability to select talks.

## IV. Technical Implementation Outline

1.  **Core Engine:** A script (e.g., Python, Node.js) that orchestrates the logic.
2.  **LLM Integration:** Use a Generative AI API (e.g., Gemini) for parsing, feedback generation, summarization, and analysis. Requires careful prompt engineering for each task.
3.  **GitHub API Integration:** Use a GitHub client library (e.g., Octokit.js for Node, PyGithub for Python) to:
    *   Read issue data (titles, bodies, labels, comments).
    *   Post comments to issues.
    *   Add/remove labels.
    *   Requires a GitHub API token (ideally from a dedicated GitHub App for VanJS, or a PAT with appropriate permissions stored securely).
4.  **Triggering Mechanism:**
    *   **GitHub Actions:** The preferred method. Workflows triggered by `issues` (opened, edited), `issue_comment` (created), or `schedule` (cron).
5.  **State/Knowledge (Optional but useful for advanced features):**
    *   A simple database or even a structured file (JSON/YAML) in the repo to store past talk topics, speaker history, or configuration for the agent.
6.  **Configuration:** Allow organizers to configure agent behavior (e.g., feedback tone, criteria for prioritization, labels to watch).

## V. Workflow & Human Oversight

*   **Clear Agent Identity:** Agent comments and label changes should be clearly attributed (e.g., "VanJS Proposal Bot").
*   **Notification System:** Organizers should be notified of agent actions or when a proposal needs human attention (e.g., after agent feedback, proposer replies).
*   **Manual Override:** Organizers must always be able to override agent suggestions, remove labels, or correct agent comments.
*   **Iterative Development:** Start with simpler features (completeness check) and gradually add more sophisticated capabilities based on organizer feedback.

## VI. Benefits

*   **Efficiency:** Frees up organizer time from routine checks.
*   **Consistency:** Ensures all proposals get a baseline review against set criteria.
*   **Improved Proposal Quality:** Gentle nudges can help proposers submit better, more complete talks.
*   **Data-Driven Insights:** Helps organizers see trends, gaps, and popular topics within proposals.
*   **Enhanced Engagement:** Can make the proposal process more interactive for speakers.

## VII. Limitations & Ethical Considerations

*   **Bias in LLMs:** LLM responses can inherit biases. All generated feedback and analysis must be reviewed by humans, especially for fairness.
*   **Accuracy:** LLMs are not infallible; they can misunderstand context or make errors.
*   **Impersonality:** The process should not become overly automated or impersonal. Human touch remains vital for a community meetup.
*   **Scope Creep:** Start with a well-defined, limited scope and expand carefully.
*   **Cost:** LLM API usage will incur costs.

By carefully designing the agent's roles and ensuring strong human oversight, VanJS can significantly enhance its talk proposal and curation process.
