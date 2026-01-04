const fs = require('fs');
const path = require('path');

// Read the current file
const filePath = path.join(__dirname, '..', 'src', 'data', 'componentPreviews.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Pattern to find each component entry and extract installCommand
const componentRegex = /installCommand:\s*"([^"]*)",\s*\n\s*variants:\s*\[/g;

// For each match, we need to:
// 1. Remove the installCommand from the parent level
// 2. Add installCommand to each variant

let match;
const replacements = [];

while ((match = componentRegex.exec(content)) !== null) {
  const installCommand = match[1];
  const fullMatch = match[0];
  const startIndex = match.index;

  replacements.push({
    installCommand,
    fullMatch,
    startIndex,
    newText: `variants: [`
  });
}

// Apply replacements in reverse order to maintain indices
replacements.reverse().forEach(rep => {
  content = content.slice(0, rep.startIndex) + rep.newText + content.slice(rep.startIndex + rep.fullMatch.length);
});

// Now add installCommand to each variant
// Pattern: code: "",\n      },
// Replace with: code: "", installCommand: "...",\n      },

// We need a smarter approach - let's parse the structure
// For now, let's do a simpler replacement

// Find all variant blocks and add installCommand before the closing }
// Pattern: find each variant object that ends with code: "",

// Get the default install command for each component type
const componentInstallCommands = {
  'accordion': 'npx shadcn@latest add accordion',
  'alert': 'npx shadcn@latest add alert',
  'alert-dialog': 'npx shadcn@latest add alert-dialog button',
  'aspect-ratio': 'npx shadcn@latest add aspect-ratio',
  'avatar': 'npx shadcn@latest add avatar',
  'badge': 'npx shadcn@latest add badge',
  'breadcrumb': 'npx shadcn@latest add breadcrumb',
  'button': 'npx shadcn@latest add button',
  'button-group': 'npx shadcn@latest add button',
  'calendar': 'npx shadcn@latest add calendar button dialog input label',
  'card': 'npx shadcn@latest add card',
  'carousel': 'npx shadcn@latest add carousel',
  'chart': 'npx shadcn@latest add card && npm install recharts',
  'checkbox': 'npx shadcn@latest add checkbox',
  'collapsible': 'npx shadcn@latest add collapsible',
  'combobox': 'npx shadcn@latest add popover command button form',
  'command': 'npx shadcn@latest add command',
  'context-menu': 'npx shadcn@latest add context-menu',
  'data-table': 'npx shadcn@latest add table && npm install @tanstack/react-table',
  'date-picker': 'npx shadcn@latest add calendar popover button',
  'dialog': 'npx shadcn@latest add dialog button',
  'drawer': 'npx shadcn@latest add drawer button input label textarea',
  'dropdown-menu': 'npx shadcn@latest add dropdown-menu button',
  'empty': 'npx shadcn@latest add button',
  'field': 'npx shadcn@latest add input label',
  'form': 'npx shadcn@latest add form input button textarea select',
  'hover-card': 'npx shadcn@latest add hover-card avatar button',
  'input': 'npx shadcn@latest add input label',
  'input-group': 'npx shadcn@latest add input button select',
  'input-otp': 'npx shadcn@latest add input-otp button',
  'item': 'npx shadcn@latest add button',
  'kbd': 'npm install @radix-ui/react-slot',
  'label': 'npx shadcn@latest add label input',
  'menubar': 'npx shadcn@latest add menubar',
  'native-select': 'npx shadcn@latest add label',
  'navigation-menu': 'npx shadcn@latest add navigation-menu',
  'pagination': 'npx shadcn@latest add pagination',
  'popover': 'npx shadcn@latest add popover button input label avatar badge',
  'progress': 'npx shadcn@latest add progress',
  'radio-group': 'npx shadcn@latest add radio-group',
  'resizable': 'npx shadcn@latest add resizable',
  'scroll-area': 'npx shadcn@latest add scroll-area',
  'select': 'npx shadcn@latest add select',
  'separator': 'npx shadcn@latest add separator',
  'sheet': 'npx shadcn@latest add sheet button input label',
  'sidebar': 'npx shadcn@latest add sidebar',
  'skeleton': 'npx shadcn@latest add skeleton',
  'slider': 'npx shadcn@latest add slider',
  'sonner': 'npx shadcn@latest add sonner button',
  'spinner': '',
  'switch': 'npx shadcn@latest add switch',
  'table': 'npx shadcn@latest add table',
  'tabs': 'npx shadcn@latest add tabs',
  'textarea': 'npx shadcn@latest add textarea',
  'toggle': 'npx shadcn@latest add toggle',
  'toggle-group': 'npx shadcn@latest add toggle-group',
  'tooltip': 'npx shadcn@latest add tooltip',
  'typography': '',
};

// Read original file again
content = fs.readFileSync(filePath, 'utf8');

// Remove installCommand from parent level and add to variants
// This regex finds: type: "xxx", ... code: "",
const variantRegex = /type:\s*"([^"]+)",\s*\n\s*name:\s*"[^"]+",\s*\n\s*description:\s*"[^"]*",\s*\n\s*code:\s*"",/g;

content = content.replace(variantRegex, (match, type) => {
  const installCmd = componentInstallCommands[type] || '';
  return match.replace('code: "",', `code: "",\n        installCommand: "${installCmd}",`);
});

// Remove the old installCommand lines from parent level
content = content.replace(/\s*installCommand:\s*"[^"]*",\s*\n(\s*variants:)/g, '\n$1');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Migration complete!');
