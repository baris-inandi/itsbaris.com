"use client";

import { motion } from "framer-motion";
import CardNext from "../shared/CardNext";

const data = [
  {
    slug: "gaia",
    title: "Project GAIA",
    description: "A 50-page report on moving humanity to space.",
    img: "/cards/gaia.webp",
  },
  {
    slug: "ibps",
    title: "The IBPS Programming Language",
    description:
      "A compiler and online integrated development environment for my new programming language.",
    img: "/cards/ibps.webp",
  },
  {
    slug: "skinscan",
    title: "Skinscan",
    description: "Diagnosing skin conditions from your phone's camera.",
    img: "/cards/skinscan.webp",
  },
  {
    slug: "threait",
    title: "ThreAIT: a Preprint",
    description:
      "Using AI to detect prohibited items in airport X-ray security screening.",
    img: "/cards/threait.webp",
  },
  {
    slug: "sweepsweeper",
    title: "SweepSweeper",
    description: "Good old minesweeper. Written in Svelte and TypeScript.",
    img: "/cards/sweepsweeper.webp",
  },
  {
    slug: "bfgo",
    title: "BF Programming Language Toolkit",
    description: "An overengineered BF language toolkit written in Go.",
    img: "/cards/bfgo.webp",
  },
  {
    slug: "mark",
    title: "Mark",
    description: "An indented, simple, opinionated markup language for static websites.",
    img: "/cards/mark.webp",
  },
];

const PortfolioGrid: React.FC = () => {
  return (
    <div className="pb-12 md:pb-16">
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 pb-4 sm:grid-cols-2 md:grid-cols-3">
        {data.map((post) => (
          <div key={post.slug}>
            <CardNext {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
