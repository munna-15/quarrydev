import CustomerSupport from "@/components/case-studies/CustomerSupport";
import About from "@/components/home/About";

import HeroIntro from "@/components/home/HeroIntro";
import SelectedWork from "@/components/home/SelectedWork";
import Solutions from "@/components/home/Solutions";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <HeroIntro />
      <About/>
      <Solutions/>
      <SelectedWork/>
      <CustomerSupport/>
      
      <Footer/>
    </main>
  );
}
