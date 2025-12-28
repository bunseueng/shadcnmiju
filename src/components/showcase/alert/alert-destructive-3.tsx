import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import { CreditCard } from "lucide-react";

const AlertDestructive1 = () => {
  return (
    <div className="w-full max-w-xl items-start">
      <Alert variant="destructive">
        <CreditCard />
        <AlertTitle>Payment Failed</AlertTitle>
        <AlertDescription>
          Your payment could not be processed. Please check your payment method
          and try again.
        </AlertDescription>
        <div className="flex items-center col-2 w-auto gap-3 mt-3">
          <Button variant="destructive">Update Payment Method</Button>
          <Button variant="secondary">Retry Payment</Button>
        </div>
      </Alert>
    </div>
  );
};

export default AlertDestructive1;
