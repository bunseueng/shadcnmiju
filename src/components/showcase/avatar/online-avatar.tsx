import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const OnlineAvatar = () => {
  return (
    <div className="relative">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green-400 ring-2 ring-white" />
    </div>
  );
};

export default OnlineAvatar;
