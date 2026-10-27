export const manifest = {
  name: "tcd-panels",
  displayName: "Paneles TCD",
  description: "Espacio de exploración y controles accesibles del grafo nativo.",
  version: "1.0.0",
  category: "component",
  components: {
    TcdPanels: { displayName: "Paneles TCD", defaultPosition: "beforeBody", defaultPriority: 90 },
  },
}
export default function TcdPanelsPlugin() { return {} }
