"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X, Phone } from "lucide-react";

// Design-Tokens aus DESIGN.md
const glass = {
  background: "rgba(20,23,29,0.42)",
  backdropFilter: "blur(20px) saturate(135%)",
  WebkitBackdropFilter: "blur(20px) saturate(135%)",
  borderBottom: "1px solid rgba(255,255,255,0.10)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22)",
};

const glassCard = {
  background: "rgba(20,23,29,0.72)",
  backdropFilter: "blur(20px) saturate(135%)",
  WebkitBackdropFilter: "blur(20px) saturate(135%)",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.14)",
};

const orangeBtn = {
  background: "linear-gradient(180deg, rgba(238,106,44,0.92), rgba(216,88,31,0.92))",
  border: "1px solid rgba(255,255,255,0.22)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22), 0 2px 8px rgba(0,0,0,0.3)",
};

const defaultNavItems = [
  {
    label: "Leistungen",
    dropdown: {
      title: "UNSERE LEISTUNGEN",
      items: [
        { title: "Entrümpelung von Wohnungen", description: "Keller, Dachboden, Garage oder ganze Wohnung", href: "#leistungen" },
        { title: "Entrümpelung + Sanierung", description: "Räumen und direkt sanieren – alles aus einer Hand", href: "#leistungen" },
        { title: "Haushaltsauflösung", description: "Diskret und einfühlsam, auch nach Todesfall", href: "#leistungen" },
      ],
    },
  },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Navigation7({
  logo = "Spindler",
  logoSub = "Entrümpelung",
  navItems = defaultNavItems,
  phone = "03931 · 21 80 30",
  phoneHref = "tel:+493931218030",
  ctaLabel = "Jetzt anrufen",
}) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -16 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 w-full py-3 px-4 sm:px-6 lg:px-8"
        style={{ ...glass, pointerEvents: visible ? "auto" : "none" }}>
        <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between gap-8">

          {/* Logo */}
          <a href="#" className="flex flex-col leading-none select-none shrink-0" aria-label="Startseite">
            <span
              className="text-white font-bold text-lg tracking-tight"
              style={{ fontFamily: "'Archivo', system-ui, sans-serif", letterSpacing: "-0.02em" }}>
              {logo}
            </span>
            <span
              className="text-xs font-medium uppercase tracking-widest"
              style={{ color: "#f6a878", fontFamily: "'IBM Plex Sans', system-ui, sans-serif", letterSpacing: ".14em" }}>
              {logoSub}
            </span>
          </a>

          {/* Nav Links – Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}>
                {item.href && !item.dropdown ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-4 h-9 rounded-md text-sm font-medium transition-colors"
                    style={{
                      fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                      color: "rgba(243,241,236,0.85)",
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = "#f3f1ec"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(243,241,236,0.85)"}>
                    {item.label}
                  </a>
                ) : (
                  <button
                    className="flex items-center gap-1 px-4 h-9 rounded-md text-sm font-medium transition-colors"
                    style={{
                      fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                      color: "rgba(243,241,236,0.85)",
                    }}
                    aria-expanded={activeDropdown === item.label}>
                    {item.label}
                    <motion.span
                      animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                    </motion.span>
                  </button>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.label && item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute top-full left-0 pt-3 z-50 min-w-[360px]">
                      <div className="rounded-2xl py-3" style={glassCard}>
                        <p
                          className="text-[11px] font-semibold tracking-[.16em] uppercase px-4 mb-3"
                          style={{ color: "#f6a878", fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>
                          {item.dropdown.title}
                        </p>
                        <div className="flex flex-col gap-0.5 px-2">
                          {item.dropdown.items.map((sub, idx) => (
                            <motion.a
                              key={idx}
                              href={sub.href}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.15, delay: idx * 0.04 }}
                              className="group flex flex-col px-3 py-2.5 rounded-lg transition-colors"
                              style={{ borderLeft: "3px solid transparent" }}
                              onMouseEnter={e => {
                                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                                e.currentTarget.style.borderLeftColor = "#ee6a2c";
                              }}
                              onMouseLeave={e => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.borderLeftColor = "transparent";
                              }}>
                              <span
                                className="text-sm font-medium"
                                style={{ color: "#f3f1ec", fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>
                                {sub.title}
                              </span>
                              <span className="text-xs mt-0.5" style={{ color: "rgba(243,241,236,0.55)" }}>
                                {sub.description}
                              </span>
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA + Mobile-Toggle */}
          <div className="flex items-center gap-2">
            <a
              href={phoneHref}
              className="hidden md:flex items-center gap-2 px-4 h-9 rounded-lg text-sm font-bold text-white transition-all hover:-translate-y-px"
              style={{ ...orangeBtn, fontFamily: "'Archivo', system-ui, sans-serif" }}>
              <Phone className="w-3.5 h-3.5" />
              {ctaLabel}
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "#f3f1ec",
              }}
              aria-label="Menü öffnen">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 md:hidden flex flex-col"
            style={{ background: "#171a20" }}>

            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <a href="#" className="flex flex-col leading-none">
                <span
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "'Archivo', system-ui, sans-serif", letterSpacing: "-0.02em" }}>
                  {logo}
                </span>
                <span
                  className="text-xs font-medium uppercase tracking-widest"
                  style={{ color: "#f6a878", fontFamily: "'IBM Plex Sans', system-ui, sans-serif", letterSpacing: ".14em" }}>
                  {logoSub}
                </span>
              </a>
              <button
                onClick={() => { setIsMobileMenuOpen(false); setMobileExpandedItem(null); }}
                className="flex items-center justify-center w-10 h-10 rounded-lg"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", color: "#f3f1ec" }}
                aria-label="Menü schließen">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.06, ease: [0.4, 0, 0.2, 1] }}>
                  {item.href && !item.dropdown ? (
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg text-base font-medium"
                      style={{
                        color: "#f3f1ec",
                        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                        background: "rgba(255,255,255,0.04)",
                      }}>
                      {item.label}
                    </a>
                  ) : (
                    <>
                      <button
                        onClick={() => setMobileExpandedItem(mobileExpandedItem === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium"
                        style={{
                          color: "#f3f1ec",
                          fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                          background: "rgba(255,255,255,0.04)",
                        }}>
                        {item.label}
                        <motion.span
                          animate={{ rotate: mobileExpandedItem === item.label ? 180 : 0 }}
                          transition={{ duration: 0.2 }}>
                          <ChevronDown className="w-4 h-4 opacity-50" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {mobileExpandedItem === item.label && item.dropdown && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden">
                            <div className="pt-1 pl-2 space-y-0.5">
                              {item.dropdown.items.map((sub, idx) => (
                                <a
                                  key={idx}
                                  href={sub.href}
                                  onClick={() => { setIsMobileMenuOpen(false); setMobileExpandedItem(null); }}
                                  className="flex flex-col px-4 py-2.5 rounded-lg"
                                  style={{
                                    borderLeft: "3px solid #ee6a2c",
                                    background: "rgba(255,255,255,0.03)",
                                  }}>
                                  <span className="text-sm font-medium" style={{ color: "#f3f1ec" }}>{sub.title}</span>
                                  <span className="text-xs mt-0.5" style={{ color: "rgba(243,241,236,0.5)" }}>{sub.description}</span>
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="px-4 pb-8 pt-4 space-y-3"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <a
                href={phoneHref}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold text-white"
                style={{ ...orangeBtn, fontFamily: "'Archivo', system-ui, sans-serif" }}>
                <Phone className="w-4 h-4" />
                {ctaLabel}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
