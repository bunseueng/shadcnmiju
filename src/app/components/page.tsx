import ComponentShowcase from "./ComponentShowcase";
import { componentPreviews } from "@/data/componentPreviews";
import { getFileContent } from "@/lib/getComponent";
import { ComponentPreviewType } from "@/types/ComponentType";
import { Suspense } from "react";

const ComponentsPage = async () => {
  // Dynamically import components and read their code
  const componentsWithCode: ComponentPreviewType[] = await Promise.all(
    componentPreviews.map(async (component) => {
      const variantsWithCode = await Promise.all(
        component.variants.map(async (variant) => {
          // Construct file path
          const componentName = component.type.toLowerCase();
          const variantName = variant.id.toLowerCase();
          const filePath = `@/components/showcase/${componentName}/${variantName}`;

          let code = "";

          try {
            // Read file content for code display
            const content = await getFileContent(filePath);
            if (!content.startsWith("// Error:")) {
              code = content;
            }
          } catch {
            console.log(`No file found for ${filePath}`);
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

  return (
    <section className="py-10">
      <div className="container mx-auto px-5">
        <div className="space-y-4">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl md:text-4xl font-semibold">
              Shadcn Components - 1148 component patterns for Shadcn UI
            </h1>
            <p className="text-muted-foreground opacity-50 lg:max-w-5xl">
              Discover a large collection of 1,100+ shadcn UI components and
              patterns built with shadcn/ui, Tailwind CSS, and React. All
              components are production-ready, fully responsive, and optimized
              for Next.js with TypeScript. Easily copy and paste the code or
              install components directly using the shadcn CLI to build modern
              web applications faster.
            </p>
          </div>

          {/* Search */}
          <Suspense>
            <ComponentShowcase components={componentsWithCode} />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default ComponentsPage;
