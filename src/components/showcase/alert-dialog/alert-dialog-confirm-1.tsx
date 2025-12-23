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

import { Check, File } from "lucide-react";

import { Button } from "@/components/ui/button";

const AlertDialogConfirm1 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">
          <File /> Save Changes
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-2 text-green-400">
            <File className="h-5 w-5" />
            <AlertDialogTitle>Save Changes</AlertDialogTitle>
          </div>
          <AlertDialogDescription>
            You have made changes to the following settings.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="bg-secondary rounded-lg">
          <ul className="space-y-2 p-4">
            <li className="flex items-center gap-2">
              <Check /> Profile information updated
            </li>
            <li className="flex items-center gap-2">
              <Check /> Notification preferences changed
            </li>
            <li className="flex items-center gap-2">
              <Check /> Privacy settings modified
            </li>
          </ul>
        </div>
        <AlertDialogDescription>
          These changes will take effect immediately.
        </AlertDialogDescription>
        <AlertDialogFooter className="mt-5">
          <AlertDialogCancel>Discard changes</AlertDialogCancel>
          <AlertDialogAction>Save all changes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogConfirm1;
