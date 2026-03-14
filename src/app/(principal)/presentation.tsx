"use client";

import Container from "@/components/container";
import { motion } from "motion/react";
export default function Presentation({ className }: { className?: string }) {
  // rgba(94, 212, 255, 0.15)
  return (
    <section className={`relative min-h-svh h-full ${className}`}>
      <header className="absolute top-0 left-0 w-full z-99 ">
        <Container className="max-w-345! w-full px-8 py-5">
          <h1 className="text-lg font-medium text-balance ">
            Alex Geovanni
            {/* <div className="text-xs tracking-wide font-medium border border-[#5ed4ff] text-[#5ed4ff] rounded-full px-2 py-1 w-fit flex items-center gap-1 ml-3">
              <span className="flex h-3 w-3 items-center">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full opacity-75 bg-green-500"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Disponible para trabajar
            </div> */}
            <div className="text-zinc-400 font-light text-sm">
              Desarrollador frontend
            </div>
          </h1>
        </Container>
      </header>
      {/* <div
        className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[600px] -translate-x-[30%] translate-y-[20%] rounded-full
           bg-[rgba(94,212,255,0.4)] opacity-50 blur-[100px]"
      ></div> */}
      {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_450px_at_100%_200px,#5ed4ff38,transparent)] blur-[70px]"></div> */}
      <div className="flex lg:m-4 lg:bg-gradient-to-b from-[#0a0a0a] to-transparent  lg:rounded-2xl h-[calc(100svh-2rem)] overflow-hidden  flex-col relative ">
        <motion.div className="absolute pointer-events-none animate-fade-in bg-ambientLight left-0 top-0 h-[1380px] w-[560px] rounded-full translate-y-[-350px] rotate-[-45deg]"></motion.div>
        <motion.div className="absolute pointer-events-none animate-fade-in bg-ambientLight3 left-0 top-0 h-[1380px] w-[240px] rounded-full translate-y-[-70%] translate-x-[-180%] rotate-[-45deg]"></motion.div>
        <motion.div className="absolute pointer-events-none animate-fade-in bg-ambientLight2 left-0 top-0 h-[1380px] w-[240px] rounded-full translate-y-[-50%] translate-x-[5%] rotate-[-45deg]"></motion.div>
        <motion.div className=" z-5 pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] lg:[mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></motion.div>
        <GridPattern />
        <Container className="relative flex flex-col justify-end h-full ">
          <div className="absolute z-10 inset-0 flex justify-center items-center ">
            {/* to-foreground/60  */}
            <div className="max-w-400 text-center ">
              <div className="w-full bg-linear-to-r from-foreground text-transparent via-10% via-white to-150% inline-block bg-clip-text">
                <h1 className="scroll-m-20 font-heading font-extrabold text-balance max-w-5xl leading-snug text-[clamp(2rem,8vw,2.5rem)] md:text-5xl lg:leading-16 xl:text-6xl">
                  DESARROLLANDO INTERFACES DE USUARIOS INTUITIVAS
                </h1>
              </div>
              <p className="mt-2">
                Transformo diseños en experiencias web interactivas.
              </p>
            </div>
          </div>
          <div className="pb-10 flex flex-col md:flex-row justify-between hidden">
            <motion.div
              initial={{
                y: 10,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  ease: "easeIn",
                  duration: 0.3,
                },
              }}
              className="text-2xl text-slate-100 md:ml-3"
            >
              Desarrollador Web
            </motion.div>
            <motion.div
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  ease: "easeIn",
                  duration: 0.3,
                  delay: 0.2,
                },
              }}
              className="font-medium text-slate-100 max-w-[50ch] "
            >
              {/* Desarrollo interfaces web con tecnologías modernas, creando
            soluciones útiles que combinan diseño y rendimiento para mejorar la
            experiencia del usuario. */}
              +1 años de experiencia, soy persona enfocado y con muchas ganas
              crear soluciones utiles para las personas.
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}

const GridPattern = () => (
  <div className="z-5 pointer-events-none absolute inset-0 flex w-screen h-svh items-center justify-center overflow-hidden [mask-image:radial-gradient(transparent_15%,white)]">
    <svg
      className="absolute z-5 left-0 top-0 size-full  [mask-image:linear-gradient(transparent_7%,white,transparent_90%)]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* <!-- Máscara radial suave --> */}
        <radialGradient id="fade" cx="50%" cy="50%" r="75%">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="white" />
        </radialGradient>

        <mask id="mask">
          <rect width="100%" height="100%" fill="url(#fade)" />
        </mask>

        {/* <!-- Patrón de grilla --> */}
        <pattern
          id="grid"
          width="95"
          height="95"
          patternUnits="userSpaceOnUse"
          strokeWidth="0.5"
        >
          <rect
            width="96"
            height="96"
            fill="transparent"
            stroke="#ffffff"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      {/* <!-- Fondo --> */}
      <rect width="100%" height="100%" fill="#0a0a0a" />

      {/* <!-- Cuadrados con opacidad variable --> */}
      <g mask="url(#mask)" fill="#a9a9a9" strokeWidth={0}>
        {/* <!-- fila 1 --> */}
        <rect x="97" y="97" width="95" height="95" opacity="0.09" />
        <rect x="853.333" y="0" width="95" height="95" opacity="0.55" />
        <rect x="1194.667" y="0" width="95" height="95" opacity="0.38" />

        {/* <!-- fila 2 --> */}
        <rect x="0" y="95" width="95" height="95" opacity="0.56" />

        <rect x="190" y="95" width="95" height="95" opacity="0.56" />
        <rect x="285" y="95" width="95" height="95" opacity="0.41" />
        <rect x="1140" y="95" width="95" height="95" opacity="0.3" />

        {/* <!-- fila 3 --> */}
        <rect x="95" y="285" width="95" height="95" opacity="0.21" />
        <rect x="475" y="285" width="95" height="95" opacity="0.91" />
        <rect x="1045" y="285" width="95" height="95" opacity="0.32" />

        {/* <!-- fila 4 --> */}
        <rect x="380" y="380" width="95" height="95" opacity="0.28" />
        <rect x="760" y="380" width="95" height="95" opacity="0.73" />
        <rect x="2218.667" y="380" width="95" height="95" opacity="0.53" />

        {/* <!-- fila 5 --> */}
        <rect x="570" y="475" width="95" height="95" opacity="0.57" />
        <rect x="1425" y="475" width="95" height="95" opacity="0.60" />
        <rect x="2389.333" y="475" width="95" height="95" opacity="0.30" />

        {/* <!-- fila 6 --> */}
        <rect x="341.333" y="1024" width="95" height="95" opacity="0.42" />
        <rect x="1365.333" y="1024" width="95" height="95" opacity="0.68" />
        <rect x="1706.667" y="1024" width="95" height="95" opacity="0.23" />

        {/* <!-- fila 7 --> */}
        <rect x="682.667" y="1194.667" width="95" height="95" opacity="0.43" />
        <rect x="1877.333" y="1194.667" width="95" height="95" opacity="0.52" />

        {/* <!-- fila 8 --> */}
        <rect x="853.333" y="1365.333" width="95" height="95" opacity="0.71" />
        <rect x="1706.667" y="1365.333" width="95" height="95" opacity="0.73" />
      </g>

      {/* <!-- Grilla encima --> */}
      <rect width="100%" height="100%" fill="url(#grid)" strokeWidth="0" />
    </svg>
  </div>
);

{
  /* <div className="flex lg:m-4  lg:bg-gradient-to-b from-neutral-200 dark:from-neutral-950 to-transparent  lg:rounded-2xl h-[calc(100svh-2rem)] overflow-hidden  flex-col relative "> */
}
