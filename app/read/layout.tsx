import React from "react";
import ItsBarisRight from "../components/ItsBaris/ItsBarisRight";
import ProfilePic from "../components/ItsBaris/ProfilePic";

const CollapsedHeader = () => (
  <div className="flex w-full items-center justify-between py-4">
    {/* Left: Avatar + Greeting */}
    <div className="flex items-center gap-5">
      <ProfilePic size={60} />
      <span className="text-resp-xl font-semibold">Hello! It&apos;s Baris.</span>
    </div>
    {/* Right: Socials + Resume (compact) */}
    <div className="hidden flex-row items-center gap-4 md:flex">
      <ItsBarisRight compact />
    </div>
  </div>
);

export default function ReadLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-auto w-screen max-w-screen-xl px-6 py-8 md:px-12">
      <CollapsedHeader />
      <div>{children}</div>
    </div>
  );
}
