"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const SonnerPromise = () => {
  const simulatePromise = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const simulateError = () => {
    return new Promise((_, reject) => setTimeout(reject, 2000));
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(simulatePromise(), {
            loading: "Loading...",
            success: "Data loaded successfully!",
            error: "Error loading data",
          })
        }
      >
        Promise (Success)
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(simulateError(), {
            loading: "Uploading file...",
            success: "File uploaded!",
            error: "Upload failed. Please try again.",
          })
        }
      >
        Promise (Error)
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(simulatePromise(), {
            loading: "Sending email...",
            success: (data) => "Email sent successfully!",
            error: "Failed to send email",
          })
        }
      >
        Send Email
      </Button>
    </div>
  );
};

export default SonnerPromise;
