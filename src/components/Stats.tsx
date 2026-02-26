"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 2000, suffix: "+", label: "Brides Served" },
  { value: 30000, suffix: "+", label: "Dresses Generated" },
  { value: 2, suffix: "", label: "Rounds to Clarity" },
  { value: 4.9, suffix: "", label: "App Store Rating" },
];

export default function Stats() {
  return (
    <section style={{ padding: "64px 0", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, #D6CEC8, transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, #D6CEC8, transparent)" }} />

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 32 }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-serif font-semibold" style={{ fontSize: "clamp(32px, 5vw, 48px)", color: "#A69064", marginBottom: 4 }}>
                {typeof stat.value === "number" && stat.value > 10 ? (
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                ) : (
                  <>{stat.value}{stat.suffix}</>
                )}
              </p>
              <p style={{ fontSize: 14, color: "#A8A29E", letterSpacing: "0.03em" }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
