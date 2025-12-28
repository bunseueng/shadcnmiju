"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CalendarDays } from "lucide-react";
import { useState } from "react";

const CalendarButtonDialogMulti = () => {
  const [dates, setDates] = useState<Date[] | undefined>([]);
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    setOpen(false);
  };

  const formatDates = () => {
    if (!dates || dates.length === 0) return "No dates selected";
    return dates
      .map((d) =>
        d.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })
      )
      .join(", ");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default" size="lg" className="gap-2">
            <CalendarDays className="h-5 w-5" />
            Select Multiple Dates
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Select Multiple Dates</DialogTitle>
            <DialogDescription>
              Click on dates to select or deselect them.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <Calendar
              mode="multiple"
              selected={dates}
              onSelect={setDates}
              className="rounded-md border"
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDates([])}
            >
              Clear All
            </Button>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirm}>
              Confirm ({dates?.length || 0})
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {dates && dates.length > 0 && (
        <div className="text-center max-w-md">
          <p className="text-sm text-slate-400 mb-1">
            Selected {dates.length} {dates.length === 1 ? "date" : "dates"}:
          </p>
          <p className="text-sm text-slate-200 font-medium">
            {formatDates()}
          </p>
        </div>
      )}
    </div>
  );
};

export default CalendarButtonDialogMulti;
