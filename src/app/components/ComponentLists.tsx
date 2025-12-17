import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { ComponentPreviewType } from "@/types/ComponentType";
import { Badge } from "@/components/ui/badge";

interface ComponentListsProps {
  viewMode: "grid" | "list";
  components: ComponentPreviewType[];
  selectedComponent: ComponentPreviewType;
  onSelectedComponent: (component: ComponentPreviewType) => void;
}

const ComponentLists = ({
  viewMode,
  components,
  selectedComponent,
  onSelectedComponent,
}: ComponentListsProps) => {
  return (
    <div className="w-full border-r border-border md:w-100 lg:w-120">
      <ScrollArea className="h-full">
        <div
          className={cn(
            "py-4 pr-4",
            viewMode === "grid"
              ? "grid grid-cols-1 gap-3"
              : "flex flex-col gap-2"
          )}
        >
          {components?.length > 0 ? (
            components.map((component) => (
              <div key={component.id}>
                <button
                  type="button"
                  onClick={() => onSelectedComponent(component)}
                  className={cn(
                    "group flex flex-col items-start gap-2 rounded-lg border p-4 text-left transition-all hover:border-accent",
                    selectedComponent.id === component.id
                      ? "border-accent bg-accent/10"
                      : "border-border bg-card"
                  )}
                >
                  <div className="flex w-full items-start justify-between gap-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-card-foreground group-hover:text-accent-foreground">
                        {component.type.slice(0, 1).toUpperCase() +
                          component.type.slice(1)}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                        {component.description}
                      </p>
                    </div>
                  </div>{" "}
                  <div className="flex flex-wrap gap-1.5">
                    {component.tags.map((cat) => (
                      <Badge key={cat} variant="secondary" className="text-xs">
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </Badge>
                    ))}
                  </div>
                </button>
              </div>
            ))
          ) : (
            <div>
              <p className="text-center text-md md:text-lg text-muted-foreground font-semibold py-10">
                No components found
              </p>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ComponentLists;
