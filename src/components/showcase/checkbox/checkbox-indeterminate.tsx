"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const CheckBoxIndeterminate = () => {
  const [all, setAll] = useState(false);
  const [selected, setSelected] = useState({
    item1: false,
    item2: false,
    item3: false,
  });

  const handleSelectAll = () => {
    const newValue = !all;
    setAll(newValue);
    setSelected({ item1: newValue, item2: newValue, item3: newValue });
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2 pb-2 border-b">
        <Checkbox
          id="select-all"
          checked={all}
          onCheckedChange={handleSelectAll}
        />
        <label
          htmlFor="select-all"
          className="text-sm font-semibold cursor-pointer"
        >
          Select all
        </label>
      </div>
      <div className="space-y-2 pl-6">
        {["item1", "item2", "item3"].map((item) => (
          <div key={item} className="flex items-center space-x-2">
            <Checkbox
              id={item}
              checked={selected[item as keyof typeof selected]}
              onCheckedChange={(checked) =>
                setSelected((prev) => ({ ...prev, [item]: checked }))
              }
            />
            <label htmlFor={item} className="text-sm cursor-pointer">
              Item {item.slice(-1)}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckBoxIndeterminate;
