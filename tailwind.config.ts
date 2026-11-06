import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080d1c",
        surface: "#0f1630",
        raised: "#151e40",
        line: "#232d57",
        accent: "#7c5cff",
        mint: "#2dd4a7",
        amber: "#f5b83d",
        danger: "#ff6b7a",
        muted: "#94a0c8",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(124,92,255,.35), 0 12px 40px -12px rgba(124,92,255,.55)",
      },
    },
  },
  plugins: [],
};

export default config;
