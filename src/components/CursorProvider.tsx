"use client";
import { useRef, useEffect } from "react";
import StickyCursor from "@/components/StickyCursor";

export default function CursorProvider({ children }: { children: React.ReactNode }) {
  const stickyRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Only enable custom cursor on devices that support hover (not touch)
    const isHoverDevice = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (isHoverDevice) {
      document.documentElement.setAttribute("data-custom-cursor", "enabled");
    }
    return () => {
      document.documentElement.removeAttribute("data-custom-cursor");
    };
  }, []);

  return (
    <>
      <StickyCursor stickyRef={stickyRef} />
      {children}
    </>
  );
}
