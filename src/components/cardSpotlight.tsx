"use client";
import Carousel from "@/app/(principal)/components/carousel";
import LinkCard from "@/app/(principal)/components/linkCard";
import { aboutMe, experience, work } from "@/data";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import type { MouseEvent } from "react";

interface CardSpotlightProps {
  data: typeof aboutMe | typeof experience | typeof work;
  children: React.ReactNode;
  opacity?: number;
}

export default function CardSpotlight({
  data,
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
        className="relative flex flex-col justify-between overflow-hidden h-full rounded-xl border-[1.5px] border-white/10 bg-transparent 
        [box-shadow:0_-10px_80px_-20px_#ffffff1f_inset]
      "
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="pointer-events-none z-10 absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/card:opacity-100"
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
        {/* <div className="p-4 overflow-hidden relative h-full borde">{children}</div> */}
        <div className="p-4 text-xl font-semibold leading-7 text-[#D9D9D9]">{data.title}</div>
        <div className="flex-1 flex flex-col justify-center">{children}</div>
        <div className="p-4 pb-2 lg:pb-4">
          <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 -translate-y-10 transition-all duration-300 lg:translate-y-0 lg:group-hover/card:-translate-y-10">
            <p className="font-normal text-[#808080] text-sm line-clamp-2 ">{data.description}</p>
          </div>
        </div>
        <LinkCard key={data.title} page={data.link} />   
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover/card:bg-[#ffffff1f]/5"></div>
    </>
  );
}
