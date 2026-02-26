"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Dream Dress Pass",
    credits: 32,
    journeys: "2 full journeys",
    price: 29,
    perJourney: "14.50",
    description: "Perfect for finding your dress",
    popular: true,
  },
  {
    name: "Exploration Pass",
    credits: 80,
    journeys: "5 full journeys",
    price: 59,
    perJourney: "11.80",
    description: "Explore every style",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: "100px 0" }}>
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
          style={{ marginBottom: 20 }}
        >
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A69064", marginBottom: 12 }}>
            Pricing
          </span>
          <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1, color: "#44403C" }}>
            A Fraction of a <span className="text-gold-gradient" style={{ fontStyle: "italic" }}>Consultant</span>
          </h2>
          <p style={{ maxWidth: 480, margin: "16px auto 0", color: "#78716C", lineHeight: 1.7 }}>
            Bridal consultants charge $200–400 per visit. Bride View gives you more clarity for a fraction of the price.
          </p>
        </motion.div>

        {/* Cost comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
          style={{ marginBottom: 56 }}
        >
          <div
            className="inline-flex items-center"
            style={{ gap: 16, padding: "12px 24px", borderRadius: 16, background: "rgba(191,160,112,0.08)", border: "1px solid rgba(191,160,112,0.2)" }}
          >
            <div className="text-center">
              <p style={{ fontSize: 14, color: "#A8A29E", textDecoration: "line-through" }}>$200–400</p>
              <p style={{ fontSize: 10, color: "#A8A29E", textTransform: "uppercase", letterSpacing: "0.05em" }}>Consultant</p>
            </div>
            <svg style={{ width: 20, height: 20, color: "#BFA070" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <div className="text-center">
              <p style={{ fontSize: 14, fontWeight: 600, color: "#A69064" }}>From $29</p>
              <p style={{ fontSize: 10, color: "#A69064", textTransform: "uppercase", letterSpacing: "0.05em" }}>Bride View</p>
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 max-w-3xl mx-auto items-start" style={{ gap: 24 }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <div
                style={{
                  background: "#FFFFFF",
                  border: plan.popular ? "1.5px solid #C8AD80" : "1px solid #D6CEC8",
                  borderRadius: 20,
                  padding: 36,
                  boxShadow: plan.popular
                    ? "0 8px 40px rgba(191,160,112,0.18), 0 2px 8px rgba(0,0,0,0.04)"
                    : "0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
                  position: "relative",
                }}
              >
                {plan.popular && (
                  <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "5px 16px",
                        borderRadius: 9999,
                        background: "linear-gradient(135deg, #BFA070, #A69064)",
                        color: "white",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        boxShadow: "0 4px 12px rgba(191,160,112,0.35)",
                      }}
                    >
                      Recommended
                    </span>
                  </div>
                )}

                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A69064", marginBottom: 6 }}>{plan.name}</p>
                <p style={{ fontSize: 14, color: "#78716C", marginBottom: 24 }}>{plan.description}</p>

                <div className="flex items-baseline" style={{ gap: 4, marginBottom: 4 }}>
                  <span className="font-serif" style={{ fontSize: 48, fontWeight: 600, color: "#44403C" }}>${plan.price}</span>
                  <span style={{ fontSize: 14, color: "#A8A29E" }}>one-time</span>
                </div>
                <p style={{ fontSize: 14, color: "#A8A29E", marginBottom: 28 }}>
                  {plan.credits} credits &middot; {plan.journeys} &middot; ${plan.perJourney}/journey
                </p>

                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                  {[
                    `${plan.credits} AI dress credits`,
                    `${plan.journeys} (16 images each)`,
                    "Full 2-round refinement",
                    "Cloud save & resume",
                    "Credits never expire",
                  ].map((item, j) => (
                    <li key={j} className="flex items-center" style={{ gap: 10 }}>
                      <svg style={{ width: 16, height: 16, color: "#BFA070", flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span style={{ fontSize: 14, color: "#78716C" }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#download"
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    padding: "14px 0",
                    borderRadius: 9999,
                    fontSize: 14,
                    fontWeight: 500,
                    textDecoration: "none",
                    ...(plan.popular
                      ? { background: "linear-gradient(135deg, #BFA070, #A69064)", color: "white", boxShadow: "0 4px 16px rgba(191,160,112,0.35)" }
                      : { background: "rgba(191,160,112,0.08)", color: "#A69064", border: "1px solid rgba(191,160,112,0.2)" }),
                  }}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
