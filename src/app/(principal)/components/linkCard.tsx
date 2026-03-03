"use client";
import { IconArrowLeft } from "@/icons";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";

export default function LinkCard({ page }: { page: string }) {
  const routerUrl = useTransitionRouter();
  return (
    <div
      className="p-4 cursor-pointer absolute bottom-0 w-auto lg:translate-y-10 lg:transform-gpu
  lg:opacity-0 transition-all duration-300 lg:group-hover/card:-translate-y-[14px] lg:group-hover/card:opacity-100 text-white"
    >
      <Link
        href={`${page}`}
        onClick={(e) => {
          e.preventDefault();
          routerUrl.push(page, {
            onTransitionReady: pageAnimation,
          });
        }}
        className="flex items-end justify-end gap-2 px-2.5 group/link"
      >
        <div className="leading-none underline-offset-4 group-hover/link:underline">ver más</div>
        <IconArrowLeft classname="size-4 rotate-180" />
      </Link>
    </div>
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
