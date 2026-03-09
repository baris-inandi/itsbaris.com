"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import ItsBaris from "./components/ItsBaris/ItsBaris";
import PortfolioGrid from "./components/PortfolioGrid/PortfolioGrid";
import "./styles/homepage.css";

export default function Home() {
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [heroHeight, setHeroHeight] = useState(360);
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const heroNode = heroRef.current;
    if (!heroNode) return;

    const updateHeroHeight = () => {
      setHeroHeight(heroNode.offsetHeight);
    };

    updateHeroHeight();

    const resizeObserver = new ResizeObserver(updateHeroHeight);
    resizeObserver.observe(heroNode);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      <section
        className="relative px-6 md:px-12"
        style={{ minHeight: `calc(50dvh + ${heroHeight / 2}px)` }}
      >
        <div className="absolute inset-x-6 top-[50dvh] -translate-y-1/2 md:inset-x-12">
          <div ref={heroRef} className="mx-auto w-full max-w-screen-lg pb-10 md:pb-12">
            <ItsBaris />
            <button
              type="button"
              onClick={() => setIsPortfolioVisible((visible) => !visible)}
              className="mt-8 flex w-full items-center justify-between gap-6 rounded-full border border-stone-200 bg-transparent px-6 py-4 text-left transition hover:border-stone-300"
              aria-controls="portfolio-grid"
              aria-expanded={isPortfolioVisible}
            >
              <span className="font-display text-resp-sm text-stone-700">
                {isPortfolioVisible ? "Hide portfolio" : "See portfolio"}
              </span>
              <span className="text-right text-resp-xs text-dimmed">
                {isPortfolioVisible ? "Collapse selected projects" : "Reveal selected projects"}
              </span>
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence initial={false}>
        {isPortfolioVisible ? (
          <motion.section
            id="portfolio-grid"
            className="overflow-hidden px-6 md:px-12"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.2, delay: 0.08 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.38, ease: [0.4, 0, 1, 1] },
                opacity: { duration: 0.16 },
              },
            }}
          >
            <div className="mx-auto w-full max-w-screen-lg pt-1">
              <PortfolioGrid />
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
