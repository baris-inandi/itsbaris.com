import Card from "../shared/Card";

interface PortfolioGridProps {}
const data = [
  {
    url: "/read/gaia",
    layout: "../../layouts/ReadLayout.astro",
    title: "Project GAIA",
    description: "A 50-page report on moving humanity to space.",
    img: "/cards/gaia.webp",
    index: 7,
    wide: true,
  },
  {
    url: "/read/ibps",
    layout: "../../layouts/ReadLayout.astro",
    title: "The IBPS Programming Language",
    description:
      "A compiler and online integrated development environment for my new programming language",
    index: 6,
    img: "/cards/ibps.webp",
  },
  {
    url: "/read/skinscan",
    layout: "../../layouts/ReadLayout.astro",
    title: "Skinscan",
    description: "Diagnosing skin conditions from your phone's camera.",
    index: 5,
    img: "/cards/skinscan.webp",
  },
  {
    url: "/read/threait",
    layout: "../../layouts/ReadLayout.astro",
    title: "ThreAIT: a Preprint",
    description:
      "Using AI to detect prohibited items in airport X-ray security screening",
    img: "/cards/threait.webp",
    index: 4,
    wide: false,
  },
  {
    url: "/read/sweepsweeper",
    layout: "../../layouts/ReadLayout.astro",
    title: "SweepSweeper",
    description: "Good old minesweeper. Written in Svelte and TypeScript.",
    index: 3,
    img: "/cards/sweepsweeper.webp",
  },
  {
    url: "/read/bfgo",
    layout: "../../layouts/ReadLayout.astro",
    title: "BF Programming Language Toolkit",
    description: "An overengineered BF language toolkit written in Go.",
    index: 2,
    img: "/cards/bfgo.webp",
  },
  {
    url: "/read/mark",
    layout: "../../layouts/ReadLayout.astro",
    title: "Mark",
    description: "An indented, simple, opinionated markup language for static websites.",
    index: 1,
    img: "/cards/mark.webp",
  },
];

const PortfolioGrid: React.FC<PortfolioGridProps> = () => {
  return (
    <div className="m-auto grid max-w-screen-xl grid-cols-1 md:grid-cols-2 gap-4 px-3 py-9 md:gap-7 lg:grid-cols-3 lg:px-0">
      {data
        .toSorted((a, b) => b.index - a.index)
        .map((post) => (
          <Card {...post} />
        ))}
    </div>
  );
};

export default PortfolioGrid;
