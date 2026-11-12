# Axiontel website

Marketing and lead-generation website for **Axiontel** (https://axiontel.co), built with
Next.js 16 (App Router), Tailwind CSS 4, Framer Motion, Lenis smooth scrolling and Three.js
(React Three Fiber). Light theme. Pages and SEO follow the *Axiontel SEO/GEO Website Blueprint*.

## Run it locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the finished static site to ./out
```

The site is a **static export**: `npm run build` creates an `out` folder containing plain HTML, CSS, JS,
images, `.htaccess` and `enquiry.php`. Upload the *contents* of `out` to `public_html` on any Apache/PHP host.

## Enquiry form → inquiry@axiontel.co

The quote form (home, contact, product pages) and partner form post to `public/enquiry.php`
(copied to `out/enquiry.php`). It validates the fields, blocks spam (honeypot, minimum fill time,
rate limit) and emails the enquiry to **inquiry@axiontel.co** using PHP `mail()`, with the customer's
email as Reply-To. Visitors then see `/thank-you/`.

Settings are the three lines at the top of `enquiry.php`:
- `TO_EMAIL` – where enquiries go (inquiry@axiontel.co)
- `FROM_EMAIL` – sender address; use a real mailbox on axiontel.co (e.g. no-reply@axiontel.co)
- `FROM_NAME`

Since axiontel.co email is on Titan, add the BigRock hosting server to the domain's SPF record
(BigRock support can give you the exact value) so enquiry emails don't land in spam.
Note: `npm run dev` has no PHP, so the form only works on the real host.

## Deploy to BigRock (GitHub → cPanel, automatic)

The workflow `.github/workflows/deploy-bigrock.yml` builds the site and uploads `out/` to
`public_html` every time you push to `main`.

1. **Get FTP details** – BigRock → Manage (axiontel.co hosting) → cPanel → *FTP Accounts*.
   Use the main cPanel username/password (or create an FTP account whose directory is your home folder).
   FTP server is usually `ftp.axiontel.co` (or the server hostname/IP shown in cPanel).
2. **Add GitHub secrets** – repo → Settings → Secrets and variables → Actions → *New repository secret*:
   `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, plus `FTP_DIR` if the FTP account is not rooted at your
   home folder (cPanel → FTP Accounts → *Directory* column: if it already points to `public_html`, set `FTP_DIR` to `./`).
3. **Push to main** (or Actions tab → *Deploy to BigRock* → *Run workflow*). Watch it in the Actions tab.
4. If the host refuses FTPS, change `protocol: ftps` to `protocol: ftp` in the workflow.
5. Point the domain at the hosting if it isn't already (BigRock usually sets the nameservers
   automatically when domain and hosting are in the same account), and enable free SSL in cPanel
   (*SSL/TLS Status* → Run AutoSSL) so https://axiontel.co works.

**Manual alternative:** run `npm run build`, zip the contents of `out`, upload it in cPanel →
File Manager → public_html, and extract.

After launch: submit `https://axiontel.co/sitemap.xml` in Google Search Console.

## Where to edit content

| What | File |
| --- | --- |
| Phone, email, address, map, Instagram, WhatsApp number, ETA no. | `src/lib/site.ts` |
| R-26 specs, features, accessories | `src/lib/product.ts` |
| Industry solution pages | `src/lib/solutions.ts` |
| Team (founder, CTO, sales) | `src/lib/team.ts` – add photos to `public/images/team/` and set `photo` |
| Guides / resources | `src/lib/articles.ts` |
| FAQs | `src/lib/faqs.ts` |
| Client logos (marquee) | `public/images/clients/` + `src/components/ClientMarquee.tsx` |
| Certificates | `src/components/blocks.tsx` → `certifications` (set `image` when scans arrive) |
| R-26 datasheet PDF | `public/downloads/axiontel-r-26-datasheet.pdf` |
| Enquiry email settings | `public/enquiry.php` |
| Apache rules (HTTPS, redirects, caching) | `public/.htaccess` |

## Features

- Logo loader (`Loader.tsx`), Lenis smooth scroll (`SmoothScroll.tsx`), Framer Motion reveals,
  parallax, tilt cards, count-ups, animated header and mobile menu.
- 3D walkie-talkie built in Three.js with signal rings and particles (`RadioScene.tsx`):
  interactive in the hero, drag-to-rotate on the R-26 page; pauses when off-screen and runs
  lighter on phones. Respects "reduce motion".
- SEO/GEO: unique titles/descriptions, canonicals, trailing-slash URLs from the blueprint,
  sitemap.xml, robots.txt, Open Graph image, JSON-LD (Organization, WebSite, Product,
  BreadcrumbList, FAQPage, Article), answer-first guides, crawlable FAQ text.
- Analytics-ready events (`quote_form_start/submit`, `click_to_call`, `click_whatsapp`, …)
  pushed to `dataLayer` — add GA4/GTM and they start reporting.
