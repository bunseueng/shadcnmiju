import { Badge } from "@/components/ui/badge";

const StatusBadge = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge
        variant="outline"
        className="border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-400"
      >
        <span className="mr-1 text-green-500">●</span>
        Active
      </Badge>
      <Badge
        variant="outline"
        className="border-yellow-500/50 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400"
      >
        <span className="mr-1 text-yellow-500">●</span>
        Pending
      </Badge>
      <Badge
        variant="outline"
        className="border-gray-500/50 bg-gray-500/10 text-gray-700 dark:text-gray-400"
      >
        <span className="mr-1 text-gray-500">●</span>
        Offline
      </Badge>
      <Badge
        variant="outline"
        className="border-red-500/50 bg-red-500/10 text-red-700 dark:text-red-400"
      >
        <span className="mr-1 text-red-500">●</span>
        Error
      </Badge>
      <Badge
        variant="outline"
        className="border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-400"
      >
        <span className="mr-1 text-blue-500">●</span>
        In Progress
      </Badge>
    </div>
  );
};

export default StatusBadge;
