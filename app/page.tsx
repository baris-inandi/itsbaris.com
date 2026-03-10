"use client";

import { useLayoutEffect, useRef, useState } from "react";
import ItsBaris from "./components/ItsBaris/ItsBaris";
import PortfolioGrid from "./components/PortfolioGrid/PortfolioGrid";
import "./styles/homepage.css";

export default function Home() {
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
          </div>
        </div>
      </section>

      <section id="portfolio-grid" className="px-6 pb-12 md:px-12 md:pb-16">
        <div className="mx-auto w-full max-w-screen-lg pt-1">
          <PortfolioGrid />
        </div>
      </section>
    </main>
  );
}
