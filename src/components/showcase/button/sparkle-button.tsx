"use client";

import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

const SparkleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path
      className="star-main animate-[sparkle_1.5s_ease-in-out_infinite]"
      d="M12 2l1.8 4.6L18 8l-4.2 1.4L12 14l-1.8-4.6L6 8l4.2-1.4L12 2z"
    />
    <path
      className="star-bottom-left animate-[sparkle_1.5s_ease-in-out_infinite_0.3s]"
      d="M4 14l1 2.5L7.5 17l-2.5.8L4 20l-.8-2.2L1 17l2.2-.5L4 14z"
    />
    <path
      className="star-bottom-right animate-[sparkle_1.5s_ease-in-out_infinite_0.6s]"
      d="M18 15l.8 2 2.2.5-2.2.7L18 20l-.7-1.8L15 18l2-.5.8-2z"
    />
  </svg>
);

const SparkleButton = () => {
  return (
    <div className="relative group">
      {/* Outer glow on hover */}
      <div
        className={cn(
          "absolute -inset-2 rounded-full transition-all duration-300 opacity-0",
          "group-hover:opacity-100 group-hover:shadow-[0_0_80px_30px_rgba(109,76,255,0.6)]"
        )}
      />
      <MovingBorderButton
        borderRadius="9999px"
        duration={3000}
        containerClassName="h-12 w-44 cursor-pointer transition-shadow duration-300 group-hover:shadow-[0_0_40px_10px_rgba(109,76,255,0.5)]"
        borderClassName="bg-[radial-gradient(rgba(139,108,255,1)_40%,transparent_60%)]"
        className={cn(
          "gap-2 border-0 z-10 rounded-full",
          "bg-linear-to-r from-[#6D4CFF] via-[#7C5CFF] to-[#8B6CFF]",
          "transition-all duration-300 [&_path]:origin-center"
        )}
      >
        <SparkleIcon className="w-5 h-5 [&_path]:origin-center" />
        Generate Site
      </MovingBorderButton>
    </div>
  );
};

export default SparkleButton;

// Aceternity-style Button with Moving Border
// https://ui.aceternity.com/components/moving-border
const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: unknown;
}) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

// Aceternity-style Button with Moving Border
// https://ui.aceternity.com/components/moving-border
export function MovingBorderButton({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <Component
      className={cn(
        "relative h-16 w-40 overflow-hidden bg-transparent p-px text-xl",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(var(--purple-500)_40%,transparent_60%)] opacity-80",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/80 text-sm text-white antialiased backdrop-blur-xl",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}
