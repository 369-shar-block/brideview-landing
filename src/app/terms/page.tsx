import Link from "next/link";

export const metadata = {
  title: "Terms of Use — Bride View",
  description: "Terms of Use and End User License Agreement for the Bride View app.",
};

export default function TermsOfService() {
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
        <h1 className="font-serif" style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 600, color: "#44403C", marginBottom: 8 }}>
          Terms of Use (EULA)
        </h1>
        <p style={{ color: "#A8A29E", marginBottom: 40 }}>
          Last Updated: February 26, 2026
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {/* 1. Agreement */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>1. Agreement to Terms</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              Welcome to Bride View (&ldquo;App,&rdquo; &ldquo;Service,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using our mobile application and website, you agree to be bound by these Terms of Use (&ldquo;Terms&rdquo;).
            </p>
            <p style={{ color: "#44403C", lineHeight: 1.8, marginTop: 12, fontWeight: 600 }}>
              If you do not agree to these Terms, do not use our Service.
            </p>
            <p style={{ color: "#78716C", lineHeight: 1.8, marginTop: 12 }}>
              These Terms constitute a legally binding agreement between you and Bride View. We reserve the right to update these Terms at any time, and your continued use of the Service after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          {/* 2. Eligibility */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>2. Eligibility</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>You must meet the following requirements to use our Service:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li>Be at least <strong style={{ color: "#44403C" }}>13 years old</strong></li>
              <li>Have the legal capacity to enter into a binding contract</li>
              <li>Not be prohibited from using the Service under applicable laws</li>
              <li>Provide accurate and complete registration information</li>
            </ul>
            <p style={{ color: "#78716C", lineHeight: 1.8, marginTop: 12 }}>
              If you are under 18, you represent that you have permission from a parent or legal guardian to use the Service.
            </p>
          </section>

          {/* 3. Account */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>3. Account Registration &amp; Security</h2>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>3.1 Account Creation</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>To use certain features, you must create an account by providing:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li>Valid email address</li>
              <li>Full name</li>
              <li>Secure password (or sign in via Apple/Google)</li>
            </ul>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>3.2 Account Responsibility</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>You are responsible for:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
              <li>Ensuring your account information is accurate and up-to-date</li>
            </ul>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>3.3 Account Termination</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              We reserve the right to suspend or terminate your account if you violate these Terms, engage in fraudulent activity, or for any reason at our sole discretion.
            </p>
          </section>

          {/* 4. Purchases */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>4. Purchases &amp; Payment Terms</h2>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>4.1 Credit Packs</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>Bride View uses a credit-based system with one-time purchases:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li><strong style={{ color: "#44403C" }}>Dream Dress Pass:</strong> $29.99 — 32 credits (2 full journeys)</li>
              <li><strong style={{ color: "#44403C" }}>Exploration Pass:</strong> $59.99 — 80 credits (5 full journeys)</li>
              <li><strong style={{ color: "#44403C" }}>Credits Never Expire:</strong> Once purchased, your credits remain in your account indefinitely</li>
            </ul>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>4.2 No Subscriptions</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              Bride View does not use auto-renewing subscriptions. All purchases are one-time transactions. There are no recurring charges.
            </p>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>4.3 Refund Policy</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              All payments are processed through the Apple App Store or Google Play Store. Refund requests must be made directly to Apple or Google according to their respective policies:
            </p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li><a href="https://support.apple.com/en-us/HT204084" target="_blank" rel="noopener noreferrer" style={{ color: "#A69064", textDecoration: "underline" }}>Apple Refund Policy</a></li>
              <li><a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer" style={{ color: "#A69064", textDecoration: "underline" }}>Google Play Refund Policy</a></li>
            </ul>
            <p style={{ color: "#78716C", lineHeight: 1.8, marginTop: 12 }}>
              We do not have the ability to issue refunds directly. Please contact the app store where you made your purchase.
            </p>
          </section>

          {/* 5. Acceptable Use */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>5. Acceptable Use Policy</h2>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>5.1 Permitted Use</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>You may use the Service to:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li>Upload reference photos for AI dress generation</li>
              <li>Complete style journeys and receive AI-generated dress images</li>
              <li>Save and review your journey history and generated images</li>
              <li>Share generated images for personal use</li>
            </ul>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>5.2 Prohibited Activities</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>You agree NOT to:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li>Upload inappropriate, offensive, or illegal content</li>
              <li>Upload photos of other people without their consent</li>
              <li>Use the Service for any commercial purpose without our permission</li>
              <li>Attempt to reverse engineer, decompile, or hack the App</li>
              <li>Create multiple accounts to abuse free features</li>
              <li>Share your account credentials with others</li>
              <li>Scrape, copy, or redistribute our content or generated images for commercial resale</li>
              <li>Use automated systems (bots) to access the Service</li>
              <li>Interfere with the security or operation of the Service</li>
            </ul>
          </section>

          {/* 6. IP */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>6. Intellectual Property Rights</h2>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>6.1 Our Ownership</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              The Service, including the App, website, software, design, AI models, and branding, is owned by Bride View and protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>6.2 Your Content</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              You retain ownership of photos you upload. By uploading content, you grant us a limited, non-exclusive license to:
            </p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li>Process your photos through our AI generation system</li>
              <li>Store generated images in your account</li>
              <li>Display content back to you within the App</li>
            </ul>
            <p style={{ color: "#A69064", lineHeight: 1.8, marginTop: 12, fontStyle: "italic" }}>
              We do NOT use your photos for marketing, training AI models, or any purpose other than generating dresses for you.
            </p>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>6.3 Generated Images</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              AI-generated dress images are created for your personal use. You may share them privately (e.g., with your bridal party or seamstress) but may not use them for commercial purposes without our written permission.
            </p>
          </section>

          {/* 7. AI */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>7. AI Generation &amp; Accuracy</h2>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>7.1 AI-Powered Service</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              Our Service uses artificial intelligence to generate wedding dress images based on your preferences and photos. The generated images are:
            </p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li>Inspirational in nature — meant to help you discover your style</li>
              <li>Not exact replicas of real dresses or real garments</li>
              <li>Subject to AI limitations and variations</li>
            </ul>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>7.2 No Guarantees</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>We do NOT guarantee:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li>That generated images will exactly match a real dress</li>
              <li>The availability of any specific dress shown in generated images</li>
              <li>Error-free or uninterrupted operation of the Service</li>
              <li>That a seamstress or designer can perfectly recreate an AI-generated design</li>
            </ul>
          </section>

          {/* 8. Privacy */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>8. Privacy &amp; Data Protection</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              Your use of the Service is also governed by our <Link href="/privacy" style={{ color: "#A69064", textDecoration: "underline" }}>Privacy Policy</Link>, which explains how we collect, use, and protect your information.
            </p>
            <p style={{ color: "#78716C", lineHeight: 1.8, marginTop: 12 }}>Key points:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li>Your photos are encrypted and deleted when you sign out</li>
              <li>We do NOT sell your personal data</li>
              <li>Generated images are stored securely in your account</li>
            </ul>
          </section>

          {/* 9. Disclaimers */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>9. Disclaimers &amp; Limitations</h2>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>9.1 &ldquo;AS IS&rdquo; Service</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8, textTransform: "uppercase", fontSize: 13 }}>
              The service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>9.2 Limitation of Liability</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              To the maximum extent permitted by law, Bride View shall not be liable for:
            </p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li>Indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, data, or goodwill</li>
              <li>Service interruptions or errors</li>
              <li>Third-party actions (e.g., app store policies)</li>
            </ul>
            <p style={{ color: "#78716C", lineHeight: 1.8, marginTop: 12 }}>
              In no event shall our total liability exceed the amount you paid us in the 12 months preceding the claim.
            </p>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>9.3 Indemnification</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              You agree to indemnify and hold harmless Bride View from any claims, damages, or expenses arising from your violation of these Terms, your violation of any third-party rights, or your misuse of the Service.
            </p>
          </section>

          {/* 10. Third-Party */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>10. Third-Party Services</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>Our Service integrates with third-party services:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li><strong style={{ color: "#44403C" }}>Google Gemini AI</strong> — Wedding dress image generation</li>
              <li><strong style={{ color: "#44403C" }}>Supabase</strong> — Database, authentication, and secure storage</li>
              <li><strong style={{ color: "#44403C" }}>Apple App Store / Google Play</strong> — Payment processing</li>
              <li><strong style={{ color: "#44403C" }}>Amplitude</strong> — Product analytics</li>
            </ul>
            <p style={{ color: "#78716C", lineHeight: 1.8, marginTop: 12 }}>
              These third parties have their own terms of service and privacy policies. We are not responsible for their practices or availability.
            </p>
          </section>

          {/* 11. Termination */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>11. Termination</h2>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>11.1 By You</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>You may terminate your account at any time by deleting your account in Profile settings. Unused credits are forfeited upon account deletion.</p>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>11.2 By Us</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>We may terminate or suspend your access immediately if:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li>You violate these Terms</li>
              <li>We detect fraudulent activity</li>
              <li>Required by law or government request</li>
              <li>We discontinue the Service</li>
            </ul>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>11.3 Effect of Termination</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>Upon termination:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li>Your right to use the Service immediately ceases</li>
              <li>Unused credits are forfeited (no refund)</li>
              <li>Account data will be deleted within 30 days</li>
              <li>Sections of these Terms that should survive (e.g., liability, indemnification) will continue to apply</li>
            </ul>
          </section>

          {/* 12. Disputes */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>12. Dispute Resolution</h2>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>12.1 Informal Resolution</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              Before filing a claim, please contact us at <a href="mailto:support@axiomtrinitylabs.com" style={{ color: "#A69064", textDecoration: "underline" }}>support@axiomtrinitylabs.com</a> to attempt informal resolution.
            </p>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>12.2 Governing Law</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              These Terms are governed by the laws of the United States, without regard to conflict of law principles.
            </p>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>12.3 Arbitration</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              Any disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, rather than in court (except for small claims court).
            </p>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>12.4 Class Action Waiver</h3>
            <p style={{ color: "#44403C", lineHeight: 1.8, fontWeight: 600 }}>
              You agree to resolve disputes individually and waive the right to participate in class actions, class arbitrations, or representative actions.
            </p>
          </section>

          {/* 13. Changes */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>13. Changes to Terms</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>We reserve the right to modify these Terms at any time. When we make changes:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li>The &ldquo;Last Updated&rdquo; date will be revised</li>
              <li>Material changes will be notified via email or in-app notification</li>
              <li>Continued use after changes constitutes acceptance</li>
            </ul>
          </section>

          {/* 14. General */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>14. General Provisions</h2>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>14.1 Entire Agreement</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Bride View.
            </p>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>14.2 Severability</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              If any provision is found to be unenforceable, the remaining provisions will remain in full effect.
            </p>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>14.3 No Waiver</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              Our failure to enforce any right or provision does not constitute a waiver of that right.
            </p>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>14.4 Assignment</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              You may not transfer or assign your rights under these Terms. We may assign our rights to any affiliate or successor.
            </p>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>14.5 Force Majeure</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              We shall not be liable for any failure to perform due to circumstances beyond our reasonable control (e.g., natural disasters, government actions, service provider outages).
            </p>
          </section>

          {/* 15. Contact */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>15. Contact Information</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>For questions about these Terms, contact us:</p>
            <div style={{ marginTop: 16, padding: 24, borderRadius: 16, background: "rgba(191,160,112,0.06)", border: "1px solid rgba(191,160,112,0.2)" }}>
              <p style={{ color: "#78716C", lineHeight: 1.8 }}><strong style={{ color: "#44403C" }}>Email:</strong> <a href="mailto:support@axiomtrinitylabs.com" style={{ color: "#A69064", textDecoration: "underline" }}>support@axiomtrinitylabs.com</a></p>
            </div>
          </section>

          {/* Summary */}
          <section style={{ paddingTop: 32, borderTop: "1px solid #E7E5E4" }}>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>Terms of Use Summary</h2>
            <div style={{ padding: 24, borderRadius: 16, background: "rgba(191,160,112,0.08)", border: "1.5px solid rgba(191,160,112,0.25)" }}>
              <p style={{ fontWeight: 600, color: "#44403C", marginBottom: 12 }}>In Plain English:</p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
                <li>&#10003; Use the Service respectfully and legally</li>
                <li>&#10003; One-time purchases only — no sneaky subscriptions</li>
                <li>&#10003; You own your photos; we only use them to generate your dresses</li>
                <li>&#10003; AI images are inspirational — not exact replicas of real dresses</li>
                <li>&#10003; We can terminate accounts that violate these Terms</li>
                <li>&#10003; Refunds handled by Apple/Google, not us</li>
                <li>&#10003; Disputes resolved through arbitration, not court</li>
                <li>&#10003; Credits never expire, but are forfeited if you delete your account</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center" style={{ marginTop: 48 }}>
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
