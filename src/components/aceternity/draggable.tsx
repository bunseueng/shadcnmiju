import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function DraggableCardDemo() {
  const items = [
    {
      title: "3D Card",
      image: "/assets/hero-section1.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "3D Carousel",
      image: "/assets/hero-section2.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Magnetic Button",
      image: "/assets/hero-section3.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "3D Input",
      image: "/assets/hero-section4.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "3D Form",
      image: "/assets/hero-section5.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Perspective Card",
      image: "/assets/hero-section6.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Sparkle Button",
      image: "/assets/hero-section7.jpg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "3D Parallax Card",
      image: "/assets/hero-section8.jpg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-[400px] my-5 w-full items-center justify-center overflow-clip cursor-grab">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Drag to explore our components
      </p>
      {items.map((item, index) => (
        <DraggableCardBody
          className={cn("w-40 h-auto p-0 overflow-hidden", item.className)}
          key={index}
        >
          <div className="relative">
            <Image
              src={item.image}
              alt={item.title}
              width={160}
              height={96}
              className="w-full h-24 object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            <Badge className="absolute bottom-2 left-2 bg-white/10 backdrop-blur-sm text-white text-xs border-white/20">
              {item.title}
            </Badge>
          </div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
