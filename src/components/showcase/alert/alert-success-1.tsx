import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { CheckCircle } from "lucide-react";

const AlertSuccess1 = () => {
  return (
    <div className="w-full max-w-xl items-start">
      <Alert className="border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
        <CheckCircle />
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully and are now live.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default AlertSuccess1;
