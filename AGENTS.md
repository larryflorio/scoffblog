# SCOFFblog

Satirical site: the Supreme Court of Fantasy Football (SCOFF), styled after SCOTUSblog, covering one lawyers' fantasy football league. Claude Code owns design, content, and deploys.

## Stack

- Astro static site, content collections in `src/content/posts` and `src/content/cases`.
- Deploys to GitHub Pages on push to `main` (`.github/workflows/deploy.yml`). Custom domain `scoffblog.com` via `public/CNAME`.
- `npm run dev` to preview, `npm run build` must pass before any push.

## The joke, and the rules for it

- Register: SCOTUSblog. Dry, procedural, reportorial. The facts are absurd; the prose never winks. No exclamation points, no "lol", no explaining the joke. The syllabus voice is the house voice.
- Everything is in-universe. The league's disputes are cases. The Commissioner is a lower court whose standard of review is his own discretion. The Fantasy Football Court of Appeals was created by the appellant in the first case. SCOFF sits above it as the League en banc.
- Reporter citations: `N F.F. page (year)` for the appellate reporter, `N S.C.F.F. page` for SCOFF opinions. Cite real fictional precedent from prior posts; never invent a case you have not published. Keep a running list in `src/content/reporter.md`.
- Real people: league members appear by name and title only where they have consented (all current members have). Marc Goldich (appellant), Erich Dylus (Commissioner), and Drew Hinkes (publisher of the filings) are on the record; David Lopez-Kurtz is the second class member (confirmed 9/2). No claims about anyone's real job, employer, or family beyond what the filings themselves say. Kids stay unnamed.
- Never copy SCOTUSblog's code, logo, images, or text. Echo the idiom, not the assets.
- Disclaimer in the footer stays on every page.

## Content types

- `posts`: kicker in {COURT NEWS, OPINION ANALYSIS, EMERGENCY DOCKET, RELIST WATCH, SCOFF FOCUS, STAT PACK, ARGUMENT ANALYSIS, PETITIONS WE'RE WATCHING}. Author is the desk, not a real person, unless a member writes one.
- `cases`: docket number `26-N`, title `Petitioner v. Respondent`, issues presented as questions beginning "Whether", timeline entries in docket-sheet voice, exhibits as images in `public/exhibits`.

## Style constraints (from the owner)

- No em dashes anywhere. Periods, commas, colons.
- Dates as "September 8, 2026" in prose, "Sep 8" in tables.
- Keep posts short. A SCOTUSblog post is 400 to 900 words; an opinion can run longer but every paragraph must carry a joke or a holding.
