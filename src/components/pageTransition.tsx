// "use client";
// import { AnimatePresence } from "motion/react";
// import { usePathname } from "next/navigation";
// import { useCallback, useLayoutEffect, useRef, useState } from "react";
// import LayoutTransitions from "./layaoutTransitons";

// export default function PageTransition({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   const [displayChildren, setDisplayChildren] = useState(children);
//   const [transitionKey, setTransitionKey] = useState(0);
//   const previousPathname = useRef(pathname);
//   const childrenRef = useRef(children);
//   const isTransitioning = useRef(false);
//   const pendingPathname = useRef<string | null>(null);
//   const pendingChildren = useRef<React.ReactNode>(null);

//   // Mantener los children actualizados en el ref
//   useLayoutEffect(() => {
//     childrenRef.current = children;
//   }, [children]);

//   // Callback que se ejecuta cuando termina la animación de salida
//   const handleExitComplete = useCallback(() => {
//     if (isTransitioning.current && pendingPathname.current !== null) {
//       // Ahora sí actualizar con el nuevo contenido
//       setDisplayChildren(pendingChildren.current);
//       setTransitionKey((prev) => prev + 1);
//       previousPathname.current = pendingPathname.current;
//       isTransitioning.current = false;
//       pendingPathname.current = null;
//       pendingChildren.current = null;
//     }
//   }, []);

//   useLayoutEffect(() => {
//     // Solo procesar si el pathname realmente cambió
//     if (previousPathname.current !== pathname && !isTransitioning.current) {
//       // Guardar el nuevo pathname y children para después de la animación
//       pendingPathname.current = pathname;
//       pendingChildren.current = childrenRef.current;
//       isTransitioning.current = true;
      
//       // Cambiar la key para iniciar la animación de salida
//       // displayChildren se mantiene con el contenido anterior (no lo actualizamos)
//       setTransitionKey((prev) => prev + 1);
//     } else if (previousPathname.current === pathname && !isTransitioning.current) {
//       // Si es el mismo pathname y no hay transición, actualizar inmediatamente
//       setDisplayChildren(children);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pathname]);

//   return (
//     <AnimatePresence mode="wait">
//       <LayoutTransitions key={transitionKey}>{displayChildren}</LayoutTransitions>
//     </AnimatePresence>
//   );
// }

"use client";

import { HTMLMotionProps, motion } from "motion/react";

const PageTransition = (props: HTMLMotionProps<"div">) => {

  return (
    // className="bg-[#0a0a0a]"
    <div >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        {...props}
      />
    </div>
  );
};

export default PageTransition