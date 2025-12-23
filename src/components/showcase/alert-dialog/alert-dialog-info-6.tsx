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

import { HelpCircle } from "lucide-react";

const AlertDialogInfo6 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <HelpCircle />
          Show Tips
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-2">
            <HelpCircle className="text-blue-500" />
            <AlertDialogTitle className="text-xl">Pro Tips</AlertDialogTitle>
          </div>
          <AlertDialogDescription className="flex flex-col pt-2 space-y-2">
            <span>
              💡 <strong>Keyboard shortcut:</strong> Press Ctrl+K to quickly
              open the command palette.
            </span>
            <span>
              🎯 <strong>Quick tip:</strong> Use drag and drop to reorder items
              in your dashboard.
            </span>
            <span>
              ⭐ <strong>Did you know?</strong> You can create custom templates
              for faster workflow.
            </span>
          </AlertDialogDescription>{" "}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Skip tips</AlertDialogCancel>
          <AlertDialogAction>Show more tips</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogInfo6;
