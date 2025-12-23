import { Badge } from "@/components/ui/badge";

const SemanticBadge = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge className="bg-green-500 hover:bg-green-600 border-0 text-white">
        Success
      </Badge>
      <Badge className="bg-blue-500 hover:bg-blue-600 border-0 text-white">
        Info
      </Badge>
      <Badge className="bg-yellow-500 hover:bg-yellow-600 border-0 text-white">
        Warning
      </Badge>
      <Badge className="bg-red-500 hover:bg-red-600 border-0 text-white">
        Error
      </Badge>
      <Badge className="bg-purple-500 hover:bg-purple-600 border-0 text-white">
        Premium
      </Badge>
    </div>
  );
};

export default SemanticBadge;
