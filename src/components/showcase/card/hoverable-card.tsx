import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ArrowRight } from "lucide-react";

import Image from "next/image";

const HoverableCard = () => {
  return (
    <Card className="group relative w-87.5 overflow-hidden p-0 transform duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 cursor-pointer border-2 hover:border-primary/50 transition-all">
      <div className="relative overflow-hidden">
        <Image
          src="/assets/card1.jpg"
          alt="Image"
          width={350}
          height={200}
          quality={80}
          className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full" />
      </div>

      <div className="relative text-start space-y-3 bg-linear-to-b from-card to-background/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-primary/60 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            Ju Jingyi
          </CardTitle>
          <CardDescription className="flex items-center gap-2 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            18/06/1994
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-2">
          <p className="text-muted-foreground leading-relaxed text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            cupiditate deserunt deleniti ut consequuntur veritatis neque
            reiciendis dignissimos aspernatur at.
          </p>
        </CardContent>

        <CardFooter className="px-6 pb-6">
          <Button
            variant="link"
            className="pl-0 group/btn text-primary hover:text-primary/80 font-semibold transition-all duration-300 border border-border"
          >
            Check Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
        </CardFooter>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>
    </Card>
  );
};

export default HoverableCard;
