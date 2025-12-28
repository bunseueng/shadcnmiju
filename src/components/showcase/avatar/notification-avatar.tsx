import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

const NotificationAvatar = () => {
  return (
    <div className="relative">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Badge
        variant="destructive"
        className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs"
      >
        3
      </Badge>
    </div>
  );
};

export default NotificationAvatar;
