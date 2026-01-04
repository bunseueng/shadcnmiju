"use client";

import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const SliderBasic = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-sm">
      <div className="space-y-2">
        <Label>Volume</Label>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
      <div className="space-y-2">
        <Label>Brightness</Label>
        <Slider defaultValue={[75]} max={100} step={1} />
      </div>
      <div className="space-y-2">
        <Label>Opacity</Label>
        <Slider defaultValue={[100]} max={100} step={1} />
      </div>
    </div>
  );
};

export default SliderBasic;
