import type { Root, Element, RootContent } from "hast"

export const TCD_ORIGIN = "https://tcdexplorer.es"
export const TCD_SHARE_IMAGE = `${TCD_ORIGIN}/static/tcd-share.png`

/** Public identity, independent of the local preview host, query and anchor. */
export function tcdPublicUrl(slug: string): string {
  const path = slug
    .split(/[?#]/, 1)[0]
    .replace(/^\/+|\/+$/g, "")
    .replace(/(?:^|\/)index$/, "")
  return new URL(`/${path}`, TCD_ORIGIN).href
}

type TextNode = Root | RootContent
function plainText(node: TextNode): string {
  if (node.type === "text") return node.value
  if (node.type === "element") {
    const classes = node.properties.className
    if (
      node.tagName === "script" ||
      node.tagName === "style" ||
      (Array.isArray(classes) && classes.includes("tag-link"))
    )
      return ""
  }
  return "children" in node ? node.children.map(plainText).join("") : ""
}

/** Only prose paragraphs: skip tag rows, headings, lists, embeds and link-only navigation. */
export function tcdAutoDescription(tree: TextNode): string {
  const paragraphs: string[] = []
  function visit(node: TextNode) {
    if (node.type === "element") {
      if (["nav", "aside", "ul", "ol", "blockquote", "pre"].includes(node.tagName)) return
      if (node.tagName === "p") {
        const prose = node.children
          .filter(
            (child) =>
              !(
                child.type === "element" &&
                ["a", "img", "audio", "video", "iframe"].includes(child.tagName)
              ),
          )
          .map(plainText)
          .join("")
          .replace(/#[\p{L}\p{N}_/-]+/gu, "")
          .trim()
        if (prose.replace(/[^\p{L}\p{N}]/gu, "").length < 30) return
        const text = plainText(node as Element)
          .replace(/#[\p{L}\p{N}_/-]+/gu, "")
          .replace(/\s+/g, " ")
          .trim()
        if (text) paragraphs.push(text)
        return
      }
    }
    if ("children" in node) node.children.forEach(visit)
  }
  visit(tree)
  const text = paragraphs[0] ?? "Explora esta nota y sus enlaces en el Atlas de TCD Explorer."
  if (text.length <= 240) return text
  return text.slice(0, 237).replace(/\s+\S*$/, "") + "…"
}
