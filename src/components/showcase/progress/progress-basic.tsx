"use client";

import { Progress } from "@/components/ui/progress";

const ProgressBasic = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Progress value={0} />
      <Progress value={25} />
      <Progress value={50} />
      <Progress value={75} />
      <Progress value={100} />
    </div>
  );
};

export default ProgressBasic;
