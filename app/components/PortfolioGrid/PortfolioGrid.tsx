"use client";

import CardNext from "../shared/CardNext";

const data = [
  {
    url: "/read/monk",
    description: "At Monk Group, we deliver AI solutions that drive scalable growth.",
    subtitle: "The AI Agency of Today",
    slug: "monk",
  },
  {
    url: "/read/gaia",
    description:
      "Project GAIA is a theoretical space mission designed to move humanity to space.",
    subtitle: "Paper",
    slug: "gaia",
  },
  {
    url: "/read/ibps",
    description:
      "IBPS is a programming language you can run through its very own web-based IDE.",
    subtitle: "Compiler & IDE",
    slug: "ibps",
  },
  {
    url: "/read/skinscan",
    description: "Skinscan uses AI to detect skin conditions—all based on a photo.",
    subtitle: "Mobile App & AI Model",
    slug: "skinscan",
  },
  {
    url: "/read/threait",
    description:
      "Using AI to detect prohibited items in airport x-ray security screening",
    subtitle: "ThreAIT: a Preprint",
    slug: "threait",
    wide: false,
  },
  {
    url: "/read/sweepsweeper",
    description: "SweepSweeper is the classic minesweeper game with a twist.",
    subtitle: "Web Game",
    slug: "sweepsweeper",
  },
  {
    url: "/read/bfgo",
    description: "BFGO is an optimizing compiler, interpreter, and REPL.",
    subtitle: "BF Compiler",
    slug: "bfgo",
  },
  {
    url: "/read/mark",
    description:
      "Mark is a simple and opinionated markup language for quickly building static websites.",
    subtitle: "Programming Language",
    slug: "mark",
  },
];

const PortfolioGrid: React.FC = () => {
  return (
    <>
      <div className="py-5 text-resp-base font-medium">
        Here are some things I created:
      </div>
      <div className="m-auto grid grid-cols-1 gap-4 pb-2 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
        {data.map((post) => (
          <CardNext {...post} key={post.slug} />
        ))}
      </div>
    </>
  );
};

export default PortfolioGrid;
