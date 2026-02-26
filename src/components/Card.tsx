"use client";

import { CSSProperties, ReactNode } from "react";

// Standard card - white bg, visible border, soft shadow
export function Card({
  children,
  className = "",
  gold = false,
  style = {},
}: {
  children: ReactNode;
  className?: string;
  gold?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div
      className={className}
      style={{
        background: "#FFFFFF",
        border: gold ? "1.5px solid #C8AD80" : "1px solid #D6CEC8",
        borderRadius: 20,
        boxShadow: gold
          ? "0 4px 24px rgba(191,160,112,0.15), 0 1px 4px rgba(0,0,0,0.05)"
          : "0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// Icon container - gold-tinted box for feature icons
export function IconBox({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        width: 48,
        height: 48,
        borderRadius: 14,
        background: "linear-gradient(135deg, rgba(191,160,112,0.15), rgba(191,160,112,0.06))",
        border: "1px solid rgba(191,160,112,0.2)",
        color: "#BFA070",
      }}
    >
      {children}
    </div>
  );
}

// Tag/pill for question labels
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 12px",
        borderRadius: 9999,
        background: "rgba(191,160,112,0.1)",
        border: "1px solid rgba(191,160,112,0.2)",
        color: "#A69064",
        fontSize: 12,
      }}
    >
      {children}
    </span>
  );
}
