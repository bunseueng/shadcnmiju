import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { type ComponentPreviewType } from "@/types/ComponentType";
import LoadingButton from "@/components/showcase/button/loading-button";
import UploadButton from "@/components/showcase/button/upload-button";
import LinkButton from "@/components/showcase/button/link-button";
import NextButton from "@/components/showcase/button/next-button";
import PreviousButton from "@/components/showcase/button/prev-button";
import IconButton from "@/components/showcase/button/icon-button";
import ButtonRounded from "@/components/showcase/button/rounded-button";
import ButtonSize from "@/components/showcase/button/button-size";
import DeleteButton from "@/components/showcase/button/delete-button";
import DisabledButton from "@/components/showcase/button/disabled-button";
import GhostIconButton from "@/components/showcase/button/ghost-icon-button";
import ButtonGroup from "@/components/showcase/button/button-group";
import LoginCard from "@/components/showcase/card/login-card";
import HoverableCard from "@/components/showcase/card/hoverable-card";
import ProductCard from "@/components/showcase/card/product-card";
import ProfileCard from "@/components/showcase/card/profile-card";
import StatsCard from "@/components/showcase/card/stats-card";

export const componentPreviews: ComponentPreviewType[] = [
  {
    id: "button-variants",
    title: "Button Variants",
    type: "button",
    description:
      "A collection of button styles for different use cases. Includes default, secondary, outline, ghost, and destructive variants.",
    category: "buttons",
    slug: "button-variants",
    previewImage: "/previews/button-variants.png",
    dependencies: ["button"],
    tags: ["button", "action", "cta", "interactive"],
    installCommand: "npx shadcn@latest add button",
    variants: [
      {
        id: "standard",
        type: "button",
        name: "Standard",
        description: "Primary action button with brand colors",
        preview: <Button>Standard</Button>,
      },
      {
        id: "secondary",
        type: "button",
        name: "Secondary",
        description: "Less prominent secondary action",
        preview: <Button variant="secondary">Secondary</Button>,
      },
      {
        id: "outline",
        type: "button",
        name: "Outline",
        description: "Transparent with border outline",
        preview: <Button variant="outline">Outline</Button>,
      },
      {
        id: "ghost",
        type: "button",
        name: "Ghost",
        description: "Minimal style with no background",
        preview: <Button variant="ghost">Ghost</Button>,
      },
      {
        id: "destructive",
        type: "button",
        name: "Destructive",
        description: "Danger or delete actions",
        preview: <Button variant="destructive">Delete</Button>,
      },
      {
        id: "loading-button",
        type: "button",
        name: "Loading Button",
        description: "Primary action button with brand colors",
        preview: <LoadingButton />,
      },
      {
        id: "upload-button",
        type: "button",
        name: "Upload Button",
        description: "Primary action button with brand colors",
        preview: <UploadButton />,
      },
      {
        id: "link-button",
        type: "button",
        name: "Link Button",
        description: "Primary action button with brand colors",
        preview: <LinkButton />,
      },
      {
        id: "prev-button",
        type: "button",
        name: "Prev Button",
        description: "Primary action button with brand colors",
        preview: <PreviousButton />,
      },
      {
        id: "next-button",
        type: "button",
        name: "Next Button",
        description: "Primary action button with brand colors",
        preview: <NextButton />,
      },
      {
        id: "icon-button",
        type: "button",
        name: "Icon Button",
        description: "Primary action button with brand colors",
        preview: <IconButton />,
      },
      {
        id: "rounded-button",
        type: "button",
        name: "Rounded Button",
        description: "Primary action button with brand colors",
        preview: <ButtonRounded />,
      },
      {
        id: "button-size",
        type: "button",
        name: "Button Size",
        description: "Primary action button with brand colors",
        preview: <ButtonSize />,
      },
      {
        id: "delete-button",
        type: "button",
        name: "Destructive With Icon",
        description: "Delete button with trash icon for destructive actions",
        preview: <DeleteButton />,
      },
      {
        id: "disabled-button",
        type: "button",
        name: "Disabled State",
        description: "Disabled button variants showing non-interactive state",
        preview: <DisabledButton />,
      },
      {
        id: "ghost-icon-button",
        type: "button",
        name: "Ghost Icon Buttons",
        description: "Minimal ghost variant icon buttons for toolbar actions",
        preview: <GhostIconButton />,
      },
      {
        id: "button-group",
        type: "button",
        name: "Button Group",
        description: "Multiple buttons grouped together for related actions",
        preview: <ButtonGroup />,
      },
    ],
  },
  {
    id: "card-variants",
    title: "Card Variants",
    type: "card",
    description:
      "Flexible card components with different visual styles. Perfect for content containers, product cards, and feature sections.",
    category: "cards",
    slug: "card-variants",
    previewImage: "/previews/card-variants.png",
    dependencies: ["card"],
    tags: ["card", "container", "layout"],
    installCommand: "npx shadcn@latest add card",
    variants: [
      {
        id: "login-card",
        type: "card",
        name: "Login Card",
        description: "Standard card with subtle border",
        preview: <LoginCard />,
      },
      {
        id: "hoverable-card",
        type: "card",
        name: "Hoverable Card",
        description: "Standard card with subtle border",
        preview: <HoverableCard />,
      },
      {
        id: "product-card",
        type: "card",
        name: "Product Card",
        description: "Card with prominent colored border",
        preview: <ProductCard />,
      },
      {
        id: "profile-card",
        type: "card",
        name: "Profile-card",
        description: "Card with shadow for depth",
        preview: <ProfileCard />,
      },
      {
        id: "stats-card",
        type: "card",
        name: "Stats Card",
        description: "Card with gradient background",
        preview: <StatsCard />,
      },
    ],
  },
  {
    id: "badge-variants",
    title: "Badge Variants",
    type: "badge",
    description:
      "Small labels and tags for status, categories, and notifications. Multiple color options available.",
    category: "badges",
    slug: "badge-variants",
    previewImage: "/previews/badge-variants.png",
    dependencies: ["badge"],
    tags: ["badge", "tag", "label", "status"],
    installCommand: "npx shadcn@latest add badge",
    variants: [
      {
        id: "default",
        type: "badge",
        name: "Default",
        description: "Primary badge style",
        preview: <Badge>New</Badge>,
        code: `<Badge>New</Badge>`,
      },
      {
        id: "secondary-badge",
        type: "badge",
        name: "Secondary-badge",
        description: "Muted gray badge",
        preview: <Badge variant="secondary">Update</Badge>,
        code: `<Badge variant="secondary">Update</Badge>`,
      },
      {
        id: "outline-badge",
        type: "badge",
        name: "Outline-badge",
        description: "Transparent with border",
        preview: <Badge variant="outline">Draft</Badge>,
        code: `<Badge variant="outline">Draft</Badge>`,
      },
      {
        id: "error-badge",
        type: "badge",
        name: "error-badge",
        description: "Red error badge",
        preview: <Badge variant="destructive">Error</Badge>,
        code: `<Badge variant="destructive">Error</Badge>`,
      },
      {
        id: "success-badge",
        type: "badge",
        name: "Success-badge",
        description: "Green success badge",
        preview: <Badge className="bg-green-500 text-white">Success</Badge>,
        code: `<Badge className="bg-green-500 text-white">Success</Badge>`,
      },
      {
        id: "warning-badge",
        type: "badge",
        name: "Warning-badge",
        description: "Yellow warning badge",
        preview: <Badge className="bg-yellow-500 text-black">Warning</Badge>,
        code: `<Badge className="bg-yellow-500 text-black">Warning</Badge>`,
      },
    ],
  },
];

// Helper function to get component by ID
export function getComponentPreview(
  id: string
): ComponentPreviewType | undefined {
  return componentPreviews.find((comp) => comp.id === id);
}

// Helper function to get component by slug
export function getComponentBySlug(
  slug: string
): ComponentPreviewType | undefined {
  return componentPreviews.find((comp) => comp.slug === slug);
}

// Helper function to get all components by category
export function getComponentsByCategory(
  category: string
): ComponentPreviewType[] {
  return componentPreviews.filter((comp) => comp.category === category);
}

// Helper function to get all categories
export function getAllCategories(): string[] {
  return Array.from(new Set(componentPreviews.map((comp) => comp.category)));
}
