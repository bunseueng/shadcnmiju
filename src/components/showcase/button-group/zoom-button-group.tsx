"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import { RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";

const ZoomButtonGroup = () => {
  const [zoom, setZoom] = useState(100);
  return (
    <ButtonGroup>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setZoom(Math.max(50, zoom - 10))}
        className="flex-1"
      >
        <ZoomOut /> Out
      </Button>
      <ButtonGroupText className="flex items-center justify-center text-sm font-medium text-slate-300">
        {zoom}%
      </ButtonGroupText>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setZoom(Math.max(50, zoom + 10))}
        className="flex-1"
      >
        <ZoomIn /> In
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setZoom(100)}
        className="flex-1"
      >
        <RotateCcw /> Reset
      </Button>
    </ButtonGroup>
  );
};

export default ZoomButtonGroup;
