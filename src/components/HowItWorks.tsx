"use client";

import { motion } from "framer-motion";
import { Card, IconBox } from "./Card";

const steps = [
  {
    number: "01",
    title: "Tell Us Your Vision",
    description:
      "Answer simple style questions — your venue, vibe, favorite silhouettes, and fabrics. Upload two photos so AI can design dresses that look like you.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "AI Creates & You React",
    description:
      "Our AI generates 8 personalized dress images. Love it, like it, or skip it — your reactions teach the AI exactly what you want.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Get Your Final Dresses",
    description:
      "Round 2 refines everything based on your reactions — neckline, back, details, train, and color. 8 more dresses, this time your final looks.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "100px 0", position: "relative" }}>
      <div className="relative max-w-6xl mx-auto px-6">
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
            How It Works
          </span>
          <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1, color: "#44403C" }}>
            Two Rounds to <span className="text-gold-gradient" style={{ fontStyle: "italic" }}>Your</span> Dress
          </h2>
          <p style={{ maxWidth: 480, margin: "16px auto 0", color: "#78716C", lineHeight: 1.7 }}>
            A guided journey that narrows thousands of possibilities into dresses you actually love — in just two rounds.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3" style={{ gap: 24 }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <Card className="h-full">
                <div style={{ padding: 32 }}>
                  <div className="flex items-center" style={{ gap: 16, marginBottom: 20 }}>
                    <IconBox>{step.icon}</IconBox>
                    <span className="font-serif" style={{ fontSize: 28, fontWeight: 600, color: "rgba(191,160,112,0.3)" }}>
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-serif" style={{ fontSize: 22, fontWeight: 600, color: "#44403C", marginBottom: 10, lineHeight: 1.3 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 15, color: "#78716C", lineHeight: 1.7 }}>
                    {step.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
