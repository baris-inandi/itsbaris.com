import localFont from "next/font/local";

export const sfDisplay = localFont({
  variable: "--font-sf-display",
  src: [
    {
      path: "./fonts/sf-pro-display-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display-regularitalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/sf-pro-display-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display-mediumitalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/sf-pro-display-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display-bolditalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/sf-pro-display-black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display-blackitalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
});

export const sfText = localFont({
  variable: "--font-sf-text",
  src: [
    {
      path: "./fonts/sf-pro-text-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-text-regularitalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/sf-pro-text-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-text-mediumitalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/sf-pro-text-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-text-bolditalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export const sfMono = localFont({
  variable: "--font-sf-mono",
  src: [
    {
      path: "./fonts/sfmono-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/sfmono-regularitalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/sfmono-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/sfmono-mediumitalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/sfmono-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/sfmono-bolditalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});
