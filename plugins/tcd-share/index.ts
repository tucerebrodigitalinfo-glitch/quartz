export const manifest = {
  name: "tcd-share",
  displayName: "TCD Compartir",
  description: "Compartición voluntaria de enlaces públicos del Atlas.",
  version: "0.1.0",
  category: "component",
  components: {
    TcdShare: {
      displayName: "Compartir",
      defaultPosition: "beforeBody",
      defaultPriority: 40,
    },
  },
}

export default function TcdSharePlugin() {
  return {}
}
