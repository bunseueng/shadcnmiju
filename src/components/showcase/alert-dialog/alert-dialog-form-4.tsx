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

import { CircleX, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";

const AlertDialogForm4 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <X /> Cancel Subscription
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2 text-2xl">
            <CircleX size={28} className="text-blue-400" />
            Cancel Subscription
          </AlertDialogTitle>
          <AlertDialogDescription>
            We&apos;re sorry to see you go! Your subscription will remain active
            until the end of your current billing period.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <ul className="space-y-2 bg-blue-50 p-2 rounded">
          <li className="text-blue-800 font-bold">
            <strong>Current plan:</strong> Pro Monthly ($29/month)
          </li>
          <li className="text-blue-800 font-bold">
            <strong>Next billing:</strong> January 15, 2024
          </li>
          <li className="text-blue-800 font-bold">
            <strong>Access until:</strong> January 15, 2024
          </li>
        </ul>
        <div className="space-y-2 my-2">
          <p>Help us improve (optional):</p>
          <Textarea placeholder="Tell us why you're canceling..." />
        </div>
        <AlertDialogFooter className="mt-5">
          <AlertDialogCancel>Keep Subscription</AlertDialogCancel>
          <AlertDialogAction>Cancel Subscription</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogForm4;
