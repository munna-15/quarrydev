import WorkHero from "@/components/work/WorkHero";
import ProjectShowcase from "@/components/work/ProjectShowcase";
import CinematicGap from "@/components/work/CinematicGap";

import { projects, cinematicBackground } from "@/data/projects";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function WorkPage() {
  return (
    <main className="bg-[#f7f8fa] text-[#111827]">
      <Navbar />

      <WorkHero />

      <section className="relative">
        <div className="pointer-events-none sticky top-0 z-0 h-screen overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${cinematicBackground})`,
            }}
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 -mt-[100vh]">
          {projects.map((project, index) => (
            <div key={project.number}>
              <ProjectShowcase project={project} />

              {index !== projects.length - 1 && <CinematicGap />}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
