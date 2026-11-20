# JR Health & Fitness

The landing page for JR Health & Fitness: one-to-one online coaching with Joe Russell. It's a single static page with no build step and no server.

- `index.html`: the landing page
- `styles.css`, `main.js`: styles and the small script for the mobile menu and the Enquiry form
- `privacy.html`: privacy notice for the Enquiry form
- `thanks.html`: confirmation page shown if someone sends the form with JavaScript turned off
- `images/`, `fonts/`: logo, Success Story photos, and the self-hosted Archivo font (SIL Open Font License)
- `CONTEXT.md`: the glossary of terms used for this project
- `docs/adr/`: records of decisions made and why

## Run it locally

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server
```

The Enquiry form only sends once the site is deployed on Netlify (see below).

## Deploy on Netlify

1. In Netlify, choose **Add new site → Import an existing project** and pick this repo and branch. There is no build command, and the publish directory is the repo root.
2. Netlify detects the `enquiry` form automatically when the site deploys.
3. Under **Site configuration → Forms → Form notifications**, add an email notification to Joe's address so each Enquiry lands in his inbox.
4. Optional: add a custom domain under **Domain management** once one is bought.

See [docs/adr/0001-static-site-with-netlify-forms.md](docs/adr/0001-static-site-with-netlify-forms.md) for why the site works this way.

## Before launch

Placeholders show as highlighted text in square brackets. Search the HTML for `class="ph"` to find them all.

- [ ] James's result and quote (Results section), and confirm his written permission
- [ ] Photo of Joe, his background and his qualifications (About Joe)
- [ ] Gym or home workouts (FAQ)
- [ ] Check the drafted FAQ answers
- [ ] Privacy notice: contact email, how long Enquiries are kept, and the date
- [ ] Set up the Netlify form notification email
