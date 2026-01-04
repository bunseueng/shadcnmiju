import { notFound } from "next/navigation";
import { componentPreviews } from "@/data/componentPreviews";
import dynamic from "next/dynamic";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

// Find variant info
function findVariantInfo(variantId: string) {
  for (const component of componentPreviews) {
    const variant = component.variants.find((v) => v.id === variantId);
    if (variant) {
      return {
        name: variant.name,
        description: variant.description,
        type: component.type,
        componentTitle: component.title,
      };
    }
  }
  return null;
}

// Generate metadata for preview pages
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id: variantId } = await params;
  const variantInfo = findVariantInfo(variantId);

  if (!variantInfo) {
    return {
      title: "Preview Not Found - shadcnmiju",
      description: "The requested component preview could not be found.",
    };
  }

  return {
    title: `${variantInfo.name} Preview - ${variantInfo.componentTitle} | shadcnmiju`,
    description: `Live preview of ${variantInfo.name} - ${variantInfo.description || "Interactive component preview"}`,
    robots: {
      index: false, // Don't index preview pages
      follow: false,
    },
  };
}

// Generate static params for all variants
export async function generateStaticParams() {
  const params: { id: string }[] = [];
  for (const component of componentPreviews) {
    for (const variant of component.variants) {
      params.push({ id: variant.id });
    }
  }
  return params;
}

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: variantId } = await params;
  const variantInfo = findVariantInfo(variantId);

  if (!variantInfo) {
    notFound();
  }

  const Component = dynamic(
    () => import(`@/components/showcase/${variantInfo.type}/${variantId}`),
    {
      loading: () => (
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ),
    }
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url(/assets/preview-bg.png)]">
      <div className="w-full max-w-4xl mx-auto flex items-center justify-center">
        <Component />
      </div>
    </div>
  );
}
