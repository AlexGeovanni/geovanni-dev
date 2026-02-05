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
        <div className="grid grid-cols-3 gap-4 w-full h-[65dvh]  ">
          <Card data={aboutMe} className="col-span-1" opacity={65} />
          <div className="col-span-2 grid grid-cols-3 grid-rows-2 h-full w-full gap-4">
            <Card data={experience} className="col-span-auto" opacity={30} />
            <Card data={work} className="col-span-2" opacity={45} />
            <Card data={technology} className="col-span-auto" opacity={30} />
            <Card data={education} className="col-span-auto" opacity={30} />
            {/* <Card data={experience} className="col-span-auto" opacity={30} /> */}
            <div className="col-span-auto grid grid-cols-2 grid-rows-2">
              <div className=" rounded-xl">
                <IconLinkedin />
              </div>
              <div className=" rounded-xl">
              </div>
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
}: {
  data: typeof aboutMe | typeof experience | typeof work;
  className?: string;
  opacity: number;
}) => {
  return (
    <div
      className={`group relative h-full hover:shadow-[0_0_30px_-5px_rgba(94,212,255,0.15)] transition-all ease-in-out duration-300 ${className}`}
    >
      <CardSpotlight opacity={opacity}>
        <div className="flex flex-col h-full justify-between">
          <h3 className="text-xl font-semibold leading-7 text-white font-clash">
            {data.title}
          </h3>
          <p className="font-pluJarkarta font-normal text-gray-300 text-sm line-clamp-2 transition-all duration-300 group-hover:-translate-y-[30px]">
            {data.description}
          </p>
        </div>
        <LinkCard key={data.title} page={data.link} />
      </CardSpotlight>
    </div>
  );
};
