import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Quote, Star } from "lucide-react";

interface CarouselItem {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const carouselItem: CarouselItem[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Designer",
    content:
      "This carousel component is absolutely fantastic! The smooth animations and responsive design make it perfect for our project.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Frontend Developer",
    content:
      "Easy to implement and customize. The shadcn integration is seamless and the documentation is clear.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer",
    content:
      "Beautiful design and excellent user experience. Our clients love the smooth interactions.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Tech Lead",
    content:
      "Reliable, performant, and well-designed. This has become our go-to carousel solution.",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  return (
    <Carousel className="w-full max-w-2xl mx-auto px-4">
      <CarouselContent className="-ml-2">
        {carouselItem.map((item) => (
          <CarouselItem key={item.id} className="pl-2">
            <Card className="border-border">
              <CardContent className="p-3 sm:p-6">
                <div className="flex flex-col gap-2 sm:gap-4">
                  <div className="flex gap-2 items-start">
                    <Quote className="h-4 w-4 sm:h-6 sm:w-6 shrink-0 text-muted-foreground mt-0.5" />
                    <p className="text-xs sm:text-base leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5 sm:gap-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 pt-1 sm:pt-2">
                    <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="font-semibold text-xs sm:text-sm truncate">
                        {item.name}
                      </p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
};

export default TestimonialCarousel;
