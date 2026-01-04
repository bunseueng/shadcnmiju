"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const SonnerTypes = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => toast("Default toast message")}
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success("Operation completed successfully!")}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error("An error occurred")}
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.warning("Please review your changes")}
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info("Here's some useful information")}
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.loading("Processing...")}
      >
        Loading
      </Button>
    </div>
  );
};

export default SonnerTypes;
