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
import { ArrowUp } from "lucide-react";

const DialogSlideUp = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <ArrowUp className="h-4 w-4" />
          Slide Up Dialog
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] animate-in slide-in-from-bottom-4 fade-in-0 duration-500">
        <DialogHeader>
          <DialogTitle className="text-foreground">Slide Up Animation</DialogTitle>
          <DialogDescription>
            This dialog slides up from the bottom with a smooth easing effect.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-primary rounded-full animate-pulse" />
          </div>
          <p className="text-sm text-muted-foreground">
            Perfect for mobile-first designs and action sheets that feel natural to touch
            interfaces.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Dismiss
          </Button>
          <Button onClick={() => setOpen(false)}>Got it</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogSlideUp;
