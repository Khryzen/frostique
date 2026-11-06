# Frostique

Astro + Sveltia CMS starter for `Khryzen/frostique`, deployed as a static site to GitHub Pages.

## Requirements

- Node.js 22 or newer (the GitHub Actions workflow uses the Node version supported by `withastro/action`).
- npm.
- A GitHub repository named `frostique` under `Khryzen`.

## Run locally

```sh
npm install
npm run dev
```

Open the local site shown by Astro. During local development, open the CMS at `/admin/index.html` (Astro's dev server does not automatically resolve `public/admin/index.html` at `/admin/`).

## Configure the repository

1. Create an empty GitHub repository: `https://github.com/new`.
2. Set owner to `Khryzen`, repository name to `frostique`, and default branch to `main`.
3. Download and extract this starter ZIP on your computer.
4. Open the extracted `frostique` folder in GitHub Desktop, choose **Add an Existing Repository**, then publish it to GitHub as `Khryzen/frostique` on the `main` branch. Alternatively, use the Git commands below from inside the extracted folder:

   ```sh
   git init
   git add .
   git commit -m "Initial Frostique website"
   git branch -M main
   git remote add origin https://github.com/Khryzen/frostique.git
   git push -u origin main
   ```

   If Git reports that `origin` already exists, use `git remote set-url origin https://github.com/Khryzen/frostique.git` instead.
5. In GitHub, open **Settings → Pages → Build and deployment** and select **GitHub Actions** as the source.
6. The workflow in `.github/workflows/deploy.yml` builds and deploys on each push to `main`.
7. The site URL will be `https://khryzen.github.io/frostique/` after the first successful deployment.

The Astro configuration already sets `site: https://khryzen.github.io` and `base: /frostique` for a project Pages site.

## Sveltia CMS

The admin UI is available at:

- Production: `https://khryzen.github.io/frostique/admin/`
- Local development: `http://localhost:4321/admin/index.html`

The CMS configuration is `public/admin/config.yml` and points to `Khryzen/frostique`, branch `main`, using token authentication only.

To sign in:

1. Open the CMS and choose **Sign in with Token**.
2. Create a fine-grained GitHub personal access token restricted to the `Khryzen/frostique` repository.
3. Grant **Contents: Read and write**. Metadata read access is granted automatically. The current configuration uses the simple publishing workflow, so Pull requests permission is not needed.
4. Paste the token into the CMS sign-in prompt. Sveltia stores the token in browser local storage; do not paste it into a source file, commit it, or share it. Use a dedicated token and revoke it if the browser/device is no longer trusted.

The CMS configuration and all content are public. Never put secrets, API keys, or access tokens in `config.yml` or any file in this repository.

## Content management

- Products: `src/content/products/*.md`
- Homepage and About content: `src/content/pages/*.md`
- Business settings: `src/data/site.json`
- Uploaded images: `public/uploads/`

Product entries marked `draft: true` are excluded from the public site. Turn Draft off to publish. Add the actual Frostique products and brand images before launch; the included sample product is deliberately a draft.

## Contact form

GitHub Pages is static hosting and cannot process form submissions itself. Create a form endpoint with a service such as Formspree, then set `formEndpoint` in CMS → Site settings. Until that is configured, the contact page displays setup instructions rather than a nonfunctional form.

## Brand assets

The starter includes a generic visual direction and a placeholder mark, not official Frostique artwork. Replace these with approved brand assets. The Facebook page URL is prefilled in site settings.

## Checks

```sh
npm run check
npm run build
```

## Notes

- The website is static; there is no server, database, or checkout.
- The CMS is served from the same GitHub Pages site under `/admin/`.
- For a multi-editor handoff, consider moving from PAT authentication to an OAuth authorization-code flow. PAT is configured here because it was explicitly selected for the initial implementation.
