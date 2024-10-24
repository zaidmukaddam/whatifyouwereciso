import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2A2A2A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,
          padding: 4,
        }}
      >
        <div
          style={{
            background: "#000000",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 100,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Shield and Tie Icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L3 6v7c0 4.5 3.5 8.5 9 11 5.5-2.5 9-6.5 9-11V6l-9-4z" />
            <path d="M12 4L7 13h5v7l5-9h-5V4z" fill="black" />
          </svg>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}