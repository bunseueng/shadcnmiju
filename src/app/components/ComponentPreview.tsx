/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type ComponentPreviewType } from "@/types/ComponentType";
import { useState } from "react";
import { Code, Command, CloudDownload, Copy, Check } from "lucide-react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-tomorrow.css";
import { toast } from "sonner";
import { SelectTheme } from "./SelectTheme";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { CopyTheme } from "./CopyTheme";

interface ComponentPreviewProps {
  selectedComponent: ComponentPreviewType;
  components: ComponentPreviewType[];
}

const ComponentPreview = ({
  selectedComponent,
  components,
}: ComponentPreviewProps) => {
  const [activeTab, setActiveTab] = useState<
    Record<string, "preview" | "code">
  >({});
  const [isCopy, setIsCopy] = useState<Record<string, boolean>>({});

  const handleCopy = (value: string, id?: string) => {
    navigator.clipboard.writeText(value);
    setIsCopy((prev) => ({ ...prev, [id || value]: true }));
    toast("Copied to clipboard");
    setTimeout(() => {
      setIsCopy((prev) => ({ ...prev, [id || value]: false }));
    }, 2000); // 2 seconds
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
  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ModeToggle />
          <SelectTheme />
        </div>
        <CopyTheme />
      </div>
      {selectedComponent.variants.map((variant) => {
        const currentTab = activeTab[variant.id] || "preview";
        const currentComponent = components.find(
          (c) => c.type === variant.type
        );
        return (
          <div
            className="flex flex-col items-start justify-between gap-3 py-4"
            key={variant.id}
          >
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-2">
                <h1 className="text-xl md:text-2xl">{variant.name}</h1>
                <Badge className="rounded-xs!">Free</Badge>
              </div>
              <div className="border h-8 border-muted-foreground opacity-50" />

              <Tabs
                value={currentTab}
                onValueChange={(value: any) =>
                  setActiveTab((prev) => ({ ...prev, [variant.id]: value }))
                }
                className="flex-1"
              >
                <TabsList className="p-1">
                  <TabsTrigger value="preview" className="text-xs!">
                    Preview
                  </TabsTrigger>
                  <TabsTrigger value="code" className="text-xs!">
                    Code
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex flex-col gap-2">
                <div className="bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-1 gap-2">
                  <div
                    className="bg-background text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring border-input dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer"
                    onClick={() => handleCopy(variant.code as string)}
                  >
                    <Code className="h-4 w-4" />
                  </div>
                  <div
                    className="bg-background text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring border-input dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer"
                    onClick={() =>
                      handleCopy(currentComponent?.installCommand as string)
                    }
                  >
                    <Command className="h-4 w-4" />
                  </div>
                  <div
                    className="bg-background text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring border-input dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer"
                    onClick={() =>
                      handleDownload(
                        variant.code as string,
                        `${selectedComponent.type}-${variant.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`
                      )
                    }
                  >
                    <CloudDownload className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
            {currentTab === "preview" && (
              <div className="flex items-center flex-1 text-center w-full">
                <div className="w-full">
                  <div className="flex items-center justify-center rounded-lg border border-border bg-linear-to-b from-muted/30 to-muted/10 p-20">
                    {variant.preview}
                  </div>
                </div>
              </div>
            )}

            {currentTab === "code" && (
              <div className="w-full h-full">
                <pre className="relative mt-2 overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-xs">
                  <code
                    className="language-ts"
                    dangerouslySetInnerHTML={{
                      __html: Prism.highlight(
                        variant.code as string,
                        Prism.languages.typescript,
                        "typescript"
                      ),
                    }}
                    data-prismjs-copy="Copy the C snippet!"
                  />
                  <button
                    className="absolute top-4 right-4 text-white cursor-pointer"
                    onClick={() =>
                      handleCopy(variant.code as string, variant.id)
                    }
                  >
                    {isCopy[variant.id] ? (
                      <Check size={17} />
                    ) : (
                      <Copy size={17} />
                    )}
                  </button>
                </pre>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ComponentPreview;
