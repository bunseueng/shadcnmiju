"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const DrawerCart = () => {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, name: "Wireless Headphones", price: 99.99, quantity: 1, image: "🎧" },
    { id: 2, name: "Smart Watch", price: 199.99, quantity: 2, image: "⌚" },
    { id: 3, name: "Portable Charger", price: 49.99, quantity: 1, image: "🔋" },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="gap-2 relative">
          <ShoppingCart className="h-4 w-4" />
          Shopping Cart
          {itemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
              {itemCount}
            </Badge>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader>
            <DrawerTitle className="text-foreground">Your Cart</DrawerTitle>
            <DrawerDescription>{itemCount} items in your cart</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-3 max-h-[40vh] overflow-y-auto">
            {cart.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">Your cart is empty</div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                >
                  <div className="text-3xl">{item.image}</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate text-foreground">{item.name}</h4>
                    <p className="text-sm text-primary font-semibold">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      {item.quantity === 1 ? (
                        <Trash2 className="h-3 w-3 text-destructive" />
                      ) : (
                        <Minus className="h-3 w-3" />
                      )}
                    </Button>
                    <span className="w-6 text-center text-sm font-medium text-foreground">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="p-4 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground">Total</span>
              <span className="text-xl font-bold text-foreground">${total.toFixed(2)}</span>
            </div>
          </div>
          <DrawerFooter>
            <Button onClick={() => setOpen(false)} disabled={cart.length === 0}>
              Checkout
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Continue Shopping</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerCart;
