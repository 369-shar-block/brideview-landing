"use client";

import { motion } from "framer-motion";
import { Card, Tag } from "./Card";

const rounds = [
  {
    round: 1,
    name: "Discovery",
    images: "8 dresses",
    description: "Broad exploration of styles, silhouettes, and vibes. React to each dress — your feedback drives Round 2.",
    questions: ["Setting", "Season", "Vibe", "Silhouette", "Coverage", "Fabric"],
  },
  {
    round: 2,
    name: "Refinement",
    images: "8 dresses",
    description: "AI narrows to your winning direction with targeted details. These are your final looks.",
    questions: ["Neckline", "Back Design", "Details", "Train", "Color"],
  },
];

export default function JourneyVisualization() {
  return (
    <section style={{ padding: "100px 0", position: "relative" }}>
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
          style={{ marginBottom: 64 }}
        >
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A69064", marginBottom: 12 }}>
            The Journey
          </span>
          <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1, color: "#44403C" }}>
            From Thousands to <span className="text-gold-gradient" style={{ fontStyle: "italic" }}>The One</span>
          </h2>
          <p style={{ maxWidth: 480, margin: "16px auto 0", color: "#78716C", lineHeight: 1.7 }}>
            Two rounds, 16 dresses. Your reactions teach the AI what you love — and what you don&apos;t.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector (desktop) */}
          <div
            className="hidden md:block absolute"
            style={{ left: "50%", top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, transparent, #D6CEC8, transparent)" }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {rounds.map((round, i) => (
              <motion.div
                key={round.round}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative"
              >
                {/* Round circle on center line */}
                <div
                  className="hidden md:flex absolute items-center justify-center"
                  style={{
                    left: "50%",
                    top: 28,
                    transform: "translateX(-50%)",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #BFA070, #A69064)",
                    boxShadow: "0 4px 12px rgba(191,160,112,0.4)",
                    zIndex: 10,
                  }}
                >
                  <span className="font-serif" style={{ fontSize: 14, fontWeight: 700, color: "white" }}>
                    {round.round}
                  </span>
                </div>

                <div className={`md:max-w-md ${i % 2 === 0 ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"}`}>
                  <Card>
                    <div style={{ padding: 28 }}>
                      <div className="flex items-center" style={{ gap: 12, marginBottom: 12 }}>
                        {/* Mobile-only circle */}
                        <div
                          className="md:hidden flex items-center justify-center"
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #BFA070, #A69064)",
                          }}
                        >
                          <span className="font-serif" style={{ fontSize: 12, fontWeight: 700, color: "white" }}>{round.round}</span>
                        </div>
                        <div>
                          <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A69064" }}>
                            Round {round.round} of 2
                          </p>
                          <h3 className="font-serif" style={{ fontSize: 20, fontWeight: 600, color: "#44403C" }}>
                            {round.name}
                          </h3>
                        </div>
                      </div>

                      <p style={{ fontSize: 14, color: "#78716C", lineHeight: 1.7, marginBottom: 16 }}>
                        {round.description}
                      </p>

                      <div className="flex flex-wrap" style={{ gap: 6, marginBottom: 16 }}>
                        {round.questions.map((q) => (
                          <Tag key={q}>{q}</Tag>
                        ))}
                      </div>

                      <div className="flex items-center" style={{ gap: 8, paddingTop: 14, borderTop: "1px solid #E7E5E4" }}>
                        <svg style={{ width: 16, height: 16, color: "#BFA070" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                        </svg>
                        <span style={{ fontSize: 14, fontWeight: 500, color: "#44403C" }}>{round.images}</span>
                        <span style={{ fontSize: 14, color: "#A8A29E" }}>generated</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final result */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
            style={{ marginTop: 48 }}
          >
            <div
              className="inline-flex items-center"
              style={{
                gap: 12,
                padding: "14px 24px",
                borderRadius: 16,
                background: "rgba(191,160,112,0.08)",
                border: "1.5px solid rgba(191,160,112,0.25)",
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #BFA070, #A69064)",
                }}
              >
                <svg style={{ width: 16, height: 16, color: "white" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <p className="font-serif" style={{ fontSize: 16, fontWeight: 600, color: "#44403C" }}>Your Dream Dress</p>
                <p style={{ fontSize: 12, color: "#A8A29E" }}>16 personalized images per journey</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
