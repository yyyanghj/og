function fetchFont(url: URL) {
  return fetch(url).then(res => res.arrayBuffer())
}

// const Audiowide = fetchFont(new URL('../assets/fonts/Audiowide-Regular.ttf', import.meta.url))
// const Neonderthaw = fetchFont(new URL(`../assets/fonts/Neonderthaw-Regular.ttf`, import.meta.url))
const Inter = fetchFont(new URL(`../assets/fonts/Inter-Regular.ttf`, import.meta.url))
const Hanalei = fetchFont(new URL(`../assets/fonts/Hanalei-Regular.ttf`, import.meta.url))

export async function loadFonts() {
  const [InterFontData, HanaleiFontData] = await Promise.all([Inter, Hanalei])

  return [
    // {
    //   name: 'Audiowide' as const,
    //   data: AudiowideFontData,
    //   style: 'normal' as const,
    // },
    // {
    //   name: 'Neonderthaw' as const,
    //   data: NeonderthawFontData,
    //   style: 'normal' as const,
    // },
    {
      name: 'Inter' as const,
      data: InterFontData,
      style: 'normal' as const,
    },
    {
      name: 'Hanalei' as const,
      data: HanaleiFontData,
      style: 'normal' as const,
    },
  ]
}
