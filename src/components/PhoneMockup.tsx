"use client";

import { motion } from "framer-motion";

export default function PhoneMockup() {
  return (
    <section style={{ paddingTop: 0, paddingBottom: 80 }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          {/* Phone */}
          <div
            style={{
              position: "relative",
              width: 300,
              background: "#111",
              borderRadius: 44,
              padding: 10,
              boxShadow:
                "0 50px 100px -30px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          >
            {/* Notch */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: 110,
                height: 28,
                background: "#111",
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                zIndex: 20,
              }}
            />

            {/* Screen */}
            <div
              style={{
                background: "#FDFCFB",
                borderRadius: 34,
                overflow: "hidden",
                aspectRatio: "9 / 19.5",
                position: "relative",
              }}
            >
              {/* Status bar */}
              <div
                className="flex items-center justify-between"
                style={{ padding: "16px 28px 4px" }}
              >
                <span style={{ fontSize: 10, fontWeight: 700, color: "#44403C" }}>9:41</span>
                <div className="flex items-center" style={{ gap: 4 }}>
                  <div className="flex" style={{ gap: 1.5 }}>
                    {[6, 8, 10, 12].map((h, i) => (
                      <div
                        key={i}
                        style={{
                          width: 3,
                          height: h,
                          borderRadius: 2,
                          background: "#44403C",
                        }}
                      />
                    ))}
                  </div>
                  <div
                    style={{
                      width: 18,
                      height: 9,
                      border: "1.5px solid #44403C",
                      borderRadius: 3,
                      marginLeft: 4,
                      display: "flex",
                      alignItems: "center",
                      padding: 1.5,
                    }}
                  >
                    <div style={{ width: "70%", height: "100%", background: "#BFA070", borderRadius: 1.5 }} />
                  </div>
                </div>
              </div>

              {/* App content */}
              <div style={{ padding: "8px 18px" }}>
                {/* Header */}
                <div className="flex items-center justify-between" style={{ marginBottom: 14 }}>
                  <div>
                    <p style={{ fontSize: 7, color: "#A69064", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                      Welcome back
                    </p>
                    <p className="font-serif" style={{ fontSize: 14, fontWeight: 700, color: "#44403C", marginTop: 2 }}>
                      Your Dress Journey
                    </p>
                  </div>
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #BFA070, #A69064)",
                    }}
                  >
                    <span style={{ fontSize: 8, color: "white", fontWeight: 800 }}>50</span>
                  </div>
                </div>

                {/* Hero card */}
                <div
                  style={{
                    borderRadius: 14,
                    background: "linear-gradient(135deg, #F5F0EB, #ECE7E0)",
                    padding: 16,
                    marginBottom: 14,
                    position: "relative",
                  }}
                >
                  <p className="font-serif" style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.3, color: "#44403C" }}>
                    Find Your
                    <br />
                    <span style={{ color: "#BFA070", fontStyle: "italic" }}>Dream Dress</span>
                  </p>
                  <div
                    className="inline-flex items-center"
                    style={{
                      marginTop: 10,
                      gap: 4,
                      padding: "6px 14px",
                      borderRadius: 9999,
                      background: "linear-gradient(135deg, #BFA070, #A69064)",
                    }}
                  >
                    <span style={{ fontSize: 8, fontWeight: 700, color: "white" }}>Begin Journey</span>
                    <svg style={{ width: 8, height: 8 }} fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <span style={{ position: "absolute", top: 10, right: 12, fontSize: 16, color: "rgba(191,160,112,0.3)" }}>
                    ✦
                  </span>
                </div>

                {/* Dress grid */}
                <p style={{ fontSize: 7, color: "#A8A29E", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, marginBottom: 8 }}>
                  Recent Designs
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {["#F4E1E4", "#F5EBD7", "#E8E4F0", "#EDEBE8"].map((bg, i) => (
                    <div
                      key={i}
                      className="flex items-end"
                      style={{
                        aspectRatio: "3 / 4",
                        borderRadius: 10,
                        background: bg,
                        padding: 8,
                      }}
                    >
                      <div className="flex" style={{ gap: 3 }}>
                        {[0, 1, 2].map((j) => (
                          <div
                            key={j}
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: j === 0 ? "#BFA070" : j === 1 ? "rgba(191,160,112,0.4)" : "rgba(168,162,158,0.3)",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom nav */}
                <div
                  className="flex items-center justify-around"
                  style={{ marginTop: 14, paddingTop: 10, borderTop: "1px solid #F0EFEA" }}
                >
                  {["✦", "◷", "♡"].map((icon, i) => (
                    <div key={i} className="flex flex-col items-center" style={{ gap: 2 }}>
                      <span style={{ fontSize: 12, color: i === 0 ? "#BFA070" : "#A8A29E" }}>{icon}</span>
                      <span style={{ fontSize: 6, color: i === 0 ? "#BFA070" : "#A8A29E", fontWeight: i === 0 ? 700 : 400 }}>
                        {["Home", "History", "Profile"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
