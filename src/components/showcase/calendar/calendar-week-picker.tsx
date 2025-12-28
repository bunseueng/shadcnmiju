"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const CalendarWeekPicker = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const getWeekNumber = (date: Date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };

  const getWeekRange = (date: Date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    const weekStart = new Date(date.setDate(diff));
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    return { start: weekStart, end: weekEnd };
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        showWeekNumber
        className="rounded-md border"
      />
      {date && (
        <p className="text-xs text-slate-400">
          Week {getWeekNumber(date)}:{" "}
          <span className="text-slate-200 font-medium">
            {getWeekRange(new Date(date)).start.toLocaleDateString()} -{" "}
            {getWeekRange(new Date(date)).end.toLocaleDateString()}
          </span>
        </p>
      )}
    </div>
  );
};

export default CalendarWeekPicker;
