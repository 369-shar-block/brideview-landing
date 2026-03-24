"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Reviews", href: "#reviews" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(253,252,251,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          boxShadow: scrolled ? "0 1px 0 0 #F0EFEA" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between" style={{ height: 72 }}>
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(to bottom right, #BFA070, #A69064)" }}
                >
                  <span className="text-white font-serif text-sm font-semibold tracking-wide">
                    B
                  </span>
                </div>
              </div>
              <span className="font-serif text-xl font-semibold text-text tracking-tight">
                Bride View
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-text-light hover:text-gold transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#download"
                className="relative inline-flex items-center gap-2 px-6 py-2.5 text-white text-sm font-medium rounded-full transition-all duration-300 hover:-translate-y-[1px]"
                style={{
                  background: "linear-gradient(135deg, #BFA070, #A69064)",
                  boxShadow: "0 4px 16px -2px rgba(191,160,112,0.35)",
                }}
              >
                Download App
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full"
              style={{ border: "1px solid #E7E5E4" }}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-[1.5px] transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
                  }`}
                  style={{ width: 18, background: "#78716C" }}
                />
                <span
                  className={`block h-[1.5px] transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-[2.5px]" : ""
                  }`}
                  style={{ width: 18, background: "#78716C" }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ top: 72, background: "rgba(253,252,251,0.97)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex flex-col items-center gap-6 pt-12">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-2xl text-text hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#download"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-8 py-3 text-white font-medium rounded-full"
                style={{ background: "linear-gradient(135deg, #BFA070, #A69064)" }}
              >
                Download App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
