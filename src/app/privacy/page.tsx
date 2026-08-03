import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Bride View",
  description: "How Bride View collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p style={{ color: "#A8A29E", marginBottom: 40 }}>
          Last Updated: July 10, 2026
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {/* Introduction */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>Introduction</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              Welcome to Bride View, operated by Axiom Trinity Labs, LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website.
            </p>
            <p style={{ color: "#78716C", lineHeight: 1.8, marginTop: 12 }}>
              By using Bride View, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>Information We Collect</h2>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>1. Personal Information</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>You sign in with Apple or Google (we do not use or store passwords). Through that sign-in we collect:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li><strong style={{ color: "#44403C" }}>Email Address:</strong> Used for account creation, authentication, and communication</li>
              <li><strong style={{ color: "#44403C" }}>Name:</strong> Used to personalize your experience (when provided by Apple or Google)</li>
            </ul>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>2. Photos &amp; Images</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>When you use our AI dress generation feature:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li><strong style={{ color: "#44403C" }}>Reference Photos:</strong> Up to 2 photos of yourself, used so the AI can generate dresses on a body that looks like yours</li>
              <li><strong style={{ color: "#44403C" }}>Generated Images:</strong> AI-generated dress images stored in your account</li>
              <li><strong style={{ color: "#44403C" }}>Style Preferences:</strong> Your answers to style questions (venue, vibe, silhouette, etc.)</li>
              <li><strong style={{ color: "#44403C" }}>Saving &amp; Sharing:</strong> With your permission, you can save generated looks to your device photo library or share them through your device&apos;s share sheet. Saving and sharing are always initiated by you. Once you save or share an image, that copy is on your device or with the person you shared it with, and is no longer controlled by Bride View.</li>
            </ul>
            <p style={{ color: "#A69064", lineHeight: 1.8, marginTop: 12, fontStyle: "italic" }}>
              Note: Your reference photos are encrypted and only used to generate your dresses. They are permanently deleted when you sign out or delete your account. We never sell them, share them with other users, or use them to train AI models.
            </p>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>3. Usage Data</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>We automatically collect certain information when you use our app:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li>Device information (type, operating system, version)</li>
              <li>App usage statistics (feature usage, session duration)</li>
              <li>Error logs and crash reports (for app improvement)</li>
              <li>Journey history (count, dates, reactions)</li>
            </ul>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>4. Subscription &amp; Payment Information</h3>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>When you start the Bride View membership (with a 3-day free trial) or buy an optional credit pack:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li><strong style={{ color: "#44403C" }}>Apple App Store / Google Play:</strong> All payment processing is handled by Apple/Google. We do NOT receive or store your credit card information.</li>
              <li><strong style={{ color: "#44403C" }}>Subscription &amp; Purchase Status:</strong> We use RevenueCat to receive purchase and subscription confirmations from the app stores so we can unlock your membership and credit your account.</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>How We Use Your Information</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>We use the collected information for the following purposes:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li><strong style={{ color: "#44403C" }}>Provide Services:</strong> Generate AI dress images based on your preferences and photos</li>
              <li><strong style={{ color: "#44403C" }}>Account Management:</strong> Authenticate users, manage credits, and store journey history</li>
              <li><strong style={{ color: "#44403C" }}>Improve Our App:</strong> Analyze usage patterns, fix bugs, and develop new features</li>
              <li><strong style={{ color: "#44403C" }}>Communication:</strong> Send important updates, purchase confirmations, and support responses</li>
              <li><strong style={{ color: "#44403C" }}>Security:</strong> Detect and prevent fraud, unauthorized access, and abuse</li>
              <li><strong style={{ color: "#44403C" }}>Legal Compliance:</strong> Comply with applicable laws and regulations</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>Third-Party Services We Use</h2>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>1. Supabase (Database &amp; Authentication)</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li><strong style={{ color: "#44403C" }}>Purpose:</strong> Secure user authentication, data storage, and encrypted photo storage</li>
              <li><strong style={{ color: "#44403C" }}>Data Shared:</strong> Email, name, journey history, encrypted photos</li>
              <li><strong style={{ color: "#44403C" }}>Privacy Policy:</strong> <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#A69064", textDecoration: "underline" }}>supabase.com/privacy</a></li>
            </ul>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>2. Google Gemini AI (Image Generation)</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li><strong style={{ color: "#44403C" }}>Purpose:</strong> AI-powered wedding dress image generation</li>
              <li><strong style={{ color: "#44403C" }}>Data Shared:</strong> Reference photos and style preferences (processed for generation only)</li>
              <li><strong style={{ color: "#44403C" }}>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#A69064", textDecoration: "underline" }}>policies.google.com/privacy</a></li>
            </ul>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>3. Apple App Store / Google Play</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li><strong style={{ color: "#44403C" }}>Purpose:</strong> App distribution and payment processing</li>
              <li><strong style={{ color: "#44403C" }}>Data Shared:</strong> Purchase information</li>
              <li><strong style={{ color: "#44403C" }}>Privacy Policy:</strong> <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" style={{ color: "#A69064", textDecoration: "underline" }}>Apple</a> / <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#A69064", textDecoration: "underline" }}>Google</a></li>
            </ul>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>4. Amplitude (Product Analytics)</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li><strong style={{ color: "#44403C" }}>Purpose:</strong> Understand how users interact with the app to improve the experience</li>
              <li><strong style={{ color: "#44403C" }}>Data Shared:</strong> Anonymous device ID, user ID (after signup), in-app events, device type, OS version</li>
              <li><strong style={{ color: "#44403C" }}>Privacy Policy:</strong> <a href="https://amplitude.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#A69064", textDecoration: "underline" }}>amplitude.com/privacy</a></li>
            </ul>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>5. RevenueCat (Subscription Management)</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li><strong style={{ color: "#44403C" }}>Purpose:</strong> Manage subscriptions and in-app purchases, and measure the effectiveness of our advertising</li>
              <li><strong style={{ color: "#44403C" }}>Data Shared:</strong> Anonymous user/device identifiers and purchase events. RevenueCat may forward purchase and trial events to advertising partners (such as Meta) so we can measure ad performance.</li>
              <li><strong style={{ color: "#44403C" }}>Privacy Policy:</strong> <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#A69064", textDecoration: "underline" }}>revenuecat.com/privacy</a></li>
            </ul>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>6. Meta / Facebook (Advertising Measurement)</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li><strong style={{ color: "#44403C" }}>Purpose:</strong> Measure and improve the ads we run for Bride View. We use the Meta SDK for measurement and attribution only. We do NOT show ads inside the app.</li>
              <li><strong style={{ color: "#44403C" }}>Data Shared:</strong> Anonymous advertising and device identifiers and app events (such as install, sign-up, and trial start). On iOS, identifiers used for tracking are only collected if you allow it through Apple&apos;s App Tracking Transparency prompt.</li>
              <li><strong style={{ color: "#44403C" }}>Privacy Policy:</strong> <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" style={{ color: "#A69064", textDecoration: "underline" }}>facebook.com/privacy/policy</a></li>
            </ul>

            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#44403C", marginTop: 20, marginBottom: 10 }}>7. TikTok Pixel (Website Only)</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li><strong style={{ color: "#44403C" }}>Purpose:</strong> Measure the effectiveness of our advertising on this marketing website (not in the app)</li>
              <li><strong style={{ color: "#44403C" }}>Data Shared:</strong> Anonymous website interactions (page views, scroll depth, time on page, App Store button clicks)</li>
              <li><strong style={{ color: "#44403C" }}>Privacy Policy:</strong> <a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "#A69064", textDecoration: "underline" }}>tiktok.com/legal/privacy-policy</a></li>
            </ul>
          </section>

          {/* Data Storage & Security */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>Data Storage &amp; Security</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>We implement industry-standard security measures to protect your information:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li><strong style={{ color: "#44403C" }}>Encryption:</strong> All data transmitted between your device and our servers uses HTTPS/TLS encryption</li>
              <li><strong style={{ color: "#44403C" }}>Photo Encryption:</strong> Your reference photos are encrypted at rest in secure cloud storage</li>
              <li><strong style={{ color: "#44403C" }}>Sign-In Security:</strong> Authentication is handled through Apple and Google; we never store passwords</li>
              <li><strong style={{ color: "#44403C" }}>Database Security:</strong> Row-Level Security (RLS) ensures users can only access their own data</li>
              <li><strong style={{ color: "#44403C" }}>Access Controls:</strong> Strict authentication and authorization on all API endpoints</li>
            </ul>
            <p style={{ color: "#78716C", lineHeight: 1.8, marginTop: 12, fontStyle: "italic" }}>
              However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>Data Retention</h2>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li><strong style={{ color: "#44403C" }}>Account Data:</strong> Retained as long as your account is active</li>
              <li><strong style={{ color: "#44403C" }}>Generated Images:</strong> Stored in your account as long as you have credits/active account</li>
              <li><strong style={{ color: "#44403C" }}>Reference Photos:</strong> Deleted when you sign out or delete your account</li>
              <li><strong style={{ color: "#44403C" }}>Deleted Accounts:</strong> All personal data permanently deleted within 30 days of account deletion</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>Your Privacy Rights</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>You have the following rights regarding your personal information:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li><strong style={{ color: "#44403C" }}>Access:</strong> Request a copy of your personal data</li>
              <li><strong style={{ color: "#44403C" }}>Correction:</strong> Update or correct inaccurate information (available in Profile settings)</li>
              <li><strong style={{ color: "#44403C" }}>Deletion:</strong> Request permanent deletion of your account and all associated data</li>
              <li><strong style={{ color: "#44403C" }}>Opt-Out:</strong> Unsubscribe from marketing communications</li>
            </ul>
            <p style={{ color: "#78716C", lineHeight: 1.8, marginTop: 12 }}>
              To exercise any of these rights, contact us at <a href="mailto:support@axiomtrinitylabs.com" style={{ color: "#A69064", textDecoration: "underline" }}>support@axiomtrinitylabs.com</a>
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>Children&apos;s Privacy</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately, and we will delete such information from our systems.
            </p>
          </section>

          {/* International Users */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>International Users</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              Your information may be transferred to and maintained on servers located outside of your country. By using our service, you consent to the transfer of information to countries outside your country of residence, which may have different data protection rules.
            </p>
            <p style={{ color: "#78716C", lineHeight: 1.8, marginTop: 12 }}>
              Our servers are primarily located in the United States. We comply with applicable data protection laws, including GDPR for European users and CCPA for California residents.
            </p>
          </section>

          {/* California Privacy Rights */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>California Privacy Rights (CCPA)</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA/CPRA):</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li>Right to know what personal information is collected</li>
              <li>Right to know if personal information is sold or shared</li>
              <li>Right to opt out of the sale or sharing of personal information</li>
              <li>Right to access your personal information</li>
              <li>Right to delete your personal information</li>
              <li>Right to equal service and price (no discrimination for exercising rights)</li>
            </ul>
            <p style={{ color: "#78716C", lineHeight: 1.8, marginTop: 12 }}>
              We do not sell your personal information for money. To measure the effectiveness of our advertising, we do share limited, mostly anonymous advertising and device identifiers with partners such as Meta and TikTok. On iOS you can limit this at any time by declining the App Tracking Transparency prompt, and you can contact us at <a href="mailto:support@axiomtrinitylabs.com" style={{ color: "#A69064", textDecoration: "underline" }}>support@axiomtrinitylabs.com</a> to opt out.
            </p>
          </section>

          {/* GDPR Rights */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>European Privacy Rights (GDPR)</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR):</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure (&ldquo;right to be forgotten&rdquo;)</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Rights related to automated decision-making (we use AI for image generation only, not decisions about you)</li>
            </ul>
            <p style={{ color: "#78716C", lineHeight: 1.8, marginTop: 12 }}>
              Legal basis for processing: Consent (when you create an account), Contract (to provide our services), and Legitimate Interest (to improve our app).
            </p>
          </section>

          {/* Cookies & Tracking */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>Cookies &amp; Tracking Technologies</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}><strong style={{ color: "#44403C" }}>Website:</strong> Our landing page uses:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li>The TikTok Pixel, to measure the effectiveness of our advertising (page views, scroll depth, time on page, and App Store button clicks)</li>
              <li>No other advertising cookies</li>
            </ul>
            <p style={{ color: "#78716C", lineHeight: 1.8, marginTop: 16 }}><strong style={{ color: "#44403C" }}>Mobile App:</strong></p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li>Session management for authentication (required for app functionality)</li>
              <li>Local storage for app preferences</li>
              <li>Amplitude SDK for product analytics (usage patterns, not advertising)</li>
              <li>The Meta SDK for advertising measurement and attribution only (on iOS, tracking identifiers are collected only if you allow it via the App Tracking Transparency prompt). We do NOT display ads inside the app.</li>
            </ul>
          </section>

          {/* Changes */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>Changes to This Privacy Policy</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              We may update our Privacy Policy from time to time. We will notify you of any changes by:
            </p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, marginTop: 8, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li>Posting the new Privacy Policy on this page</li>
              <li>Updating the &ldquo;Last Updated&rdquo; date at the top</li>
              <li>Sending an in-app notification for material changes</li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>Contact Us</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div style={{ marginTop: 16, padding: 24, borderRadius: 16, background: "rgba(191,160,112,0.06)", border: "1px solid rgba(191,160,112,0.2)" }}>
              <p style={{ color: "#78716C", lineHeight: 1.8 }}><strong style={{ color: "#44403C" }}>Email:</strong> <a href="mailto:support@axiomtrinitylabs.com" style={{ color: "#A69064", textDecoration: "underline" }}>support@axiomtrinitylabs.com</a></p>
              <p style={{ color: "#78716C", lineHeight: 1.8, marginTop: 8 }}><strong style={{ color: "#44403C" }}>Response Time:</strong> We aim to respond within 48 hours</p>
            </div>
          </section>

          {/* Summary */}
          <section style={{ paddingTop: 32, borderTop: "1px solid #E7E5E4" }}>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>Privacy Policy Summary</h2>
            <div style={{ padding: 24, borderRadius: 16, background: "rgba(191,160,112,0.08)", border: "1.5px solid rgba(191,160,112,0.25)" }}>
              <p style={{ fontWeight: 600, color: "#44403C", marginBottom: 12 }}>In Plain English:</p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
                <li>&#10003; We collect only what&apos;s necessary to generate your looks and match you to boutiques</li>
                <li>&#10003; You sign in with Apple or Google; we never store a password</li>
                <li>&#10003; Your reference photos are encrypted and deleted when you sign out</li>
                <li>&#10003; We do NOT sell your data for money; we share limited ad identifiers with Meta/TikTok to measure our ads (you can limit this via App Tracking Transparency on iOS)</li>
                <li>&#10003; You can delete your account and all data anytime</li>
                <li>&#10003; We use industry-standard security practices</li>
                <li>&#10003; Payments and subscriptions are handled securely by Apple/Google</li>
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
          <p style={{ fontSize: 12, color: "#A8A29E" }}>&copy; {new Date().getFullYear()} Axiom Trinity Labs, LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
