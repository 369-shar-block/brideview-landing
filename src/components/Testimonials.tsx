"use client";

import { motion } from "framer-motion";
import { Card } from "./Card";

const testimonials = [
  { quote: "I walked into my bridal appointment knowing exactly what I wanted. The consultant was shocked — most brides are overwhelmed. I found my dress in 20 minutes.", name: "Sarah M.", detail: "Spring Garden Wedding", initial: "S", color: "#e8b4b8" },
  { quote: "The AI actually understood my style. By round 2, every dress felt like it was made for me. I showed the images to my seamstress and she recreated my favorite.", name: "Mia T.", detail: "Beach Ceremony", initial: "M", color: "#e8c99b" },
  { quote: "I was drowning in Pinterest boards with 500+ pins. Bride View narrowed it down to exactly what I love in just 2 rounds. Worth every penny — 10x better than scrolling alone.", name: "Ava K.", detail: "Vineyard Wedding", initial: "A", color: "#c4b5e0" },
  { quote: "Seeing the dresses on someone who looks like me changed everything. No more imagining — I could actually see myself in each design. Absolutely magical experience.", name: "Jessica L.", detail: "Classic Ballroom", initial: "J", color: "#a8d5ba" },
  { quote: "My mom and I did this together on a Sunday morning with coffee. We hearted our favorites and it was honestly the most fun part of wedding planning so far.", name: "Lauren H.", detail: "Mountain Lodge", initial: "L", color: "#a8cde0" },
  { quote: "I tried 4 salons before finding Bride View. Within one session I had more clarity than months of shopping. The AI picked up on subtleties I couldn't even articulate.", name: "Rachel D.", detail: "Rustic Barn Wedding", initial: "R", color: "#e8a8b8" },
];

export default function Testimonials() {
  return (
    <section id="reviews" style={{ padding: "100px 0", background: "#F0EFEA" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, #D6CEC8, transparent)" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
          style={{ marginBottom: 56 }}
        >
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A69064", marginBottom: 12 }}>
            Reviews
          </span>
          <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1, color: "#44403C" }}>
            Brides Who Found <span className="text-gold-gradient" style={{ fontStyle: "italic" }}>Their</span> Dress
          </h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3" style={{ gap: 20, columnGap: 20 }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              style={{ breakInside: "avoid", marginBottom: 20 }}
            >
              <Card>
                <div style={{ padding: 28 }}>
                  <div className="flex" style={{ gap: 2, marginBottom: 16 }}>
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} style={{ width: 14, height: 14 }} fill="#BFA070" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p style={{ fontSize: 14, color: "#44403C", lineHeight: 1.7, marginBottom: 20 }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center" style={{ gap: 12 }}>
                    <div
                      className="flex items-center justify-center"
                      style={{ width: 36, height: 36, borderRadius: "50%", background: t.color }}
                    >
                      <span style={{ fontSize: 12, fontWeight: 700, color: "white" }}>{t.initial}</span>
                    </div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 500, color: "#44403C" }}>{t.name}</p>
                      <p style={{ fontSize: 12, color: "#A8A29E" }}>{t.detail}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
