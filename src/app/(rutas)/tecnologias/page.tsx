import Image from "next/image";
import { Fragment } from "react/jsx-runtime";

const tec = [
  {
    title: "🎨 Frontend",
    data: [
      {
        src: "/lenguajes/html_img.png",
        alt: "icon de html",
      },
      {
        src: "/lenguajes/css_img.png",
        alt: "icon de css",
      },
      {
        src: "/lenguajes/javascript_img.png",
        alt: "icon de javascript",
      },
      {
        src: "/lenguajes/typescript_img.png",
        alt: "icon de typescript",
      },
      {
        src: "/lenguajes/react_img.png",
        alt: "icon de react",
      },
      {
        src: "/lenguajes/vue._img.png",
        alt: "icon de vue",
      },
      {
        src: "/lenguajes/astro_img.png",
        alt: "icon de astro",
        classname: "bg-white rounded-full p-1",
      },
      {
        src: "/lenguajes/next_img.png",
        alt: "icon de next",
        classname: "invert-100",
      },
      {
        src: "/lenguajes/tailwind_img.svg",
        alt: "icon de tailwind",
      },
      {
        src: "/lenguajes/bootstrap_img.png",
        alt: "icon de bootstrap",
      },
      {
        src: "/lenguajes/sass_img.png",
        alt: "icon de sass",
      },
      {
        src: "/lenguajes/panda_img.png",
        alt: "icon de panda",
        classname: "bg-white rounded-full p-1",
      },
      {
        src: "/lenguajes/motion_img.png",
        alt: "icon de motion",
        classname:
          "bg-white rounded-full [&>img]:absolute [&>img]:inset-0 [&>img]:top-4 [&>img]:scale-110",
      },
      {
        src: "/lenguajes/tanstack_img.png",
        alt: "icon de tanstack",
      },
    ],
  },
  {
    title: "🖥️ Backend",
    data: [
      {
        src: "/lenguajes/nodejs_img.png",
        alt: "icon de nodejs",
      },
      {
        src: "/lenguajes/java_img.png",
        alt: "icon de Java",
      },
      {
        src: "/lenguajes/spring_img.png",
        alt: "icon de spring",
      },
    ],
  },
  {
    title: "🧠 Estado y formularios",
    data: [
      {
        src: "/lenguajes/reduxtoolkit_img.png",
        alt: "icon de reduxtoolkit",
      },
      {
        src: "/lenguajes/zustand_img.png",
        alt: "icon de zustand",
        classname: "scale-120!",
      },
      {
        src: "/lenguajes/nanostore_img.svg",
        alt: "icon de nanostore",
        classname: "invert-100",
      },
      {
        src: "/lenguajes/hookform_img.png",
        alt: "icon de hookform",
      },
      {
        src: "/lenguajes/zod_img.png",
        alt: "icon de zod",
      },
    ],
  },
  {
    title: "🗄️ Bases de datos",
    data: [
      {
        src: "/lenguajes/mongodb_img.png",
        alt: "icon de mongodb",
      },
      {
        src: "/lenguajes/mysql_img.png",
        alt: "icon de mysql",
      },
      {
        src: "/lenguajes/postgresql_img.png",
        alt: "icon de postgresql",
      },
    ],
  },
  {
    title: "🛠️ Herramientas",
    data: [
      {
        src: "/lenguajes/git_img.png",
        alt: "icon de git",
      },
      {
        src: "/lenguajes/github_img.png",
        alt: "icon de github",
        classname: "invert-100",
      },
      {
        src: "/lenguajes/docker_img.png",
        alt: "icon de docker",
      },
      {
        src: "/lenguajes/postman_img.png",
        alt: "icon de postman",
      },
      {
        src: "/lenguajes/slack_img.png",
        alt: "icon de slack",
        classname: "bg-white rounded-full p-1",
      },
      {
        src: "/lenguajes/figma_img.png",
        alt: "icon de figma",
      },
    ],
  },
];

export default function TecnologiasPage() {
  return (
    <Fragment>
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-wider md:text-3xl">
          Tecnolgías
        </h2>
        <p className="text-balance space-y-3 text-lg  leading-relaxed tracking-wide">
          Un resumen sobre las tecnologías en la que he trabajado.
        </p>
      </div>
      <div className=" relative ">
        <div className="grid grid-cols-2">
          {tec.map((item, i) => (
            //border-[1.5px] border-white/10
            <div
              key={item.title + i}
              className="min-h-[300px] col-span-1 p-6 relative overflow-hidden bg-transparent "
            >
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <div className="mt-4">
                <ul className="flex flex-wrap gap-4">
                  {item.data.map((tec) => (
                    <li
                      key={tec.alt}
                      className={`h-16 w-16 relative overflow-hidden ${tec?.classname ?? ""}`}
                    >
                      <Image
                        src={`${tec.src}`}
                        width={100}
                        height={100}
                        alt={tec.alt}
                        className={`h-full w-full object-contain`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute bottom-auto left-auto right-0 top-0 h-[700px] w-[700px] -translate-x-[30%] translate-y-[20%] rounded-full
           bg-[#ffffff1f] opacity-20 blur-[100px]"
        />
      </div>
    </Fragment>
  );
}
