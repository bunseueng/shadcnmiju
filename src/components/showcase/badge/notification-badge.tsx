import { Badge } from "@/components/ui/badge";

const NotificationBadge = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge variant="destructive" className="rounded-full px-2">
        1
      </Badge>
      <Badge variant="destructive" className="rounded-full px-2">
        3
      </Badge>
      <Badge variant="destructive" className="rounded-full px-2">
        12
      </Badge>
      <Badge variant="destructive" className="rounded-full px-2">
        99+
      </Badge>
      <Badge variant="destructive" className="h-2 w-2 rounded-full p-0" />
      <Badge variant="secondary" className="rounded-full px-2 font-mono">
        NEW
      </Badge>
    </div>
  );
};

export default NotificationBadge;
