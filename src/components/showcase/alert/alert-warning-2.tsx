import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Timer } from "lucide-react";

import { Button } from "@/components/ui/button";

const AlertWarning2 = () => {
  return (
    <div className="w-full max-w-xl items-start">
      <Alert className="border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200">
        <Timer />
        <AlertTitle>Session Expiring Soon</AlertTitle>
        <AlertDescription>
          Your session will expire in 5 minutes. Save your work to avoid losing
          any changes.
        </AlertDescription>
        <div className="flex items-center col-2 w-auto mt-3 gap-3">
          <Button>Extend Session</Button>
        </div>
      </Alert>
    </div>
  );
};

export default AlertWarning2;
