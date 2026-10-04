"use client";

import { MotionConfig } from "framer-motion";

// Honors the visitor's "reduce motion" OS setting for every animation.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
