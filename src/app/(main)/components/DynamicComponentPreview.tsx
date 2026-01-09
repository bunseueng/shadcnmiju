"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, createContext } from "react";
import { Spinner } from "@/components/ui/spinner";

export const PreviewPortalContext = createContext<HTMLDivElement | null>(null);

interface DynamicComponentPreviewProps {
  componentPath: string;
  variantId: string;
  size: Record<string, { width: number | null }>;
  isGridView?: boolean;
}

export function DynamicComponentPreview({
  componentPath,
  variantId,
  size,
  isGridView = false,
}: DynamicComponentPreviewProps) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const portalContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(
    null
  );

  // Measure container width for smooth animations
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

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

  // For grid view, use a zoom approach to fit wide components
  if (isGridView) {
    return (
      <PreviewPortalContext.Provider value={portalContainer}>
        <div className="relative w-full h-48 overflow-hidden rounded-lg border border-border">
          {/* Loading state */}
          {!Component && !error && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Spinner className="size-6" />
            </div>
          )}

          {/* Scaled content container */}
          <div
            className="absolute inset-0 flex items-center justify-center transform"
            style={{
              transform: "scale(0.5)",
              transformOrigin: "center center",
            }}
          >
            <div className="w-[200%] flex items-center justify-center">
              <div className="bg-background rounded-xl shadow-md p-4 w-full max-w-4xl">
                <div
                  className={cn(
                    "relative flex items-center justify-center w-full",
                    componentPath.includes("sidebar") ? "py-0" : "py-4"
                  )}
                >
                  {error && <div className="text-red-500">{error}</div>}
                  {Component && <Component />}
                </div>
              </div>
            </div>
          </div>

          {/* Portal container for dialogs/modals in grid view */}
          <div
            ref={portalContainerRef}
            id={`portal-container-grid-${variantId}`}
            className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none"
            style={{ zIndex: 50 }}
          />
        </div>
      </PreviewPortalContext.Provider>
    );
  }

  // Calculate the target width - use pixel values for smooth animation
  const targetWidth = size[variantId]?.width ?? containerWidth ?? null;

  return (
    <PreviewPortalContext.Provider value={portalContainer}>
      <div
        ref={containerRef}
        data-preview-container="true"
        className="relative flex items-center justify-center rounded-lg border border-border w-full h-full p-2"
      >
        {/* Background layer */}
        <div className="absolute inset-0 bg-[url('/assets/preview-bg.png')] bg-cover bg-center opacity-20" />
        <div
          className="relative h-full mx-auto transition-[width] duration-300 ease-in-out"
          style={{
            width: targetWidth ? `${targetWidth}px` : "100%",
            maxWidth: "100%",
          }}
        >
          <ScrollArea className="bg-background shadow-md h-full flex items-center justify-center rounded-xl transition-all duration-300 relative">
            {/* Loading state */}
            {!Component && !error && (
              <div className="flex items-center justify-center py-12">
                <Spinner className="size-8" />
              </div>
            )}
            {/* Content layer */}
            <div
              className={cn(
                "relative flex items-center justify-center w-full",
                componentPath.includes("sidebar") ? "py-0" : "py-12"
              )}
            >
              {error && <div className="text-red-500">{error}</div>}
              {Component && <Component />}
            </div>
          </ScrollArea>

          {/* Portal container for dialogs/modals/popovers - stays within the screen tab width */}
          <div
            ref={portalContainerRef}
            id={`portal-container-${variantId}`}
            className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"
            style={{ zIndex: 50 }}
          />
        </div>
      </div>
    </PreviewPortalContext.Provider>
  );
}
