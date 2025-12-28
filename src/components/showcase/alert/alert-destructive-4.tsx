import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import { Wifi } from "lucide-react";

const AlertDestructive1 = () => {
  return (
    <div className="w-full max-w-xl items-start">
      <Alert variant="destructive">
        <Wifi />
        <AlertTitle>Connection Lost</AlertTitle>
        <AlertDescription>
          Unable to connect to the server. Please check your internet connection
          and try again.
        </AlertDescription>
        <div className="flex items-center col-2 w-auto gap-3 mt-3">
          <Button variant="destructive">Retry Connection</Button>
        </div>
      </Alert>
    </div>
  );
};

export default AlertDestructive1;
