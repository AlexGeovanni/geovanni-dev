import { Fragment } from "react/jsx-runtime";
import Image from "next/image";

export default function SobreMiPage() {
  return (
    <Fragment>
      <h1 className="text-2xl font-bold tracking-wider md:text-3xl">Sobre mí</h1>
      <div className="grid grid-cols-3 py-2">
        <div className="col-span-2">
          <div className="text-balance space-y-3 text-lg font-clash leading-relaxed tracking-wide">
            <p>
              Además de trabajar como desarrollador Frontend, tengo nociones en
              otras áreas como Backend(Java - Spring-Boot) y conocimientos sobre
              AWS. Unos de mis objetivos es desarrollar aplicaciones útiles para
              las personas, mi enfoque es asegurar que cada producto que
              desarrolló proporcione la mejor experiencia de usuario posible.
            </p>

            <p>
              Tengo fuertes habilidades para trabajar en equipo, lo que me
              permite colaborar de manera efectiva. Además de la programación me
              gusta conocer nuevos lugares.
            </p>
          </div>
        </div>
          <div className="col-span-1">
            <Image
              src="/img/me-geo-703.png"
              alt="Foto de perfil"
              width={400}
              height={400}
              className="brightness-75 "
              //grayscale
            />
          </div>
      </div>
    </Fragment>
  );
}
