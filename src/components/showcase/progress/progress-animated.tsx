"use client";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const ProgressAnimated = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-foreground">Downloading...</span>
          <span className="text-muted-foreground">{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>
    </div>
  );
};

export default ProgressAnimated;
