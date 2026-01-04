"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const users = [
  { name: "John Doe", status: "online", avatar: "JD", color: "bg-green-500" },
  { name: "Jane Smith", status: "away", avatar: "JS", color: "bg-yellow-500" },
  { name: "Bob Wilson", status: "busy", avatar: "BW", color: "bg-red-500" },
  { name: "Alice Brown", status: "offline", avatar: "AB", color: "bg-gray-500" },
];

const TooltipStatus = () => {
  return (
    <TooltipProvider>
      <div className="flex -space-x-3">
        {users.map((user, i) => (
          <Tooltip key={i}>
            <TooltipTrigger asChild>
              <div className="relative cursor-pointer">
                <Avatar className="border-2 border-background h-10 w-10 hover:z-10 hover:scale-110 transition-transform">
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.avatar}`} />
                  <AvatarFallback>{user.avatar}</AvatarFallback>
                </Avatar>
                <span className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${user.color}`} />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${user.color}`} />
                <span className="font-medium">{user.name}</span>
                <span className="text-muted-foreground capitalize">• {user.status}</span>
              </div>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default TooltipStatus;
