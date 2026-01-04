"use client";

import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const SliderRange = () => {
  const [priceRange, setPriceRange] = useState([100, 500]);
  const [ageRange, setAgeRange] = useState([18, 65]);

  return (
    <div className="flex flex-col gap-6 w-full max-w-sm">
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Price Range</Label>
          <span className="text-sm text-muted-foreground">
            ${priceRange[0]} - ${priceRange[1]}
          </span>
        </div>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={1000}
          step={10}
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Age Range</Label>
          <span className="text-sm text-muted-foreground">
            {ageRange[0]} - {ageRange[1]} years
          </span>
        </div>
        <Slider
          value={ageRange}
          onValueChange={setAgeRange}
          min={0}
          max={100}
          step={1}
        />
      </div>
    </div>
  );
};

export default SliderRange;
