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

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import { Zap } from "lucide-react";

const AlertDialogInfo4 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <Zap />
          New Feature
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-2">
            <Zap className="text-yellow-500" />
            <AlertDialogTitle className="text-xl">
              New Feature Available!
            </AlertDialogTitle>
          </div>
          <AlertDialogDescription className="pt-2">
            We&apos;ve just released dark mode support! You can now toggle
            between light and dark themes.
          </AlertDialogDescription>
          <Badge>New</Badge>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Maby Later</AlertDialogCancel>
          <AlertDialogAction>Try it now</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogInfo4;
