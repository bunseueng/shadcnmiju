"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRef, useState } from "react";

const ThreeDCard = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * 10;
    const rotY = ((x - centerX) / centerX) * -10;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };
  return (
    <Card className="w-87.5 border-0 shadow-none cursor-grab bg-transparent">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: "1000px",
        }}
        className="w-full"
      >
        <div
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: "transform 0.1s ease-out",
            transformStyle: "preserve-3d",
          }}
        >
          <CardContent>
            <img
              src="/assets/card2.jpg"
              alt="image"
              className="w-full h-[450px] object-cover rounded-lg shadow-lg"
            />
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default ThreeDCard;
