import type { Metadata } from "next";
import { sfDisplay, sfMono, sfText } from "./fonts";
import { HUGE_BARIS_FACE } from "./lib/hugeBarisFace";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Baris!",
  description: "I'm a passionate developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (process.env.NODE_ENV === "production") console.log(HUGE_BARIS_FACE);
  return (
    <html lang="en">
      <body
        className={`font-display antialiased ${sfText.variable} ${sfDisplay.variable} ${sfMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
