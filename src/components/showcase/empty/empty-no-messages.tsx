"use client";

import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmptyNoMessages() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex flex-col items-center justify-center text-center space-y-4 max-w-md">
        <div className="rounded-full bg-primary/10 p-6">
          <MessageSquare className="h-12 w-12 text-primary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">No messages yet</h3>
          <p className="text-sm text-muted-foreground">
            Start a conversation by sending your first message.
          </p>
        </div>
        <Button>Start Conversation</Button>
      </div>
    </div>
  );
}
