"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

import { Lock, Unlock } from "lucide-react";

import { useState } from "react";

const SecurityButtonGroup = () => {
  const [isLocked, setIsLocked] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <ButtonGroup>
        <Button
          variant={!isLocked ? "default" : "outline"}
          size="sm"
          onClick={() => setIsLocked(false)}
          className="flex-1"
        >
          <Unlock className="h-4 w-4 mr-1" /> Unlock
        </Button>
        <Button
          variant={isLocked ? "default" : "outline"}
          size="sm"
          onClick={() => setIsLocked(true)}
          className="flex-1"
        >
          <Lock className="h-4 w-4 mr-1" /> Lock
        </Button>
      </ButtonGroup>
      <p className="mt-3 text-xs text-slate-400">
        Status:{" "}
        <span className="text-slate-200 font-medium">
          {isLocked ? "Locked" : "Unlocked"}
        </span>
      </p>
    </div>
  );
};

export default SecurityButtonGroup;
