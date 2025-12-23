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

import { Info } from "lucide-react";

const AlertDialogInfo2 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">View Details</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="absolute right-4 top-4 opacity-10">
          <Info className="h-24 w-24" />
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle>New Documentation Available</AlertDialogTitle>
          <AlertDialogDescription>
            We just released the v2.0 docs! They include 50+ new examples,
            improved accessibility guides, and a dedicated section for
            server-side implementation.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-start">
          <AlertDialogAction className="bg-primary">
            Take me there
          </AlertDialogAction>
          {/* Use a Cancel button as a 'Dismiss' button here */}
          <AlertDialogCancel>Maybe later</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogInfo2;
