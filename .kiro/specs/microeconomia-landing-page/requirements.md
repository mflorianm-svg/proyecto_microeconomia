# Requirements Document

## Introduction

Landing page estática de una sola página para el proyecto universitario de Microeconomía. La aplicación es construida con React + Vite y TypeScript, estilizada con Tailwind CSS siguiendo una línea de diseño académica inspirada en la identidad visual de Harvard (colores granate/oscuros, tipografía serif, layout limpio). La página incluye cuatro secciones principales: información del tema, visualizador de PDF con descarga, reproductor de video explicativo e integrantes del grupo. Cada sección es un componente independiente con sus propios estilos en Tailwind, siguiendo las mejores prácticas de React moderno.

## Glossary

- **Landing_Page**: La aplicación web de una sola página que contiene todas las secciones del proyecto universitario.
- **PDF_Viewer**: El componente encargado de renderizar y permitir la navegación de un archivo PDF almacenado en la carpeta `assets`.
- **Video_Player**: El componente encargado de reproducir el video explicativo almacenado en la carpeta `assets`.
- **Hero_Section**: La sección inicial de la página que presenta el tema del proyecto, el nombre de la asignatura y el contexto académico.
- **Members_Section**: La sección que presenta los nombres y apellidos de los integrantes del grupo.
- **Design_System**: El conjunto de tokens de diseño (colores, tipografía, espaciado) definidos en la configuración de Tailwind CSS, inspirados en la identidad visual de Harvard.
- **Asset**: Cualquier archivo estático (PDF o video) almacenado en la carpeta `src/assets` del proyecto.
- **Component**: Un módulo de React con TypeScript ubicado en su propia carpeta dentro de `src/components`, con sus estilos aplicados mediante clases de Tailwind CSS.

---

## Requirements

### Requirement 1: Estructura del Proyecto

**User Story:** As a estudiante universitario, I want a project structured with React + Vite + TypeScript following modern best practices, so that the code is maintainable, readable, and scalable.

#### Acceptance Criteria

1. THE Landing_Page SHALL be bootstrapped with Vite using the React + TypeScript template, producing a project that compiles without errors when running the build command.
2. THE Landing_Page SHALL use Tailwind CSS v3 or later as the sole styling mechanism, such that no inline `style` attributes, CSS modules, or external CSS files other than the Tailwind base import are present in any component file.
3. THE Landing_Page SHALL organize each visual section as an independent Component inside `src/components/{ComponentName}/index.tsx`, where each file exports exactly one default React component matching the directory name.
4. THE Landing_Page SHALL define all Design_System tokens (colors, typography scale, and spacing scale) inside `tailwind.config.ts` under the `theme.extend` key, such that no hardcoded color values, font sizes, or spacing values appear outside of that configuration file.
5. THE Landing_Page SHALL export a single root `App.tsx` that composes all Components in the correct section order, where "correct order" is defined by the visual top-to-bottom sequence: Hero → PDF Viewer → Video Player → Members.
6. THE Landing_Page SHALL include only production dependencies required for rendering, such that `package.json` contains no packages that are not directly imported by at least one source file in the project.
7. WHEN the build command is executed, THE Landing_Page SHALL complete the production build in 60 seconds or less and produce zero TypeScript compiler errors and zero Vite build errors.

---

### Requirement 2: Diseño e Identidad Visual (Design System)

**User Story:** As a estudiante universitario, I want the page to follow a sober academic visual style inspired by Harvard's design, so that the presentation conveys seriousness and professionalism appropriate for a university project.

#### Acceptance Criteria

1. THE Design_System SHALL define a primary color token with value `#A41034` (granate Harvard) used as the main brand accent across all Components.
2. THE Design_System SHALL define a background color of `#FFFFFF` (white) for the page body.
3. THE Design_System SHALL define a dark neutral color (`#1a1a1a` or similar near-black) for primary text.
4. THE Design_System SHALL define a serif font family (e.g., `Georgia`, `Playfair Display`, or `EB Garamond`) for headings.
5. THE Design_System SHALL define a sans-serif font family (e.g., `Inter` or `Source Sans 3`) for body text and captions.
6. THE Design_System SHALL define a discrete spacing token set (4px, 8px, 16px, 24px, 32px, 48px, 64px) such that no arbitrary spacing values appear in any Component file outside of `tailwind.config.ts`.
7. WHEN a section boundary is rendered, THE Landing_Page SHALL display a 1px solid horizontal separator using a neutral palette color between sections.
8. THE Landing_Page SHALL be fully responsive: at 375px viewport width all content SHALL be arranged in a single column; at 768px viewport width content SHALL support a two-column layout where applicable; at 1280px and above the main content container SHALL be centered with a maximum width of 1200px.

---

### Requirement 3: Sección Hero — Información del Tema

**User Story:** As a visitante de la página, I want to see a clear presentation of the project topic and academic context, so that I can immediately understand what the project is about.

#### Acceptance Criteria

1. THE Hero_Section SHALL display the subject name ("Microeconomía") as the primary h1-level heading using the serif font defined in Design_System.
2. THE Hero_Section SHALL display the specific project topic as an h2-level secondary heading below the subject name.
3. THE Hero_Section SHALL display a descriptive paragraph of no more than 100 words introducing the topic, rendered in the body sans-serif font defined in Design_System.
4. THE Hero_Section SHALL display the institution name and the current academic period as supplementary metadata in a smaller font size below the descriptive paragraph.
5. THE Hero_Section SHALL include at least one visible accent element styled with the primary granate color token defined in Design_System (e.g., a left border, top bar, or underline).
6. WHEN the viewport width is less than 768px, THE Hero_Section SHALL stack all text elements vertically with a minimum horizontal padding of 16px on each side.

---

### Requirement 4: Visualizador de PDF con Descarga

**User Story:** As a visitante de la página, I want to view the project document directly on the page and download it, so that I can read the full content without leaving the site.

#### Acceptance Criteria

1. THE PDF_Viewer SHALL embed the PDF document as a viewable element within the page, enabling the visitor to read its content without navigating away.
2. THE PDF_Viewer SHALL display the embedded viewer at a minimum height of 600px on viewport widths of 768px or greater.
3. THE PDF_Viewer SHALL display a visually distinct "Descargar PDF" button that triggers a browser file download of the PDF document; the button SHALL use the primary granate color token as its background or border color.
4. IF the PDF document fails to load, THE PDF_Viewer SHALL display visible text within the viewer area indicating the file could not be loaded and instructing the visitor to use the download button instead.
5. WHEN the viewport width is less than 768px, THE PDF_Viewer SHALL reduce the embedded viewer height to 400px and the download button SHALL have a minimum tap target size of 44×44px with no horizontal overflow beyond the viewport edge.
6. THE PDF_Viewer SHALL include an `aria-label` on the embedded viewer element that names the document being displayed, and the download button SHALL include an `aria-label` identifying its action and target document.

---

### Requirement 5: Reproductor de Video

**User Story:** As a visitante de la página, I want to watch an explanatory video of the topic directly on the page, so that I can get a multimedia understanding of the project's subject.

#### Acceptance Criteria

1. THE Video_Player SHALL embed the video as a playable element with native browser controls enabled.
2. THE Video_Player SHALL display the video at a 16:9 aspect ratio across all viewport widths from 320px to 1920px.
3. THE Video_Player SHALL NOT autoplay the video on page load.
4. THE Video_Player SHALL display an h2-level section heading above the player identifying it as the explanatory video of the topic, rendered in the serif font defined in the project's Design_System.
5. THE Video_Player SHALL include an `aria-label` attribute on the video element whose value identifies it as the explanatory video of the topic.
6. IF the video asset fails to load, THEN THE Video_Player SHALL display visible text within the video element area indicating that the video is unavailable.

---

### Requirement 6: Sección de Integrantes del Grupo

**User Story:** As a visitante de la página, I want to see who the members of the group are, so that I can identify the authors of the project.

#### Acceptance Criteria

1. THE Members_Section SHALL display an h2-level section heading ("Integrantes del Grupo") using the serif font defined in Design_System.
2. THE Members_Section SHALL render each group member's full name (first and last name) as an individual card or list item.
3. THE Members_Section SHALL accept member data as a typed TypeScript array with at minimum a `name` field of type `string`, supporting between 1 and 20 members.
4. WHEN the viewport width is 768px or greater, THE Members_Section SHALL arrange the member cards in a two-column grid; WHEN the viewport width is less than 768px, the cards SHALL be arranged in a single column.
5. THE Members_Section SHALL apply the primary granate color as an accent on each member card using either a top border of at least 3px width or a filled avatar background area; the same treatment SHALL be applied consistently to all cards.

---

### Requirement 7: Accesibilidad y Calidad del Código

**User Story:** As a developer reviewing the project, I want the code to follow accessibility and code quality standards, so that the project demonstrates professional development practices.

#### Acceptance Criteria

1. THE Landing_Page SHALL meet WCAG 2.1 AA color contrast requirements: normal-size text SHALL achieve a contrast ratio of at least 4.5:1 against its background, and large text (18px bold or 24px regular) SHALL achieve at least 3:1 against its background, for all background colors used in the project.
2. THE Landing_Page SHALL include a non-empty `alt` attribute on all `<img>` elements; decorative images SHALL use `alt=""`, and all other images SHALL use alt text that identifies the image's purpose; `aria-label` attributes SHALL be present on interactive and embedded elements that lack a visible text label identifying their purpose.
3. THE Landing_Page SHALL define TypeScript interfaces or types for all Component props; no `any` types are permitted in component prop signatures.
4. THE Landing_Page SHALL have no unused imports, variables, or dead code in any Component file.
5. IF a Component requires data configuration (e.g., member list, topic title), THE Landing_Page SHALL define that data in a dedicated `src/data/` file rather than inline in JSX.
