# Component Variants Guide

A guide for creating components with multiple style variants (like shadcnblocks.com). Each component should have different visual styles that users can choose from.

---

## What Are Component Variants?

Component variants are different visual styles of the same component. For example:

**Button Component Variants:**
- Default (solid primary)
- Secondary (muted background)
- Outline (border only)
- Ghost (no background)
- Destructive (red/danger)

**Card Component Variants:**
- Default (standard card)
- Bordered (thick border)
- Elevated (shadow)
- Flat (no border/shadow)
- Gradient (gradient background)

---

## Variant Naming Convention

Use consistent naming across all components:

### Standard Variants
- `default` - Base style, most common use
- `primary` - Main brand color (purple/blue gradient)
- `secondary` - Muted, less prominent
- `outline` - Border only, transparent background
- `ghost` - No background, minimal styling
- `destructive` - Red/danger style
- `muted` - Very subtle, low contrast

### Size Variants
- `sm` - Small size
- `md` - Medium (default)
- `lg` - Large size
- `xl` - Extra large

### Border/Shadow Variants
- `bordered` - Prominent border
- `elevated` - Shadow/depth
- `flat` - No shadow
- `rounded` - Extra rounded corners

---

## Component Library to Build

### Category 1: Buttons (5 variants)

#### 1. Button - Default
```tsx
<Button>Click me</Button>
```
**Style:** Solid purple-blue gradient, white text

#### 2. Button - Secondary
```tsx
<Button variant="secondary">Click me</Button>
```
**Style:** Muted background, dark text

#### 3. Button - Outline
```tsx
<Button variant="outline">Click me</Button>
```
**Style:** Transparent with border, inherits text color

#### 4. Button - Ghost
```tsx
<Button variant="ghost">Click me</Button>
```
**Style:** Transparent, hover shows background

#### 5. Button - Destructive
```tsx
<Button variant="destructive">Delete</Button>
```
**Style:** Red background, danger action

---

### Category 2: Cards (6 variants)

#### 6. Card - Default
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```
**Style:** Standard card, subtle border

#### 7. Card - Bordered
```tsx
<Card className="border-2 border-primary">
  ...
</Card>
```
**Style:** Thick colored border

#### 8. Card - Elevated
```tsx
<Card className="shadow-lg">
  ...
</Card>
```
**Style:** Prominent shadow for depth

#### 9. Card - Flat
```tsx
<Card className="border-0 shadow-none bg-muted/50">
  ...
</Card>
```
**Style:** No border or shadow, subtle background

#### 10. Card - Gradient
```tsx
<Card className="bg-linear-to-br from-purple-600 to-blue-600 text-white border-0">
  ...
</Card>
```
**Style:** Gradient background, white text

#### 11. Card - Hover Lift
```tsx
<Card className="transition-transform hover:-translate-y-1 hover:shadow-xl">
  ...
</Card>
```
**Style:** Lifts up on hover with shadow

---

### Category 3: Badges (7 variants)

#### 12. Badge - Default
```tsx
<Badge>New</Badge>
```
**Style:** Primary color background

#### 13. Badge - Secondary
```tsx
<Badge variant="secondary">Update</Badge>
```
**Style:** Muted gray background

#### 14. Badge - Outline
```tsx
<Badge variant="outline">Draft</Badge>
```
**Style:** Border only, transparent

#### 15. Badge - Destructive
```tsx
<Badge variant="destructive">Error</Badge>
```
**Style:** Red background

#### 16. Badge - Success
```tsx
<Badge className="bg-green-500 text-white">Success</Badge>
```
**Style:** Green background

#### 17. Badge - Warning
```tsx
<Badge className="bg-yellow-500 text-black">Warning</Badge>
```
**Style:** Yellow background

#### 18. Badge - Info
```tsx
<Badge className="bg-blue-500 text-white">Info</Badge>
```
**Style:** Blue background

---

### Category 4: Inputs (4 variants)

#### 19. Input - Default
```tsx
<Input placeholder="Enter text..." />
```
**Style:** Standard input with border

#### 20. Input - With Icon
```tsx
<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input className="pl-10" placeholder="Search..." />
</div>
```
**Style:** Input with left icon

#### 21. Input - Error State
```tsx
<Input className="border-destructive focus-visible:ring-destructive" placeholder="Enter email..." />
```
**Style:** Red border for errors

#### 22. Input - Disabled
```tsx
<Input disabled placeholder="Disabled input" />
```
**Style:** Grayed out, not interactive

---

### Category 5: Alerts (4 variants)

#### 23. Alert - Default
```tsx
<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You can add components to your app.</AlertDescription>
</Alert>
```
**Style:** Neutral info alert

#### 24. Alert - Destructive
```tsx
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>
```
**Style:** Red error alert

#### 25. Alert - Success
```tsx
<Alert className="border-green-500 bg-green-50 text-green-900">
  <CheckCircle className="h-4 w-4" />
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>Operation completed successfully.</AlertDescription>
</Alert>
```
**Style:** Green success alert

#### 26. Alert - Warning
```tsx
<Alert className="border-yellow-500 bg-yellow-50 text-yellow-900">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>Please review before continuing.</AlertDescription>
</Alert>
```
**Style:** Yellow warning alert

---

### Category 6: Form Controls (5 variants)

#### 27. Checkbox - Default
```tsx
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label htmlFor="terms">Accept terms</label>
</div>
```
**Style:** Standard checkbox

#### 28. Checkbox - With Description
```tsx
<div className="flex items-start space-x-2">
  <Checkbox id="marketing" className="mt-1" />
  <div>
    <label htmlFor="marketing" className="font-medium">Marketing emails</label>
    <p className="text-sm text-muted-foreground">Receive emails about new products.</p>
  </div>
</div>
```
**Style:** Checkbox with helper text

#### 29. Switch - Default
```tsx
<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>
```
**Style:** Toggle switch

#### 30. Radio Group - Default
```tsx
<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>
```
**Style:** Radio button group

#### 31. Select - Default
```tsx
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```
**Style:** Dropdown select

---

### Category 7: Navigation (4 variants)

#### 32. Tabs - Default
```tsx
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account content</TabsContent>
  <TabsContent value="password">Password content</TabsContent>
</Tabs>
```
**Style:** Standard tabs

#### 33. Tabs - Pills
```tsx
<Tabs defaultValue="account">
  <TabsList className="bg-transparent gap-2">
    <TabsTrigger value="account" className="rounded-full">Account</TabsTrigger>
    <TabsTrigger value="password" className="rounded-full">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account content</TabsContent>
  <TabsContent value="password">Password content</TabsContent>
</Tabs>
```
**Style:** Pill-shaped tabs

#### 34. Breadcrumb
```tsx
<nav className="flex" aria-label="Breadcrumb">
  <ol className="flex items-center space-x-2">
    <li><Link href="/">Home</Link></li>
    <li><ChevronRight className="h-4 w-4" /></li>
    <li><Link href="/docs">Docs</Link></li>
    <li><ChevronRight className="h-4 w-4" /></li>
    <li className="text-muted-foreground">Components</li>
  </ol>
</nav>
```
**Style:** Breadcrumb navigation

#### 35. Pagination
```tsx
<div className="flex items-center space-x-2">
  <Button variant="outline" size="sm">Previous</Button>
  <Button variant="outline" size="sm">1</Button>
  <Button variant="outline" size="sm">2</Button>
  <Button variant="outline" size="sm">3</Button>
  <Button variant="outline" size="sm">Next</Button>
</div>
```
**Style:** Page navigation

---

### Category 8: Feedback (5 variants)

#### 36. Progress - Default
```tsx
<Progress value={33} />
```
**Style:** Linear progress bar

#### 37. Progress - With Label
```tsx
<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Uploading...</span>
    <span>33%</span>
  </div>
  <Progress value={33} />
</div>
```
**Style:** Progress with percentage

#### 38. Skeleton - Text
```tsx
<div className="space-y-2">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-3/4" />
</div>
```
**Style:** Text loading skeleton

#### 39. Skeleton - Card
```tsx
<Card>
  <CardHeader>
    <Skeleton className="h-8 w-1/2" />
  </CardHeader>
  <CardContent className="space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
  </CardContent>
</Card>
```
**Style:** Card loading skeleton

#### 40. Spinner
```tsx
<div className="flex items-center justify-center">
  <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
</div>
```
**Style:** Loading spinner

---

## Data Structure for variants.json

```json
{
  "id": "button-variants",
  "title": "Button Variants",
  "description": "Different button styles for various use cases",
  "category": "buttons",
  "variants": [
    {
      "id": "default",
      "name": "Default",
      "description": "Primary action button with gradient",
      "code": "<Button>Click me</Button>",
      "preview": "button-default.png"
    },
    {
      "id": "secondary",
      "name": "Secondary",
      "description": "Less prominent action",
      "code": "<Button variant=\"secondary\">Click me</Button>",
      "preview": "button-secondary.png"
    },
    {
      "id": "outline",
      "name": "Outline",
      "description": "Transparent with border",
      "code": "<Button variant=\"outline\">Click me</Button>",
      "preview": "button-outline.png"
    }
  ],
  "dependencies": ["button"],
  "tags": ["button", "action", "cta"]
}
```

---

## Component Page Structure

Each component should have a page like this:

```
/components/button-variants

Layout:
┌─────────────────────────────────┐
│ Component Title & Description    │
├─────────────────────────────────┤
│ Installation Instructions        │
├─────────────────────────────────┤
│ Variant 1: Default              │
│   [Preview]                     │
│   [Code] [Copy Button]          │
├─────────────────────────────────┤
│ Variant 2: Secondary            │
│   [Preview]                     │
│   [Code] [Copy Button]          │
├─────────────────────────────────┤
│ ... more variants ...           │
└─────────────────────────────────┘
```

---

## Visual Style Guidelines

### Border Variants
- **Default:** `border`
- **Loose:** `border-2` or `border-[3px]`
- **None:** `border-0`
- **Dashed:** `border border-dashed`
- **Dotted:** `border border-dotted`

### Shadow Variants
- **None:** `shadow-none`
- **Small:** `shadow-sm`
- **Default:** `shadow`
- **Medium:** `shadow-md`
- **Large:** `shadow-lg`
- **Extra Large:** `shadow-xl`
- **2XL:** `shadow-2xl`

### Rounded Variants
- **None:** `rounded-none`
- **Small:** `rounded-sm`
- **Default:** `rounded`
- **Medium:** `rounded-md`
- **Large:** `rounded-lg`
- **Extra Large:** `rounded-xl`
- **Full:** `rounded-full`

### Color Variants
- **Primary:** Purple-blue gradient (`from-purple-600 to-blue-600`)
- **Secondary:** Muted gray (`bg-muted`)
- **Success:** Green (`bg-green-500`)
- **Warning:** Yellow (`bg-yellow-500`)
- **Destructive:** Red (`bg-destructive`)
- **Info:** Blue (`bg-blue-500`)

---

## Example: Button Component with All Variants

```tsx
// src/components/showcase/ButtonVariants.tsx

import { Button } from "@/components/ui/button"

export default function ButtonVariants() {
  return (
    <div className="space-y-8">
      {/* Default */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Default</h3>
        <Button>Click me</Button>
      </div>

      {/* Secondary */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Secondary</h3>
        <Button variant="secondary">Click me</Button>
      </div>

      {/* Outline */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Outline</h3>
        <Button variant="outline">Click me</Button>
      </div>

      {/* Ghost */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Ghost</h3>
        <Button variant="ghost">Click me</Button>
      </div>

      {/* Destructive */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Destructive</h3>
        <Button variant="destructive">Delete</Button>
      </div>

      {/* With Icon */}
      <div>
        <h3 className="text-lg font-semibold mb-4">With Icon</h3>
        <Button>
          <Mail className="mr-2 h-4 w-4" />
          Send Email
        </Button>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Sizes</h3>
        <div className="flex items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      {/* Loading State */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Loading</h3>
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </Button>
      </div>
    </div>
  )
}
```

---

## Implementation Steps

### Step 1: Choose a Component
Pick from the 40 variants listed above

### Step 2: Create the Component File
```bash
# Example for Button variants
src/components/showcase/ButtonVariants.tsx
```

### Step 3: Build All Variants
Implement each visual variation

### Step 4: Take Screenshots
Capture preview images for each variant

### Step 5: Add to components.json
```json
{
  "id": "button-variants",
  "title": "Button Variants",
  "category": "buttons",
  "variants": [...]
}
```

### Step 6: Create Component Page
```bash
src/app/components/button-variants/page.tsx
```

---

## Pro Tips

1. **Start with 3-5 variants** per component, not all at once
2. **Be consistent** with naming across components
3. **Document use cases** for each variant
4. **Show interactive states** (hover, active, disabled)
5. **Include accessibility** info (ARIA labels, keyboard nav)
6. **Add props table** showing all available options
7. **Group related variants** together (colors, sizes, borders)

---

## Component Showcase Layout

```tsx
// Example component page structure
<div className="space-y-12">
  {/* Header */}
  <div>
    <h1>Button Variants</h1>
    <p>Choose from multiple button styles...</p>
  </div>

  {/* Installation */}
  <Card>
    <CardHeader>
      <CardTitle>Installation</CardTitle>
    </CardHeader>
    <CardContent>
      <CodeBlock code="npx shadcn@latest add button" />
    </CardContent>
  </Card>

  {/* Variants */}
  {variants.map(variant => (
    <Card key={variant.id}>
      <CardHeader>
        <CardTitle>{variant.name}</CardTitle>
        <p>{variant.description}</p>
      </CardHeader>
      <CardContent>
        {/* Live Preview */}
        <div className="p-8 border rounded-lg">
          {variant.component}
        </div>
        {/* Code */}
        <Tabs>
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="code">
            <CodeBlock code={variant.code} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  ))}
</div>
```

---

## Next Steps

1. Start with **Button Variants** (easiest, 5 variants)
2. Move to **Badge Variants** (7 variants)
3. Then **Card Variants** (6 variants)
4. Build remaining 28 variants progressively

Total: **40 component variants** across 8 categories

Good luck! 🚀
