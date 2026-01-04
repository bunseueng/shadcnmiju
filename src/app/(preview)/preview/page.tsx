"use client";

import React from "react";
import Link from "next/link";
import { componentPreviews } from "@/data/componentPreviews";

export default function PreviewIndexPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Component Preview
          </h1>
          <p className="text-muted-foreground">
            Select a component variant to preview in isolation.
          </p>
        </div>

        <div className="space-y-6">
          {componentPreviews.map((component) => (
            <div key={component.id} className="border rounded-lg p-4">
              <h2 className="text-lg font-semibold text-foreground mb-3">
                {component.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {component.variants.map((variant) => (
                  <Link
                    key={variant.id}
                    href={`/preview/${variant.id}`}
                    className="inline-flex items-center px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors"
                  >
                    {variant.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
