import * as fs from "fs";
import * as path from "path";

/**
 * Auto-generates componentPreviews data by scanning the showcase folder.
 * This eliminates the need to manually maintain a 4000+ line file.
 *
 * Run: npx tsx scripts/generate-component-data.mts
 */

interface ComponentVariant {
  id: string;
  type: string;
  name: string;
  description: string;
  code: string;
  installCommand: string;
  addedAt?: number; // Timestamp when the file was created/modified
}

interface ComponentPreviewType {
  id: string;
  title: string;
  type: string;
  description: string;
  category: string;
  slug: string;
  previewImage: string;
  dependencies: string[];
  tags: string[];
  variants: ComponentVariant[];
  latestAddedAt?: number; // Most recent file modification in this category
}

// Configuration
const CONFIG = {
  showcasePath: "src/components/showcase",
  outputPath: "src/data/componentPreviews.generated.ts",
};

// Component descriptions - add custom descriptions for better UX
const COMPONENT_DESCRIPTIONS: Record<string, string> = {
  accordion: "Collapsible content sections perfect for FAQs, documentation, and organizing information. Fully accessible and keyboard navigable.",
  alert: "Display important messages, warnings, errors, or success notifications to users. Available in multiple semantic variants.",
  "alert-dialog": "Modal dialogs for important confirmations, warnings, and destructive actions. Requires user acknowledgment before proceeding.",
  "aspect-ratio": "Maintain consistent width-to-height ratios for images, videos, and embedded content. Supports common ratios like 16:9, 4:3, and custom values.",
  avatar: "User profile images with fallback initials. Includes online status indicators, sizes, and group stacking options.",
  badge: "Small labels and tags for status, categories, and notifications. Multiple color options available.",
  breadcrumb: "Navigation breadcrumbs to show the current page location within a hierarchy. Helps users understand where they are and navigate back.",
  button: "A collection of button styles for different use cases. Includes default, secondary, outline, ghost, and destructive variants.",
  "button-group": "Group related buttons together for cohesive actions. Perfect for toolbars and action bars.",
  calendar: "Interactive date pickers and calendar components for scheduling, booking, and date selection.",
  card: "Flexible card components with different visual styles. Perfect for content containers, product cards, and feature sections.",
  carousel: "Slideshow components for showcasing images, testimonials, or any content in a rotating format.",
  chart: "Beautiful and interactive chart components powered by Recharts. Perfect for dashboards and data visualization.",
  checkbox: "Toggle selection controls for forms and settings. Supports indeterminate state, groups, and nested hierarchies.",
  collapsible: "Expandable and collapsible content sections. Perfect for showing/hiding additional information.",
  combobox: "Autocomplete input with searchable dropdown. Built using Popover and Command components.",
  command: "Command palette and search components. Perfect for quick actions and navigation.",
  "context-menu": "Right-click context menus with various options. Perfect for file managers and editors.",
  "data-table": "Powerful tables with TanStack Table for sorting, filtering, and pagination.",
  "date-picker": "Date selection with calendar popover. Built using Calendar and Popover components.",
  dialog: "Modal dialog components with various animation styles.",
  drawer: "Slide-out panels from any edge of the screen. Perfect for navigation and forms.",
  "dropdown-menu": "Dropdown menus with icons, checkboxes, and radio options.",
  empty: "Empty state components for when there's no data to display.",
  field: "Form field components with labels, descriptions, and validation.",
  form: "Complete form components with validation and submission handling.",
  "hover-card": "Cards that appear on hover for previewing content.",
  input: "Text input components with various styles and states.",
  "input-group": "Input fields combined with buttons, icons, or text.",
  "input-otp": "One-time password input components for verification.",
  item: "List item components for displaying data in lists.",
  kbd: "Keyboard shortcut display components.",
  label: "Form label components with required and optional states.",
  menubar: "Horizontal menu bar components for application navigation.",
  "native-select": "Native HTML select components with custom styling.",
  "navigation-menu": "Navigation menu components for site navigation.",
  pagination: "Pagination components for navigating through pages of content.",
  popover: "Floating content panels that appear on click.",
  progress: "Progress bar components for showing completion status.",
  "radio-group": "Radio button groups for single selection.",
  resizable: "Resizable panel components for flexible layouts.",
  "scroll-area": "Custom scrollable areas with styled scrollbars.",
  select: "Select dropdown components with search and groups.",
  separator: "Visual separators for dividing content.",
  sheet: "Modal sheets that slide in from any direction.",
  sidebar: "Sidebar navigation components for application layouts.",
  skeleton: "Loading placeholder components for content.",
  slider: "Slider components for selecting values within a range.",
  sonner: "Toast notification components powered by Sonner.",
  spinner: "Loading spinner components for indicating progress.",
  switch: "Toggle switch components for on/off states.",
  table: "Table components for displaying tabular data.",
  tabs: "Tab components for organizing content into sections.",
  textarea: "Multi-line text input components.",
  toggle: "Toggle button components for switching states.",
  "toggle-group": "Groups of toggle buttons for multiple selections.",
  tooltip: "Tooltip components for displaying additional information.",
  typography: "Typography components for consistent text styling.",
};

// Detect install command from component type
function getInstallCommand(type: string, variantId: string): string {
  // Map component types to their shadcn dependencies
  const dependencyMap: Record<string, string> = {
    accordion: "accordion",
    alert: "alert",
    "alert-dialog": "alert-dialog button",
    "aspect-ratio": "aspect-ratio",
    avatar: "avatar",
    badge: "badge",
    breadcrumb: "breadcrumb",
    button: "button",
    "button-group": "button",
    calendar: "calendar button dialog input label",
    card: "card",
    carousel: "carousel",
    chart: "card",
    checkbox: "checkbox",
    collapsible: "collapsible",
    combobox: "popover command button",
    command: "command",
    "context-menu": "context-menu",
    "data-table": "table",
    "date-picker": "calendar popover button",
    dialog: "dialog button",
    drawer: "drawer button",
    "dropdown-menu": "dropdown-menu",
    empty: "card button",
    field: "label input",
    form: "form input button label",
    "hover-card": "hover-card",
    input: "input",
    "input-group": "input button",
    "input-otp": "input-otp",
    item: "card",
    kbd: "",
    label: "label",
    menubar: "menubar",
    "native-select": "",
    "navigation-menu": "navigation-menu",
    pagination: "pagination",
    popover: "popover",
    progress: "progress",
    "radio-group": "radio-group",
    resizable: "resizable",
    "scroll-area": "scroll-area",
    select: "select",
    separator: "separator",
    sheet: "sheet",
    sidebar: "sidebar",
    skeleton: "skeleton",
    slider: "slider",
    sonner: "sonner",
    spinner: "spinner",
    switch: "switch",
    table: "table",
    tabs: "tabs",
    textarea: "textarea",
    toggle: "toggle",
    "toggle-group": "toggle-group",
    tooltip: "tooltip",
    typography: "",
  };

  const deps = dependencyMap[type] || type;
  if (!deps) return "";
  return `npx shadcn@latest add ${deps}`;
}

// Convert kebab-case to Title Case
function toTitleCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Generate variant name from file name
function generateVariantName(fileName: string, type: string): string {
  // Remove the type prefix if present
  let name = fileName;
  if (name.startsWith(type + "-")) {
    name = name.substring(type.length + 1);
  }
  return toTitleCase(name);
}

// Scan showcase folder and generate component data
function generateComponentData(): ComponentPreviewType[] {
  const showcasePath = CONFIG.showcasePath;
  const components: ComponentPreviewType[] = [];

  if (!fs.existsSync(showcasePath)) {
    console.error(`Showcase path not found: ${showcasePath}`);
    return [];
  }

  // Get all folders in showcase directory
  const folders = fs
    .readdirSync(showcasePath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort();

  for (const folder of folders) {
    const folderPath = path.join(showcasePath, folder);
    const files = fs
      .readdirSync(folderPath)
      .filter((file) => file.endsWith(".tsx") || file.endsWith(".ts"));

    if (files.length === 0) continue;

    // Get file stats and sort by modification time (newest first)
    const filesWithStats = files.map((file) => {
      const filePath = path.join(folderPath, file);
      const stats = fs.statSync(filePath);
      return {
        file,
        mtime: stats.mtime.getTime(),
      };
    });

    // Sort variants by modification time (newest first)
    filesWithStats.sort((a, b) => b.mtime - a.mtime);

    const variants: ComponentVariant[] = filesWithStats.map(({ file, mtime }) => {
      const id = file.replace(/\.(tsx|ts)$/, "");
      const name = generateVariantName(id, folder);

      return {
        id,
        type: folder,
        name,
        description: `${name} variant`,
        code: "", // Code is loaded at runtime
        installCommand: getInstallCommand(folder, id),
        addedAt: mtime,
      };
    });

    // Get the most recent modification time for this category
    const latestAddedAt = filesWithStats.length > 0 ? filesWithStats[0].mtime : 0;

    const title = toTitleCase(folder);
    const description =
      COMPONENT_DESCRIPTIONS[folder] || `${title} component variants`;

    components.push({
      id: `${folder}-variants`,
      title,
      type: folder,
      description,
      category: folder,
      slug: `${folder}-variants`,
      previewImage: `/previews/${folder}-variants.png`,
      dependencies: [folder],
      tags: [folder, ...folder.split("-")].filter(
        (v, i, a) => a.indexOf(v) === i
      ),
      variants,
      latestAddedAt,
    });
  }

  // Sort categories alphabetically (A-Z)
  components.sort((a, b) => a.title.localeCompare(b.title));

  return components;
}

// Generate TypeScript file content
function generateTypeScriptFile(components: ComponentPreviewType[]): string {
  const timestamp = new Date().toISOString();

  return `/**
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Generated at: ${timestamp}
 * Run: npm run generate:components
 *
 * This file is generated from the showcase folder structure.
 * To add/remove components, modify files in src/components/showcase/
 */

import {
  type ComponentPreviewType,
  type ComponentVariant,
} from "@/types/ComponentType";

export const componentPreviews: ComponentPreviewType[] = ${JSON.stringify(components, null, 2)};

// Helper function to get all categories
export function getAllCategories(): string[] {
  return Array.from(new Set(componentPreviews.map((comp) => comp.type)));
}

// Helper function to get all component variants
export function getAllVariants(): ComponentVariant[] {
  return componentPreviews.flatMap((comp) => comp.variants);
}

// Helper function to get component by type
export function getComponentByType(type: string): ComponentPreviewType | undefined {
  return componentPreviews.find((comp) => comp.type === type);
}

// Helper function to get variant by id
export function getVariantById(variantId: string): ComponentVariant | undefined {
  for (const comp of componentPreviews) {
    const variant = comp.variants.find((v) => v.id === variantId);
    if (variant) return variant;
  }
  return undefined;
}
`;
}

// Main function
async function main() {
  console.log("🔨 Generating component data from showcase folder...\n");

  const components = generateComponentData();

  console.log(`📦 Found ${components.length} component categories`);
  const totalVariants = components.reduce(
    (sum, comp) => sum + comp.variants.length,
    0
  );
  console.log(`📝 Total variants: ${totalVariants}\n`);

  // Generate TypeScript file
  const content = generateTypeScriptFile(components);

  // Write output file
  fs.writeFileSync(CONFIG.outputPath, content);

  console.log(`✅ Generated: ${CONFIG.outputPath}`);
  console.log(`\n📋 Categories generated:`);
  components.forEach((comp) => {
    console.log(`   - ${comp.title} (${comp.variants.length} variants)`);
  });
}

main().catch(console.error);
