import Link from "next/link";

export const metadata = {
  title: "Delete Your Account — Bride View",
  description: "How to permanently delete your Bride View account and all associated data.",
};

export default function DeleteAccount() {
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
          Delete Your Account
        </h1>
        <p style={{ color: "#78716C", marginBottom: 40, lineHeight: 1.8 }}>
          We&apos;re sorry to see you go. Here&apos;s how to delete your account and data.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {/* In-App Deletion */}
          <section
            style={{
              padding: 28,
              borderRadius: 20,
              background: "#FFFFFF",
              border: "1px solid #D6CEC8",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 16 }}>Delete Account In-App</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8, marginBottom: 16 }}>
              You can permanently delete your account directly from the app:
            </p>
            <ol style={{ listStyleType: "decimal", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 12, color: "#78716C", lineHeight: 1.8 }}>
              <li><strong style={{ color: "#44403C" }}>Open the app</strong> on your device</li>
              <li><strong style={{ color: "#44403C" }}>Go to Profile tab</strong> (bottom navigation)</li>
              <li><strong style={{ color: "#44403C" }}>Scroll down</strong> to the &ldquo;Danger Zone&rdquo; section</li>
              <li><strong style={{ color: "#44403C" }}>Tap &ldquo;Delete Account&rdquo;</strong></li>
              <li><strong style={{ color: "#44403C" }}>Confirm deletion</strong> when prompted</li>
            </ol>
            <p style={{ color: "#A69064", fontSize: 14, marginTop: 16, fontStyle: "italic" }}>
              Note: This action is immediate and cannot be undone.
            </p>
          </section>

          {/* What Gets Deleted */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>What Gets Deleted</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8, marginBottom: 12 }}>When you delete your account, we permanently remove:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8, color: "#78716C", lineHeight: 1.8 }}>
              <li>Your profile information (name, email)</li>
              <li>All reference photos you uploaded</li>
              <li>All AI-generated dress images</li>
              <li>Your journey history and style preferences</li>
              <li>Any remaining unused credits</li>
              <li>All associated account data</li>
            </ul>
          </section>

          {/* Credits */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>Unused Credits</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              If you have unused credits in your account, they will be <strong style={{ color: "#44403C" }}>permanently forfeited</strong> upon deletion. Bride View uses one-time purchases (not subscriptions), so there are no recurring charges to cancel. However, unused credits cannot be refunded after account deletion.
            </p>
            <p style={{ color: "#78716C", lineHeight: 1.8, marginTop: 12 }}>
              We recommend using your remaining credits before deleting your account.
            </p>
          </section>

          {/* Refunds */}
          <section>
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>Refund Requests</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8, marginBottom: 12 }}>
              If you&apos;d like to request a refund for a recent purchase, please contact the app store where you made your purchase:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{
                  padding: 20,
                  borderRadius: 16,
                  background: "#FFFFFF",
                  border: "1px solid #D6CEC8",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <h3 style={{ fontWeight: 600, color: "#44403C", marginBottom: 8 }}>iOS (Apple)</h3>
                <p style={{ color: "#78716C", fontSize: 14, lineHeight: 1.7 }}>
                  Visit <a href="https://support.apple.com/en-us/HT204084" target="_blank" rel="noopener noreferrer" style={{ color: "#A69064", textDecoration: "underline" }}>Apple&apos;s refund page</a> or go to Settings &rarr; [Your Name] &rarr; Purchase History on your iPhone.
                </p>
              </div>
              <div
                style={{
                  padding: 20,
                  borderRadius: 16,
                  background: "#FFFFFF",
                  border: "1px solid #D6CEC8",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <h3 style={{ fontWeight: 600, color: "#44403C", marginBottom: 8 }}>Android (Google Play)</h3>
                <p style={{ color: "#78716C", fontSize: 14, lineHeight: 1.7 }}>
                  Visit <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer" style={{ color: "#A69064", textDecoration: "underline" }}>Google Play&apos;s refund page</a> or open Google Play Store &rarr; Profile &rarr; Payments &amp; subscriptions.
                </p>
              </div>
            </div>
          </section>

          {/* Need Help */}
          <section
            style={{
              padding: 28,
              borderRadius: 20,
              background: "rgba(191,160,112,0.06)",
              border: "1.5px solid rgba(191,160,112,0.25)",
            }}
          >
            <h2 className="font-serif" style={{ fontSize: 24, fontWeight: 600, color: "#44403C", marginBottom: 12 }}>Need Help?</h2>
            <p style={{ color: "#78716C", lineHeight: 1.8, marginBottom: 16 }}>
              If you&apos;re having trouble deleting your account or have questions, please contact us:
            </p>
            <p style={{ color: "#78716C", lineHeight: 1.8 }}>
              <strong style={{ color: "#44403C" }}>Email:</strong>{" "}
              <a href="mailto:support@axiomtrinitylabs.com" style={{ color: "#A69064", textDecoration: "underline" }}>support@axiomtrinitylabs.com</a>
            </p>
            <p style={{ color: "#A8A29E", fontSize: 14, marginTop: 8 }}>
              We typically respond within 24&ndash;48 hours.
            </p>
          </section>

          {/* Privacy link */}
          <section>
            <p style={{ color: "#78716C", fontSize: 14 }}>
              For more information about how we handle your data, please see our{" "}
              <Link href="/privacy" style={{ color: "#A69064", textDecoration: "underline" }}>Privacy Policy</Link>.
            </p>
          </section>
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
