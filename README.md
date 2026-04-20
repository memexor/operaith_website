# Operaith Website

Official marketing and request-access website source for **Operaith**.

Operaith is a compliance-oriented operations and dispatch platform for organizations that need dependable daily execution, clearer visibility, and structured operational records.

---

## 1. Scope

This repository contains the public-facing website for Operaith, including:

- landing / marketing pages
- product and pricing narrative
- request trial access flow
- request submitted confirmation page
- legal pages such as Terms and Privacy

This package is intended to remain **clean, commercial, and website-only**.  
It should not carry unrelated demo residue, obsolete signup flows, or development junk in release packaging.

---

## 2. Current Product Messaging

Operaith should be presented as:

> **Operaith = compliance-oriented operations and dispatch software for organizations**

Core website messaging priorities:

- calm, credible, commercial tone
- organization-first onboarding
- request-access instead of open signup
- clear distinction that billing is organization-based
- trust-building positioning for operational teams

---

## 3. Main Website Routes

Typical routes in this package include:

- `/`
- `/product`
- `/pricing`
- `/demo`
- `/faq`
- `/request-access`
- `/request-submitted`
- `/terms`
- `/privacy`

If `/signup` still exists for compatibility, it should redirect to:

- `/request-access`

The website must not expose an old standalone signup path as the primary CTA.

---

## 4. Tech Stack

Recommended / expected stack:

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**

---

## 5. Local Development

Install dependencies:

```bash
npm install
```

Start local development server:

```bash
npm run dev
```

Typical local URL:

```text
http://localhost:3000
```

---

## 6. Production Build

Create a production build:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

---

## 7. Clean Build Expectations

A clean build/release should satisfy the following:

- no `node_modules` included in release zip
- no `.next` included in release zip
- no obsolete signup messaging as main CTA
- no broken Terms / Privacy references
- no historical brand residue
- no debug/demo-only packaging leftovers
- consistent Operaith branding across pages

---

## 8. Packaging Rules

Before packaging a release, clean local build artifacts:

```bash
rm -rf .next node_modules
```

If lockfile or dependency reset is needed:

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

Release zip should include source files only, and exclude:

- `node_modules/`
- `.next/`
- local logs
- temporary packaging notes
- editor/system junk

---

## 9. Environment Variables

If environment variables are required, define them in local `.env` files and do not commit secrets.

Common examples may include:

```env
NEXT_PUBLIC_SITE_URL=https://www.operaith.com
NEXT_PUBLIC_API_BASE_URL=https://api.operaith.com
```

Adjust only if the website actually depends on them.

---

## 10. Request Access Flow

The intended public onboarding flow is:

1. Visitor opens website
2. Visitor reviews product/pricing/demo/FAQ
3. Visitor submits request through `/request-access`
4. Website redirects to `/request-submitted`
5. Internal review and provisioning happen outside the public site

This package should support that flow clearly and consistently.

---

## 11. Legal Consistency Requirement

If the request-access form references:

- Terms
- Privacy Policy

then the repository must contain valid corresponding pages:

- `/terms`
- `/privacy`

Website copy must not mention legal pages that do not exist.

---

## 12. Branding Rules

Use **Operaith** consistently across:

- page titles
- hero messaging
- footer
- metadata
- request-access flow
- legal pages

Do not leave behind older product names, temporary names, or mismatched CTA wording.

---

## 13. Deployment Notes

This website is typically deployed behind a production domain such as:

- `https://www.operaith.com`

It may sit behind:

- Nginx
- Cloudflare
- reverse proxy infrastructure
- containerized deployment

For production deployment, verify:

- correct domain
- HTTPS enabled
- asset loading works
- redirects work
- `/request-access`, `/terms`, and `/privacy` are reachable
- metadata and page titles are correct

---

## 14. Recommended Verification Checklist

Before accepting a release package, verify:

- homepage loads correctly
- header/footer links work
- request-access form renders correctly
- request-submitted page works
- terms page exists
- privacy page exists
- `/signup` does not remain as an active legacy path except redirect
- build succeeds in the target environment
- release zip is clean

---

## 15. Suggested Repository Hygiene

Recommended `.gitignore` coverage should include:

- `node_modules/`
- `.next/`
- `.env*`
- logs
- coverage artifacts
- editor junk
- zip artifacts

---

## 16. Notes About This Package

If this package was produced from a clean packaging pass, it may intentionally exclude:

- installed dependencies
- build cache
- generated output

That is expected for a source release package.

---

## 17. Ownership

Product name: **Operaith**  
Package type: **official website source package**

---

## 18. Final Intent

This repository should remain:

- clean
- commercial
- source-only
- aligned with the Operaith visual system
- consistent with the reviewed request-access onboarding model

---
