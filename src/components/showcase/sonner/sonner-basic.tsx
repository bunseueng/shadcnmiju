"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const SonnerBasic = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => toast("Event has been created")}
      >
        Show Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success("Successfully saved!")}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error("Something went wrong")}
      >
        Error
      </Button>
    </div>
  );
};

export default SonnerBasic;
