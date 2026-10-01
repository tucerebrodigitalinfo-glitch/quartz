export function registerEscapeHandler(outsideContainer: HTMLElement | null, cb: () => void) {
  if (!outsideContainer) return
  function click(this: HTMLElement, e: HTMLElementEventMap["click"]) {
    if (e.target !== this) return
    e.preventDefault()
    e.stopPropagation()
    cb()
  }

  function esc(e: HTMLElementEventMap["keydown"]) {
    if (!e.key.startsWith("Esc")) return
    e.preventDefault()
    cb()
  }

  outsideContainer?.addEventListener("click", click)
  window.addCleanup(() => outsideContainer?.removeEventListener("click", click))
  document.addEventListener("keydown", esc)
  window.addCleanup(() => document.removeEventListener("keydown", esc))
}

export function removeAllChildren(node: HTMLElement) {
  while (node.firstChild) {
    node.removeChild(node.firstChild)
  }
}

// AliasRedirect emits HTML redirects which also have the link[rel="canonical"]
// containing the URL it's redirecting to.
// Extracting it here with regex is _probably_ faster than parsing the entire HTML
// with a DOMParser effectively twice (here and later in the SPA code), even if
// way less robust - we only care about our own generated redirects after all.
const canonicalRegex = /<link rel="canonical" href="([^"]*)">/

export async function fetchCanonical(url: URL): Promise<Response> {
  const res = await fetch(`${url}`)
  if (!res.headers.get("content-type")?.startsWith("text/html")) {
    return res
  }

  // reading the body can only be done once, so we need to clone the response
  // to allow the caller to read it if it's was not a redirect
  const text = await res.clone().text()
  // An ordinary canonical identifies a page; it is not a navigation instruction.
  // Quartz alias documents also contain a refresh meta tag. Only follow those.
  const isAlias = /<meta\b[^>]*http-equiv=["']refresh["'][^>]*>/i.test(text)
  const [_, redirect] = isAlias ? (text.match(canonicalRegex) ?? []) : []
  if (!redirect) return res
  const target = new URL(redirect, res.url || url)
  if (!["http:", "https:"].includes(target.protocol)) return res
  // Public same-site aliases must remain on the preview host during local navigation.
  if (target.hostname === "tcdexplorer.es" && url.hostname !== "tcdexplorer.es") {
    target.protocol = url.protocol
    target.host = url.host
  }
  return target.href === url.href ? res : fetch(target.href)
}
