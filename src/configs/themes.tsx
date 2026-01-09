import themesData from "./themes.json";

export interface ThemeColors {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;
  sidebar: string;
  sidebarForeground: string;
  sidebarPrimary: string;
  sidebarPrimaryForeground: string;
  sidebarAccent: string;
  sidebarAccentForeground: string;
  sidebarBorder: string;
  sidebarRing: string;
}

export interface Theme {
  id: string;
  name: string;
  light: ThemeColors & Record<string, string>;
  dark: ThemeColors & Record<string, string>;
  radius?: string;
  fontSans?: string;
  fontSerif?: string;
  fontMono?: string;
}

// Type assertion for the imported JSON data
const themes = themesData as Theme[];

// Helper function to get all theme names
export function getThemeNames(): string[] {
  return themes.map((theme) => theme.name);
}

// Helper function to get theme by ID
export function getThemeById(id: string): Theme | undefined {
  return themes.find((theme) => theme.id === id);
}

// Helper function to export theme as JSON string (for copying)
export function exportThemeAsJson(themeId: string): string | null {
  const localTheme = localStorage.getItem("theme-id");
  const theme = getThemeById(localTheme ? localTheme || "darkmatter" : themeId);
  if (!theme) {
    console.error(`Theme "${themeId}" not found`);
    return null;
  }
  return JSON.stringify(theme, null, 2);
}

// Helper function to apply theme
export function applyTheme(themeId: string, mode: "light" | "dark") {
  const localTheme = localStorage.getItem("theme-id");
  const theme = getThemeById(
    themeId === "" ? localTheme || "darkmatter" : themeId
  );
  if (!theme) {
    console.error(`Theme "${themeId}" not found`);
    return;
  }

  const colors = theme[mode];
  const root = document.documentElement;

  // Apply all color and custom variables from the theme mode
  Object.entries(colors).forEach(([key, value]) => {
    // Convert camelCase to kebab-case
    const cssVar = key.replace(/([A-Z])/g, "-$1").toLowerCase();
    root.style.setProperty(`--${cssVar}`, value);
  });

  // Apply theme-level properties (if they exist at the root level)
  if (theme.radius) {
    root.style.setProperty("--radius", theme.radius);
  }
  if (theme.fontSans) {
    root.style.setProperty("--font-sans", theme.fontSans);
  }
  if (theme.fontSerif) {
    root.style.setProperty("--font-serif", theme.fontSerif);
  }
  if (theme.fontMono) {
    root.style.setProperty("--font-mono", theme.fontMono);
  }

  // Toggle dark class
  if (mode === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}
