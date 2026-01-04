"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

const MenubarWithSubmenu = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>New From Template</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Blank Document</MenubarItem>
              <MenubarItem>Resume</MenubarItem>
              <MenubarItem>Letter</MenubarItem>
              <MenubarItem>Report</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Export As</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>PDF</MenubarItem>
              <MenubarItem>Word Document</MenubarItem>
              <MenubarItem>Plain Text</MenubarItem>
              <MenubarItem>HTML</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Save <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Documentation</MenubarItem>
          <MenubarItem>Report Issue</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default MenubarWithSubmenu;
