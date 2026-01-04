"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DatePickerWithTime() {
  const [date, setDate] = React.useState<Date>();
  const [time, setTime] = React.useState<string>("12:00");

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      const [hours, minutes] = time.split(":");
      selectedDate.setHours(parseInt(hours), parseInt(minutes));
      setDate(selectedDate);
    } else {
      setDate(undefined);
    }
  };

  return (
    <div className="flex items-center justify-center p-8">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? (
              format(date, "PPP 'at' p")
            ) : (
              <span>Pick a date and time</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            initialFocus
          />
          <div className="border-t p-3">
            <Label htmlFor="time" className="text-sm font-medium mb-2 block">
              Time
            </Label>
            <Input
              type="time"
              id="time"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
                if (date) {
                  const [hours, minutes] = e.target.value.split(":");
                  const newDate = new Date(date);
                  newDate.setHours(parseInt(hours), parseInt(minutes));
                  setDate(newDate);
                }
              }}
              className="w-full"
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
