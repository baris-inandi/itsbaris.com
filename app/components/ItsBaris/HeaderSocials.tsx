import Link from "next/link";

interface HeaderSocialsProps {}

const HeaderSocials: React.FC<HeaderSocialsProps> = () => {
  return (
    <div className="flex gap-1 font-medium text-black">
      <Link target="_blank" href="https://github.com/baris-inandi">
        GitHub
      </Link>
      /
      <Link target="_blank" href="https://linkedin.com/in/baris-inandi">
        LinkedIn
      </Link>
      /
      <Link target="_blank" href="https://instagram.com/barisinandi">
        Instagram
      </Link>
    </div>
  );
};

export default HeaderSocials;
