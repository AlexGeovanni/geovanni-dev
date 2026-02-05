"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BackgroundAnimate() {
  const gridRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current || !overlayRef.current) return;

    // Establecer el estado inicial del fondo gris
    gsap.set(gridRef.current, {
      backgroundSize: "0rem 0rem",
      backgroundImage:
        "linear-gradient(to right, #4f4f4f2e 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px)",
      opacity: 1,
    });

    // Establecer el overlay blanco inicial
    gsap.set(overlayRef.current, {
      opacity: 1,
      backgroundImage:
        "linear-gradient(to right, #4f4f4f99 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f99 1px, transparent 1px)",
    });

    // Animación combinada: tamaño, opacidad y transición de color
    const timeline = gsap.timeline({ delay: 0.2 });

    timeline
      .to(gridRef.current, {
        backgroundSize: "6rem 4rem",
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      })
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "-=0.8" // Inicia antes de que termine la animación anterior
      );
  }, []);
  return (
    <div className="fixed left-0 top-0 -z-10 h-full w-full ">
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-black
                "
      >
        <div className="absolute inset-0 -z-10 h-full w-full">
          {/* Fondo gris final */}
          <div
            ref={gridRef}
            className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]"
            style={{
              backgroundSize: "6rem 4rem",
            }}
          />
          {/* Overlay blanco que se desvanece */}
          {/* <div
        ref={overlayRef}
        className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#4f4f4f99_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f99_1px,transparent_1px)]"
        style={{
          backgroundSize: "6rem 4rem",
        }}
      /> */}
        </div>
      </div>
    </div>
  );
}
