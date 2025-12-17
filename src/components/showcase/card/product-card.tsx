import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

import { Heart, ShoppingCart } from "lucide-react";

import Image from "next/image";

const ProductCard = () => {
  return (
    <Card className="w-87.5 flex flex-col p-0 transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
      {/* replace with <img/> tag if not using next-js */}
      <div className="px-4 pt-4">
        <Image
          src="/assets/product-card.webp"
          alt="Image"
          width={300}
          height={300}
          quality={80}
          className="w-full h-62.5 object-cover rounded-lg"
        />
      </div>
      <div className="text-start flex-1 px-4 pb-4 space-y-2">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle>Sky Edition - Orange – Bathu</CardTitle>
            <Badge>New</Badge>
          </div>
          <Button variant="ghost" size="icon">
            <Heart size={18} />
          </Button>
        </div>
        <CardContent className="p-0">
          <p>
            Sky Edition – Orange blends bold citrus energy with a sleek, modern
            silhouette.
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-0">
          <div className="block">
            <p className="text-sm text-muted-foreground">Price</p>
            <span className="text-xl font-bold">$94.99</span>
          </div>
          <Button className="gap-2">
            <ShoppingCart className="h-4 w-4" />
            Add to cart
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProductCard;
