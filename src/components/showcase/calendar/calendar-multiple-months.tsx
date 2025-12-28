"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const CalendarMultipleMonths = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        numberOfMonths={3}
        className="rounded-md border"
      />
      {date && (
        <p className="text-xs text-slate-400">
          Selected:{" "}
          <span className="text-slate-200 font-medium">
            {date.toLocaleDateString()}
          </span>
        </p>
      )}
    </div>
  );
};

export default CalendarMultipleMonths;
