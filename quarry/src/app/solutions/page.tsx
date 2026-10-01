import SolutionsHero from "@/components/solutions/SolutionsHero";
import Capabilities from "@/components/solutions/Capabilities";
import Footer from "@/components/layout/Footer";
import SolutionApproach from "@/components/solutions/SolutionApproach";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";

export default function SolutionsPage() {
  return (
    <main className="bg-[#050505] text-white">
      <SolutionsHero />
      <Capabilities />
      <SolutionApproach/>
      <SolutionsCTA/>
      <Footer />
    </main>
  );
}
