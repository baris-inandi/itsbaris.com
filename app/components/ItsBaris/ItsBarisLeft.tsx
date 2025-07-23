import City from "../shared/City";
import ProfilePic from "./ProfilePic";

const ItsBarisLeft: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 text-left">
      <ProfilePic size={90} />
      <h1 className="pt-2 text-resp-xl font-semibold">{"Hello! It's Baris."}</h1>
      <div className="text-dimmed">
        <div>
          {"I'm a developer from "}
          <City identifier="istanbul-barisleft" cityName="istanbul">Istanbul</City>,
        </div>
        <div>
          currently based in <City identifier="london-barisleft" cityName="london">London</City> and{" "}
          <City identifier="boston-barisleft" cityName="boston">Boston</City>.
        </div>
      </div>
    </div>
  );
};

export default ItsBarisLeft;
