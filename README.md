# shadcnmiju

A curated collection of beautiful, interactive component variants built with [shadcn/ui](https://ui.shadcn.com/), [Next.js](https://nextjs.org), and [Tailwind CSS](https://tailwindcss.com). Discover and copy ready-to-use UI components with multiple style variations for your projects.

## Features

- **200+ Component Variants** - Extensive collection of pre-built component variations
- **40+ Component Types** - Buttons, cards, forms, data tables, charts, and more
- **Interactive Previews** - Live component demonstrations with real-time interactions
- **Copy & Paste Ready** - One-click code copying with syntax highlighting
- **Fully Responsive** - All components tested across mobile, tablet, and desktop
- **Dark Mode Support** - Seamless theme switching with next-themes
- **TypeScript First** - Fully typed components for better DX
- **Accessible** - Built following WAI-ARIA best practices
- **3D & Animated Effects** - Advanced components with GSAP and CSS 3D transforms

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Components**: [shadcn/ui](https://ui.shadcn.com)
- **UI Libraries**: [Radix UI](https://radix-ui.com), [Aceternity UI](https://ui.aceternity.com)
- **Animation**: [Motion](https://motion.dev), [GSAP](https://gsap.com)
- **State Management**: [Jotai](https://jotai.org)
- **Form Handling**: [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev)
- **Code Highlighting**: [Shiki](https://shiki.style)
- **Language**: [TypeScript](https://www.typescriptlang.org)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/shadcnmiju.git
cd shadcnmiju
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Run the development server:

```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
shadcnmiju/
├── src/
│   ├── app/                      # Next.js app router
│   │   ├── (main)/              # Pages with layout (navbar, footer)
│   │   │   ├── page.tsx         # Homepage
│   │   │   ├── docs/            # Documentation pages
│   │   │   └── components/      # Component showcase pages
│   │   └── (preview)/           # Clean preview pages (no layout)
│   ├── components/
│   │   ├── ui/                  # Base shadcn/ui components
│   │   ├── showcase/            # Component variant implementations
│   │   ├── layout/              # Navbar, Footer, HeroSection
│   │   └── aceternity/          # Aceternity UI components
│   ├── data/
│   │   ├── componentPreviews.tsx  # Component registry
│   │   └── newComponents.tsx      # New component additions
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility functions
│   ├── stores/                  # Jotai state stores
│   ├── types/                   # TypeScript types
│   └── constants/               # App constants
├── public/                      # Static assets
│   └── assets/                  # Images, icons
├── scripts/                     # Utility scripts
│   ├── add-new-components.js    # Add new components
│   ├── fix-portal-components.js # Fix portal issues
│   └── sort-components.js       # Sort component list
└── docs/                        # Documentation files
    ├── COMPONENT_VARIANTS_GUIDE.md
    ├── COMPONENTS_LIST.md
    └── CONTRIBUTING.md
```

## Component Categories

- **Buttons** - Primary, secondary, outline, ghost, magnetic, 3D effects
- **Cards** - Product cards, 3D cards, draggable cards, comet effects
- **Forms** - Inputs, textareas, selects, checkboxes, radio groups, 3D forms
- **Data Display** - Tables, charts (area, bar, line, pie, radar), badges
- **Navigation** - Menus, breadcrumbs, pagination, tabs, sidebars
- **Feedback** - Alerts, dialogs, drawers, tooltips, toasts, progress
- **Overlays** - Modals, popovers, dropdown menus, context menus
- **Calendars & Dates** - Date pickers, calendars, birthdate selectors
- **Advanced** - Carousels (2D & 3D), resizable panels, scroll areas

## Usage

### Browse Components

Visit the homepage and browse through categorized components. Each component card shows:

- Component name and description
- Visual preview
- Installation command
- Link to detailed variants

### Copy Component Code

1. Navigate to a component page (e.g., `/components/button-variants`)
2. Choose your preferred variant
3. Click the "Copy Code" button
4. Paste into your project

### Install Dependencies

Most components require base shadcn/ui components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
# ... etc
```

Installation commands are provided for each component.

## Scripts

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint

# Utilities
pnpm export-themes    # Extract theme configurations
node scripts/add-new-components.js      # Add new components to registry
node scripts/sort-components.js         # Sort component alphabetically
node scripts/fix-portal-components.js   # Fix Radix portal issues
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on:

- Setting up your development environment
- Creating new component variants
- Submitting pull requests
- Code style guidelines

### Quick Contribution Steps

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/new-component`
3. Add your component in `src/components/showcase/[type]/`
4. Register it in `src/data/componentPreviews.tsx`
5. Test locally and ensure responsive design
6. Submit a pull request

## Documentation

- [Component Variants Guide](COMPONENT_VARIANTS_GUIDE.md) - How to create component variants
- [Components List](COMPONENTS_LIST.md) - Complete list of all components
- [Contributing Guide](CONTRIBUTING.md) - Contribution guidelines

## Customization

### Theme Configuration

The project uses CSS variables for theming. Customize in `src/app/globals.css`:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    /* ... more variables */
  }
}
```

### Adding New Components

See the [Component Variants Guide](COMPONENT_VARIANTS_GUIDE.md) for detailed instructions.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) - For the amazing component library
- [Radix UI](https://radix-ui.com) - For accessible component primitives
- [Aceternity UI](https://ui.aceternity.com) - For beautiful animated components
- [Tailwind CSS](https://tailwindcss.com) - For utility-first CSS framework

## Links

- [Live Demo](#) - Coming soon
- [Documentation](./COMPONENT_VARIANTS_GUIDE.md)
- [Report Bug](https://github.com/YOUR_USERNAME/shadcnmiju/issues)
- [Request Feature](https://github.com/YOUR_USERNAME/shadcnmiju/issues)

## Support

If you find this project helpful, please consider giving it a star on GitHub!
