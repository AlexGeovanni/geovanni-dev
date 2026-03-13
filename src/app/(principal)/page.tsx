import Presentation from "./presentation";
import MenuBentoGrid from "./menuBentoGrid";
import PageTransition from "@/components/pageTransition";
import Tecnologias from "./components/tecnologias";
import Container from "@/components/container";
import { IconArrowLeft, IconDownload, IconFile, IconGithub, IconLinkedin } from "@/icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="">
        <Presentation />
        <MenuBentoGrid />
        <Container className="border-b border-white/10 xl:border-l xl:border-r">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Link href={"https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"} target="_blank" className="group px-4 py-6 border-b border-white/10 flex justify-between hover:bg-zinc-900/40 transition ease-out duration-300 sm:border-r lg:border-b-0">
              <div className="flex gap-1 items-center">
                <IconLinkedin size={20} /> LINKEDIN
              </div>
              <IconArrowLeft size={24} classname="rotate-180 group-hover:rotate-130 transition ease-out duration-300" />
            </Link>
            <Link href={"https://github.com/AlexGeovanni"} target="_blank" className="group px-4 py-6 border-b border-white/10 flex justify-between hover:bg-zinc-900/40 transition ease-out lg:border-r duration-300 lg:border-b-0">
              <div className="flex gap-1 items-center">
                <IconGithub size={20} /> GITHUB
              </div>
              <IconArrowLeft size={24} classname="rotate-180 group-hover:rotate-130 transition ease-out duration-300" />
            </Link>
            <div className="px-4 py-4 border-white/10 flex justify-between sm:border-r lg:border-r-0 lg:py-6">
              <div className="flex gap-1 items-center">
                <IconFile size={20} /> CV
              </div>
              <a href="#" className="bg-white/20 p-2 rounded-lg"><IconDownload size={18} classname="" /></a>
            </div>
          </div>
        </Container>
        <Tecnologias />
      </main>
    </>
  );
}
