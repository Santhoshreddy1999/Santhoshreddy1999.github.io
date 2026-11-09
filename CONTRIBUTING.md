# Contributing

Contributions should preserve the portfolio's central contract: every claim must remain factual, inspectable, and clearly status-labeled.

## Before opening a change

1. Create or reference an issue with acceptance criteria.
2. Use a focused branch such as `feat/*`, `fix/*`, `docs/*`, or `chore/*`.
3. Keep unrelated formatting or dependency changes out of the branch.
4. Never add private contact data, credentials, tokens, client names, or unsupported employment claims.

## Content rules

- Use **Released** only for public source with a tagged release.
- Use **Verified** only when a linked artifact supports the claim.
- Use **Existing knowledge asset** for the knowledge vault.
- Use **Planned** for roadmap intent and do not attach a repository URL.
- Do not infer performance, scale, users, employers, years of experience, or production deployment.
- Quantitative claims must link to public evidence.

The reusable content model is in `src/data/portfolio.ts`. Update its invariant tests with any legitimate status change.

## Development

Use Node.js 24 and npm 11 or newer.

```bash
npm install
npm run dev
```

Before opening a pull request:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Design and accessibility

- Keep controls keyboard-operable and visibly focused.
- Use semantic HTML before adding ARIA.
- Check dark and light themes.
- Check wide desktop, tablet, and narrow mobile layouts.
- Respect `prefers-reduced-motion`.
- Do not introduce a remote font, heavyweight UI framework, or runtime API dependency without a documented reason.
- Preserve legible planned-status treatment and avoid horizontal page overflow.

## Pull requests

Include:

- the problem and scope;
- screenshots for visible changes;
- factual claims added or changed, with evidence links;
- commands run and their exact outcomes;
- accessibility, security, and deployment impact;
- a clear note when no deployment is intended.

Use Conventional Commit wording where practical. A maintainer review and passing checks are required before merge.
