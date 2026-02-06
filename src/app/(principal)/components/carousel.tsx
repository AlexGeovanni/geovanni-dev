"use client";

import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Carousel() {
  const urlImg = [
    "lenguajes/astro_img.png",
    "lenguajes/typescript_img.png",
    "lenguajes/docker_img.png",
    "lenguajes/java_img.png",
    "lenguajes/react_img.png",
    "lenguajes/mysql_img.png",
    "lenguajes/github_img.png",
    "lenguajes/postman_img.png",
    "lenguajes/bootstrap_img.png",
    "lenguajes/tailwind_img.svg",
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);

  useGSAP(
    () => {
      const track = trackRef.current!;
      const totalWidth = track.scrollWidth / 2;

      gsap.set(track, { x: 0 });

      tl.current = gsap.timeline({ repeat: -1 });

      tl.current.to(track, {
        x: -totalWidth,
        duration: 12,
        ease: "none",
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="overflow-hidden"
      onMouseEnter={() => tl.current?.pause()}
      onMouseLeave={() => tl.current?.resume()}
    >
      <div ref={trackRef} className="flex">
        {[...urlImg, ...urlImg].map((img, i) => (
          <div key={i} className="min-w-10 px-2 shrink-0 brightness-95 lg:brightness-75 lg:grayscale blur-[1px] group-hover/card:grayscale-0 hover:brightness-100 hover:blur-none transition-all duration-300">
            <Image
              src={`/${img}`}
              alt={img}
              width={50}
              height={50}
              className="aspect-square object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
