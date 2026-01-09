"use client";

import ComponentLists from "./ComponentLists";
import ComponentPreview from "./ComponentPreview";
import { type ComponentPreviewType } from "@/types/ComponentType";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAtom } from "jotai/react";
import { viewModeAtom } from "@/stores/modeStorage";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";

interface ComponentShowcaseProps {
  components: ComponentPreviewType[];
  componentId?: string;
}

const ComponentShowcase = ({
  components,
  componentId,
}: ComponentShowcaseProps) => {
  const [viewMode, setViewMode] = useAtom<"grid" | "list">(viewModeAtom);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const pathname = usePathname();
  const pathSegments = pathname.split("/");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

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

  // Show loading state until hydrated to prevent layout shift
  if (!mounted) {
    return (
      <div className="rounded-md flex flex-col lg:flex-row">
        <ComponentLists
          components={components}
          selectedComponent={selectedComponents}
          onSearchChange={handleSearch}
          search={search}
        />
        <div className="flex-1 w-full border border-dashed flex items-center justify-center min-h-96">
          <Spinner className="size-8" />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-md flex flex-col lg:flex-row">
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
