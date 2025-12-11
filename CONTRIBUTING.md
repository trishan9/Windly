# Contributing to Windly

Thanks for helping improve Windly. This project is a VS Code formatter for large Tailwind class lists; keeping changes predictable and testable makes it easier for everyone to ship.

## Getting started

- Use Node.js 20+ and pnpm (repo scripts assume pnpm).
- Install dependencies: `pnpm install`
- Run checks before sending a PR: `pnpm run check-types`, `pnpm run lint`, and `pnpm run compile`
- For quick feedback during development, run `pnpm run watch` and start the VS Code Extension Host (`F5` in VS Code).
- Integration tests use the VS Code runner: `pnpm test`

## Pull request guidelines

- Keep diffs focused: prefer smaller PRs that solve one problem.
- Add or update examples in `examples/` when you change formatting rules so the behavior is easy to verify.
- Follow existing code style and lint rules; avoid noisy formatting-only changes in unrelated files.
- Document user-visible behavior changes in `README.md` or `CHANGELOG.md` as appropriate.
- If your change adds a new dependency, include a short rationale in the PR description.

## Reporting issues

- Include the language/framework, a minimal code sample, and the unexpected Windly output.
- If formatting a particular Tailwind utility breaks, paste both the input and the produced output.
- Security/privacy issues: please report privately.
