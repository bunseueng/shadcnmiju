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
import { Zap } from "lucide-react";

const DialogBounce = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
          <Zap className="h-4 w-4" />
          Bounce Dialog
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] animate-in zoom-in-50 duration-700 ease-out">
        <DialogHeader>
          <DialogTitle className="text-foreground flex items-center gap-2">
            <span className="inline-block animate-bounce">🎉</span>
            Bounce Animation
          </DialogTitle>
          <DialogDescription>
            A playful bounce effect that adds energy and excitement to your dialogs.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="flex justify-center gap-2">
            {["bg-red-500", "bg-yellow-500", "bg-green-500", "bg-blue-500", "bg-purple-500"].map(
              (color, i) => (
                <div
                  key={i}
                  className={`h-8 w-8 rounded-full ${color} animate-bounce`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              )
            )}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4">
            Great for celebrations, achievements, and fun interactions!
          </p>
        </div>
        <DialogFooter>
          <Button
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500"
            onClick={() => setOpen(false)}
          >
            Awesome!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBounce;
