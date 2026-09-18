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
        href: baseDir,
        class: "tcd-brand-link",
        "aria-label": "TCD Explorer",
      },
      h("img", {
        src: `${baseDir}/static/tcd-logo.png`,
        alt: "TCD Explorer - Tu Cerebro Digital",
        class: "tcd-brand-logo",
      })
    )
  )
}

TcdBrandComponent.css = `
.tcd-brand {
  margin: 0;
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
