import { Badge } from "@/components/ui/badge";

const GradientBadge = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 border-0 text-white">
        Blue Gradient
      </Badge>
      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 border-0 text-white">
        Purple Gradient
      </Badge>
      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 border-0 text-white">
        Orange Gradient
      </Badge>
      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 border-0 text-white">
        Green Gradient
      </Badge>
      <Badge className="bg-gradient-to-r from-gray-800 to-gray-900 border-0 text-white">
        Dark Gradient
      </Badge>
    </div>
  );
};

export default GradientBadge;
