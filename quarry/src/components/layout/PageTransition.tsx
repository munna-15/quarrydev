
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function PageTransition() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
  }, [pathname]);

  useEffect(() => {
    const handleStart = () => {
      setVisible(true);
    };

    window.addEventListener("quarry-page-transition", handleStart);

    return () => {
      window.removeEventListener("quarry-page-transition", handleStart);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            clipPath: "inset(0 0 100% 0)",
          }}
          animate={{
            clipPath: "inset(0 0 0% 0)",
          }}
          exit={{
            clipPath: "inset(100% 0 0% 0)",
          }}
          transition={{
            duration: 0.58,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]"
        >
          <div className="flex w-full max-w-[420px] items-center gap-5 px-8">
            <motion.span
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.45,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-px flex-1 origin-right bg-white/20"
            />

            <motion.span
              initial={{
                opacity: 0,
                letterSpacing: "0.42em",
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                letterSpacing: "0.28em",
                scale: 1,
              }}
              transition={{
                duration: 0.48,
                delay: 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="whitespace-nowrap font-[var(--font-manrope)] text-[13px] font-semibold text-white"
            >
              QUARRY
            </motion.span>

            <motion.span
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.45,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-px flex-1 origin-left bg-white/20"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

