"use client";

import { motion } from "framer-motion";
import { Card, IconBox } from "./Card";

const steps = [
  {
    number: "01",
    title: "Tell Us Your Vision",
    description:
      "Answer a quick style quiz — your venue, vibe, silhouette, neckline, fabric, and more. Upload two photos so the AI can design dresses that look like you.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "See It On You",
    description:
      "Pick any dress shape and see it on your own face and body. Change the neckline, fabric, sleeves, or train, and see each version on you.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Find It Near You",
    description:
      "The part no other app does. Every look is matched to real designers and the local boutiques that carry them — with ratings and directions — so you walk into your first appointment already knowing.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
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
            Three Steps to <span className="text-gold-gradient" style={{ fontStyle: "italic" }}>Your</span> Dress
          </h2>
          <p style={{ maxWidth: 480, margin: "16px auto 0", color: "#78716C", lineHeight: 1.7 }}>
            From your style, to seeing real dresses on you, to the boutiques near you that carry them.
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
