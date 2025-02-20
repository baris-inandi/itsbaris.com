import Image from "next/image";
import FollowMouseOnHover from "../shared/FollowMouseOnHover";

interface CityProps {
  children: React.ReactNode;
  src: string;
}

const City: React.FC<CityProps> = (props) => {
  return (
    <FollowMouseOnHover
      tooltip={
        <Image
          className="relative -translate-y-[85%]"
          alt="Istanbul"
          src={props.src}
          width={80}
          height={80}
        ></Image>
      }
    >
      {props.children}
    </FollowMouseOnHover>
  );
};

export default City;
