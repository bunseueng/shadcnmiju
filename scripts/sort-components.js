const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'componentPreviews.tsx');
const content = fs.readFileSync(filePath, 'utf-8');

// Extract the array content between 'export const componentPreviews: ComponentPreviewType[] = [' and the final '];'
const startMarker = 'export const componentPreviews: ComponentPreviewType[] = [';
const startIndex = content.indexOf(startMarker);
const endIndex = content.lastIndexOf('];');

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find component array markers');
  process.exit(1);
}

const beforeArray = content.substring(0, startIndex + startMarker.length);
const afterArray = content.substring(endIndex);
const arrayContent = content.substring(startIndex + startMarker.length, endIndex);

// Split into individual component objects
// We need to be smart about this - find each top-level object
const components = [];
let braceCount = 0;
let currentComponent = '';
let inString = false;
let stringChar = '';
let escaped = false;

for (let i = 0; i < arrayContent.length; i++) {
  const char = arrayContent[i];
  const prevChar = i > 0 ? arrayContent[i - 1] : '';

  // Track string state
  if (!escaped && (char === '"' || char === "'" || char === '`')) {
    if (!inString) {
      inString = true;
      stringChar = char;
    } else if (char === stringChar) {
      inString = false;
      stringChar = '';
    }
  }

  escaped = char === '\\' && !escaped;

  if (!inString) {
    if (char === '{') {
      braceCount++;
    } else if (char === '}') {
      braceCount--;
    }
  }

  currentComponent += char;

  // When we close a top-level object and find a comma or end
  if (braceCount === 0 && currentComponent.trim()) {
    // Skip the comma if present
    let j = i + 1;
    while (j < arrayContent.length && (arrayContent[j] === ',' || arrayContent[j] === '\n' || arrayContent[j] === ' ')) {
      j++;
    }
    i = j - 1;

    const trimmed = currentComponent.trim();
    if (trimmed && trimmed !== ',') {
      components.push(trimmed.replace(/,\s*$/, ''));
    }
    currentComponent = '';
  }
}

console.log(`Found ${components.length} components`);

// Extract title from each component for sorting
const componentsWithTitles = components.map((comp, index) => {
  const titleMatch = comp.match(/title:\s*["']([^"']+)["']/);
  const title = titleMatch ? titleMatch[1] : `Unknown_${index}`;
  return { title, content: comp };
});

// Sort alphabetically by title
componentsWithTitles.sort((a, b) => a.title.localeCompare(b.title));

console.log('\nSorted order:');
componentsWithTitles.forEach((comp, index) => {
  console.log(`${index + 1}. ${comp.title}`);
});

// Reconstruct the file
const sortedArray = componentsWithTitles.map(c => c.content).join(',\n  ');
const newContent = beforeArray + '\n  ' + sortedArray + '\n' + afterArray;

// Write back to file
fs.writeFileSync(filePath, newContent, 'utf-8');

console.log('\n✓ Components sorted alphabetically and file updated!');
