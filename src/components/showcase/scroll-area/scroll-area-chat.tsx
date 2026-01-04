"use client";

import { ScrollArea } from "@/components/ui/scroll-area";

const messages = [
  { id: 1, sender: "John", message: "Hey, how are you?", time: "10:00 AM", isMe: false },
  { id: 2, sender: "Me", message: "I'm good, thanks! How about you?", time: "10:01 AM", isMe: true },
  { id: 3, sender: "John", message: "Great! Are you free today?", time: "10:02 AM", isMe: false },
  { id: 4, sender: "Me", message: "Yeah, what's up?", time: "10:03 AM", isMe: true },
  { id: 5, sender: "John", message: "Want to grab coffee?", time: "10:04 AM", isMe: false },
  { id: 6, sender: "Me", message: "Sure! What time?", time: "10:05 AM", isMe: true },
  { id: 7, sender: "John", message: "How about 2pm?", time: "10:06 AM", isMe: false },
  { id: 8, sender: "Me", message: "Perfect, see you then!", time: "10:07 AM", isMe: true },
  { id: 9, sender: "John", message: "Looking forward to it!", time: "10:08 AM", isMe: false },
];

const ScrollAreaChat = () => {
  return (
    <ScrollArea className="h-[300px] w-full max-w-sm rounded-md border p-4">
      <div className="space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-3 py-2 ${
                msg.isMe
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground"
              }`}
            >
              <p className="text-sm">{msg.message}</p>
              <p className={`text-xs mt-1 ${msg.isMe ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ScrollAreaChat;
