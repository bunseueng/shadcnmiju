"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CalendarInlineForm = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [eventName, setEventName] = useState("");
  const [events, setEvents] = useState<{ date: Date; name: string }[]>([]);

  const handleAddEvent = () => {
    if (date && eventName.trim()) {
      setEvents([...events, { date, name: eventName }]);
      setEventName("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <div className="flex flex-col gap-2 w-full max-w-sm">
        <Input
          placeholder="Event name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <Button onClick={handleAddEvent} disabled={!date || !eventName.trim()}>
          Add Event
        </Button>
      </div>
      {events.length > 0 && (
        <div className="text-xs text-slate-400 w-full max-w-sm">
          <p className="font-medium mb-2">Events:</p>
          {events.map((event, idx) => (
            <div key={idx} className="text-slate-200">
              • {event.name} - {event.date.toLocaleDateString()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CalendarInlineForm;
