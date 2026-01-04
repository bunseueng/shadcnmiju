"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useState } from "react";

const MenubarWithRadio = () => {
  const [fontSize, setFontSize] = useState("medium");
  const [theme, setTheme] = useState("system");

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Format</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={fontSize} onValueChange={setFontSize}>
            <MenubarRadioItem value="small">Small</MenubarRadioItem>
            <MenubarRadioItem value="medium">Medium</MenubarRadioItem>
            <MenubarRadioItem value="large">Large</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem>Custom Size...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Appearance</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={theme} onValueChange={setTheme}>
            <MenubarRadioItem value="light">Light</MenubarRadioItem>
            <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
            <MenubarRadioItem value="system">System</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default MenubarWithRadio;
