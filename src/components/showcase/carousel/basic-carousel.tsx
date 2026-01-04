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
    title: "image1",
    image:
      "https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "image3",
    image:
      "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1539&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "image3",
    image:
      "https://images.unsplash.com/photo-1580553874067-be1d5ac6a94b?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "image4",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "image5",
    image:
      "https://images.unsplash.com/photo-1622208489373-1fe93e2c6720?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const BasicCarousel = () => {
  return (
    <Carousel className="w-full max-w-2xl mx-auto">
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

export default BasicCarousel;
