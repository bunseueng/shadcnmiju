"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ComponentVariant } from "@/types/ComponentType";
import { Check, Copy, Navigation, Terminal } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

interface Props {
  variant: ComponentVariant;
}

const CLICommand = ({ variant }: Props) => {
  const [commandType, setCommandType] = useState<"registry" | "direct">(
    "direct"
  );
  const [packageManager, setPackageManager] = useState<PackageManager>("pnpm");
  const [copied, setCopied] = useState(false);

  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://shadcnmiju.vercel.app";

  // Build path with category: accordion/faq-accordion
  const componentPath = `${variant.type}/${variant.id}`;

  const pmCommands: Record<PackageManager, { prefix: string; dlx: string }> = {
    npm: { prefix: "npx", dlx: "npx" },
    pnpm: { prefix: "pnpm dlx", dlx: "pnpm dlx" },
    yarn: { prefix: "yarn dlx", dlx: "yarn dlx" },
    bun: { prefix: "bunx", dlx: "bunx" },
  };

  const getCommand = () => {
    const pm = pmCommands[packageManager];
    if (commandType === "registry") {
      return `${pm.prefix} shadcn add @shadcnmiju/${componentPath}`;
    }
    return `${pm.dlx} shadcn@latest add ${baseUrl}/r/${componentPath}.json`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getCommand());
      setCopied(true);
      toast("Command copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Failed to copy");
    }
  };

  return (
    <>
      <Popover>
        <PopoverTrigger asChild className="w-[40%]">
          <Button
            variant="outline"
            size="sm"
            className="h-8 md:h-9 px-2 md:px-3 text-xs md:text-sm font-mono max-w-30 sm:max-w-50 md:max-w-80 lg:max-w-none truncate"
          >
            <Terminal className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 shrink-0" />
            <span className="truncate">{getCommand()}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[calc(100vw-2rem)] sm:w-auto max-w-lg p-3"
          align="start"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Tabs
                value={commandType}
                onValueChange={(v) =>
                  setCommandType(v as "registry" | "direct")
                }
                className="flex-1"
              >
                <TabsList className="w-full">
                  <TabsTrigger value="registry" className="flex-1 text-xs">
                    Registry
                  </TabsTrigger>
                  <TabsTrigger value="direct" className="flex-1 text-xs">
                    Direct URL
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              <Select
                value={packageManager}
                onValueChange={(v) => setPackageManager(v as PackageManager)}
              >
                <SelectTrigger className="w-24 h-8 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pnpm" className="text-xs">
                    pnpm
                  </SelectItem>
                  <SelectItem value="npm" className="text-xs">
                    npm
                  </SelectItem>
                  <SelectItem value="yarn" className="text-xs">
                    yarn
                  </SelectItem>
                  <SelectItem value="bun" className="text-xs">
                    bun
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="bg-muted p-2 rounded-md">
              <code className="text-xs break-all">{getCommand()}</code>
            </div>
            {commandType === "registry" && (
              <p className="text-xs text-muted-foreground">
                Requires adding registry to your components.json
              </p>
            )}
            <Button size="sm" className="w-full h-8" onClick={copyToClipboard}>
              {copied ? (
                <>
                  <Check className="h-3 w-3 mr-2" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3 mr-2" />
                  Copy Command
                </>
              )}
            </Button>

            <Separator />

            <a
              href={`${process.env.NEXT_PUBLIC_DOC_URL}`}
              className="flex items-center gap-2 text-xs"
            >
              <Navigation size={14} /> View CLI Documentation
            </a>
          </div>
        </PopoverContent>
      </Popover>

      <Button
        variant="outline"
        size="sm"
        className="h-8 md:h-9 w-8 md:w-9 p-0 ml-2"
        onClick={copyToClipboard}
      >
        {copied ? (
          <Check className="h-3 w-3 md:h-4 md:w-4" />
        ) : (
          <Copy className="h-3 w-3 md:h-4 md:w-4" />
        )}
      </Button>
    </>
  );
};

export default CLICommand;
