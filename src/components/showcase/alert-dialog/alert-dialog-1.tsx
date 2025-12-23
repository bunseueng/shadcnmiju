import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";

import { CheckCircle2 } from "lucide-react";

const AlertDialogSuccess1 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Complete Payment</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="items-center">
          <div className="flex items-center justify-center size-10 rounded-full bg-green-100 dark:bg-green-900">
            <CheckCircle2 className="size-6 text-green-500 dark:text-green-300" />
          </div>
          <AlertDialogTitle>Payment Successfull</AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            Your transaction #06181994 has been processed successfully. A
            receipt has been sent to your email.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>View Receipt</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogSuccess1;
