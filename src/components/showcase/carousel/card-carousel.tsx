import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const carouselItem: CarouselItem[] = [
  {
    id: 1,
    title: "Responsive Design",
    description: "Works perfectly on all devices",
    icon: "📱",
  },
  {
    id: 2,
    title: "Touch Support",
    description: "Native swipe gestures included",
    icon: "👆",
  },
  {
    id: 3,
    title: "Auto-play",
    description: "Optional automatic progression",
    icon: "⏯️",
  },
  {
    id: 4,
    title: "Customizable",
    description: "Easy to style and configure",
    icon: "🎨",
  },
  {
    id: 5,
    title: "Accessible",
    description: "Built with a11y in mind",
    icon: "♿",
  },
  {
    id: 6,
    title: "Performance",
    description: "Optimized for smooth animations",
    icon: "⚡",
  },
];

const CardCarousel = () => {
  return (
    <Carousel className="w-full max-w-3xl mx-auto">
      <CarouselContent className="-ml-2 md:-ml-4">
        {carouselItem.map((item) => (
          <CarouselItem
            key={item.id}
            className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="text-center pb-3">
                <div className="text-3xl sm:text-4xl mb-2">{item.icon}</div>
                <CardTitle className="text-base sm:text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-center text-sm sm:text-base text-muted-foreground">
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

export default CardCarousel;
