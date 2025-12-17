"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Grid3x3, LayoutList, Search } from "lucide-react";
import ComponentLists from "./ComponentLists";
import ComponentPreview from "./ComponentPreview";
import { type ComponentPreviewType } from "@/types/ComponentType";
import { useRouter, useSearchParams } from "next/navigation";

interface ComponentShowcaseProps {
  components: ComponentPreviewType[];
}

const ComponentShowcase = ({ components }: ComponentShowcaseProps) => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentPreviewType>(components[0]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  const filteredComponents = components.filter((component) => {
    return component.type.toLowerCase().includes(search.toLowerCase());
  });

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.replace(`?${params.toString()}`);
  };
  return (
    <div className="border rounded-md p-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search components..."
            className="pl-9 bg-secondary border-border"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-1 rounded-md border border-border bg-secondary p-1">
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="icon"
            className="h-7 w-7"
            onClick={() => setViewMode("list")}
            title="List View"
          >
            <LayoutList className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="icon"
            className="h-7 w-7"
            onClick={() => setViewMode("grid")}
            title="Grid View"
          >
            <Grid3x3 className="h-4 w-4" />
          </Button>
        </div>
      </div>{" "}
      {/* Main Content - Split View */}
      <div className="flex flex-1 overflow-hidden">
        <ComponentLists
          viewMode={viewMode}
          components={filteredComponents}
          selectedComponent={selectedComponent}
          onSelectedComponent={setSelectedComponent}
        />

        <ComponentPreview
          selectedComponent={selectedComponent}
          components={components}
        />
      </div>
    </div>
  );
};

export default ComponentShowcase;
