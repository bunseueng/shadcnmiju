"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown } from "lucide-react";

const DropdownMenuRadio = () => {
  const [position, setPosition] = useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="gap-2">
          <ArrowUpDown className="h-4 w-4" />
          Panel Position
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 animate-in zoom-in-90 fade-in-0 duration-300">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top" className="cursor-pointer">
            Top
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom" className="cursor-pointer">
            Bottom
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right" className="cursor-pointer">
            Right
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuRadio;
