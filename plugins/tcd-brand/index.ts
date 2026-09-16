export const manifest = {
  name: "tcd-brand",
  displayName: "TCD Brand",
  description: "Identidad visual de Tu Cerebro Digital para TCD Explorer.",
  version: "1.0.0",
  category: "component",
  components: {
    TcdBrand: {
      displayName: "TCD Brand",
      defaultPosition: "left",
      defaultPriority: 10,
    },
  },
}

export default function TcdBrandPlugin() {
  return {}
}
