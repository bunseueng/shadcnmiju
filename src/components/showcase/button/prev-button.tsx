import { Button } from "@/components/ui/button";

import { ArrowLeft } from "lucide-react";

const PreviousButton = () => {
  return (
    <Button className="gap-2" variant="outline">
      <ArrowLeft className="h-4 w-4" /> Previous
    </Button>
  );
};

export default PreviousButton;
