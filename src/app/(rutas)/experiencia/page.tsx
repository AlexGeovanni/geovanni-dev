"use client"
import PageTransition from "@/components/pageTransition";
import { Fragment } from "react/jsx-runtime";
export default function ExperienciaPage() {
    return (
        <PageTransition>
        <Fragment>
            <div className="flex flex-col gap-2 xsm:flex-row xsm:items-center xsm:justify-between">
                <h2 className="text-2xl font-bold tracking-wider md:text-3xl">
                    Experiencia
                </h2>
                <div className="flex gap-2">
                    <p>Años de experiencia</p>
                    <span className="">→<strong> </strong></span>
                    <strong>1.2</strong>
                </div>
            </div>
            <div className="w-full">
                <div className="py-2 w-full">
                    <div className="w-full py-8 lg:py-12 ">
                        <div className="w-11/12 border-b ms-auto border-white/20" />
                    </div>
                    <div className="flex flex-col space-y-3 md:space-y-4  ">
                        <h3 className="text-4xl font-bold md:text-5xl ">B Life</h3>
                        <h3 className="text-2xl font-medium md:text-4xl ">Desarrollador Frontend</h3>
                        <div className="text-[#808080] md:text-lg">
                            <span>2024 - 2025</span>
                            <div className="rounded-md h-1 w-20 bg-amber-300 mt-3" />
                        </div>
                        <div className="space-y-2 text-[#D9D9D9]">
                            <div className="leading-relaxed tracking-wide md:text-lg ">
                                <p className=" space-y-3 text-balance">
                                    Desarrollo interfaces web con tecnologías modernas, creando soluciones útiles que combinan diseño y rendimiento para mejorar la experiencia del usuario.
                                </p>
                            </div>
                            <div className="space-y-4 grid grid-cols-1 w-full lg:grid-cols-3 lg:space-y-0">
                                <div className="lg:col-span-2 w-full">
                                    <p className="text-lg font-semibold mb-4">Logros</p>
                                    <ul className="list-  space-y-2">
                                        <li>
                                            <p>
                                                Colaboré en la migración de Astro.js a Next.js, mejorando la escalabilidad, rendimiento y mantenibilidad del proyecto.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Se implemento y trabaje con el patrón de diseño <strong>Adapter</strong> para estandarizar el consumo de datos del backend.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Desarrollé, mejoré módulos del ERP interno, optimizando la gestión administrativa.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Propuse una arquitectura basada en <strong>Micro-frontends (Module Federation)</strong>, reduciendo el acoplamiento 
                                                y facilitando la colaboración entre equipos.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="lg:col-span-1 ">
                                    <p className="text-lg font-semibold mb-4">Tecnologias & Librerias</p>
                                    <div className="flex flex-wrap gap-2">
                                        <div className="px-2 text-[#A1A1A1] rounded-[8px] text-sm py-1 border-2 border-zinc-700 bg-zinc-800 ">Nextjs</div>
                                        <div className="px-2 text-[#A1A1A1] rounded-[8px] text-sm py-1 border-2 border-zinc-700 bg-zinc-800 ">React+Vite</div>
                                        <div className="px-2 text-[#A1A1A1] rounded-[8px] text-sm py-1 border-2 border-zinc-700 bg-zinc-800 ">Astrojs</div>
                                        <div className="px-2 text-[#A1A1A1] rounded-[8px] text-sm py-1 border-2 border-zinc-700 bg-zinc-800 ">Zustand</div>
                                        <div className="px-2 text-[#A1A1A1] rounded-[8px] text-sm py-1 border-2 border-zinc-700 bg-zinc-800 ">Nano Stores</div>
                                        <div className="px-2 text-[#A1A1A1] rounded-[8px] text-sm py-1 border-2 border-zinc-700 bg-zinc-800 ">Redux</div>
                                        <div className="px-2 text-[#A1A1A1] rounded-[8px] text-sm py-1 border-2 border-zinc-700 bg-zinc-800 ">Tailwindcss</div>
                                        <div className="px-2 text-[#A1A1A1] rounded-[8px] text-sm py-1 border-2 border-zinc-700 bg-zinc-800 ">Pandacss</div>
                                        <div className="px-2 text-[#A1A1A1] rounded-[8px] text-sm py-1 border-2 border-zinc-700 bg-zinc-800 ">Framer Motion</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" text-[#D9D9D9] py-10">
                Cada experiencia me ha enseñado algo nuevo. Cada proyecto ha sido una oportunidad para crecer. Y esto es solo el comienzo.
            </div>
        </Fragment>
        </PageTransition>
    );
}

