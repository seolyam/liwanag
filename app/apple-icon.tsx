import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
        borderRadius: 40,
      }}
    >
      <div
        style={{
          width: "82%",
          height: "82%",
          borderRadius: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#13162F",
        }}
      >
        <svg
          width="132"
          height="132"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Project Liwanag star icon"
        >
          <defs>
            <linearGradient
              id="liwanagStarGradientApple"
              x1="6"
              y1="2"
              x2="18"
              y2="21"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#FFF7C7" />
              <stop offset="0.45" stopColor="#FDE68A" />
              <stop offset="1" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
          <path
            d="M12 2.5L14.72 8.01L20.8 8.89L16.4 13.18L17.44 19.23L12 16.37L6.56 19.23L7.6 13.18L3.2 8.89L9.28 8.01L12 2.5Z"
            fill="url(#liwanagStarGradientApple)"
            stroke="#FFF9D9"
            strokeWidth="0.7"
            style={{
              filter:
                "drop-shadow(0 0 2px #FDE68A) drop-shadow(0 0 8px #F59E0B)",
            }}
          />
        </svg>
      </div>
    </div>,
    size,
  );
}
