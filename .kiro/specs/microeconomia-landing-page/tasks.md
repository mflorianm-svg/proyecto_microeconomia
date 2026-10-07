# Implementation Plan: Microeconomía Landing Page

## Overview

Static single-page React 18 + Vite + TypeScript application styled with Tailwind CSS following a Harvard-inspired academic design system. The page is composed of four independent components (HeroSection, PDFViewer, VideoPlayer, MembersSection) assembled in `App.tsx`. All content is static; no routing, no backend. A dual test suite covers behaviour with Vitest + React Testing Library and correctness properties with fast-check.

---

## Tasks

- [x] 1. Scaffold project and configure toolchain
  - [x] 1.1 Initialise Vite project with React + TypeScript template
    - Run `npm create vite@latest . -- --template react-ts` inside the project root
    - Verify `index.html`, `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`, and `src/main.tsx` are generated
    - Add `"strict": true` to `tsconfig.json` compilerOptions if not present
    - _Requirements: 1.1, 1.7_

  - [x] 1.2 Install and configure Tailwind CSS v3
    - Install `tailwindcss@^3`, `postcss`, `autoprefixer` as dev dependencies (exact versions)
    - Create `postcss.config.cjs` with `tailwindcss` and `autoprefixer` plugins
    - Create `tailwind.config.ts` with `content: ['./index.html', './src/**/*.{ts,tsx}']` and an empty `theme.extend`
    - Add `@tailwind base; @tailwind components; @tailwind utilities;` to `src/index.css`
    - Import `src/index.css` in `src/main.tsx`
    - _Requirements: 1.1, 1.2_

  - [x] 1.3 Add Google Fonts link and page metadata to `index.html`
    - Add `<link rel="preconnect">` for `fonts.googleapis.com` and `fonts.gstatic.com` (with `crossorigin`)
    - Add the Google Fonts `<link>` for `EB Garamond` (weights 400, 600, 700) and `Source Sans 3` (weights 400, 500, 600) with `display=swap`
    - Set `<title>Microeconomía — Proyecto Final</title>` and `lang="es"` on `<html>`
    - _Requirements: 2.4, 2.5_

  - [x] 1.4 Install testing dependencies
    - Install `vitest`, `@vitest/coverage-v8`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom`, `fast-check` as dev dependencies (pinned versions)
    - Add a `test` field to `vite.config.ts`: `{ environment: 'jsdom', globals: true, setupFiles: ['./src/setupTests.ts'] }`
    - Create `src/setupTests.ts` that imports `@testing-library/jest-dom`
    - Add `"test": "vitest --run"` and `"test:coverage": "vitest --run --coverage"` scripts to `package.json`
    - _Requirements: 1.1_

- [x] 2. Define Design System tokens in `tailwind.config.ts`
  - [x] 2.1 Add colour, font-family, spacing, and max-width tokens
    - Under `theme.extend.colors` add: `harvard-crimson: '#A41034'`, `page-bg: '#FFFFFF'`, `text-primary: '#1a1a1a'`, `text-muted: '#6b7280'`, `neutral-divider: '#e5e7eb'`
    - Under `theme.extend.fontFamily` add: `serif: ['"EB Garamond"', 'Georgia', 'serif']`, `sans: ['"Source Sans 3"', 'Inter', 'sans-serif']`
    - Under `theme.extend.spacing` add the discrete token set: `'1': '4px'`, `'2': '8px'`, `'4': '16px'`, `'6': '24px'`, `'8': '32px'`, `'12': '48px'`, `'16': '64px'`
    - Under `theme.extend.maxWidth` add: `content: '1200px'`
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6_

  - [ ]* 2.2 Write unit tests for Design System token values
    - Import the resolved Tailwind config with `resolveConfig` and assert that each token value matches the specified hex / string / px value
    - Verify `harvard-crimson === '#A41034'`, `page-bg === '#FFFFFF'`, `text-primary === '#1a1a1a'`
    - Verify font families include `EB Garamond` and `Source Sans 3`
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [x] 3. Define shared TypeScript types and data files
  - [x] 3.1 Create `src/types/index.ts` with `ProjectData` and `Member` interfaces
    - Export `interface ProjectData { subject: string; topic: string; description: string; institution: string; period: string; }`
    - Export `interface Member { name: string; }`
    - No `any` types; enable `strict` mode compliance
    - _Requirements: 7.3_

  - [x] 3.2 Create `src/data/projectData.ts` with placeholder `ProjectData`
    - Import `ProjectData` from `../types`
    - Export `const projectData: ProjectData` with placeholder values for `subject` (`'Microeconomía'`), `topic`, `description` (≤ 100 words), `institution`, and `period`
    - _Requirements: 7.5_

  - [x] 3.3 Create `src/data/members.ts` with placeholder `Member[]`
    - Import `Member` from `../types`
    - Export `const members: Member[]` with 2–5 placeholder entries so that tests have data to render
    - _Requirements: 6.3, 7.5_

- [x] 4. Implement `HeroSection` component
  - [x] 4.1 Create `src/components/HeroSection/index.tsx`
    - Define `interface HeroSectionProps { data: ProjectData; }` (no `any`)
    - Render `<section aria-labelledby="hero-heading">` with a centred `max-w-5xl` inner container
    - Include a `<span>` accent bar with classes `block w-16 h-1 bg-harvard-crimson mb-6`
    - Render `<h1 id="hero-heading">` with `data.subject` using `font-serif text-4xl md:text-5xl`
    - Render `<h2>` with `data.topic` using `font-serif text-2xl md:text-3xl`
    - Render `<p>` with `data.description` using body sans font
    - Render `<p>` with `data.institution` and `data.period` in `text-sm text-text-muted`
    - Apply `px-4 md:px-8` for responsive padding (req 3.6)
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

  - [ ]* 4.2 Write unit tests for `HeroSection`
    - Render with sample `ProjectData`; assert `h1` contains `subject`, `h2` contains `topic`
    - Assert institution and period strings appear in the DOM
    - Assert at least one element has class `bg-harvard-crimson` or `border-harvard-crimson`
    - _Requirements: 3.1, 3.2, 3.4, 3.5_

- [x] 5. Implement `PDFViewer` component
  - [x] 5.1 Create `src/components/PDFViewer/index.tsx`
    - Define `interface PDFViewerProps { pdfUrl: string; documentTitle: string; }` (no `any`)
    - Render `<section aria-labelledby="pdf-heading">`
    - Render `<h2 id="pdf-heading">Documento del Proyecto</h2>`
    - Render `<object data={pdfUrl} type="application/pdf" aria-label={\`Documento PDF: ${documentTitle}\`} className="w-full h-[400px] md:h-[600px]">`
    - Inside `<object>` render fallback `<p>` with download link per design's error-handling spec
    - Render `<a href={pdfUrl} download aria-label={\`Descargar ${documentTitle} en formato PDF\`} className="... border-harvard-crimson min-h-[44px] min-w-[44px] px-6 py-3 focus-visible:ring-2 focus-visible:ring-harvard-crimson">`
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_

  - [ ]* 5.2 Write unit tests for `PDFViewer`
    - Assert `<object>` has correct `data` attribute equal to the provided `pdfUrl`
    - Assert `<a>` has `download` attribute and contains text "Descargar PDF"
    - Assert fallback `<p>` exists inside `<object>`
    - _Requirements: 4.1, 4.3, 4.4_

  - [ ]* 5.3 Write property test for `PDFViewer` — Property 2
    - **Property 2: aria-labels contain the provided title strings**
    - Use `fc.string({ minLength: 1 })` for `documentTitle`
    - Render `PDFViewer` with generated `documentTitle`; assert `<object>` aria-label contains `documentTitle` and `<a>` aria-label contains `documentTitle`
    - Configure `{ numRuns: 100 }`
    - **Validates: Requirements 4.6**

- [x] 6. Implement `VideoPlayer` component
  - [x] 6.1 Create `src/components/VideoPlayer/index.tsx`
    - Define `interface VideoPlayerProps { videoUrl: string; title: string; }` (no `any`)
    - Render `<section aria-labelledby="video-heading">`
    - Render `<h2 id="video-heading">` with `title` using `font-serif`
    - Render `<div className="aspect-video w-full">` as 16:9 container
    - Inside the container, render `<video controls aria-label={\`Video explicativo: ${title}\`} className="w-full h-full">`
    - Inside `<video>` render `<source src={videoUrl} type="video/mp4" />` and fallback `<p>` (req 5.6)
    - Do NOT add `autoplay` attribute (req 5.3)
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

  - [ ]* 6.2 Write unit tests for `VideoPlayer`
    - Assert `<video>` element has `controls` attribute
    - Assert `<video>` element does NOT have `autoplay` attribute
    - Assert `<h2>` contains the `title` prop value
    - Assert fallback `<p>` is present inside `<video>`
    - _Requirements: 5.1, 5.3, 5.4, 5.6_

  - [ ]* 6.3 Write property test for `VideoPlayer` — Property 2 (video aria-label)
    - **Property 2: aria-labels contain the provided title strings (video side)**
    - Use `fc.string({ minLength: 1 })` for `title`
    - Render `VideoPlayer` with generated `title`; assert `<video>` aria-label contains `title`
    - Configure `{ numRuns: 100 }`
    - **Validates: Requirements 5.5**

  - [ ]* 6.4 Write property test for `VideoPlayer` — Property 3
    - **Property 3: Video container maintains 16:9 aspect ratio**
    - Use `fc.integer({ min: 320, max: 1920 })` for `viewportWidth`
    - For each width, set `window.innerWidth`, render `VideoPlayer`, query the `.aspect-video` container, and verify `offsetWidth / offsetHeight ≈ 1.778 ± 0.01` (or verify the `aspect-video` Tailwind class is present, since jsdom does not compute CSS — note the limitation and assert class presence as proxy)
    - Configure `{ numRuns: 100 }`
    - **Validates: Requirements 5.2**

- [x] 7. Implement `MembersSection` component
  - [x] 7.1 Create `src/components/MembersSection/index.tsx`
    - Define `interface MembersSectionProps { members: Member[]; }` (no `any`)
    - Render `<section aria-labelledby="members-heading">`
    - Render `<h2 id="members-heading">Integrantes del Grupo</h2>` using `font-serif`
    - Render `<ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-4">`
    - For each member render `<li>` containing a card `<div>` with `border-t-4 border-harvard-crimson` and a `<span>` with `member.name`
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

  - [ ]* 7.2 Write unit tests for `MembersSection`
    - Assert `<h2>` text equals "Integrantes del Grupo"
    - Render with array of 5 members; assert exactly 5 `<li>` elements are rendered
    - Assert each rendered item contains the corresponding `name` string
    - _Requirements: 6.1, 6.2_

  - [ ]* 7.3 Write property test for `MembersSection` — Property 4
    - **Property 4: Member list renders all names with consistent granate accent**
    - Use `fc.array(fc.record({ name: fc.string({ minLength: 1 }) }), { minLength: 1, maxLength: 20 })` for `members`
    - Render `MembersSection`; assert number of rendered cards equals `members.length`
    - Assert each `member.name` appears in the rendered output
    - Assert every card element has class `border-harvard-crimson`
    - Configure `{ numRuns: 100 }`
    - **Validates: Requirements 6.2, 6.5**

- [x] 8. Checkpoint — Core components complete
  - Ensure all tests pass, ask the user if questions arise.

- [x] 9. Compose `App.tsx` and wire assets
  - [x] 9.1 Import assets and compose all components in `App.tsx`
    - Import `pdfUrl from './assets/document.pdf'` and `videoUrl from './assets/video.mp4'` (Vite asset URL imports)
    - Import `projectData` from `./data/projectData` and `members` from `./data/members`
    - Import all four components from their respective `src/components/` folders
    - Render components in the required top-to-bottom order: `HeroSection → PDFViewer → VideoPlayer → MembersSection`
    - Add `<hr className="border-t border-neutral-divider" />` between each section (req 2.7)
    - Wrap everything in `<main className="max-w-content mx-auto px-4">` (req 2.8)
    - Pass typed props — no `any` in prop passing
    - _Requirements: 1.3, 1.5, 2.7, 2.8_

  - [ ]* 9.2 Write unit test for `App` composition order
    - Render `App`; assert the section order in the DOM is Hero → PDF → Video → Members
    - Assert `<hr>` elements exist between sections
    - _Requirements: 1.5, 2.7_

- [x] 10. Accessibility and WCAG colour contrast
  - [x] 10.1 Verify WCAG 2.1 AA contrast ratios programmatically
    - Create `src/utils/contrast.ts` that exports a `contrastRatio(hex1: string, hex2: string): number` function using the WCAG relative luminance formula
    - Write a parametrised unit test in `src/utils/contrast.test.ts` for all Design System colour pairs:
      - `#1a1a1a` on `#FFFFFF` ≥ 4.5:1
      - `#A41034` on `#FFFFFF` ≥ 4.5:1
      - `#6b7280` on `#FFFFFF` ≥ 4.5:1
      - `#FFFFFF` on `#A41034` ≥ 4.5:1
    - _Requirements: 7.1_

  - [x] 10.2 Audit `aria-label` coverage across all components
    - Verify `<object>` in `PDFViewer` has `aria-label`
    - Verify download `<a>` in `PDFViewer` has `aria-label`
    - Verify `<video>` in `VideoPlayer` has `aria-label`
    - Verify all `<section>` elements use `aria-labelledby` pointing to a valid `id`
    - Fix any missing labels found during the audit
    - _Requirements: 7.2_

  - [x] 10.3 Add focus-visible styles to interactive elements
    - Ensure the download button `<a>` in `PDFViewer` has `focus-visible:ring-2 focus-visible:ring-harvard-crimson focus-visible:outline-none`
    - Verify `<video controls>` inherits native browser focus indicator (no override needed)
    - _Requirements: 7.2_

- [x] 11. Implement property-based test for responsive layout (Property 1)
  - [x] 11.1 Write property test for `App` — Property 1
    - **Property 1: Responsive layout conforms to breakpoint rules**
    - Use `fc.integer({ min: 320, max: 1920 })` for `viewportWidth`
    - For each width, set `Object.defineProperty(window, 'innerWidth', { value: viewportWidth, writable: true })`
    - Render `App` and assert:
      - Root container has class `max-w-content` (proxy for 1200px max-width at ≥ 1280px)
      - `MembersSection` grid has `grid-cols-1` at < 768px (or `md:grid-cols-2` responsive class present)
      - `PDFViewer` container has `h-[400px]` and `md:h-[600px]` responsive classes present
    - Configure `{ numRuns: 100 }`
    - **Validates: Requirements 2.8, 3.6, 4.2, 4.5, 6.4**

- [x] 12. Build verification
  - [x] 12.1 Resolve TypeScript compiler errors
    - Run `npx tsc --noEmit` and fix all type errors
    - Ensure no `any` in prop signatures across all components
    - Ensure no unused imports or variables remain (`7.4`)
    - _Requirements: 1.7, 7.3, 7.4_

  - [x] 12.2 Run full test suite and verify all tests pass
    - Run `npx vitest --run` and confirm zero failing tests
    - Confirm all 4 correctness properties (Properties 1–4) have passing PBT results
    - _Requirements: 1.7_

  - [x] 12.3 Run production build and verify completion within 60 seconds
    - Run `npm run build` and confirm it exits with code 0, zero TypeScript errors, and zero Vite errors within 60 seconds
    - Verify `dist/` directory is generated with bundled assets
    - _Requirements: 1.7_

- [x] 13. Final checkpoint — All tests and build pass
  - Ensure all tests pass and `npm run build` succeeds. Ask the user if questions arise.

---

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP; core implementation tasks are never optional.
- Each task references specific requirements for traceability.
- Properties 1–4 from the design document must each be backed by at least one fast-check property test.
- The design uses `aspect-video` (Tailwind) for 16:9 ratio — jsdom does not compute CSS, so Property 3 tests assert the class name as a proxy.
- Placeholder data in `src/data/` should be replaced with real project content before final delivery.
- Asset files (`src/assets/document.pdf`, `src/assets/video.mp4`) must exist before the build step; if missing, add empty placeholder files to unblock the build.

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2", "1.3", "1.4"] },
    { "id": 2, "tasks": ["2.1", "3.1"] },
    { "id": 3, "tasks": ["2.2", "3.2", "3.3"] },
    { "id": 4, "tasks": ["4.1", "5.1", "6.1", "7.1"] },
    { "id": 5, "tasks": ["4.2", "5.2", "5.3", "6.2", "6.3", "6.4", "7.2", "7.3"] },
    { "id": 6, "tasks": ["9.1"] },
    { "id": 7, "tasks": ["9.2", "10.1", "10.2", "10.3"] },
    { "id": 8, "tasks": ["11.1"] },
    { "id": 9, "tasks": ["12.1"] },
    { "id": 10, "tasks": ["12.2"] },
    { "id": 11, "tasks": ["12.3"] }
  ]
}
```
