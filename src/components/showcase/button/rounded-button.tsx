import { ArrowUpIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

const ButtonRounded = () => {
  return (
    <Button variant="outline" size="icon" className="rounded-full">
      <ArrowUpIcon className="h-4 w-4" />
    </Button>
  );
};

export default ButtonRounded;
