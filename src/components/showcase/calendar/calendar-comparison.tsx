"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const CalendarComparison = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(
    new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
  );

  const calculateDaysDifference = () => {
    if (!startDate || !endDate) return 0;
    const diff = endDate.getTime() - startDate.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-400 font-medium">Start Date</p>
          <Calendar
            mode="single"
            selected={startDate}
            onSelect={setStartDate}
            className="rounded-md border"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-400 font-medium">End Date</p>
          <Calendar
            mode="single"
            selected={endDate}
            onSelect={setEndDate}
            className="rounded-md border"
          />
        </div>
      </div>
      {startDate && endDate && (
        <p className="text-xs text-slate-400">
          Duration:{" "}
          <span className="text-slate-200 font-medium">
            {calculateDaysDifference()} days
          </span>
        </p>
      )}
    </div>
  );
};

export default CalendarComparison;
