import { Badge } from "@/components/ui/badge";

const BadgeItem = ["React", "TypeScript", "Tailwind", "Radix UI"];

const FloatingBadge = () => {
  return (
    <div className="mt-16 flex items-center gap-8 justify-center flex-wrap">
      {BadgeItem.map((tech, index) => (
        <Badge
          key={index}
          className="px-4 py-2 text-sm font-medium text-foreground/70 transition-all duration-300 animate-bounce"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {tech}
        </Badge>
      ))}
    </div>
  );
};

export default FloatingBadge;
