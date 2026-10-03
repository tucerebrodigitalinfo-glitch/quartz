import { h } from "preact"

const territories = [
  { name: "CIENCIA", pos: "science", href: "/tags/ciencia" },
  { name: "TECNOLOGÍA", pos: "technology", href: "/tags/tecnología" },
  { name: "SOCIEDAD", pos: "society", href: "/tags/sociedad" },
  { name: "NATURALEZA", pos: "nature", href: "/tags/naturaleza" },
  { name: "FILOSOFÍA", pos: "philosophy", href: "/tags/filosofía" },
  { name: "HISTORIA", pos: "history", href: "/tags/historia" },
]
const TcdMapComponent = ({ fileData }) => {
  if (fileData.slug !== "mapa-tcd") return null

  return h(
    "section",
    {
      class: "tcd-portal",
      "aria-label": "TCD Explorer: mapa vivo del conocimiento",
    },

    h(
      "div",
      { class: "tcd-portal-scroll" },

      h(
        "div",
        { class: "tcd-portal-scene" },

        h("img", {
          class: "tcd-portal-art",
          src: "/static/portal-tcd/portal tcd km0.png",
          alt: "Portal TCD Explorer con brújula central y seis territorios del conocimiento",
        }),

        h(
          "button",
          {
            type: "button",
            class: "tcd-portal-hotspot search-lens",
            "aria-label": "Buscar en el Atlas",
            title: "Buscar en el Atlas",
          },
          h("span", { class: "tcd-visually-hidden" }, "Buscar en el Atlas")
        ),
        h(
          "a",
          {
            class: "tcd-portal-hotspot compass",
            href: "/favoritos",
            "aria-label": "Abrir Favoritos",
            title: "Explorar Favoritos",
          },
          h("span", { class: "tcd-visually-hidden" }, "Favoritos")
        ),

        h(
          "a",
          {
            class: "tcd-portal-hotspot km0",
            href: "/km-0---inicio-del-atlas/{km-0}---inicio-del-atlas",
            "aria-label": "Abrir KM-0 — Inicio del Atlas",
            title: "Explorar KM-0",
          },
          h("span", { class: "tcd-visually-hidden" }, "KM-0")
        ),
        ...[
          { pos: "km0-left", label: "KM-0 izquierdo" },
          { pos: "km0-right", label: "KM-0 derecho" },
        ].map((item) =>
          h(
            "a",
            {
              class: `tcd-portal-hotspot ${item.pos}`,
              href: "/km-0---inicio-del-atlas/{km-0}---inicio-del-atlas",
              "aria-label": `Abrir ${item.label}`,
              title: "Explorar KM-0",
            },
            h("span", { class: "tcd-visually-hidden" }, item.label)
          )
        ),
        ...territories.map((item) =>
          h(
            item.href ? "a" : "div",
            {
              class: `tcd-portal-hotspot ${item.pos}`,
              ...(item.href ? { href: item.href } : {}),
              "aria-label": item.href
                ? `Explorar ${item.name}`
                : undefined,
              title: item.href
                ? `Explorar ${item.name}`
                : `${item.name}: enlace pendiente de configurar`,
            },
            h("span", { class: "tcd-visually-hidden" }, item.name)
          )
        )
      )
    ),
    h(
      "div",
      { class: "tcd-departures", "aria-label": "Mensaje de bienvenida al Atlas" },
      h(
        "span",
        { class: "tcd-departures-message" },
        "LA AVENTURA DEL CONOCIMIENTO COMIENZA AQU\u00CD  \u2726  ELIGE UNO DE LOS SEIS TERRITORIOS DEL CONOCIMIENTO  \u2726  O PULSA EN EL AND\u00C9N DEL EXPLORADOR, JUNTO AL MAPAMUNDI, PARA ENTRAR AL KM-0  \u2726  Y RECUERDA: SIEMPRE TIENES LA BR\u00DAJULA PARA ORIENTARTE"
      )
    )
  )
}

TcdMapComponent.afterDOMLoaded = `
(() => {
  let searchLens = null

  function openSearch() {
    document.querySelector(".search .search-button")?.click()
  }

  function cleanupSearchLens() {
    searchLens?.removeEventListener("click", openSearch)
    searchLens = null
  }

  function setupSearchLens() {
    cleanupSearchLens()
    searchLens = document.querySelector(".tcd-portal-hotspot.search-lens")
    if (!searchLens) return
    searchLens.addEventListener("click", openSearch)
    window.addCleanup(cleanupSearchLens)
  }

  document.addEventListener("nav", setupSearchLens)
  document.addEventListener("render", setupSearchLens)
})()
`

TcdMapComponent.css = `
.tcd-portal {
  width: 100%;
  max-width: 100%;
  margin: -50px auto 0;
  overflow-anchor: none;
}

.tcd-portal-scroll {
  width: 100%;
  overflow-x: auto;
  overscroll-behavior-x: contain;
}

.tcd-portal-scene {
  position: relative;
  width: 100%;
  max-width: 1184px;
  margin: 0 auto;
  aspect-ratio: 1371 / 1148;
  overflow: hidden;
  background: #152c49;
}

.tcd-portal-art {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: fill;
  user-select: none;
}

.tcd-portal-hotspot {
  position: absolute;
  display: block;
  width: 18%;
  aspect-ratio: 1;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  box-sizing: border-box;
}

a.tcd-portal-hotspot {
  cursor: pointer;
  transition: box-shadow .25s ease, scale .25s ease;
}

a.tcd-portal-hotspot:hover {
  box-shadow: none;
  outline: none;
  scale: 1;
}

.tcd-portal-hotspot:focus-visible,
a.tcd-portal-hotspot:focus-visible {
  outline: 3px solid #f5d58c;
  outline-offset: 3px;
}

.tcd-portal-hotspot.search-lens {
  left: 81.6%;
  top: calc(8.9% + 1rem);
  width: 22.5%;
  height: 3.6%;
  aspect-ratio: auto;
  border: 0;
  padding: 0;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  z-index: 5;
}
.tcd-portal-hotspot.compass {
  left: 49.2%;
  top: calc(38.2% + 1rem);
  width: 22.6%;
  height: 24.3%;
  aspect-ratio: auto;
}

.tcd-portal-hotspot.km0 {
  left: 50%;
  top: 79%;
  width: 100%;
  height: 12%;
  aspect-ratio: auto;
  border-radius: 0;
  z-index: 3;
}

.tcd-portal-hotspot.km0-left,
.tcd-portal-hotspot.km0-right {
  top: 79%;
  width: 20%;
  height: 12%;
  aspect-ratio: auto;
  border-radius: 50%;
}

.tcd-portal-hotspot.km0-left {
  left: 14%;
}

.tcd-portal-hotspot.km0-right {
  left: 86%;
}
.tcd-portal-hotspot.science {
  left: 49.2%;
  top: calc(15.2% + 1rem);
  width: 16.6%;
  height: 16.6%;
  aspect-ratio: auto;
}

.tcd-portal-hotspot.technology {
  left: 67.0%;
  top: calc(26.2% + 1rem);
  width: 16.2%;
  height: 17.6%;
  aspect-ratio: auto;
}

.tcd-portal-hotspot.society {
  left: 67.1%;
  top: calc(48.0% + 1rem);
  width: 16.4%;
  height: 17.7%;
  aspect-ratio: auto;
}

.tcd-portal-hotspot.nature {
  left: 49.2%;
  top: calc(58.7% + 1rem);
  width: 16.8%;
  height: 17.0%;
  aspect-ratio: auto;
}

.tcd-portal-hotspot.philosophy {
  left: 30.7%;
  top: calc(48.0% + 1rem);
  width: 16.4%;
  height: 17.8%;
  aspect-ratio: auto;
}

.tcd-portal-hotspot.history {
  left: 31.0%;
  top: calc(26.1% + 1rem);
  width: 16.4%;
  height: 17.7%;
  aspect-ratio: auto;
}

.tcd-departures {
  position: relative;
  width: 100%;
  max-width: 1184px;
  margin: 8px auto 0;
  padding: 14px 0;
  overflow: hidden;
  box-sizing: border-box;
  color: #f5d58c;
  background: #10243b;
  border: 1px solid #b58b43;
  border-radius: 6px;
  box-shadow: inset 0 0 12px rgba(181, 139, 67, 0.18);
  font-family: Georgia, serif;
  font-size: clamp(12px, 1.4vw, 17px);
  letter-spacing: 0.08em;
}

.tcd-departures-message {
  display: block;
  width: max-content;
  max-width: none;
  white-space: nowrap;
  padding-left: 100%;
  animation: tcd-departures-scroll 32s linear infinite;
}

.tcd-departures:hover .tcd-departures-message {
  animation-play-state: paused;
}

@keyframes tcd-departures-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-100%); }
}

@media (prefers-reduced-motion: reduce) {
  .tcd-departures-message {
    animation: none;
    width: auto;
    padding: 0 14px;
    white-space: normal;
    text-align: center;
  }
}
.tcd-visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 650px) {
  .tcd-portal-scene {
    width: 680px;
    max-width: none;
  }

  .tcd-portal-scroll {
    -webkit-overflow-scrolling: touch;
  }
}
`

export const TcdMap = () => TcdMapComponent




