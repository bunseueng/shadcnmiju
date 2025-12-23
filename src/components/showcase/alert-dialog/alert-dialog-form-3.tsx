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

import { Clock, Download, Lock, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

const AlertDialogForm3 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <Download /> Export Data
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2 text-2xl">
            <Download size={28} className="text-blue-400" />
            Export Your Data
          </AlertDialogTitle>
          <AlertDialogDescription>
            We&apos;ll prepare a download link with all your data. This may take
            a few minutes for large datasets.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex items-center gap-2 w-full">
          <Button variant="outline" className="flex-1">
            JSON Format
          </Button>
          <Button variant="outline" className="flex-1">
            CSV Format
          </Button>
        </div>
        <ul className="space-y-2">
          <li className="flex gap-2">
            <Mail /> Download link will be sent to your email
          </li>
          <li className="flex gap-2">
            <Clock /> Link expires in 24 hours
          </li>
          <li className="flex gap-2">
            <Lock /> Data is encrypted and secure
          </li>
        </ul>
        <AlertDialogFooter className="mt-5">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Start Export</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogForm3;
