import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "resp-xs": "calc(16px + 0.35vmin)",
        "resp-sm": "calc(16px + 0.45vmin)",
        "resp-base": "calc(17px + 0.6vmin)",
        "resp-lg": "calc(24px + 0.7vmin)",
        "resp-xl": "calc(28px + 1vmin)",
      },
      fontFamily: {
        sans: ["var(--font-sf-text)"],
        display: ["var(--font-sf-display)"],
        mono: ["var(--font-sf-mono)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dimmed: "rgb(130 123 117 / var(--tw-text-opacity, 1))",
      },
    },
  },
  plugins: [],
} satisfies Config;
