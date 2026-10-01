import { h } from "preact"
import { setupSharing } from "../sharing.js"

const TcdShareComponent = ({ fileData }) => {
  const slug = fileData.slug ?? ""
  if (slug === "404" || fileData.frontmatter?.password || fileData.unlisted) return null
  return h(
    "div",
    { class: "tcd-share" },
    h(
      "button",
      {
        type: "button",
        class: "tcd-share-toggle",
        "aria-expanded": "false",
        "aria-controls": "tcd-share-panel",
      },
      h(
        "svg",
        {
          width: 18,
          height: 18,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": 1.8,
          "aria-hidden": "true",
        },
        h("path", { d: "M12 16V3m-5 5 5-5 5 5M5 13v7h14v-7" }),
      ),
      "Compartir",
    ),
    h(
      "div",
      {
        id: "tcd-share-panel",
        class: "tcd-share-panel",
        hidden: true,
        role: "group",
        "aria-label": "Compartir enlace",
      },
      h("button", { type: "button", class: "tcd-share-native", hidden: true }, "Compartir con…"),
      h("button", { type: "button", class: "tcd-share-copy" }, "Copiar enlace"),
      h(
        "label",
        { class: "tcd-share-manual", hidden: true },
        "Enlace para copiar manualmente",
        h("input", { type: "text", readOnly: true, "aria-label": "Enlace público" }),
      ),
      h("p", { class: "tcd-share-status", role: "status", "aria-live": "polite" }),
      h("button", { type: "button", class: "tcd-share-close" }, "Cerrar"),
    ),
  )
}

TcdShareComponent.afterDOMLoaded = `(${setupSharing.toString()})()`
TcdShareComponent.css = `
.tcd-share { position: relative; margin: .5rem 0 1.25rem; box-sizing: border-box; min-width: 0; max-width: min(100%, calc(100vw - 2rem)); }
.tcd-share [hidden] { display: none !important; }
.tcd-share button { min-height: 44px; max-width: 100%; box-sizing: border-box; overflow-wrap: anywhere; padding: .5rem .8rem; border: 1px solid var(--lightgray); border-radius: 6px; background: var(--light); color: var(--dark); cursor: pointer; font: inherit; }
.tcd-share-toggle { display: inline-flex; align-items: center; gap: .5rem; }
.tcd-share button:hover { background: var(--highlight); }
.tcd-share :is(button,input):focus-visible { outline: 3px solid var(--secondary); outline-offset: 3px; }
.tcd-share-panel { box-sizing: border-box; width: 100%; min-width: 0; margin-top: .5rem; padding: .75rem; border: 1px solid var(--lightgray); border-radius: 8px; background: var(--light); display: flex; flex-wrap: wrap; gap: .5rem; max-width: 36rem; overflow-wrap: anywhere; }
.tcd-share-manual, .tcd-share-status { flex-basis: 100%; min-width: 0; }
.tcd-share-status { margin: 0; }
.tcd-share-status:empty { display: none; }
.tcd-share input { display: block; box-sizing: border-box; width: 100%; min-height: 44px; margin-top: .4rem; padding: .5rem; color: var(--dark); background: var(--light); border: 1px solid var(--gray); }
`
export const TcdShare = () => TcdShareComponent
