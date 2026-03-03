import Image from "next/image";
import { Fragment } from "react/jsx-runtime";

const tec = [
  {
    title: "🎨 Frontend",
    data: [
      {
        src: "/lenguajes/html_img.png",
        alt: "icon de html",
        name: "html",
      },
      {
        src: "/lenguajes/css_img.png",
        alt: "icon de css",
        name: "css",
      },
      {
        src: "/lenguajes/javascript_img.png",
        alt: "icon de javascript",
        name: "javascript",
      },
      {
        src: "/lenguajes/typescript_img.png",
        alt: "icon de typescript",
        name: "typescript",
      },
      {
        src: "/lenguajes/react_img.png",
        alt: "icon de react",
        name: "react",
      },
      {
        src: "/lenguajes/vue._img.png",
        alt: "icon de vue",
        name: "vue",
      },
      {
        src: "/lenguajes/astro_img.png",
        alt: "icon de astro",
        classname: "bg-white rounded-full p-1",
        name: "astro",
      },
      {
        src: "/lenguajes/next_img.png",
        alt: "icon de next",
        classname: "invert-100",
        name: "next",
      },
      {
        src: "/lenguajes/tailwind_img.svg",
        alt: "icon de tailwind",
        name: "tailwind",
      },
      {
        src: "/lenguajes/bootstrap_img.png",
        alt: "icon de bootstrap",
        name: "bootstrap",
      },
      {
        src: "/lenguajes/sass_img.png",
        alt: "icon de sass",
        name: "sass",
      },
      {
        src: "/lenguajes/panda_img.png",
        alt: "icon de panda",
        classname: "bg-white rounded-full p-1",
        name: "panda",
      },
      {
        src: "/lenguajes/motion_img.png",
        alt: "icon de motion",
        classname:
          "bg-white overflow-hidden rounded-full [&>img]:absolute [&>img]:inset-0 [&>img]:top-3.5 [&>img]:scale-110",
        name: "motion",
      },
      {
        src: "/lenguajes/tanstack_img.png",
        alt: "icon de tanstack",
        name: "tanstack",
      },
    ],
  },
  {
    title: "🖥️ Backend",
    data: [
      {
        src: "/lenguajes/nodejs_img.png",
        alt: "icon de nodejs",
        name: "nodejs",
      },
      {
        src: "/lenguajes/java_img.png",
        alt: "icon de Java",
        name: "java",
      },
      {
        src: "/lenguajes/spring_img.png",
        alt: "icon de spring",
        name: "spring",
      },
    ],
  },
  {
    title: "🗄️ Bases de datos",
    data: [
      {
        src: "/lenguajes/mongodb_img.png",
        alt: "icon de mongodb",
        name: "mongodb",
      },
      {
        src: "/lenguajes/mysql_img.png",
        alt: "icon de mysql",
        name: "mysql",
      },
      {
        src: "/lenguajes/postgresql_img.png",
        alt: "icon de postgresql",
        name: "postgresql",
      },
    ],
  },
  {
    title: "🧠 Estado y formularios",
    data: [
      {
        src: "/lenguajes/reduxtoolkit_img.png",
        alt: "icon de reduxtoolkit",
        name: "redux-toolkit",
      },
      {
        src: "/lenguajes/zustand_img.png",
        alt: "icon de zustand",
        classname: "scale-120!",
        name: "zustand",
      },
      {
        src: "/lenguajes/nanostore_img.svg",
        alt: "icon de nanostore",
        classname: "invert-100",
        name: "nanostore",
      },
      {
        src: "/lenguajes/hookform_img.png",
        alt: "icon de hookform",
        name: "react-hook-form",
      },
      {
        src: "/lenguajes/zod_img.png",
        alt: "icon de zod",
        name: "zod",
      },
    ],
  },
  {
    title: "🛠️ Herramientas",
    data: [
      {
        src: "/lenguajes/git_img.png",
        alt: "icon de git",
        name: "git",
      },
      {
        src: "/lenguajes/github_img.png",
        alt: "icon de github",
        classname: "invert-100",
        name: "github",
      },
      {
        src: "/lenguajes/docker_img.png",
        alt: "icon de docker",
        name: "docker",
      },
      {
        src: "/lenguajes/postman_img.png",
        alt: "icon de postman",
        name: "postman",
      },
      {
        src: "/lenguajes/slack_img.png",
        alt: "icon de slack",
        classname: "bg-white rounded-full p-1",
        name: "slack",
      },
      {
        src: "/lenguajes/figma_img.png",
        alt: "icon de figma",
        name: "figma",
      },
    ],
  },
];

export default function TecnologiasPage() {
  return (
    <Fragment>
      <div className="mb-6">
        <h2 className="text-3xl font-bold md:text-5xl">Tecnolgías</h2>

        <p className="text-balance space-y-3 text-lg  leading-relaxed tracking-wide">
          Un resumen sobre las tecnologías en la que he trabajado.
        </p>
      </div>
      <div className=" relative ">
        <div className="grid grid-cols-1 lg:grid-cols-9">
          {/* border-[1.5px] border-white/10 */}
          <div
            className="col-span-1 lg:col-span-3 
          p-px
          relative
          before:absolute
          before:inset-0
          before:content-['']
          before:bg-conic/[from_var(--border-angle-one)]
          before:from-[#0a0a0a] before:from-70% before:via-[#ffffff37] before:via-90% before:to-[#0a0a0a] before:to-100%

          after:absolute
          after:inset-0
          after:content-['']
          after:bg-conic/[from_var(--border-angle-two)]
          after:from-[#0a0a0a]/0 after:from-70% after:via-[#ffffff37] after:via-90% after:to-[#0a0a0a] after:to-100%
          "
            // before:bg-[conic-gradient(#0a0a0a_70deg,#ffffff37_90deg,#0a0a0a_100deg)]
            // bg-conic/[from_var(--border-angle)] from-[#0a0a0a] from-70% via-[#ffffff37] via-90% to-[#0a0a0a] to-100% p-px
          >
            <div className="p-3 md:p-6 h-full  relative bg-[#0a0a0a] z-10 ">
              <h3 className="font-semibold text-xl mb-2">{tec[0].title}</h3>
              <div className="mt-4">
                <ul className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4 lg:grid-cols-4">
                  {tec[0].data.map((tec) => (
                    <li key={tec.alt} className="">
                      <div
                        className={`h-12 w-12 m-auto relative lg:h-12 lg:w-12 ${tec?.classname ?? ""}`}
                      >
                        <Image
                          src={`${tec.src}`}
                          width={100}
                          height={100}
                          alt={tec.alt}
                          className={`h-full w-full object-contain`}
                        />
                      </div>

                      <div className="text-xs text-[#808080] w-full py-1 text-center">
                        {tec.name}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-1 sm:grid-cols-6 lg:col-span-6">
            <div
              className="col-span-1 sm:col-span-3
            p-px
            relative
            before:absolute
            before:inset-0
            before:content-['']
            before:bg-conic/[from_var(--border-angle-one)]
            before:from-[#0a0a0a] before:from-70% before:via-[#ffffff37] before:via-90% before:to-[#0a0a0a] before:to-100%

            after:absolute
            after:inset-0
            after:content-['']
            after:bg-conic/[from_var(--border-angle-two)]
            after:from-[#0a0a0a]/0 after:from-70% after:via-[#ffffff37] after:via-90% after:to-[#0a0a0a] after:to-100%
            "
            >
              <div className="p-3 md:p-6 h-full relative bg-[#0a0a0a] z-10">
                <h3 className="font-semibold text-xl mb-2">{tec[1].title}</h3>
                <div className="mt-4">
                  <ul className="grid grid-cols-4 gap-4 lg:grid-cols-4">
                    {tec[1].data.map((tec) => (
                      <li key={tec.alt} className="">
                        <div
                          className={`h-12 w-12 m-auto relative lg:h-12 lg:w-12 ${tec?.classname ?? ""}`}
                        >
                          <Image
                            src={`${tec.src}`}
                            width={100}
                            height={100}
                            alt={tec.alt}
                            className={`h-full w-full object-contain`}
                          />
                        </div>

                        <div className="text-xs text-[#808080] w-full py-1 text-center">
                          {tec.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-span-1 sm:col-span-3
            p-px
            relative
            before:absolute
            before:inset-0
            before:content-['']
            before:bg-conic/[from_var(--border-angle-one)]
            before:from-[#0a0a0a] before:from-70% before:via-[#ffffff37] before:via-90% before:to-[#0a0a0a] before:to-100%

            after:absolute
            after:inset-0
            after:content-['']
            after:bg-conic/[from_var(--border-angle-two)]
            after:from-[#0a0a0a]/0 after:from-70% after:via-[#ffffff37] after:via-90% after:to-[#0a0a0a] after:to-100%
            "
            >
              <div className="p-3 md:p-6 h-full relative bg-[#0a0a0a] z-10 ">
                <h3 className="font-semibold text-xl mb-2">{tec[2].title}</h3>
                <div className="mt-4">
                  <ul className="grid grid-cols-4 gap-4">
                    {tec[2].data.map((tec) => (
                      <li key={tec.alt} className="">
                        <div
                          className={`h-12 w-12 m-auto relative lg:h-12 lg:w-12 ${tec?.classname ?? ""}`}
                        >
                          <Image
                            src={`${tec.src}`}
                            width={100}
                            height={100}
                            alt={tec.alt}
                            className={`h-full w-full object-contain`}
                          />
                        </div>

                        <div className="text-xs text-[#808080] w-full py-1 text-center">
                          {tec.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-span-1 sm:col-span-3
            p-px
            relative
            before:absolute
            before:inset-0
            before:content-['']
            before:bg-conic/[from_var(--border-angle-one)]
            before:from-[#0a0a0a] before:from-70% before:via-[#ffffff37] before:via-90% before:to-[#0a0a0a] before:to-100%

            after:absolute
            after:inset-0
            after:content-['']
            after:bg-conic/[from_var(--border-angle-two)]
            after:from-[#0a0a0a]/0 after:from-70% after:via-[#ffffff37] after:via-90% after:to-[#0a0a0a] after:to-100%
            "
            >
              <div className="p-3 md:p-6 h-full relative bg-[#0a0a0a] z-10">
                <h3 className="font-semibold text-xl mb-2">{tec[4].title}</h3>
                <div className="mt-4">
                  <ul className="grid grid-cols-4 gap-4">
                    {tec[4].data.map((tec) => (
                      <li key={tec.alt} className="">
                        <div
                          className={`h-12 w-12 m-auto relative lg:h-12 lg:w-12 ${tec?.classname ?? ""}`}
                        >
                          <Image
                            src={`${tec.src}`}
                            width={100}
                            height={100}
                            alt={tec.alt}
                            className={`h-full w-full object-contain`}
                          />
                        </div>

                        <div className="text-xs text-[#808080] w-full py-1 text-center">
                          {tec.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-span-1 sm:col-span-3
            p-px
            relative
            before:absolute
            before:inset-0
            before:content-['']
            before:bg-conic/[from_var(--border-angle-one)]
            before:from-[#0a0a0a] before:from-70% before:via-[#ffffff37] before:via-90% before:to-[#0a0a0a] before:to-100%

            after:absolute
            after:inset-0
            after:content-['']
            after:bg-conic/[from_var(--border-angle-two)]
            after:from-[#0a0a0a]/0 after:from-70% after:via-[#ffffff37] after:via-90% after:to-[#0a0a0a] after:to-100%
            "
            >
              <div className="p-3 md:p-6 relative bg-[#0a0a0a] z-10">
                <h3 className="font-semibold text-xl mb-2">{tec[3].title}</h3>
                <div className="mt-4">
                  <ul className="grid grid-cols-4 gap-4 lg:grid-cols-4">
                    {tec[3].data.map((tec) => (
                      <li key={tec.alt} className="">
                        <div
                          className={`h-12 w-12 m-auto relative lg:h-12 lg:w-12 ${tec?.classname ?? ""}`}
                        >
                          <Image
                            src={`${tec.src}`}
                            width={100}
                            height={100}
                            alt={tec.alt}
                            className={`h-full w-full object-contain`}
                          />
                        </div>

                        <div className="text-xs text-[#808080] w-full py-1 text-center">
                          {tec.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className="absolute bottom-auto left-auto right-0 top-0 h-[400px] w-[600px] -translate-x-[50%] translate-y-[0%] rounded-full
           bg-[#ffffff1f] opacity-50 blur-[100px]"
        /> */}
      </div>
    </Fragment>
  );
};