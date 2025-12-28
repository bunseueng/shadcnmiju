"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const CalendarCustomStyles = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg"
        classNames={{
          months: "space-y-4",
          month: "space-y-4",
          caption: "flex justify-center pt-2 relative items-center text-purple-700 font-bold",
          caption_label: "text-base font-bold",
          nav: "space-x-1 flex items-center",
          nav_button: "h-7 w-7 bg-purple-100 hover:bg-purple-200 rounded-md transition-colors",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell: "text-purple-600 rounded-md w-9 font-semibold text-sm",
          row: "flex w-full mt-2",
          cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
          day: "h-9 w-9 p-0 font-normal hover:bg-purple-100 rounded-md transition-colors",
          day_selected: "bg-purple-500 text-white hover:bg-purple-600 rounded-md",
          day_today: "bg-pink-100 text-pink-900 font-bold rounded-md",
        }}
      />
      {date && (
        <p className="text-xs text-slate-400">
          Selected:{" "}
          <span className="text-purple-600 font-medium">
            {date.toLocaleDateString()}
          </span>
        </p>
      )}
    </div>
  );
};

export default CalendarCustomStyles;
