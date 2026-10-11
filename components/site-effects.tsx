"use client";

import { useEffect } from "react";

/** Marks <html data-scrolled> once the page moves, so the sticky header compacts and gets its backdrop. */
export function SiteEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => root.toggleAttribute("data-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return null;
}
