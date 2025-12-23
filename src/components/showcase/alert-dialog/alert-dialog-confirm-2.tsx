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

import { CircleAlert, LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";

const AlertDialogConfirm2 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">
          <LogOut /> Leave Page
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-2">
            <CircleAlert className="h-5 w-5 text-yellow-400" />
            <AlertDialogTitle>Leave This Page?</AlertDialogTitle>
          </div>
          <AlertDialogDescription>
            You&apos;re about to leave this page. Any unsaved progress will be
            lost.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="bg-secondary rounded-lg">
          <ul className="list-disc list-inside space-y-2 p-4">
            <li className="marker:text-yellow-400">
              Form data entered: 3 fields
            </li>
            <li className="marker:text-yellow-400">Time spent: 5 minutes</li>
          </ul>
        </div>

        <AlertDialogFooter className="mt-5">
          <AlertDialogCancel>Stay on page</AlertDialogCancel>
          <AlertDialogAction>Leave anyway</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogConfirm2;
