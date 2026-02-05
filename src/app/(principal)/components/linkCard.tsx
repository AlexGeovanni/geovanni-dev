"use client"
import { IconArrowOutward } from "@/icons";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";

export default function LinkCard({ page }: { page: string }) {
  const routerUrl = useTransitionRouter()
  return (
    <div
      className="font-satoshi cursor-pointer absolute bottom-0 w-auto translate-y-10 transform-gpu
  opacity-0 transition-all duration-300 group-hover:-translate-y-[14px] group-hover:opacity-100 text-white"
    >
      <Link href={`${page}`} onClick={(e)=>{
        e.preventDefault()
        routerUrl.push(page,{
          onTransitionReady: pageAnimation,
        })
      }}  className="flex items-end justify-end gap-1 ">
        <IconArrowOutward classname="size-5 " color="white" />
        <div className="text-xl leading-none">ver más</div>
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
    }
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
    }
  );
};