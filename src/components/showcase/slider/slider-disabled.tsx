"use client";

import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const SliderDisabled = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-sm">
      <div className="space-y-2">
        <Label>Enabled Slider</Label>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
      <div className="space-y-2">
        <Label className="text-muted-foreground">Disabled Slider (Empty)</Label>
        <Slider defaultValue={[0]} max={100} step={1} disabled />
      </div>
      <div className="space-y-2">
        <Label className="text-muted-foreground">Disabled Slider (With Value)</Label>
        <Slider defaultValue={[75]} max={100} step={1} disabled />
      </div>
      <div className="space-y-2">
        <Label className="text-muted-foreground">Disabled Range Slider</Label>
        <Slider defaultValue={[25, 75]} max={100} step={1} disabled />
      </div>
    </div>
  );
};

export default SliderDisabled;
