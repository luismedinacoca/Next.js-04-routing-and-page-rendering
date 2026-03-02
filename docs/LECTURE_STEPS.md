
## 🧳 Section 04 - *Routing & Page Rendering - Deep Dive*


<br>

## 🔧 136. Lesson 136 — *Project Setup, Overview & An Exercise!*

[🧳 Section 04: Routing & Page Rendering - Deep Dive](#section-04---routing--page-rendering---deep-dive)

### 📑 Table of Contents:
- [136. Lesson 136 — *Project Setup, Overview & An Exercise!*](#-136-lesson-136--project-setup-overview--an-exercise)
- [136.1 Context](#-1361-context)
- [136.2 Updating code/theory according the context](#-1362-updating-codetheory-according-the-context)
  - [136.2.1 Download Starting Project Template](#13621-download-starting-project-template)
  - [136.2.2 Install Dependencies](#13622-install-dependencies)
  - [136.2.3 Start Development Server](#13623-start-development-server)
- [136.3 Issues](#-1363-issues)
- [136.4 Pending Fixes (TODO)](#-1364-pending-fixes-todo)

### 🧠 136.1 Context:

This lesson establishes the foundational Next.js project used throughout **Section 04 — Routing & Page Rendering**. The starting template provides a minimal App Router setup with essential files and styling to build upon in subsequent lessons.

**Key Concepts:**
1. **App Router structure** — The project uses Next.js 14 App Router with `app/page.js` (home), `app/layout.js` (root layout), and `app/globals.css` for shared styles.
2. **File-based routing** — Pages map to the `app/` directory; `app/page.js` serves as the root `/` route.
3. **Project bootstrapping** — Installing dependencies and running the dev server prepares the workspace for exploring routing and rendering features.

**Advantages:**
- Minimal starting point reduces cognitive load when learning routing concepts
- Pre-configured `globals.css` with Merriweather/Inter fonts and dark theme styling
- Clear separation between layout (metadata, shell) and page content
- Standard npm scripts (`dev`, `build`, `start`, `lint`) for development workflow

**Disadvantages/Gotchas:**
- Template must be downloaded externally; no `create-next-app` used
- Path to zip may change if the course repository is updated
- `node_modules` must be installed manually after extracting the template

**When to Consider Alternatives:**
- Use `create-next-app` if starting a project from scratch without a course template
- Use `pnpm` or `yarn` instead of `npm` if your ecosystem prefers them (commands differ slightly)

---

### ⚙️ 136.2 Updating code/theory according the context:

#### **Summary**
- This section walks through getting the routing-rendering project running: obtaining the starting template, installing dependencies, and launching the dev server.
- Subsections 136.2.1–136.2.3 are sequential steps that build the working development environment.
- The goal is to have a local Next.js app ready for Section 04 exercises.

#### 136.2.1 Download Starting Project Template

**Subsection Summary**
- Provides the GitHub URL for the `01-starting-project.zip` from Maximilian Schwarzmüller's Next.js course resources.
- The template includes the baseline `app/` structure (`page.js`, `layout.js`, `globals.css`), `package.json` with Next.js 14, and `next.config.mjs`.
- Serves as the canonical starting point before any routing or rendering modifications.

* Template in here URL: [mschwarzmueller / nextjs-complete-guide-course-resources](https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources/blob/main/attachments/03-routing-rendering/01-starting-project.zip)


#### 136.2.2 Install Dependencies

**Subsection Summary**
- Installs project dependencies (React, React DOM, Next.js) into `node_modules`.
- Ensures the project has all required packages before running the dev server.
- Uses `npm i` as the standard npm install command for the course.

* Update `node_modules` folder

```bash
npm i
```

#### 136.2.3 Start Development Server

**Subsection Summary**
- Starts the Next.js development server with hot reloading via `npm run dev`.
- The app runs locally (typically at `http://localhost:3000`) and displays the "Next.js Routing & Page Rendering" homepage.
- The screenshot illustrates the running app with the dark-themed welcome page.

* Open the app:

```bash
npm run dev
```

![app](../img/section04-lecture136-001.png)


### 🐞 136.3 Issues:

- Documentation typo: Section header uses "Rendenring" instead of "Rendering".
- Missing image asset: `docs/../img/section04-lecture136-001.png` may not exist; the reference breaks if the `img` folder or file is absent.
- Placeholder issue text "first issue: something.." was non-actionable and has been replaced with concrete items.

| Issue | Status | Log/Error |
|---|---|---|
| Section title typo "Rendenring" | ✅ Fixed | `docs/LECTURE_STEPS.md:3` — Corrected to "Rendering" |
| Missing screenshot `section04-lecture136-001.png` | ⚠️ Identified | `img/section04-lecture136-001.png` — Image path referenced but asset may be missing |
| Placeholder issue text | ✅ Fixed | Replaced with real issues |

### 🧱 136.4 Pending Fixes (TODO)

- [ ] Add `img/section04-lecture136-001.png` screenshot of the app running at `localhost:3000` (or update path if image lives elsewhere)
- [ ] Ensure `img/` directory exists under project root and is committed if using version control

[↑ top — 136. Lesson 136 — *Project Setup, Overview & An Exercise!*](#-136-lesson-136--project-setup-overview--an-exercise)

























---

<br>
<br>
<br>

🔥 🔥 🔥 

<br>

## 🔧 XXX. Lesson XXX — *{{TITLE_NAME}}*

### 🧠 XXX.1 Context:

### ⚙️ XXX.2 Updating code/theory according the context:

#### XXX.2.1
```jsx
/*  */

```

#### XXX.2.2
```jsx
/*  */

```

#### XXX.2.3
```jsx
/*  */

```

#### XXX.2.4
```jsx
/*  */

```

### 🐞 XXX.3 Issues:

| Issue | Status | Log/Error |
|---|---|---|

### 🧱 XXX.4 Pending Fixes (TODO)

- [ ]
