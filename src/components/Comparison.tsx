"use client";

import { motion } from "framer-motion";

export default function Comparison() {
  return (
    <section style={{ padding: "100px 0", position: "relative", background: "#F0EFEA" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, #D6CEC8, transparent)" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
          style={{ marginBottom: 56 }}
        >
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A69064", marginBottom: 12 }}>
            The Difference
          </span>
          <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1, color: "#44403C" }}>
            Browsing Alone vs. <span className="text-gold-gradient" style={{ fontStyle: "italic" }}>Bride View</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 max-w-4xl mx-auto" style={{ gap: 24 }}>
          {/* Without */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="h-full"
              style={{
                background: "#FFFFFF",
                border: "1px solid #D6CEC8",
                borderRadius: 20,
                padding: 32,
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "#C8C2BC" }} />
              <div className="flex items-center" style={{ gap: 12, marginBottom: 28 }}>
                <div
                  className="flex items-center justify-center"
                  style={{ width: 40, height: 40, borderRadius: "50%", background: "#EDEBE8" }}
                >
                  <svg style={{ width: 20, height: 20, color: "#A8A29E" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <h3 className="font-serif" style={{ fontSize: 20, fontWeight: 600, color: "#A8A29E" }}>Without Bride View</h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  "Scroll through 10,000+ generic dress photos",
                  "Every dress shown on the same 3 models",
                  "Save hundreds of pins with no direction",
                  "Overwhelmed at the bridal salon",
                  "Still not sure what you actually want",
                ].map((item, i) => (
                  <li key={i} className="flex items-start" style={{ gap: 12 }}>
                    <div className="flex items-center justify-center shrink-0" style={{ width: 22, height: 22, borderRadius: "50%", background: "#EDEBE8", marginTop: 1 }}>
                      <svg style={{ width: 12, height: 12, color: "#A8A29E" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span style={{ fontSize: 14, color: "#78716C", lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* With */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div
              className="h-full"
              style={{
                background: "#FFFFFF",
                border: "1.5px solid #C8AD80",
                borderRadius: 20,
                padding: 32,
                boxShadow: "0 4px 24px rgba(191,160,112,0.15), 0 2px 8px rgba(0,0,0,0.04)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #BFA070, #D4BC8E, #BFA070)" }} />
              <div className="flex items-center" style={{ gap: 12, marginBottom: 28 }}>
                <div
                  className="flex items-center justify-center"
                  style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(191,160,112,0.12)" }}
                >
                  <svg style={{ width: 20, height: 20, color: "#BFA070" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif" style={{ fontSize: 20, fontWeight: 600, color: "#44403C" }}>With Bride View</h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  "16 dresses designed around your style and body",
                  "See the dress on someone who looks like you",
                  "Heart 2 favorites, get 8 refined variations",
                  "Walk into the salon knowing exactly what you want",
                  "Confident, clear, and excited about your choice",
                ].map((item, i) => (
                  <li key={i} className="flex items-start" style={{ gap: 12 }}>
                    <div className="flex items-center justify-center shrink-0" style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(191,160,112,0.12)", marginTop: 1 }}>
                      <svg style={{ width: 12, height: 12, color: "#BFA070" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span style={{ fontSize: 14, color: "#44403C", lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
