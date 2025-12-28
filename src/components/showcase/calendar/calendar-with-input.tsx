"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

const CalendarWithInput = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [inputValue, setInputValue] = useState(
    new Date().toLocaleDateString("en-CA")
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    const parsedDate = new Date(e.target.value);
    if (!isNaN(parsedDate.getTime())) {
      setDate(parsedDate);
    }
  };

  const handleCalendarSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      setInputValue(selectedDate.toLocaleDateString("en-CA"));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <div className="flex items-center gap-2 w-full max-w-sm">
        <Input
          type="date"
          value={inputValue}
          onChange={handleInputChange}
          className="flex-1"
        />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon">
              <CalendarIcon className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleCalendarSelect}
            />
          </PopoverContent>
        </Popover>
      </div>
      {date && (
        <p className="text-xs text-slate-400">
          Selected:{" "}
          <span className="text-slate-200 font-medium">
            {date.toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </p>
      )}
    </div>
  );
};

export default CalendarWithInput;
