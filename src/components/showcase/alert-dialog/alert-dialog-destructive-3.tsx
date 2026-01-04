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

import { Trash, TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";

const AlertDialogDistructive3 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Trash /> Wipe All Data
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <AlertDialogHeader>
            <div className="flex items-center gap-2 text-red-400">
              <TriangleAlert className="h-5 w-5" />
              <AlertDialogTitle>Wipe All Data</AlertDialogTitle>
            </div>
            <AlertDialogDescription className="bg-red-50 text-red-800 border rounded p-2 my-2">
              <span className="flex items-start p-2 gap-2">
                <TriangleAlert className="w-5 h-5" />
                <span className="flex flex-col">
                  <strong className="font-semibold">DANGER ZONE</strong>
                  <span>
                    This will permanently erase everything. No backups will
                    remain.
                  </span>
                </span>
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-2 my-4">
            <p>What will be deleted:</p>
            <ul className="grid grid-cols-2 gap-2 text-sm list-disc list-inside text-md mt-2 space-y-2 text-muted-foreground">
              <div className="space-y-1">
                <li>All projects (47)</li>
                <li>User profiles (1,203)</li>
                <li>File uploads (15.2 GB)</li>
              </div>
              <div className="space-y-1">
                <li>Database records</li>
                <li>System logs</li>
                <li>Backup archives</li>
              </div>
            </ul>
            <p className="text-muted-foreground text-xs italic">
              * Recovery is impossible after this operation
            </p>
          </div>
          <AlertDialogFooter className="mt-5">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-500 hover:bg-red-300 text-white">
              Confirm Data Wipe
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogDistructive3;
