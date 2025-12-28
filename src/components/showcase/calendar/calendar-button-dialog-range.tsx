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
import { CalendarRange } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";

const CalendarButtonDialogRange = () => {
  const [range, setRange] = useState<DateRange | undefined>();
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    setOpen(false);
  };

  const formatRange = () => {
    if (!range?.from) return "Select date range";
    if (!range?.to) return range.from.toLocaleDateString();
    return `${range.from.toLocaleDateString()} - ${range.to.toLocaleDateString()}`;
  };

  const getDuration = () => {
    if (!range?.from || !range?.to) return null;
    const days = Math.ceil(
      (range.to.getTime() - range.from.getTime()) / (1000 * 60 * 60 * 24)
    );
    return days;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default" size="lg" className="gap-2">
            <CalendarRange className="h-5 w-5" />
            Select Date Range
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Select Date Range</DialogTitle>
            <DialogDescription>
              Choose a start and end date for your selection.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <Calendar
              mode="range"
              selected={range}
              onSelect={setRange}
              numberOfMonths={2}
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setRange(undefined)}
            >
              Clear
            </Button>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirm}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {range?.from && (
        <div className="text-center">
          <p className="text-sm text-slate-400">
            Selected:{" "}
            <span className="text-slate-200 font-medium">
              {formatRange()}
            </span>
          </p>
          {getDuration() !== null && (
            <p className="text-xs text-slate-400 mt-1">
              Duration:{" "}
              <span className="text-slate-200 font-medium">
                {getDuration()} {getDuration() === 1 ? "day" : "days"}
              </span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CalendarButtonDialogRange;
