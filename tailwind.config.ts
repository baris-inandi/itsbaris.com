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
        "resp-xs": "calc(15px + 0.33vmin)",
        "resp-sm": "calc(15px + 0.45vmin)",
        "resp-base": "calc(15px + 0.6vmin)",
        "resp-lg": "calc(22px + 0.8vmin)",
        "resp-xl": "calc(22px + 1.4vmin)",
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
