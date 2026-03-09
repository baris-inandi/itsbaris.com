import ItsBarisLeft from "./ItsBarisLeft";
import ItsBarisRight from "./ItsBarisRight";
import Marquis from "./Marquis";

const ItsBaris: React.FC = () => {
  return (
    <div>
      <div className="flex w-full flex-col items-start justify-between gap-4 pb-10 font-display text-resp-base leading-tight sm:flex-row sm:items-end">
        <ItsBarisLeft />
        <ItsBarisRight />
      </div>
      <Marquis />
    </div>
  );
};

export default ItsBaris;
