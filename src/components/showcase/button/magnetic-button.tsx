"use client";

import React, { useRef, useState, useEffect } from "react";

import { ArrowRight, Sparkles, Zap, Heart } from "lucide-react";

interface MagneticButtonProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  onClick?: () => void;
  variant?: "subtle" | "strong" | "glow";
}

export default function MagneticButtonDemo() {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold">Magnetic Button</h3>
        <p className="text-sm text-muted-foreground">
          Hover near the buttons to see the magnetic effect
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <MagneticButton variant="subtle" strength={0.2}>
          <Sparkles className="w-4 h-4" />
          Get Started
        </MagneticButton>
        <MagneticButton variant="strong" strength={0.4}>
          Learn More
          <ArrowRight className="w-4 h-4" />
        </MagneticButton>
        <MagneticButton variant="glow" strength={0.3}>
          <Heart className="w-4 h-4" />
          Soft Magnet
        </MagneticButton>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
        <MagneticButton variant="strong" strength={0.6}>
          <Sparkles className="w-5 h-5" />
        </MagneticButton>

        <MagneticButton variant="subtle" strength={0.15}>
          <Zap className="w-5 h-5" />
        </MagneticButton>
        <MagneticButton variant="glow" strength={0.5}>
          <Heart className="w-5 h-5" />
        </MagneticButton>
      </div>
    </div>
  );
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  strength = 0.3,
  className = "",
  onClick,
  variant = "subtle",
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      setPosition({ x: deltaX, y: deltaY });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      document.addEventListener("mousemove", handleMouseMove);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
      document.removeEventListener("mousemove", handleMouseMove);
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [strength]);

  const getVariantStyles = () => {
    switch (variant) {
      case "strong":
        return "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl hover:shadow-2xl hover:scale-105";
      case "glow":
        return "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/50 hover:shadow-2xl hover:scale-105";
      default:
        return "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:scale-102";
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`
        relative px-4 py-2 rounded-lg font-semibold text-sm
        transition-all duration-300 ease-out
        transform-gpu will-change-transform cursor-pointer
        ${getVariantStyles()}
        ${className}
      `}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) ${
          isHovered ? "scale(1.02)" : "scale(1)"
        }`,
      }}
    >
      {variant === "glow" && isHovered && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 opacity-75 blur-lg animate-pulse" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};
