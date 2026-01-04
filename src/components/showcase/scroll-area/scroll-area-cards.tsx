"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const projects = [
  { name: "Project Alpha", status: "Active", progress: 75 },
  { name: "Project Beta", status: "Completed", progress: 100 },
  { name: "Project Gamma", status: "On Hold", progress: 30 },
  { name: "Project Delta", status: "Active", progress: 50 },
  { name: "Project Epsilon", status: "Active", progress: 90 },
  { name: "Project Zeta", status: "Pending", progress: 0 },
  { name: "Project Eta", status: "Active", progress: 45 },
  { name: "Project Theta", status: "Completed", progress: 100 },
];

const ScrollAreaCards = () => {
  return (
    <ScrollArea className="h-[300px] w-full max-w-sm rounded-md border">
      <div className="p-4 space-y-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-lg border p-3 hover:bg-accent transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-foreground">{project.name}</h4>
              <Badge
                variant={
                  project.status === "Completed"
                    ? "default"
                    : project.status === "Active"
                    ? "secondary"
                    : "outline"
                }
              >
                {project.status}
              </Badge>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${project.progress}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {project.progress}% complete
            </p>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ScrollAreaCards;
