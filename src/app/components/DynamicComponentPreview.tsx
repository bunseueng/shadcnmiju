"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect, useRef, useState, createContext } from "react";

export const PreviewPortalContext = createContext<HTMLDivElement | null>(null);

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
  const portalContainerRef = useRef<HTMLDivElement>(null);
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(null);

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

  useEffect(() => {
    // Update portal container state when ref is available
    if (portalContainerRef.current) {
      setPortalContainer(portalContainerRef.current);
    }
  }, []);

  return (
    <PreviewPortalContext.Provider value={portalContainer}>
      <div className="relative flex items-center justify-center rounded-lg border border-border p-2 overflow-hidden w-full h-full">
        {/* Background layer */}
        <div
          className="absolute inset-0 bg-[url('/assets/preview-bg.png')] bg-cover bg-center opacity-20"
          aria-hidden
        />

        <div
          className="relative h-full mx-auto"
          style={{
            width: size[variantId]?.width
              ? `${size[variantId]?.width}px`
              : "100%",
          }}
        >
          <ScrollArea
            className="bg-background shadow-md h-full flex items-center justify-center rounded-xl py-4 transform transition-all duration-300 relative"
          >
            {/* Content layer */}
            <div className="relative flex items-center justify-center w-full py-5">
              {error && <div className="text-red-500">{error}</div>}
              {Component && <Component />}
            </div>
          </ScrollArea>

          {/* Portal container for dialogs/modals - positioned to fill the sized container */}
          <div
            ref={portalContainerRef}
            id={`portal-container-${variantId}`}
            className="absolute inset-0 rounded-xl pointer-events-none *:pointer-events-auto"
            style={{ zIndex: 50 }}
          />
        </div>
      </div>
    </PreviewPortalContext.Provider>
  );
}
