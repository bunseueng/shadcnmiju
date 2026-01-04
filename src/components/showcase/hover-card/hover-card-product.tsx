"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const HoverCardProduct = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer inline-flex items-center gap-2 text-primary hover:underline font-medium">
          🎧 Wireless Headphones
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-0 animate-in slide-in-from-left-2 fade-in-0 duration-300">
        <div className="relative h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-t-md flex items-center justify-center text-6xl">
          🎧
          <Badge className="absolute top-2 left-2 bg-red-500">-20%</Badge>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-semibold text-foreground">Premium Wireless Headphones</h4>
              <div className="flex items-center gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${i <= 4 ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
                  />
                ))}
                <span className="text-xs text-muted-foreground ml-1">(234)</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-primary">$79.99</div>
              <div className="text-xs text-muted-foreground line-through">$99.99</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Active noise cancellation, 40h battery life, premium sound quality.
          </p>
          <Button className="w-full gap-2" size="sm">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverCardProduct;
