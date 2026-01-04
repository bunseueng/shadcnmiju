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
import { Layers, ChevronRight } from "lucide-react";

const DrawerNested = () => {
  const [open, setOpen] = useState(false);
  const [nestedOpen, setNestedOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
          <Layers className="h-4 w-4" />
          Nested Drawer
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-foreground">Settings</DrawerTitle>
            <DrawerDescription>Manage your account settings and preferences.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-2">
            {["Account", "Privacy", "Notifications", "Advanced"].map((item, i) => (
              <Drawer key={i} open={item === "Advanced" ? nestedOpen : undefined} onOpenChange={item === "Advanced" ? setNestedOpen : undefined}>
                <DrawerTrigger asChild>
                  <button className="w-full flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent transition-colors text-foreground">
                    <span>{item}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </button>
                </DrawerTrigger>
                {item === "Advanced" && (
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle className="text-foreground">Advanced Settings</DrawerTitle>
                        <DrawerDescription>
                          Configure advanced options for power users.
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="p-4 space-y-3">
                        {["Developer Mode", "Debug Logs", "API Access", "Experimental Features"].map(
                          (option, j) => (
                            <div
                              key={j}
                              className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                            >
                              <span className="text-sm text-foreground">{option}</span>
                              <div className="h-5 w-9 rounded-full bg-primary/20 relative cursor-pointer">
                                <div className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-muted-foreground transition-transform" />
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <DrawerFooter>
                        <Button onClick={() => setNestedOpen(false)}>Save</Button>
                        <DrawerClose asChild>
                          <Button variant="outline">Back</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                )}
              </Drawer>
            ))}
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerNested;
