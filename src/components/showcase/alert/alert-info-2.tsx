import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Button } from "@/components/ui/button";

import { Rocket } from "lucide-react";

const AlertInfo2 = () => {
  return (
    <div className="w-full max-w-xl items-start ">
      <Alert>
        <Rocket />
        <AlertTitle>New Feature Available</AlertTitle>
        <AlertDescription>
          We&apos;ve just released a new dashboard feature. Check it out in your
          settings panel.
        </AlertDescription>
        <div className="flex items-center gap-3 cols-2 w-auto mt-2">
          <Button variant="default" size="sm" className="col-start-2 w-auto">
            Explore Now
          </Button>
        </div>
      </Alert>
    </div>
  );
};

export default AlertInfo2;
