import Script from "next/script";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "shadcnmiju",
    applicationCategory: "DeveloperApplication",
    description:
      "A curated collection of 200+ beautiful, interactive component variants built with shadcn/ui, Next.js, and Tailwind CSS. Copy & paste ready components with 3D effects, animations, and dark mode support.",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
    },
    author: {
      "@type": "Organization",
      name: "shadcnmiju",
      url: "https://shadcnmiju.vercel.app",
    },
    keywords:
      "React, Next.js, Tailwind CSS, shadcn/ui, UI Components, Component Library, TypeScript, Open Source, 3D Components, Animated Components",
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
