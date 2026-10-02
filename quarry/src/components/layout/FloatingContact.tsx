"use client";

import { Phone } from "lucide-react";

const PHONE_NUMBER = "01792960610";
const WHATSAPP_NUMBER = "8801792960610";

const whatsappMessage =
  "Hi Quarry, I’m interested in discussing a project. I’d like to know more about your services.";

export default function FloatingContact() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <div className="fixed bottom-6 right-5 z-[80] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {/* Call */}
      <div className="group flex items-center">
        <a
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Call Quarry"
          className="mr-3 flex max-w-0 items-center overflow-hidden rounded-full border border-black/10 bg-white px-0 py-3.5 text-[#111827] opacity-0 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out group-hover:max-w-[235px] group-hover:px-5 group-hover:opacity-100"
        >
          <span className="whitespace-nowrap text-[15px] font-medium tracking-[-0.01em]">
            Call us
          </span>

          <span className="ml-2 text-[18px] text-black font-medium">↗</span>
        </a>

        <a
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Call Quarry"
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-[#111827] shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_35px_rgba(0,0,0,0.16)]"
        >
          <Phone size={21} strokeWidth={1.8} />
        </a>
      </div>

      {/* WhatsApp */}
      <div className="group flex items-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Start a conversation on WhatsApp"
          className="mr-3 flex max-w-0 items-center overflow-hidden rounded-full border border-black/10 bg-white px-0 py-3.5 text-[#111827] opacity-0 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out group-hover:max-w-[235px] group-hover:px-5 group-hover:opacity-100"
        >
          <span className="whitespace-nowrap text-[15px] font-medium tracking-[-0.01em]">
            Start a conversation
          </span>

          <span className="ml-3 text-[15px] text-black/35">↗</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Quarry on WhatsApp"
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-[#25D366] shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_35px_rgba(0,0,0,0.16)]"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path
              fill="currentColor"
              d="M20.52 3.48A11.82 11.82 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L.06 24l6.28-1.65a11.86 11.86 0 0 0 5.72 1.46h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.44-8.43ZM12.07 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.87 9.87 0 1 1 8.36 4.62Zm5.41-7.4c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.81.38-.28.3-1.06 1.04-1.06 2.53s1.09 2.94 1.24 3.14c.15.2 2.15 3.28 5.2 4.6.73.32 1.3.51 1.75.65.74.24 1.42.21 1.95.13.6-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
