"use client";

import { useEffect, useRef, useState } from "react";

const videos = [
  "/videos/hero-web.mp4",
  "/videos/hero-software.mp4",
  "/videos/hero-automation.mp4",
  "/videos/hero-aesthetics.mp4",
  "/videos/work-hero-1.mp4",
 
];

export default function HeroMedia() {
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
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
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

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
    </div>
  );
}
