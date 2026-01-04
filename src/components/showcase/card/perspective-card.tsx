"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";

const PerspectiveCard = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="flex items-center justify-center w-full">
      <Card
        className="border-0 shadow-none cursor-pointer bg-transparent"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <CardContent
          className="relative p-0"
          style={{
            perspective: "1500px",
            perspectiveOrigin: "50% 50%",
          }}
        >
          {/* Main Card Image */}
          <div
            className={cn(
              "relative w-64 h-96 sm:w-80 sm:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-700 ease-out shadow-2xl",
              "transform-gpu"
            )}
            style={{
              transformStyle: "preserve-3d",
              transform: isHover
                ? "rotateX(10deg) rotateY(15deg)"
                : "rotateX(0deg) rotateY(0deg)",
            }}
          >
            <img
              src="/assets/card2.jpg"
              alt="Tyler The Creator - The Wildflower"
              className="w-full h-full object-cover"
            />

            {/* Subtle overlay on hover */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10 transition-opacity duration-700",
                isHover ? "opacity-100" : "opacity-0"
              )}
            />

            {/* Subtle shine effect */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent transition-all duration-700",
                isHover
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full"
              )}
            />
          </div>

          {/* Info Panel that appears at bottom-right, overlapping the card */}
          <div
            className={cn(
              "absolute bottom-4 -right-4 sm:bottom-8 sm:-right-20 transition-all duration-700 ease-out",
              isHover
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8 pointer-events-none"
            )}
            style={{
              transformStyle: "preserve-3d",
              transform: isHover
                ? "translateZ(40px) rotateY(-10deg) rotateX(15deg)"
                : "translateZ(0px)",
            }}
          >
            <div className="bg-gray-950/95 backdrop-blur-lg rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-5 shadow-2xl min-w-[200px] sm:min-w-[280px] border border-gray-800/50">
              <CardTitle className="text-white text-sm sm:text-lg font-bold mb-0.5 tracking-wide">
                TYLER THE CREATOR
              </CardTitle>
              <CardTitle className="text-white text-sm sm:text-lg font-bold mb-2 sm:mb-4 tracking-wide">
                THE WILDFLOWER
              </CardTitle>
              <CardDescription className="text-gray-300 text-xs sm:text-sm mb-1 sm:mb-1.5 font-medium">
                Current bid 1.00 ETH
              </CardDescription>
              <CardDescription className="text-gray-500 text-xs sm:text-xs">
                Ending in Sep 3, 2024
              </CardDescription>
            </div>
          </div>

          {/* Small thumbnail in top-right corner of info panel */}
          <div
            className={cn(
              "absolute bottom-16 -right-8 sm:bottom-[120px] sm:-right-[60px] transition-all duration-700 ease-out delay-100",
              isHover
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            )}
            style={{
              transformStyle: "preserve-3d",
              transform: isHover
                ? "translateZ(45px) rotateY(-8deg) rotateX(3deg)"
                : "translateZ(0px)",
            }}
          >
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gray-700 shadow-xl bg-gray-800">
              <img
                src="/assets/card2.jpg"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerspectiveCard;
