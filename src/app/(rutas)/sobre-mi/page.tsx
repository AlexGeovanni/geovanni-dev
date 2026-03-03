import { Fragment } from "react/jsx-runtime";
import Image from "next/image";

export default function SobreMiPage() {
  return (
    <Fragment>
      <div className="mb-2 lg:mb-4">
        <h1 className="text-3xl font-bold md:text-5xl">Sobre mí</h1>
      </div>
      <div className="py-1 grid md:grid-cols-3 md:py-2">
        <div className="order-2 md:order-0 md:col-span-2">
          <div className="text-balance text-lg ">
            <div className="space-y-2 my-3 md:mt-0">
              <p className="text-2xl">Hola, soy Geovanni</p>
              <p className="font-semibold text-4xl">Desarrollador web</p>
            </div>
            <div className="text-base sm:text-lg lg:text-xl space-y-2 text-[#D9D9D9]">
              <p>
                Con 1.5 años de experiencia, enfocado en la creación de
                interfaces intuitivas y modernas que transmitan confianza y
                seguridad a los usuarios finales. Me considero una persona
                comprometida, enfocada y con muchas ganas de crear soluciones
                útiles que generen un impacto positivo en las personas.
              </p>
              <p>
                Además de trabajar como desarrollador Frontend, tengo nociones
                en otras áreas como Backend(Java - Spring-Boot) y conocimientos
                sobre AWS. Unos de mis objetivos es desarrollar aplicaciones
                útiles para las personas, mi enfoque es asegurar que cada
                producto que desarrolló proporcione la mejor experiencia de
                usuario posible.
              </p>

              <p>
                Tengo fuertes habilidades para trabajar en equipo, lo que me
                permite colaborar de manera efectiva.
              </p>
            </div>
            <p> Además de la programación me gusta conocer nuevos lugares.</p>
          </div>
        </div>
        <div className="col-span-1 w-[400px] overflow-hidden rounded-lg relative border-4 border-[#0a0a0a]">
          <Image
            src="/img/me-geo-703.png"
            alt="Foto de perfil"
            width={400}
            height={400}
            className="brightness-75 -rotate-2 aspect-square object-cover object-top md:aspect-auto md:object-fill"
            //grayscale
          />
          <div
            className="pointer-events-none absolute inset-0 bg-transparent 
        [box-shadow:40px_-30px_80px_50px_#0a0a0a_inset] z-10"
          />
        </div>
      </div>
    </Fragment>
  );
}
