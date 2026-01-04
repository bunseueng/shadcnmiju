import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { StructuredData } from "./structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shadcnmiju.vercel.app"),
  title: {
    default: "shadcnmiju - Beautiful React Component Library",
    template: "%s | shadcnmiju",
  },
  description:
    "A curated collection of 200+ beautiful, interactive component variants built with shadcn/ui, Next.js, and Tailwind CSS. Copy & paste ready components with 3D effects, animations, and dark mode support.",
  keywords: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "shadcn/ui",
    "UI Components",
    "Component Library",
    "React Components",
    "TypeScript",
    "Open Source",
    "3D Components",
    "Animated Components",
    "Dark Mode",
    "Radix UI",
    "Design System",
    "UI Kit",
  ],
  authors: [
    {
      name: "shadcnmiju",
      url: "https://github.com/YOUR_USERNAME/shadcnmiju",
    },
  ],
  creator: "shadcnmiju",
  publisher: "shadcnmiju",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shadcnmiju.vercel.app",
    title: "shadcnmiju - Beautiful React Component Library",
    description:
      "A curated collection of 200+ beautiful, interactive component variants built with shadcn/ui, Next.js, and Tailwind CSS. Copy & paste ready components with 3D effects, animations, and dark mode support.",
    siteName: "shadcnmiju",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "shadcnmiju - Beautiful React Component Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "shadcnmiju - Beautiful React Component Library",
    description:
      "A curated collection of 200+ beautiful, interactive component variants built with shadcn/ui, Next.js, and Tailwind CSS.",
    images: ["/og-image.png"],
    creator: "@YOUR_TWITTER_HANDLE",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    // yandex: "YOUR_YANDEX_VERIFICATION_CODE",
    // bing: "YOUR_BING_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "https://shadcnmiju.vercel.app",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
