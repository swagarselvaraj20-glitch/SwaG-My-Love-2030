# SwaG My Love 2030

This repository was not a valid GitHub Pages Jekyll app. It was effectively empty and GitHub Pages had been enabled with the default Jekyll configuration, which caused the build to invoke `jekyll-github-metadata` and then fail with a 503 from `api.github.com`.

This project is a Next.js + TypeScript application that requires a server runtime, so GitHub Pages is not the correct hosting platform.

## Preferred deployment

Use Vercel for deployment.

## Required environment variables

Copy `.env.example` to `.env.local` and set real values before deployment:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `AUTH_SECRET`
- `APP_ALLOWED_USERS`
- `APP_DEFAULT_PIN`
- `AUTH_COOKIE_NAME`
- `APP_PASSWORD`

`APP_DEFAULT_PIN` must remain `2030` for the initial secure code.

## Security requirements

- Keep the site private.
- Enforce the two-account limit.
- Keep auth checks server-side and only allow a private two-person access path.
- Store private photos in a private Supabase bucket, not in a public static site.
- Do not publish secrets to the repository.

## Deployment steps

1. Push this repository to GitHub.
2. Disable GitHub Pages in the repository settings because this app is not a static Jekyll site.
3. Import the repo in Vercel and choose the Next.js framework.
4. Add the environment variables above in the Vercel dashboard.
5. Deploy.

## Local verification

```bash
npm install
npm run build
npm test
npm run lint
```
