"use client";

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

import { TriangleAlert, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const AlertDialogDistructive2 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <X /> Terminate Account
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <AlertDialogHeader>
            <div className="flex items-center gap-2 text-red-400">
              <X className="h-5 w-5" />
              <AlertDialogTitle>Terminate Account</AlertDialogTitle>
            </div>
            <AlertDialogDescription className="bg-red-50 text-red-800 border border-l-4 border-l-red-500 p-2 my-2">
              <span className="flex items-start gap-2 p-4">
                <TriangleAlert className="w-5 h-5" />
                <span>
                  <strong className="font-semibold">Critical Action:</strong>{" "}
                  <span>
                    Account termination is immediate and irreversible.
                  </span>
                </span>
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-2 my-4">
            <p>This will immediately:</p>
            <ul className="list-disc list-inside text-md mt-2 space-y-2  text-muted-foreground">
              <li>Revoke all access permissions</li>
              <li>Delete all user data</li>
              <li>Cancel active services</li>
              <li>Remove user from all teams</li>
            </ul>
          </div>
          <AlertDialogFooter className="mt-5">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-500 hover:bg-red-300 text-white">
              Terminate Now
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogDistructive2;
