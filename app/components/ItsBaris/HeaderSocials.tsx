import BarisLink from "../shared/BarisLink";

const HeaderSocials: React.FC = () => {
  return (
    <div className="flex gap-1 font-medium">
      <BarisLink href="https://github.com/baris-inandi">GitHub</BarisLink>/
      <BarisLink href="https://linkedin.com/in/baris-inandi">LinkedIn</BarisLink>/
      <BarisLink href="https://instagram.com/barisinandi">Instagram</BarisLink>
    </div>
  );
};

export default HeaderSocials;
