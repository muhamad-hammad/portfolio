"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#live", label: "Live" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Close drawer on resize to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur border-b border-border">
      <div className="section-container h-14 sm:h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="focus-ring rounded font-display font-semibold text-lg sm:text-xl tracking-[-0.02em]"
        >
          MH
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-4 lg:gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded font-mono text-sm text-muted hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: theme toggle + hamburger */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="md:hidden focus-ring h-10 w-10 rounded-md bg-surface border border-border hover:border-accent flex items-center justify-center transition-colors"
          >
            {open ? (
              /* X icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer overlay */}
      {open && (
        <div
          className="fixed inset-0 top-14 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <nav
        className={`
          fixed top-14 right-0 z-50 h-[calc(100dvh-3.5rem)] w-[min(16rem,80vw)]
          bg-surface border-l border-border
          transform transition-transform duration-300 ease-in-out
          md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col gap-1 p-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-lg font-mono text-base text-muted hover:text-text hover:bg-bg px-4 py-3 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
