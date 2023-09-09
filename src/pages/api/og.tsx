/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'
import { loadFonts } from '../../utils/fonts'
import type { NextApiRequest } from 'next'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextApiRequest) {
  const url = new URL(req.url!)
  const title = url.searchParams.get('title')
  const fonts = await loadFonts()

  return new ImageResponse(
    (
      <div
        lang="zh-CN"
        style={{
          width: '100%',
          height: '100%',
          background: '#000',
          display: 'flex',
          // alignItems: 'center',
          // justifyContent: 'center',
          fontFamily: 'Inter',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            display: 'flex',
            width: '100%',
            height: '100%',
            fontSize: 400,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: title ? 0.2 : 0.4,
            gap: 120,
            fontFamily: 'Hanalei',
            color: '#888',
          }}
        >
          <div>y</div>
          <div>h</div>
          <div>j</div>
        </div>
        {Boolean(title) && (
          <div
            lang="zh-CN"
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
              margin: '180px auto 0',
            }}
          >
            <div
              style={{
                color: '#888',
                fontSize: 38,
                lineHeight: 1.2,
              }}
            >
              yyyanghj
            </div>
            <div
              style={{
                color: '#fff',
                fontSize: 38,
                lineHeight: 1.2,
                marginTop: 8,
              }}
            >
              {title}
            </div>
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: fonts,
    },
  )
}
