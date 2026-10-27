import { h } from "preact"
import { readFileSync } from "node:fs"

const TcdPanelsComponent = ({ fileData }) => {
  const slug = fileData.slug ?? ""
  // Keep the portal, landing page, Bases and special/private layouts outside this change.
  if (["", "index", "mapa-tcd", "404"].includes(slug) || slug.endsWith(".base") ||
      /(^|\/)altavoces(?:\/|$)/i.test(slug) || fileData.frontmatter?.password || fileData.unlisted) return null
  return h("span", { hidden: true, class: "tcd-panels-enabled", "aria-hidden": "true" })
}
TcdPanelsComponent.css = readFileSync(new URL("./panels.css", import.meta.url), "utf8")
TcdPanelsComponent.afterDOMLoaded = readFileSync(new URL("./panels.inline.js", import.meta.url), "utf8")
export const TcdPanels = () => TcdPanelsComponent
