"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const CalendarWithFooter = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const footer = (
    <div className="flex items-center justify-between p-3 border-t">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setDate(new Date())}
      >
        Today
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setDate(undefined)}
      >
        Clear
      </Button>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <div className="rounded-md border">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
        />
        {footer}
      </div>
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

export default CalendarWithFooter;
