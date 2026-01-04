"use client";

import { Progress } from "@/components/ui/progress";
import { Check } from "lucide-react";

const ProgressSteps = () => {
  const steps = [
    { label: "Cart", completed: true },
    { label: "Shipping", completed: true },
    { label: "Payment", completed: false },
    { label: "Confirm", completed: false },
  ];

  const completedSteps = steps.filter((s) => s.completed).length;
  const progress = (completedSteps / steps.length) * 100;

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Progress value={progress} className="h-2" />
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={step.label} className="flex flex-col items-center gap-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                step.completed
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {step.completed ? (
                <Check className="h-4 w-4" />
              ) : (
                index + 1
              )}
            </div>
            <span
              className={`text-xs ${
                step.completed ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;
