import { Badge } from "@/components/ui/badge";

const CategoryBadge = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge
        variant="outline"
        className="uppercase text-xs font-semibold tracking-wider"
      >
        Technology
      </Badge>
      <Badge
        variant="outline"
        className="uppercase text-xs font-semibold tracking-wider"
      >
        Design
      </Badge>
      <Badge
        variant="outline"
        className="uppercase text-xs font-semibold tracking-wider"
      >
        Business
      </Badge>
      <Badge variant="secondary" className="font-mono">
        v1.0.2
      </Badge>
      <Badge variant="secondary" className="font-mono">
        beta
      </Badge>
      <Badge variant="outline" className="bg-background uppercase">
        Archived
      </Badge>
      <Badge variant="outline" className="bg-background uppercase">
        Draft
      </Badge>
    </div>
  );
};

export default CategoryBadge;
