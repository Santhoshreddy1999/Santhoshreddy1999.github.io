# Security Policy

## Supported version

Security fixes are applied to the latest code on `main`.

| Version | Supported |
| --- | --- |
| `main` / latest | Yes |
| Older snapshots | No |

## Reporting a vulnerability

Do not open a public issue for a suspected vulnerability or exposed secret.

Use the repository's private **Security → Report a vulnerability** flow:

<https://github.com/Santhoshreddy1999/Santhoshreddy1999.github.io/security/advisories/new>

Include:

- the affected file or deployed URL;
- the impact and realistic attack path;
- minimal reproduction steps;
- any suggested mitigation;
- whether the report involves a credential or personal data.

Avoid accessing data that is not yours, causing service disruption, or publishing details before a fix can be assessed.

## Security boundary

This portfolio is a static client application:

- it has no backend, account system, form submission, or session;
- it does not request GitHub API data at runtime;
- it stores only a `dark` or `light` theme value in `localStorage`;
- it must not contain credentials, private endpoints, or personal contact data;
- it does not render untrusted remote HTML.

The external flagship application has its own repository and security boundary. Report findings against that project in its repository rather than here.

## Maintainer response

Valid reports will be assessed, prioritized by impact and exploitability, and resolved through a reviewed change. No response-time commitment is claimed.
