import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import { Lock } from "lucide-react";

const AlertDestructive1 = () => {
  return (
    <div className="w-full max-w-xl items-start">
      <Alert variant="destructive">
        <Lock />
        <AlertTitle>Authentication Failed</AlertTitle>
        <AlertDescription>
          Invalid credentials. Please check your email and password and try
          again.
        </AlertDescription>
        <div className="flex items-center col-2 w-auto gap-3 mt-3">
          <Button variant="destructive">Reset Password</Button>
        </div>
      </Alert>
    </div>
  );
};

export default AlertDestructive1;
