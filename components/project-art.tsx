import type { CSSProperties } from "react";

/** Pastel panel tone per project (blue is the panel default). */
export const PROJECT_TONE: Record<string, string> = {
  tasking: "tone-orange",
  "dependency-doctor": "tone-pink",
  networklogger: "tone-green",
  "rtl-migrate": "",
  fluxgate: "tone-orange",
};

const tilt = (deg: number) => ({ "--tilt": `${deg}deg` }) as CSSProperties;

/** Each project drawn as a small fragment of its own UI or output, not as artwork. */
export function ProjectArt({ slug }: { slug: string }) {
  switch (slug) {
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
    case "networklogger":
      return (
        <div className="art">
          <div className="terminal" style={tilt(-1.5)}>
            <div><span className="t-dim">POST</span> /oauth/token <span className="t-ok">200</span> <span className="t-dim">84ms</span></div>
            <div><span className="t-dim">XHR </span> /api/me <span className="t-ok">200</span> <span className="t-dim">41ms</span></div>
            <div><span className="t-dim">BCN </span> /collect <span className="t-ok">204</span></div>
            <div><span className="t-dim">FORM</span> /login <span className="t-warn">302</span> <span className="t-dim">popup closed</span></div>
          </div>
          <span className="sticker s-pink" style={tilt(4)}>survives closed popups</span>
        </div>
      );
    case "rtl-migrate":
      return (
        <div className="art">
          <div className="mini diff" style={tilt(-1)}>
            <p className="mini-title">dry run · Button.tsx</p>
            <div className="diff-del">- marginLeft: 8,</div>
            <div className="diff-add">+ marginInlineStart: 8,</div>
            <div className="diff-del">- paddingRight: 16,</div>
            <div className="diff-add">+ paddingInlineEnd: 16,</div>
          </div>
          <span className="sticker" style={tilt(-5)}>diff first, write later</span>
        </div>
      );
    case "fluxgate":
      return (
        <div className="art">
          <div className="mini" style={tilt(1.5)}>
            <p className="mini-title">round robin · health checks</p>
            <div className="row"><span className="mono">backend-1</span><span className="status is-ok">up</span></div>
            <div className="row"><span className="mono">backend-2</span><span className="status is-ok">up</span></div>
            <div className="row"><span className="mono">backend-3</span><span className="status is-warn">down · skipped</span></div>
          </div>
          <span className="sticker s-blue" style={tilt(-4)}>10 req / 10 s per IP</span>
        </div>
      );
    default:
      return null;
  }
}
