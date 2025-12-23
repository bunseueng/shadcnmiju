import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import { Users } from "lucide-react";

const AlertSuccess2 = () => {
  return (
    <div className="w-full max-w-xl items-start">
      <Alert className="border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
        <Users />
        <AlertTitle>Welcome Aboard!</AlertTitle>
        <AlertDescription>
          Your account has been created successfully. You can now access all
          premium features.
        </AlertDescription>
        <div className="flex items-center gap-3 col-start-2 w-auto mt-2">
          <Button variant="default" size="sm">
            Get Started
          </Button>
        </div>
      </Alert>
    </div>
  );
};

export default AlertSuccess2;
