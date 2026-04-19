import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
      }}
    >
      <svg
        width="62"
        height="62"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Project Liwanag star icon"
      >
        <defs>
          <linearGradient
            id="liwanagStarGradient"
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
          fill="url(#liwanagStarGradient)"
          stroke="#FFF9D9"
          strokeWidth="0.7"
          style={{
            filter: "drop-shadow(0 0 1px #FDE68A) drop-shadow(0 0 5px #F59E0B)",
          }}
        />
      </svg>
    </div>,
    size,
  );
}
