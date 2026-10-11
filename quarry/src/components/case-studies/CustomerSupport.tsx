"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const supportImages = [
  {
    src: "/images/support/support-04.png",
    alt: "Customer communicating with the support team",
  },
  {
    src: "/images/support/support-02.png",
    alt: "Technical issue investigation and resolution",
  },
  {
    src: "/images/support/support-01.png",
    alt: "Website maintenance and ongoing technical care",
  },
];

export default function CustomerSupport() {
  return (
    <section className="overflow-hidden bg-[#f5f5f2] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center border-t border-[#292c25]/15 pt-12 sm:pt-16">
        {/* Existing heading and content — unchanged */}
        <div className="flex w-full max-w-7xl flex-col items-center text-center">
          <h2 className="text-2xl font-medium tracking-tight text-[#292c25] sm:text-2xl lg:text-3xl">
            Industry-Leading Customer Support
          </h2>

          <div
            className="mt-5 flex items-center justify-center gap-1.5 text-[#e4b369]"
            aria-label="Five stars"
          >
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                size={22}
                strokeWidth={1.5}
                fill="currentColor"
                aria-hidden="true"
              />
            ))}
          </div>

          <p className="mt-6 w-full text-base leading-8 text-[#62655e] sm:text-lg">
            At Quarry, we believe great software deserves dependable support.
            Whether you need technical assistance, have a question, or want to
            improve your digital solution, our team is here to help. Reach out
            to us by email and we’ll work with you to find the right solution
            and keep your business moving forward.
          </p>
        </div>

        {/* Three centered circular illustrations */}
        <div className="mt-16 grid w-full max-w-4xl grid-cols-3 items-center justify-items-center gap-3 sm:mt-24 sm:gap-8 lg:gap-12">
          {supportImages.map((image) => (
            <div
              key={image.src}
              className="group relative aspect-square w-full max-w-[220px] overflow-hidden rounded-full shadow-[0_10px_28px_rgba(41,44,37,0.14)] transition-shadow duration-500 hover:shadow-[0_18px_40px_rgba(41,44,37,0.22)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 639px) 30vw, (max-width: 1023px) 180px, 220px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
