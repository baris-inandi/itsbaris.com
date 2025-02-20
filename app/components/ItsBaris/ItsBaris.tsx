import ItsBarisLeft from "./ItsBarisLeft";
import ItsBarisRight from "./ItsBarisRight";
import MarqeeDeLafayette from "./MarqeeDeLafayette";

const ItsBaris: React.FC = () => {
  return (
    <div>
      <div className="flex w-full flex-col items-start justify-between gap-4 pb-10 pt-12 font-display text-resp-base leading-tight sm:flex-row sm:items-end">
        <ItsBarisLeft />
        <ItsBarisRight />
      </div>
      <MarqeeDeLafayette />
      <div className="py-5 text-resp-base font-medium">
        Here are some things I created:
      </div>
    </div>
  );
};

export default ItsBaris;
