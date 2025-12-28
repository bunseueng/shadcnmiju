import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Globe } from "lucide-react";

import { Button } from "@/components/ui/button";

const AlertWarning5 = () => {
  return (
    <div className="w-full max-w-xl items-start">
      <Alert className="border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200">
        <Globe />
        <AlertTitle>Browser Not Fully Supported</AlertTitle>
        <AlertDescription>
          Some features may not work properly in your current browser. Please
          update to the latest version.
        </AlertDescription>
        <div className="flex items-center col-2 w-auto mt-3 gap-3 focus:scale-110!">
          <Button>Upgrade Browser</Button>
        </div>
      </Alert>
    </div>
  );
};

export default AlertWarning5;
