"use client";

import { Progress } from "@/components/ui/progress";

const ProgressWithLabel = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-sm">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-foreground">Storage Used</span>
          <span className="text-muted-foreground">45 GB / 100 GB</span>
        </div>
        <Progress value={45} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-foreground">Profile Completion</span>
          <span className="text-muted-foreground">7 / 10 steps</span>
        </div>
        <Progress value={70} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-foreground">Upload Progress</span>
          <span className="text-muted-foreground">3 / 5 files</span>
        </div>
        <Progress value={60} />
      </div>
    </div>
  );
};

export default ProgressWithLabel;
