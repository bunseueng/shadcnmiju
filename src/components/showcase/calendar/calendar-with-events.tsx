"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const CalendarWithEvents = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Example event dates
  const eventDates = [
    new Date(2025, 0, 15),
    new Date(2025, 0, 20),
    new Date(2025, 0, 25),
  ];

  const hasEvent = (checkDate: Date) => {
    return eventDates.some(
      (eventDate) =>
        eventDate.getDate() === checkDate.getDate() &&
        eventDate.getMonth() === checkDate.getMonth() &&
        eventDate.getFullYear() === checkDate.getFullYear()
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        modifiers={{ event: eventDates }}
        modifiersClassNames={{
          event: "bg-blue-100 text-blue-900 font-bold",
        }}
      />
      <p className="text-xs text-slate-400">
        {date && hasEvent(date) ? (
          <span className="text-blue-500 font-medium">📅 Event on this day</span>
        ) : (
          <span className="text-slate-200">No events</span>
        )}
      </p>
    </div>
  );
};

export default CalendarWithEvents;
