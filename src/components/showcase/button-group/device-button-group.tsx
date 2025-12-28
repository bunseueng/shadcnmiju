"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

import { Monitor, Smartphone, Tablet } from "lucide-react";

import { useState } from "react";

const DeviceButtonGroup = () => {
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );
  return (
    <ButtonGroup>
      <Button
        variant={device === "desktop" ? "default" : "outline"}
        size="sm"
        onClick={() => setDevice("desktop")}
        className="flex-1"
      >
        <Monitor className="h-4 w-4 mr-1" /> Desktop
      </Button>
      <Button
        variant={device === "tablet" ? "default" : "outline"}
        size="sm"
        onClick={() => setDevice("tablet")}
        className="flex-1"
      >
        <Tablet className="h-4 w-4 mr-1" /> Tablet
      </Button>
      <Button
        variant={device === "mobile" ? "default" : "outline"}
        size="sm"
        onClick={() => setDevice("mobile")}
        className="flex-1"
      >
        <Smartphone className="h-4 w-4 mr-1" /> Mobile
      </Button>
    </ButtonGroup>
  );
};

export default DeviceButtonGroup;
