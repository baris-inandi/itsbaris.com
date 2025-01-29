import type { Metadata } from "next";
import { sfDisplay, sfMono, sfText } from "./fonts";
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
