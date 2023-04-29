import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontSize: 56,
            fontWeight: 'medium',
          }}
        >
          Hello World!
        </h1>
      </div>
    ),
    {
      width: 800,
      height: 400,
    }
  )
}
