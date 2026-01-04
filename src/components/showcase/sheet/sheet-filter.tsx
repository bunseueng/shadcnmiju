"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const categories = ["Electronics", "Clothing", "Books", "Home & Garden", "Sports"];
const brands = ["Apple", "Samsung", "Nike", "Adidas", "Sony"];

const SheetFilter = () => {
  const [open, setOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([20, 80]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["Electronics"]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(["Apple"]);

  const filterCount = selectedCategories.length + selectedBrands.length;

  const resetFilters = () => {
    setPriceRange([20, 80]);
    setSelectedCategories([]);
    setSelectedBrands([]);
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2 relative">
          <Filter className="h-4 w-4" />
          Filters
          {filterCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
              {filterCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[350px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-foreground flex items-center justify-between">
            Filters
            <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground" onClick={resetFilters}>
              <RotateCcw className="h-3 w-3" />
              Reset
            </Button>
          </SheetTitle>
          <SheetDescription>Refine your search results</SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-6">
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Price Range</h4>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Categories</h4>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  />
                  <Label htmlFor={category} className="cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Brands</h4>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={brand}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => toggleBrand(brand)}
                  />
                  <Label htmlFor={brand} className="cursor-pointer">
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <SheetFooter className="mt-6">
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button onClick={() => setOpen(false)}>
            Apply Filters ({filterCount})
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SheetFilter;
