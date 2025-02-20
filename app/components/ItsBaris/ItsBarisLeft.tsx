import City from "../shared/City";
import ProfilePic from "./ProfilePic";

const ItsBarisLeft: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 text-left">
      <ProfilePic size={90} />
      <h1 className="pt-2 text-resp-lg font-semibold">{"Hello! It's Baris."}</h1>
      <div className="text-dimmed">
        <div>
          {"I'm a developer from "}
          <City identifier="istanbul">Istanbul</City>,
        </div>
        <div>
          currently based in <City identifier="london">London</City> and{" "}
          <City identifier="boston">Boston</City>.
        </div>
      </div>
    </div>
  );
};

export default ItsBarisLeft;
