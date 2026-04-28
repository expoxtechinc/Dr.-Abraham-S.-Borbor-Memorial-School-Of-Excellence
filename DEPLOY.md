# Deployment Guide — Dr. Abraham S. Borbor Memorial School of Excellence

This is a fully static site (React + Vite). It can be deployed to Vercel, Netlify, GitHub Pages, or any static host.

## A. Push the code to your GitHub repository

> Important: never share personal access tokens in chat or in your codebase. The instructions below let you push from your own computer using your own token securely.

1. Download the project from this workspace (or clone it locally).
2. Open a terminal in the project root and run:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Dr. Abraham S. Borbor Memorial School site"
   git branch -M main
   ```

3. Add your GitHub remote (paste the **repo URL**, not the token):

   ```bash
   git remote add origin https://github.com/expoxtechinc/Dr.-Abraham-S.-Borbor-Memorial-School-Of-Excellence.git
   ```

4. Push using your token. The safest way is to be **prompted** for credentials — when Git asks, paste your **GitHub username** for the username and your **personal access token** as the password:

   ```bash
   git push -u origin main
   ```

   If you need to embed the token in the URL one time only (less safe — clears after the push), you can use:

   ```bash
   git push https://<YOUR_USERNAME>:<YOUR_TOKEN>@github.com/expoxtechinc/Dr.-Abraham-S.-Borbor-Memorial-School-Of-Excellence.git main
   ```

   After it succeeds, run `git remote set-url origin https://github.com/expoxtechinc/Dr.-Abraham-S.-Borbor-Memorial-School-Of-Excellence.git` to remove the token from the remote URL.

5. Confirm on GitHub that your code shows up.

## B. Deploy to Vercel (recommended — free)

### Option 1: One-click GitHub import (easiest)

1. Go to <https://vercel.com/new>.
2. Sign in with your GitHub account.
3. Click **Import** next to your repository (`Dr.-Abraham-S.-Borbor-Memorial-School-Of-Excellence`).
4. On the configuration screen Vercel will auto-detect Vite. Override the settings as follows:
   - **Framework Preset:** Other
   - **Root Directory:** `artifacts/borbor-school`
   - **Build Command:** `pnpm install --frozen-lockfile && cd ../.. && pnpm --filter @workspace/borbor-school build`
   - **Output Directory:** `dist/public`
   - **Install Command:** leave default
   - **Environment Variables:** add `BASE_PATH` = `/` and `PORT` = `3000` (only used by the Vite dev server; harmless in build).
5. Click **Deploy**. Vercel will build and publish your site to a `*.vercel.app` URL.

### Option 2: Vercel CLI

```bash
npm install -g vercel
cd artifacts/borbor-school
BASE_PATH=/ PORT=3000 vercel --prod
```

When prompted: framework = `Other`, build command = `pnpm install && pnpm --filter @workspace/borbor-school build`, output dir = `dist/public`.

### Custom Domain

In your Vercel project → **Settings → Domains** → add `borborschool.org` (or any domain you own) and follow the DNS instructions.

## C. Admin Panel

- URL: `/admin`
- Default email: `borborschool.admin@gmail.com`
- Default password: `Admin2026`
- You can change the email and password from the dashboard's **Security** tab.
- All edits are saved in the visitor's browser (`localStorage`). For multi-user persistence, connect a real backend later.

## D. WhatsApp / Phone / Facebook Links

These are already wired to the numbers and pages you provided. You can change them from the admin **Info** tab.

## E. Where to make changes

- All school content: Admin dashboard → **Info / Activities / News / Gallery**
- Visual theme: `artifacts/borbor-school/src/index.css`
- Page structure: `artifacts/borbor-school/src/pages/*.tsx`

Built by SAS Tech Inc · <https://sastechinc-bp.vercel.app/>
