import React, { useState, useEffect } from "react";
import Typewriter from "./Typewriter";

const SERVICES_CARDS = [
  {
    id: 1,
    title: "Environmental Impact Assessment",
    description:
      "Comprehensive EIA studies for projects to ensure regulatory compliance and sustainability.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Sustainability Consulting",
    description:
      "Strategy and implementation support for ESG goals and circular economy practices.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "ISO Certification Support",
    description:
      "Guidance for ISO 14001, 45001 and other environmental and safety management systems.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Waste & Resource Management",
    description:
      "Audits, recycling programs and waste-to-value solutions for businesses.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Energy & Carbon Audits",
    description:
      "Energy efficiency assessments and carbon footprint measurement and reduction plans.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", hasDropdown: true },
  { label: "Careers", href: "/careers" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "News and Events", href: "/news" },
  { label: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [typewriterKey, setTypewriterKey] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setTypewriterKey((k) => k + 1), 8000);
    return () => clearTimeout(t);
  }, [typewriterKey]);

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const toggleMobileMenu = () => setMobileMenuOpen((o) => !o);

  return (
    <>
      <header className="sticky top-0 z-40 w-screen border-b border-stone-200/80 backdrop-blur supports-[backdrop-filter]:bg-white relative ">
        {/* Decorative images (background) */}
        <img
          src="/assets/img-2.jpeg"
          alt=""
          className="absolute -top-30 -left-35 z-0 w-64 h-64 object-cover object-[40%_30%] opacity-180 rounded-full pointer-events-none select-none"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 z-0 bg-black/10 "></div>

        {/* Real content */}
        <div className="relative z-10 mx-2 flex max-screen items-center justify-around px-2 py-2 sm:px-6">
          {/* Left: Logo */}
          <div className="flex min-w-0 flex-1 flex-col items-start mb-3">
            <div className="flex w-14 shrink-0 items-center justify-center rounded-lg sm:w-16">
              <div className="flex items-center justify-center text-xl font-bold sm:text-4xl ml-2">
                <span className="rounded py-0.5 text-black">H</span>
                <span className="rounded py-0.5 text-blue-600">P</span>
                <span className="rounded py-0.5 text-black">C</span>
              </div>
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-medium text-stone-600 sm:text-[11px] leading-tight">
                <Typewriter
                  key={typewriterKey}
                  text="Solutions for sustainable tomorrow."
                  speed={60}
                />
              </p>
              <p className="mt-0.5 text-[9px] text-blue-800 sm:text-[10px] leading-tight">
                ISO-certified — 9001:2015
              </p>
              <p className="text-[9px] text-blue-800 sm:text-[10px] leading-tight">
                ISO-certified — 14001:2015
              </p>
              <p className="text-[9px] text-blue-800 sm:text-[10px] leading-tight">
                ISO-certified — 45001:2018
              </p>
            </div>
          </div>

          {/* Right: Desktop nav */}
          <div className="hidden xl:flex flex-col gap-2">
            <nav className="flex items-center gap-4" aria-label="Main">
              {NAV_LINKS.map((item) =>
                item.hasDropdown ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      className="flex items-center gap-1 rounded-md px-3 py-2 text-lg font-medium text-stone-700 transition-colors hover:bg-emerald-400 hover:text-white"
                    >
                      {item.label}
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full z-50 mt-0 w-[480px] max-w-[95vw] rounded-xl border border-stone-200 bg-white p-4 shadow-lg">
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {SERVICES_CARDS.map((card) => (
                            <a
                              key={card.id}
                              href={`/services#${card.id}`}
                              className="flex gap-3 rounded-lg border border-stone-100 p-3 text-left transition hover:border-emerald-300 hover:bg-emerald-100"
                            >
                              <span className="shrink-0 text-emerald-600">
                                {card.icon}
                              </span>
                              <div className="min-w-0">
                                <h3 className="text-sm font-semibold text-stone-800">
                                  {card.title}
                                </h3>
                                <p className="mt-0.5 text-xs text-stone-500 line-clamp-2">
                                  {card.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-md px-3 py-2 text-lg font-medium text-stone-700 transition-colors hover:bg-emerald-400 hover:text-white"
                  >
                    {item.label}
                  </a>
                ),
              )}
            </nav>
            <p className="w-full rounded-md px-4 py-2.5 text-center text-base font-bold uppercase tracking-wide text-orange-500 sm:text-4xl animate-bounce">
              NAABET ACCREDITED
            </p>
          </div>

          {/* Mobile */}
          <div className="flex shrink-0 flex-col items-end gap-1 xl:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-lg p-2 text-stone-600 transition-colors hover:bg-emerald-100 hover:text-emerald-800"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <p className="w-full min-w-[120px] rounded-md bg-slate-50 px-3 py-2 text-center text-xs font-bold uppercase tracking-wide text-orange-500">
              NAABET ACCREDITED
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
