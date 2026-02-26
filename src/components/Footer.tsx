"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1a1a1a", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(191,160,112,0.2), transparent)" }} />

      <div className="max-w-6xl mx-auto px-6" style={{ padding: "56px 24px" }}>
        <div className="grid md:grid-cols-4" style={{ gap: 40, marginBottom: 40 }}>
          <div>
            <div className="flex items-center" style={{ gap: 10, marginBottom: 16 }}>
              <div
                className="flex items-center justify-center"
                style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #BFA070, #A69064)" }}
              >
                <span className="font-serif" style={{ fontSize: 12, color: "white", fontWeight: 700 }}>B</span>
              </div>
              <span className="font-serif" style={{ fontSize: 18, fontWeight: 600, color: "white" }}>Bride View</span>
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
              AI-powered wedding dress discovery. Find your dream dress in 2 rounds.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 18 }}>
              Product
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "How It Works", href: "/#how-it-works" },
                { label: "Features", href: "/#features" },
                { label: "Pricing", href: "/#pricing" },
                { label: "Reviews", href: "/#reviews" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 18 }}>
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "About", href: "/about" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Delete Account", href: "/delete-account" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 18 }}>
              Download
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "App Store", sub: "Download on the", icon: <svg style={{ width: 20, height: 20, color: "rgba(255,255,255,0.6)" }} viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg> },
                { label: "Google Play", sub: "Get it on", icon: <svg style={{ width: 20, height: 20 }} viewBox="0 0 24 24" fill="none"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#4285F4" /><path d="M17.556 8.236L5.178.862a1.005 1.005 0 00-1.07.032l9.684 9.684 3.764-2.342z" fill="#EA4335" /><path d="M17.556 15.764l-3.764-2.342-9.684 9.684a1.005 1.005 0 001.07.032l12.378-7.374z" fill="#34A853" /><path d="M21.39 12c0-.386-.176-.748-.509-.968l-3.325-1.981-4.148 2.95 4.148 2.95 3.325-1.982A1.12 1.12 0 0021.39 12z" fill="#FBBC04" /></svg> },
              ].map((store) => (
                <a
                  key={store.label}
                  href="#"
                  className="inline-flex items-center"
                  style={{ gap: 10, padding: "10px 14px", borderRadius: 12, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none" }}
                >
                  {store.icon}
                  <div>
                    <p style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", lineHeight: 1 }}>{store.sub}</p>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", fontWeight: 500, lineHeight: 1.3 }}>{store.label}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between" style={{ gap: 16, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>&copy; {new Date().getFullYear()} Axiom Trinity Labs. All rights reserved.</p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.15)" }}>Made with love for brides everywhere</p>
        </div>
      </div>
    </footer>
  );
}
