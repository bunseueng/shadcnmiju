import ComponentShowcase from "./ComponentShowcase";
import { componentPreviews } from "@/data/componentPreviews";
import { getFileContent } from "@/lib/getComponent";
import { ComponentPreviewType } from "@/types/ComponentType";

// Force dynamic rendering in development to always fetch fresh code
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const ComponentsPage = async () => {
  // Read file content for each variant
  const componentsWithCode: ComponentPreviewType[] = await Promise.all(
    componentPreviews.map(async (component) => {
      const variantsWithCode = await Promise.all(
        component.variants.map(async (variant) => {
          // Try to read file content if it exists
          let fileCode = variant.code;

          // Check if this variant has a corresponding file
          const componentName = component.type.toLowerCase();
          const variantName = variant.id.toLowerCase();
          const filePath = `@/components/showcase/${componentName}/${variantName}`;

          try {
            const content = await getFileContent(filePath);
            if (!content.startsWith("// Error:")) {
              fileCode = content;
            }
          } catch {
            // If file doesn't exist, use the inline code string
            console.log(`No file found for ${filePath}, using inline code`);
          }

          return {
            ...variant,
            code: fileCode,
            filePath: filePath,
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
          <ComponentShowcase components={componentsWithCode} />
        </div>
      </div>
    </section>
  );
};

export default ComponentsPage;
