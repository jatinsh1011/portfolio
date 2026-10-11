import { ImageResponse } from "next/og";
import { SITE_TITLE } from "@/lib/site";

export const dynamic = "force-static";
export const alt = SITE_TITLE;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const chips = [
  { label: "frontend", bg: "#fff0d6", ink: "#5c2d08", tilt: -2 },
  { label: "backend", bg: "#e5edff", ink: "#12296b", tilt: 1.5 },
  { label: "infrastructure", bg: "#ffe7f1", ink: "#6e1a3f", tilt: -1 },
  { label: "systems", bg: "#141a2e", ink: "#f2f0eb", tilt: 2 },
];

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#fffdf9",
        color: "#242422",
        padding: 72,
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 30, fontWeight: 700 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: 16,
            background: "#2878ef",
            color: "#fff",
            fontSize: 38,
            fontWeight: 800,
            boxShadow: "0 5px 0 #1a56b8",
            transform: "rotate(-6deg)",
          }}
        >
          j
        </div>
        jatinsde.tech
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 92, fontWeight: 800, letterSpacing: -4, lineHeight: 1.02 }}>Jatin Sharma</div>
        <div style={{ fontSize: 50, fontWeight: 800, letterSpacing: -2, color: "#2459e8", marginTop: 8 }}>
          products, tools, and the layers under them.
        </div>
      </div>
      <div style={{ display: "flex", gap: 14 }}>
        {chips.map((c) => (
          <div
            key={c.label}
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: 999,
              background: c.bg,
              color: c.ink,
              fontSize: 26,
              fontWeight: 700,
              transform: `rotate(${c.tilt}deg)`,
            }}
          >
            {c.label}
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
