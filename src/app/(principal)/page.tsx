import Presentation from "./presentation";
import MenuBentoGrid from "./menuBentoGrid";
import PageTransition from "@/components/pageTransition";

export default function Home() {
  return (
    <PageTransition>

    <main className="">
      <Presentation />
      <MenuBentoGrid />
    </main>
    </PageTransition>
  );
}
