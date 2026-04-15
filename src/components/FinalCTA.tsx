"use client";

import { motion } from "framer-motion";

const APP_STORE_URL = "https://apps.apple.com/us/app/bride-view/id6759754943";

export default function FinalCTA() {
  return (
    <section id="download" style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(191,160,112,0.08) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute pointer-events-none animate-glow"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 350, height: 350, borderRadius: "50%", border: "1px solid rgba(191,160,112,0.1)" }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="inline-flex items-center"
            style={{ gap: 8, padding: "8px 20px", borderRadius: 9999, border: "1px solid rgba(191,160,112,0.3)", background: "rgba(191,160,112,0.06)", marginBottom: 32 }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#BFA070" }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A69064" }}>Start Today</span>
          </div>

          <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1, color: "#44403C", marginBottom: 20 }}>
            Your Dream Dress Is<br />
            <span className="text-gold-gradient" style={{ fontStyle: "italic" }}>Waiting</span>
          </h2>

          <p style={{ maxWidth: 420, margin: "0 auto 40px", fontSize: 18, color: "#78716C", lineHeight: 1.7, fontWeight: 300 }}>
            Join thousands of brides who stopped scrolling and started <span style={{ color: "#44403C", fontWeight: 400 }}>discovering</span>.
          </p>

          {/* App Store Button */}
          <div className="flex items-center justify-center" style={{ marginBottom: 48 }}>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
              style={{
                gap: 14,
                padding: "18px 36px",
                background: "#1a1a1a",
                borderRadius: 18,
                boxShadow: "0 10px 40px -8px rgba(0,0,0,0.25)",
                textDecoration: "none",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 14px 44px -8px rgba(0,0,0,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 40px -8px rgba(0,0,0,0.25)";
              }}
            >
              <svg style={{ width: 32, height: 32, color: "white" }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", lineHeight: 1, margin: 0 }}>Download on the</p>
                <p style={{ fontSize: 20, color: "white", fontWeight: 600, lineHeight: 1.2, margin: 0 }}>App Store</p>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center" style={{ gap: 28 }}>
            {[
              { label: "Privacy First", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
              { label: "Encrypted Photos", icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" },
              { label: "4.9 Rating", icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" },
            ].map((t) => (
              <div key={t.label} className="flex items-center" style={{ gap: 8 }}>
                <svg style={{ width: 16, height: 16, color: "#BFA070" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={t.icon} />
                </svg>
                <span style={{ fontSize: 13, color: "#A8A29E" }}>{t.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
}
