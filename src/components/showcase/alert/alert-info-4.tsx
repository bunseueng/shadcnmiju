import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Lightbulb } from "lucide-react";

const AlertInfo4 = () => {
  return (
    <div className="w-full max-w-xl items-start ">
      <Alert>
        <Lightbulb />
        <AlertTitle>Pro Tip</AlertTitle>
        <AlertDescription>
          Use keyboard shortcuts Ctrl+K to quickly access the command palette
          and boost your productivity.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default AlertInfo4;
