# Celvion Scout Website

Official product, privacy, terms, licenses, and support pages for Celvion Scout.

## Pages

- `/` — product overview
- `/privacy` — privacy policy
- `/support` — troubleshooting and support contact
- `/licenses` — application copyright, third-party software license, and data-source notices
- `/terms` — terms of use and Apple Standard EULA reference

The site supports English and Simplified Chinese. The language preference is
stored only in the visitor's browser.

## Local development

Requires Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
pnpm lint
pnpm test
```

`pnpm test` builds the Cloudflare/Sites version and validates the server-rendered
HTML for all public routes.

## GitHub Pages

Publish this `Website` directory as the root of its own GitHub repository (the
planned repository name is `celvion-scout`). The workflow lives inside this
directory for that reason; it is not intended to run from the parent app
workspace.

The project is also configured for static export:

```bash
NEXT_PUBLIC_SITE_URL="https://guogxy.github.io/<repository>/" \
NEXT_PUBLIC_BASE_PATH="/<repository>" \
pnpm build:github
```

Static output is written to `out/`. Publish the contents of that directory to
GitHub Pages. The included Pages workflow does this automatically after a push
to `main`; it infers the repository subpath from `GITHUB_REPOSITORY` and uploads
`out/`. In the repository settings, choose **GitHub Actions** as the Pages source.

For a user or organization Pages repository named `<owner>.github.io`, the
workflow automatically omits the repository subpath.
