import { Badge } from "@/components/ui/badge";

const BorderBadge = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge variant="outline" className="border-2">
        Thick Border
      </Badge>
      <Badge variant="outline" className="border-2 border-dotted">
        Dotted
      </Badge>
      <Badge variant="outline" className="border-2 border-dashed">
        Dashed
      </Badge>
      <Badge variant="outline" className="border-l-4 border-primary">
        Left Accent
      </Badge>
      <Badge
        variant="outline"
        className="border-b-4 border-primary rounded-sm rounded-b-sm"
      >
        Bottom Accent
      </Badge>
    </div>
  );
};

export default BorderBadge;
