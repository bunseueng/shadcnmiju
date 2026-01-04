"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type CarouselItem = {
  id: number;
  image: string;
  title?: string;
};

const carouselItem: CarouselItem[] = [
  {
    id: 1,
    title: "image 1",
    image:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "image 2",
    image:
      "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "image 3",
    image:
      "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    title: "image 4",
    image:
      "https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    title: "image 5",
    image:
      "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const AutoPlayingCarousel = () => {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 2000 })]}
      className="w-full max-w-2xl mx-auto"
    >
      <CarouselContent>
        {carouselItem.map((item) => (
          <CarouselItem key={item.id}>
            <div className="relative aspect-video sm:aspect-21/9 overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
};

export default AutoPlayingCarousel;
