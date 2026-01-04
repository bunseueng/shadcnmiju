"use client";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useState } from "react";

const MenubarWithCheckbox = () => {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [showDownloads, setShowDownloads] = useState(true);

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem
            checked={showBookmarks}
            onCheckedChange={setShowBookmarks}
          >
            Show Bookmarks Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={showHistory}
            onCheckedChange={setShowHistory}
          >
            Show Full History
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={showDownloads}
            onCheckedChange={setShowDownloads}
          >
            Show Downloads
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>Reset to Default</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Tools</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Developer Tools</MenubarItem>
          <MenubarItem>Task Manager</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Extensions</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default MenubarWithCheckbox;
