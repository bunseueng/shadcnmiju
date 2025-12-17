import { Button } from "@/components/ui/button";
import { Settings, Share2, Heart, MoreVertical } from "lucide-react";

const GhostIconButton = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="ghost" size="icon">
        <Settings className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Share2 className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Heart className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <MoreVertical className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default GhostIconButton;
