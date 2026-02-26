"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Soft radial glow behind content */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(191,160,112,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Decorative rings */}
      <div
        className="absolute pointer-events-none animate-glow"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 500,
          borderRadius: "50%",
          border: "1px solid rgba(191,160,112,0.1)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 380,
          height: 380,
          borderRadius: "50%",
          border: "1px solid rgba(191,160,112,0.06)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" style={{ paddingTop: 140, paddingBottom: 60 }}>
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
          style={{ marginBottom: 36 }}
        >
          <div
            className="inline-flex items-center gap-2"
            style={{
              padding: "8px 20px",
              borderRadius: 9999,
              border: "1px solid rgba(191,160,112,0.3)",
              background: "rgba(191,160,112,0.06)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#BFA070",
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#A69064",
              }}
            >
              AI-Powered Bridal Experience
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif font-semibold"
          style={{ fontSize: "clamp(42px, 8vw, 88px)", lineHeight: 1.08, marginBottom: 24 }}
        >
          Find Your{" "}
          <span className="text-gold-gradient" style={{ fontStyle: "italic" }}>
            Dream
          </span>
          <br />
          Wedding Dress
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            maxWidth: 520,
            margin: "0 auto 40px",
            fontSize: 18,
            lineHeight: 1.7,
            color: "#78716C",
            fontWeight: 300,
          }}
        >
          Stop scrolling through thousands of dresses.{" "}
          <span style={{ color: "#44403C", fontWeight: 400 }}>
            Answer a few questions, upload your photo, and let AI generate
            dresses designed just for you.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center"
          style={{ gap: 16 }}
        >
          <a
            href="#download"
            className="group inline-flex items-center"
            style={{
              gap: 10,
              padding: "16px 36px",
              background: "linear-gradient(135deg, #BFA070, #A69064)",
              color: "white",
              fontSize: 16,
              fontWeight: 500,
              borderRadius: 9999,
              boxShadow: "0 8px 32px -8px rgba(191,160,112,0.5)",
              textDecoration: "none",
            }}
          >
            <span>Begin Your Journey</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center"
            style={{
              gap: 8,
              padding: "16px 24px",
              color: "#78716C",
              fontSize: 16,
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            See How It Works
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-col items-center"
          style={{ marginTop: 56, gap: 12 }}
        >
          <div className="flex items-center" style={{ gap: 0 }}>
            {[
              "#e8b4b8",
              "#e8c99b",
              "#c4b5e0",
              "#a8d5ba",
              "#a8cde0",
            ].map((color, i) => (
              <div
                key={i}
                className="flex items-center justify-center"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: color,
                  border: "2px solid #FDFCFB",
                  marginLeft: i > 0 ? -10 : 0,
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 700, color: "white" }}>
                  {["S", "M", "A", "J", "L"][i]}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center" style={{ gap: 8 }}>
            <div className="flex" style={{ gap: 2 }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} style={{ width: 16, height: 16 }} fill="#BFA070" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span style={{ fontSize: 14, color: "#A8A29E" }}>
              Loved by <span style={{ color: "#44403C", fontWeight: 500 }}>2,000+</span> brides
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
