"use client";
import PageTransition from "@/components/pageTransition";
import { Fragment } from "react/jsx-runtime";
import ExperienceSection from "./experienceSection";
export default function ExperienciaPage() {
  return (
    <PageTransition>
      <Fragment>
        <div className="flex flex-col gap-2 xsm:flex-row xsm:items-center xsm:justify-between">
          <h1 className="text-3xl font-bold md:text-5xl">Experiencia</h1>
          <div className="flex gap-2">
            <p>Años de experiencia</p>
            <span className="">
              →<strong> </strong>
            </span>
            <strong>1.5</strong>
          </div>
        </div>
        <div className="w-full">
          <ExperienceSection />
        </div>
        <div className="italic text-[#808080] text-sm py-6 lg:text-base lg:py-10">
          -- Cada experiencia me ha enseñado algo nuevo. Cada proyecto ha sido
          una oportunidad para crecer. Y esto es solo el comienzo.
        </div>
      </Fragment>
    </PageTransition>
  );
}
