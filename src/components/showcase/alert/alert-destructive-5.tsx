import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import { Database } from "lucide-react";

const AlertDestructive1 = () => {
  return (
    <div className="w-full max-w-xl items-start">
      <Alert variant="destructive">
        <Database />
        <AlertTitle>Data Corruption Detected</AlertTitle>
        <AlertDescription>
          Some of your data may be corrupted. Please contact support immediately
          to prevent data loss.
        </AlertDescription>
        <div className="flex items-center col-2 w-auto gap-3 mt-3">
          <Button variant="destructive">Contact Support</Button>
          <Button variant="secondary">Backup Data</Button>
        </div>
      </Alert>
    </div>
  );
};

export default AlertDestructive1;
