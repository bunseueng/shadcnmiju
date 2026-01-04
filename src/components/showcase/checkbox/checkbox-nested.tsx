"use client";

import { Checkbox } from "@/components/ui/checkbox";

import { useState } from "react";

const CheckboxNested = () => {
  const [parent, setParent] = useState(true);
  const [children, setChildren] = useState({
    child1: true,
    child2: true,
    child3: false,
  });

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="parent"
          checked={parent}
          onCheckedChange={(checked) => setParent(checked === true)}
        />
        <label htmlFor="parent" className="text-sm font-medium cursor-pointer">
          Parent option
        </label>
      </div>
      <div className="pl-6 space-y-2 border-l-2 border-border">
        {["child1", "child2", "child3"].map((child, idx) => (
          <div key={child} className="flex items-center space-x-2">
            <Checkbox
              id={child}
              disabled={!parent}
              checked={children[child as keyof typeof children]}
              onCheckedChange={(checked) =>
                setChildren((prev) => ({ ...prev, [child]: checked === true }))
              }
            />
            <label htmlFor={child} className="text-sm cursor-pointer">
              Sub-option {idx + 1}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxNested;
