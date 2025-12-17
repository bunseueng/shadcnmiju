# Themes Configuration

This directory contains the theme configuration for the application.

## Files

- **`themes.tsx`** - TypeScript source of truth for all themes with type definitions and helper functions
- **`themes.json`** - JSON export of all themes for easy copying and sharing

## Theme Structure

Each theme contains:

```typescript
{
  id: string;           // Unique identifier (kebab-case)
  name: string;         // Display name
  light: ThemeColors;   // Light mode colors
  dark: ThemeColors;    // Dark mode colors
  radius?: string;      // Border radius (optional)
  fontSans?: string;    // Sans-serif font (optional)
  fontSerif?: string;   // Serif font (optional)
  fontMono?: string;    // Monospace font (optional)
}
```

## Available Themes (42 total)

1. **Default** - Classic shadcn/ui theme
2. **Amber Minimal** - Warm amber tones with minimal design
3. **Amethyst Haze** - Purple gradient aesthetic
4. **Bold Tech** - High contrast tech-forward theme
5. **Bubblegum** - Playful pink bubble aesthetic
6. **Caffeine** - Energetic coffee-inspired theme
7. **Candyland** - Sweet pastel colors
8. **Catppuccin** - Popular Catppuccin color scheme
9. **Claymorphism** - Soft clay-like 3D design
10. **Clean Slate** - Minimalist neutral theme
... and 32 more!

## Usage

### In TypeScript/React

```tsx
import { themes, applyTheme, getThemeById } from '@/configs/themes';

// Get all themes
console.log(themes);

// Apply a theme
applyTheme('amethyst-haze', 'dark');

// Get specific theme
const theme = getThemeById('default');

// Export theme as JSON
const json = exportThemeAsJson('default');
```

### In JSON

Copy themes directly from `themes.json`:

```json
{
  "id": "default",
  "name": "Default",
  "light": { ... },
  "dark": { ... }
}
```

## Updating themes.json

When you modify `themes.tsx`, regenerate the JSON export:

```bash
npm run export-themes
```

Or directly:

```bash
node scripts/extract-themes.js
```

## Adding New Themes

1. Add your theme to the `themes` array in `themes.tsx`
2. Run `npm run export-themes` to update the JSON
3. Test with `applyTheme('your-theme-id', 'light')`

## Color Format

All colors use the OKLCH color space for consistent perceptual lightness:

```css
oklch(lightness chroma hue)
```

Example: `oklch(0.95 0.02 264)` - Very light, low saturation, blue hue

## Helper Functions

### `getThemeNames(): string[]`
Returns array of all theme display names.

### `getThemeById(id: string): Theme | undefined`
Get theme object by its ID.

### `exportThemeAsJson(themeId: string): string | null`
Export a single theme as formatted JSON string for copying.

### `applyTheme(themeId: string, mode: "light" | "dark")`
Apply theme to the document root with CSS custom properties.

## License

Themes are part of the shadcnmiju project and available under the same license.
