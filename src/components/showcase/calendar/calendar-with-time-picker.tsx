"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CalendarWithTimePicker = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState("12:00");

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const getFormattedDateTime = () => {
    if (!date) return "No date selected";
    return `${date.toLocaleDateString()} at ${time}`;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <div className="flex items-center gap-2">
        <label className="text-sm text-slate-400">Time:</label>
        <Input
          type="time"
          value={time}
          onChange={handleTimeChange}
          className="w-32"
        />
      </div>
      <p className="text-xs text-slate-400">
        Selected:{" "}
        <span className="text-slate-200 font-medium">
          {getFormattedDateTime()}
        </span>
      </p>
    </div>
  );
};

export default CalendarWithTimePicker;
