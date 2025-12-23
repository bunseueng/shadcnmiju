import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { AlertCircle } from "lucide-react";

const AlertInfo1 = () => {
  return (
    <div className="w-full max-w-xl items-start">
      <Alert>
        <AlertCircle />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          This is a basic informational alert to notify users about general
          information.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default AlertInfo1;
