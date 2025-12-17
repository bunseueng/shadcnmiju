# UI Components Library Guide

This document outlines **reusable UI components** (like shadcn/ui) that you can build for your component library. These are the **building blocks** that other components use.

---

## Two Types of Components

### 1. **UI Components** (This File)
Basic, reusable building blocks like Button, Input, Card, etc.
- Used BY other components
- Highly reusable
- Style-focused
- Examples: Button, Input, Badge, Avatar

### 2. **Section Components** (COMPONENTS_LIST.md)
Complete page sections like Hero, Pricing, Features, etc.
- USE the UI components
- Content-focused
- Page building blocks
- Examples: Hero sections, Pricing tables, Forms

---

## Already Installed from shadcn/ui

You already have these UI components installed:

- ✅ **Button** - Clickable buttons with variants
- ✅ **Card** - Container with header, content, footer
- ✅ **Input** - Text input fields
- ✅ **Badge** - Small labels and tags

---

## Recommended UI Components to Add

Here's a list of essential shadcn/ui components you should install for building your section components:

### Priority 1: Essential (Install First)

#### 1. **Accordion**
```bash
npx shadcn@latest add accordion
```
**Used for:** FAQ sections, collapsible content
**Where you'll use it:** FAQ Accordion component (#24)

---

#### 2. **Avatar**
```bash
npx shadcn@latest add avatar
```
**Used for:** Profile images, testimonials
**Where you'll use it:** Testimonials, Team Grid, Blog Cards

---

#### 3. **Tabs**
```bash
npx shadcn@latest add tabs
```
**Used for:** Feature switching, content organization
**Where you'll use it:** Features Tabs component (#16)

---

#### 4. **Textarea**
```bash
npx shadcn@latest add textarea
```
**Used for:** Contact forms, comment sections
**Where you'll use it:** Contact forms (#12, #13)

---

#### 5. **Label**
```bash
npx shadcn@latest add label
```
**Used for:** Form field labels
**Where you'll use it:** All form components

---

#### 6. **Checkbox**
```bash
npx shadcn@latest add checkbox
```
**Used for:** Terms acceptance, feature lists
**Where you'll use it:** Auth forms, pricing tables

---

#### 7. **Separator**
```bash
npx shadcn@latest add separator
```
**Used for:** Visual dividers between content
**Where you'll use it:** Multiple sections, footers

---

### Priority 2: Enhanced Features

#### 8. **Dialog**
```bash
npx shadcn@latest add dialog
```
**Used for:** Modals, popups, confirmations
**Use cases:** Image previews, video players, confirmations

---

#### 9. **Tooltip**
```bash
npx shadcn@latest add tooltip
```
**Used for:** Hover information, help text
**Use cases:** Feature explanations, icon labels

---

#### 10. **Select**
```bash
npx shadcn@latest add select
```
**Used for:** Dropdown selections
**Use cases:** Form fields, filters, language switchers

---

#### 11. **Switch**
```bash
npx shadcn@latest add switch
```
**Used for:** Toggle controls
**Use cases:** Pricing toggle (monthly/yearly), settings

---

#### 12. **Radio Group**
```bash
npx shadcn@latest add radio-group
```
**Used for:** Single choice selections
**Use cases:** Payment methods, plan selection

---

#### 13. **Carousel**
```bash
npx shadcn@latest add carousel
```
**Used for:** Image sliders, testimonials
**Where you'll use it:** Testimonials Carousel (#10)

---

### Priority 3: Advanced (Optional for MVP)

#### 14. **Popover**
```bash
npx shadcn@latest add popover
```
**Used for:** Dropdown content, menus
**Use cases:** User menus, notifications

---

#### 15. **Dropdown Menu**
```bash
npx shadcn@latest add dropdown-menu
```
**Used for:** Navigation menus, user actions
**Use cases:** Mobile menu, user profile menu

---

#### 16. **Alert**
```bash
npx shadcn@latest add alert
```
**Used for:** Important messages, warnings
**Use cases:** Error messages, success notifications

---

#### 17. **Toast**
```bash
npx shadcn@latest add toast
```
**Used for:** Temporary notifications
**Use cases:** "Copied to clipboard", success messages

---

#### 18. **Progress**
```bash
npx shadcn@latest add progress
```
**Used for:** Loading states, completion tracking
**Use cases:** Form progress, loading indicators

---

#### 19. **Skeleton**
```bash
npx shadcn@latest add skeleton
```
**Used for:** Loading placeholders
**Use cases:** Content loading states

---

#### 20. **Table**
```bash
npx shadcn@latest add table
```
**Used for:** Data tables, pricing comparisons
**Where you'll use it:** Pricing Comparison (#8)

---

## Installation Plan

### Phase 1: Install Essentials (Do This Now)
```bash
# Install all essential components at once
npx shadcn@latest add accordion avatar tabs textarea label checkbox separator
```

### Phase 2: Install Enhanced (When Building Advanced Features)
```bash
npx shadcn@latest add dialog tooltip select switch radio-group carousel
```

### Phase 3: Install Advanced (Polish Phase)
```bash
npx shadcn@latest add popover dropdown-menu alert toast progress skeleton table
```

---

## Component Mapping

Here's which UI components you'll need for each section component:

### Hero Sections (#1-5)
- Button ✅
- Badge ✅
- (Optional) Input for search hero

### Pricing Tables (#6-8)
- Card ✅
- Button ✅
- Badge ✅
- Switch (for toggle)
- Checkbox (for feature lists)
- Table (for comparison)

### Testimonials (#9-11)
- Card ✅
- Avatar
- Badge ✅
- Carousel (for carousel variant)

### Contact Forms (#12-13)
- Card ✅
- Input ✅
- Textarea
- Label
- Button ✅

### Feature Sections (#14-16)
- Card ✅
- Tabs (for tabs variant)
- Badge ✅

### CTA Sections (#17-19)
- Button ✅
- Input ✅ (for newsletter)
- Badge ✅

### Authentication (#20-21)
- Card ✅
- Input ✅
- Label
- Checkbox
- Button ✅
- Separator

### Content Sections (#22-25)
- Card ✅
- Avatar
- Accordion (for FAQ)
- Badge ✅

---

## Custom UI Components to Build

In addition to shadcn/ui components, you might want to create some custom ones:

### 1. **Icon Component**
```tsx
// src/components/ui/icon.tsx
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface IconProps {
  icon: LucideIcon
  className?: string
}

export function Icon({ icon: IconComponent, className }: IconProps) {
  return <IconComponent className={cn("h-5 w-5", className)} />
}
```

**Why:** Standardize icon sizes and styling
**Where:** Feature sections, contact info, team social links

---

### 2. **Section Wrapper**
```tsx
// src/components/ui/section.tsx
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "muted" | "primary"
}

export function Section({ children, className, variant = "default" }: SectionProps) {
  const variants = {
    default: "bg-background",
    muted: "bg-muted/50",
    primary: "bg-primary text-primary-foreground"
  }

  return (
    <section className={cn("py-24", variants[variant], className)}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}
```

**Why:** Consistent section spacing and styling
**Where:** All section components

---

### 3. **Copy Button**
```tsx
// src/components/ui/copy-button.tsx
"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "./button"

interface CopyButtonProps {
  text: string
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={copy}
      className="h-8 w-8 p-0"
    >
      {copied ? (
        <Check className="h-4 w-4" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </Button>
  )
}
```

**Why:** Core feature for code copying
**Where:** Component detail pages, code blocks

---

### 4. **Code Block**
```tsx
// src/components/ui/code-block.tsx
"use client"

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CopyButton } from "./copy-button"

interface CodeBlockProps {
  code: string
  language?: string
}

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  return (
    <div className="relative">
      <div className="absolute right-2 top-2">
        <CopyButton text={code} />
      </div>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        className="rounded-lg"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
```

**Why:** Display component code with syntax highlighting
**Where:** Component detail pages

**Installation needed:**
```bash
npm install react-syntax-highlighter
npm install -D @types/react-syntax-highlighter
```

---

## Icon Library Setup

### Install Lucide React Icons
```bash
npm install lucide-react
```

### Common Icons You'll Use
```tsx
import {
  Check,        // Checkmarks in feature lists
  X,           // Close buttons, feature not included
  Copy,        // Copy code button
  Search,      // Search bars
  Menu,        // Mobile menu
  ChevronDown, // Accordions, dropdowns
  ArrowRight,  // CTAs, navigation
  Mail,        // Contact, newsletter
  Phone,       // Contact info
  MapPin,      // Location
  Star,        // Ratings
  Github,      // Social links
  Twitter,     // Social links
  Linkedin,    // Social links
} from "lucide-react"
```

---

## Quick Start Command

Run this to install all essential UI components at once:

```bash
npx shadcn@latest add accordion avatar tabs textarea label checkbox separator
```

This gives you everything needed to start building the section components!

---

## Usage Example

Here's how section components use UI components:

```tsx
// Example: Contact Form using UI components
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="John Doe" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your message..." />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </CardContent>
    </Card>
  )
}
```

---

## Component Documentation

Each shadcn/ui component has excellent documentation:

- **Documentation:** https://ui.shadcn.com/docs/components
- **Examples:** Each component page has live examples
- **Customization:** Learn how to modify styles and behavior
- **Accessibility:** Built-in ARIA support

---

## Next Steps

1. ✅ Run the Phase 1 installation command
2. ✅ Read shadcn/ui docs for each component
3. ✅ Start building section components using these UI components
4. ✅ Create custom components (CopyButton, CodeBlock) when needed
5. ✅ Install Phase 2/3 components as you need them

---

## Summary

**UI Components = Building Blocks**
These are reusable, styled components that you combine to create section components.

**Section Components = Page Sections**
These are complete sections (Hero, Pricing, etc.) that USE the UI components.

**Your Workflow:**
1. Install UI components from shadcn/ui
2. Use them to build section components
3. Section components go in the showcase
4. Users copy section component code

Think of it like LEGO:
- **UI Components** = Individual LEGO bricks
- **Section Components** = Complete LEGO models (houses, cars, etc.)
- **Your Website** = LEGO instruction manual

Make sense? 🎨
