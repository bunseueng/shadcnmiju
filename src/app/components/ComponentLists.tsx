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
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ComponentListsProps {
  viewMode: "grid" | "list";
  components: ComponentPreviewType[];
  selectedComponent: ComponentPreviewType | undefined;
  onSearchChange: (value: string) => void;
  search: string;
}

const ComponentLists = ({
  viewMode,
  components,
  selectedComponent,
  onSearchChange,
  search,
}: ComponentListsProps) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredComponents = components.filter((component) => {
    return component.id.toLowerCase().includes(search.toLowerCase());
  });

  const onSelectComponent = (component: ComponentPreviewType) => {
    router.push(`/components/${component.id}`);
    setOpen(false);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Check for Cmd+K (Mac) or Ctrl+K (Windows/Linux)
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault(); // Prevents browser search bar from opening
        setOpen((open) => !open);
      } else if (e.key === "Escape" || e.code === "Escape") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    if (open) {
      inputRef.current?.focus();
    }

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open]);

  const handleClick = (component: ComponentPreviewType) => {
    router.push(`/components/${component.id}`);
    setOpen(false);
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
  return (
    <div className="w-full lg:w-75 border-b lg:border-b-0 lg:border-r border-dashed bg-background lg:sticky lg:top-0 lg:h-[calc(100vh-190px)] lg:shrink-0">
      <div className="flex flex-col h-full">
        {!isMobile ? (
          <>
            <div className="flex w-full flex-col gap-4 lg:gap-6 py-3 lg:py-4 border-b border-dashed px-3 lg:px-4">
              <InputGroup onClick={() => setOpen(!open)}>
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
            {open && (
              <div className="fixed inset-0 z-100 bg-black/50 backdrop-blur-md">
                <div className="relative max-w-3xl mx-auto flex items-center justify-center h-full">
                  <Button
                    variant="outline"
                    onClick={() => setOpen(!open)}
                    className="cursor-pointer absolute top-4 right-4 md:right-0 z-110 py-8"
                  >
                    <X className="size-10 md:size-14" />
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
                            {filteredComponents &&
                            filteredComponents.length > 0 ? (
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
            <ScrollArea className="h-auto max-h-60 lg:h-full lg:max-h-none lg:flex-1 px-3 lg:px-4">
              <div
                className={cn(
                  "py-3 lg:py-4",
                  viewMode === "grid"
                    ? "grid grid-cols-1 gap-3"
                    : "flex flex-col gap-2"
                )}
              >
                <h1>Components</h1>
                {components?.length > 0 ? (
                  components.map((component) => (
                    <div key={component.id}>
                      <a
                        href={`/components/${component.id}`}
                        type="button"
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
                      </a>
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
            </ScrollArea>{" "}
          </>
        ) : (
          <div className="w-full p-4">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
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
              <PopoverContent className="w-full! p-0">
                <Command>
                  <CommandInput
                    placeholder="Search framework..."
                    className="h-9"
                  />
                  <CommandList>
                    <CommandEmpty>No framework found.</CommandEmpty>
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
    </div>
  );
};

export default ComponentLists;
