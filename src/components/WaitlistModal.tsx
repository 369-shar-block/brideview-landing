"use client";

import { motion, AnimatePresence } from "framer-motion";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-sm"
            style={{
              background: "#FDFCFB",
              borderRadius: 24,
              padding: "48px 36px",
              boxShadow: "0 25px 60px -12px rgba(0,0,0,0.25)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gold accent line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: 60,
                height: 3,
                borderRadius: 2,
                background: "linear-gradient(90deg, #BFA070, #D4BC8E)",
              }}
            />

            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "1px solid #E7E5E4",
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#78716C" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center">
              {/* Icon */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(191,160,112,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <svg style={{ width: 28, height: 28 }} viewBox="0 0 24 24" fill="none">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#4285F4" />
                  <path d="M17.556 8.236L5.178.862a1.005 1.005 0 00-1.07.032l9.684 9.684 3.764-2.342z" fill="#EA4335" />
                  <path d="M17.556 15.764l-3.764-2.342-9.684 9.684a1.005 1.005 0 001.07.032l12.378-7.374z" fill="#34A853" />
                  <path d="M21.39 12c0-.386-.176-.748-.509-.968l-3.325-1.981-4.148 2.95 4.148 2.95 3.325-1.982A1.12 1.12 0 0021.39 12z" fill="#FBBC04" />
                </svg>
              </div>

              <h3
                className="font-serif"
                style={{ fontSize: 28, fontWeight: 600, color: "#44403C", marginBottom: 12 }}
              >
                Coming Soon
              </h3>
              <p style={{ fontSize: 16, color: "#78716C", lineHeight: 1.6, marginBottom: 32 }}>
                Bride View is coming to Android soon. Stay tuned!
              </p>

              <button
                onClick={onClose}
                style={{
                  padding: "14px 36px",
                  background: "linear-gradient(135deg, #BFA070, #A69064)",
                  color: "white",
                  fontSize: 15,
                  fontWeight: 500,
                  borderRadius: 9999,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 8px 32px -8px rgba(191,160,112,0.5)",
                }}
              >
                Got It
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
