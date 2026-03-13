"use client";
import Container from "@/components/container";
import { IconArrowLeft } from "@/icons";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";

export default function RutasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const routerUrl = useTransitionRouter();
  return (
    <main className="min-h-dvh">
      <header>
        <Container className="px-4 pt-12 mb-5 lg:pt-16 lg:mb-8">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              routerUrl.push("/", {
                onTransitionReady: pageAnimation,
              });
            }}
            className="group/back flex flex-row items-center gap-1"
          >
            <IconArrowLeft classname="size-5" /> <span className="leading-none underline-offset-4 group-hover/back:underline">volver</span>
          </Link>
        </Container>
      </header>
      <section>
        <Container className="px-4">{children}</Container>
      </section>
    </main>
  );
}

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.5,
        scale: 0.9,
        transform: "translateY(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    },
  );

  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    },
  );
};
