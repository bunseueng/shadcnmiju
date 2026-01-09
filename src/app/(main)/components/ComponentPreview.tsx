import { type ComponentPreviewType, type ComponentVariant } from "@/types/ComponentType";
import { useEffect, useState } from "react";
import { LayoutList, Grid3x3 } from "lucide-react";
import { toast } from "sonner";
import { SelectTheme } from "./SelectTheme";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { CopyTheme } from "./CopyTheme";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ComponentGridView,
  ComponentListView,
  ComponentPreviewDialog,
} from "./component-preview";

interface ComponentPreviewProps {
  selectedComponent: ComponentPreviewType | undefined;
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
}

const ComponentPreview = ({
  selectedComponent,
  viewMode,
  setViewMode,
}: ComponentPreviewProps) => {
  const [activeTab, setActiveTab] = useState<
    Record<string, "preview" | "code">
  >({});
  const [size, setSize] = useState<Record<string, { width: number | null }>>(
    {}
  );
  const [screenTab, setScreenTab] = useState<
    Record<string, "desktop" | "tablet" | "mobile">
  >({});
  const [isMobile, setIsMobile] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<ComponentVariant | null>(null);
  const [dialogTab, setDialogTab] = useState<"preview" | "code">("preview");
  const [actionState, setActionState] = useState<
    Record<string, "idle" | "loading" | "success">
  >({});

  const handleCopy = (value: string, id?: string) => {
    const key = id || value;
    setActionState((prev) => ({ ...prev, [key]: "loading" }));

    navigator.clipboard.writeText(value);

    setTimeout(() => {
      setActionState((prev) => ({ ...prev, [key]: "success" }));
      toast("Copied to clipboard");

      setTimeout(() => {
        setActionState((prev) => ({ ...prev, [key]: "idle" }));
      }, 1500); // Show check for 1.5 seconds
    }, 500); // Show loading for 0.5 seconds
  };

  const handleDownload = (code: string, fileName: string) => {
    // Create a blob from the code content
    const blob = new Blob([code], { type: "text/typescript" });
    const url = URL.createObjectURL(blob);

    // Create a temporary link and trigger download
    const link = document.createElement("a");
    link.href = url;
    link.download = `${fileName}.tsx`;
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast("File downloaded");
  };

  const setItemWidth = (id: string, width: number | null) => {
    setSize((prev) => ({
      ...prev,
      [id]: { width },
    }));
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Scroll into components id view
  useEffect(() => {
    if (selectedComponent) {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const variant = selectedComponent.variants.find((v) => v.id === hash);
        if (variant) {
          const element = document.getElementById(variant.id);
          if (element) {
            // Use setTimeout to ensure DOM is fully rendered
            setTimeout(() => {
              const headerOffset = 150; // Account for sticky header + navbar
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition =
                elementPosition + window.scrollY - headerOffset;

              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }, 100);
          }
        }
      }
    }
  }, [selectedComponent]);

  // Show error state if component not found
  if (!selectedComponent) {
    return (
      <div className="flex-1 w-full border border-dashed">
        <div className="flex items-center justify-center h-96">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold">Component Not Found</h2>
            <p className="text-muted-foreground">
              The requested component could not be found.
            </p>
            <Button asChild className="mt-4">
              <Link href="/components">Browse All Components</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full lg:w-[80%] border border-dashed">
      <div className="flex flex-wrap items-center justify-between gap-2 p-2 sm:p-3 md:p-4 sticky top-0 lg:top-18 bg-background z-30 shrink-0 border-b border-dashed">
        <div className="flex items-center gap-1 sm:gap-2">
          <ModeToggle />
          <SelectTheme />
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <CopyTheme />
          <div className="flex items-center gap-0.5 rounded-md">
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
        </div>
      </div>
      {viewMode === "grid" ? (
        // Grid Layout
        <ComponentGridView
          selectedComponent={selectedComponent}
          onVariantClick={(variant, tab) => {
            setSelectedVariant(variant);
            setDialogTab(tab);
            setDialogOpen(true);
          }}
          size={size}
        />
      ) : (
        // List Layout
        <ComponentListView
          selectedComponent={selectedComponent}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          actionState={actionState}
          handleCopy={handleCopy}
          handleDownload={handleDownload}
          isMobile={isMobile}
          screenTab={screenTab}
          setScreenTab={setScreenTab}
          setItemWidth={setItemWidth}
          size={size}
        />
      )}

      {/* Dialog for Grid View */}
      <ComponentPreviewDialog
        selectedVariant={selectedVariant}
        selectedComponent={selectedComponent}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        isMobile={isMobile}
        screenTab={screenTab}
        setScreenTab={setScreenTab}
        setItemWidth={setItemWidth}
        dialogTab={dialogTab}
        setDialogTab={setDialogTab}
        handleCopy={handleCopy}
        handleDownload={handleDownload}
        actionState={actionState}
        size={size}
      />
    </div>
  );
};

export default ComponentPreview;
