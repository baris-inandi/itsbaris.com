import BarisLink from "../shared/BarisLink";

const HeaderSocials: React.FC = () => {
  return (
    <div className="flex gap-1 font-medium">
      <BarisLink
        href="https://github.com/baris-inandi"
        hoverTooltip={{
          text: "@baris-inandi",
          color: "#A371F7",
          seed: 150519,
        }}
      >
        GitHub
      </BarisLink>
      /
      <BarisLink
        href="https://linkedin.com/in/baris-inandi"
        hoverTooltip={{
          text: "@baris-inandi",
          color: "#2D65C1",
          seed: 313131,
        }}
      >
        LinkedIn
      </BarisLink>
      /
      <BarisLink
        href="https://instagram.com/barisinandi"
        hoverTooltip={{
          text: "@barisinandi",
          color: "#D62977",
          seed: 2025,
        }}
      >
        Instagram
      </BarisLink>
    </div>
  );
};

export default HeaderSocials;
