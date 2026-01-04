"use client";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useState } from "react";

const MenubarFull = () => {
  const [statusBar, setStatusBar] = useState(true);
  const [activityBar, setActivityBar] = useState(false);
  const [panel, setPanel] = useState("bottom");

  return (
    <Menubar className="w-fit">
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New File <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Open <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Open Recent</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>project-1</MenubarItem>
              <MenubarItem>project-2</MenubarItem>
              <MenubarItem>project-3</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Save <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Save As...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Exit</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem
            checked={statusBar}
            onCheckedChange={setStatusBar}
          >
            Status Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={activityBar}
            onCheckedChange={setActivityBar}
          >
            Activity Bar
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Panel Position</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarRadioGroup value={panel} onValueChange={setPanel}>
                <MenubarRadioItem value="top">Top</MenubarRadioItem>
                <MenubarRadioItem value="bottom">Bottom</MenubarRadioItem>
                <MenubarRadioItem value="left">Left</MenubarRadioItem>
                <MenubarRadioItem value="right">Right</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default MenubarFull;
