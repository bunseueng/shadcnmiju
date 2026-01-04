"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MessageSquare, Settings, User } from "lucide-react";

interface CarouselItemType {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const carouselItems: CarouselItemType[] = [
  {
    id: 1,
    title: "User Profile",
    description: "Manage your account settings and preferences",
    icon: <User className="h-8 w-8" />,
  },
  {
    id: 2,
    title: "Calendar",
    description: "Schedule and track your upcoming events",
    icon: <Calendar className="h-8 w-8" />,
  },
  {
    id: 3,
    title: "Messages",
    description: "Chat with your team and collaborators",
    icon: <MessageSquare className="h-8 w-8" />,
  },
  {
    id: 4,
    title: "Settings",
    description: "Configure your application preferences",
    icon: <Settings className="h-8 w-8" />,
  },
];

const VerticalCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-xs mx-auto"
    >
      <CarouselContent className="-mt-1 h-[400px]">
        {carouselItems.map((item) => (
          <CarouselItem key={item.id} className="pt-4 basis-1/2">
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6 gap-3">
                <div className="text-primary">{item.icon}</div>
                <h3 className="font-semibold text-lg text-center text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground text-center">
                  {item.description}
                </p>
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

export default VerticalCarousel;
