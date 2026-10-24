import type { CSSProperties } from "react";

/** Pastel panel tone per project (blue is the panel default). */
export const PROJECT_TONE: Record<string, string> = {
  aidevkit: "",
  tasking: "tone-orange",
  "dependency-doctor": "tone-pink",
  "developer-tools": "tone-green",
};

const tilt = (deg: number) => ({ "--tilt": `${deg}deg` }) as CSSProperties;

/** Each project drawn as a small fragment of its own UI or output, not as artwork. */
export function ProjectArt({ slug }: { slug: string }) {
  switch (slug) {
    case "aidevkit":
      return (
        <div className="art">
          <div className="terminal" style={tilt(-1.5)}>
            <div><span className="t-dim">$</span> aidevkit install github-mcp-server</div>
            <div><span className="t-ok">✓</span> Target: GitHub Copilot</div>
            <div><span className="t-ok">✓</span> Rollback point created</div>
            <div><span className="t-ok">✓</span> Configuration updated</div>
          </div>
          <span className="sticker" style={tilt(4)}>live · aidevkit.in</span>
        </div>
      );
    case "tasking":
      return (
        <div className="art">
          <div className="mini" style={tilt(-2)}>
            <p className="mini-title">launch checklist</p>
            <div className="row"><span>Model the data</span><span className="status is-ok">done</span></div>
            <div className="row"><span>Ship the React app</span><span className="status is-ok">done</span></div>
            <div className="row"><span>Docker + Caddy on a VPS</span><span className="status is-ok">done</span></div>
            <div className="row"><span>HTTPS certificates</span><span className="status">automatic</span></div>
          </div>
          <span className="sticker" style={tilt(5)}>live · tasking.co.in</span>
        </div>
      );
    case "dependency-doctor":
      return (
        <div className="art">
          <div className="mini" style={tilt(2)}>
            <p className="mini-title">report · package.json</p>
            <div className="row"><span className="mono">next</span><span className="status is-warn">major update</span></div>
            <div className="row"><span className="mono">lodash</span><span className="status is-warn">1 advisory · OSV</span></div>
            <div className="row"><span className="mono">react-dom</span><span className="status">peer range ok</span></div>
          </div>
          <span className="sticker s-white" style={tilt(-4)}>facts first, model second</span>
        </div>
      );
    case "developer-tools":
      return (
        <div className="art">
          <div className="terminal" style={tilt(-1.5)}>
            <div><span className="t-dim">XHR </span> /api/me <span className="t-ok">200</span> <span className="t-dim">41ms</span></div>
            <div><span className="t-dim">FORM</span> /login <span className="t-warn">302</span> <span className="t-dim">popup closed</span></div>
            <div><span className="t-dim">$</span> rtlmigrate src/ <span className="t-dim">--dry-run</span></div>
            <div><span className="t-ok">+ marginInlineStart: 8,</span></div>
          </div>
          <span className="sticker s-pink" style={tilt(4)}>chrome extension + npm cli</span>
        </div>
      );
    default:
      return null;
  }
}
