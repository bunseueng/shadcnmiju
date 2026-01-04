"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Folder, File, Code } from "lucide-react";

const ResizableThreePanel = () => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[300px] max-w-xl rounded-lg border"
    >
      <ResizablePanel defaultSize={20} minSize={15}>
        <div className="flex h-full flex-col p-2">
          <h4 className="text-sm font-medium mb-2 px-2 text-foreground">Explorer</h4>
          <div className="space-y-1">
            <div className="flex items-center gap-2 px-2 py-1 text-sm rounded hover:bg-accent cursor-pointer">
              <Folder className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground">src</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 text-sm rounded hover:bg-accent cursor-pointer ml-2">
              <File className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground">index.ts</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 text-sm rounded hover:bg-accent cursor-pointer ml-2">
              <File className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground">app.tsx</span>
            </div>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full flex-col p-2">
          <div className="flex items-center gap-2 px-2 py-1 border-b mb-2">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-foreground">app.tsx</span>
          </div>
          <div className="flex-1 p-2 text-sm text-muted-foreground font-mono">
            <div>export default function App() {"{"}</div>
            <div className="ml-4">return &lt;div&gt;Hello&lt;/div&gt;</div>
            <div>{"}"}</div>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={30} minSize={20}>
        <div className="flex h-full flex-col p-2">
          <h4 className="text-sm font-medium mb-2 px-2 text-foreground">Preview</h4>
          <div className="flex-1 flex items-center justify-center bg-muted/30 rounded">
            <span className="text-muted-foreground">Preview Area</span>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ResizableThreePanel;
