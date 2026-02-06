import CardSpotlight from "@/components/cardSpotlight";
import Container from "@/components/container";
import LinkCard from "./components/linkCard";
import { aboutMe, experience, technology, work, education } from "@/data";
import { IconEmail, IconGithub, IconLinkedin } from "@/icons";
import Image from "next/image";
import Carousel from "./components/carousel";

interface MenuBentoGridProps {
  className?: string;
}
export default function MenuBentoGrid({ className }: MenuBentoGridProps) {
  return (
    <section
      className={`min-h-dvh h-full flex flex-col items-center justify-center ${className}`}
    >
      <Container>
        <div className=" w-full h-[60dvh] md:grid md:grid-cols-3 md:gap-4 lg:h-[65dvh]  ">
          <Card data={aboutMe} className="col-span-1" opacity={65}>
            <div className="absolute inset-0 pt-2 flex items-center justify-center [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] lg:grayscale group-hover/card:grayscale-0 transition-all duration-300">
              <Image
                src="/img/me_card.png"
                alt="work_img"
                width={350}
                height={100}
                className="min-h-20 object-contain group-hover/card:scale-105 transition-all duration-300"
              />
            </div>
          </Card>
          <div className="md:col-span-2 md:grid md:grid-cols-5 lg:grid-cols-3 lg:grid-rows-2 h-full w-full gap-4">
            <Card data={experience} className="md:col-span-2 lg:col-span-1" opacity={30}>
              <div className="absolute px-4 h-40  top-8 w-full flex flex-col gap-2 items-center justify-center [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] grayscale group-hover/card:grayscale-0 transition-all duration-300">
                <div
                  className="w-full p-2 h-10 rounded-md border-[1.5px] border-white/10 bg-transparent 
        [box-shadow:0_-10px_80px_-20px_#ffffff1f_inset]"
                >
                  <div className="w-16 h-1.5 bg-[#D9D9D9]/50 rounded" />
                  <div className="mt-2 w-32 h-1.5 bg-[#D9D9D9]/50 rounded" />
                </div>
                <div
                  className="w-full p-2 h-10 rounded-md border-[1.5px] border-white/10 bg-transparent 
        [box-shadow:0_-10px_80px_-20px_#ffffff1f_inset]"
                >
                  <div className="w-16 h-1.5 bg-[#D9D9D9]/50 rounded" />
                  <div className="mt-2 w-32 h-1.5 bg-[#D9D9D9]/50 rounded" />
                </div>
                <div
                  className="w-full p-2 h-10 rounded-md border-[1.5px] border-white/10 bg-transparent 
        [box-shadow:0_-10px_80px_-20px_#ffffff1f_inset]"
                >
                  <div className="w-16 h-1.5 bg-[#D9D9D9]/50 rounded" />
                  <div className="mt-2 w-32 h-1.5 bg-[#D9D9D9]/50 rounded" />
                </div>
                {/* <div className="w-full h-9 rounded-md border-[1.5px] border-white/10 bg-transparent 
        [box-shadow:0_-10px_80px_-20px_#ffffff1f_inset]" /> */}
              </div>
            </Card>
            <Card data={work} className="col-span-3 lg:col-span-2" opacity={45}>
              <div className="absolute inset-0 pt-2 flex items-center justify-center [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] lg:grayscale group-hover/card:grayscale-0 transition-all duration-300">
                <Image
                  src="/img/banner_proyect.png"
                  alt="work_img"
                  width={350}
                  height={100}
                  className="min-h-20 object-contain group-hover/card:scale-105 transition-all duration-300"
                />
              </div>
            </Card>
            <Card data={technology} className="col-span-2 lg:col-span-1" opacity={30}>
              <Carousel />
            </Card>
            <Card data={education} className="col-span-2 lg:col-span-1" opacity={30}>
              zz
            </Card>
            {/* <Card data={experience} className="lg:col-span-auto" opacity={30} /> */}
            <div className="lg:col-span-auto grid grid-cols-2 grid-rows-2">
              <div className=" rounded-xl">
                <IconLinkedin />
              </div>
              <div className=" rounded-xl"></div>
              <div className=" rounded-xl">
                <IconGithub />
              </div>
              <div className=" rounded-xl">
                <IconEmail />
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* <Carousel /> */}
    </section>
  );
}

const Card = ({
  data,
  className,
  opacity,
  children,
}: {
  data: typeof aboutMe | typeof experience | typeof work;
  className?: string;
  opacity: number;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`group/card relative h-full hover:shadow-[0_0_30px_-5px_rgba(94,212,255,0.15)] transition-all ease-in-out duration-300 ${className}`}
    >
      <CardSpotlight opacity={opacity} data={data}>
        {children}
        {/* <h3 className="text-xl font-semibold leading-7 text-white font-clash">
          {data.title}
        </h3>
        <div className="flex m-auto border">
          <p className="font-pluJarkarta font-normal text-gray-300 text-sm line-clamp-2 transition-all duration-300 group/card-hover:-translate-y-[30px]">
            {data.description}
          </p>
        </div> */}
        {/* <LinkCard key={data.title} page={data.link} /> */}
      </CardSpotlight>
    </div>
  );
};
