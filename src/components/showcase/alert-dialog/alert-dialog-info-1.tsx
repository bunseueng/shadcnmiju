import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Info } from "lucide-react";

import { Button } from "@/components/ui/button";

const AlertDialogInfo1 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">View Details</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center text-primary gap-2 mb-2">
            <Info className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Information
            </span>
          </div>
          <AlertDialogTitle>System Update Features</AlertDialogTitle>
          <AlertDialogDescription>
            We&apos;ve added several new automation tools to your dashboard.
            This includes real-time analytics tracking and automated report
            generation every Monday.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Understood</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogInfo1;
