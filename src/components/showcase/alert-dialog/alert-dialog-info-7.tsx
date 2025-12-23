import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import { Download } from "lucide-react";

const AlertDialogInfo7 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <Download />
          Update Available
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-2">
            <Download className="text-green-400" />
            <AlertDialogTitle className="text-xl">
              Update Available - v2.1.0
            </AlertDialogTitle>
          </div>
          <div className="flex flex-col">
            <p className="font-medium">What&apos;s new:</p>
            <ul className="list-disc list-inside text-md mt-2 space-y-2 ">
              <li>Improved performance and bug fixes</li>
              <li>New dashboard widgets</li>
              <li>Enhanced security features</li>
            </ul>
          </div>
          <Badge variant="outline" className="text-green-600">
            Recommended
          </Badge>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Update Later</AlertDialogCancel>
          <AlertDialogAction>Update Now</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogInfo7;
