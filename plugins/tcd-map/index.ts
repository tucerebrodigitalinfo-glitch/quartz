export const manifest = {
  name: "tcd-map",
  displayName: "TCD Mapa Vivo",
  description: "Capa visual de exploración del conocimiento para TCD Explorer.",
  version: "0.1.0",
  category: "component",
  components: {
    TcdMap: {
      displayName: "TCD Mapa Vivo",
      defaultPosition: "beforeBody",
      defaultPriority: 1,
    },
  },
}

export default function TcdMapPlugin() {
  return {}
}
