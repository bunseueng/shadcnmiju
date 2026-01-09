"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

interface MousePosition {
  x: number;
  y: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface CardItems {
  title: string;
  description: string;
  icon: string;
}

const card_items: CardItems[] = [
  {
    title: "Parallax Motion",
    description:
      "Move your mouse to see elements follow your cursor with smooth parallax effects",
    icon: "✨",
  },
  {
    title: "Interactive Particles",
    description:
      "Hover over cards to spawn animated particles that burst outward",
    icon: "🎯",
  },
  {
    title: "Glow Effects",
    description:
      "Cards emit a dynamic glow that follows your cursor position in real-time",
    icon: "💫",
  },
  {
    title: "Staggered Animation",
    description:
      "Elements animate in sequence with carefully timed transitions for flow",
    icon: "🎨",
  },
  {
    title: "Scale Transforms",
    description:
      "Smooth scale and rotation transforms triggered by mouse proximity",
    icon: "🔄",
  },
  {
    title: "Smooth Transitions",
    description:
      "GPU-accelerated transitions for buttery smooth 60fps animations",
    icon: "⚡",
  },
];
const ParallaxCard = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<Particle>>([]);

  // Track container size
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate and remove particles
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.5, // gravity effect
          }))
          .filter((p) => {
            // Keep particles that are still visible
            return Math.abs(p.vx) > 0.1 || Math.abs(p.vy) > 0.1;
          })
      );
    }, 30);

    return () => clearInterval(interval);
  }, [particles.length]);

  // Create particles on hover
  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create multiple particles bursting outward
    const newParticles: Particle[] = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const speed = 3 + Math.random() * 2;
      newParticles.push({
        id: Date.now() + i,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
      });
    }

    setParticles((prev) => [...prev, ...newParticles]);

    // Clear old particles after a bit
    setTimeout(() => {
      setParticles((prev) =>
        prev.filter((p) => !newParticles.find((np) => np.id === p.id))
      );
    }, 800);
  };
  return (
    <div ref={containerRef} className="relative w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {card_items.map((card, index) => {
          // Calculate distance and angle from cursor to card
          const cardDistance = Math.sqrt(
            Math.pow(mousePosition.x - containerSize.width / 2, 2) +
              Math.pow(mousePosition.y - containerSize.height / 2, 2)
          );
          const maxDistance = 500;
          const proximity = Math.max(0, 1 - cardDistance / maxDistance);

          return (
            <div
              key={index}
              className="relative group"
              style={{
                transform: `perspective(1000px) rotateX(${
                  (mousePosition.y - containerSize.height / 2) * 0.02
                }deg) rotateY(${
                  (mousePosition.x - containerSize.width / 2) * 0.02
                }deg)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              <div
                className="absolute inset-0 bg-linear-to-br from-primary/30 to-primary/0 rounded-2xl opacity-0 blur-xl transition-opacity duration-300"
                style={{ opacity: proximity * 0.5 }}
              />

              <Card
                className="relative h-full p-8 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-visible"
                onMouseMove={handleCardHover}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  transform: `scale(${1 + proximity * 0.05})`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                    {card.description}
                  </p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ParallaxCard;
