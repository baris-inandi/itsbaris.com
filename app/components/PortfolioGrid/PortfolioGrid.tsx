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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -14,
    transition: {
      duration: 0.22,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

const PortfolioGrid: React.FC = () => {
  return (
    <motion.div
      className="pb-12 md:pb-16"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.div
        className="grid grid-cols-1 gap-4 pb-2 md:grid-cols-2 md:gap-7"
        variants={containerVariants}
      >
        {data.map((post) => (
          <motion.div key={post.slug} variants={itemVariants}>
            <CardNext {...post} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PortfolioGrid;
