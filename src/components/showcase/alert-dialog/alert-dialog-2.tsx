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

import { BadgeCheck } from "lucide-react";

const AlertDialogSuccess2 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Create Project</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex gap-2">
          <AlertDialogHeader>
            <div className="flex items-center justify-center size-10 rounded-full bg-green-100 dark:bg-green-900">
              <BadgeCheck className="size-6 text-green-500 dark:text-green-300" />
            </div>
          </AlertDialogHeader>{" "}
          <div className="space-y-1">
            <AlertDialogTitle>Project Created</AlertDialogTitle>
            <AlertDialogDescription>
              &quot;ShadcnUI&quot; has been successfully created. You can now
              add team members and tasks.
            </AlertDialogDescription>
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Dismiss</AlertDialogCancel>
          <AlertDialogAction>View Project</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogSuccess2;
