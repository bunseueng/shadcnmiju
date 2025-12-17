# shadcnmiju

Beautiful, reusable React components built with Tailwind CSS and shadcn/ui. Free and open source.

## Project Overview

A free component showcase website where developers can browse and copy React + Tailwind components. This is a learning project to master modern web development fundamentals.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Language:** TypeScript
- **Icons:** Lucide React
- **Deployment:** Vercel (planned)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
shadcnmiju/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── page.tsx           # Landing page
│   │   ├── layout.tsx         # Root layout
│   │   └── components/        # Components browse page (TODO)
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── layout/            # Layout components (Navbar, Footer)
│   │   ├── home/              # Home page components (TODO)
│   │   └── showcase/          # Component showcase components (TODO)
│   ├── data/
│   │   └── components.json    # Component data
│   └── lib/
│       └── utils.ts           # Utility functions
└── public/
    └── previews/              # Component preview images
```

---

## Development Roadmap

### ✅ Phase 1: Setup & Foundation (COMPLETED)

**Goal:** Get the project running with basic layout

- [x] Create Next.js project with TypeScript
- [x] Install and configure shadcn/ui
- [x] Setup Tailwind CSS configuration
- [x] Create basic folder structure
- [x] Build Navbar component
- [x] Build Footer component
- [x] Create landing page with hero, stats, and features sections

---

### 📋 Phase 2: Landing Page Enhancement (Week 1)

**Goal:** Polish the home page

- [ ] Add smooth scroll animations
- [ ] Create "How it Works" section
- [ ] Add CTA section at bottom
- [ ] Ensure fully responsive design
- [ ] Test on mobile, tablet, desktop

**Estimated Time:** 2-3 days

---

### 📋 Phase 3: Component Data & Preview (Week 2)

**Goal:** Display components in a browsable format

#### 3.1: Data Structure

- [ ] Define component data schema in `components.json`
- [ ] Create 5 sample components:
  - [ ] Hero section (gradient)
  - [ ] Pricing table
  - [ ] Testimonials card
  - [ ] Contact form
  - [ ] Feature grid

#### 3.2: Browse Page

- [ ] Create `/components` route
- [ ] Build ComponentCard component
- [ ] Display components in responsive grid
- [ ] Add "Copy Code" button functionality

**Estimated Time:** 3-4 days

---

### 📋 Phase 4: Category Filtering (Week 2)

**Goal:** Let users filter components by category

- [ ] Create category filter UI
- [ ] Implement filter logic (useState)
- [ ] Add "All" category option
- [ ] Show active category state
- [ ] Add component count per category

**Categories:**

- Hero
- Pricing
- Forms
- Testimonials
- Features
- CTA

**Estimated Time:** 2-3 days

---

### 📋 Phase 5: Individual Component Pages (Week 3)

**Goal:** Each component gets its own detail page

- [ ] Create dynamic route `/components/[slug]`
- [ ] Build ComponentPreview component with live preview
- [ ] Add syntax highlighting (install `react-syntax-highlighter`)
- [ ] Implement "View Code" toggle
- [ ] Add copy-to-clipboard functionality
- [ ] Show component metadata (category, description, tags)
- [ ] Add "Related Components" section

**Estimated Time:** 3-4 days

---

### 📋 Phase 6: Search & Polish (Week 3-4)

**Goal:** Make components searchable and polish UX

#### 6.1: Search Functionality

- [ ] Add search input to `/components` page
- [ ] Implement search logic (filter by name/description)
- [ ] Show "No results" state
- [ ] Add search result count

#### 6.2: More Components

- [ ] Add 10 more components (total 15-20)
  - [ ] 2 more hero variants
  - [ ] Newsletter signup
  - [ ] FAQ accordion
  - [ ] Stats section
  - [ ] Team grid
  - [ ] Blog card
  - [ ] Auth forms (login/signup)
  - [ ] 404 page
  - [ ] Loading states

#### 6.3: Polish

- [ ] Add loading states
- [ ] Improve animations/transitions
- [ ] Add toast notifications for copy actions
- [ ] Optimize images
- [ ] Test accessibility (keyboard navigation, screen readers)
- [ ] Fix any bugs

**Estimated Time:** 4-5 days

---

### 📋 Phase 7: Deploy (Week 4)

**Goal:** Ship it to production

- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Connect to Vercel
- [ ] Deploy to production
- [ ] Test production build
- [ ] Setup custom domain (optional)
- [ ] Share on social media / with friends

**Estimated Time:** 1 day

---

## Future Enhancements (After MVP)

### Phase 8: Advanced Features

- [ ] Dark mode toggle
- [ ] Component customization tool (change colors in browser)
- [ ] Export as code or download zip
- [ ] Code playground (live editing)
- [ ] Bookmark favorite components (localStorage)

### Phase 9: Content Growth

- [ ] Add 50+ total components
- [ ] Add templates section (full page layouts)
- [ ] Create documentation pages
- [ ] Add blog section (tutorials)

### Phase 10: Community

- [ ] GitHub contribution guidelines
- [ ] Accept community component submissions
- [ ] Add component ratings/likes
- [ ] Add comments/discussions

---

## Learning Goals

By completing this project, you will learn:

- ✅ Next.js 15 App Router
- ✅ Tailwind CSS v4
- ✅ TypeScript
- ✅ Component architecture
- 📋 State management (filtering, search)
- 📋 Dynamic routing
- 📋 JSON data management
- 📋 Responsive design
- 📋 Deployment to Vercel

---

## Commands

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

---

## Notes

- Keep components simple and beginner-friendly
- Focus on completing MVP before adding advanced features
- Document your learnings as you go
- Don't over-engineer - simple is better
- Ask for help when stuck

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [React Documentation](https://react.dev)

---

## License

MIT License - Feel free to use this for learning and inspiration!
