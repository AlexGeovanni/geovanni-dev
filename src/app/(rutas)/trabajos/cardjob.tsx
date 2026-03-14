import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { IJob } from "@/data/jobData";

interface Props {
  job: IJob;
}

export default function CardJob({ job }: Props) {
  const { title, tags, description, year, pathImg, link } = job;
  return (
    <div className="lg-md:grid lg-md:grid-cols-5 ">
      <div className="flex flex-col gap-3 justify-start lg-md:col-span-2 lg-md:gap-6">
        <div className="">
          <h3 className="font-semibold uppercase text-2xl lg:text-4xl text-[#D9D9D9]">
            {title}
          </h3>
          <div className="mt-2 space-x-2 lg:mt-3">
            {tags.map((tag, i) => (
              <div key={i} className="border border-[#ffffff1f] text-[#D9D9D9] select-none px-4 p-1.5 rounded-full text-xs sm:text-sm inline-block">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <p className="text-balance text-[#D9D9D9] text-base xsm:text-lg lg:text-xl">
          {description}
        </p>
        <div className="my-2 lg:my-4 text-base xsm:text-lg lg:text-xl">
          <p>Año</p>
          <p className="text-[#808080]">{year}</p>
        </div>
        <div className="">
          <Link
            aria-label="button"
            href={""}
            className="inline-block text-sm p-2 px-4 border rounded-full bg-[#ffffff1f] border-[#ffffff1f] text-[#D9D9D9] hover:bg-[#ffffff33] transition-colors lg-md:text-base"
          >
            Ver caso completo
          </Link>
        </div>
      </div>
      <div className="mt-6 lg-md:col-span-3 lg-md:mt-10">
        <div className="bg-white/10  tablet:min-h-120 lg:mt-0 w-full rounded-lg relative overflow-hidden">
          <motion.div
            initial={{
              y: 100,
              x: 100,
            }}
            animate={{
              y: 16,
              x: 16,
              transition: {
                ease: "easeIn",
                duration: 0.8,
              },
            }}
            className="w-full "
          >
            <Image
              src={pathImg}
              alt={`imagen de proyecto - ${title}`}
              width={500}
              height={500}
              sizes="100vw"
              priority
              className="w-full brightness-90 h-auto aspect-auto object-cover rounded-md "
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
