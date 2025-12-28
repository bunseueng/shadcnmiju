"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarPlus } from "lucide-react";
import { useState } from "react";

const CalendarButtonDialogEvent = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [eventTitle, setEventTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [events, setEvents] = useState<{ date: Date; title: string }[]>([]);

  const handleAddEvent = () => {
    if (date && eventTitle.trim()) {
      setEvents([...events, { date, title: eventTitle }]);
      setEventTitle("");
      setOpen(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default" size="lg" className="gap-2">
            <CalendarPlus className="h-5 w-5" />
            Add Event
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Event</DialogTitle>
            <DialogDescription>
              Select a date and enter event details.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="event-title">Event Title</Label>
              <Input
                id="event-title"
                placeholder="Team meeting, Birthday party, etc."
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label>Event Date</Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddEvent} disabled={!date || !eventTitle.trim()}>
              Add Event
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {events.length > 0 && (
        <div className="w-full max-w-md">
          <p className="text-xs text-slate-400 font-medium mb-2">
            Upcoming Events:
          </p>
          <div className="space-y-2">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-slate-900 rounded-md border border-slate-800"
              >
                <div>
                  <p className="text-sm text-slate-200 font-medium">
                    {event.title}
                  </p>
                  <p className="text-xs text-slate-400">
                    {event.date.toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarButtonDialogEvent;
