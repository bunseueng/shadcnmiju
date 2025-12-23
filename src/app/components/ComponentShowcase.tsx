"use client";

import { useState } from "react";
import ComponentLists from "./ComponentLists";
import ComponentPreview from "./ComponentPreview";
import { type ComponentPreviewType } from "@/types/ComponentType";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface ComponentShowcaseProps {
  components: ComponentPreviewType[];
  componentId?: string;
}

const ComponentShowcase = ({
  components,
  componentId,
}: ComponentShowcaseProps) => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const pathname = usePathname();
  const pathSegments = pathname.split("/");

  const secondSegment = pathSegments[2];

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.replace(`?${params.toString()}`);
  };

  const selectedId = componentId
    ? componentId
    : secondSegment || "accordion-variants";

  const selectedComponents = components.find(
    (component) => component.id === selectedId
  );
  return (
    <div className="border rounded-md overflow-hidden">
      {/* Main Content - Split View */}
      <div className="flex flex-col lg:flex-row">
        <ComponentLists
          viewMode={viewMode}
          components={components}
          selectedComponent={selectedComponents}
          onSearchChange={handleSearch}
          search={search}
        />

        <ComponentPreview
          selectedComponent={selectedComponents}
          components={components}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
      </div>
    </div>
  );
};

export default ComponentShowcase;
