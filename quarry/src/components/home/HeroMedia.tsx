"use client";

import { useEffect, useRef, useState } from "react";

const videos = [
  "/videos/hero-web-final.mp4",
  "/videos/hero-software-final.mp4",
  "/videos/hero-automation-final.mp4",
  "/videos/hero-aesthetics-final.mp4",
  "/videos/work-hero-1-final.mp4",
];

const SLIDE_DURATION = 3000;

export default function HeroMedia() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % videos.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const activeVideo = videoRefs.current[activeIndex];

    if (!activeVideo) return;

    activeVideo.currentTime = 0;
    activeVideo.play().catch(() => {});
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
          preload={index === 0 ? "auto" : "metadata"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
    </div>
  );
}
