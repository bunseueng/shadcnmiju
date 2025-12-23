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

const AlertDialogDistructive1 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Trash /> Pernament Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <AlertDialogHeader>
            <div className="flex items-center gap-2 text-red-400">
              <TriangleAlert className="h-5 w-5" />
              <AlertDialogTitle>Pernament Delete</AlertDialogTitle>
            </div>
            <AlertDialogDescription className="bg-red-50 text-red-800 border rounded p-2 my-2">
              <span className="flex items-center gap-2">
                <TriangleAlert className="w-5 h-5" />
                <strong className="font-semibold">
                  Warning: This action cannot be undone!
                </strong>
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-2 my-4">
            <p>You are about to permanently delete:</p>
            <ul className="list-disc list-inside text-md mt-2 space-y-2 ">
              <li>Project &quot;My Website&quot; and all files</li>
              <li>3 connected databases</li>
              <li>All deployment history</li>
            </ul>
            <p className="text-muted-foreground">
              This data cannot be recovered once deleted.
            </p>
          </div>
          <AlertDialogFooter className="mt-5">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-500 hover:bg-red-300 text-white">
              I understand, delete everything
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogDistructive1;
