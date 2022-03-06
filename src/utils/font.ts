const cached = new Set<string>()

async function loadFont(font: string) {
  try {
    await document.fonts.load(font)
  } finally {
    cached.add(font)
  }

  return true
}

export function waitUntilFontLoad(font: string) {
  if (cached.has(font)) {
    return true
  }

  throw loadFont(font)
}
