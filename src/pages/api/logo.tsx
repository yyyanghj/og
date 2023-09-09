/* eslint-disable @next/next/no-img-element */
import satori from 'satori'
import { loadFonts } from '../../utils/fonts'

export const config = {
  runtime: 'edge',
}

export default async function handler() {
  const fonts = await loadFonts()

  const svg = await satori(
    <div
      style={{
        fontSize: 80,
        fontFamily: 'Hanalei',
        background: 'black',
        color: '#fff',
        width: '100%',
        height: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        // letterSpacing: 8,
      }}
    >
      <div style={{ transform: 'translate(4px,-8px)' }}>yhj</div>
    </div>,
    {
      width: 160,
      height: 160,
      fonts: fonts,
    },
  )

  return new Response(svg, {
    status: 200,
    headers: {
      'content-type': 'image/svg+xml',
    },
  })
}
