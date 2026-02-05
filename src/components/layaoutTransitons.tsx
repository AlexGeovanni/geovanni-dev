"use client";
import { motion } from "motion/react";

export default function LayoutTransitions({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 w-screen h-screen bg-red-600 z-9999 pointer-events-none"
        initial={{
          top: "100vh",
        }}
        animate={{
          top: "100vh",
        }}
        exit={{
          top: 0,
          transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
          },
        }}
      />
      <motion.div
        className="bg-black"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            // duration: 0.5,
            // delay: 0.2,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            // duration: 0.3,
          },
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
