import { IconArrowLeft, IconCalendar } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

export default function EducacionPage() {
  return (
    <Fragment>
      <div className="mb-4">
        <h2 className="text-3xl font-bold md:text-5xl">Formación académica</h2>
      </div>
      <div className="mb-4">
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold">
            Licenciatura en Sistemas Computacionales
          </h3>
          <span className="font-semibold">Universidad Aútonoma de chiapas</span>
          <span className="font-mono text-[#808080] flex gap-1 items-center text-sm"><IconCalendar size={18} classname="text-[#808080]" />  2018-2023</span>
        </div>
        {/* <p>
          Construi bases solidas en programación, bases de datos(SQL/ modelado
          relacional) y desarrollo de software, comenzando C++, C# luego
          Construí bases sólidas en Java, JavaScript y desarrollo web, aprendí a
          analizar y resolver problemas complejos y a trabajar en proyectos
          colaborativos. tambien amplie mis conocimientos con estudio
          autodidacta en diversas librerías y frameworks. Este periodo reforzó
          mis capacidades técnicas y habilidades blandas como trabajo en equipo
          y comunicación. Consolidé mis conocimientos en desarrollo de software
          adquiriendo experiencia en Java y JavaScript, complementada con
          formación autodidacta en tecnologías modernas. Desarrollé
          competencias  y buenas
          prácticas de programación.
        </p> */}
        <div className="text-balance mt-4 space-y-1.5 leading-relaxed tracking-wide">
          <p>
            Construí bases sólidas en programación, bases de datos (SQL y
            modelado relacional) y desarrollo de software, iniciando con
            lenguajes como C++ y C#. Posteriormente consolidé mis conocimientos
            en Java y JavaScript, así como en desarrollo web.
          </p>
          <p>
            Durante este proceso aprendí a analizar y resolver problemas
            complejos y a trabajar en proyectos colaborativos.
          </p>
          <p>
            Complementé mi formación académica con estudio autodidacta en
            diversas librerías y frameworks modernos, fortaleciendo tanto mis
            capacidades técnicas como habilidades blandas. Este periodo me
            permitió adquirir buenas prácticas de programación y una base sólida
            en desarrollo de software.
          </p>
        </div>
      </div>
      <div className="mb-4 pt-1">
        <h2 className="text-2xl font-bold md:text-3xl">Certificados</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3 lg-md:gap-6">
          <WrapperCard link="https://app.aluracursos.com/program/certificate/6baa179d-ef1a-4c45-b4b0-da7e867d3708">
            <div className="flex flex-col space-y-2 p-4 md:px-8">
              <div className="flex justify-center items-center md:min-h-[200px]">
                <Image
                  src={"/img/alura.png"}
                  alt="Certificado de Alura"
                  width={100}
                  height={100}
                  className="invert object-contain aspect-square md:scale-150 lg:scale-200 "
                />
              </div>
              <div className="py-2 md:py-4 md:pb-2">
                <p className="font-semibold text-xs md:text-sm">Desarrollador Front-End</p>
              </div>
              <div className="py-2 md:py-6 flex items-center justify-between border-t-[1.5px] border-white/10">
                <span className="text-[12px] font-semibold">Ver</span>
                <div className="rotate-180 rounded-full flex justify-center items-center bg-gray-100/10 size-8 transition-all duration-300 group-hover/link:bg-[#D9D9D9]">
                  <IconArrowLeft classname="w-4 h-4 transition-all duration-300 group-hover/link:invert-100" />
                </div>
              </div>
            </div>
          </WrapperCard>
          <WrapperCard link="https://codigofacilito.com/certificates/103102">
            <div className="flex flex-col space-y-2 p-4 md:px-8">
              <div className="flex justify-center items-center md:min-h-[200px]">
                <Image
                  src={"/img/codeficil.png"}
                  alt="Certificado de code java"
                  width={100}
                  height={100}
                  className=" object-contain aspect-square md:scale-150 lg:scale-200 "
                />
              </div>
              <div className="py-2 md:py-4 md:pb-2">
                <p className="font-semibold text-xs md:text-sm">
                  Curso profesional de Java
                </p>
              </div>
              <div className="py-2 md:py-6 flex items-center justify-between border-t-[1.5px] border-white/10">
                <span className="text-[12px] font-semibold">Ver</span>
                <div className="rotate-180 rounded-full flex justify-center items-center bg-gray-100/10 size-8 transition-all duration-300 group-hover/link:bg-[#D9D9D9]">
                  <IconArrowLeft classname="w-4 h-4 transition-all duration-300 group-hover/link:invert-100" />
                </div>
              </div>
            </div>
          </WrapperCard>
          <WrapperCard link="https://platzi.com/p/geovanialex4/curso/1996-java-spring/diploma/detalle/?trk=public_profile_see-credential">
            <div className="h-full flex flex-col space-y-2 p-4 md:px-8">
              <div className="flex justify-center items-center md:min-h-[200px] h-full">
                <Image
                  src={"/img/platzi.png"}
                  alt="Certificado de platzi java"
                  width={100}
                  height={100}
                  className=" object-contain aspect-square scale-80 md:scale-150 "
                />
              </div>
              <div className="py-2 md:py-4 md:pb-2">
                <p className="font-semibold text-xs md:text-sm">Java spring</p>
              </div>
              <div className="py-2 md:py-6 flex items-center justify-between border-t-[1.5px] border-white/10">
                <span className="text-[12px] font-semibold">Ver</span>
                <div className="rotate-180 rounded-full flex justify-center items-center bg-gray-100/10 size-8 transition-all duration-300 group-hover/link:bg-[#D9D9D9] ">
                  <IconArrowLeft classname="w-4 h-4 transition-all duration-300 group-hover/link:invert-100" />
                </div>
              </div>
            </div>
          </WrapperCard>
          <WrapperCard link="https://platzi.com/p/geovanni.frony/curso/8781-course/diploma/detalle/?trk=public_profile_see-credential">
            <div className="h-full flex flex-col space-y-2 p-4 md:px-8">
              <div className="flex justify-center items-center md:min-h-[200px] h-full">
                <Image
                  src={"/img/platzi.png"}
                  alt="Certificado de platzi docker"
                  width={100}
                  height={100}
                  className=" object-contain aspect-square scale-80 md:scale-150"
                />
              </div>
              <div className="py-2 md:py-4 md:pb-2">
                <p className="font-semibold text-xs md:text-sm">Fundamentos de Docker</p>
              </div>
              <div className="py-2 md:py-6 flex items-center justify-between border-t-[1.5px] border-white/10">
                <span className="text-[12px] font-semibold">Ver</span>
                <div className="rotate-180 rounded-full flex justify-center items-center bg-gray-100/10 size-8 transition-all duration-300 group-hover/link:bg-[#D9D9D9]">
                  <IconArrowLeft classname="w-4 h-4 transition-all duration-300 group-hover/link:invert-100" />
                </div>
              </div>
            </div>
          </WrapperCard>
        </div>
      </div>
    </Fragment>
  );
}

interface CardProps {
  link: string;
  className?: string;
  children: React.ReactNode;
}

const WrapperCard = ({ link, className, children }: CardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="cursor-pointer relative group/link"
    >
      <div
        className={`col-span-1 h-full rounded-lg border-[1.5px] border-white/10 bg-transparent 
        [box-shadow:0_-10px_80px_-20px_#ffffff1f_inset] relative ${className} transition-all duration-500 group-hover/link:border-white/15 `}
      >
        {children}
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover/link:bg-[#ffffff1f]/10"></div>
      </div>
    </Link>
  );
};
