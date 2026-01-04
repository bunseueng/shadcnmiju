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
import { Smartphone, MapPin, Clock, Star } from "lucide-react";

const DrawerResponsive = () => {
  const [open, setOpen] = useState(false);

  const locations = [
    { name: "New York Office", address: "123 Broadway, NY 10001", rating: 4.8, time: "9AM - 6PM" },
    { name: "San Francisco HQ", address: "456 Market St, SF 94103", rating: 4.9, time: "8AM - 7PM" },
    { name: "London Branch", address: "789 Oxford St, W1D 2HG", rating: 4.7, time: "9AM - 5PM" },
  ];

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="secondary" className="gap-2">
          <Smartphone className="h-4 w-4" />
          Responsive Drawer
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-lg">
          <DrawerHeader>
            <DrawerTitle className="text-foreground">Our Locations</DrawerTitle>
            <DrawerDescription>Find an office near you.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-3 max-h-[50vh] overflow-y-auto">
            {locations.map((location, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-border hover:border-primary/50 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {location.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {location.address}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium">{location.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {location.time}
                </div>
              </div>
            ))}
          </div>
          <DrawerFooter>
            <Button onClick={() => setOpen(false)}>View All Locations</Button>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerResponsive;
