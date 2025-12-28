"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const SimpleCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      {date && (
        <p className="text-xs text-slate-400">
          Selected:{" "}
          <span className="text-slate-200 font-medium">
            {date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </p>
      )}
    </div>
  );
};

export default SimpleCalendar;
