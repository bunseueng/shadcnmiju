import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";

const CartButtonGroup = () => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const decrementQuantity = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  const incrementQuantity = () => {
    setQuantity(Math.min(99, quantity + 1));
  };

  const addToCart = () => {
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="flex items-center gap-3">
      <ButtonGroup>
        <Button
          variant="outline"
          size="sm"
          onClick={decrementQuantity}
          disabled={quantity <= 1}
        >
          <Minus />
        </Button>
        <ButtonGroupText>{quantity}</ButtonGroupText>
        <Button
          variant="outline"
          size="sm"
          onClick={incrementQuantity}
          disabled={quantity >= 99}
        >
          <Plus />
        </Button>
      </ButtonGroup>

      <Button
        variant="default"
        size="sm"
        onClick={addToCart}
        disabled={isAdding}
      >
        <ShoppingCart />
        {isAdding ? "Adding..." : "Add to Cart"}
      </Button>
    </div>
  );
};

export default CartButtonGroup;
