import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Button } from "@/components/ui/button";

import { File } from "lucide-react";

const AlertInfo3 = () => {
  return (
    <div className="w-full max-w-xl items-start ">
      <Alert>
        <File />
        <AlertTitle>Need Help?</AlertTitle>
        <AlertDescription>
          Check out our comprehensive documentation for detailed guides and
          examples.
        </AlertDescription>
        <div className="flex items-center gap-3 col-2 w-auto mt-2">
          <Button variant="default" size="sm">
            View Docs
          </Button>
          <Button variant="secondary" size="sm">
            Contact Support
          </Button>
        </div>
      </Alert>
    </div>
  );
};

export default AlertInfo3;
