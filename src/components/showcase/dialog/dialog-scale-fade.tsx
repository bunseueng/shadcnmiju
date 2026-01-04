"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Sparkles } from "lucide-react";

const DialogScaleFade = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Sparkles className="h-4 w-4" />
          Scale & Fade Dialog
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] animate-in fade-in-0 zoom-in-95 duration-300">
        <DialogHeader>
          <DialogTitle className="text-foreground">Scale & Fade Animation</DialogTitle>
          <DialogDescription>
            This dialog smoothly scales up while fading in for an elegant entrance effect.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            The combination of scale and fade creates a polished, professional feel that draws
            attention without being jarring.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogScaleFade;
