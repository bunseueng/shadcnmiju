"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

import { Eye, EyeOff } from "lucide-react";

import { useState } from "react";

const VisibilityButtonGroup = () => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <ButtonGroup>
        <Button
          variant={visibility ? "default" : "outline"}
          size="sm"
          onClick={() => setVisibility(!visibility)}
          className="flex-1"
        >
          <Eye /> Show
        </Button>
        <Button
          variant={!visibility ? "default" : "outline"}
          size="sm"
          onClick={() => setVisibility(!visibility)}
          className="flex-1"
        >
          <EyeOff /> Hide
        </Button>
      </ButtonGroup>
      <p className="mt-3 text-xs text-slate-400">
        Status:{" "}
        <span className="text-slate-200 font-medium">
          {visibility ? "Visible" : "Hidden"}
        </span>
      </p>
    </div>
  );
};

export default VisibilityButtonGroup;
