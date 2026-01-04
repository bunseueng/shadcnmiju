"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const SonnerWithAction = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() =>
          toast("Message deleted", {
            action: {
              label: "Undo",
              onClick: () => toast.success("Undo successful"),
            },
          })
        }
      >
        With Undo
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("New notification", {
            description: "You have a new message",
            action: {
              label: "View",
              onClick: () => toast.info("Opening message..."),
            },
          })
        }
      >
        With View Action
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error("Connection lost", {
            description: "Unable to connect to the server",
            action: {
              label: "Retry",
              onClick: () => toast.success("Reconnected"),
            },
          })
        }
      >
        With Retry
      </Button>
    </div>
  );
};

export default SonnerWithAction;
