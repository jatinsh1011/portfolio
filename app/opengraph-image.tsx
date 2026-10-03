import { ImageResponse } from "next/og";
import { SITE_TITLE } from "@/lib/site";

export const dynamic = "force-static";
export const alt = SITE_TITLE;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0b0b0c",
        color: "#ececef",
        padding: 72,
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, color: "#f5a524" }}>
        jatinsde.tech
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>
          Jatin Sharma
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 40,
            color: "#9a9aa3",
            maxWidth: 900,
          }}
        >
          Software engineer building products, systems and developer tools.
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 26, color: "#6b6b74" }}>
        Frontend · Backend · Systems · Infrastructure · AI
      </div>
    </div>,
    size,
  );
}
