# Deploying the TeMan Website to Vercel with a Hostinger Domain

This guide walks through publishing the TeMan landing page (Next.js 16, React 19, Tailwind CSS 4) on **Vercel**, then connecting a domain bought from **Hostinger**.

Throughout the guide, `yourdomain.com` stands in for your real domain. Replace it everywhere.

---

## 1. Prerequisites

| What | Notes |
| --- | --- |
| GitHub account | Vercel deploys from a Git repository. |
| Vercel account | Sign up at <https://vercel.com> with your GitHub account (the free Hobby plan is enough). |
| Hostinger account | With the domain already purchased and active. |
| Node.js 20 or newer | Only needed to test the build locally. |

---

## 2. Pre-launch checklist

Do these before the first production deploy:

1. **Confirm the contact email.** In `src/config.ts`, it is already set to the support inbox:

   ```ts
   export const CONTACT_EMAIL = "support@tuntun.rehab";
   ```

2. **Check that the production build passes locally:**

   ```bash
   npm install
   npm run build
   ```

   If this fails locally, it will fail on Vercel too. Fix any errors first.

3. **Commit all pending changes:**

   ```bash
   git add -A
   git commit -m "Prepare for production deploy"
   ```

> **No environment variables are required.** The site URL used by the sitemap, `robots.txt` and metadata is read automatically from `VERCEL_PROJECT_PRODUCTION_URL`, which Vercel provides (see `src/config.ts`).

---

## 3. Push the code to GitHub

The repository does not have a remote yet. Pick one option.

**Option A: GitHub CLI**

```bash
gh repo create teman-website --private --source=. --remote=origin --push
```

**Option B: manually**

1. Create an empty repository on <https://github.com/new> (do **not** add a README or .gitignore).
2. Connect it and push:

   ```bash
   git remote add origin https://github.com/<your-username>/teman-website.git
   git branch -M main
   git push -u origin main
   ```

---

## 4. Create the project on Vercel

### Option A: Vercel dashboard (recommended)

1. Go to <https://vercel.com/new>.
2. Under **Import Git Repository**, connect GitHub if asked, then click **Import** next to `teman-website`.
3. Check the settings. The defaults are correct:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./`
   - **Build Command:** `next build` (default)
   - **Output Directory:** default
   - **Environment Variables:** none needed
4. Click **Deploy** and wait 1–2 minutes.
5. When it finishes, Vercel gives you a URL like `teman-website.vercel.app`. Open it and check the site works.

> Under **Project → Settings → General → Node.js Version**, make sure it is **20.x or newer**.

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel            # creates the project and a preview deployment
vercel --prod     # deploys to production
```

To get automatic deploys on every push, connect the GitHub repository afterwards under **Project → Settings → Git**.

---

## 5. Add your domain in Vercel

1. Open the project in Vercel, then go to **Settings → Domains**.
2. Enter `yourdomain.com` and click **Add**.
3. Vercel suggests also adding `www.yourdomain.com` and redirecting one to the other. Accept this (recommended: redirect `www` to the apex domain, or the reverse if you prefer `www`).
4. Both domains will show **Invalid Configuration** for now. That is expected. Vercel will show the DNS records it needs. **Keep this page open**; you will copy the values in the next step.

---

## 6. Point the Hostinger domain to Vercel

You have two options. **Option A is recommended**: it keeps Hostinger in charge of DNS, so existing records (for example, Hostinger email) keep working.

### Option A: Add DNS records in Hostinger (recommended)

1. Log in to **Hostinger hPanel**, then go to **Domains**, pick `yourdomain.com`, then **DNS / Nameservers**.
2. Make sure the domain uses **Hostinger's nameservers** (`ns1.dns-parking.com` / `ns2.dns-parking.com`, or similar). If not, the records below have no effect.
3. **Delete the conflicting default records** Hostinger creates:
   - Any **A** record with name `@`
   - Any **AAAA** record with name `@` (IPv6; this often breaks verification)
   - Any **CNAME** or **A** record with name `www`
   - Any **ALIAS** record on `@`

   **Do not delete MX, TXT (SPF/DKIM) or other email records** if you use email on this domain.
4. **Add the Vercel records.** Use the exact values shown on Vercel's Domains page. Typical values:

   | Type | Name | Points to / Value | TTL |
   | --- | --- | --- | --- |
   | A | `@` | `76.76.21.21` | 3600 (or lowest) |
   | CNAME | `www` | `cname.vercel-dns.com` | 3600 (or lowest) |

   > Vercel may show a project-specific value (for example, `xxxxxxxx.vercel-dns-017.com` for the CNAME, or a different A record IP). Always prefer what the Vercel dashboard shows.

5. If Vercel asks for a **TXT** record named `_vercel` to verify ownership (this happens when the domain is already used by another Vercel account), add it exactly as shown.
6. Save.

### Option B: Switch nameservers to Vercel

With this option Vercel manages all DNS. Use it only if you don't need Hostinger-managed records, or you're ready to recreate them (for example, MX for email) in Vercel.

1. In Vercel, go to **Settings → Domains**, open your domain, and choose the **Nameservers** method. Note the nameservers (usually `ns1.vercel-dns.com` and `ns2.vercel-dns.com`).
2. In Hostinger hPanel, go to **Domains**, pick `yourdomain.com`, then **DNS / Nameservers → Change Nameservers**.
3. Choose **Change nameservers**, enter Vercel's nameservers, and save.
4. Recreate any email records (MX, SPF, DKIM) in Vercel under **Dashboard → Domains → yourdomain.com → DNS Records**.

---

## 7. Wait for propagation and verify

- DNS changes usually take **5–30 minutes**, but can take up to **24–48 hours** (nameserver changes take the longest).
- Vercel re-checks automatically. When the status turns to **Valid Configuration**, Vercel issues a free **HTTPS (SSL) certificate** for you.

Check from your terminal:

```bash
dig +short yourdomain.com A          # expect 76.76.21.21 (or the IP Vercel showed)
dig +short www.yourdomain.com CNAME  # expect cname.vercel-dns.com.
nslookup yourdomain.com
```

Or use <https://dnschecker.org> to watch propagation worldwide.

Then open `https://yourdomain.com` and `https://www.yourdomain.com` in a browser. One should redirect to the other.

---

## 8. Redeploy so the site uses the new domain

`src/config.ts` builds `SITE_URL` from `VERCEL_PROJECT_PRODUCTION_URL`. That value is read **at build time**, so trigger a new production deploy after the domain is set:

- Vercel: go to **Deployments**, open the latest production deployment, then **⋯ → Redeploy**, **or**
- Push any commit to `main`.

Then check:

- `https://yourdomain.com/sitemap.xml` lists URLs that start with `https://yourdomain.com`
- `https://yourdomain.com/robots.txt` points to `https://yourdomain.com/sitemap.xml`
- `/privasi` and `/ketentuan` load correctly

> If the URLs still show `*.vercel.app`, make sure `yourdomain.com` is marked as the **primary** production domain in **Settings → Domains**. The `www` domain should be the redirect, not the other way round, unless you chose `www` as primary.

---

## 9. Day-to-day workflow

| Action | Result |
| --- | --- |
| Push to `main` | Automatic **production** deploy to `yourdomain.com` |
| Push to another branch / open a PR | Automatic **preview** deploy on a unique `*.vercel.app` URL |
| Bad deploy in production | **Deployments**, pick a previous good one, then **⋯ → Promote to Production** (instant rollback) |

Optional: submit `https://yourdomain.com/sitemap.xml` in **Google Search Console** after launch.

---

## 10. Troubleshooting

| Problem | Likely cause and fix |
| --- | --- |
| Domain stays **Invalid Configuration** | An old Hostinger A/AAAA/CNAME record is still there, or the record values have a typo. Delete the leftover default records and compare with Vercel's values. |
| Site shows the Hostinger "parked domain" page | The old A record still points to Hostinger, or DNS hasn't propagated yet. Check with `dig`, then wait or fix the record. |
| Works on some networks but not others | Propagation is still in progress. Lowering the TTL beforehand speeds up future changes. |
| SSL certificate stuck on "pending" | DNS isn't fully pointing to Vercel yet, or a **CAA** record blocks Let's Encrypt. Remove the CAA record or add `0 issue "letsencrypt.org"`. |
| Email stopped working | MX/TXT records were deleted (Option A) or not recreated in Vercel (Option B). Restore them from Hostinger's email settings. |
| Build fails on Vercel but not locally | Check the Node.js version in project settings (20.x+), and commit `package-lock.json`. |
| "Domain already in use" | The domain is linked to another Vercel project or account. Remove it there, or add the `_vercel` TXT verification record Vercel shows. |
