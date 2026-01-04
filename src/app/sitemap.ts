import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shadcnmiju.vercel.app";
  const currentDate = new Date();

  // Define component categories
  const componentCategories = [
    "accordion-variants",
    "alert-variants",
    "avatar-variants",
    "badge-variants",
    "button-variants",
    "button-group-variants",
    "calendar-variants",
    "card-variants",
    "carousel-variants",
    "chart-variants",
    "checkbox-variants",
    "collapsible-variants",
    "combobox-variants",
    "command-variants",
    "context-menu-variants",
    "data-table-variants",
    "date-picker-variants",
    "dialog-variants",
    "drawer-variants",
    "dropdown-menu-variants",
    "empty-variants",
    "field-variants",
    "form-variants",
    "hover-card-variants",
    "input-variants",
    "input-group-variants",
    "input-otp-variants",
    "item-variants",
    "kbd-variants",
    "label-variants",
    "menubar-variants",
    "native-select-variants",
    "navigation-menu-variants",
    "pagination-variants",
    "popover-variants",
    "progress-variants",
    "radio-group-variants",
    "resizable-variants",
    "scroll-area-variants",
    "select-variants",
    "separator-variants",
    "sheet-variants",
    "sidebar-variants",
    "skeleton-variants",
    "slider-variants",
    "sonner-variants",
    "spinner-variants",
    "switch-variants",
    "table-variants",
    "tabs-variants",
    "textarea-variants",
    "toggle-variants",
    "toggle-group-variants",
    "tooltip-variants",
    "typography-variants",
  ];

  // Main pages
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  // Component pages
  const componentRoutes = componentCategories.map((category) => ({
    url: `${baseUrl}/components/${category}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...routes, ...componentRoutes];
}
