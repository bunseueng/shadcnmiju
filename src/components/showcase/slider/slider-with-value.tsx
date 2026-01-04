"use client";

import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const SliderWithValue = () => {
  const [volume, setVolume] = useState([50]);
  const [price, setPrice] = useState([250]);
  const [zoom, setZoom] = useState([100]);

  return (
    <div className="flex flex-col gap-6 w-full max-w-sm">
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Volume</Label>
          <span className="text-sm text-muted-foreground">{volume[0]}%</span>
        </div>
        <Slider
          value={volume}
          onValueChange={setVolume}
          max={100}
          step={1}
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Max Price</Label>
          <span className="text-sm text-muted-foreground">${price[0]}</span>
        </div>
        <Slider
          value={price}
          onValueChange={setPrice}
          max={1000}
          step={10}
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Zoom Level</Label>
          <span className="text-sm text-muted-foreground">{zoom[0]}%</span>
        </div>
        <Slider
          value={zoom}
          onValueChange={setZoom}
          min={50}
          max={200}
          step={10}
        />
      </div>
    </div>
  );
};

export default SliderWithValue;
