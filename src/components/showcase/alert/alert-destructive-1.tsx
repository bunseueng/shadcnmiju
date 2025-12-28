import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import { AlertCircle } from "lucide-react";

const AlertDestructive1 = () => {
  return (
    <div className="w-full max-w-xl items-start">
      <Alert variant="destructive">
        <AlertCircle />
        <AlertTitle>Delete Account</AlertTitle>
        <AlertDescription>
          This action cannot be undone. This will permanently delete your
          account and remove all data.
        </AlertDescription>
        <div className="flex items-center col-2 w-auto gap-3 mt-3">
          <Button variant="destructive">I understand, delete my account</Button>
        </div>
      </Alert>
    </div>
  );
};

export default AlertDestructive1;
