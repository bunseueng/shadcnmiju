import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Save } from "lucide-react";

import { Button } from "@/components/ui/button";

const AlertWarning3 = () => {
  return (
    <div className="w-full max-w-xl items-start">
      <Alert className="border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200">
        <Save />
        <AlertTitle>Unsaved Changes</AlertTitle>
        <AlertDescription>
          You have unsaved changes that will be lost if you leave this page.
        </AlertDescription>
        <div className="flex items-center col-2 w-auto mt-3 gap-3">
          <Button>Save Changes</Button>
          <Button variant="destructive">Discard</Button>
        </div>
      </Alert>
    </div>
  );
};

export default AlertWarning3;
