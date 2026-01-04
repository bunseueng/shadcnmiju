"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  File,
  FolderOpen,
  Download,
  Upload,
  FileEdit,
  FilePlus,
  FolderPlus,
  Archive,
  Trash2,
  Info,
} from "lucide-react";

const ContextMenuFile = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-border bg-card text-sm">
        <div className="flex flex-col items-center gap-2">
          <File className="h-10 w-10 text-primary" />
          <span className="text-foreground font-medium">document.pdf</span>
          <span className="text-xs text-muted-foreground">2.4 MB</span>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64 animate-in fade-in-0 zoom-in-95 duration-200">
        <ContextMenuItem className="cursor-pointer">
          <FolderOpen className="mr-2 h-4 w-4" />
          Open
          <ContextMenuShortcut>⌘O</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem className="cursor-pointer">
          <FileEdit className="mr-2 h-4 w-4" />
          Rename
          <ContextMenuShortcut>F2</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger className="cursor-pointer">
            <FilePlus className="mr-2 h-4 w-4" />
            New
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem className="cursor-pointer">
              <File className="mr-2 h-4 w-4" />
              New File
            </ContextMenuItem>
            <ContextMenuItem className="cursor-pointer">
              <FolderPlus className="mr-2 h-4 w-4" />
              New Folder
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem className="cursor-pointer">
          <Download className="mr-2 h-4 w-4" />
          Download
          <ContextMenuShortcut>⌘D</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem className="cursor-pointer">
          <Upload className="mr-2 h-4 w-4" />
          Upload
        </ContextMenuItem>
        <ContextMenuItem className="cursor-pointer">
          <Archive className="mr-2 h-4 w-4" />
          Compress
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="cursor-pointer">
          <Info className="mr-2 h-4 w-4" />
          Properties
          <ContextMenuShortcut>⌘I</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="cursor-pointer text-destructive focus:text-destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Move to Trash
          <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default ContextMenuFile;
