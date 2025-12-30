"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type MotionFadeProps = {
  children: ReactNode;
  delay?: number;
};

export const MotionFade = ({ children, delay = 0 }: MotionFadeProps) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true, margin: "-50px" }}
  >
    {children}
  </motion.div>
);
