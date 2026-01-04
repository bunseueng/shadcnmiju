"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Camera } from "lucide-react";
import { useState } from "react";

const UploadAvatar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Avatar className="h-20 w-20">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      </Avatar>
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
          <Input
            type="file"
            className="absolute opacity-0 cursor-pointer z-50 w-full h-full"
          />
          <Camera className="h-6 w-6 text-white" />
        </div>
      )}
    </div>
  );
};

export default UploadAvatar;
