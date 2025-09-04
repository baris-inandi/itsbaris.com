import ItsBarisLeft from "./ItsBarisLeft";
import ItsBarisRight from "./ItsBarisRight";
import MarqeeDeLafayette from "./MarqeeDeLafayette";

const ItsBaris: React.FC = () => {
  return (
    <div>
      <div className="flex w-full flex-col items-start justify-between gap-4 pb-10 font-display text-resp-base leading-tight sm:flex-row sm:items-end">
        <ItsBarisLeft />
        <ItsBarisRight />
      </div>
      <MarqeeDeLafayette />
    </div>
  );
};

export default ItsBaris;
