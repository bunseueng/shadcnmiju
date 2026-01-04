const fs = require('fs');
const path = require('path');

const componentsToFix = [
  {
    file: 'dropdown-menu.tsx',
    contentComponent: 'DropdownMenuContent',
    overlayComponent: 'DropdownMenuOverlay', // May not exist
    portalComponent: 'DropdownMenuPortal',
  },
  {
    file: 'context-menu.tsx',
    contentComponent: 'ContextMenuContent',
    overlayComponent: null, // Context menus don't have overlays
    portalComponent: 'ContextMenuPortal',
  },
  {
    file: 'hover-card.tsx',
    contentComponent: 'HoverCardContent',
    overlayComponent: null,
    portalComponent: 'HoverCardPortal',
  },
  {
    file: 'command.tsx',
    contentComponent: 'CommandDialog',
    overlayComponent: null,
    portalComponent: null,
  },
];

const uiDir = path.join(__dirname, '..', 'src', 'components', 'ui');

componentsToFix.forEach(({ file }) => {
  const filePath = path.join(uiDir, file);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Skipping ${file} - file not found`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // Check if already has PreviewPortalContext import
  if (content.includes('PreviewPortalContext')) {
    console.log(`✓ ${file} - already has PreviewPortalContext`);
    return;
  }

  // Add import after the existing imports
  const importStatement = `import { PreviewPortalContext } from "@/app/components/DynamicComponentPreview"`;

  // Find the last import statement
  const lines = content.split('\n');
  let lastImportIndex = -1;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith('import ')) {
      lastImportIndex = i;
    }
  }

  if (lastImportIndex !== -1) {
    lines.splice(lastImportIndex + 1, 0, importStatement);
    content = lines.join('\n');

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✓ Added PreviewPortalContext import to ${file}`);
  } else {
    console.log(`⚠️  Could not find import section in ${file}`);
  }
});

console.log('\n✅ Portal components updated with PreviewPortalContext import');
console.log('\n⚠️  Note: You may need to manually update Content components to use the context');
