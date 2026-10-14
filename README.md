# Parameshwari R — Professional Developer Portfolio

A production-quality developer portfolio website built for **Parameshwari R**, Computer Science and Engineering student at **Karpagam College of Engineering** (Class of 2027), aspiring Software Developer and Full-Stack Engineer.

![Portfolio Preview](./public/favicon.svg)

---

## ✨ Highlights & Features

- **Dark Charcoal Theme**: Modern software engineer aesthetic with charcoal/near-black backgrounds (`#06080D`), violet/indigo glow accents, glassmorphic cards, and clean typography (`Plus Jakarta Sans` & `JetBrains Mono`).
- **Authentic & Verified Content**: Real academic details, internships, projects, and skills without fabricated statistics or misleading percentage bars.
- **Interactive Project Showcase**:
  - Filterable by categories: `All`, `Full Stack`, `Web Development`, `Automation & Tools`.
  - Rich project cards with verified tech badges.
  - Interactive **Project Details Modal** detailing the problem solved, architectural implementation, confirmed features, and repository links.
- **Practical Experience Timeline**:
  - **Hudsmer Business Solutions**: Document accessibility testing, PDF/Word accessibility conversion, WCAG standards, and structural extraction automation.
  - **InternPe**: Core Java programming internship, OOP fundamentals, Guess-the-Number & Connect Four game development.
  - **AWS Hands-on Labs & Learning**: Cloud computing essentials, Auto-Healing, and Scaling Applications.
- **Categorized Technical Skills**: Programming languages, Web/MERN stack, database systems, cloud & tools, and core CS workflows.
- **Problem Solving & Campus Leadership**:
  - Direct LeetCode profile integration.
  - SDE Treasurer leadership at Karpagam College of Engineering.
- **Dedicated Resume Showcase**:
  - Direct link to official Google Drive resume with fallback and preview options.
- **Validated Contact System**:
  - Direct email: `paramesh.ravi11@gmail.com`
  - Instant One-Click "Copy Email" with visual confirmation.
  - Client-side validated contact form with real-time feedback and prefilled `mailto:` transmission fallback.
- **Accessibility & Performance**:
  - Semantic HTML5, accessible skip links, keyboard navigation, focus rings (`:focus-visible`), and `@media (prefers-reduced-motion)` support.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Vanilla CSS with modern custom properties, glassmorphism, and responsive clamp typography
- **Icons**: Lucide React + Custom SVG Brand Icons
- **Typography**: Plus Jakarta Sans (Headings/Body) + JetBrains Mono (Code/Metadata)

---

## 📁 Project Architecture

```
Portfolio/
├── public/
│   └── favicon.svg              # Custom gradient PR monogram favicon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky blurred navbar with mobile drawer & active scroll spy
│   │   ├── Hero.tsx             # Hero banner, authentic bio, working CTAs & photo placeholder
│   │   ├── About.tsx            # Academic background (KCE), degree milestones & core pillars
│   │   ├── Skills.tsx           # Categorized badges (Languages, MERN, Cloud, Databases)
│   │   ├── Experience.tsx       # Timeline cards for HBS, InternPe, and AWS Labs
│   │   ├── Projects.tsx         # Filterable project showcase
│   │   ├── ProjectModal.tsx     # Deep-dive interactive modal with problem statements & features
│   │   ├── Certifications.tsx   # Verified courseworks & hands-on labs
│   │   ├── CodingLeadership.tsx # LeetCode practice spotlight & SDE Treasurer leadership
│   │   ├── ResumeSection.tsx    # Dedicated resume card with Google Drive link
│   │   ├── Contact.tsx          # Contact card, email copy utility & validated form
│   │   ├── Footer.tsx           # Navigation links, copyright, and smooth back-to-top button
│   │   └── Icons.tsx            # Custom SVG GitHub and LinkedIn brand icons
│   ├── data/
│   │   └── portfolio.ts         # Centralized, single source of truth for all portfolio data
│   ├── types/
│   │   └── portfolio.ts         # TypeScript interfaces & types
│   ├── App.tsx                  # Root application wrapper with scroll-spy & ambient effects
│   ├── index.css                # Global CSS design system, color tokens & utilities
│   └── main.tsx                 # Application entry point
├── index.html                   # SEO metadata, Open Graph tags & Google Fonts
└── package.json
```

---

## 🚀 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### 3. Production Build & TypeScript Verification
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✏️ Updating Your Portfolio Information

All portfolio content is centralized in a single file:
**`src/data/portfolio.ts`**

You can easily update:
- Your bio, headline, and graduation details
- Add or remove skills and tags
- Add future projects or repositories
- Update resume links or contact information
- Add your personal phone number or profile photograph whenever ready
