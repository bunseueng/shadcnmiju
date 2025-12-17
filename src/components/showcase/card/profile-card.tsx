import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Plus } from "lucide-react";

import Image from "next/image";

const categories = ["Front-end", "Web Developer", "Web Designer"];

const ProfileCard = () => {
  return (
    <Card className="w-87.5 shadow-lg hover:shadow-2xl hover:shadow-primary/20 rounded-xl transform duration-300 hover:scale-[1.02] hover:-translate-y-1 border-2 hover:border-primary/30 relative overflow-hidden group">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <CardHeader className="flex items-center justify-between px-6 pt-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary to-primary/60 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
            <Image
              src="/assets/card1.jpg"
              alt="avatar"
              width={48}
              height={48}
              className="size-12 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 relative z-10"
            />
          </div>

          <div className="block space-y-1">
            <CardTitle className="text-lg group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-primary/70 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              Your Name
            </CardTitle>
            <CardDescription className="text-sm">@Username</CardDescription>
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:rotate-90 hover:scale-110 bg-transparent"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </CardHeader>

      <CardContent className="text-start px-6 pb-6 space-y-4 relative z-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <Badge
              key={index}
              className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 border border-primary/20 hover:border-primary shadow-sm"
            >
              {category}
            </Badge>
          ))}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          dolore voluptas porro nisi deleniti obcaecati facilis dicta laudantium
          ea exercitationem.
        </p>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
