import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";

const AlertWarning1 = () => {
  return (
    <div className="w-full max-w-xl items-start">
      <Alert className="border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200">
        <AlertTriangle />
        <AlertTitle>Storage Almost Full</AlertTitle>
        <AlertDescription>
          You&apos;re using 85% of your storage space. Consider upgrading your
          plan or deleting unused files.
        </AlertDescription>
        <div className="flex items-center col-2 w-auto mt-3">
          <Button>Upgrade Plan</Button>
        </div>
      </Alert>
    </div>
  );
};

export default AlertWarning1;
