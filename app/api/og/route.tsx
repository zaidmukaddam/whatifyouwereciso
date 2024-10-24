import { ImageResponse } from "next/og";

export const runtime = "edge";

type Parameters = {
  title?: string;
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const parameters: Parameters = Object.fromEntries(searchParams);
    const { title } = parameters;

    // Fetch fonts
    const interRegular = fetch(new URL("/public/assets/inter/regular.ttf", import.meta.url)).then((res) => 
      res.arrayBuffer()
    );
    const interSemiBold = fetch(new URL("/public/assets/inter/semi-bold.ttf", import.meta.url)).then((res) => 
      res.arrayBuffer()
    );

    // Subtle grid pattern
    const pattern = `data:image/svg+xml,${encodeURIComponent(`
      <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="30" fill="none"/>
        <path d="M30 0L0 0 0 1 30 1z" fill="rgba(255,255,255,0.03)"/>
        <path d="M0 0L0 30 1 30 1 0z" fill="rgba(255,255,255,0.03)"/>
      </svg>
    `)}`;

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            backgroundColor: "#111111",
            backgroundImage: `url(${pattern})`,
            padding: "60px",
          }}
        >
          {/* Main content */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: title ? "flex-start" : "center",
              gap: title ? "40px" : "32px",
              paddingTop: title ? "40px" : "0",
            }}
          >
            {/* Product tagline */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: title ? "56px" : "48px",
                  height: title ? "56px" : "48px",
                  backgroundColor: "#333333",
                  borderRadius: "8px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Shield with Tie Icon */}
                <svg 
                  width={title ? "32" : "28"} 
                  height={title ? "32" : "28"} 
                  viewBox="0 0 24 24" 
                  fill="white"
                >
                  <path d="M12 2L3 6v7c0 4.5 3.5 8.5 9 11 5.5-2.5 9-6.5 9-11V6l-9-4z" />
                  <path d="M12 4L7 13h5v7l5-9h-5V4z" fill="#333333" />
                </svg>
              </div>
              <div
                style={{
                  color: "#999999",
                  fontSize: title ? "24px" : "20px",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                Real Incidents • Practical Tools • Ethical Leadership
              </div>
            </div>

            {/* Title */}
            <h1
              style={{
                color: "white",
                fontSize: title ? "86px" : "72px",
                fontWeight: 600,
                lineHeight: 1.1,
                margin: 0,
                letterSpacing: "-0.02em",
                paddingRight: title ? "100px" : "0",
              }}
            >
              {title || "What If You Were a CISO?"}
            </h1>

            {/* Description - only shown when no title parameter is provided */}
            {!title && (
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "24px",
                  margin: 0,
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.4,
                  maxWidth: "90%",
                }}
              >
                A comprehensive guide to modern security leadership, featuring real-world case studies and practical resources for aspiring CISOs.
              </p>
            )}
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "rgba(255, 255, 255, 0.4)",
              fontSize: title ? "20px" : "18px",
              paddingTop: title ? "40px" : "0",
            }}
          >
            <svg 
              width={title ? "18" : "16"} 
              height={title ? "18" : "16"} 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
            </svg>
            <span style={{ letterSpacing: "0.01em" }}>whatifyouwereciso.com</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: "Inter",
            data: await interRegular,
            weight: 400,
          },
          {
            name: "Inter",
            data: await interSemiBold,
            weight: 600,
          },
        ],
      }
    );
  } catch (error) {
    console.error('OG Image generation failed:', error);
    return new Response("Failed to generate the image", {
      status: 500,
    });
  }
}