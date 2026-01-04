import { componentPreviews, getAllVariants } from "@/data/componentPreviews";
import { getFileContent } from "@/lib/getComponent";
import { ComponentPreviewType } from "@/types/ComponentType";
import { cache, Suspense } from "react";
import ComponentShowcase from "./ComponentShowcase";
import { Metadata } from "next";
import { SkeletonComponentShowcase } from "./SkeletonLoader";

export const metadata: Metadata = {
  title: "Browse All Components - shadcnmiju",
  description:
    "Explore 200+ beautiful React component variants organized by category. Buttons, cards, forms, tables, charts, and more. All components are copy-paste ready with shadcn/ui, Next.js, and Tailwind CSS.",
  openGraph: {
    title: "Browse All Components - shadcnmiju",
    description:
      "Explore 200+ beautiful React component variants organized by category. All components are copy-paste ready.",
    url: "https://shadcnmiju.vercel.app/components",
  },
  twitter: {
    title: "Browse All Components - shadcnmiju",
    description:
      "Explore 200+ beautiful React component variants organized by category.",
  },
  alternates: {
    canonical: "https://shadcnmiju.vercel.app/components",
  },
};

// Cache the data fetching to prevent re-fetching on route changes
const getComponentsWithCode = cache(
  async (): Promise<ComponentPreviewType[]> => {
    return Promise.all(
      componentPreviews.map(async (component) => {
        const variantsWithCode = await Promise.all(
          component.variants.map(async (variant) => {
            const componentName = component.type.toLowerCase();
            const variantName = variant.id.toLowerCase();
            const filePath = `@/components/showcase/${componentName}/${variantName}`;

            let code = "";

            try {
              const content = await getFileContent(filePath);
              if (!content.startsWith("// Error:")) {
                code = content;
              }
            } catch {
              // File not found - code remains empty
            }

            return {
              ...variant,
              code,
              filePath,
            };
          })
        );

        return {
          ...component,
          variants: variantsWithCode,
        };
      })
    );
  }
);

export default async function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const componentsWithCode = await getComponentsWithCode();
  const components = getAllVariants();
  return (
    <section className="py-10">
      <div className="container mx-auto px-5">
        <div className="space-y-4">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl md:text-4xl font-semibold">
              Shadcn Components - {components.flat().length}+ component patterns
              for Shadcn UI
            </h1>
            <p className="text-muted-foreground opacity-50 lg:max-w-5xl">
              Discover a large collection of {components.flat().length}+ shadcn
              UI components and patterns built with shadcn/ui, Tailwind CSS, and
              React. All components are production-ready, fully responsive, and
              optimized for Next.js with TypeScript. Easily copy and paste the
              code or install components directly using the shadcn CLI to build
              modern web applications faster.
            </p>
          </div>

          <Suspense fallback={<SkeletonComponentShowcase />}>
            <ComponentShowcase components={componentsWithCode} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
