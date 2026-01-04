"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface Input3DProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputUnderline = (
  { label, error, className, ...props }: Input3DProps,
  ref: React.Ref<HTMLInputElement> | undefined
) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [mouseX, setMouseX] = React.useState(0);
  const [mouseY, setMouseY] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setMouseX((x - 0.5) * 20);
    setMouseY((y - 0.5) * 20);
  };

  const handleMouseLeave = () => {
    setMouseX(0);
    setMouseY(0);
  };

  return (
    <div className="w-full space-y-2 max-w-sm mx-auto">
      {label && (
        <label className="block text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: "1000px",
        }}
        className="relative"
      >
        <div
          style={{
            transform: isFocused
              ? `rotateX(${mouseY}deg) rotateY(${-mouseX}deg) translateZ(20px)`
              : "rotateX(0deg) rotateY(0deg) translateZ(0px)",
            transition: isFocused ? "none" : "transform 0.3s ease-out",
          }}
          className="relative"
        >
          {/* Glow effect layer */}
          <div
            className={cn(
              "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300",
              "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20",
              isFocused && "opacity-100"
            )}
            style={{
              filter: "blur(8px)",
              pointerEvents: "none",
            }}
          />

          {/* Input wrapper with border effect */}
          <div
            className={cn(
              "relative rounded-lg border transition-all duration-300",
              "overflow-hidden",
              isFocused
                ? "border-primary shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                : "border-input shadow-sm"
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Animated border gradient */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 rounded-lg"
              style={{
                backgroundImage: isFocused
                  ? "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)"
                  : "none",
                backgroundColor: isFocused ? "transparent" : "transparent",
                backgroundSize: "200% 200%",
                animation: isFocused
                  ? "gradientShift 3s ease infinite"
                  : "none",
                pointerEvents: "none",
                padding: "1px",
              }}
            >
              <div className="absolute inset-0 bg-background rounded-lg" />
            </div>

            <Input
              ref={ref}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Click me...😁"
              className={cn(
                "relative flex h-10 w-full bg-background px-3 py-2",
                "rounded-[6px] border-0 text-base",
                "placeholder:text-muted-foreground",
                "focus:outline-none focus:ring-0",
                "transition-all duration-200",
                "file:border-0 file:bg-transparent file:text-sm file:font-medium",
                "disabled:cursor-not-allowed disabled:opacity-50",
                className
              )}
              {...props}
            />
          </div>
        </div>
      </div>

      {error && <p className="text-sm font-medium text-destructive">{error}</p>}

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};
export default InputUnderline;
