import { Badge } from "@/components/ui/badge";

const SizeVariationBadge = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="outline" className="h-5 px-1.5 text-xs">
        Extra Small
      </Badge>
      <Badge variant="outline" className="h-6 px-2 text-xs">
        Small
      </Badge>
      <Badge variant="outline">Default</Badge>
      <Badge variant="outline" className="h-8 px-3 text-sm">
        Large
      </Badge>
      <Badge variant="outline" className="h-10 px-4 text-base">
        Extra Large
      </Badge>
    </div>
  );
};

export default SizeVariationBadge;
