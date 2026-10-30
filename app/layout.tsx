import type { Metadata } from "next";
import { sfDisplay, sfMono, sfText } from "./fonts";
import "./styles/globals.css";
import { OnMount } from "./components/shared/OnMount";

export const metadata: Metadata = {
  title: "Baris!",
  description: "I'm a passionate developer.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden font-display antialiased ${sfText.variable} ${sfDisplay.variable} ${sfMono.variable}`}
      >
        <OnMount />
        {children}
      </body>
    </html>
  );
}
