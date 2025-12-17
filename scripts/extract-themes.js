#!/usr/bin/env node
/**
 * Extract themes from themes.tsx and export to themes.json
 *
 * This script reads the TypeScript themes array and converts it to JSON
 * for easy sharing and copying by users.
 *
 * Usage: node scripts/extract-themes.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔄 Extracting themes from themes.tsx...\n');

// Read the themes.tsx file
const themesFile = fs.readFileSync(
  path.join(__dirname, '../src/configs/themes.tsx'),
  'utf8'
);

// Find the start and end of the themes array
const startMatch = themesFile.match(/export const themes: Theme\[\] = \[/);
if (!startMatch) {
  console.error('❌ Could not find themes array start');
  process.exit(1);
}

const startIndex = startMatch.index + startMatch[0].length;

// Find the matching closing bracket
let bracketCount = 1;
let endIndex = startIndex;
for (let i = startIndex; i < themesFile.length; i++) {
  if (themesFile[i] === '[' || themesFile[i] === '{') bracketCount++;
  if (themesFile[i] === ']' || themesFile[i] === '}') bracketCount--;
  if (bracketCount === 0) {
    endIndex = i;
    break;
  }
}

// Extract themes array content
const themesContent = '[' + themesFile.substring(startIndex, endIndex) + ']';

// Use eval in a safe context (only for build scripts)
const themes = eval('(' + themesContent + ')');

// Write to JSON file
const outputPath = path.join(__dirname, '../src/configs/themes.json');
fs.writeFileSync(outputPath, JSON.stringify(themes, null, 2));

console.log('✅ Themes exported successfully!');
console.log(`📊 Total themes: ${themes.length}`);
console.log(`📁 Location: ${outputPath}`);
console.log(`📦 File size: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB\n`);

// List all theme names
console.log('📋 Available Themes:');
themes.forEach((theme, index) => {
  console.log(`   ${String(index + 1).padStart(2, ' ')}. ${theme.name.padEnd(20, ' ')} (${theme.id})`);
});

console.log('\n✨ Done!\n');
