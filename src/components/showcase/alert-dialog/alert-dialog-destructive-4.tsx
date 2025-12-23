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

import { Shield, TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";

const AlertDialogDistructive4 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Shield /> Nuclear Option
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <AlertDialogHeader>
            <div className="flex items-center gap-2 text-red-400">
              <Shield className="h-5 w-5" />
              <AlertDialogTitle>Critical System Action</AlertDialogTitle>
            </div>
            <AlertDialogDescription className="bg-red-50 text-red-800 border rounded p-3 space-y-2 my-2">
              <span className="flex items-start gap-2">
                <TriangleAlert className="w-5 h-5" />
                <strong className="font-semibold">
                  CRITICAL SYSTEM OPERATION
                </strong>
              </span>
              <span>
                This action will perform irreversible system-level changes that
                affect all users.
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-2 my-4">
            <ul className="list-disc list-inside text-md mt-2 space-y-2 ">
              <li className="marker:text-red-500">
                Immediate effect on production environment
              </li>
              <li className="marker:text-red-500">
                Cannot be rolled back or undone
              </li>
              <li className="marker:text-red-500">
                Requires system administrator approval
              </li>
            </ul>
            <AlertDialogDescription className="bg-yellow-50 text-yellow-800 border rounded p-3 space-y-2 my-2">
              <span className="flex items-start gap-2">
                <TriangleAlert className="w-5 h-5" />
                <strong className="font-semibold">
                  Only proceed if you have explicit authorization and understand
                  the consequences.
                </strong>
              </span>
            </AlertDialogDescription>
          </div>
          <AlertDialogFooter className="mt-5">
            <AlertDialogCancel>Abort Operation</AlertDialogCancel>
            <AlertDialogAction className="bg-red-500 hover:bg-red-300 text-white">
              Execute Critical Action
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogDistructive4;
