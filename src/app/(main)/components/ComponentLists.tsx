import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { ComponentPreviewType } from "@/types/ComponentType";
import { SearchIcon, X } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Check, ChevronsUpDown } from "lucide-react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ComponentListsProps {
  components: ComponentPreviewType[];
  selectedComponent: ComponentPreviewType | undefined;
  onSearchChange: (value: string) => void;
  search: string;
}

// Custom hook for media query with SSR support
const useIsDesktop = () => {
  const subscribe = (callback: () => void) => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    mediaQuery.addEventListener("change", callback);
    return () => mediaQuery.removeEventListener("change", callback);
  };

  const getSnapshot = () => {
    return window.matchMedia("(min-width: 1024px)").matches;
  };

  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

// Hook to detect if component is mounted (client-side)
const useMounted = () => {
  const subscribe = () => () => {};
  const getSnapshot = () => true;
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

const ComponentLists = ({
  components,
  selectedComponent,
  onSearchChange,
  search,
}: ComponentListsProps) => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const mounted = useMounted();
  const isDesktop = useIsDesktop();

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredComponents = components.filter((component) => {
    return component.id.toLowerCase().includes(search.toLowerCase());
  });

  const onSelectComponent = (component: ComponentPreviewType) => {
    router.push(`/components/${component.id}`);
  };

  useEffect(() => {
    // Only enable keyboard shortcuts on desktop
    if (!isDesktop) return;

    const down = (e: KeyboardEvent) => {
      // Check for Cmd+K (Mac) or Ctrl+K (Windows/Linux)
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      } else if (e.key === "Escape" || e.code === "Escape") {
        e.preventDefault();
        setSearchModalOpen(false);
      }
    };

    if (searchModalOpen) {
      inputRef.current?.focus();
    }

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [searchModalOpen, isDesktop]);

  const handleClick = (component: ComponentPreviewType) => {
    router.push(`/components/${component.id}`);
    setSearchModalOpen(false);
  };

  return (
    <React.Fragment>
      <aside className="w-full border border-dashed bg-background lg:w-[20%] lg:sticky lg:top-18 lg:h-[calc(100vh-64px)] lg:overflow-hidden">
        <div className="flex flex-col h-full">
          {!mounted ? (
            // Server-side / initial render placeholder
            <div className="w-full p-4">
              <Button
                variant="outline"
                className="w-full justify-between"
                disabled
              >
                Select components...
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </div>
          ) : isDesktop ? (
            <>
              <div className="flex w-full flex-col gap-4 lg:gap-6 py-3 lg:py-4 border-b border-dashed px-3 lg:px-4 shrink-0">
                <InputGroup onClick={() => setSearchModalOpen(true)}>
                  <InputGroupInput placeholder="Search..." />
                  <InputGroupAddon>
                    <SearchIcon />
                  </InputGroupAddon>
                  <KbdGroup>
                    <Kbd>⌘</Kbd>
                    <Kbd>K</Kbd>
                  </KbdGroup>
                </InputGroup>
              </div>
              <ScrollArea className="flex-1 max-h-150 px-3 lg:px-4 relative">
                <div className="flex flex-col gap-2 py-3 lg:py-4">
                  <h1>Components</h1>
                  {components?.length > 0 ? (
                    components.map((component) => (
                      <div key={component.id}>
                        <Link
                          href={`/components/${component.id}`}
                          className={cn(
                            "group flex flex-col gap-2 rounded-lg border p-2 text-left transition-all hover:border-accent",
                            selectedComponent?.id === component.id
                              ? "border-ring hover:border-ring/50"
                              : "border-border bg-card"
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <p>{component.title}</p>
                            <span>{component.variants.length}</span>
                          </div>
                        </Link>
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

                <div className="w-full pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-10 bg-linear-to-t from-background to-transparent" />
              </ScrollArea>
            </>
          ) : (
            <div className="w-full p-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    className="w-full justify-between"
                  >
                    {selectedComponent
                      ? components.find(
                          (component) =>
                            component.title === selectedComponent?.title
                        )?.title
                      : "Select components..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-(--radix-popover-trigger-width) p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search component..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No component found.</CommandEmpty>
                      <CommandGroup>
                        {components.map((component) => (
                          <CommandItem
                            key={component.id}
                            value={component.title}
                            onSelect={() => onSelectComponent(component)}
                          >
                            {component.title}
                            <Check
                              className={cn(
                                "ml-auto",
                                component.title === selectedComponent?.title
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>
      </aside>
      {searchModalOpen && isDesktop && (
        <div className="fixed inset-0 z-999 bg-black/50 backdrop-blur-md">
          <div className="relative max-w-3xl mx-auto flex items-center justify-center h-full">
            <Button
              variant="outline"
              onClick={() => setSearchModalOpen(false)}
              className="cursor-pointer absolute top-24 right-4 md:right-0 z-110 py-4"
            >
              <X />
            </Button>
            <div className="relative w-full">
              <Command className="rounded-lg border shadow-md md:min-w-112.5">
                <CommandList>
                  <CommandInput
                    ref={inputRef}
                    placeholder="Type a command or search..."
                    onValueChange={onSearchChange}
                  />
                  {search.length > 0 && (
                    <>
                      {filteredComponents && filteredComponents.length > 0 ? (
                        <>
                          <CommandGroup heading="Components">
                            {filteredComponents.map((component) => (
                              <CommandItem
                                key={component.id}
                                onSelect={() => handleClick(component)}
                                className="cursor-pointer"
                              >
                                {component.title}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </>
                      ) : (
                        <CommandEmpty>No results found.</CommandEmpty>
                      )}
                    </>
                  )}
                </CommandList>
              </Command>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ComponentLists;
