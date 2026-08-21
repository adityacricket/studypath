# StudyPath

## Project Overview
- **Name**: StudyPath
- **Goal**: All-in-one exam-prep and career-planning platform for Indian students preparing for SSC CGL, SSC CHSL, NDA, CDS and CUET.
- **Features**:
  - Home dashboard with search, popular exams, quick tools, daily quiz, resources, career roadmaps, progress overview
  - Exam Hub with full structured guides (eligibility, age limit, pattern, syllabus, strategy, important topics, practice & mock test) for 5 exams
  - 7 Study Tools: Percentage, Average, Ratio, Age, Marks %, Study-Time calculators + Timetable Generator
  - Quiz System: subject-wise & topic-wise MCQs, 3 difficulty levels, instant scoring, explanations, deterministic Daily Quiz, score history
  - Study Planner: generates a personalized weekly timetable + preparation milestones from exam date, subjects, daily hours, strong/weak subjects
  - Career Roadmaps: 9 step-by-step career paths (govt jobs, defence, SSC, banking, teaching, technology, after 10th/12th/graduation)
  - Resources hub: formula sheets, revision notes, vocabulary, practice material, original study notes, checklists (with bookmarking)
  - Progress Dashboard: topics completed, study hours, quiz/mock scores, weak/strong subjects, overall progress ring
  - Profile & Settings: editable name/avatar, selected exam goal, quiz history, saved resources, dark/light mode, notifications toggles, reset progress/full reset
  - Monetization-ready placeholders: AdSlot, SponsoredCard, AffiliateBanner, PremiumBanner components used across pages (no real ad network wired yet)

## URLs
- **Local Preview**: http://localhost:3000 (sandbox)
- **Production**: _to be added after Cloudflare Pages deployment_
- **GitHub**: _to be added if pushed_

## Data Architecture
- **Data Models** (`src/data/*.js`): `exams.js` (5 exams, fully structured), `quizzes.js` (original MCQ bank + subjects/topics), `careers.js` (9 roadmaps), `resources.js` (6 categories of original content)
- **Storage**: Browser `localStorage` via `src/utils/storage.js` (keys: profile, settings, progress, quiz history, planner, saved resources) — abstracted behind a single module so it can be swapped for a real database/auth backend (e.g. Cloudflare D1 + auth) later without touching UI code
- **State**: React Context (`src/context/AppContext.jsx`) wraps the storage layer and exposes hooks (`useApp()`) to all pages
- **Data Flow**: User actions (quiz attempts, planner generation, tool logs, profile edits) → AppContext updater → localStorage write → React state update → UI re-render

## User Guide
1. **Home** — search anything, jump into popular exams/tools, take the Daily Quiz, see your progress snapshot.
2. **Exam Hub** — pick an exam to see Eligibility, Age Limit, Exam Pattern, Syllabus, Strategy and Practice/Mock Test tabs.
3. **Study Tools** — use any of the 7 calculators; Study-Time tool lets you log daily hours which feed the Dashboard.
4. **Quiz** — choose subject → topic (optional) → difficulty → Start Quiz; get instant scoring + explanations; history is saved.
5. **Study Planner** — enter exam, date, subjects (comma separated), daily hours, strong/weak subjects → generates milestones + a 7-day timetable.
6. **Careers** — browse roadmaps, tap one to see the step-by-step timeline.
7. **Resources** — browse by category, bookmark items for your Profile.
8. **Dashboard** — see topics completed, study hours, quiz/mock trends, weak/strong subjects.
9. **Profile/Settings** — edit name/avatar, pick target exam, toggle dark mode & notifications, reset progress or the whole app.

## Deployment
- **Platform**: Cloudflare Pages (static SPA — no server-side code required)
- **Tech Stack**: React 18 + Vite 5 + React Router 6 + Tailwind CSS, Font Awesome (CDN), Google Fonts (CDN)
- **Status**: ✅ Running locally in sandbox via PM2 + `wrangler pages dev`. Not yet deployed to a live Cloudflare Pages URL.
- **SPA Routing**: `public/_redirects` (`/* /index.html 200`) ensures client-side routes resolve correctly on Cloudflare Pages.
- **Last Updated**: 2026-08-21

## Not Yet Implemented / Next Steps
- Real backend/auth (currently 100% localStorage — architecture is ready to swap in Cloudflare D1 + an auth provider via the `storage.js` abstraction)
- Real Google AdSense script wiring (placeholders exist in `AdSlot`/`SponsoredCard`/`AffiliateBanner`/`PremiumBanner`)
- Actual premium purchase flow (Upgrade buttons are UI-only stubs)
- Additional exams beyond the initial 5 (structure in `exams.js` makes this easy to extend)
- Larger question bank per topic (currently a curated original sample set, not exhaustive)
- Production deployment to Cloudflare Pages + custom domain
- Push to GitHub (call `setup_github_environment` first)
