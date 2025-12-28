"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

import { Check, Copy, Delete, Edit, Trash } from "lucide-react";
import { useState } from "react";

const DialogButtonGroup = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [dialog, setDialog] = useState<Record<string, boolean>>({});
  const [action, setAction] = useState<Record<string, boolean>>({});

  const handleAction = (type: "save" | "delete") => {
    setAction((prev) => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setAction((prev) => ({ ...prev, [type]: false }));
      setDialog((prev) => ({ ...prev, [type]: false }));
    }, 2000);
  };

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <ButtonGroup>
      <Button variant="outline" size="sm" onClick={handleCopy}>
        {isCopied ? <Check /> : <Copy />}
        {isCopied ? (
          <span className="animate animate-pulse transform duration-300">
            Copying...
          </span>
        ) : (
          "Copy"
        )}
      </Button>
      <ButtonGroupSeparator />
      <Dialog
        open={dialog["save"]}
        onOpenChange={(open) =>
          setDialog((prev) => ({ ...prev, ["save"]: open }))
        }
      >
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            <Edit /> Edit
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here.
          </DialogDescription>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">
                Username
              </label>
              <Input id="username" placeholder="Change username" />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Change password"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={() =>
                setDialog((prev) => ({ ...prev, ["save"]: false }))
              }
            >
              Cancel
            </Button>
            <Button onClick={() => handleAction("save")}>
              {action["save"] ? (
                <span className="animate animate-pulse transform duration-300">
                  Saving...
                </span>
              ) : (
                "Save"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <ButtonGroupSeparator />
      <AlertDialog
        open={dialog["delete"]}
        onOpenChange={(open) =>
          setDialog((prev) => ({ ...prev, ["delete"]: open }))
        }
      >
        <AlertDialogTrigger asChild>
          <Button variant="outline" size="sm">
            <Delete /> Delete
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <AlertDialogHeader>
              <div className="flex items-center gap-2">
                <Trash className="h-5 w-5 text-red-400" />
                <AlertDialogTitle>Delete</AlertDialogTitle>
              </div>
              <AlertDialogDescription>
                Are you sure you want to delete?
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter className="mt-5">
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Button
                onClick={() => handleAction("delete")}
                className="bg-red-500 hover:bg-red-300 text-white"
              >
                {action["delete"] ? (
                  <span className="animate animate-pulse transform duration-300">
                    Deleting...
                  </span>
                ) : (
                  "Delete"
                )}
              </Button>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </ButtonGroup>
  );
};

export default DialogButtonGroup;
