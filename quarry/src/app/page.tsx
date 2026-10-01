import About from "@/components/home/About";
import FinalCTA from "@/components/home/FinalCTA";
import HeroIntro from "@/components/home/HeroIntro";
import Process from "@/components/home/Process";
import SelectedWork from "@/components/home/SelectedWork";
import Solutions from "@/components/home/Solutions";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <HeroIntro />
      <About/>
      <SelectedWork/>
      <Solutions/>
      <Process/>
      <FinalCTA/>
      <Footer/>
    </main>
  );
}
