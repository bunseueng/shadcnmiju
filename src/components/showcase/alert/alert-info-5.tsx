import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import { Server } from "lucide-react";

const AlertInfo5 = () => {
  return (
    <div className="w-full max-w-xl items-start">
      <Alert>
        <Server />
        <AlertTitle>All Systems Operational</AlertTitle>
        <AlertDescription>
          All services are running normally. Last checked: 2 minutes ago.
        </AlertDescription>
        <div className="flex items-center gap-3 col-start-2 w-auto mt-2">
          <Button variant="default" size="sm" className="col-start-2 w-auto">
            View Status Page
          </Button>
        </div>
      </Alert>
    </div>
  );
};

export default AlertInfo5;
