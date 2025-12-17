# Component Build List

A comprehensive guide for building all components for shadcnmiju. Each component includes style guidelines, features, and implementation notes.

---

## Component Categories

1. [Hero Sections](#hero-sections) - 5 components
2. [Pricing Tables](#pricing-tables) - 3 components
3. [Testimonials](#testimonials) - 3 components
4. [Contact Forms](#contact-forms) - 2 components
5. [Feature Sections](#feature-sections) - 3 components
6. [CTA (Call-to-Action)](#cta-call-to-action) - 3 components
7. [Authentication](#authentication) - 2 components
8. [Content Sections](#content-sections) - 4 components

**Total:** 25 components

---

## Hero Sections

### 1. Hero - Gradient Background
**Category:** Hero
**Slug:** `hero-gradient`

**Style:**
- Full-width gradient background (purple-600 to blue-600)
- White text overlay
- Large heading (text-5xl md:text-7xl)
- Subheading with muted color
- Two CTA buttons (primary + secondary)
- Centered layout

**Features:**
- Responsive typography
- Button group with spacing
- Optional badge above heading

**Code Structure:**
```tsx
<section className="bg-linear-to-br from-purple-600 to-blue-600">
  <div className="container mx-auto px-4 py-32">
    <Badge />
    <h1>Heading</h1>
    <p>Description</p>
    <ButtonGroup />
  </div>
</section>
```

**Tags:** hero, gradient, cta, landing

---

### 2. Hero - Split Layout
**Category:** Hero
**Slug:** `hero-split`

**Style:**
- Two-column grid (left text, right image/illustration)
- White/light background
- Dark text
- Image with rounded corners and shadow
- Asymmetric layout (60/40 split)

**Features:**
- Responsive (stacks on mobile)
- Image placeholder or illustration
- Trust badges below CTA

**Code Structure:**
```tsx
<section className="bg-background">
  <div className="container mx-auto px-4 py-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>Content</div>
      <div>Image</div>
    </div>
  </div>
</section>
```

**Tags:** hero, split, image, landing

---

### 3. Hero - Minimal Center
**Category:** Hero
**Slug:** `hero-minimal`

**Style:**
- Simple centered text
- Maximum width constraint (max-w-4xl)
- Lots of white space
- Subtle border-bottom
- Minimalist typography

**Features:**
- Clean and professional
- Single CTA button
- Optional social proof line

**Code Structure:**
```tsx
<section className="border-b">
  <div className="container mx-auto px-4 py-40">
    <div className="max-w-4xl mx-auto text-center">
      <h1>Heading</h1>
      <p>Description</p>
      <Button />
    </div>
  </div>
</section>
```

**Tags:** hero, minimal, simple, clean

---

### 4. Hero - Video Background
**Category:** Hero
**Slug:** `hero-video`

**Style:**
- Video background or animated gradient
- Dark overlay for text readability
- White text with high contrast
- Centered content
- Large impactful typography

**Features:**
- Video element with autoplay loop
- Fallback gradient if no video
- Accessibility considerations

**Code Structure:**
```tsx
<section className="relative">
  <video autoPlay loop muted />
  <div className="absolute inset-0 bg-black/50">
    <div className="container mx-auto px-4 py-32">
      <Content />
    </div>
  </div>
</section>
```

**Tags:** hero, video, background, modern

---

### 5. Hero - With Search Bar
**Category:** Hero
**Slug:** `hero-search`

**Style:**
- Centered layout with prominent search bar
- Light gradient background
- Search input with icon
- Popular searches or categories below
- Clean and functional

**Features:**
- Large search input
- Search suggestions
- Category pills

**Code Structure:**
```tsx
<section className="bg-muted/30">
  <div className="container mx-auto px-4 py-24">
    <h1>Heading</h1>
    <SearchInput />
    <PopularSearches />
  </div>
</section>
```

**Tags:** hero, search, functional, saas

---

## Pricing Tables

### 6. Pricing - Three Tier
**Category:** Pricing
**Slug:** `pricing-three-tier`

**Style:**
- Three cards side by side
- Middle card highlighted/raised
- Card component from shadcn/ui
- Price in large text
- Feature list with checkmarks
- CTA button at bottom

**Features:**
- Popular badge on middle tier
- Hover animations
- Feature comparison

**Code Structure:**
```tsx
<section>
  <div className="container mx-auto px-4 py-24">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card>Starter</Card>
      <Card className="border-primary">Popular</Card>
      <Card>Enterprise</Card>
    </div>
  </div>
</section>
```

**Tags:** pricing, saas, table, cards

---

### 7. Pricing - Simple Toggle
**Category:** Pricing
**Slug:** `pricing-toggle`

**Style:**
- Monthly/Yearly toggle switch
- Two pricing cards
- Discount badge for yearly
- Smooth transition on toggle
- Clean layout

**Features:**
- Switch component
- Price animation on toggle
- Savings calculation

**Code Structure:**
```tsx
<section>
  <Toggle />
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <Card />
    <Card />
  </div>
</section>
```

**Tags:** pricing, toggle, billing, saas

---

### 8. Pricing - Comparison Table
**Category:** Pricing
**Slug:** `pricing-comparison`

**Style:**
- Full table layout
- Feature rows with checkmarks/X marks
- Sticky header
- Bordered table cells
- Zebra striping (alternating row colors)

**Features:**
- Detailed feature comparison
- Tooltips for features
- Mobile-friendly scroll

**Code Structure:**
```tsx
<section>
  <div className="overflow-x-auto">
    <table>
      <thead>Tiers</thead>
      <tbody>Features</tbody>
    </table>
  </div>
</section>
```

**Tags:** pricing, comparison, table, detailed

---

## Testimonials

### 9. Testimonials - Grid Cards
**Category:** Testimonials
**Slug:** `testimonials-grid`

**Style:**
- 3-column grid (2 on tablet, 1 on mobile)
- Card component for each testimonial
- Avatar image
- Name and title
- Star rating
- Quote text

**Features:**
- Hover effect on cards
- Avatar with rounded-full
- Company logos

**Code Structure:**
```tsx
<section>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card>
      <Avatar />
      <Quote />
      <Name />
    </Card>
  </div>
</section>
```

**Tags:** testimonials, reviews, social-proof, grid

---

### 10. Testimonials - Carousel
**Category:** Testimonials
**Slug:** `testimonials-carousel`

**Style:**
- Single testimonial at a time
- Large quote display
- Navigation arrows
- Dots indicator
- Centered layout
- Fade transition

**Features:**
- Auto-play option
- Keyboard navigation
- Touch swipe support

**Code Structure:**
```tsx
<section>
  <div className="max-w-4xl mx-auto">
    <Carousel>
      <TestimonialSlide />
    </Carousel>
  </div>
</section>
```

**Tags:** testimonials, carousel, slider, reviews

---

### 11. Testimonials - Wall of Love
**Category:** Testimonials
**Slug:** `testimonials-wall`

**Style:**
- Masonry/Pinterest-style layout
- Varying card heights
- Tweet-like design
- Compact spacing
- Social media aesthetic

**Features:**
- Infinite scroll effect
- Random heights
- Profile images

**Code Structure:**
```tsx
<section>
  <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
    <div className="break-inside-avoid mb-4">
      <Card />
    </div>
  </div>
</section>
```

**Tags:** testimonials, social-proof, masonry, twitter

---

## Contact Forms

### 12. Contact - Simple Form
**Category:** Forms
**Slug:** `contact-simple`

**Style:**
- Single column form
- Name, Email, Message fields
- Label above inputs
- Submit button
- Card container with padding

**Features:**
- Input validation
- Loading state on submit
- Success message
- Error handling

**Code Structure:**
```tsx
<section>
  <Card>
    <form>
      <Input label="Name" />
      <Input label="Email" />
      <Textarea label="Message" />
      <Button type="submit" />
    </form>
  </Card>
</section>
```

**Tags:** form, contact, simple, input

---

### 13. Contact - Split with Info
**Category:** Forms
**Slug:** `contact-split`

**Style:**
- Two-column layout
- Left: Contact info (address, phone, email)
- Right: Contact form
- Icons for contact methods
- Map embed option

**Features:**
- Contact details with icons
- Social media links
- Office hours

**Code Structure:**
```tsx
<section>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div>ContactInfo</div>
    <div>ContactForm</div>
  </div>
</section>
```

**Tags:** form, contact, split, info

---

## Feature Sections

### 14. Features - Icon Grid
**Category:** Features
**Slug:** `features-grid`

**Style:**
- 3-column grid
- Icon at top of each feature
- Heading and description
- Equal height cards
- Hover animations

**Features:**
- Icon library (Lucide)
- Card hover effects
- Responsive grid

**Code Structure:**
```tsx
<section>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
      <Icon />
      <h3>Title</h3>
      <p>Description</p>
    </div>
  </div>
</section>
```

**Tags:** features, grid, icons, landing

---

### 15. Features - Alternating Sections
**Category:** Features
**Slug:** `features-alternating`

**Style:**
- Image-text pairs
- Alternating left-right layout
- Large images
- Detailed descriptions
- Background color changes per section

**Features:**
- Image on left, then right, alternating
- Rich text descriptions
- Background variations

**Code Structure:**
```tsx
<section>
  <div className="grid grid-cols-2 gap-12">
    <div>Image</div>
    <div>Content</div>
  </div>
  <div className="grid grid-cols-2 gap-12 bg-muted">
    <div>Content</div>
    <div>Image</div>
  </div>
</section>
```

**Tags:** features, alternating, image, detailed

---

### 16. Features - Tabs
**Category:** Features
**Slug:** `features-tabs`

**Style:**
- Tabbed interface
- Tab buttons at top
- Content area below
- Icons in tabs
- Smooth transitions

**Features:**
- shadcn/ui Tabs component
- Animated content switch
- Icon indicators

**Code Structure:**
```tsx
<section>
  <Tabs>
    <TabsList>
      <TabsTrigger>Tab 1</TabsTrigger>
    </TabsList>
    <TabsContent>Content</TabsContent>
  </Tabs>
</section>
```

**Tags:** features, tabs, interactive, ui

---

## CTA (Call-to-Action)

### 17. CTA - Simple Centered
**Category:** CTA
**Slug:** `cta-simple`

**Style:**
- Centered text and button
- Gradient or solid background
- White text on dark bg
- Large heading
- Single button

**Features:**
- High contrast
- Compelling copy
- Single clear action

**Code Structure:**
```tsx
<section className="bg-primary text-primary-foreground">
  <div className="container mx-auto px-4 py-20 text-center">
    <h2>Heading</h2>
    <p>Description</p>
    <Button>CTA</Button>
  </div>
</section>
```

**Tags:** cta, simple, conversion, action

---

### 18. CTA - Split with Image
**Category:** CTA
**Slug:** `cta-split`

**Style:**
- Two-column layout
- Left: Text and CTA
- Right: Image or illustration
- Colored background
- Asymmetric split

**Features:**
- Visual support
- Two CTA options
- Engaging design

**Code Structure:**
```tsx
<section className="bg-muted">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div>Content + CTA</div>
    <div>Image</div>
  </div>
</section>
```

**Tags:** cta, split, image, conversion

---

### 19. CTA - Newsletter Signup
**Category:** CTA
**Slug:** `cta-newsletter`

**Style:**
- Email input + Submit button
- Inline form layout
- Badge or icon
- Privacy note
- Compact design

**Features:**
- Email validation
- Inline form
- Privacy statement

**Code Structure:**
```tsx
<section className="border-y bg-muted/50">
  <div className="container mx-auto px-4 py-12 text-center">
    <h3>Subscribe</h3>
    <form className="flex gap-2 max-w-md mx-auto">
      <Input type="email" />
      <Button type="submit">Subscribe</Button>
    </form>
    <p className="text-xs">Privacy note</p>
  </div>
</section>
```

**Tags:** cta, newsletter, email, form

---

## Authentication

### 20. Auth - Login Form
**Category:** Forms
**Slug:** `auth-login`

**Style:**
- Centered card
- Email and password inputs
- Remember me checkbox
- Forgot password link
- Social login buttons (optional)
- Clean and minimal

**Features:**
- Form validation
- Password visibility toggle
- Loading states
- Error messages

**Code Structure:**
```tsx
<section>
  <Card className="max-w-md mx-auto">
    <CardHeader>
      <CardTitle>Login</CardTitle>
    </CardHeader>
    <CardContent>
      <form>
        <Input type="email" />
        <Input type="password" />
        <Checkbox>Remember me</Checkbox>
        <Button>Login</Button>
      </form>
    </CardContent>
    <CardFooter>
      <Link>Forgot password?</Link>
    </CardFooter>
  </Card>
</section>
```

**Tags:** auth, login, form, security

---

### 21. Auth - Signup Form
**Category:** Forms
**Slug:** `auth-signup`

**Style:**
- Centered card
- Name, email, password, confirm password
- Terms checkbox
- Social signup options
- Progress indicator (optional)

**Features:**
- Password strength meter
- Validation feedback
- Terms acceptance
- Success state

**Code Structure:**
```tsx
<section>
  <Card className="max-w-md mx-auto">
    <CardHeader>
      <CardTitle>Sign Up</CardTitle>
    </CardHeader>
    <CardContent>
      <form>
        <Input label="Name" />
        <Input label="Email" />
        <Input label="Password" />
        <Input label="Confirm Password" />
        <Checkbox>Accept terms</Checkbox>
        <Button>Sign Up</Button>
      </form>
    </CardContent>
  </Card>
</section>
```

**Tags:** auth, signup, registration, form

---

## Content Sections

### 22. Stats Section
**Category:** Features
**Slug:** `stats-section`

**Style:**
- 4-column grid (2x2 on mobile)
- Large numbers
- Label below number
- Optional icon
- Border or background separation

**Features:**
- Counter animation (optional)
- Icon support
- Responsive grid

**Code Structure:**
```tsx
<section className="border-y bg-muted/50">
  <div className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div className="text-4xl font-bold">1000+</div>
        <div className="text-muted-foreground">Users</div>
      </div>
    </div>
  </div>
</section>
```

**Tags:** stats, numbers, metrics, social-proof

---

### 23. Team Grid
**Category:** Content
**Slug:** `team-grid`

**Style:**
- 3-4 column grid
- Team member cards
- Photo, name, title
- Social links
- Hover effects

**Features:**
- Avatar images
- Social icons
- Bio on hover
- Responsive grid

**Code Structure:**
```tsx
<section>
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <Card>
      <img />
      <h3>Name</h3>
      <p>Title</p>
      <SocialLinks />
    </Card>
  </div>
</section>
```

**Tags:** team, about, people, profile

---

### 24. FAQ Accordion
**Category:** Content
**Slug:** `faq-accordion`

**Style:**
- Accordion component (shadcn/ui)
- Question as trigger
- Answer as content
- Icons for open/closed
- Divided sections

**Features:**
- Expand/collapse
- Single or multiple open
- Smooth animations

**Code Structure:**
```tsx
<section>
  <div className="max-w-3xl mx-auto">
    <Accordion type="single">
      <AccordionItem value="item-1">
        <AccordionTrigger>Question?</AccordionTrigger>
        <AccordionContent>Answer</AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</section>
```

**Tags:** faq, accordion, help, support

---

### 25. Blog Card Grid
**Category:** Content
**Slug:** `blog-grid`

**Style:**
- 3-column grid
- Featured image at top
- Category badge
- Title and excerpt
- Author and date
- Read time

**Features:**
- Hover effects
- Image loading
- Tag filters (optional)

**Code Structure:**
```tsx
<section>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <Card>
      <img />
      <Badge>Category</Badge>
      <h3>Title</h3>
      <p>Excerpt</p>
      <div className="flex items-center gap-2">
        <Avatar />
        <span>Author</span>
        <span>Date</span>
      </div>
    </Card>
  </div>
</section>
```

**Tags:** blog, content, cards, articles

---

## Design System Guidelines

### Color Palette
- Primary: purple-600 to blue-600 gradient
- Background: Use semantic tokens (bg-background, bg-muted)
- Text: text-foreground, text-muted-foreground
- Accent: Use shadcn/ui color system

### Typography
- Headings: font-bold, tracking-tight
- H1: text-4xl md:text-6xl
- H2: text-3xl md:text-5xl
- H3: text-2xl md:text-3xl
- Body: text-base md:text-lg
- Muted: text-muted-foreground

### Spacing
- Section padding: py-24 (mobile) py-32 (desktop)
- Container: container mx-auto px-4
- Grid gaps: gap-8 (standard), gap-12 (large)

### Components to Use
- Button (shadcn/ui)
- Card (shadcn/ui)
- Input (shadcn/ui)
- Badge (shadcn/ui)
- Avatar (shadcn/ui)
- Accordion (shadcn/ui)
- Tabs (shadcn/ui)

### Responsive Breakpoints
- Mobile: default
- Tablet: md: (768px)
- Desktop: lg: (1024px)
- Wide: xl: (1280px)

---

## Implementation Notes

1. **Start Simple:** Begin with the basic structure, then add polish
2. **Reusable Props:** Make components accept props for customization
3. **Accessibility:** Always include proper ARIA labels and semantic HTML
4. **Performance:** Optimize images, use proper loading strategies
5. **Testing:** Test on mobile, tablet, and desktop before considering complete
6. **Documentation:** Add comments explaining complex logic

---

## Next Steps

1. Start with Hero - Gradient Background (easiest)
2. Build 5 components before adding them to the showcase
3. Create component preview images (screenshots)
4. Update components.json with component data
5. Build the /components browse page
6. Test and iterate

Good luck building! 🚀
