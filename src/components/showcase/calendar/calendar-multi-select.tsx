"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const CalendarMultiSelect = () => {
  const [dates, setDates] = useState<Date[] | undefined>([]);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="rounded-md border"
      />
      {dates && dates.length > 0 && (
        <div className="text-xs text-slate-400">
          <p className="mb-2">
            Selected:{" "}
            <span className="text-slate-200 font-medium">
              {dates.length} date{dates.length !== 1 ? "s" : ""}
            </span>
          </p>
          <div className="max-h-24 overflow-y-auto">
            {dates.map((d, idx) => (
              <div key={idx} className="text-slate-200">
                • {d.toLocaleDateString()}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarMultiSelect;
