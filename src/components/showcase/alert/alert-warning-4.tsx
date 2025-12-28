import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Settings } from "lucide-react";

import { Button } from "@/components/ui/button";

const AlertWarning4 = () => {
  return (
    <div className="w-full max-w-xl items-start">
      <Alert className="border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200">
        <Settings />
        <AlertTitle>Scheduled Maintenance</AlertTitle>
        <AlertDescription>
          System maintenance is scheduled for tonight at 2:00 AM EST. Expected
          downtime: 30 minutes.
        </AlertDescription>
        <div className="flex items-center col-2 w-auto mt-3 gap-3">
          <Button>Lern More</Button>
        </div>
      </Alert>
    </div>
  );
};

export default AlertWarning4;
