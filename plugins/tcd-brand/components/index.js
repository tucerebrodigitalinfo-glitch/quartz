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
      { href: baseDir, class: "tcd-brand-link" },
      h("div", { class: "tcd-brand-name" }, "TCD"),
      h("div", { class: "tcd-brand-subtitle" }, "TU CEREBRO DIGITAL"),
      h("div", { class: "tcd-brand-explorer" }, "TCD EXPLORER")
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

.tcd-brand-name {
  font-family: var(--titleFont);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}

.tcd-brand-subtitle {
  margin-top: 0.35rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
}

.tcd-brand-explorer {
  margin-top: 0.2rem;
  font-size: 0.9rem;
  font-weight: 600;
}
`

export const TcdBrand = () => TcdBrandComponent
