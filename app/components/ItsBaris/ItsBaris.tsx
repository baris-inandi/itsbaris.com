import BarisLink from "../shared/BarisLink";
import HeaderSocials from "./HeaderSocials";
import MarqeeDeLafayette from "./MarqeeDeLafayette";
import ProfilePic from "./ProfilePic";

const ItsBaris: React.FC = () => {
  return (
    <div>
      <div className="flex w-full flex-col items-start justify-between gap-4 pb-10 pt-12 font-display text-resp-base leading-tight sm:flex-row sm:items-end">
        <div className="flex flex-col gap-4 text-left">
          <ProfilePic size={90} />
          <h1 className="pt-2 text-resp-lg font-semibold">{"Hello! It's Baris."}</h1>
          <div className="text-dimmed">
            <p>{"I'm a developer from Istanbul, Turkey,"}</p>
            <p>currently based in London and Boston.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-left sm:text-right">
          <div className="flex flex-col items-start sm:items-end">
            <div className="text-dimmed">Find me on</div>
            <HeaderSocials />
          </div>
          <div>
            <span className="text-dimmed">See my </span>
            <BarisLink href="/resume">Resume</BarisLink>{" "}
            <span className="text-dimmed">to learn more about me.</span>
          </div>
        </div>
      </div>
      <MarqeeDeLafayette />
      <div className="py-5 text-resp-base font-medium">
        Here are some things I created:
      </div>
    </div>
  );
};

export default ItsBaris;
