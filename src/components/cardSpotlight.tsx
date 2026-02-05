"use client";
import Carousel from "@/app/(principal)/components/carousel";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import Image from "next/image";
import type { MouseEvent } from "react";

interface CardSpotlightProps {
  children: React.ReactNode;
  opacity?: number;
}

export default function CardSpotlight({
  children,
  opacity = 65,
}: CardSpotlightProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <>
      <div
        // px-8 py-16
        className="relative h-full rounded-xl border-[1.5px] border-white/10 bg-transparent 
        [box-shadow:0_-10px_80px_-20px_#ffffff18_inset]
      "
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="pointer-events-none z-10 absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(94, 212, 255, 0.15),
              transparent ${opacity}%
            )
            `,
          }}
        />
        <div className="z-0 flex flex-col justify-center h-full w-full absolute">
          <Carousel />
          <Carousel />
          {/* <div className="h-[80%] mask-l-from-75 flex gap-2 flex-1">
             <Image
              src={"/lenguajes/javascript_img.png"}
              alt="astro"
              width={50}
              height={50}
              className="aspect-square object-contain rightness-50 "
            />
            <Image
              src={"/lenguajes/docker_img.png"}
              alt="astro"
              width={50}
              height={50}
              className="aspect-square object-contain rightness-50 "
            />
            <Image
              src={"/lenguajes/java_img.png"}
              alt="astro"
              width={50}
              height={50}
              className="aspect-square object-contain rightness-50 "
            />
          </div> */}
        </div>
        {/* p-4 */}
        <div className="p-4 overflow-hidden relative h-full">{children}</div>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-[#ffffff18]/5"></div>
    </>
  );
}
