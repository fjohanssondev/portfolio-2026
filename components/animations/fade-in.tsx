"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

type Direction = "up" | "down" | "left" | "right";

interface FadeInProps {
  className?: string;
  children: React.ReactNode;
  distance?: number;
  duration?: number;
  direction?: Direction;
  blur?: number;
  delay?: number;
  once?: boolean;
}

// Strong ease-out: fast start, gentle settle.
const ease = [0.22, 1, 0.36, 1] as const;

export function FadeIn({
  className,
  children,
  distance = 12,
  duration = 0.45,
  direction = "up",
  blur = 0,
  delay = 0,
  once = true,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: "0px 0px -40px 0px",
  });
  const reduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    if (reduceMotion) return { x: 0, y: 0 };

    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: -distance, y: 0 };
      case "right":
        return { x: distance, y: 0 };
    }
  };

  const initialState = {
    opacity: 0,
    ...getInitialPosition(),
    ...(blur > 0 && !reduceMotion ? { filter: `blur(${blur}px)` } : {}),
  };

  return (
    <motion.div
      className={className}
      ref={ref}
      initial={initialState}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              ...(blur > 0 ? { filter: "blur(0px)" } : {}),
              transition: { duration: reduceMotion ? 0.2 : duration, delay, ease },
            }
          : initialState
      }
    >
      {children}
    </motion.div>
  );
}
