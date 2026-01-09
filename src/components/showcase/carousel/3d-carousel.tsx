"use client";

import { startTransition, useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

type CarouselItemType = {
  id: number;
  image: string;
  title?: string;
};

const carouselItems: CarouselItemType[] = [
  {
    id: 1,
    title: "image1",
    image: "/assets/carousel1.jpg",
  },
  {
    id: 2,
    title: "image2",
    image: "/assets/carousel2.jpg",
  },
  {
    id: 3,
    title: "image3",
    image: "/assets/carousel3.jpg",
  },
  {
    id: 4,
    title: "image4",
    image: "/assets/carousel4.jpg",
  },
  {
    id: 5,
    title: "image5",
    image: "/assets/carousel5.jpg",
  },
  {
    id: 6,
    title: "image6",
    image: "/assets/carousel6.jpg",
  },
  {
    id: 7,
    title: "image7",
    image: "/assets/carousel7.jpg",
  },
];

const ThreeDCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragRotation, setDragRotation] = useState(0); // Real-time rotation offset
  const dragStartX = useRef(0);
  const dragStartRotation = useRef(0);

  const quantity = carouselItems.length;
  const anglePerItem = 360 / quantity;
  const radius = 300; // Distance from center

  useEffect(() => {
    if (!api) {
      return;
    }

    startTransition(() => {
      setCurrent(api.selectedScrollSnap());
    });

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Calculate current rotation angle
  const baseRotation = -current * anglePerItem;
  const currentRotation = isDragging ? dragRotation : baseRotation;

  // Handle drag start
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    dragStartX.current = clientX;
    dragStartRotation.current = baseRotation;
    setDragRotation(baseRotation);
  };

  // Handle drag move - smooth real-time rotation
  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;

    const deltaX = clientX - dragStartX.current;
    // Convert pixels to degrees (adjust sensitivity with divisor)
    const rotationDelta = deltaX * 0.3;
    setDragRotation(dragStartRotation.current + rotationDelta);
  };

  // Handle drag end - snap to nearest card
  const handleDragEnd = () => {
    if (!isDragging) return;

    // Calculate which card we're closest to
    const normalizedRotation = ((dragRotation % 360) + 360) % 360;
    const nearestIndex =
      Math.round(normalizedRotation / anglePerItem) % quantity;
    const targetIndex = (quantity - nearestIndex) % quantity;

    api?.scrollTo(targetIndex);
    setIsDragging(false);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) handleDragEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <Carousel setApi={setApi} opts={{ align: "center", loop: true }}>
        {/* 3D Carousel Display */}
        <div
          className="relative h-96 w-full flex items-center justify-center select-none"
          style={{ perspective: "1000px" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`relative w-52 h-72 ${
              isDragging ? "" : "transition-transform duration-500 ease-out"
            }`}
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${currentRotation}deg)`,
              cursor: isDragging ? "grabbing" : "grab",
            }}
          >
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                className="absolute inset-0"
                style={{
                  transform: `rotateY(${
                    index * anglePerItem
                  }deg) translateZ(${radius}px)`,
                }}
              >
                <div className="w-full h-full overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hidden carousel content for navigation control */}
        <CarouselContent className="hidden">
          {carouselItems.map((item) => (
            <CarouselItem key={item.id}>
              <div />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Controls */}
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeDCarousel;
