"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const CalendarBirthdatePicker = () => {
  const [date, setDate] = useState<Date | undefined>();

  const today = new Date();
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 100); // 100 years ago

  const calculateAge = (birthDate: Date) => {
    const diff = today.getTime() - birthDate.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={(date) => date > today || date < minDate}
        defaultMonth={new Date(2000, 0)}
        className="rounded-md border"
        fromYear={1924}
        toYear={today.getFullYear()}
      />
      {date && (
        <p className="text-xs text-slate-400">
          Age:{" "}
          <span className="text-slate-200 font-medium">
            {calculateAge(date)} years old
          </span>
        </p>
      )}
    </div>
  );
};

export default CalendarBirthdatePicker;
