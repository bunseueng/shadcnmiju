import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";

const NextButton = () => {
  return (
    <Button className="gap-2" variant="outline">
      Next <ArrowRight className="h-4 w-4" />
    </Button>
  );
};

export default NextButton;
