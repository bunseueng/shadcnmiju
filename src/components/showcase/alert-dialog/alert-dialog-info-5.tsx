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

import { Button } from "@/components/ui/button";

import { AlertCircle } from "lucide-react";

const AlertDialogInfo5 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <AlertCircle />
          Maintenance Notice
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="text-orange-500" />
            <AlertDialogTitle className="text-xl">
              Scheduled Maintenance
            </AlertDialogTitle>
          </div>
          <AlertDialogDescription className="pt-2">
            Our services will be temporarily unavailable on Sunday, Dec 15th
            from 2:00 AM to 4:00 AM EST for routine maintenance.
          </AlertDialogDescription>{" "}
          <p className="text-sm text-muted-foreground">
            We apologize for any inconvenience.
          </p>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Understood</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogInfo5;
