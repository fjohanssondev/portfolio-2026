"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Direction = "up" | "down" | "left" | "right";

interface FadeInProps {
  children: React.ReactNode;
  distance?: number;
  duration?: number;
  direction?: Direction;
  blur?: number;
  delay?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  distance = 20,
  duration = 0.5,
  direction = "up",
  blur = 10,
  delay = 0,
  once = true,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: "0px 0px -100px 0px",
  });

  const getInitialPosition = () => {
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
    filter: `blur(${blur}px)`,
  };

  return (
    <motion.div
      ref={ref}
      initial={initialState}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              filter: "blur(0px)",
              transition: { duration, delay },
            }
          : initialState
      }
    >
      {children}
    </motion.div>
  );
}
