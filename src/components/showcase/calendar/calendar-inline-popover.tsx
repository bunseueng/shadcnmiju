"use client";

import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

const CalendarInlinePopover = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm text-slate-400">Event Date:</span>
        <Popover>
          <PopoverTrigger asChild>
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-slate-100 transition-colors"
            >
              <CalendarIcon className="h-3 w-3 mr-1" />
              {date ? date.toLocaleDateString() : "Select date"}
            </Badge>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </PopoverContent>
        </Popover>
      </div>
      {date && (
        <p className="text-xs text-slate-400">
          <span className="text-slate-200 font-medium">
            {Math.ceil(
              (date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
            )}{" "}
            days {date.getTime() > new Date().getTime() ? "from now" : "ago"}
          </span>
        </p>
      )}
    </div>
  );
};

export default CalendarInlinePopover;
