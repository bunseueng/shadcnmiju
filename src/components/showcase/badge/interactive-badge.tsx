import { Badge } from "@/components/ui/badge";

import { X } from "lucide-react";

const InteractiveBadge = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge
        variant="outline"
        className="cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        Hoverable
      </Badge>
      <Badge
        variant="secondary"
        className="cursor-pointer transition-all hover:scale-105 hover:shadow-sm"
      >
        Scalable
      </Badge>
      <Badge
        variant="outline"
        className="cursor-pointer transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
      >
        Primary Hover
      </Badge>
      <Badge
        variant="outline"
        className="group cursor-pointer transition-all hover:pr-5"
      >
        <span>Expandable</span>
        <X className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
      </Badge>
    </div>
  );
};

export default InteractiveBadge;
