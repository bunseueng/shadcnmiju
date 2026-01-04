"use client";

import ComponentLists from "./ComponentLists";
import ComponentPreview from "./ComponentPreview";
import { type ComponentPreviewType } from "@/types/ComponentType";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAtom } from "jotai/react";
import { viewModeAtom } from "@/stores/modeStorage";

interface ComponentShowcaseProps {
  components: ComponentPreviewType[];
  componentId?: string;
}

const ComponentShowcase = ({
  components,
  componentId,
}: ComponentShowcaseProps) => {
  const [viewMode, setViewMode] = useAtom<"grid" | "list">(viewModeAtom);
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
    <div className="rounded-md lg:grid lg:grid-cols-[300px_1fr]">
      <ComponentLists
        components={components}
        selectedComponent={selectedComponents}
        onSearchChange={handleSearch}
        search={search}
      />

      <ComponentPreview
        selectedComponent={selectedComponents}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
    </div>
  );
};

export default ComponentShowcase;
