"use client";

import CardSpotlight from "@/components/cardSpotlight";
import Container from "@/components/container";
import { aboutMe, experience, work, education } from "@/data";
import { IconLocation } from "@/icons";
import Image from "next/image";

interface MenuBentoGridProps {
  className?: string;
}
export default function MenuBentoGrid({ className }: MenuBentoGridProps) {
  return (
    <section
      className={`border-t  border-white/10 h-full flex items-stretch justify-stretch ${className}`}
    >
      <Container className="border-b border-white/10 xl:border-l xl:border-r">
        <div className="w-full md:grid md:grid-cols-4 lg:grid-cols-3 tablet:min-h-[490px] xl:h-137">
          <Card
            data={aboutMe}
            className=" col-span-2 min-h-100 lg:col-span-1 border-b border-white/10 h-120 md:border-r lg:border-b-0 lg:h-auto "
            opacity={45}
            isActive={false}
          >
            <div className="absolute top-0 left-0 right-0 p-5 flex items-center justify-center lg:grayscale group-hover/card:grayscale-0 transition-all duration-300 mask-[linear-gradient(to_top,rgba(255,255,255,0)_10%,rgba(255,255,255,0.1)_40%,#000000_100%)]">
              <div className="overflow-hidden rounded-md">
                <picture>
                  <img
                  src={'/img/card_me.JPG'}
                  alt="image about me"
                  width={600}
                  height={600}
                  className="min-h-20 -mt-11 w-full rounded-md object-contain "
                />
                </picture>
              </div>
            </div>
            <div className="p-5 space-y-2 transform-gpu flex-col gap-1 -translate-y-5 transition-all duration-300 lg:translate-y-0 lg:group-hover/card:-translate-y-8">
              <p className="font-bold text-2xl uppercase lg:text-3xl group-hover/card:text-[26px] transition-all ease-out duration-400">
                Geovanni
              </p>
              <p className="font-medium text-xl lg:text-2xl">Desarrollador Frontend</p>
              <p className=" text-gray-400 font-light lg:text-xl">
                +1 años de experiencia, soy persona enfocado y con muchas ganas
                crear soluciones utiles para las personas...
              </p>
              <div className="mt-2">
                <div className="border text-gray-300 inline-flex items-center gap-1 rounded-full py-1 px-2 text-xs border-white/20 ">
                  <IconLocation size={18} /> Puebla, Mexico
                </div>
              </div>
            </div>
          </Card>
          <div className="h-full w-full md:col-span-2 md:grid md:grid-cols-6 lg:grid-rows-5">
            <Card
              data={experience}
              className="border-b border-white/10 h-60 sm:h-45 sm:col-span-3 md:h-auto md:col-span-6 md:row-span-2 lg:col-span-3"
              opacity={30}
            >
              <div className="absolute px-4 h-60 top-0 tablet:top-5 w-full flex flex-col gap-2 items-center justify-center [mask:linear-gradient(to_top,transparent_35%,#000_100%)] grayscale group-hover/card:grayscale-0 transition-all duration-300">
                <div
                  className="w-full p-2 tablet:h-18 rounded-md border-[1.5px] border-white/10 bg-transparent 
        [box-shadow:0_-10px_80px_-20px_#ffffff1f_inset]"
                >
                  <div className="text-xs text-[#D9D9D9]/50 ">
                    Desarrollador frontend
                  </div>
                  {/* <div className="w-16 h-1.5 bg-[#D9D9D9]/50 rounded" /> */}
                  <div className="mt-2 w-[50%] h-1.5 bg-[#D9D9D9]/50 rounded" />
                  <div className="mt-2 w-[85%] h-1.5 bg-[#D9D9D9]/50 rounded" />
                </div>
                <div
                  className="w-full p-2 tablet:h-18 rounded-md border-[1.5px] border-white/10 bg-transparent 
        [box-shadow:0_-10px_80px_-20px_#ffffff1f_inset]"
                >
                  <div className="w-16 h-1.5 bg-[#D9D9D9]/50 rounded" />
                  <div className="mt-2 w-[50%] h-1.5 bg-[#D9D9D9]/50 rounded" />
                  <div className="mt-2 w-[85%] h-1.5 bg-[#D9D9D9]/50 rounded" />
                </div>
                <div
                  className="w-full p-2 tablet:h-18 rounded-md border-[1.5px] border-white/10 bg-transparent 
        [box-shadow:0_-10px_80px_-20px_#ffffff1f_inset]"
                >
                  <div className="w-16 h-1.5 bg-[#D9D9D9]/50 rounded" />
                  <div className="mt-2 w-[50%] h-1.5 bg-[#D9D9D9]/50 rounded" />
                  <div className="mt-2 w-[85%] h-1.5 bg-[#D9D9D9]/50 rounded" />
                </div>
                {/* <div className="w-full h-9 rounded-md border-[1.5px] border-white/10 bg-transparent 
        [box-shadow:0_-10px_80px_-20px_#ffffff1f_inset]" /> */}
              </div>
            </Card>
            <Card
              data={education}
              className=" border-white/10 border-b h-35 md:h-auto md:col-span-6 lg:col-span-3 lg:row-span-2"
              opacity={45}
            ></Card>
            <Card
              data={work}
              className="hidden opacity-0 pointer-events-none border-white/10 col-span-2 lg:col-span-6 lg:block lg:opacity-100 lg:pointer-events-auto lg:row-span-3"
              opacity={30}
            >
              <div className="absolute -top-2 left-0 right-0 flex items-center justify-center [mask:linear-gradient(to_top,transparent_30%,#000_100%)] lg:grayscale group-hover/card:grayscale-0 transition-all duration-300">
                <Image
                  src="/img/banner_proyect.png"
                  alt="work_img"
                  width={800}
                  height={100}
                  className="min-h-20 object-contain group-hover/card:scale-105 transition-all duration-300"
                />
              </div>
            </Card>
          </div>
          <Card
            data={work}
            className=" min-h-50 border-white/10 col-span-4 h-75 lg:hidden lg:opacity-0 lg:pointer-events-none"
            opacity={30}
          >
            <div className="absolute top-2 left-0 right-0 flex items-center justify-center [mask:linear-gradient(to_top,transparent_20%,#000_100%)] md:[mask:linear-gradient(to_top,transparent_30%,#000_100%)] md:-top-2 lg:grayscale group-hover/card:grayscale-0 transition-all duration-300">
              <Image
                src="/img/banner_proyect.png"
                alt="work_img"
                width={800}
                height={100}
                className="min-h-20 object-cover aspect-1.5/1 md:aspect-auto group-hover/card:scale-105 transition-all duration-300"
              />
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

const Card = ({
  data,
  className,
  opacity,
  isActive = true,
  children,
}: {
  data: typeof aboutMe | typeof experience | typeof work;
  className?: string;
  opacity: number;
  isActive?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`group/card relative lg:h-full xl:h-full  ${className}`}
    >
      <CardSpotlight opacity={opacity} data={data}>
        {children}
        {isActive && (
          <div className="p-5 transform-gpu flex-col gap-1 -translate-y-5 transition-all duration-300 lg:translate-y-0 lg:group-hover/card:-translate-y-5">
            <p className="font-bold text-[clamp(1.4rem,10vw,1.5rem)] uppercase  xl:text-[clamp(1.5rem,9vw,1.9rem)] group-hover/card:text-[26px] transition-all ease-out duration-400">
              {data.title}
            </p>
          </div>
        )}
      </CardSpotlight>
    </div>
  );
};
