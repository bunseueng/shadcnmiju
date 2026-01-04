import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { ShoppingCart } from "lucide-react";

interface CarouselItem {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

const carouselItem: CarouselItem[] = [
  {
    id: 1,
    name: "Premium Headphones",
    price: "$299",
    image:
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Audio",
  },
  {
    id: 2,
    name: "Wireless Speaker",
    price: "$149",
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Audio",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: "$399",
    image:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Wearable",
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: "$89",
    image:
      "https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Accessories",
  },
  {
    id: 5,
    name: "Wireless Keyboard",
    price: "$129",
    image:
      "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Input",
  },
];

const ProductCarousel = () => {
  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        {carouselItem.map((item) => (
          <CarouselItem
            key={item.id}
            className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
          >
            <Card className="pt-0">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-t-lg"
                />
                <Badge className="absolute top-2 left-2">{item.category}</Badge>
              </div>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.price}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full">
                  <ShoppingCart /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProductCarousel;
