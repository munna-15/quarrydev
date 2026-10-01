import AboutHero from "@/components/about/AboutHero";
import AboutQuarry from "@/components/about/AboutQuarry";
import AboutPrinciples from "@/components/about/AboutPrinciples";
import Footer from "@/components/layout/Footer";

const cinematicBackground =
  "https://images.unsplash.com/photo-1573495611823-5397efa4fac7?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function AboutPage() {
  return (
    <main className="relative bg-[#050505] text-white">
      {/* Fixed background */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${cinematicBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <AboutHero />

        <AboutQuarry />

        {/* Only this area reveals the fixed background */}
        <div className="h-[70vh]" />

        <AboutPrinciples />

        <Footer />
      </div>
    </main>
  );
}
