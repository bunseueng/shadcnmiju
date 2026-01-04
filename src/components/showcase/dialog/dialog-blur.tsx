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
import { Eye } from "lucide-react";

const DialogBlur = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2 backdrop-blur-sm">
          <Eye className="h-4 w-4" />
          Blur Effect Dialog
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] backdrop-blur-xl bg-background/80 border-border/50 animate-in fade-in-0 zoom-in-95 duration-300">
        <DialogHeader>
          <DialogTitle className="text-foreground">Glassmorphism Effect</DialogTitle>
          <DialogDescription>
            A modern frosted glass effect with blur backdrop for a sleek, premium look.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <p className="text-sm text-foreground">
              This style is perfect for overlays that need to show context from the background
              while maintaining focus on the dialog content.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Apply</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBlur;
