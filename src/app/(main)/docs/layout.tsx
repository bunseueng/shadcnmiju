import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation - Get Started with shadcnmiju",
  description:
    "Learn how to use shadcnmiju's collection of 200+ React component variants. Complete installation guide, usage examples, theming options, and best practices for shadcn/ui components.",
  openGraph: {
    title: "Documentation - Get Started with shadcnmiju",
    description:
      "Learn how to use shadcnmiju's collection of 200+ React component variants. Complete installation guide, usage examples, and theming options.",
    url: "https://shadcnmiju.vercel.app/docs",
  },
  twitter: {
    title: "Documentation - Get Started with shadcnmiju",
    description:
      "Learn how to use shadcnmiju's collection of 200+ React component variants.",
  },
  alternates: {
    canonical: "https://shadcnmiju.vercel.app/docs",
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
