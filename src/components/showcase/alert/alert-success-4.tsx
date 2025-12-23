import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import { Upload } from "lucide-react";

const AlertSuccess4 = () => {
  return (
    <div className="w-full max-w-xl items-start">
      <Alert className="border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
        <Upload />
        <AlertTitle>Upload Complete</AlertTitle>
        <AlertDescription>
          Your file &apos;presentation.pdf&apos; (2.4 MB) has been uploaded
          successfully.
        </AlertDescription>
        <div className="flex items-center gap-3 col-start-2 w-auto mt-2">
          <Button variant="default" size="sm">
            View File
          </Button>{" "}
          <Button variant="secondary" size="sm">
            Share
          </Button>
        </div>
      </Alert>
    </div>
  );
};

export default AlertSuccess4;
