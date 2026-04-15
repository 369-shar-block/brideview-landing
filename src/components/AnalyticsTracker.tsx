"use client";

import { useEffect } from "react";
import { trackScrollDepth, trackTimeOnPage } from "@/lib/analytics";

const SCROLL_MILESTONES = [25, 50, 75, 100] as const;
const TIME_MILESTONES = [15, 30, 60, 120, 300] as const;

export default function AnalyticsTracker() {
  useEffect(() => {
    const firedScroll = new Set<number>();
    const firedTime = new Set<number>();
    const start = Date.now();

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      if (scrollable <= 0) return;
      const pct = (doc.scrollTop / scrollable) * 100;
      for (const m of SCROLL_MILESTONES) {
        if (pct >= m && !firedScroll.has(m)) {
          firedScroll.add(m);
          trackScrollDepth(m);
        }
      }
    };

    const timers = TIME_MILESTONES.map((s) =>
      window.setTimeout(() => {
        if (document.visibilityState === "visible") {
          firedTime.add(s);
          trackTimeOnPage(s);
        }
      }, s * 1000)
    );

    const onUnload = () => {
      const elapsed = Math.round((Date.now() - start) / 1000);
      if (elapsed > 0 && !firedTime.has(elapsed)) {
        trackTimeOnPage(elapsed);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", onUnload);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pagehide", onUnload);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  return null;
}
