"use client";

import { useEffect } from "react";
import { useAnimate } from "motion/react";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface AudioLinesIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  isPlaying?: boolean;
}

export const AudioLinesIcon = ({
  className,
  size = 28,
  isPlaying = true,
  ...props
}: AudioLinesIconProps) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!isPlaying) return;

    const animations = [
      animate(
        ".line-1",
        { d: ["M6 6v11", "M6 10v3", "M6 6v11"] },
        { duration: 1.5, repeat: Infinity }
      ),
      animate(
        ".line-2",
        { d: ["M10 3v18", "M10 9v5", "M10 3v18"] },
        { duration: 1, repeat: Infinity }
      ),
      animate(
        ".line-3",
        { d: ["M14 8v7", "M14 6v11", "M14 8v7"] },
        { duration: 0.8, repeat: Infinity }
      ),
      animate(
        ".line-4",
        { d: ["M18 5v13", "M18 7v9", "M18 5v13"] },
        { duration: 1.5, repeat: Infinity }
      ),
    ];

    return () => {
      animations.forEach((anim) => anim.stop());
    };
  }, [isPlaying, animate]);

  return (
    <div className={cn(className)} {...props}>
      <svg
        ref={scope}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 10v3" />
        <path className="line-1" d="M6 6v11" />
        <path className="line-2" d="M10 3v18" />
        <path className="line-3" d="M14 8v7" />
        <path className="line-4" d="M18 5v13" />
        <path d="M22 10v3" />
      </svg>
    </div>
  );
};
