import Container from "@/components/container";

export default function Presentation({ className }: { className?: string }) {
  // rgba(94, 212, 255, 0.15)
  return (
    <section className={`relative ${className}`}>
      <div
        className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[600px] -translate-x-[30%] translate-y-[20%] rounded-full
           bg-[rgba(94,212,255,0.4)] opacity-50 blur-[100px]"
      ></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_450px_at_100%_200px,#5ed4ff38,transparent)] blur-[70px]"></div>
      <Container className="relative flex flex-col justify-center items-center min-h-dvh">
        <div className="space-y-4">
          <div className="text-9xl text-slate-100 font-clash">
            <div className="space-x-4">
              <span>GEOVANNI</span>
              <span>DIAZ</span>
            </div>
            <div className="text-xs tracking-wide font-medium border border-[#5ed4ff] text-[#5ed4ff] rounded-full px-2 py-1 w-fit flex items-center gap-1 ml-3">
              <span className="flex h-3 w-3 items-center">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full opacity-75 bg-green-500"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Disponible para trabajar
            </div>
          </div>
          {/* <TextAnimate client:load /> */}
          <div className="text-2xl text-slate-100 font-clash ml-3">
            Desarrollador Front-end
          </div>
          <div className="text-sm font-medium text-slate-100 max-w-[55ch] ml-3">
            Desarrollo interfaces web con tecnologías modernas, creando
            soluciones útiles que combinan diseño y rendimiento para mejorar la experiencia
            del usuario.
          </div>
        </div>
      </Container>
    </section>
  );
}
