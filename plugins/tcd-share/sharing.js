/** Self-contained so Quartz can serialize it into its SPA script bundle. */
export function setupSharing() {
  let dispose = () => {}
  function mount() {
    dispose()
    const root = document.querySelector(".tcd-share")
    if (!root) return
    const toggle = root.querySelector(".tcd-share-toggle")
    const panel = root.querySelector(".tcd-share-panel")
    const native = root.querySelector(".tcd-share-native")
    const copy = root.querySelector(".tcd-share-copy")
    const closeButton = root.querySelector(".tcd-share-close")
    const manual = root.querySelector(".tcd-share-manual")
    const input = root.querySelector("input")
    const status = root.querySelector(".tcd-share-status")
    const canonical = document.querySelector('link[rel="canonical"]')?.href
    if (!canonical) {
      root.hidden = true
      return
    }
    const data = {
      url: canonical,
      title: document.querySelector('meta[property="og:title"]')?.content || document.title,
    }
    input.value = canonical
    native.hidden = typeof navigator.share !== "function"
    let active = true
    let busy = false
    function close() {
      panel.hidden = true
      toggle.setAttribute("aria-expanded", "false")
      toggle.focus()
    }
    function open() {
      if (!panel.hidden) {
        close()
        return
      }
      status.textContent = ""
      manual.hidden = true
      panel.hidden = false
      toggle.setAttribute("aria-expanded", "true")
      ;(native.hidden ? copy : native).focus()
    }
    function escape(event) {
      if (event.key === "Escape" && !panel.hidden) {
        event.preventDefault()
        close()
      }
    }
    async function share() {
      if (busy) return
      busy = true
      status.textContent = ""
      try {
        await navigator.share(data)
      } catch (error) {
        if (active && error?.name !== "AbortError")
          status.textContent = "No se pudo abrir el menú. Puedes copiar el enlace."
      } finally {
        busy = false
      }
    }
    async function copyLink() {
      if (busy) return
      busy = true
      status.textContent = ""
      manual.hidden = true
      try {
        if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable")
        await navigator.clipboard.writeText(data.url)
        if (active) status.textContent = "Enlace copiado"
      } catch {
        if (active) {
          manual.hidden = false
          status.textContent = "No se pudo copiar automáticamente. Selecciona y copia el enlace."
          input.focus()
          input.select()
        }
      } finally {
        busy = false
      }
    }
    toggle.addEventListener("click", open)
    native.addEventListener("click", share)
    copy.addEventListener("click", copyLink)
    closeButton.addEventListener("click", close)
    root.addEventListener("keydown", escape)
    dispose = () => {
      active = false
      toggle.removeEventListener("click", open)
      native.removeEventListener("click", share)
      copy.removeEventListener("click", copyLink)
      closeButton.removeEventListener("click", close)
      root.removeEventListener("keydown", escape)
    }
    window.addCleanup(dispose)
  }
  document.addEventListener("nav", mount)
  // Quartz emits the initial nav after installing addCleanup, then emits it
  // again after each SPA navigation. Component modules load before that setup.
}
