"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { DateRange } from "react-day-picker";

const CalendarWithRange = () => {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  const formatDateRange = () => {
    if (!range?.from) return "No dates selected";
    if (!range?.to) return range.from.toLocaleDateString();
    return `${range.from.toLocaleDateString()} - ${range.to.toLocaleDateString()}`;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
        className="rounded-md border"
      />
      <p className="text-xs text-slate-400">
        Selected Range:{" "}
        <span className="text-slate-200 font-medium">{formatDateRange()}</span>
      </p>
    </div>
  );
};

export default CalendarWithRange;
