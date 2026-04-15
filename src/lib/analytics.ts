type TTQ = {
  track: (event: string, params?: Record<string, unknown>, options?: Record<string, unknown>) => void;
  page: () => void;
};

declare global {
  interface Window {
    ttq?: TTQ;
  }
}

function ttq(): TTQ | undefined {
  if (typeof window === "undefined") return undefined;
  return window.ttq;
}

export function trackAppStoreClick(location: "hero" | "final_cta" | "footer") {
  const t = ttq();
  if (!t) return;
  const params = {
    content_name: "App Store Download",
    content_type: "product",
    content_id: "bride-view-ios",
    button_location: location,
  };
  t.track("ClickButton", params);
  t.track("Lead", params);
}

export function trackScrollDepth(depth: 25 | 50 | 75 | 100) {
  const t = ttq();
  if (!t) return;
  t.track("ScrollDepth", {
    content_name: `Scroll ${depth}%`,
    depth_percent: depth,
  });
}

export function trackTimeOnPage(seconds: number) {
  const t = ttq();
  if (!t) return;
  t.track("TimeOnPage", {
    content_name: `Time ${seconds}s`,
    seconds,
  });
}
