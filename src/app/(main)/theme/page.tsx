import ThemeTesting from "./ThemeTesting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Themes - Production-Ready shadcn/ui Themes",
  description:
    "Drop-in themes with carefully crafted color tokens, typography, and dark mode support for shadcn/ui. Use with shadcn CLI or import CSS into your design system. Powered by TweakCN.",
  openGraph: {
    title: "Themes - Production-Ready shadcn/ui Themes",
    description:
      "Drop-in themes with carefully crafted color tokens, typography, and dark mode support for shadcn/ui.",
    url: "https://shadcnmiju.vercel.app/theme",
  },
  twitter: {
    title: "Themes - Production-Ready shadcn/ui Themes",
    description:
      "Drop-in themes with carefully crafted color tokens, typography, and dark mode support.",
  },
  alternates: {
    canonical: "https://shadcnmiju.vercel.app/theme",
  },
};

const ThemePage = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center space-y-2 py-10 border border-">
        <p>Themes</p>
        <h1 className="text-2xl md:text-3xl font-bold">
          Production-ready shadcn/ui themes powered by TweakCN.
        </h1>
        <p className="max-w-4xl mx-auto">
          Drop-in themes with carefully crafted color tokens, typography, and
          dark mode support. Use with shadcn CLI or import CSS into your design
          system.
        </p>
      </div>
      <div className="border border- p-5">
        <ThemeTesting />
      </div>
    </section>
  );
};

export default ThemePage;
