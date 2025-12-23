import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Settings } from "lucide-react";

const AlertSuccess5 = () => {
  return (
    <div className="w-full max-w-xl items-start">
      <Alert className="border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
        <Settings />
        <AlertTitle>Settings Updated</AlertTitle>
        <AlertDescription>
          Your notification preferences have been updated and will take effect
          immediately.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default AlertSuccess5;
