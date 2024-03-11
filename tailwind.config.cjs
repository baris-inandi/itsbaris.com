/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        "Rubik",
        "Helvetica Neue",
        "Arial",
        "Lucida Grande",
        "sans-serif",
      ],
      mono: [
        "Roboto Mono",
        "Menlo",
        "Cascadia Code",
        "Fira Code",
        "monospace",
      ],
    },
  },
  plugins: [],
};
