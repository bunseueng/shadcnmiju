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
import { CalendarClock } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";

const CalendarButtonDialogPreset = () => {
  const [range, setRange] = useState<DateRange | undefined>();
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    setOpen(false);
  };

  const setPreset = (days: number) => {
    const from = new Date();
    const to = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
    setRange({ from, to });
  };

  const formatRange = () => {
    if (!range?.from) return "Select date range";
    if (!range?.to) return range.from.toLocaleDateString();
    return `${range.from.toLocaleDateString()} - ${range.to.toLocaleDateString()}`;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default" size="lg" className="gap-2">
            <CalendarClock className="h-5 w-5" />
            Quick Date Range
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Select Date Range</DialogTitle>
            <DialogDescription>
              Choose a preset or select custom dates from the calendar.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2 flex-wrap justify-center pb-4">
            <Button variant="outline" size="sm" onClick={() => setPreset(7)}>
              Next 7 days
            </Button>
            <Button variant="outline" size="sm" onClick={() => setPreset(14)}>
              Next 14 days
            </Button>
            <Button variant="outline" size="sm" onClick={() => setPreset(30)}>
              Next 30 days
            </Button>
            <Button variant="outline" size="sm" onClick={() => setPreset(90)}>
              Next 90 days
            </Button>
          </div>
          <div className="flex justify-center">
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
            <Button onClick={handleConfirm}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {range?.from && range?.to && (
        <p className="text-sm text-slate-400">
          Selected:{" "}
          <span className="text-slate-200 font-medium">
            {formatRange()}
          </span>
        </p>
      )}
    </div>
  );
};

export default CalendarButtonDialogPreset;
