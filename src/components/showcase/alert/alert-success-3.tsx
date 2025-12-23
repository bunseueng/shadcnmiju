import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import { CreditCard } from "lucide-react";

const AlertSuccess3 = () => {
  return (
    <div className="w-full max-w-xl items-start">
      <Alert className="border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
        <CreditCard />
        <AlertTitle>Payment Successful</AlertTitle>
        <AlertDescription>
          Your payment of $29.99 has been processed. Receipt sent to your email.
        </AlertDescription>
        <div className="flex items-center gap-3 col-start-2 w-auto mt-2">
          <Button variant="default" size="sm">
            View Receipt
          </Button>
        </div>
      </Alert>
    </div>
  );
};

export default AlertSuccess3;
