import { ArrowUpRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

const ButtonSize = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm" variant="outline">
        Small
      </Button>
      <Button variant="outline">Default</Button>
      <Button variant="outline" size="lg">
        Large
      </Button>
      <Button size="icon" variant="outline" className="h-8 w-8">
        <ArrowUpRightIcon className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="outline">
        <ArrowUpRightIcon className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="outline" className="h-12 w-12">
        <ArrowUpRightIcon className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default ButtonSize;
