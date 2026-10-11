"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";

const companyLinks = [
  { label: "About Quarry", href: "/about" },
  { label: "Our Approach", href: "/about/approach" },
];

const serviceLinks = [
  {
    label: "Web Development",
    href: "/solutions/web-development",
    description: "Websites and digital experiences",
  },
  {
    label: "Custom Software",
    href: "/solutions/custom-software",
    description: "Systems built around your business",
  },
  {
    label: "AI Solutions",
    href: "/solutions/ai-solutions",
    description: "Practical AI for real workflows",
  },
  {
    label: "Automation",
    href: "/solutions/automation",
    description: "Connected workflows that scale",
  },
];

type DropdownType = "company" | "services" | null;

const transitionEase = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const pathname = usePathname();

  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<DropdownType>(null);

  const mobileOpenRef = useRef(false);

  const closeMenus = useCallback(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setMobileSection(null);
  }, []);

  useEffect(() => {
    mobileOpenRef.current = mobileOpen;
  }, [mobileOpen]);

  // Navbar scroll behavior
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      setScrolled(currentScrollY > 12);

      if (currentScrollY <= 12) {
        setVisible(true);
      } else if (mobileOpenRef.current) {
        setVisible(true);
      } else if (delta > 4) {
        setVisible(false);
        setOpenDropdown(null);
      } else if (delta < -4) {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock background scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close menus after route changes or Escape
  // useEffect(() => {
  //   closeMenus();
  // }, [pathname, closeMenus]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenus]);

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    if (href.includes("#")) {
      closeMenus();
      return;
    }

    if (href === pathname) {
      closeMenus();
      return;
    }

    event.preventDefault();
    closeMenus();

    window.dispatchEvent(
      new CustomEvent("quarry-page-transition", {
        detail: { href },
      }),
    );

    window.setTimeout(() => {
      window.location.href = href;
    }, 600);
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      closeMenus();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleWebserverClick = (event: MouseEvent<HTMLAnchorElement>) => {
    handleNavigation(event, "/web-server");
  };

  const toggleDropdown = (name: DropdownType) => {
    setOpenDropdown((current) => (current === name ? null : name));
  };

  const toggleMobileSection = (name: DropdownType) => {
    setMobileSection((current) => (current === name ? null : name));
  };

  const navText = scrolled ? "text-[#20231f]" : "text-white";

  const navMuted = scrolled
    ? "text-[#41443d]/85 hover:text-[#20231f]"
    : "text-white/75 hover:text-white";

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          y: visible ? 0 : "-110%",
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.38,
          ease: transitionEase,
        }}
        className={`fixed inset-x-0 top-0 z-[100] transition-[background-color,box-shadow] duration-300 ${
          scrolled
            ? "bg-[#f7f6f1] shadow-[0_8px_32px_rgba(20,20,16,0.10)]"
            : "bg-transparent shadow-none"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className={`mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-4 transition-colors duration-300 sm:px-6 lg:px-8 ${
            scrolled ? "bg-[#f7f6f1]" : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            aria-label="Quarry Software — Home"
            className="group relative z-[110] -ml-12 flex shrink-0 items-center sm:-ml-14 lg:-ml-18"
          >
            <Image
              src="/images/quarry/logo.png"
              alt="Quarry Software"
              width={380}
              height={240}
              priority
              sizes="240px"
              className={`h-[140px] w-auto max-w-none object-contain transition-[filter,opacity] duration-300 sm:h-[160px] lg:h-[180px] ${
                scrolled ? "brightness-100" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center lg:flex">
            <div className="flex items-center gap-1">
              {/* Company dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("company")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown("company")}
                  aria-expanded={openDropdown === "company"}
                  aria-haspopup="true"
                  className={`flex h-11 items-center gap-1.5 px-4 text-[14px] font-medium tracking-[0.01em] transition-colors duration-300 ${navMuted}`}
                >
                  Company
                  <ChevronDown
                    size={14}
                    strokeWidth={1.5}
                    className={`transition-transform duration-300 ${
                      openDropdown === "company" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openDropdown === "company" && (
                    <Dropdown>
                      <DropdownLabel label="Company" />

                      {companyLinks.map((item) => (
                        <DropdownLink
                          key={item.href}
                          item={item}
                          onClick={handleNavigation}
                        />
                      ))}
                    </Dropdown>
                  )}
                </AnimatePresence>
              </div>

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("services")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown("services")}
                  aria-expanded={openDropdown === "services"}
                  aria-haspopup="true"
                  className={`flex h-11 items-center gap-1.5 px-4 text-[14px] font-medium tracking-[0.01em] transition-colors duration-300 ${navMuted}`}
                >
                  Services
                  <ChevronDown
                    size={14}
                    strokeWidth={1.5}
                    className={`transition-transform duration-300 ${
                      openDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openDropdown === "services" && (
                    <Dropdown wide>
                      <DropdownLabel label="What we build" />

                      <div className="space-y-0.5">
                        {serviceLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={(event) =>
                              handleNavigation(event, item.href)
                            }
                            className="group flex items-center justify-between rounded-sm px-2.5 py-2.5 transition-colors duration-200 hover:bg-white/[0.08]"
                          >
                            <span className="min-w-0">
                              <span className="block text-[14px] font-medium leading-tight text-white/90 transition-colors group-hover:text-white">
                                {item.label}
                              </span>

                              <span className="mt-1 block text-[11px] leading-tight text-white/45 transition-colors group-hover:text-white/65">
                                {item.description}
                              </span>
                            </span>

                            <ArrowUpRight
                              size={15}
                              strokeWidth={1.5}
                              className="ml-6 shrink-0 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/80"
                            />
                          </Link>
                        ))}
                      </div>
                    </Dropdown>
                  )}
                </AnimatePresence>
              </div>

              {/* Case studies */}
              <Link
                href="/case-studies"
                onClick={(event) => handleNavigation(event, "/case-studies")}
                className={`flex h-11 items-center px-4 text-[14px] font-medium tracking-[0.01em] transition-colors duration-300 ${navMuted}`}
              >
                Case Studies
              </Link>
            </div>

            {/* Webserver CTA */}
            <Link
              href="/web-server"
              onClick={handleWebserverClick}
              className={`ml-5 flex h-11 items-center gap-2 px-5 text-[12px] font-semibold tracking-[0.08em] transition-colors duration-300 ${
                scrolled
                  ? "bg-[#20231f] text-white hover:bg-[#3a4036]"
                  : "bg-white text-black hover:bg-white/90"
              }`}
            >
              WEBSERVER
              <ArrowUpRight size={15} strokeWidth={1.6} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="quarry-mobile-navigation"
            onClick={() => {
              setMobileOpen((current) => !current);
              setMobileSection(null);
              setOpenDropdown(null);
            }}
            className={`relative z-[110] flex h-10 w-10 shrink-0 items-center justify-center transition-colors duration-300 lg:hidden ${navText}`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                >
                  <X size={22} strokeWidth={1.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -45, scale: 0.8 }}
                >
                  <Menu size={22} strokeWidth={1.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="quarry-mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.28,
              ease: transitionEase,
            }}
            className="fixed inset-0 z-[90] overflow-y-auto bg-[#11120f] lg:hidden"
          >
            <div className="flex min-h-full flex-col px-5 pb-8 pt-24 sm:px-8 sm:pt-28">
              <div className="border-t border-white/[0.1]">
                <MobileSection
                  label="Company"
                  open={mobileSection === "company"}
                  onClick={() => toggleMobileSection("company")}
                >
                  {companyLinks.map((item) => (
                    <MobileLink
                      key={item.href}
                      item={item}
                      onClick={handleNavigation}
                    />
                  ))}
                </MobileSection>

                <MobileSection
                  label="Services"
                  open={mobileSection === "services"}
                  onClick={() => toggleMobileSection("services")}
                >
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(event) => handleNavigation(event, item.href)}
                      className="group flex items-center justify-between border-b border-white/[0.07] py-4"
                    >
                      <span>
                        <span className="block text-base font-medium text-white/90">
                          {item.label}
                        </span>

                        <span className="mt-1 block text-xs text-white/45">
                          {item.description}
                        </span>
                      </span>

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.4}
                        className="text-white/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  ))}
                </MobileSection>

                <Link
                  href="/case-studies"
                  onClick={(event) => handleNavigation(event, "/case-studies")}
                  className="flex w-full items-center justify-between border-b border-white/[0.1] py-5 text-left"
                >
                  <span className="text-[17px] font-medium text-white/90">
                    Case Studies
                  </span>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                    className="text-white/40"
                  />
                </Link>
              </div>

              {/* Mobile Webserver CTA */}
              <div className="pt-7">
                <Link
                  href="/web-server"
                  onClick={handleWebserverClick}
                  className="flex h-14 w-full items-center justify-between bg-white px-5 text-[12px] font-semibold tracking-[0.1em] text-black transition-colors hover:bg-white/90"
                >
                  <span>WEBSERVER</span>
                  <ArrowUpRight size={17} strokeWidth={1.5} />
                </Link>
              </div>

              <p className="mt-7 text-[10px] uppercase tracking-[0.18em] text-white/30">
                Software Engineering · Web · AI · Automation
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* Desktop dropdown */
function Dropdown({
  children,
  wide = false,
}: {
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{
        duration: 0.2,
        ease: transitionEase,
      }}
      className="absolute right-0 top-full z-50 pt-2"
    >
      <div
        className={`relative overflow-hidden border border-white/[0.14] bg-[#171815] shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl ${
          wide ? "w-[310px]" : "min-w-[220px]"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
        <div className="relative p-1.5">{children}</div>
      </div>
    </motion.div>
  );
}

function DropdownLabel({ label }: { label: string }) {
  return (
    <div className="px-2.5 pb-1 pt-1.5">
      <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/40">
        {label}
      </p>
    </div>
  );
}

function DropdownLink({
  item,
  onClick,
}: {
  item: { label: string; href: string };
  onClick: (event: MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={(event) => onClick(event, item.href)}
      className="group flex items-center justify-between rounded-sm px-2.5 py-2.5 transition-colors duration-200 hover:bg-white/[0.08]"
    >
      <span className="text-[14px] font-medium leading-tight text-white/90 transition-colors group-hover:text-white">
        {item.label}
      </span>

      <ArrowUpRight
        size={14}
        strokeWidth={1.5}
        className="ml-6 shrink-0 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/80"
      />
    </Link>
  );
}

function MobileSection({
  label,
  open,
  onClick,
  children,
}: {
  label: string;
  open: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <div className="border-b border-white/[0.1]">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-[17px] font-medium text-white/90">{label}</span>

        <ChevronDown
          size={18}
          strokeWidth={1.4}
          className={`text-white/45 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: transitionEase,
            }}
            className="overflow-hidden"
          >
            <div className="pb-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileLink({
  item,
  onClick,
}: {
  item: { label: string; href: string };
  onClick: (event: MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={(event) => onClick(event, item.href)}
      className="group flex items-center justify-between border-b border-white/[0.07] py-3.5"
    >
      <span className="text-[15px] font-medium text-white/70 transition-colors group-hover:text-white">
        {item.label}
      </span>

      <ArrowUpRight
        size={15}
        strokeWidth={1.4}
        className="text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70"
      />
    </Link>
  );
}
