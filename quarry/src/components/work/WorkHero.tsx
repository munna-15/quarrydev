"use client";

import { useEffect, useRef, useState } from "react";

const videos = ["/videos/work-hero-2.mp4", "/videos/work-hero.mp4"];

export default function WorkHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const video = videoRefs.current[activeIndex];

    if (!video) return;

    video.currentTime = 0;
    video.play().catch(() => {});

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % videos.length);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section className="relative h-screen overflow-hidden bg-black text-white">
      {videos.map((video, index) => (
        <video
          key={video}
          ref={(element) => {
            videoRefs.current[index] = element;
          }}
          src={video}
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

      <div className="relative z-10 flex h-full items-end px-5 pb-16 sm:px-8 lg:px-10">
        <h1 className="max-w-[1100px] font-[var(--font-manrope)] text-[clamp(3.8rem,8vw,8rem)] font-medium leading-[0.86] tracking-[-0.08em]">
          Digital products
          <br />
          <span className="text-white/50">built with purpose.</span>
        </h1>
      </div>
    </section>
  );
}
