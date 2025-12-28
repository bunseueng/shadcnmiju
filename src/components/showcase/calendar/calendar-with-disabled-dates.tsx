"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const CalendarWithDisabledDates = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Disable weekends
  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={isWeekend}
        className="rounded-md border"
      />
      <p className="text-xs text-slate-400">
        <span className="text-slate-200 font-medium">Weekends disabled</span>
      </p>
    </div>
  );
};

export default CalendarWithDisabledDates;
