import { Metadata } from "next";
import { componentPreviews } from "@/data/componentPreviews";

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const component = componentPreviews.find((c) => c.id === params.id);

  if (!component) {
    return {
      title: "Component Not Found - shadcnmiju",
      description: "The requested component could not be found.",
    };
  }

  const variantCount = component.variants.length;
  const componentTitle = component.title || component.id;

  return {
    title: `${component.title} - ${variantCount} Variants | shadcnmiju`,
    description: `${
      component.description ||
      `Explore ${variantCount} variants of ${componentTitle} component.`
    } Copy-paste ready React components built with shadcn/ui, Next.js, and Tailwind CSS.`,
    openGraph: {
      title: `${componentTitle} - ${variantCount} Variants | shadcnmiju`,
      description:
        component.description ||
        `Explore ${variantCount} variants of ${componentTitle} component.`,
      url: `https://shadcnmiju.vercel.app/components/${component.id}`,
      images: component.previewImage
        ? [
            {
              url: component.previewImage,
              width: 1200,
              height: 630,
              alt: `${componentTitle} Preview`,
            },
          ]
        : undefined,
    },
    twitter: {
      title: `${componentTitle} - ${variantCount} Variants | shadcnmiju`,
      description:
        component.description ||
        `Explore ${variantCount} variants of ${componentTitle} component.`,
      images: component.previewImage ? [component.previewImage] : undefined,
    },
    alternates: {
      canonical: `https://shadcnmiju.vercel.app/components/${component.id}`,
    },
    keywords: [
      componentTitle,
      "shadcn/ui",
      "React component",
      "Tailwind CSS",
      "Next.js",
      ...(component.tags || []),
    ],
  };
}

// The layout handles data fetching and ComponentShowcase rendering
// ComponentShowcase uses usePathname() to detect the current component ID
// This page component returns null as the layout does all the work
export default function ComponentIdPage() {
  return null;
}
