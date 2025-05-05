import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const size = {
  width: 1200,
  height: 600,
}
export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const postTitle = searchParams.get('title')
  if (!postTitle) {
    return new Response('No title provided', { status: 400 })
  }
  const title = postTitle;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111903",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.05,
          }}
        >
          {Array.from({ length: 120 }).map((_, i) => (
            <div
              key={i.toString()}
              style={{
                width: "5px",
                height: `${Math.sin(i * 0.2) * 100 + 500}px`,
                background: "#B0FC31",
                margin: "0 8px",
                borderRadius: "2px",
              }}
            />
          ))}
        </div>
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: 'flex',
            fontSize: 150,
            fontFamily: 'Outfit',
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'white',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap'
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  )
}