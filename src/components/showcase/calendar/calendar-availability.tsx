"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const CalendarAvailability = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Mock available and booked dates
  const availableDates = [
    new Date(2025, 0, 15),
    new Date(2025, 0, 16),
    new Date(2025, 0, 20),
    new Date(2025, 0, 22),
  ];

  const bookedDates = [
    new Date(2025, 0, 17),
    new Date(2025, 0, 18),
    new Date(2025, 0, 21),
  ];

  const isAvailable = (checkDate: Date) => {
    return availableDates.some(
      (d) =>
        d.getDate() === checkDate.getDate() &&
        d.getMonth() === checkDate.getMonth() &&
        d.getFullYear() === checkDate.getFullYear()
    );
  };

  const isBooked = (checkDate: Date) => {
    return bookedDates.some(
      (d) =>
        d.getDate() === checkDate.getDate() &&
        d.getMonth() === checkDate.getMonth() &&
        d.getFullYear() === checkDate.getFullYear()
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={(date) => !isAvailable(date)}
        className="rounded-md border"
        modifiers={{
          available: availableDates,
          booked: bookedDates,
        }}
        modifiersClassNames={{
          available: "bg-green-100 text-green-900",
          booked: "bg-red-100 text-red-900 line-through",
        }}
      />
      <div className="flex gap-4 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-green-100 border border-green-200 rounded"></div>
          <span className="text-slate-400">Available</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-red-100 border border-red-200 rounded"></div>
          <span className="text-slate-400">Booked</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarAvailability;
