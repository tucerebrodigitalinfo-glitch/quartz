import { h } from "preact"

function pathToRoot(slug) {
  let rootPath = slug
    .split("/")
    .filter((x) => x !== "")
    .slice(0, -1)
    .map(() => "..")
    .join("/")

  if (rootPath.length === 0) {
    rootPath = "."
  }

  return rootPath
}

const TcdBrandComponent = ({ fileData, displayClass }) => {
  const baseDir = pathToRoot(fileData.slug)

  return h(
    "div",
    { class: `${displayClass ?? ""} tcd-brand` },
    h(
      "a",
      {
        href: "/mapa-tcd",
        class: "tcd-brand-link",
        "aria-label": "TCD Explorer",
      },
      h("img", {
        src: `${baseDir}/static/tcd-logo-prueba.png`,
        alt: "TCD Explorer - Tu Cerebro Digital",
        class: "tcd-brand-logo",
      })
    )
  )
}

TcdBrandComponent.afterDOMLoaded = `
(() => {
  function updatePortalTitleLink() {
    document.querySelectorAll(".sidebar.left .page-title > a").forEach((link) => {
      link.setAttribute("href", "/mapa-tcd")
      const title = link.parentElement
      title.classList.add("tcd-title-with-beta")
      if (!title.querySelector(".tcd-brand-beta")) {
        const badge = document.createElement("span")
        badge.className = "tcd-brand-beta"
        badge.textContent = "BETA"
        link.insertAdjacentElement("afterend", badge)
      }
    })
  }

  document.addEventListener("nav", updatePortalTitleLink)
  document.addEventListener("render", updatePortalTitleLink)
  updatePortalTitleLink()
})()
`

TcdBrandComponent.css = `
.tcd-brand {
  margin: 0;
}

.sidebar.left .page-title.tcd-title-with-beta {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 6px;
  min-width: 0;
}

.sidebar.left .page-title.tcd-title-with-beta > a {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tcd-brand-beta {
  flex: 0 0 auto;
  pointer-events: none;
  padding: 2px 8px;
  border: 1px solid rgba(181, 105, 60, 0.4);
  border-radius: 999px;
  background: #fbf0e8;
  color: #9b542e;
  font-family: var(--bodyFont);
  font-size: 10px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

@media (max-width: 800px) {
  .tcd-brand-beta {
    padding: 1px 5px;
  }
}

.tcd-brand-link {
  display: block;
  text-decoration: none;
}

.tcd-brand-logo {
  display: block;
  width: 100%;
  max-width: 220px;
  height: auto;
}
`

export const TcdBrand = () => TcdBrandComponent
