import BarisLink from "../shared/BarisLink";
import HeaderSocials from "./HeaderSocials";

interface ItsBarisRightProps {
  compact?: boolean;
}

const ItsBarisRight: React.FC<ItsBarisRightProps> = ({ compact }) => {
  if (compact) {
    return (
      <div className="flex flex-row items-center justify-end gap-4 text-resp-base font-medium">
        <BarisLink
          href="https://github.com/baris-inandi"
          hoverTooltip={{ text: "@baris-inandi", color: "#A371F7" }}
        >
          GitHub
        </BarisLink>
        /
        <BarisLink
          href="https://linkedin.com/in/baris-inandi"
          hoverTooltip={{ text: "@baris-inandi", color: "#2D65C1" }}
        >
          LinkedIn
        </BarisLink>
        /
        <BarisLink
          href="https://instagram.com/barisinandi"
          hoverTooltip={{ text: "@barisinandi", color: "#D62977" }}
        >
          Instagram
        </BarisLink>
        /
        <BarisLink
          href="/resume"
          hoverTooltip={{ color: "#0DC97F", text: "Check it out!" }}
        >
          Resume
        </BarisLink>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 text-left sm:text-right">
      <div className="flex flex-col items-start sm:items-end">
        <div className="text-dimmed">Find me on</div>
        <HeaderSocials />
      </div>
      <div>
        <span className="text-dimmed">See my </span>
        <BarisLink
          hoverTooltip={{
            color: "#0DC97F",
            text: "Check it out!",
          }}
          href="/resume"
        >
          Resume
        </BarisLink>{" "}
        <span className="text-dimmed">to learn more about me.</span>
      </div>
    </div>
  );
};

export default ItsBarisRight;
