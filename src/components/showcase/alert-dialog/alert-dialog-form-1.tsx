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

import { Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AlertDialogForm1 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Trash /> Delete Project
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <AlertDialogHeader>
            <div className="flex items-center gap-2">
              <Trash className="h-5 w-5 text-red-400" />
              <AlertDialogTitle>Delete Project</AlertDialogTitle>
            </div>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              project and all associated data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-2 my-4">
            <h4 className="text-muted-foreground">
              Type{" "}
              <span className="font-bold text-muted-foreground">
                delete project
              </span>{" "}
              to confirm
            </h4>
            <Input type="text" placeholder="delete project" />
          </div>
          <AlertDialogFooter className="mt-5">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-500 hover:bg-red-300 text-white">
              Delete Project
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogForm1;
