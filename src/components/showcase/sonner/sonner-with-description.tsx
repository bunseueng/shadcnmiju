"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const SonnerWithDescription = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() =>
          toast("Event Created", {
            description: "Your event has been scheduled for tomorrow at 3pm.",
          })
        }
      >
        With Description
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success("Profile Updated", {
            description: "Your profile has been updated successfully.",
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error("Upload Failed", {
            description: "The file size exceeds the 10MB limit.",
          })
        }
      >
        Error
      </Button>
    </div>
  );
};

export default SonnerWithDescription;
