"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const CalendarWithMinMax = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const today = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3); // 3 months from now

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={(date) => date < today || date > maxDate}
        className="rounded-md border"
      />
      <p className="text-xs text-slate-400 text-center">
        <span className="text-slate-200 font-medium">
          Only dates within next 3 months are selectable
        </span>
      </p>
    </div>
  );
};

export default CalendarWithMinMax;
