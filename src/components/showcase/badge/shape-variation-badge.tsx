import { Badge } from "@/components/ui/badge";

const ShapeVariationBadge = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge variant="outline" className="rounded-none">
        Square
      </Badge>
      <Badge variant="outline" className="rounded-sm">
        Small Rounded
      </Badge>
      <Badge variant="outline">Default</Badge>
      <Badge variant="outline" className="rounded-full">
        Pill
      </Badge>
    </div>
  );
};

export default ShapeVariationBadge;
