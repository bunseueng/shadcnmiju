const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'componentPreviews.tsx');
const content = fs.readFileSync(filePath, 'utf-8');

const newComponents = `  {
    id: "data-table-variants",
    title: "Data Table",
    type: "pattern",
    description: "Powerful tables with TanStack Table for sorting, filtering, and pagination",
    category: "data-display",
    slug: "data-table-variants",
    previewImage: "/previews/data-table-variants.png",
    dependencies: ["@tanstack/react-table", "table"],
    tags: ["table", "data", "tanstack", "sorting", "filtering", "pagination"],
    installCommand: "pnpm install @tanstack/react-table",
    variants: [
      {
        id: "data-table-basic",
        type: "component",
        name: "Basic Table",
        description: "Simple data table with columns and rows",
        code: "",
      },
      {
        id: "data-table-sorting",
        type: "component",
        name: "Sortable Table",
        description: "Data table with sortable columns",
        code: "",
      },
      {
        id: "data-table-filtering",
        type: "component",
        name: "Filterable Table",
        description: "Data table with search and filter functionality",
        code: "",
      },
      {
        id: "data-table-pagination",
        type: "component",
        name: "Paginated Table",
        description: "Data table with pagination controls",
        code: "",
      },
      {
        id: "data-table-row-selection",
        type: "component",
        name: "Row Selection",
        description: "Data table with selectable rows and batch actions",
        code: "",
      },
    ],
  },
  {
    id: "field-variants",
    title: "Field",
    type: "component",
    description: "Composable form fields combining labels, controls, and help text",
    category: "forms",
    slug: "field-variants",
    previewImage: "/previews/field-variants.png",
    dependencies: ["field"],
    tags: ["form", "field", "label", "input", "accessible"],
    installCommand: "npx shadcn@latest add field",
    variants: [
      {
        id: "field-basic",
        type: "component",
        name: "Basic Field",
        description: "Simple form fields with labels and descriptions",
        code: "",
      },
      {
        id: "field-horizontal",
        type: "component",
        name: "Horizontal Layout",
        description: "Fields with horizontal label and control arrangement",
        code: "",
      },
      {
        id: "field-with-validation",
        type: "component",
        name: "With Validation",
        description: "Fields with validation states and error messages",
        code: "",
      },
      {
        id: "field-group",
        type: "component",
        name: "Field Group",
        description: "Grouped fields with legends and separators",
        code: "",
      },
      {
        id: "field-responsive",
        type: "component",
        name: "Responsive Layout",
        description: "Fields that adapt to different screen sizes",
        code: "",
      },
    ],
  },
  {
    id: "item-variants",
    title: "Item",
    type: "component",
    description: "Versatile flex container for displaying content with media and actions",
    category: "layout",
    slug: "item-variants",
    previewImage: "/previews/item-variants.png",
    dependencies: ["item"],
    tags: ["item", "list", "content", "media", "actions"],
    installCommand: "npx shadcn@latest add item",
    variants: [
      {
        id: "item-basic",
        type: "component",
        name: "Basic Item",
        description: "Simple items with icon, title, and description",
        code: "",
      },
      {
        id: "item-with-actions",
        type: "component",
        name: "With Actions",
        description: "Items with action buttons",
        code: "",
      },
      {
        id: "item-with-image",
        type: "component",
        name: "With Image",
        description: "Items with image media",
        code: "",
      },
      {
        id: "item-with-header-footer",
        type: "component",
        name: "With Header & Footer",
        description: "Items with header badges and footer metadata",
        code: "",
      },
      {
        id: "item-muted",
        type: "component",
        name: "Muted Variant",
        description: "Items with muted background styling",
        code: "",
      },
    ],
  },
  {
    id: "native-select-variants",
    title: "Native Select",
    type: "component",
    description: "Styled native HTML select elements with consistent design",
    category: "forms",
    slug: "native-select-variants",
    previewImage: "/previews/native-select-variants.png",
    dependencies: ["native-select"],
    tags: ["select", "native", "form", "dropdown", "input"],
    installCommand: "npx shadcn@latest add native-select",
    variants: [
      {
        id: "native-select-basic",
        type: "component",
        name: "Basic Select",
        description: "Simple native select dropdowns",
        code: "",
      },
      {
        id: "native-select-grouped",
        type: "component",
        name: "Grouped Options",
        description: "Select with grouped option categories",
        code: "",
      },
      {
        id: "native-select-sizes",
        type: "component",
        name: "Sizes",
        description: "Select in different sizes",
        code: "",
      },
      {
        id: "native-select-disabled",
        type: "component",
        name: "Disabled States",
        description: "Disabled select and disabled options",
        code: "",
      },
      {
        id: "native-select-validation",
        type: "component",
        name: "With Validation",
        description: "Select with validation states and error handling",
        code: "",
      },
    ],
  },`;

// Find the position to insert (before the closing bracket and semicolon)
const endIndex = content.lastIndexOf('];');

if (endIndex === -1) {
  console.error('Could not find the end of the array');
  process.exit(1);
}

// Insert the new components
const newContent = content.substring(0, endIndex) + ',\n' + newComponents + '\n' + content.substring(endIndex);

// Write back to file
fs.writeFileSync(filePath, newContent, 'utf-8');

console.log('✓ Added 4 new component groups to componentPreviews.tsx');
console.log('  - Data Table (5 variants)');
console.log('  - Field (5 variants)');
console.log('  - Item (5 variants)');
console.log('  - Native Select (5 variants)');
