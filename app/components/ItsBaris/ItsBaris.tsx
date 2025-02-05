import Link from "next/link";
import HeaderSocials from "./HeaderSocials";
import ProfilePic from "./ProfilePic";

interface ItsBarisProps {}

const ItsBaris: React.FC<ItsBarisProps> = () => {
  return (
    <div className="text-responsive-normal flex w-full flex-col items-center gap-4 py-8 text-center font-display leading-tight text-stone-600">
      <h1 className="text-3xl font-medium text-black">Hello! It's Baris.</h1>
      <ProfilePic size={80} />
      <div className="pb-5 pt-1">
        <p>I am a developer from Istanbul, Turkey</p>
        <p>currently based in London.</p>
      </div>
      <div>
        <div>You can find me on:</div>
        <HeaderSocials />
      </div>
      <div>
        See my{" "}
        <Link className="font-medium text-black" href="/resume">
          Resume
        </Link>{" "}
        to learn more about me.
      </div>
    </div>
  );
};

export default ItsBaris;
