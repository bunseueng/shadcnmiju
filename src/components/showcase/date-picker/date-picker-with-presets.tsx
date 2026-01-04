"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function DatePickerWithPresets() {
  const [date, setDate] = React.useState<DateRange | undefined>();

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
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="flex">
            <div className="border-r p-3 space-y-1">
              <div className="text-sm font-semibold mb-2">Presets</div>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start font-normal"
                onClick={() =>
                  setDate({
                    from: new Date(),
                    to: new Date(),
                  })
                }
              >
                Today
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start font-normal"
                onClick={() =>
                  setDate({
                    from: addDays(new Date(), -7),
                    to: new Date(),
                  })
                }
              >
                Last 7 days
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start font-normal"
                onClick={() =>
                  setDate({
                    from: addDays(new Date(), -30),
                    to: new Date(),
                  })
                }
              >
                Last 30 days
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start font-normal"
                onClick={() =>
                  setDate({
                    from: addDays(new Date(), -90),
                    to: new Date(),
                  })
                }
              >
                Last 90 days
              </Button>
            </div>
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={1}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
