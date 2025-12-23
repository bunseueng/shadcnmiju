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

import { Rocket } from "lucide-react";

const AlertDialogSuccess2 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Deploy Repository</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex gap-2">
          <AlertDialogHeader>
            <div className="flex items-center justify-center size-10 rounded-full bg-green-100 dark:bg-green-900">
              <Rocket className="size-6 text-green-500 dark:text-green-300" />
            </div>
          </AlertDialogHeader>{" "}
          <div className="space-y-1">
            <AlertDialogTitle>Deployment Initiated</AlertDialogTitle>
            <AlertDialogDescription>
              Your repository is being deployed to the production environment.
              This process usually takes 2-3 minutes. We&apos;ll notify you when
              it&apos;s live.
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
