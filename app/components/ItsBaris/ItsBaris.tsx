import BarisLink from "../shared/BarisLink";
import HeaderSocials from "./HeaderSocials";
import ProfilePic from "./ProfilePic";

const ItsBaris: React.FC = () => {
  return (
    <div className="text-responsive-normal flex w-full flex-col items-start justify-between gap-4 py-8 font-display leading-tight sm:flex-row sm:items-end">
      <div className="flex flex-col gap-4 text-left">
        <ProfilePic size={80} />
        <h1 className="text-2xl font-semibold">{"Hello! It's Baris."}</h1>
        <div className="text-dimmed pt-1">
          <p>I am a developer from Istanbul, Turkey,</p>
          <p>currently based in London and Boston.</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-left sm:text-right">
        <div className="flex flex-col items-start sm:items-end">
          <div className="text-dimmed">You can find me on:</div>
          <HeaderSocials />
        </div>
        <div>
          <span className="text-dimmed">See my </span>
          <BarisLink href="/resume">Resume</BarisLink>{" "}
          <span className="text-dimmed">to learn more about me.</span>
        </div>
      </div>
    </div>
  );
};

export default ItsBaris;
