"use client";
import Image from "next/image";
import { Fragment } from "react/jsx-runtime";
import Link from "next/link";
import { motion } from "motion/react";

export default function TrabajosPage() {
  return (
    <Fragment>
      <div className="mb-3">
        <h1 className="text-3xl font-bold md:text-5xl">Trabajos</h1>
      </div>
      <div className="">
        <div className="grid lg:grid-cols-5 ">
          <div className="flex flex-col gap-3 col-span-2 justify-center lg:gap-6">
            <div className="">
              <h3 className="font-semibold text-2xl lg:text-4xl text-[#D9D9D9]">
                SPHERE
              </h3>
              <div className="mt-2 space-x-2 lg:mt-3">
                <div className="border border-[#ffffff1f] text-[#D9D9D9] select-none px-4 p-1.5 rounded-full text-sm inline-block">
                  Maquetado
                </div>
                <div className="border border-[#ffffff1f] text-[#D9D9D9] select-none px-4 p-1.5 rounded-full text-sm inline-block">
                  Desarrollo frontend
                </div>
              </div>
            </div>
            <p className="text-lg  text-[#D9D9D9] lg:text-xl">
              Un diseño de una landing page como parte de una prueba técnica
              previa a la incorporación a la empresa.
            </p>
            <div className="my-2 lg:my-4 text-lg lg:text-xl">
              <p>Año</p>
              <p className="text-[#808080]">2024</p>
            </div>
            <div className="">
              <Link
                href={""}
                className="p-2 px-4 border rounded-full bg-[#ffffff1f] border-[#ffffff1f] text-[#D9D9D9] hover:bg-[#ffffff33] transition-colors"
              >
                Ver caso completo
              </Link>
            </div>
          </div>
          <div className="mt-10 col-span-3 bg-white/10 lg:px-4 min-h-[480px] lg:mt-0 w-full rounded-lg relative overflow-hidden">
            <motion.div
              initial={{
                y: 100,
                x: 100,
              }}
              animate={{
                y:16,
                x:0,
                transition:{
                  ease:"easeIn",
                  duration:0.8
                }
              }}
              className="w-full "
            >
              <Image
                src={"/works/landing-b.png"}
                alt="Imagen del proyecto"
                width={500}
                height={500}
                className="w-full brightness-90 h-auto aspect-auto object-cover rounded-lg "
              />
            </motion.div>
          </div>
        </div>

        {/* <div className="pt-4">
        Una plataforma, para usuarios que quieran vender productos o
              comprar.
          <h3 className="font-semibold text-xl text-[#D9D9D9]">
            Acerca
          </h3>
          <p>
            Marketplace es proyecto personal, es una plataforma online que ofrece verder productos de
            otras personas
          </p>
          <p className="pt-3 pb-2">Caracteristicas:</p>
          <ul className="list-disc list-inside space-y-1.5">
            <li>Registro de usuarios</li>
            <li>Publicación de productos</li>
            <li>Carrito de compras</li>
            <li>Pasarela de pago</li>
            <li>
              Perfil de usuario -{" "}
              <span className="text-xs text-[#808080] italic">Comprador</span>
            </li>
            <li>
              Dashboard -{" "}
              <span className="text-xs text-[#808080] italic">
                Vendedor
              </span>{" "}
            </li>
          </ul>
        </div> */}
      </div>
    </Fragment>
  );
}
