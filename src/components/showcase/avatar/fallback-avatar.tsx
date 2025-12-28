import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { User } from "lucide-react";

const FallbackAvatar = () => {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="/invalid-image.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="/invalid-image.png" alt="@shadcn" />
        <AvatarFallback className="bg-blue-500 text-white">CD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="" />
        <AvatarFallback className="bg-linear-to-r from-purple-400 to-pink-400 text-white">
          EF
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="" />
        <AvatarFallback>
          <User className="h-4 w-4" />
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default FallbackAvatar;
