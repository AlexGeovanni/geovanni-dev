"use client";
import Image from "next/image";
import { Fragment } from "react/jsx-runtime";
import Link from "next/link";
import { motion } from "motion/react";
import CardJob from "./cardjob";
import { data_jobs } from "@/data/jobData";

export default function TrabajosPage() {
  return (
    <Fragment>
      <div className="mb-3">
        <h1 className="text-3xl font-bold md:text-5xl">Trabajos</h1>
      </div>
      <div className="w-full py-8 lg:py-12 ">
          <div className="w-11/12 border-b ms-auto border-white/20" />
        </div>
      <div className="pb-12 space-y-12">
        {
          data_jobs.map((job,i)=>(<CardJob key={`${job.title}-${i}`} job={job} />))
        }
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
