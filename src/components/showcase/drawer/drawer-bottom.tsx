"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ChevronUp, Minus, Plus } from "lucide-react";

const DrawerBottom = () => {
  const [open, setOpen] = useState(false);
  const [goal, setGoal] = useState(350);

  const adjustGoal = (adjustment: number) => {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="gap-2">
          <ChevronUp className="h-4 w-4" />
          Bottom Drawer
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-foreground">Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => adjustGoal(-10)}
                disabled={goal <= 200}
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter text-foreground">{goal}</div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">Calories/day</div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => adjustGoal(10)}
                disabled={goal >= 400}
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              <div className="flex h-full items-end gap-2">
                {[40, 60, 45, 80, 55, 70, 65].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary rounded-t-md transition-all duration-300"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button onClick={() => setOpen(false)}>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerBottom;
