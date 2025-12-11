# Using Claude with Windly

We sometimes use Claude (or other LLMs) to speed up docs and test authoring. If you use an AI assistant while contributing, keep these guardrails in mind:

- Treat AI output as a draft. Verify Tailwind class ordering, grouping, and indentation manually against real examples.
- Keep prompts and relevant outputs in your PR description when they materially informed the change.
- Do not paste sensitive project data into prompts. Strip credentials, file paths outside this repo, and any private customer snippets.
- Run all local checks (`pnpm run check-types`, `pnpm run lint`, `pnpm run compile`, `pnpm test`) on AI-generated changes before requesting review.
- Prefer adding new cases to `examples/` instead of relying on AI-summarized behavior; concrete fixtures are easier to reason about.
