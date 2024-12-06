import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://itsbaris.com",
  output: "server",
  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [mdx(), sitemap(), tailwind()],
  redirects: {
    "/resume": "/resume.pdf",
    "/gemma":
      "https://itsbaris.com/file/baris_inandioglu_gemma_workshop.pdf",
  },
});

