import Link from "next/link";

export const metadata = {
  title: "About — Bride View",
  description: "The story behind Bride View — AI-powered wedding dress discovery built for modern brides.",
};

export default function About() {
  return (
    <div style={{ minHeight: "100vh", background: "#FDFCFB", color: "#44403C" }}>
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: "1px solid #E7E5E4",
          background: "rgba(253,252,251,0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6" style={{ padding: "16px 24px" }}>
          <Link href="/" className="inline-flex items-center" style={{ gap: 8, textDecoration: "none" }}>
            <div
              className="flex items-center justify-center"
              style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #BFA070, #A69064)" }}
            >
              <span className="font-serif" style={{ fontSize: 12, color: "white", fontWeight: 700 }}>B</span>
            </div>
            <span className="font-serif" style={{ fontSize: 16, fontWeight: 600, color: "#A69064" }}>
              &larr; Back to Home
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6" style={{ padding: "48px 24px" }}>
        {/* Hero */}
        <div className="text-center" style={{ marginBottom: 56 }}>
          <div
            className="flex items-center justify-center mx-auto"
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #BFA070, #A69064)",
              marginBottom: 24,
              boxShadow: "0 8px 32px rgba(191,160,112,0.3)",
            }}
          >
            <span className="font-serif" style={{ fontSize: 28, color: "white", fontWeight: 700 }}>B</span>
          </div>
          <h1 className="font-serif" style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 600, color: "#44403C", marginBottom: 12, lineHeight: 1.2 }}>
            About Bride View
          </h1>
          <p style={{ color: "#78716C", lineHeight: 1.8, maxWidth: 560, margin: "0 auto", fontSize: 18 }}>
            AI-powered wedding dress discovery, built for the modern bride.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {/* The Problem */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 600, color: "#44403C", marginBottom: 16 }}>The Problem</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8, fontSize: 16 }}>
              Finding a wedding dress should be one of the most exciting parts of planning your big day. But for most brides, it&apos;s overwhelming. There are thousands of styles, silhouettes, and designers to choose from. Pinterest boards grow to 500+ pins with no direction. Bridal salon appointments feel rushed, and consultants — at $200&ndash;400 per visit — can only show you what they have in stock.
            </p>
            <p style={{ color: "#78716C", lineHeight: 1.8, fontSize: 16, marginTop: 12 }}>
              Most brides walk into their first appointment without a clear idea of what they actually want. They end up trying on dozens of dresses, overwhelmed by options, and leave feeling more confused than when they started.
            </p>
          </section>

          {/* Our Solution */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 600, color: "#44403C", marginBottom: 16 }}>Our Solution</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8, fontSize: 16 }}>
              Bride View uses AI to generate personalized wedding dress images based on your unique preferences and body type. Upload two photos of yourself, answer simple style questions about your venue, vibe, and dream silhouette, and our AI creates dresses designed specifically for you.
            </p>
            <p style={{ color: "#78716C", lineHeight: 1.8, fontSize: 16, marginTop: 12 }}>
              In just two rounds — Discovery and Refinement — you go from thousands of possibilities to a handful of dresses you truly love. Heart your 2 favorite looks and the AI creates stunning variations — keeping what you loved while exploring fresh details.
            </p>
          </section>

          {/* How It Works */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 600, color: "#44403C", marginBottom: 16 }}>How It Works</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { step: "01", title: "Tell Us Your Vision", desc: "Answer style questions about your venue, season, vibe, and silhouette preferences. Upload two photos so the AI can design dresses on a body that looks like you." },
                { step: "02", title: "Heart Your Favorites", desc: "8 personalized dress images generated on your body. Heart your 2 favorites — the ones that make your heart skip. They become the foundation for Round 2." },
                { step: "03", title: "Get Your Final Looks", desc: "4 variations of each hearted dress — different necklines, backs, and details, same silhouette and fabric you loved. 8 more dresses, ready to take to a salon or seamstress." },
              ].map((item) => (
                <div key={item.step} className="flex" style={{ gap: 20 }}>
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, rgba(191,160,112,0.15), rgba(191,160,112,0.06))",
                      border: "1px solid rgba(191,160,112,0.2)",
                    }}
                  >
                    <span className="font-serif" style={{ fontSize: 16, fontWeight: 700, color: "#A69064" }}>{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-serif" style={{ fontSize: 20, fontWeight: 600, color: "#44403C", marginBottom: 6 }}>{item.title}</h3>
                    <p style={{ color: "#78716C", lineHeight: 1.8 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Our Values */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 600, color: "#44403C", marginBottom: 16 }}>What We Believe</h2>
            <div className="grid sm:grid-cols-2" style={{ gap: 20 }}>
              {[
                { title: "Privacy First", desc: "Your photos are encrypted, never shared, and deleted when you sign out. Your data belongs to you." },
                { title: "Honest Pricing", desc: "One-time purchases, no subscriptions, no hidden fees. Credits never expire. You pay once and use at your pace." },
                { title: "Built for Real Brides", desc: "See dresses on a body that looks like yours — not a random model. Every image is generated uniquely for you." },
                { title: "AI With Empathy", desc: "Technology should enhance the bridal experience, not replace it. We help you discover what you love before stepping into a salon." },
              ].map((value) => (
                <div
                  key={value.title}
                  style={{
                    padding: 24,
                    borderRadius: 20,
                    background: "#FFFFFF",
                    border: "1px solid #D6CEC8",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  <h3 className="font-serif" style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginBottom: 8 }}>{value.title}</h3>
                  <p style={{ color: "#78716C", lineHeight: 1.7, fontSize: 14 }}>{value.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* The Team */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 600, color: "#44403C", marginBottom: 16 }}>Built By</h2>
            <div
              style={{
                padding: 28,
                borderRadius: 20,
                background: "rgba(191,160,112,0.06)",
                border: "1px solid rgba(191,160,112,0.2)",
              }}
            >
              <p style={{ color: "#78716C", lineHeight: 1.8, fontSize: 16 }}>
                Bride View is built by <strong style={{ color: "#44403C" }}>Axiom Trinity Labs</strong>, a small studio passionate about using AI to solve real-world problems with beautiful, thoughtful products. We believe technology should make life&apos;s biggest moments even better.
              </p>
              <p style={{ color: "#78716C", lineHeight: 1.8, fontSize: 16, marginTop: 12 }}>
                Have questions, feedback, or just want to say hi? We&apos;d love to hear from you.
              </p>
              <div style={{ marginTop: 16 }}>
                <p style={{ color: "#78716C" }}>
                  <strong style={{ color: "#44403C" }}>Email:</strong>{" "}
                  <a href="mailto:support@axiomtrinitylabs.com" style={{ color: "#A69064", textDecoration: "underline" }}>support@axiomtrinitylabs.com</a>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center" style={{ marginTop: 56 }}>
          <Link
            href="/"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              borderRadius: 9999,
              background: "linear-gradient(135deg, #BFA070, #A69064)",
              color: "white",
              fontWeight: 500,
              fontSize: 14,
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(191,160,112,0.35)",
            }}
          >
            &larr; Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #E7E5E4", padding: "32px 24px", marginTop: 48 }}>
        <div className="max-w-4xl mx-auto text-center">
          <p style={{ fontSize: 12, color: "#A8A29E" }}>&copy; {new Date().getFullYear()} Axiom Trinity Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
