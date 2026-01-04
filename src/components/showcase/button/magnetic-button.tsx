"use client";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Sparkles, Zap, Heart } from "lucide-react";

export default function MagneticButtonDemo() {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold">Magnetic Button</h3>
        <p className="text-sm text-muted-foreground">
          Hover near the buttons to see the magnetic effect
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <MagneticButton variant="subtle" strength={0.2}>
          <Sparkles className="w-4 h-4" />
          Get Started
        </MagneticButton>
        <MagneticButton variant="strong" strength={0.4}>
          Learn More
          <ArrowRight className="w-4 h-4" />
        </MagneticButton>
        <MagneticButton variant="glow" strength={0.3}>
          <Heart className="w-4 h-4" />
          Soft Magnet
        </MagneticButton>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
        <MagneticButton variant="strong" strength={0.6}>
          <Sparkles className="w-5 h-5" />
        </MagneticButton>

        <MagneticButton variant="subtle" strength={0.15}>
          <Zap className="w-5 h-5" />
        </MagneticButton>
        <MagneticButton variant="glow" strength={0.5}>
          <Heart className="w-5 h-5" />
        </MagneticButton>
      </div>
    </div>
  );
}
