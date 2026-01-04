# Contributing to shadcnmiju

Thank you for your interest in contributing to shadcnmiju! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [How to Contribute](#how-to-contribute)
- [Creating Components](#creating-components)
- [Pull Request Process](#pull-request-process)
- [Style Guide](#style-guide)

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm
- Git

### Development Setup

1. **Fork the repository**

   Click the "Fork" button on GitHub to create your own copy.

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/shadcnmiju.git
   cd shadcnmiju
   ```

3. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

4. **Start the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
shadcnmiju/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── (main)/            # Main layout pages (with navbar/footer)
│   │   └── (preview)/         # Preview pages (clean, no navbar)
│   ├── components/
│   │   ├── ui/                # Base shadcn/ui components
│   │   ├── showcase/          # Component variants for display
│   │   ├── layout/            # Layout components (Navbar, Footer)
│   │   └── aceternity/        # Aceternity UI components
│   ├── data/
│   │   └── componentPreviews.tsx  # Component registry
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions
│   ├── stores/                # State management (Jotai)
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
└── scripts/                   # Build/utility scripts
```

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/shadcnmiju/issues)
2. If not, create a new issue with:
   - Clear, descriptive title
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser/OS information

### Suggesting Features

1. Check existing [Issues](https://github.com/shadcnmiju/issues) for similar suggestions
2. Create a new issue with the "enhancement" label
3. Describe the feature and its use case

### Contributing Code

1. Find an issue to work on or create one
2. Comment on the issue to let others know you're working on it
3. Fork and create a branch
4. Make your changes
5. Submit a pull request

## Creating Components

### Adding a New Component Variant

1. **Create the component file**

   ```bash
   # Create in the appropriate showcase folder
   src/components/showcase/[component-type]/[variant-name].tsx
   ```

2. **Component template**

   ```tsx
   "use client";

   import { ComponentName } from "@/components/ui/component-name";

   export default function VariantName() {
     return (
       <div className="flex items-center justify-center p-4 sm:p-6 md:p-8 w-full">
         {/* Your component implementation */}
       </div>
     );
   }
   ```

3. **Register in componentPreviews.tsx**

   ```tsx
   {
     id: "variant-name",
     name: "Variant Name",
     description: "Brief description of the variant",
     code: "", // Will be auto-populated
     installCommand: "npx shadcn@latest add component-name",
   }
   ```

### Component Guidelines

- **Use "use client"** for components with React hooks (useState, useEffect, etc.)
- **Make it responsive** - Test on mobile, tablet, and desktop
- **Follow accessibility best practices** - Use proper ARIA attributes
- **Keep it self-contained** - Minimize external dependencies
- **Use Tailwind CSS** - Follow existing styling patterns

## Pull Request Process

1. **Create a branch**

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes**

   - Write clean, readable code
   - Add comments for complex logic
   - Test your changes locally

3. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: add new button variant"
   ```

   Follow [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation changes
   - `style:` Code style changes (formatting)
   - `refactor:` Code refactoring
   - `test:` Adding tests
   - `chore:` Maintenance tasks

4. **Push and create PR**

   ```bash
   git push origin feature/your-feature-name
   ```

   Then create a Pull Request on GitHub.

5. **PR Requirements**

   - Clear description of changes
   - Screenshots for UI changes
   - All checks passing
   - At least one approving review

## Style Guide

### TypeScript

- Use TypeScript for all new code
- Define proper types/interfaces
- Avoid `any` type when possible

### React

- Use functional components
- Use React hooks appropriately
- Keep components small and focused

### Tailwind CSS

- Use Tailwind utility classes
- Follow mobile-first responsive design
- Use CSS variables for theming (defined in globals.css)

### File Naming

- Components: `PascalCase.tsx` (e.g., `ButtonPrimary.tsx`)
- Utilities: `kebab-case.ts` (e.g., `format-date.ts`)
- Hooks: `use-hook-name.ts` (e.g., `use-mobile.ts`)

### Code Formatting

- Use Prettier for formatting
- 2 spaces for indentation
- No semicolons (project preference)
- Single quotes for strings

## Questions?

If you have questions, feel free to:

- Open a [Discussion](https://github.com/shadcnmiju/discussions)
- Create an [Issue](https://github.com/shadcnmiju/issues)

Thank you for contributing!
