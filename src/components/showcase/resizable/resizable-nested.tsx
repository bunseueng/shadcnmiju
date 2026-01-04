"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const ResizableNested = () => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[300px] max-w-lg rounded-lg border"
    >
      <ResizablePanel defaultSize={30}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="font-semibold text-foreground">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={70}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={70}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="font-semibold text-foreground">Main Content</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={30}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="font-semibold text-foreground">Terminal</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ResizableNested;
