import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Eye } from "lucide-react";
import Masonry from "react-masonry-css";
import { DynamicComponentPreview } from "../DynamicComponentPreview";
import { ComponentPreviewType, ComponentVariant } from "@/types/ComponentType";

interface ComponentGridViewProps {
  selectedComponent: ComponentPreviewType;
  onVariantClick: (variant: ComponentVariant, tab: "preview" | "code") => void;
  size: Record<string, { width: number | null }>;
}

const ComponentGridView = ({
  selectedComponent,
  onVariantClick,
  size,
}: ComponentGridViewProps) => {
  // Responsive breakpoints for masonry columns
  const breakpointColumns = {
    default: 3, // 6 columns on very large screens
    1280: 3, // 4 columns on xl screens
    1024: 2, // 3 columns on lg screens
    768: 2, // 2 columns on md screens
    640: 2, // 2 columns on sm screens
    480: 1, // 1 column on xs screens
  };
  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="flex -ml-4 w-auto px-4 py-4"
      columnClassName="pl-4 bg-clip-padding"
    >
      {selectedComponent?.variants.map((variant) => {
        return (
          <div className="flex flex-col gap-3 mb-4" key={variant.id}>
            <div
              className="w-full rounded-lg border overflow-hidden relative bg-card group hover:border-primary/50 transition-all cursor-pointer"
              onClick={() => onVariantClick(variant, "preview")}
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-2 p-2 border-b bg-muted/30">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <h3 className="text-sm font-medium truncate">
                    {variant.name}
                  </h3>
                  <Badge className="rounded-sm shrink-0">Free</Badge>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 shrink-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    onVariantClick(variant, "preview");
                  }}
                >
                  <Eye className="h-3 w-3" />
                </Button>
              </div>

              {/* Preview Thumbnail */}
              <div className="w-full bg-muted/20 min-h-40 max-h-80 flex items-center justify-center relative overflow-hidden">
                <div className="w-full h-full overflow-hidden">
                  <DynamicComponentPreview
                    componentPath={`${selectedComponent.type}/${variant.id}`}
                    variantId={variant.id}
                    size={size}
                    isGridView={true}
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        onVariantClick(variant, "preview");
                      }}
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        onVariantClick(variant, "code");
                      }}
                    >
                      <Code className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Masonry>
  );
};

export default ComponentGridView;
