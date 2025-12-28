"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const CalendarDeadlineTracker = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Mock deadlines
  const deadlines = [
    { date: new Date(2025, 0, 15), task: "Project proposal", priority: "high" },
    { date: new Date(2025, 0, 20), task: "Design review", priority: "medium" },
    { date: new Date(2025, 0, 25), task: "Final delivery", priority: "urgent" },
  ];

  const urgentDates = deadlines
    .filter((d) => d.priority === "urgent")
    .map((d) => d.date);
  const highDates = deadlines
    .filter((d) => d.priority === "high")
    .map((d) => d.date);
  const mediumDates = deadlines
    .filter((d) => d.priority === "medium")
    .map((d) => d.date);

  const getDeadline = (checkDate: Date) => {
    return deadlines.find(
      (d) =>
        d.date.getDate() === checkDate.getDate() &&
        d.date.getMonth() === checkDate.getMonth() &&
        d.date.getFullYear() === checkDate.getFullYear()
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        modifiers={{
          urgent: urgentDates,
          high: highDates,
          medium: mediumDates,
        }}
        modifiersClassNames={{
          urgent: "bg-red-500 text-white font-bold hover:bg-red-600",
          high: "bg-orange-400 text-white font-bold hover:bg-orange-500",
          medium: "bg-yellow-300 text-yellow-900 font-bold hover:bg-yellow-400",
        }}
      />
      {date && getDeadline(date) && (
        <div className="text-xs text-slate-400">
          <p className="font-medium mb-1">Deadline:</p>
          <p className="text-slate-200">{getDeadline(date)?.task}</p>
          <p
            className={`font-medium ${
              getDeadline(date)?.priority === "urgent"
                ? "text-red-500"
                : getDeadline(date)?.priority === "high"
                  ? "text-orange-500"
                  : "text-yellow-500"
            }`}
          >
            Priority: {getDeadline(date)?.priority}
          </p>
        </div>
      )}
    </div>
  );
};

export default CalendarDeadlineTracker;
