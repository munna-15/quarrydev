import HeroMedia from "./HeroMedia";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-red-500">
      <div className="relative mx-auto flex h-full max-w-[1800px] flex-col px-4 pt-24 sm:px-6 lg:px-8">
        <div className="relative h-[60vh] shrink-0 overflow-hidden bg-green-500">
          <HeroMedia />

          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <h1 className="text-6xl font-bold text-white">HERO TEST</h1>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-3 bg-yellow-500">
          <div className="border-r border-black p-8 text-black">CARD 01</div>

          <div className="border-r border-black p-8 text-black">CARD 02</div>

          <div className="p-8 text-black">CARD 03</div>
        </div>
      </div>
    </section>
  );
}
