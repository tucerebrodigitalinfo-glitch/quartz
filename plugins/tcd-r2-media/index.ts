export const manifest = {
  name: "tcd-r2-media",
  displayName: "TCD R2 Media Bridge",
  description: "Publica multimedia de Obsidian desde Cloudflare R2 conservando nombres y tipos.",
  version: "1.3.0",
  category: "transformer",
}

const MEDIA_BASE = "https://media.tcdexplorer.es/"

const imageExtensions = [
  ".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg",
]

const audioExtensions = [
  ".mp3", ".m4a", ".wav", ".ogg", ".oga", ".aac", ".flac",
]

const videoExtensions = [
  ".mp4", ".webm", ".mov", ".mkv",
]

function extensionOf(value: string) {
  const clean = value.split("?")[0].split("#")[0].toLowerCase()
  const dot = clean.lastIndexOf(".")
  return dot >= 0 ? clean.slice(dot) : ""
}

function toR2Url(value: string) {
  const normalized = value.replace(/\\/g, "/")
  const filename = normalized.split("/").pop() ?? normalized

  return MEDIA_BASE + encodeURIComponent(filename)
}

export default function TcdR2Media() {
  return {
    name: "TcdR2Media",

    textTransform(_ctx: any, src: string) {
      return src.replace(
        /!\[\[([^\]]+)\]\]/g,
        (match: string, inside: string) => {
          const pipeIndex = inside.indexOf("|")

          const target =
            pipeIndex >= 0
              ? inside.slice(0, pipeIndex)
              : inside

          const display =
            pipeIndex >= 0
              ? inside.slice(pipeIndex + 1).trim()
              : ""

          const trimmedTarget = target.trim()
          const ext = extensionOf(trimmedTarget)

          const isImage = imageExtensions.includes(ext)
          const isAudio = audioExtensions.includes(ext)
          const isVideo = videoExtensions.includes(ext)
          const isPdf = ext === ".pdf"

          if (!isImage && !isAudio && !isVideo && !isPdf) {
            return match
          }

          const url = toR2Url(trimmedTarget)

          if (isAudio) {
            return `<audio src="${url}" controls></audio>`
          }

          if (isVideo) {
            return `<video src="${url}" controls></video>`
          }

          if (isPdf) {
            return `<iframe src="${url}" class="pdf"></iframe>`
          }

          if (display) {
            return `![${display}](${url})`
          }

          return `![](${url})`
        },
      )
    },
  }
}