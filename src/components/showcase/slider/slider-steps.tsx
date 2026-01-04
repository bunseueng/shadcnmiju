"use client";

import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const SliderSteps = () => {
  const [rating, setRating] = useState([3]);
  const [size, setSize] = useState([2]);

  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div className="flex flex-col gap-6 w-full max-w-sm">
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Rating</Label>
          <span className="text-sm text-muted-foreground">{rating[0]} / 5 stars</span>
        </div>
        <Slider
          value={rating}
          onValueChange={setRating}
          min={1}
          max={5}
          step={1}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Size</Label>
          <span className="text-sm text-muted-foreground">{sizes[size[0]]}</span>
        </div>
        <Slider
          value={size}
          onValueChange={setSize}
          min={0}
          max={4}
          step={1}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          {sizes.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderSteps;
