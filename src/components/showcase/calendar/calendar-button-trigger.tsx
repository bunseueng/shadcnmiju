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
import { CalendarIcon, Clock } from "lucide-react";
import { useState } from "react";

const CalendarButtonTrigger = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    setOpen(false);
  };

  const getDaysDifference = () => {
    if (!date) return 0;
    const today = new Date();
    const diffTime = date.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const getRelativeTime = () => {
    const days = getDaysDifference();
    if (days === 0) return "Today";
    if (days === 1) return "Tomorrow";
    if (days === -1) return "Yesterday";
    if (days > 0) return `In ${days} days`;
    return `${Math.abs(days)} days ago`;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default" size="lg" className="gap-2">
            <CalendarIcon className="h-5 w-5" />
            Select Date
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Choose a Date</DialogTitle>
            <DialogDescription>
              Select a date from the calendar below to continue.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={() => setDate(new Date())}
              className="gap-2"
            >
              <Clock className="h-4 w-4" />
              Today
            </Button>
            <div className="flex gap-2 flex-1">
              <Button
                variant="outline"
                onClick={() => setOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button onClick={handleConfirm} className="flex-1">
                Confirm
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {date && (
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-slate-400">
            Selected Date:{" "}
            <span className="text-slate-200 font-medium">
              {date.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Clock className="h-3 w-3" />
            <span className="text-slate-300 font-medium">
              {getRelativeTime()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarButtonTrigger;
