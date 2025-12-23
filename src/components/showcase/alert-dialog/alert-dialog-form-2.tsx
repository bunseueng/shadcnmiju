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

import { Shield, TriangleAlert, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AlertDialogForm2 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <X /> Delete Account
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-red-600 text-2xl">
              <Shield size={28} />
              Delete Account
            </AlertDialogTitle>
            <AlertDialogDescription className="bg-red-50 border rounded p-2 my-2">
              <span className="flex items-center gap-4">
                <TriangleAlert className="w-5 h-5 text-yellow-800" />
                <span className="text-lg text-red-800 font-semibold">
                  This action is irreversible
                </span>
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex flex-col">
            <p className="font-medium">
              Before deleting your account, please note:
            </p>
            <ul className="list-disc list-inside text-md mt-2 space-y-2 ">
              <li>All your data will be permanently deleted</li>
              <li>Active subscriptions will be cancelled</li>
              <li>You&apos;ll lose access to all premium features</li>
            </ul>
          </div>
          <div className="space-y-4 my-2">
            <h4 className="text-muted-foreground">
              Enter your email to confirm:
            </h4>
            <Input type="text" placeholder="example@gmail.com" />
          </div>
          <AlertDialogFooter className="mt-5">
            <AlertDialogCancel>Keep Account</AlertDialogCancel>
            <AlertDialogAction className="bg-red-500 hover:bg-red-300 text-white">
              Delete Forever
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogForm2;
