import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarWithText = () => {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-medium">Alice Smith</p>
        <p className="text-xs text-muted-foreground">alice@example.com</p>
      </div>
    </div>
  );
};

export default AvatarWithText;
