
import HeroMedia from "./HeroMedia";

export default function Hero() {
  return (
    <section className="relative h-full overflow-hidden bg-[#111827]">
      <HeroMedia />

      <div className="relative mx-auto flex h-full max-w-[1600px] items-end px-5 pb-8 sm:px-8 lg:px-12 lg:pb-12">
        <div className="flex w-full items-end justify-between gap-8">
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
              Software Engineering · Web · AI · Automation
            </p>

            <h2 className="max-w-[700px] font-[var(--font-manrope)] text-[clamp(32px,4.5vw,68px)] font-semibold leading-[0.94] tracking-[-0.06em] text-white">
              We build what’s next.
            </h2>
          </div>

          <p className="hidden max-w-[280px] text-right text-[11px] leading-5 text-white/45 sm:block">
            Digital experiences, software, AI systems and automation for
            ambitious businesses.
          </p>
        </div>
      </div>
    </section>
  );
}

