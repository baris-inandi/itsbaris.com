import BarisLink from "../shared/BarisLink";
import HeaderSocials from "./HeaderSocials";

const ItsBarisRight: React.FC = () => {
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
