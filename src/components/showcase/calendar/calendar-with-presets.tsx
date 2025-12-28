"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { DateRange } from "react-day-picker";

const CalendarWithPresets = () => {
  const [range, setRange] = useState<DateRange | undefined>();

  const setPreset = (days: number) => {
    const from = new Date();
    const to = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
    setRange({ from, to });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <div className="flex gap-2 flex-wrap justify-center">
        <Button variant="outline" size="sm" onClick={() => setPreset(7)}>
          Next 7 days
        </Button>
        <Button variant="outline" size="sm" onClick={() => setPreset(14)}>
          Next 14 days
        </Button>
        <Button variant="outline" size="sm" onClick={() => setPreset(30)}>
          Next 30 days
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setRange(undefined)}
        >
          Clear
        </Button>
      </div>
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
        className="rounded-md border"
      />
    </div>
  );
};

export default CalendarWithPresets;
