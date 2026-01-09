import * as fs from "fs";
import * as path from "path";

// Types matching your ComponentType.ts
interface ComponentVariant {
  id: string;
  name: string;
  description: string;
  type: string;
  installCommand: string;
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
}

interface RegistryItem {
  $schema: string;
  name: string;
  type: string;
  title: string;
  description: string;
  registryDependencies?: string[];
  dependencies?: string[];
  files: {
    path: string;
    content: string;
    type: string;
    target?: string;
  }[];
  categories?: string[];
}


// Configuration
const CONFIG = {
  name: "shadcnmiju",
  homepage: "https://shadcnmiju.vercel.app",
  showcasePath: "src/components/showcase",
  outputPath: "public/r",
  registrySchemaUrl: "https://ui.shadcn.com/schema/registry.json",
  registryItemSchemaUrl: "https://ui.shadcn.com/schema/registry-item.json",
};

// Map component types to folder names
const TYPE_TO_FOLDER: Record<string, string> = {
  accordion: "accordion",
  alert: "alert",
  "alert-dialog": "alert-dialog",
  "aspect-ratio": "aspect-ratio",
  avatar: "avatar",
  badge: "badge",
  breadcrumb: "breadcrumb",
  button: "button",
  "button-group": "button-group",
  calendar: "calendar",
  card: "card",
  carousel: "carousel",
  chart: "chart",
  checkbox: "checkbox",
  collapsible: "collapsible",
  combobox: "combobox",
  command: "command",
  "context-menu": "context-menu",
  "data-table": "data-table",
  "date-picker": "date-picker",
  dialog: "dialog",
  drawer: "drawer",
  "dropdown-menu": "dropdown-menu",
  form: "form",
  "hover-card": "hover-card",
  input: "input",
  "input-otp": "input-otp",
  label: "label",
  menubar: "menubar",
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
  toast: "toast",
  toggle: "toggle",
  "toggle-group": "toggle-group",
  tooltip: "tooltip",
};

// Detect dependencies from file content
function detectDependencies(content: string): {
  registryDependencies: string[];
  npmDependencies: string[];
} {
  const registryDependencies: Set<string> = new Set();
  const npmDependencies: Set<string> = new Set();

  // Detect shadcn/ui component imports
  const uiImportRegex = /@\/components\/ui\/([a-z-]+)/g;
  let match;
  while ((match = uiImportRegex.exec(content)) !== null) {
    registryDependencies.add(match[1]);
  }

  // Detect npm package imports
  const npmPackages = [
    "lucide-react",
    "recharts",
    "date-fns",
    "react-day-picker",
    "cmdk",
    "vaul",
    "sonner",
    "input-otp",
    "embla-carousel-react",
    "embla-carousel-autoplay",
    "@tanstack/react-table",
    "react-hook-form",
    "zod",
    "motion",
    "gsap",
    "@gsap/react",
    "react-resizable-panels",
  ];

  npmPackages.forEach((pkg) => {
    if (content.includes(`from "${pkg}"`) || content.includes(`from '${pkg}'`)) {
      npmDependencies.add(pkg);
    }
  });

  return {
    registryDependencies: Array.from(registryDependencies),
    npmDependencies: Array.from(npmDependencies),
  };
}

// Read component file and process it
function readComponentFile(
  componentType: string,
  variantId: string
): { content: string; filePath: string } | null {
  const folder = TYPE_TO_FOLDER[componentType] || componentType;
  const possiblePaths = [
    path.join(CONFIG.showcasePath, folder, `${variantId}.tsx`),
    path.join(CONFIG.showcasePath, folder, `${variantId}.ts`),
  ];

  for (const filePath of possiblePaths) {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, "utf-8");

      // Check if it uses default export
      if (content.includes("export default")) {
        // Replace "export default function ComponentName" with "export function ComponentName"
        content = content.replace(
          /export\s+default\s+function\s+(\w+)/g,
          "export function $1"
        );

        // Replace "export default ComponentName" at end of file
        content = content.replace(
          /export\s+default\s+(\w+)\s*;?\s*$/,
          "export { $1 }"
        );

        // Replace const ComponentName = ... export default ComponentName
        content = content.replace(
          /const\s+(\w+)\s*=\s*([\s\S]*?);\s*export\s+default\s+\1\s*;?\s*$/,
          "export const $1 = $2;"
        );
      }

      return { content, filePath };
    }
  }

  return null;
}

// Scan showcase folder to discover all components
function discoverComponents(): ComponentPreviewType[] {
  const showcasePath = CONFIG.showcasePath;
  const components: ComponentPreviewType[] = [];

  if (!fs.existsSync(showcasePath)) {
    console.error(`Showcase path not found: ${showcasePath}`);
    return [];
  }

  // Get all folders in showcase directory
  const folders = fs.readdirSync(showcasePath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  for (const folder of folders) {
    const folderPath = path.join(showcasePath, folder);
    const files = fs.readdirSync(folderPath)
      .filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));

    if (files.length === 0) continue;

    const variants: ComponentVariant[] = files.map(file => {
      const id = file.replace(/\.(tsx|ts)$/, '');
      const name = id
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      return {
        id,
        name,
        description: `${name} component variant`,
        type: folder,
        installCommand: `npx shadcn@latest add ${folder}`,
      };
    });

    components.push({
      id: `${folder}-variants`,
      title: folder.charAt(0).toUpperCase() + folder.slice(1).replace(/-/g, ' '),
      type: folder,
      description: `${folder} component variants`,
      category: folder,
      slug: `${folder}-variants`,
      previewImage: `/previews/${folder}-variants.png`,
      dependencies: [folder],
      tags: [folder],
      variants,
    });
  }

  return components;
}

// Build a single registry item
function buildRegistryItem(
  component: ComponentPreviewType,
  variant: ComponentVariant
): RegistryItem | null {
  const fileData = readComponentFile(component.type, variant.id);

  if (!fileData) {
    console.warn(`  ⚠ File not found for variant: ${variant.id}`);
    return null;
  }

  const { registryDependencies, npmDependencies } = detectDependencies(
    fileData.content
  );

  // Generate target path for components folder
  const targetPath = `components/${variant.id}.tsx`;

  const item: RegistryItem = {
    $schema: CONFIG.registryItemSchemaUrl,
    name: variant.id,
    type: "registry:block",
    title: variant.name,
    description: variant.description || `${variant.name} component variant`,
    files: [
      {
        path: fileData.filePath.replace(/\\/g, "/"),
        content: fileData.content,
        type: "registry:component",
        target: targetPath,
      },
    ],
    categories: [component.category, ...component.tags.slice(0, 3)],
  };

  if (registryDependencies.length > 0) {
    item.registryDependencies = registryDependencies;
  }

  if (npmDependencies.length > 0) {
    item.dependencies = npmDependencies;
  }

  return item;
}

// Main build function
async function buildRegistry() {
  console.log("🔨 Building shadcnmiju registry...\n");

  // Clean and recreate output directory
  if (fs.existsSync(CONFIG.outputPath)) {
    fs.rmSync(CONFIG.outputPath, { recursive: true });
  }
  fs.mkdirSync(CONFIG.outputPath, { recursive: true });

  // Discover components from showcase folder
  const components = discoverComponents();
  console.log(`📦 Found ${components.length} component groups\n`);

  const registryItems: RegistryItem[] = [];
  let successCount = 0;
  let failCount = 0;

  // Process each component and its variants
  for (const component of components) {
    console.log(`📁 Processing: ${component.title} (${component.variants.length} variants)`);

    // Create category folder (e.g., public/r/accordion/)
    const categoryPath = path.join(CONFIG.outputPath, component.type);
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath, { recursive: true });
    }

    for (const variant of component.variants) {
      const registryItem = buildRegistryItem(component, variant);

      if (registryItem) {
        // Write individual JSON file (e.g., public/r/accordion/faq-accordion.json)
        const individualFilePath = path.join(categoryPath, `${variant.id}.json`);
        fs.writeFileSync(
          individualFilePath,
          JSON.stringify(registryItem, null, 2)
        );

        // Also collect for index.json (without $schema for items)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { $schema, ...itemWithoutSchema } = registryItem;
        registryItems.push(itemWithoutSchema as RegistryItem);
        successCount++;
        console.log(`  ✓ ${variant.id}`);
      } else {
        failCount++;
      }
    }
  }

  // Write master index.json with all components
  const registry = {
    $schema: CONFIG.registrySchemaUrl,
    name: CONFIG.name,
    homepage: CONFIG.homepage,
    items: registryItems,
  };

  fs.writeFileSync(
    path.join(CONFIG.outputPath, "index.json"),
    JSON.stringify(registry, null, 2)
  );

  // Build categories.json - list of all categories with their components
  const categories = components.map((component) => ({
    name: component.type,
    title: component.title,
    description: component.description,
    count: component.variants.length,
    components: component.variants.map((v) => ({
      name: v.id,
      title: v.name,
    })),
  }));

  const categoriesRegistry = {
    $schema: CONFIG.registrySchemaUrl,
    name: CONFIG.name,
    homepage: CONFIG.homepage,
    totalComponents: registryItems.length,
    totalCategories: categories.length,
    categories,
  };

  fs.writeFileSync(
    path.join(CONFIG.outputPath, "categories.json"),
    JSON.stringify(categoriesRegistry, null, 2)
  );

  console.log(`\n✅ Registry built successfully!`);
  console.log(`   - ${successCount} individual component files`);
  console.log(`   - ${failCount} components skipped`);
  console.log(`   - Output: ${CONFIG.outputPath}/`);
  console.log(`\n📋 Users can install components by:`);
  console.log(`   1. Add registry to components.json:`);
  console.log(`      "registries": { "@shadcnmiju": "${CONFIG.homepage}/r/{name}.json" }`);
  console.log(`   2. Install components:`);
  console.log(`      npx shadcn add @shadcnmiju/accordion/faq-accordion`);
}

// Run the build
buildRegistry().catch(console.error);
