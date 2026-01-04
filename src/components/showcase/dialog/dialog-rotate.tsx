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
import { RotateCw, Settings } from "lucide-react";

const DialogRotate = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="gap-2">
          <RotateCw className="h-4 w-4" />
          3D Rotate Dialog
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] animate-in spin-in-2 zoom-in-75 fade-in-0 duration-500">
        <DialogHeader>
          <DialogTitle className="text-foreground flex items-center gap-2">
            <Settings className="h-5 w-5 animate-spin" style={{ animationDuration: "3s" }} />
            3D Rotation Effect
          </DialogTitle>
          <DialogDescription>
            A unique 3D rotation entrance that makes your dialog memorable and engaging.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="grid grid-cols-2 gap-4">
            {["Settings", "Profile", "Security", "Notifications"].map((item, i) => (
              <div
                key={i}
                className="p-3 rounded-lg border border-border hover:bg-accent cursor-pointer transition-colors text-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button onClick={() => setOpen(false)}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogRotate;
