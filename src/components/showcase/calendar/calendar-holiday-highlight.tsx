"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const CalendarHolidayHighlight = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Example holidays for 2025
  const holidays = [
    { date: new Date(2025, 0, 1), name: "New Year's Day" },
    { date: new Date(2025, 6, 4), name: "Independence Day" },
    { date: new Date(2025, 11, 25), name: "Christmas Day" },
  ];

  const holidayDates = holidays.map((h) => h.date);

  const getHolidayName = (checkDate: Date) => {
    const holiday = holidays.find(
      (h) =>
        h.date.getDate() === checkDate.getDate() &&
        h.date.getMonth() === checkDate.getMonth() &&
        h.date.getFullYear() === checkDate.getFullYear()
    );
    return holiday?.name;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        modifiers={{ holiday: holidayDates }}
        modifiersClassNames={{
          holiday: "bg-red-100 text-red-900 font-bold",
        }}
      />
      {date && getHolidayName(date) && (
        <p className="text-xs text-slate-400">
          🎉{" "}
          <span className="text-red-500 font-medium">
            {getHolidayName(date)}
          </span>
        </p>
      )}
    </div>
  );
};

export default CalendarHolidayHighlight;
