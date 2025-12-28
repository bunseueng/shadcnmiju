"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CalendarBookingSystem = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [timeSlot, setTimeSlot] = useState("");
  const [name, setName] = useState("");
  const [bookings, setBookings] = useState<
    { date: Date; time: string; name: string }[]
  >([]);

  const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  const handleBooking = () => {
    if (date && timeSlot && name.trim()) {
      setBookings([...bookings, { date, time: timeSlot, name }]);
      setDate(undefined);
      setTimeSlot("");
      setName("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={(date) => date < new Date()}
        className="rounded-md border"
      />
      {date && (
        <div className="flex flex-col gap-2 w-full max-w-sm">
          <Input
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((slot) => (
              <Button
                key={slot}
                variant={timeSlot === slot ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeSlot(slot)}
              >
                {slot}
              </Button>
            ))}
          </div>
          <Button
            onClick={handleBooking}
            disabled={!date || !timeSlot || !name.trim()}
          >
            Book Appointment
          </Button>
        </div>
      )}
      {bookings.length > 0 && (
        <div className="text-xs text-slate-400 w-full max-w-sm">
          <p className="font-medium mb-2">Bookings:</p>
          {bookings.map((booking, idx) => (
            <div key={idx} className="text-slate-200">
              • {booking.name} - {booking.date.toLocaleDateString()} at{" "}
              {booking.time}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CalendarBookingSystem;
