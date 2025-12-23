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

import { RefreshCcw } from "lucide-react";

import { Button } from "@/components/ui/button";

type ResetItem = {
  label: string;
  highlight?: boolean;
};

const resetSettings: ResetItem[] = [
  { label: "Theme preferences" },
  { label: "Notification settings" },
  { label: "Language selection" },
  { label: "Dashboard layout" },
  { label: "Keyboard shortcuts" },
  { label: "Display options" },
];

const AlertDialogConfirm3 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">
          <RefreshCcw /> Reset Settings
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-2">
            <RefreshCcw className="h-5 w-5 text-blue-400" />
            <AlertDialogTitle>Reset to Default Settings</AlertDialogTitle>
          </div>
          <AlertDialogDescription>
            This will reset all your preferences to their default values.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="bg-secondary rounded-lg p-4">
          <AlertDialogDescription className="text-white mb-2 text-md">
            Settings that will be reset:
          </AlertDialogDescription>
          <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 text-sm gap-x-6 gap-y-2">
            {resetSettings.map((item, index) => (
              <li key={index} className="marker:text-yellow-400">
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <AlertDialogDescription>
          You can always customize these settings again later.
        </AlertDialogDescription>
        <AlertDialogFooter className="mt-5">
          <AlertDialogCancel>Keep current settings</AlertDialogCancel>
          <AlertDialogAction>Reset to defaults</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogConfirm3;
