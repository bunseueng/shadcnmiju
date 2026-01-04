import HeroSection from "@/components/layout/HeroSection";
import { getAllCategories, getAllVariants } from "@/data/componentPreviews";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "shadcnmiju - Beautiful React Component Library | 200+ Components",
  description:
    "Discover 200+ beautiful, copy-paste ready React components built with shadcn/ui, Next.js, and Tailwind CSS. Interactive 3D components, animations, dark mode support, and more. Free and open source.",
  openGraph: {
    title: "shadcnmiju - Beautiful React Component Library | 200+ Components",
    description:
      "Discover 200+ beautiful, copy-paste ready React components built with shadcn/ui, Next.js, and Tailwind CSS. Interactive 3D components, animations, dark mode support, and more.",
    url: "https://shadcnmiju.vercel.app",
  },
  twitter: {
    title: "shadcnmiju - Beautiful React Component Library | 200+ Components",
    description:
      "Discover 200+ beautiful, copy-paste ready React components built with shadcn/ui, Next.js, and Tailwind CSS.",
  },
};

export default function Home() {
  const components = getAllVariants();
  const category = getAllCategories();

  return <HeroSection components={components} category={category} />;
}
