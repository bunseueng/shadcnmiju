"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect, useState } from "react";

interface DynamicComponentPreviewProps {
  componentPath: string;
  variantId: string;
  size: Record<string, { width: number | null }>;
}

export function DynamicComponentPreview({
  componentPath,
  variantId,
  size,
}: DynamicComponentPreviewProps) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Dynamically import the component with HMR support
    const loadComponent = async () => {
      try {
        const imported = await import(
          /* webpackMode: "eager" */ `@/components/showcase/${componentPath}`
        );
        setComponent(() => imported.default);
        setError(null);
      } catch (err) {
        console.error("Failed to load component:", err);
        setError(`Component not found: ${componentPath}`);
      }
    };

    loadComponent();
  }, [componentPath, variantId]); // Re-run when path changes

  return (
    <div className="relative flex items-center justify-center rounded-lg border border-border p-2 overflow-hidden w-full h-full">
      {/* Background layer */}
      <div
        className="absolute inset-0 bg-[url('/assets/preview-bg.png')] bg-cover bg-center opacity-20"
        aria-hidden
      />

      <ScrollArea
        className="bg-background shadow-md h-full flex items-center justify-center rounded-xl py-4 transform transition-all duration-300"
        style={{
          width: size[variantId]?.width
            ? `${size[variantId]?.width}px`
            : "100%",
        }}
      >
        {/* Content layer */}
        <div className="relative flex items-center justify-center w-full py-5">
          {error && <div className="text-red-500">{error}</div>}
          {Component && <Component />}
        </div>
      </ScrollArea>
    </div>
  );
}
