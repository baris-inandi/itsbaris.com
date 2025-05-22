"use client";

import Card from "../shared/Card";

const data = [
  {
    url: "/read/monk",
    title: "Monk Group AI",
    description: "Transforming customer experience with AI.",
    img: "/cards/monk.webp",
    slug: "monk",
  },
  {
    url: "/read/gaia",
    title: "Project GAIA",
    description: "A 50-page report on moving humanity to space.",
    img: "/cards/gaia.webp",
    slug: "gaia",
  },
  {
    url: "/read/ibps",
    title: "The IBPS Programming Language",
    description:
      "A compiler and online integrated development environment for my new programming language",
    img: "/cards/ibps.webp",
    slug: "ibps",
  },
  {
    url: "/read/skinscan",
    title: "Skinscan",
    description: "Diagnosing skin conditions from your phone's camera.",
    img: "/cards/skinscan.webp",
    slug: "skinscan",
  },
  {
    url: "/read/threait",
    title: "ThreAIT: a Preprint",
    description:
      "Using AI to detect prohibited items in airport X-ray security screening",
    img: "/cards/threait.webp",
    slug: "threait",
    wide: false,
  },
  {
    url: "/read/sweepsweeper",
    title: "SweepSweeper",
    description: "Good old minesweeper. Written in Svelte and TypeScript.",
    img: "/cards/sweepsweeper.webp",
    slug: "sweepsweeper",
  },
  {
    url: "/read/bfgo",
    title: "BF Programming Language Toolkit",
    description: "An overengineered BF language toolkit written in Go.",
    img: "/cards/bfgo.webp",
    slug: "bfgo",
  },
  {
    url: "/read/mark",
    title: "Mark",
    description: "An indented, simple, opinionated markup language for static websites.",
    img: "/cards/mark.webp",
    slug: "mark",
  },
];

const PortfolioGrid: React.FC = () => {
  return (
    <div className="m-auto grid grid-cols-1 gap-2 pb-2 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-4">
      {data.map((post) => (
        <Card {...post} key={post.slug} />
      ))}
    </div>
  );
};

export default PortfolioGrid;
